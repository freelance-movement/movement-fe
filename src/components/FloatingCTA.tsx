import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingCTA: React.FC = () => {
  const handleFloatingCTA = () => {
    window.open("tel:(555) 123-4567", "_self");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleFloatingCTA}
        className="bg-red text-white w-16 h-16 rounded-full shadow-2xl hover:bg-red/90 transition-all animate-float"
        aria-label="Call now"
      >
        <Phone size={24} />
      </motion.button>
    </motion.div>
  );
};

export default FloatingCTA;
