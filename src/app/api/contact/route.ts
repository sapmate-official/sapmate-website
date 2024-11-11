import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import User from "@/models/User";
import connectToDatabase from "@/lib/mongoose";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/section/Emailtemplate";

interface MongoDBError extends Error {
    code?: number;
    keyPattern?: Record<string, number>;
    keyValue?: Record<string, unknown>;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(1, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const formData = contactFormSchema.parse(body);

        // Try to save user first to check for duplicates
        try {
            const user = new User({
                name: formData.name,
                email: formData.email,
                phonenumber: formData.phone,
                message: formData.message,
            });
            await user.save();
        } catch (dbError) {
            // Handle duplicate email error
            if (dbError instanceof Error && (dbError as MongoDBError).code === 11000) {
                return NextResponse.json(
                    { 
                        status: "error",
                        message: "This email is already in use. Please use a different email." 
                    },
                    { status: 409 }
                );
            }
            throw dbError; // Re-throw other database errors
        }

        // Only send email if user save was successful
        const {  error } = await resend.emails.send({
            from: "Param@sapmate.com",
            to: ["kabir.khan@sapmate.com"],
            cc: ["sadaf.salam@sapmate.com"],
            subject: "Request for service",
            react: EmailTemplate({
                firstName: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            }),
        });

        if (error) {
            console.error("Email sending error:", error);
            throw new Error("Failed to send email");
        }

        return NextResponse.json(
            {
                status: "success",
                message: "Thank you for your message. We will get back to you soon!"
            },
            { status: 200 }
        );

    } catch (error: unknown) {
        console.error("Contact form error:", error);
        
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    status: "error",
                    message: "Validation error",
                    details: error.errors,
                },
                { status: 400 }
            );
        }
        
        return NextResponse.json(
            { 
                status: "error",
                message: "Failed to send message. Please try again later." 
            },
            { status: 500 }
        );
    }
}