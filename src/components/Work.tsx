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
import portfolioCookieBranding from '@/assets/portfolio-cookie-branding.jpg';
import portfolioTshirt from '@/assets/portfolio-tshirt.png';
import portfolioBrochure from '@/assets/portfolio-brochure.png';
import portfolioCertificate from '@/assets/portfolio-certificate.jpg';
import portfolioSugarcaneLogo from '@/assets/portfolio-sugarcane-logo.jpg';
import portfolioDxdTradersLogo from '@/assets/portfolio-dxd-traders-logo.jpg';
import portfolioStandee from '@/assets/portfolio-standee.png';
import portfolioDiary from '@/assets/portfolio-diary.jpg';
import portfolioMagazine from '@/assets/portfolio-magazine.jpg';
import portfolioChatbotLogo from '@/assets/portfolio-chatbot-logo.jpg';
import portfolioArkaExportsLogo from '@/assets/portfolio-arka-exports-logo.jpg';
import portfolioMottoLogo from '@/assets/portfolio-motto-logo.jpg';
import portfolioOrdinaryGuyLogo from '@/assets/portfolio-ordinary-guy-logo.png';
import portfolioPoster from '@/assets/portfolio-poster.png';
import portfolioKrishiSarthLogo from '@/assets/portfolio-krishi-sarth-logo.jpg';
import portfolioBadge from '@/assets/portfolio-badge.jpg';
import portfolioDropdownBanner from '@/assets/portfolio-dropdown-banner.jpg';
import portfolioDiabetesNavigator from '@/assets/portfolio-diabetes-navigator.png';
import portfolioSelfLearning from '@/assets/portfolio-self-learning.jpg';
import portfolioDocmorph from '@/assets/portfolio-docmorph.png';


interface WorkItem {
  id: number;
  title: string;
  category: string;
  mediaType: 'Digital & Print Media' | 'Logo & Branding' | 'UI/UX';
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
  containImage?: boolean;
  customBg?: string;
  radialVariant?: 'center' | 'top-right' | 'bottom-left' | 'none';
}

const workItems: WorkItem[] = [
  {
    id: 9,
    title: 'Certificate',
    category: 'Achievement',
    mediaType: 'Digital & Print Media',
    description: 'Awarded for invaluable contribution as Resource Head for Ananta\'24 - Innovation Inspired Technology.',
    tags: ['Achievement', 'Recognition', 'Event Management'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioCertificate,
  },
  {
    id: 12,
    title: 'Standee',
    category: 'Print Design',
    mediaType: 'Digital & Print Media',
    description: 'A Standee for Shark Tank event, focusing on entrepreneurship and incubation support.',
    tags: ['Standee', 'Event Branding', 'Entrepreneurship'],
    gradient: 'from-muted via-primary/15 to-secondary',
    image: portfolioStandee,
    containImage: true,
    customBg: '#BBDDFF',
    radialVariant: 'center',
  },
  {
    id: 13,
    title: 'Diary',
    category: 'Print Design',
    mediaType: 'Digital & Print Media',
    description: 'Custom diary design for Ananta\'25, featuring vibrant doodles and an elegant cover.',
    tags: ['Diary', 'Stationery', 'Ananta'],
    gradient: 'from-secondary via-muted to-primary/10',
    image: portfolioDiary,
  },
  {
    id: 14,
    title: 'Magazine',
    category: 'Print Design',
    mediaType: 'Digital & Print Media',
    description: 'A professional magazine layout for Gravity, showcasing student achievements and campus stories.',
    tags: ['Magazine', 'Editorial Design', 'Layout'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioMagazine,
  },
  {
    id: 6,
    title: 'Flyer',
    category: 'Print Design',
    mediaType: 'Digital & Print Media',
    description: 'Graphic design work including menus, social media, and marketing materials.',
    tags: ['Marketing', 'Social Media', 'Print'],
    gradient: 'from-secondary via-muted to-primary/20',
    image: portfolioMarketingFlyer,
    containImage: true,
    customBg: '#8a7e84', // Semi-dark grey-pink
  },
  {
    id: 8,
    title: 'Brochure Design',
    category: 'Print Design',
    mediaType: 'Digital & Print Media',
    description: 'A detailed event brochure design with information about tech workshops and cultural nights.',
    tags: ['Layout', 'Information Design', 'Events'],
    gradient: 'from-secondary via-muted to-primary/10',
    image: portfolioBrochure,
  },
  {
    id: 3,
    title: 'Business Card',
    category: 'Brand Identity',
    mediaType: 'Digital & Print Media',
    description: 'A finance app concept that helps users track expenses and manage personal finances using a clean, minimal layout.',
    tags: ['Data Clarity', 'Visual Balance', 'Simplicity'],
    gradient: 'from-muted via-primary/15 to-secondary',
    image: portfolioBusinessCard,
  },
  {
    id: 7,
    title: 'T-Shirt Design',
    category: 'Apparel Design',
    mediaType: 'Digital & Print Media',
    description: 'Custom t-shirt design featuring a unique glitch-style typography.',
    tags: ['Apparel', 'Typography', 'Graphic Design'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioTshirt,
  },
  {
    id: 4,
    title: 'ID-Card',
    category: 'Brand Identity',
    mediaType: 'Digital & Print Media',
    description: 'Designed the delivery section of a food delivery app, focusing on smooth order tracking and delivery flow.',
    tags: ['User Journey', 'Task Efficiency', 'Clarity'],
    gradient: 'from-primary/15 via-secondary to-muted',
    image: portfolioIdcard,
  },
  {
    id: 18,
    title: 'Poster Design',
    category: 'Print Design',
    mediaType: 'Digital & Print Media',
    description: 'An event poster for "Code Pictionary" at Ananta, designed for maximum visibility and engagement.',
    tags: ['Poster', 'Event Branding', 'Typography'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioPoster,
  },
  {
    id: 20,
    title: 'Badge Design',
    category: 'Print Design',
    mediaType: 'Digital & Print Media',
    description: 'A professional magnetic badge design for the Vice President of Ananta 25 at GSFC University.',
    tags: ['Badge', 'Event Branding', 'Identity'],
    gradient: 'from-secondary via-muted to-primary/10',
    image: portfolioBadge,
  },
  {
    id: 21,
    title: 'Drop Down Banner Design',
    category: 'Print Design',
    mediaType: 'Digital & Print Media',
    description: 'A massive drop-down banner for the AIKYA cultural fest, featuring a futuristic VR theme.',
    tags: ['Banner', 'Large Format Print', 'Event Branding'],
    gradient: 'from-muted via-primary/15 to-secondary',
    image: portfolioDropdownBanner,
  },
  {
    id: 1,
    title: 'Instagram Post',
    category: 'Social Media Design',
    mediaType: 'Digital & Print Media',
    description: 'A vibrant Instagram post design for Ananta\'25 featuring an AI-powered chatbot, optimized for social media engagement.',
    tags: ['Social Media', '3D Illustration', 'Branding'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioInstagramPost,
  },

  {
    id: 22,
    title: 'Diabetes Self Navigator App',
    category: 'Product Design',
    mediaType: 'UI/UX',
    description: 'A comprehensive mobile app designed to help users manage and navigate their diabetes journey effectively.',
    tags: ['Mobile App', 'Health Tech', 'User Experience'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioDiabetesNavigator,
  },
  {
    id: 23,
    title: 'Self-Learning Course App',
    category: 'Product Design',
    mediaType: 'UI/UX',
    description: 'A clean and user-friendly interface for a self-learning platform, designed to track courses and certificates efficiently.',
    tags: ['Mobile App', 'E-Learning', 'User Flow'],
    gradient: 'from-secondary via-muted to-primary/10',
    image: portfolioSelfLearning,
  },
  {
    id: 24,
    title: 'DocMorph',
    category: 'Product Design',
    mediaType: 'UI/UX',
    description: 'A powerful web application designed to convert raw documents into professionally formatted outputs instantly.',
    tags: ['Web App', 'SaaS', 'Dashboard'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioDocmorph,
  },

  {
    id: 19,
    title: 'Krishi Sarth Logo',
    category: 'Brand Identity',
    mediaType: 'Logo & Branding',
    description: 'A minimalist and elegant logo design for Krishi Sarth, representing agricultural growth and sustainability.',
    tags: ['Logo Design', 'Agriculture', 'Minimalist'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioKrishiSarthLogo,
  },
  {
    id: 5,
    title: 'Cookie Shop Logo',
    category: 'Brand Identity',
    mediaType: 'Logo & Branding',
    description: 'Complete branding and logo design for a cookie-based startup.',
    tags: ['Logo Design', 'Visual Identity', 'Branding'],
    gradient: 'from-primary/30 via-secondary to-muted',
    image: portfolioCookieBranding,
  },
  {
    id: 10,
    title: 'Sugarcane Shop Logo',
    category: 'Brand Identity',
    mediaType: 'Logo & Branding',
    description: 'Logo design for a sugarcane juice shop, featuring organic and traditional elements.',
    tags: ['Logo Design', 'Branding', 'Organic'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioSugarcaneLogo,
  },
  {
    id: 11,
    title: 'DXD Traders Logo',
    category: 'Brand Identity',
    mediaType: 'Logo & Branding',
    description: 'Professional logo design for DXD Traders, focusing on trust and quality.',
    tags: ['Logo Design', 'Corporate Identity', 'Minimalist'],
    gradient: 'from-secondary via-muted to-primary/10',
    image: portfolioDxdTradersLogo,
  },
  {
    id: 16,
    title: 'Arka Exports Logo',
    category: 'Brand Identity',
    mediaType: 'Logo & Branding',
    description: 'Corporate logo for an export business, symbolizing global reach and reliability.',
    tags: ['Logo Design', 'Corporate', 'Exports'],
    gradient: 'from-secondary via-muted to-primary/10',
    image: portfolioArkaExportsLogo,
  },
  {
    id: 99,
    title: 'Social Media Page Logo',
    category: 'Brand Identity',
    mediaType: 'Logo & Branding',
    description: 'A versatile and scalable custom mark designed specifically for social platforms like Instagram and YouTube. Simple, relatable, and unique.',
    tags: ['Logo Design', 'Social Media', 'Branding'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioOrdinaryGuyLogo,
  },
  {
    id: 17,
    title: 'Logo with Moto',
    category: 'Brand Identity',
    mediaType: 'Logo & Branding',
    description: 'A meaningful logo design that incorporates the motto "Innovation is Transformation".',
    tags: ['Logo Design', 'Motto', 'Branding'],
    gradient: 'from-muted via-primary/15 to-secondary',
    image: portfolioMottoLogo,
  },
  {
    id: 15,
    title: 'Chatbot Logo',
    category: 'Brand Identity',
    mediaType: 'Logo & Branding',
    description: 'A modern, friendly chatbot logo design featuring a minimalist robot icon.',
    tags: ['Logo Design', 'AI', 'Minimalism'],
    gradient: 'from-primary/20 via-secondary to-muted',
    image: portfolioChatbotLogo,
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
  const tabIds = ['Logo & Branding', 'UI/UX', 'Digital & Print Media'] as const;
  type TabId = typeof tabIds[number];

  const tabs: { id: TabId; label: string }[] = [
    { id: 'Logo & Branding', label: 'Logo & Branding' },
    { id: 'UI/UX', label: 'UI/UX' },
    { id: 'Digital & Print Media', label: 'Digital & Print Media' },
  ];

  const [activeTab, setActiveTab] = useState<TabId>('Logo & Branding');

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    
    // Smooth scroll back to the top of the portfolio section
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      // Get the top position of the section, offsetting by ~80px for the sticky tab bar
      const topOffset = portfolioSection.getBoundingClientRect().top + window.scrollY - 80;
      
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  // Swipe gesture logic for gliding between tabs
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      const currentIndex = tabIds.indexOf(activeTab);
      if (isLeftSwipe && currentIndex < tabIds.length - 1) {
        handleTabChange(tabIds[currentIndex + 1]);
      }
      if (isRightSwipe && currentIndex > 0) {
        handleTabChange(tabIds[currentIndex - 1]);
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4 mb-12 text-center"
          >
            <p className="text-label mx-auto">Portfolio</p>
            <div className="section-divider mx-auto" />
          </motion.div>

          {/* Premium Media Tabs - Segmented Pill Style (Sticky) */}
          <div className="sticky top-6 z-40 flex justify-center mb-8 sm:mb-16 px-2 sm:px-4 w-full pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 bg-background/90 border border-border shadow-lg rounded-full backdrop-blur-xl w-full max-w-fit overflow-hidden">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`group relative flex items-center justify-center px-2 py-2 min-[375px]:px-3 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 overflow-hidden whitespace-nowrap border ${
                      isActive ? 'border-transparent' : 'border-border/80 bg-secondary/30 hover:bg-secondary/60 hover:border-primary/50 shadow-sm'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryBg"
                        className="absolute inset-0 bg-primary shadow-sm sm:shadow-lg shadow-primary/30 rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                    
                    {/* Glassmorphism shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full" />
                    
                    <span 
                      className={`relative z-10 font-bold tracking-tighter sm:tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                      style={{ fontSize: 'clamp(9px, 2.5vw, 16px)' }}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div 
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="w-full min-h-[400px] touch-pan-y"
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {workItems
                .filter((item) => item.mediaType === activeTab)
                .map((item) => (
                  <motion.div key={`${activeTab}-${item.id}`} variants={itemVariants} initial="hidden" animate="visible">
                    <PortfolioCard
                      title={item.title}
                      category={item.category}
                      description={item.description}
                      tags={item.tags}
                      gradient={item.gradient}
                      image={item.image}
                      containImage={item.containImage}
                      customBg={item.customBg}
                      radialVariant={item.radialVariant}
                      onClick={() => setSelectedItem(item)}
                    />
                  </motion.div>
                ))}
            </motion.div>
          </div>
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
      </div>
    </section>
  );
};

export default Work;
