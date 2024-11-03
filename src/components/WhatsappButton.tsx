import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import motion components
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

        const readyTimer = setTimeout(() => {
            setIsAnimated(true);
        }, 5000);

        return () => clearTimeout(readyTimer);
    }, []);

    useEffect(() => {
        if (!isAnimated) return;

        const interval = setInterval(() => {
            setIsExpanded((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAnimated]);

    const StaticButton = () => (
        <div
            className="cursor-pointer"
            onClick={() =>
                (window.location.href = "https://wa.me/919830334496")
            }
        >
            <div className="p-3 rounded-full bg-[#25D366] shadow-md">
                <MessageCircle className="w-6 h-6 text-white" />
            </div>
        </div>
    );

    if (!isClient) return null;
    if (!isAnimated) return <StaticButton />;

    return (
        <MotionDiv
            initial={{ opacity: 1 }}
            onClick={() =>
                (window.location.href = "https://wa.me/919830334496")
            }
        >
            <MotionDiv
                className="flex items-center cursor-pointer group"
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
                <div
                    className={`p-3 rounded-full ${
                        isExpanded ? "bg-[#25D366]" : ""
                    }`}
                >
                    <MessageCircle className="w-6 h-6 text-white" />
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
