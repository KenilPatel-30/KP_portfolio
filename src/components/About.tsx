'use client';

import { motion, type Variants } from 'framer-motion';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import profileImage from '@/assets/profile-kenil.jpg';
import origamiImage from '@/assets/about-origami.png';

const skillGroups = [
  {
    title: 'UI/UX & Graphic Designing',
    skills: ['Wireframing', 'User Flows', 'Prototyping', 'Design Systems', 'Visual Design', 'Branding', 'Typography', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Affinity', 'Canva'],
  },
  {
    title: 'Programming Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'C', 'SQL'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Framer', 'Dora AI', 'VS Code', 'Cursor', 'ChatGPT', 'AI chatbots', 'Antigravity', 'Lovable', 'Bolt', 'Nessus', 'Autopsy', 'FTK Imager', 'Acunetix', 'CapCut'],
  },
];

const services = [
  {
    number: '01',
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces with a focus on usability, clarity, and smooth user flow.',
  },
  {
    number: '02',
    title: 'Branding & Logo Design',
    description: 'Creating visual identities that help brands communicate clearly and stand out.',
  },
  {
    number: '03',
    title: 'Graphic Design',
    description: 'Designing marketing creatives, social media graphics, and visual assets for brands.',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const About = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Kenil_Patel_Resume.pdf';
    link.download = 'Kenil Patel.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      toast({
        description: (
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">Resume Downloaded</span>
          </div>
        ),
      });
    }, 500);
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
          {/* Image side - Creative Origami */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-md mx-auto group">
              {/* Soft primary glow behind the object */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

              {/* Floating Animation for the Origami Bust */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src={origamiImage}
                  alt="Creative Origami"
                  className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                />
              </motion.div>

              {/* Decorative accent line/shadow */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary/30 rounded-full blur-sm"
                animate={{ width: [60, 100, 60], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-label">About</p>
              <div className="section-divider" />
            </motion.div>

            <div className="space-y-8">
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold leading-tight"
              >
                Curious. Passionate.<br />
                <span className="text-primary">Intentional.</span>
              </motion.h2>

              <motion.div variants={containerVariants} className="space-y-6 text-muted-foreground">
                <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                  Turning ideas into thoughtful interfaces.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                  Building visual identities that feel<br />
                  simple and functional.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                  Alongside design, I enjoy organizing<br />
                  and managing events.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                  Strong leadership. Clear coordination.<br />
                  Meaningful outcomes.
                </motion.p>
              </motion.div>
            </div>

            {/* Education inline */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-border"
            >
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                <div>
                  <p className="text-label mb-1">Education</p>
                  <p className="text-foreground">B.Tech CSE, GSFC University</p>
                </div>
                <div>
                  <p className="text-label mb-1">Location</p>
                  <p className="text-foreground">Surat, Gujarat, India</p>
                </div>
              </div>
            </motion.div>

            {/* Resume Download Button */}
            <motion.div variants={itemVariants}>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium border-2 border-primary text-primary transition-all duration-300 hover:bg-primary/5 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 mb-16"
          >
            <p className="text-label">Skills</p>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className={`${index === 0 ? 'lg:col-span-12' : 'lg:col-span-6'} bg-card/30 p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors duration-500`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {group.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {group.skills.join(', ')}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 mb-16"
          >
            <p className="text-label">What I Do</p>
            <div className="section-divider" />
          </motion.div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="py-10 border-b border-border hover:border-primary/50 transition-colors duration-500 cursor-default">
                  <div className="flex items-start gap-8">
                    <span className="text-primary font-mono text-sm mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                      {service.number}
                    </span>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-lg text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
