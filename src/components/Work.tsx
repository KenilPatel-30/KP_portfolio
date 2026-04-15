'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X } from 'lucide-react';
import PortfolioCard from './PortfolioCard';
import portfolioInstagramPost from '@/assets/portfolio-instagram-post.png';
import portfolioBusinessCard from '@/assets/portfolio-business-card.png';
import portfolioElearning from '@/assets/portfolio-elearning.png';
import portfolioIdcard from '@/assets/portfolio-idcard.png';
import portfolioMarketingFlyer from '@/assets/portfolio-marketing-flyer.png';
import portfolioCookieBranding from '@/assets/portfolio-cookie-branding.png';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: 'Instagram Post',
    category: 'Social Media Design',
    description: 'A health-focused mobile app designed to help users track diabetes-related data through a simple and accessible interface.',
    tags: ['Usability', 'Accessibility', 'Clean UI'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioInstagramPost,
  },
  {
    id: 2,
    title: 'E-Learning App',
    category: 'Product Design',
    description: 'An educational platform designed to deliver structured learning content with an intuitive and engaging user experience.',
    tags: ['Information Hierarchy', 'User Flow', 'Engagement'],
    gradient: 'from-secondary via-muted to-primary/10',
    image: portfolioElearning,
  },
  {
    id: 3,
    title: 'Business Card',
    category: 'Brand Identity',
    description: 'A finance app concept that helps users track expenses and manage personal finances using a clean, minimal layout.',
    tags: ['Data Clarity', 'Visual Balance', 'Simplicity'],
    gradient: 'from-muted via-primary/15 to-secondary',
    image: portfolioBusinessCard,
  },
  {
    id: 4,
    title: 'ID-Card',
    category: 'Brand Identity',
    description: 'Designed the delivery section of a food delivery app, focusing on smooth order tracking and delivery flow.',
    tags: ['User Journey', 'Task Efficiency', 'Clarity'],
    gradient: 'from-primary/15 via-secondary to-muted',
    image: portfolioIdcard,
  },
  {
    id: 5,
    title: 'Logo & Branding',
    category: 'Brand Identity',
    description: 'Complete branding and logo design for a cookie-based startup.',
    tags: ['Logo Design', 'Visual Identity', 'Branding'],
    gradient: 'from-primary/30 via-secondary to-muted',
    image: portfolioCookieBranding,
  },
  {
    id: 6,
    title: 'Marketing Flyer',
    category: 'Print Design',
    description: 'Graphic design work including menus, social media, and marketing materials.',
    tags: ['Marketing', 'Social Media', 'Print'],
    gradient: 'from-secondary via-muted to-primary/20',
    image: portfolioMarketingFlyer,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Work = () => {
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <p className="text-label">Portfolio</p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {workItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <PortfolioCard
                title={item.title}
                category={item.category}
                description={item.description}
                tags={item.tags}
                gradient={item.gradient}
                image={item.image}
                onClick={() => setSelectedItem(item)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedItem(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-border bg-card shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="flex-1 overflow-auto bg-muted/30">
                {selectedItem.image && (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto object-contain"
                  />
                )}
              </div>

              {/* Info */}
              <div className="p-6 border-t border-border">
                <p className="text-label text-primary text-sm mb-1">{selectedItem.category}</p>
                <h3 className="text-xl font-semibold text-foreground mb-2">{selectedItem.title}</h3>
                <p className="text-sm text-muted-foreground">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
