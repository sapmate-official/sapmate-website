import React from "react";
import { PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VideoTestimonialSection = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const testimonialData = {
        studentName: "Mohan Kumar",
        role: "SAP Consultant",
        company: "Tech Solutions Inc.",
        thumbnailUrl:
            "https://res.cloudinary.com/dwxm42izp/image/upload/v1735547000/wt4oanfsyjwi77rz6ukn.jpg", // Replace with actual thumbnail
        videoId: "o21IL-3AAh0",
        quote: "This course provided hands-on SAP experience and a strong foundation. The assignments were incredibly useful for practice.",
    };

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <div className="w-full bg-white py-8 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Responsive heading section */}
                <div className="text-center mb-6 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4 px-4">
                        Hear from Our Successful Students
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 px-4">
                        Real stories from professionals who transformed their
                        careers with our training
                    </p>
                </div>

                {/* Responsive card container */}
                <div className="mx-auto max-w-3xl">
                    <Card className="overflow-hidden bg-white shadow-xl rounded-lg sm:rounded-2xl">
                        <CardContent className="p-0">
                            <div className="relative">
                                {!isPlaying ? (
                                    <div className="relative">
                                        {/* Responsive thumbnail container */}
                                        <div className="relative aspect-video bg-gray-100">
                                            <img
                                                src={
                                                    testimonialData.thumbnailUrl
                                                }
                                                alt="Video thumbnail"
                                                className="w-full h-full object-cover"
                                            />
                                            <div
                                                className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group cursor-pointer"
                                                onClick={handlePlayVideo}
                                            >
                                                <PlayCircle className="w-12 h-12 sm:w-20 sm:h-20 text-white opacity-90 group-hover:scale-110 transition-transform duration-200" />
                                            </div>
                                        </div>

                                        {/* Quote overlay - only visible on larger screens */}
                                        <div className="hidden sm:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                                            <blockquote className="text-white text-xl font-medium">
                                                &quot;{testimonialData.quote}&quot;
                                            </blockquote>
                                            <div className="mt-4 text-white">
                                                <p className="font-semibold text-base">
                                                    {
                                                        testimonialData.studentName
                                                    }
                                                </p>
                                                <p className="text-sm opacity-90">
                                                    {testimonialData.role} at{" "}
                                                    {testimonialData.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Responsive video container
                                    <div className="aspect-video w-full">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${testimonialData.videoId}?autoplay=1`}
                                            title="Student Testimonial"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Mobile-only quote section */}
                    <div className="block sm:hidden mt-6 px-1">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <blockquote className="text-gray-800 text-base">
                                &quot;{testimonialData.quote}&quot;
                            </blockquote>
                            <div className="mt-3 border-t border-gray-200 pt-3">
                                <p className="font-semibold text-gray-900">
                                    {testimonialData.studentName}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {testimonialData.role} at{" "}
                                    {testimonialData.company}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoTestimonialSection;
