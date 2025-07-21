import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const isActive = (href: string) => location === href;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
    setIsLanguageDropdownOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              {/* Letter C Logo similar to attached image */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-red to-red/80 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">C</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-navy rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-navy tracking-tight">
                  <span className="text-red">LOANS BY</span>{" "}
                  <span className="text-blue">CELENE</span>
                </h1>
                <p className="text-sm text-gray-600 italic">
                  Your Home Loan Specialist
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`font-medium transition-colors cursor-pointer ${
                    isActive(item.href)
                      ? "text-navy"
                      : "text-gray-700 hover:text-navy"
                  }`}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm font-medium">
                  {language === "en" ? "🇺🇸 EN" : "🇻🇳 VI"}
                </span>
                <ChevronDown size={12} />
              </motion.button>

              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[120px] z-50"
                  >
                    <button
                      onClick={toggleLanguage}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {language === "en" ? "🇻🇳 Tiếng Việt" : "🇺🇸 English"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-red text-white hover:bg-red/90 font-medium">
                  {t("nav.getQuote")}
                </Button>
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="text-navy" size={24} />
              ) : (
                <Menu className="text-navy" size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-medium transition-colors cursor-pointer ${
                        isActive(item.href)
                          ? "text-navy"
                          : "text-gray-700 hover:text-navy"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
