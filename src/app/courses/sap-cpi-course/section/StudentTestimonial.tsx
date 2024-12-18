import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ThumbsUp,
  Building,
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StudentTestimonials = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Shweta Vats",
      role: "SAP CPI Consultant",
      company: "Capgemini",
      rating: 5,
      image: "https://res.cloudinary.com/dwxm42izp/image/upload/v1732085518/WhatsApp_Image_2024-11-18_at_21.33.02_dccbf2dd_qdzlby.jpg",
      comment: "The comprehensive SAP CPI training at Sapmate transformed my career. The practical approach and real-world projects gave me the confidence to tackle complex integration scenarios. Landed a role at Capgemini with a 33 LPA package!",
      date: "2 weeks ago",
      helpful: 45,
      package: "₹33 LPA",
      previousRole: "Fresher",
      course: "SAP CPI Complete Course",
      verifiedPurchase: true
    },
    {
      id: 2,
      name: "Mehboob Azam",
      role: "SF Employee Central Consultant",
      company: "TCS",
      rating: 5,
      image: "https://res.cloudinary.com/diacb8luh/image/upload/v1732391726/oswyas6mifyxi9oe0ouk.jpg",
      comment: "The expert guidance and hands-on practice sessions were invaluable. The instructors ensured we understood every concept thoroughly. Successfully placed at TCS with a 12 LPA package after completing the course.",
      date: "1 month ago",
      helpful: 38,
      package: "₹12 LPA",
      previousRole: "Technical Support",
      course: "SAP CPI with SuccessFactors",
      verifiedPurchase: true
    },
    {
      id: 3,
      name: "Ankita Singh",
      role: "SAP CPI Consultant",
      company: "Accenture",
      rating: 5,
      image: "https://res.cloudinary.com/dwxm42izp/image/upload/v1733346961/kgppqxjzai34qyroy5ow.jpg",
      comment: "The course material was extremely well-structured and the projects helped me understand real-world integration scenarios. The placement support was excellent - now working at Accenture with a 13 LPA package.",
      date: "2 months ago",
      helpful: 42,
      package: "₹13 LPA",
      previousRole: "Java Developer",
      course: "SAP CPI Complete Course",
      verifiedPurchase: true
    }
  ];

  const successStories = [
    {
      name: "Julio Alvarez",
      image: "https://res.cloudinary.com/diacb8luh/image/upload/v1732392941/prhyu0yfrqddzaq6xlcj.jpg",
      role: "SAP CPI Consultant",
      company: "American Movil",
      story: "After completing the course, I secured a position at American Movil with a package of 17,711 USD. The practical knowledge gained during training was invaluable.",
      package: "$17,711",
      location: "Mexico"
    },
    {
      name: "Irina Slobodchikova",
      image: "https://res.cloudinary.com/dwxm42izp/image/upload/v1732459253/am3if3ewmzonq9apeadt.jpg",
      role: "SAP SuccessFactors Consultant",
      company: "EY",
      story: "The comprehensive training helped me land my dream role at EY. Now working as a SuccessFactors Consultant with a package of 16,534 USD.",
      package: "$16,534",
      location: "Poland"
    }
  ];

  const stats = [
    { label: "Average Rating", value: "4.8" },
    { label: "Students Placed", value: "1000+" },
    { label: "Reviews", value: "800+" },
    { label: "Countries", value: "25+" }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our community of successful SAP professionals who have transformed their careers
          </p>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Success Stories Carousel */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden">
            <div className="flex">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <Card className="border-none shadow-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-8 text-white">
                        <div className="md:w-1/3">
                          <img
                            src={story.image}
                            alt={story.name}
                            className="w-48 h-48 rounded-full border-4 border-white shadow-lg mx-auto"
                          />
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                          <Quote className="w-12 h-12 mb-4 mx-auto md:mx-0 opacity-50" />
                          <p className="text-xl mb-6">{story.story}</p>
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold">{story.name}</h3>
                            <p className="text-blue-200">{story.role} at {story.company}</p>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                              <Badge className="bg-white/20">
                                Package: {story.package}
                              </Badge>
                              <Badge className="bg-white/20">
                                {story.location}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            <button
              onClick={() => setCurrentSlide(c => (c > 0 ? c - 1 : successStories.length - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentSlide(c => (c < successStories.length - 1 ? c + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Detailed Reviews */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              Student Reviews
            </h3>
            <div className="flex gap-2">
              <button
          onClick={() => setActiveTab('recent')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'recent' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}
              >
          Recent
              </button>
              <button
          onClick={() => setActiveTab('highest')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'highest' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}
              >
          Highest Rated
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Review Header */}
                    <div className="md:w-1/4">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-24 h-24 rounded-full mb-4"
                        />
                        <h4 className="font-semibold text-gray-900">
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {review.role}
                        </p>
                        <Badge className="bg-blue-50 text-blue-700">
                          {review.company}
                        </Badge>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="md:w-3/4">
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">
                          {review.date}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-6">
                        {review.comment}
                      </p>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Briefcase className="w-4 h-4" />
                          <span>Previous: {review.previousRole}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Building className="w-4 h-4" />
                          <span>Package: {review.package}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{review.course}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        {review.verifiedPurchase && (
                          <Badge variant="secondary">
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export {StudentTestimonials};