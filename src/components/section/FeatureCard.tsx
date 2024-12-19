import React from 'react';
import { Book, Send, HelpCircle, Heart, LucideIcon } from 'lucide-react';
interface Link {
  text: string;
  href: string;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  links: Link[];
}


const FeatureCard:React.FC<FeatureCardProps> = ({ icon: Icon, title, items, links }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
    <div className="flex flex-col items-center flex-grow">
      <div className="bg-blue-50 p-4 rounded-full mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      
      <h4 className="text-xl font-semibold text-gray-900 mb-4">
        {title}
      </h4>
      
      <ul className="text-gray-600 space-y-3 mb-6 flex-grow">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex gap-3 mt-auto justify-center w-full">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center flex-1 font-medium"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const FeaturesGrid = () => {
  const features = [
    {
      icon: Book,
      title: "Course Content",
      items: [
        "What is SAP CPI?",
        "Introduction to BTP Integration Suite",
        "SAP CPI Adapters",
        "My first Integration scenario",
        "Groovy Script"
      ],
      links: [{ text: "More", href: "https://asapcpitraining.com/sap-cpi-course" }]
    },
    {
      icon: Send,
      title: "Free e-book for SAP CPI",
      items: [
        "Get our free e-book",
        "Register to get latest updates"
      ],
      links: [{ text: "Free e-book", href: "https://asapcpitraining.com/sap-cpi-free-ebook" }]
    },
    {
      icon: HelpCircle,
      title: "Have a query?",
      items: [
        "We are just a call away",
        "WhatsApp your query now",
        "Request a call back at your preferred time"
      ],
      links: [
        { text: "WhatsApp", href: "https://api.whatsapp.com/send?phone=919991375670&text=Hello!%20SAP%20CPI%20Training" },
        { text: "FAQ", href: "https://asapcpitraining.com/faq" }
      ]
    },
    {
      icon: Heart,
      title: "Things you will Love",
      items: [
        "Personal system access setup",
        "Certified & 14+ years' experience trainers",
        "Free demo before you sign up for the course"
      ],
      links: [{ text: "Why us", href: "https://asapcpitraining.com/why-us" }]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            A few things we&apos;re great at
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            There are number of instructions to be followed at the time of refilling an inkjet cartridge. 
            Likewise, For doing a SAP CPI Integration you have to learn it first. 
            Check below, why learn from SAP CPI Training.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;