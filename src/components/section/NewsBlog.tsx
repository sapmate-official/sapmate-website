import React from 'react';
import { 
  Calendar,
  ArrowRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readingTime: string;
  link: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-3 left-4 flex items-center text-white text-sm">
        <Calendar className="w-4 h-4 mr-2" />
        {post.date}
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-blue-600" />
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {post.readingTime} min read
          </span>
        </div>
        
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  </motion.div>
);

const NewsSection = () => {
  const blogPosts = [
    {
      title: "What is SAP BTP Integration suite? CPI | API Management | Open Connectors",
      excerpt: "Discover how SAP BTP Integration suite provides comprehensive integration capabilities including Cloud Platform Integration, API Management, and more.",
      image: "https://res.cloudinary.com/dwxm42izp/image/upload/v1730538183/ulove1t1e6szhyrwasdr.jpg",
      date: "April 2024",
      readingTime: "8",
      link: "https://asapcpitraining.com/what-is-sap-btp-integration-suite-cpi-api-management-open-connectors-integration-advisor/"
    },
    {
      title: "What is CDS | Core Data Services in SAP?",
      excerpt: "Learn about CDS views, the new programming and data model of SAP, offering enhanced features compared to traditional ABAP dictionary views.",
      image: "https://asapcpitraining.com/wp-content/uploads/2024/04/SAP-CDS.jpg",
      date: "April 2024",
      readingTime: "6",
      link: "https://asapcpitraining.com/what-is-cds-core-data-services-in-sap/"
    },
    {
      title: "SAP BTP – Business Technology Platform – Part 1",
      excerpt: "Explore SAP BTP's comprehensive suite of tools and services for analytics, data management, application development, and integration.",
      image: "https://asapcpitraining.com/wp-content/uploads/2024/04/what-is-sap-btp-business-technol.jpg",
      date: "April 2024",
      readingTime: "7",
      link: "https://asapcpitraining.com/what-is-sap-btp-business-technology-platform-part-1/"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learn with Us at SAPMATE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We keep updating our blogs to provide you the latest and greatest information in the SAP CPI world. Bookmark it now!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://asapcpitraining.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
          >
            View All Articles
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;