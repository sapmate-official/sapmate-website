import React from 'react';
import { 
  // Briefcase, 
  Award, 
  Users, 
  Star, 
  BookOpen,
  MessageCircle,
  Building,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const InstructorProfile = () => {
  const experience = [
    {
      company: "Capgemini",
      role: "Lead SAP Integration Architect",
      duration: "2018 - Present",
      description: "Leading complex SAP integration projects and mentoring teams in SAP CPI implementation."
    },
    {
      company: "Accenture",
      role: "Senior SAP Consultant",
      duration: "2015 - 2018",
      description: "Specialized in SAP PI/PO to CPI migration and enterprise integration projects."
    },
    {
      company: "IBM",
      role: "SAP Integration Consultant",
      duration: "2012 - 2015",
      description: "Handled critical integration scenarios for Fortune 500 clients."
    }
  ];

  const certifications = [
    "SAP Certified Development Associate - Cloud Integration",
    "SAP Certified Technology Associate - SAP Cloud Platform",
    "SAP Certified Development Specialist - PI 7.5",
    "AWS Certified Solutions Architect"
  ];

  const stats = [
    { icon: Users, value: "1500+", label: "Students Taught" },
    { icon: Star, value: "4.8", label: "Average Rating" },
    { icon: BookOpen, value: "55", label: "Course Modules Created" },
    { icon: MessageCircle, value: "2000+", label: "Student Reviews" }
  ];

  const expertise = [
    "SAP Cloud Platform Integration",
    "Integration Architecture",
    "API Management",
    "Enterprise Integration Patterns",
    "Microservices Architecture",
    "B2B Integration"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Profile Card */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative mb-4">
                      <Image
                        src="https://res.cloudinary.com/dwxm42izp/image/upload/v1734501815/bqe1adycpwqtilgzh59n.png"
                        alt="Instructor"
                        width={128}
                        height={128}
                        className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-blue-600">
                          Lead Instructor
                        </Badge>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                    Instructor
                    </h2>
                    <p className="text-gray-600">
                      SAP Integration Expert & Lead Architect
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                        <stat.icon className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                        <div className="font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Expertise Areas */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  About the Instructor
                </h3>
                <p className="text-gray-700 mb-6">
                  With over 12 years of experience in SAP integration technologies, I&apos;ve helped 
                  hundreds of organizations implement successful integration solutions. My passion 
                  lies in simplifying complex integration concepts and helping students master 
                  SAP Cloud Platform Integration through practical, hands-on learning.
                </p>
                <p className="text-gray-700">
                  Having worked with Fortune 500 companies across industries, I bring real-world 
                  scenarios and best practices into my teaching. My goal is to not just teach 
                  the technology, but to prepare you for real-world implementation challenges.
                </p>
              </CardContent>
            </Card>

            {/* Professional Experience */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Building className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {exp.role}
                        </h4>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <span>{exp.company}</span>
                          <ChevronRight className="w-4 h-4 mx-1" />
                          <span>{exp.duration}</span>
                        </div>
                        <p className="text-gray-700">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Certifications & Achievements
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-900">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Teaching Philosophy */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Teaching Philosophy
                </h3>
                <p className="text-gray-700">
                  My teaching approach focuses on practical, hands-on learning. I believe in 
                  teaching not just the &apos;how&apos; but also the &apos;why&apos; behind SAP integration concepts. 
                  Every lecture is designed to build your confidence and prepare you for real-world 
                  scenarios you&apos;ll encounter in your career.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export { InstructorProfile };