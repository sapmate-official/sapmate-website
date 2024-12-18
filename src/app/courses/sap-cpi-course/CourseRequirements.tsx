import React from 'react';
import { 
  CheckCircle, 
  AlertCircle, 
  Laptop, 
  GraduationCap,
  BookOpen,
  Brain,
  Timer,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CourseRequirements = () => {
  const essentialRequirements = [
    {
      icon: GraduationCap,
      title: "Educational Background",
      description: "Any graduate with basic computer knowledge. Technical background is helpful but not mandatory.",
      required: true
    },
    {
      icon: Laptop,
      title: "System Requirements",
      description: "Computer with minimum 8GB RAM, stable internet connection for accessing SAP Cloud Platform.",
      required: true
    },
    {
      icon: BookOpen,
      title: "Language Proficiency",
      description: "Basic English proficiency for understanding technical concepts and documentation.",
      required: true
    },
    {
      icon: Brain,
      title: "Analytical Skills",
      description: "Basic problem-solving ability and logical thinking skills.",
      required: true
    }
  ];

  const recommendedSkills = [
    {
      skill: "Basic Programming Concepts",
      level: "Beginner",
      helpful: true,
      description: "Understanding of basic programming concepts helps in learning Groovy scripting."
    },
    {
      skill: "XML Knowledge",
      level: "Beginner",
      helpful: true,
      description: "Basic understanding of XML structure and syntax is beneficial."
    },
    {
      skill: "Integration Basics",
      level: "Beginner",
      helpful: true,
      description: "Basic knowledge of APIs and web services is advantageous but not required."
    },
    {
      skill: "SAP Background",
      level: "None",
      helpful: false,
      description: "No prior SAP experience required. Course covers all concepts from basics."
    }
  ];

  const timeCommitment = [
    {
      type: "Live Sessions",
      hours: "2-3 hours",
      frequency: "3 times per week",
      description: "Interactive sessions with instructors"
    },
    {
      type: "Self-Study",
      hours: "4-5 hours",
      frequency: "per week",
      description: "Assignments and practice"
    },
    {
      type: "Projects",
      hours: "8-10 hours",
      frequency: "per project",
      description: "Real-world implementation projects"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Course Requirements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know before starting your SAP CPI journey
          </p>
        </div>

        {/* Essential Requirements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {essentialRequirements.map((req, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <req.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {req.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {req.description}
                  </p>
                  {req.required && (
                    <Badge className="mt-4 bg-blue-100 text-blue-800">
                      Required
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Recommended Skills */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Recommended Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recommendedSkills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {skill.helpful ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-blue-500 mt-1" />
                    )}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900">
                          {skill.skill}
                        </h4>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time Commitment */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Time Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {timeCommitment.map((time, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Timer className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900">
                          {time.type}
                        </h4>
                        <Badge className="bg-blue-50 text-blue-700">
                          {time.hours}
                        </Badge>
                        <span className="text-sm text-gray-600">
                          {time.frequency}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {time.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Tips */}
        <Card className="mt-8 border-none shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tips for Success
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Dedicate regular time for practice and assignments
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Participate actively in live sessions
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Complete all hands-on exercises
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Engage with fellow learners and instructors
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export {CourseRequirements};