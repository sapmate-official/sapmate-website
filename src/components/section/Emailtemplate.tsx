import React from "react";

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
    <div style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e1e1e1',
    }}>
        {/* Header */}
        <div style={{
            backgroundColor: '#1a365d',
            color: 'white',
            padding: '20px',
            borderRadius: '6px 6px 0 0',
            marginBottom: '20px',
            textAlign: 'center' as const,
        }}>
            <h1 style={{
                margin: '0',
                fontSize: '24px',
                fontWeight: '600',
            }}>
                New Contact Request
            </h1>
        </div>
        {/* Main Content */}
        <div style={{
            padding: '0 20px',
        }}>
            <div style={{
                backgroundColor: '#f8fafc',
                padding: '15px',
                borderRadius: '6px',
                marginBottom: '20px',
            }}>
                <h2 style={{
                    color: '#1a365d',
                    fontSize: '20px',
                    marginTop: '0',
                    marginBottom: '15px',
                }}>
                    Contact Details
                </h2>
                <div style={{
                    marginBottom: '15px',
                }}>
                    <p style={{
                        fontSize: '16px',
                        margin: '0 0 5px 0',
                        color: '#4a5568',
                    }}>
                        <strong style={{ color: '#2d3748' }}>Name:</strong> {firstName}
                    </p>
                </div>
                <div style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    padding: '10px',
                    marginBottom: '15px',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                        <p style={{
                            fontSize: '16px',
                            margin: '0',
                            color: '#4a5568',
                        }}>
                            <strong style={{ color: '#2d3748' }}>Email:</strong> {email}
                        </p>
                        
                    </div>
                </div>
                <div style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    padding: '10px',
                    marginBottom: '15px',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                        <p style={{
                            fontSize: '16px',
                            margin: '0',
                            color: '#4a5568',
                        }}>
                            <strong style={{ color: '#2d3748' }}>Phone:</strong> {phone}
                        </p>
                        
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: '#f8fafc',
                padding: '15px',
                borderRadius: '6px',
                marginBottom: '20px',
            }}>
                <h2 style={{
                    color: '#1a365d',
                    fontSize: '20px',
                    marginTop: '0',
                    marginBottom: '15px',
                }}>
                    Message
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    color: '#4a5568',
                    margin: '0',
                    whiteSpace: 'pre-wrap',
                }}>
                    {message}
                </p>
            </div>
        </div>
        {/* Footer */}
        <div style={{
            borderTop: '1px solid #e1e1e1',
            marginTop: '20px',
            paddingTop: '20px',
            textAlign: 'center' as const,
            color: '#718096',
        }}>
            <p style={{
                fontSize: '14px',
                margin: '0',
            }}>
                This email was sent from your contact form. Please respond within 24 hours.
            </p>
        </div>
    </div>
);

export default EmailTemplate;