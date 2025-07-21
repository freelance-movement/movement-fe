import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Star, CheckCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { services } from '../data/content';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Services: React.FC = () => {
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
                Professional Loan Services
              </span>
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              {t('services.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              {t('services.subtitle')}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-full">
                <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-full">
                <CheckCircle className="text-green-400 mr-2" size={20} />
                <span>1000+ Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our wide range of loan products designed to meet your specific financial needs</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group"
              >
                <Link href={`/services/${service.id}`}>
                  <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-blue/30 hover:shadow-2xl transition-all duration-500 group overflow-hidden cursor-pointer">
                    <CardContent className="p-8 relative">
                      {/* Card background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-red-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 8 }}
                          className={`w-20 h-20 bg-gradient-to-br ${index % 3 === 0 ? 'from-red to-red/80' : index % 3 === 1 ? 'from-blue to-navy' : 'from-navy to-blue'} rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <i className={`${service.icon} text-white text-3xl`} />
                        </motion.div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-navy group-hover:text-blue transition-colors duration-300">{service.title}</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                        
                        <div className="space-y-4 mb-8">
                          <h4 className="font-semibold text-navy text-lg">Key Benefits:</h4>
                          <ul className="space-y-3">
                            {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start text-gray-700">
                                <CheckCircle className={`${index % 3 === 0 ? 'text-red' : index % 3 === 1 ? 'text-blue' : 'text-navy'} mr-3 mt-1 flex-shrink-0`} size={20} />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-between"
                        >
                          <Button className={`${index % 3 === 0 ? 'bg-red hover:bg-red/90' : index % 3 === 1 ? 'bg-blue hover:bg-blue/90' : 'bg-navy hover:bg-navy/90'} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex-1 mr-4`}>
                            Learn More
                          </Button>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`w-12 h-12 ${index % 3 === 0 ? 'bg-red/10 text-red' : index % 3 === 1 ? 'bg-blue/10 text-blue' : 'bg-navy/10 text-navy'} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <ArrowRight size={20} />
                          </motion.div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy via-blue to-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Contact me today for a free consultation and let's find the perfect loan solution for your needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-red hover:bg-red/90 text-white px-8 py-4 text-lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;