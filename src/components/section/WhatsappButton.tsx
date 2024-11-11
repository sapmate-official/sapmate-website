import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.div),
    { ssr: false, loading: () => null }
);

const WhatsAppButton = () => {
    const [isClient, setIsClient] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setIsAnimated(true); // Immediately set to animated state
    }, []);

    useEffect(() => {
        if (!isAnimated) return;

        const interval = setInterval(() => {
            setIsExpanded((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAnimated]);

    if (!isClient) return null;

    return (
        <MotionDiv
            initial={{ opacity: 1 }}
            onClick={() => window.location.href = "https://wa.me/919830334496"}
            className="pr-4 md:pr-0"
        >
            <MotionDiv
                className="flex items-center cursor-pointer group h-12"
                animate={{
                    width: isExpanded ? "auto" : "48px",
                    backgroundColor: isExpanded ? "white" : "#25D366",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                initial={false}
                style={{
                    borderRadius: "24px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div className={`p-3 rounded-full ${isExpanded ? "bg-[#25D366]" : ""}`}>
                    <Image src="/whatsappicon.png" width={22} height={22} alt="whatsapp" />
                </div>
                <MotionDiv
                    animate={{
                        width: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                        marginRight: isExpanded ? "12px" : "0px",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden whitespace-nowrap"
                >
                    <span className="text-[#25D366] font-semibold px-2">
                        Chat with us
                    </span>
                </MotionDiv>
            </MotionDiv>
        </MotionDiv>
    );
};

export default WhatsAppButton;