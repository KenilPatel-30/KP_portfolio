'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  image?: string;
  onClick?: () => void;
}

const PortfolioCard = ({ title, category, description, tags, gradient, image, onClick }: PortfolioCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative cursor-pointer"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-border/50 bg-card"
        animate={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          animate={{
            boxShadow: isHovered
              ? '0 0 0 1px hsl(var(--primary) / 0.5), 0 0 30px hsl(var(--primary) / 0.15), 0 25px 50px -12px hsl(var(--foreground) / 0.15)'
              : '0 0 0 0px transparent, 0 0 0px transparent, 0 4px 6px -1px hsl(var(--foreground) / 0.05)',
          }}
          transition={{ duration: 0.4 }}
        />

        <div className={`aspect-[16/10] ${image ? '' : `bg-gradient-to-br ${gradient}`} relative overflow-hidden`}>
          {image && (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          )}

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute w-40 h-40 rounded-full bg-primary/10 blur-2xl pointer-events-none"
            animate={{
              x: mousePosition.x * 5,
              y: mousePosition.y * 5,
              opacity: isHovered ? 0.6 : 0,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />

          <motion.div
            className="absolute bottom-6 left-6 right-6"
            animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ transform: 'translateZ(20px)' }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-primary"
                animate={{ scale: isHovered ? 1.2 : 1 }}
              />
              <span className="text-base font-medium text-foreground drop-shadow-md">{title}</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            animate={{ y: isHovered ? 0 : 40, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ transform: 'translateZ(30px)' }}
          >
            <motion.p
              className="text-label text-primary mb-2"
              animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {category}
            </motion.p>
            <motion.h3
              className="text-xl font-semibold text-foreground mb-3"
              animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-sm text-muted-foreground mb-4 line-clamp-2"
              animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2"
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-secondary-foreground border border-border/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                  transition={{ duration: 0.2, delay: 0.25 + index * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
