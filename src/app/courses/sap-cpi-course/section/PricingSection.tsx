import React from 'react';
import {
  Check,
  AlertCircle,
  CreditCard,
  Calendar,
  BookOpen,
  Users,
  Clock,
  FileCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹8,999',
      priceId: 'price_basic',
      description: 'Essential SAP CPI training with core features',
      features: [
        'Live Interactive Sessions',
        'Course Materials',
        'Basic Projects',
        'Email Support',
        'Access to Community',
        '3 Months Access'
      ],
      popular: false,
      badge: null
    },
    {
      name: 'Professional',
      price: '₹34,999',
      priceId: 'price_pro',
      description: 'Complete training with placement support',
      features: [
        'Everything in Basic',
        'Interview Preparation',
        'Resume Building',
        'Job Placement Support',
        'Mock Interviews',
        'Lifetime Access',
        'Priority Support',
        '8 Real Projects'
      ],
      popular: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '₹49,999',
      priceId: 'price_enterprise',
      description: 'Premium training with job guarantee',
      features: [
        'Everything in Professional',
        'Job Guarantee',
        '1-on-1 Mentoring',
        'Industry Certification',
        'Advanced Projects',
        'Premium Support',
        'Corporate Training'
      ],
      popular: false,
      badge: 'Job Guarantee'
    }
  ];

  const paymentOptions = [
    {
      name: 'EMI Options',
      description: 'No-cost EMI starting from ₹8,333/month',
      icon: CreditCard
    },
    {
      name: 'Installment Plans',
      description: 'Pay in 3 installments with no extra cost',
      icon: Calendar
    }
  ];

  const enrollmentSteps = [
    {
      title: 'Book Free Consultation',
      description: 'Schedule a call with our career counselor',
      icon: Users
    },
    {
      title: 'Select Your Plan',
      description: 'Choose a plan that fits your needs',
      icon: BookOpen
    },
    {
      title: 'Complete Registration',
      description: 'Fill enrollment form and make payment',
      icon: FileCheck
    },
    {
      title: 'Start Learning',
      description: 'Get access to course materials and schedule',
      icon: Clock
    }
  ];
  const router = useRouter()
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that best fits your career goals
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative border-2 ${
                plan.popular 
                  ? 'border-blue-600 shadow-xl' 
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.badge && (
                <Badge 
                  className={`absolute -top-3 right-4 ${
                    plan.popular 
                      ? 'bg-blue-600' 
                      : 'bg-gray-600'
                  }`}
                >
                  {plan.badge}
                </Badge>
              )}
              <CardHeader>
                <CardTitle>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-blue-600">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-gray-600">one-time</span>
                  </div>
                </CardTitle>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full mt-6 py-3 px-4 rounded-lg font-medium 
                    ${plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    } transition-colors`}
                    onClick={()=>router.push('/contact-us')}
                >
                  Get Started
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {paymentOptions.map((option, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <option.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {option.name}
                    </h4>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enrollment Steps */}
        <Card className="border-none shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Simple Enrollment Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {enrollmentSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Money Back Guarantee */}
        <Card className="mt-8 border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  7-Day Money Back Guarantee
                </h4>
                <p className="text-gray-600">
                  If you&apos;re not satisfied with the course within the first 7 days, 
                  we&apos;ll refund your payment in full - no questions asked.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export {PricingSection};