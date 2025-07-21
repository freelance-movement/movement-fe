import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Calendar, Clock, ArrowRight, TrendingUp, User, Eye, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/content';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Featured post (first post)
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-navy via-blue to-navy text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 right-10 w-60 h-60 bg-red/10 rounded-full blur-2xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-red/20 to-blue/20 rounded-full mb-8"
            >
              <span className="text-white font-semibold text-sm uppercase tracking-wider flex items-center">
                <TrendingUp className="mr-2" size={16} />
                Loan Industry Insights
              </span>
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              {t('blog.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Featured Article</h2>
            <p className="text-xl text-gray-600">Our latest insights on the loan market</p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${featuredPost.id}`}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="h-80 md:h-full bg-gradient-to-br from-navy via-blue to-red relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="text-white text-6xl"
                        >
                          <i className="fas fa-newspaper"></i>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center mb-4 text-sm text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <Clock size={16} className="mr-2" />
                      <span className="mr-4">{featuredPost.readTime}</span>
                      <User size={16} className="mr-2" />
                      <span>Celene Rodriguez</span>
                    </div>
                    <h3 className="text-3xl font-bold text-navy mb-4 group-hover:text-blue transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye size={16} className="mr-1" />
                          <span>2.1k views</span>
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp size={16} className="mr-1" />
                          <span>45 likes</span>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center text-blue font-semibold"
                      >
                        Read More <ArrowRight size={16} className="ml-2" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.article>
        </div>
      </section>

      {/* Recent Articles Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Recent Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest trends and tips</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="h-48 bg-gradient-to-br from-navy via-blue to-red relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="text-white text-3xl"
                        >
                          <i className={`fas ${index % 3 === 0 ? 'fa-chart-line' : index % 3 === 1 ? 'fa-home' : 'fa-calculator'}`}></i>
                        </motion.div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${index % 3 === 0 ? 'bg-red/80' : index % 3 === 1 ? 'bg-blue/80' : 'bg-navy/80'}`}>
                          {post.category}
                        </span>
                      </div>
                    </motion.div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <Calendar size={14} className="mr-2" />
                        <span className="mr-3">{post.date}</span>
                        <Clock size={14} className="mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Eye size={12} className="mr-1" />
                            <span>{Math.floor(Math.random() * 1000) + 500}</span>
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp size={12} className="mr-1" />
                            <span>{Math.floor(Math.random() * 50) + 10}</span>
                          </div>
                        </div>
                        
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="text-blue font-semibold text-sm flex items-center"
                        >
                          Read More
                          <ArrowRight size={14} className="ml-1" />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-navy via-blue to-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest loan market insights and tips delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-red"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-red hover:bg-red/90 text-white px-6 py-3">
                  Subscribe
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;