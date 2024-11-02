import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
    email: string;
    phone: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    email,
    phone,
    message,
}) => (
    <div>
            <h1>Welcome, {firstName}!</h1>   {" "}
        <p>We're excited to connect with you!</p>   {" "}
        <p>
            <strong>Email:</strong> {email}
        </p>
           {" "}
        <p>
            <strong>Phone Number:</strong> {phone}
        </p>
           {" "}
        <p>
            <strong>Message:</strong> {message}
        </p>
            <p>Thank you for reaching out. We’ll be in touch soon!</p> {" "}
    </div>
);
