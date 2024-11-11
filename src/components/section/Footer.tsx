import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="transform transition-all duration-300 hover:translate-x-2">
                        <h3 className="text-3xl font-bold mb-4">SAPMATE</h3>
                        <p className="text-blue-100 text-lg">
                            Empowering careers through expert SAP training
                        </p>
                        <address className="text-blue-100 mt-4 not-italic">
                            Dubai Internet City
                            <br />
                            DIC Building 4, Sheikh Zayed Road
                            <br />
                            Dubai, UAE
                        </address>
                    </div>
                    <div className="text-right">
                        <p className="text-blue-100">
                            © 2024 SAPMATE. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
