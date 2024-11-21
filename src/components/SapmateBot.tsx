import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

// Define types
type Message = {
    text: string;
    isBot: boolean;
};

type CourseInfo = {
    question: string;
    answer: string;
};


const SapmateBot = 
    () => {
        const [isOpen, setIsOpen] = useState(false);
        const [messages, setMessages] = useState<Message[]>([]);
        const [inputText, setInputText] = useState("");
        const [showSuggestions, setShowSuggestions] = useState(true);

        // Predefined Q&A based on the document
        const courseInfo: CourseInfo[] = [
            {
                question: "What SAP courses do you offer?",
                answer: "We offer four main programs: 1. SAP CPI with SuccessFactors Job Ready Program 2. Interview Preparation for SAP CPI 3. SAP SuccessFactors Employee Central Job Ready Program 4. SAP SuccessFactors Onboarding Job Ready Program",
            },
            {
                question: "Tell me about the SAP CPI program",
                answer: "The SAP CPI with SuccessFactors Job Ready Program covers SAP Cloud Platform Integration fundamentals and advanced concepts. Key highlights include: SAP CPI architecture, integration with SuccessFactors modules, building integration flows, error handling, and best practices for SAP integration projects.",
            },
            {
                question:
                    "What's included in the Interview Preparation course?",
                answer: "The Interview Preparation program includes resume review, mock interviews with SAP experts, focused practice on frequently asked questions, and scenario-based problems. It covers technical and HR rounds with expert feedback to refine your approach.",
            },
            {
                question: "What is the Employee Central program about?",
                answer: "The SAP SuccessFactors Employee Central Job Ready Program covers comprehensive employee data management, time-off management, workflows, reporting and analytics, and role-based permissions. It prepares you for SAP SuccessFactors certification with hands-on practice.",
            },
            {
                question: "Tell me about the Onboarding program",
                answer: "The SAP SuccessFactors Onboarding Job Ready Program focuses on Onboarding 2.0 configuration, setting up templates, managing new hire processes, and integration with other SuccessFactors modules. It provides hands-on experience with real-world projects.",
            },
        ];

        const suggestedQuestions = courseInfo.map((info) => info.question);

        const handleSend = () => {
            if (!inputText.trim()) return;

            const userMessage: Message = { text: inputText, isBot: false };
            setMessages((prev) => [...prev, userMessage]);

            // Find matching answer
            const matchingInfo = courseInfo.find(
                (info) =>
                    info.question
                        .toLowerCase()
                        .includes(inputText.toLowerCase()) ||
                    inputText
                        .toLowerCase()
                        .includes(info.question.toLowerCase())
            );

            const botResponse: Message = {
                text: matchingInfo
                    ? matchingInfo.answer
                    : "I can help you with information about our SAP courses. Please try asking about specific programs or choose from the suggested questions.",
                isBot: true,
            };

            setTimeout(() => {
                setMessages((prev) => [...prev, botResponse]);
                setShowSuggestions(true);
            }, 500);

            setInputText("");
            setShowSuggestions(false);
        };

        const handleQuestionClick = (question: string) => {
            setInputText(question);
            setShowSuggestions(false);
        };

        return (
            <div className="fixed bottom-4 right-4 z-50">
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
                    >
                        <MessageCircle className="w-6 h-6" />
                    </button>
                )}

                {isOpen && (
                    <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
                        {/* Header */}
                        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                            <h3 className="font-semibold">
                                Sapmate Course Assistant
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:text-gray-200"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${
                                        message.isBot
                                            ? "justify-start"
                                            : "justify-end"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${
                                            message.isBot
                                                ? "bg-gray-100 text-gray-800"
                                                : "bg-blue-600 text-white"
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}

                            {showSuggestions && messages.length === 0 && (
                                <div className="space-y-2">
                                    <p className="text-gray-600 text-sm">
                                        Suggested questions:
                                    </p>
                                    {suggestedQuestions.map(
                                        (question, index) => (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    handleQuestionClick(
                                                        question
                                                    )
                                                }
                                                className="block w-full text-left text-sm text-blue-600 hover:bg-gray-100 p-2 rounded"
                                            >
                                                {question}
                                            </button>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) =>
                                        setInputText(e.target.value)
                                    }
                                    onKeyPress={(e) =>
                                        e.key === "Enter" && handleSend()
                                    }
                                    placeholder="Ask about our SAP courses..."
                                    className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    onClick={handleSend}
                                    className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
;
export default SapmateBot;
