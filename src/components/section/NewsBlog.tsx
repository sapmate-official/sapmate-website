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
      title: "Cloud Innovations for Smart Contracts from SAP and Partners on SAP Store",
      excerpt: "Increasing trust among the many stakeholders involved in a transaction is imperative in business today given the ever-present vigilance required for data security. ",
      image: "https://storefront-api.p1.store.net.sap/medias/273363-273363-h-ergb-s-gl-500.jpg?context=bWFzdGVyfGltYWdlc3w1OTAxMTJ8aW1hZ2UvanBlZ3xhREU1TDJobFpTODVOREkxTmprM05qQXpOakUwTHpJM016TTJNMTh5TnpNek5qTmZhRjlsY21kaVgzTmZaMnhmTlRBd0xtcHdad3wzNGVkOGUzOGVlMjcwZjBjM2QzNzA4NmQyOWM2YmUwYmVjZjljMTNmYjU3N2FhNjI3NjRmNWNjYzE0OTRiOTEx",
      date: "February 7, 2024",
      readingTime: "8",
      link: "https://store.sap.com/dcp/en/news-blogs/blogs/cloud-innovations-for-smart-contracts-from-sap-and-partners-on-sap-store"
    },
    {
      title: "Cloud Innovations for Spend Analytics from SAP and Partners on SAP Store",
      excerpt: "Anyone who has ever had to manage a budget and faced rising costs has experienced the typical reaction: spend less. That’s logical – but not so simple for large enterprises,",
      image: "https://storefront-api.p1.store.net.sap/medias/296603-GettyImages-1338373325-medium-jpg.jpg?context=bWFzdGVyfGltYWdlc3wzMDQ1OTV8aW1hZ2UvanBlZ3xhRFZsTDJoaFpDODVOREkwTXpJeE1UZ3pOemMwTHpJNU5qWXdNMTlIWlhSMGVVbHRZV2RsY3kweE16TTRNemN6TXpJMVgyMWxaR2wxYlY5cWNHY3VhbkJufDI3YjU0N2JmMjM0YWYxYWNiY2Q2ODViYjA0YmM3NjgzMmM2YjIwNTJkMGFhZmRhNDYzYTRjZTQzMjc4YWEzN2E",
      date: "December 8, 2023",
      readingTime: "6",
      link: "https://store.sap.com/dcp/en/news-blogs/blogs/cloud-innovations-for-spend-analytics-from-sap-and-partners-on-sap-store"
    },
    {
      title: "Achieving Finance Transformation with Serrala FS2 Solutions on SAP Store",
      excerpt: "I love speaking with SAP partners about their visions of the future. How about this one: a day when finance professionals will be able to see everything and do everything necessary to manage working capital,",
      image: "https://storefront-api.p1.store.net.sap/medias/298073-GettyImages-1409751960-medium-jpg-1-.jpg?context=bWFzdGVyfGltYWdlc3wyNzc2NjJ8aW1hZ2UvanBlZ3xhR1UzTDJobFlTODVOREl6TlRjME5UazNOall5THpJNU9EQTNNMTlIWlhSMGVVbHRZV2RsY3kweE5EQTVOelV4T1RZd1gyMWxaR2wxYlY5cWNHY2dLREVwTG1wd1p3fGQxYmUzNTRkZDE1NmY5ZWY5ZDk0Y2QyZTFiNWNkY2NiYmM5YTVkMWYyOGQwMTNlNDJlYTJkYWY2YmM5ZDNkNTk",
      date: "November 15, 2023",
      readingTime: "7",
      link: "https://store.sap.com/dcp/en/news-blogs/blogs/achieving-finance-transformation-with-serrala-fs2-solutions-on-sap-store"
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