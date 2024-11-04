import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
import { z } from "zod";
import User from "@/models/User";
import connectToDatabase from "@/lib/mongoose";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/Emailtemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(1, "Message must be at least 10 characters"),
});

// const emailConfig = {
//     from: process.env.SMTP_FROM_EMAIL,
//     to: "gpampa138@gmail.com",
//     cc: "parambrataghosh26@gmail.com",
// };

// const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: parseInt(process.env.SMTP_PORT || "587"),
//     secure: process.env.SMTP_PORT == "465" ? true : false,
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//     },
// });

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        // Parse the request body
        const body = await req.json();

        // Validate the form data
        const formData = contactFormSchema.parse(body);

        // const mailOptions = {
        //     ...emailConfig,
        //     subject: `New Contact Form Submission from ${formData.name}`,
        //     html: `
        //         <h2>New Contact Form Submission</h2>
        //         <p><strong>Name:</strong> ${formData.name}</p>
        //         <p><strong>Email:</strong> ${formData.email}</p>
        //         <p><strong>Phone:</strong> ${formData.phone}</p>
        //         <p><strong>Message:</strong></p>
        //         <p>${formData.message}</p>
        //     `,
        //     text: `
        //         New Contact Form Submission

        //         Name: ${formData.name}
        //         Email: ${formData.email}
        //         Phone: ${formData.phone}
        //         Message: ${formData.message}
        //     `,
        // };

        // await transporter.sendMail(mailOptions);
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["gpampa138@gmail.com"],
            cc: ["parambrataghosh26@gmail.com"],
            subject: "Request for service",
            react: EmailTemplate({
                firstName: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            }),
        });

        console.log(data, error);

        const user = new User({
            name: formData.name,
            email: formData.email,
            phonenumber: formData.phone,
            message: formData.message,
        });
        await user.save();

        return NextResponse.json(
            {
                message:
                    "Thank you for your message. We will get back to you soon!",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    error: "Validation error",
                    details: error.errors,
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
