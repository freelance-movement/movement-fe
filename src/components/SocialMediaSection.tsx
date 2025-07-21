import React from "react";
import { motion } from "framer-motion";

const SocialMediaSection: React.FC = () => {
  const socialLinks = [
    {
      platform: "twitter",
      icon: "fab fa-twitter",
      color: "#1DA1F2",
      url: "https://twitter.com/loansbycelene",
    },
    {
      platform: "instagram",
      icon: "fab fa-instagram",
      color: "#E4405F",
      url: "https://instagram.com/loansbycelene",
    },
    {
      platform: "facebook",
      icon: "fab fa-facebook",
      color: "#4267B2",
      url: "https://facebook.com/loansbycelene",
    },
    {
      platform: "linkedin",
      icon: "fab fa-linkedin",
      color: "#0077B5",
      url: "https://linkedin.com/in/celene-rodriguez",
    },
    {
      platform: "youtube",
      icon: "fab fa-youtube",
      color: "#FF0000",
      url: "https://youtube.com/@loansbycelene",
    },
  ];

  const handleSocialClick = (_: string, url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 bg-red relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-wider"
          >
            STAY CONNECTED
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/90 mb-12 text-lg"
          >
            follow me on social media
          </motion.p>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-4 lg:space-x-8">
            {socialLinks.map((social, index) => (
              <motion.button
                key={social.platform}
                onClick={() => handleSocialClick(social.platform, social.url)}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl group"
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              >
                <i
                  className={`${social.icon} text-2xl lg:text-3xl transition-all duration-300 group-hover:scale-110`}
                  style={{ color: social.color }}
                />
              </motion.button>
            ))}
          </div>

          {/* Additional Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-white/80 text-sm mb-4">
              Connect with me for the latest loan tips and market updates
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <span className="mr-2">📞</span>
                Get in Touch Today
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
