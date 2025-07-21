import React from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { agentInfo } from '../data/content';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const serviceLinks = [
    'FHA Loans',
    'VA Loans',
    'Conventional Loans',
    'Jumbo Loans',
    'Refinancing'
  ];

  const resourceLinks = [
    'Loan Calculator',
    'Pre-Approval',
    'First-Time Buyer Guide',
    'Market Updates',
    'FAQ'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Disclosures'
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red to-red/80 rounded-lg flex items-center justify-center">
                <Home className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Loans by Celene</h3>
                <p className="text-sm text-gray-400">Your Home Loan Specialist</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Helping families achieve their homeownership dreams with personalized loan solutions and expert guidance.
            </p>
            <div className="text-sm text-gray-400">
              <p>NMLS ID: #123456</p>
              <p>Licensed in Multiple States</p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">{t('footer.services.title')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">{t('footer.resources.title')}</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact.title')}</h4>
            <div className="space-y-3 text-gray-300">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Phone className="text-red" size={16} />
                <span>{agentInfo.phone}</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Mail className="text-red" size={16} />
                <span>{agentInfo.email}</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <MapPin className="text-red mt-1" size={16} />
                <span dangerouslySetInnerHTML={{ __html: agentInfo.address.replace(/\n/g, '<br>') }} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Loans by Celene. All rights reserved.</p>
              <p className="mt-1">Equal Housing Opportunity | NMLS Consumer Access</p>
            </div>
            <div className="flex space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
