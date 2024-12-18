import React, { useState } from 'react';
import { PlusCircle, MinusCircle, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

type FAQs = {
  general: FAQ[];
  technical: FAQ[];
  career: FAQ[];
  pricing: FAQ[];
};

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'technical', label: 'Technical' },
    { id: 'career', label: 'Career & Jobs' },
    { id: 'pricing', label: 'Pricing & Payment' }
  ];

  const faqs: FAQs = {
    general: [
      {
        id: 'g1',
        question: 'What is SAP CPI and why should I learn it?',
        answer: 'SAP Cloud Platform Integration (CPI) is SAP\'s cloud-based integration platform. It\'s crucial for connecting different systems and applications in modern enterprise architectures. With the increasing adoption of cloud solutions, SAP CPI skills are in high demand, offering excellent career opportunities with packages ranging from 12-33 LPA for experienced professionals.'
      },
      {
        id: 'g2',
        question: 'How long does it take to complete the course?',
        answer: 'The complete SAP CPI course is 12 weeks long with 2-3 hours of live sessions three times per week. Additional time is required for assignments and projects. Most students complete the course while maintaining their current jobs.'
      },
      {
        id: 'g3',
        question: 'Do you provide placement assistance?',
        answer: 'Yes, we provide comprehensive placement assistance including resume building, interview preparation, and direct connections with hiring partners. Our placement rate is 92%, with students placed in companies like Capgemini, Accenture, and TCS.'
      }
    ],
    technical: [
      {
        id: 't1',
        question: 'Is coding knowledge required for SAP CPI?',
        answer: 'While basic programming knowledge is helpful, it\'s not mandatory. The course covers Groovy scripting from basics, and we\'ll teach you everything you need to know about the required technical aspects.'
      },
      {
        id: 't2',
        question: 'What tools and software will I need?',
        answer: 'You\'ll need a computer with minimum 8GB RAM and stable internet connection. We provide access to SAP Cloud Platform trial account and all necessary development tools. Detailed setup instructions are provided at the start of the course.'
      }
    ],
    career: [
      {
        id: 'c1',
        question: 'What are the job prospects after completing SAP CPI?',
        answer: 'SAP CPI professionals are in high demand. Our students have secured roles like SAP CPI Consultant, Integration Architect, and Technical Consultant with packages ranging from 12-33 LPA. Companies actively hiring include Capgemini, Accenture, TCS, and other major IT services firms.'
      },
      {
        id: 'c2',
        question: 'Do you provide internship opportunities?',
        answer: 'Yes, we offer internship opportunities with our partner companies for deserving candidates. These internships often lead to full-time positions. Additionally, you\'ll work on real-world projects during the course.'
      }
    ],
    pricing: [
      {
        id: 'p1',
        question: 'What are the payment options available?',
        answer: 'We offer flexible payment options including one-time payment, EMI options, and special discounts for early birds. We also have a pay-after-placement option for eligible candidates.'
      },
      {
        id: 'p2',
        question: 'Is there a money-back guarantee?',
        answer: 'Yes, we offer a 7-day money-back guarantee if you\'re not satisfied with the course. Additionally, we provide a job guarantee program for eligible candidates.'
      }
    ]
  };
  const router = useRouter();
  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const filteredFaqs = Object.entries(faqs).reduce((acc, [category, questions]) => {
    acc[category as keyof FAQs] = (questions as FAQ[]).filter((q: FAQ) => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return acc;
  }, {} as FAQs);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our SAP CPI course
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search your question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs[activeCategory as keyof FAQs]?.map((faq: FAQ) => (
            <Card
              key={faq.id}
              className={`border-none shadow-sm transition-shadow hover:shadow-md
                ${openQuestions.includes(faq.id) ? 'bg-white' : 'bg-white'}`}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full text-left p-6 flex justify-between items-start gap-4"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openQuestions.includes(faq.id) ? (
                    <MinusCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <PlusCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openQuestions.includes(faq.id) && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card className="mt-8 border-none shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-6 text-center">
            <p className="text-gray-600 mb-4">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <button onClick={()=>router.push("/contact-us")} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { FAQSection };