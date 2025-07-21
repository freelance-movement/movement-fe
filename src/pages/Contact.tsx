import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { agentInfo } from '../data/content';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanType: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      loanType: '',
      message: ''
    });
  };

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
      <section className="py-20 bg-gradient-to-br from-navy via-blue to-navy text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <Card className="shadow-xl border border-gray-100">
                <CardContent className="p-8">
                  <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-navy mb-6"
                  >
                    Send Us a Message
                  </motion.h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div 
                      variants={itemVariants}
                      className="grid md:grid-cols-2 gap-6"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.firstName')}
                        </label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="John"
                          required
                          className="transition-all focus:ring-2 focus:ring-red"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.lastName')}
                        </label>
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Doe"
                          required
                          className="transition-all focus:ring-2 focus:ring-red"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john.doe@email.com"
                        required
                        className="transition-all focus:ring-2 focus:ring-red"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="transition-all focus:ring-2 focus:ring-red"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.loanType')}
                      </label>
                      <Select value={formData.loanType} onValueChange={(value) => handleInputChange('loanType', value)}>
                        <SelectTrigger className="transition-all focus:ring-2 focus:ring-red">
                          <SelectValue placeholder="Select a loan type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fha">FHA Loan</SelectItem>
                          <SelectItem value="va">VA Loan</SelectItem>
                          <SelectItem value="conventional">Conventional Loan</SelectItem>
                          <SelectItem value="jumbo">Jumbo Loan</SelectItem>
                          <SelectItem value="refinance">Refinancing</SelectItem>
                          <SelectItem value="investment">Investment Property</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.message')}
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your home loan needs..."
                        rows={4}
                        className="transition-all focus:ring-2 focus:ring-red resize-none"
                      />
                    </motion.div>

                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-red text-white hover:bg-red/90 font-semibold text-lg py-4"
                      >
                        <Send className="mr-2" size={20} />
                        {t('contact.form.send')}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-8"
            >
              {/* Contact Info Card */}
              <motion.div variants={itemVariants}>
                <Card className="shadow-xl border border-gray-100">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-12 h-12 bg-red rounded-xl flex items-center justify-center">
                          <Phone className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-navy">Phone</div>
                          <div className="text-gray-600">{agentInfo.phone}</div>
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-12 h-12 bg-red rounded-xl flex items-center justify-center">
                          <Mail className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-navy">Email</div>
                          <div className="text-gray-600">{agentInfo.email}</div>
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-12 h-12 bg-red rounded-xl flex items-center justify-center">
                          <MapPin className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-navy">Office</div>
                          <div 
                            className="text-gray-600"
                            dangerouslySetInnerHTML={{ __html: agentInfo.address.replace(/\n/g, '<br>') }}
                          />
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-12 h-12 bg-red rounded-xl flex items-center justify-center">
                          <Clock className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-navy">Hours</div>
                          <div 
                            className="text-gray-600"
                            dangerouslySetInnerHTML={{ __html: agentInfo.hours.replace(/\n/g, '<br>') }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div variants={itemVariants}>
                <Card className="shadow-xl border border-gray-100">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-navy mb-4">Visit Our Office</h3>
                    <div className="w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <MapPin size={48} className="mx-auto mb-4" />
                        <p className="font-semibold">Interactive Map</p>
                        <p className="text-sm">Google Maps Integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
