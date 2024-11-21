import React, { useState, useEffect, useCallback } from 'react';
import { Book, Users, Clock, Trophy, PlayCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

// TypeScript interfaces
interface Highlight {
  icon: React.ReactNode;
  text: string;
}

interface Course {
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  highlights: Highlight[];
  tag?: string;
  routerpath: string
}

interface CourseCardProps {
  course: Course;
  index: number;
  isVisible: boolean;
  routerpath: string
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index, isVisible,routerpath }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card
        className={`group h-full overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg transition-all duration-500 ${
          isHovered ? 'scale-[1.02] shadow-xl' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6">
          {/* Course tag */}
          {course.tag && (
            <Badge className="mb-4 bg-blue-500/10 text-blue-700 hover:bg-blue-500/20">
              {course.tag}
            </Badge>
          )}

          {/* Course icon with animated background */}
          <div className="relative mb-6">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br transition-all duration-500 ${
              isHovered ? 'from-blue-600 to-indigo-600 scale-110' : 'from-blue-500 to-blue-600'
            }`}>
              <Book className="w-8 h-8 text-white" />
            </div>
            <div className={`absolute inset-0 bg-blue-400 blur-xl opacity-20 transition-opacity duration-500 ${
              isHovered ? 'opacity-40' : ''
            }`} />
          </div>

          {/* Course title and description */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {course.title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-2">
            {course.description}
          </p>

          {/* Course metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-2 rounded-lg bg-gray-50">
              <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="text-sm text-gray-600">{course.duration}</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-gray-50">
              <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="text-sm text-gray-600">{course.students}+ students</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-gray-50">
              <Trophy className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="text-sm text-gray-600">{course.rating}/5</span>
            </div>
          </div>

          {/* Course highlights */}
          <div className="space-y-3 mb-6">
            {course.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center text-gray-600 text-sm">
                <div className="w-5 h-5 mr-3 text-blue-600">
                  {highlight.icon}
                </div>
                {highlight.text}
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button onClick={()=>router.push(routerpath)} className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group">
            <span>Start Learning</span>
            <PlayCircle className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

const Courses: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const courses: Course[] = [
    {
      title: "SAP CPI with SAP SuccessFactors Job Ready Program",
      description: "Master SAP Cloud Platform Integration with hands-on projects and real-world scenarios.",
      duration: "12 weeks",
      students: 1500,
      rating: 4.8,
      tag: "Most Popular",
      highlights: [
        { icon: <Clock className="w-full h-full" />, text: "Flexible learning schedule with 24/7 support" },
        { icon: <Users className="w-full h-full" />, text: "Live project experience with industry experts" },
        { icon: <Trophy className="w-full h-full" />, text: "Guaranteed job placement assistance" }
      ],
      routerpath:"/courses/sap-cpi-with-sap-successfactors-job-ready-program"
    },
    {
      title: "Interview Preparation for SAP CPI",
      description: "Comprehensive interview preparation with industry experts and real interview scenarios.",
      duration: "4 weeks",
      students: 800,
      rating: 4.9,
      highlights: [
        { icon: <Clock className="w-full h-full" />, text: "Intensive mock interview sessions" },
        { icon: <Users className="w-full h-full" />, text: "1-on-1 mentorship program" },
        { icon: <Trophy className="w-full h-full" />, text: "Interview success blueprint" }
      ],
      routerpath:"/courses/interview-preparation-for-sap-cpi"
    },
    {
      title: "SAP SuccessFactors Employee Central",
      description: "Complete training on SAP SuccessFactors Employee Central with certification guidance.",
      duration: "10 weeks",
      students: 1200,
      rating: 4.7,
      tag: "Certification Ready",
      highlights: [
        { icon: <Clock className="w-full h-full" />, text: "Comprehensive module coverage" },
        { icon: <Users className="w-full h-full" />, text: "Real system access and practice" },
        { icon: <Trophy className="w-full h-full" />, text: "Certification preparation included" }
      ],
      routerpath:"/courses/sap-successfactors-employee-central"
    },
    {
      title: "SAP SuccessFactors Onboarding",
      description: "Learn to implement and configure SAP SuccessFactors Onboarding module effectively.",
      duration: "8 weeks",
      students: 600,
      rating: 4.6,
      highlights: [
        { icon: <Clock className="w-full h-full" />, text: "Industry-aligned curriculum" },
        { icon: <Users className="w-full h-full" />, text: "Hands-on configuration practice" },
        { icon: <Trophy className="w-full h-full" />, text: "Career growth roadmap" }
      ],
      routerpath:"/courses/sap-successfactors-onboarding"
    }
  ];

  const handleScroll = useCallback(() => {
    const element = document.getElementById('courses');
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section id="courses" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        

        {/* Course grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              course={course}
              index={index}
              isVisible={isVisible}
              routerpath={course.routerpath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;