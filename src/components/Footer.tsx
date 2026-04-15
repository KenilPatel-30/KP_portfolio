'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-t border-border"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:kenilpatel0230@gmail.com"
              className="group relative w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden text-foreground hover:text-primary transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <span className="absolute inset-0 bg-primary/25 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <Mail className="relative z-10 w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/kenilpatel02"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-full border-2 border-[#0077B5]/30 flex items-center justify-center overflow-hidden text-foreground hover:text-white transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <span className="absolute inset-0 bg-[#0077B5] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <Linkedin className="relative z-10 w-4 h-4" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-1">
            <p className="text-sm text-foreground">
              © {currentYear} Kenil Patel
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & Built with passion
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
