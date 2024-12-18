import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const CourseComparison = () => {
  const [selectedFeature, setSelectedFeature] = useState('all');
  const router = useRouter()
  const features = {
    course: [
      { name: 'Course Duration', sapmate: '12 weeks', others: '8-10 weeks' },
      { name: 'Live Sessions', sapmate: '3x weekly', others: '1-2x weekly' },
      { name: 'Batch Size', sapmate: 'Max 10 students', others: '25+ students' },
      { name: 'Hands-on Projects', sapmate: '8 projects', others: '2-3 projects' }
    ],
    support: [
      { name: 'Lifetime Access', sapmate: true, others: false },
      { name: '1-on-1 Mentoring', sapmate: true, others: false },
      { name: '24/7 Support', sapmate: true, others: 'Limited' },
      { name: 'Interview Preparation', sapmate: true, others: 'Basic' }
    ],
    placement: [
      { name: 'Job Guarantee', sapmate: true, others: false },
      { name: 'Placement Success Rate', sapmate: '92%', others: '60-70%' },
      { name: 'Average Package', sapmate: '18 LPA', others: '12 LPA' },
      { name: 'Company Tie-ups', sapmate: '50+', others: '10-20' }
    ]
  };

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'course', label: 'Course Content' },
    { id: 'support', label: 'Learning Support' },
    { id: 'placement', label: 'Placement Support' }
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircle className="w-5 h-5 text-green-500" />
      ) : (
        <XCircle className="w-5 h-5 text-red-500" />
      );
    }
    return value;
  };

  const testimonials = [
    {
      name: "Shweta Vats",
      role: "SAP CPI Consultant at Capgemini",
      package: "33 LPA",
      quote: "The personal attention and practical approach made all the difference"
    },
    {
      name: "Mehboob Azam",
      role: "SF Consultant at TCS",
      package: "12 LPA",
      quote: "Comprehensive curriculum with excellent placement support"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose SAPMATE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compare our course features with other training providers
          </p>
        </div>

        {/* Feature Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedFeature(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedFeature === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="border-none shadow-xl mb-12">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left text-gray-600 font-medium">Feature</th>
                    <th className="p-4 text-left text-blue-600 font-medium">SAPMATE</th>
                    <th className="p-4 text-left text-gray-600 font-medium">Other Providers</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(features).map(([category, categoryFeatures]) => (
                    (selectedFeature === 'all' || selectedFeature === category) &&
                    categoryFeatures.map((feature, index) => (
                      <tr key={`${category}-${index}`} className="border-t">
                        <td className="p-4 text-gray-900 font-medium">{feature.name}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {renderValue(feature.sapmate)}
                            {typeof feature.sapmate === 'string' && (
                              <span className="text-gray-900">{feature.sapmate}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {renderValue(feature.others)}
                            {typeof feature.others === 'string' && (
                              <span className="text-gray-600">{feature.others}</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-blue-100 text-blue-800">
                  Success Story
                </Badge>
                <p className="text-gray-700 mb-4">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">
                    Package: {testimonial.package}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-blue-600 text-white border-none">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your SAP Career?
            </h3>
            <p className="mb-6 text-blue-100">
              Join the most comprehensive SAP CPI training program
            </p>
            <button onClick={()=>router.push("/contact-us")} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Enroll Now
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export {CourseComparison};