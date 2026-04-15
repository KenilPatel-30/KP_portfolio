'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // List of disposable/temporary email domains to block
  const disposableDomains = [
    'mailinator.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com',
    'throwaway.email', 'fakeinbox.com', 'trashmail.com', 'temp-mail.org',
    'disposablemail.com', 'yopmail.com', 'getnada.com', 'maildrop.cc',
    'sharklasers.com', 'guerrillamail.info', 'grr.la', 'spam4.me',
    'dispostable.com', 'mailnesia.com', 'tempr.email', 'discard.email',
    'tempail.com', 'mohmal.com', 'emailondeck.com', 'mintemail.com',
    'burnermail.io', 'mailcatch.com', 'spamgourmet.com', 'jetable.org',
    'mytrashmail.com', 'mailexpire.com', 'throwawaymail.com', 'tmpmail.org',
    'tmpmail.net', 'fakemailgenerator.com', 'emailfake.com', 'crazymailing.com'
  ];

  // List of valid/trusted email domains
  const trustedDomains = [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
    'protonmail.com', 'proton.me', 'aol.com', 'mail.com', 'zoho.com',
    'yandex.com', 'gmx.com', 'live.com', 'msn.com', 'me.com', 'mac.com',
    'fastmail.com', 'tutanota.com', 'hey.com', 'pm.me'
  ];

  const isValidEmailDomain = (email: string): boolean => {
    const domain = email.toLowerCase().split('@')[1];
    if (!domain) return false;
    
    // Block disposable domains
    if (disposableDomains.includes(domain)) return false;
    
    // Allow trusted domains
    if (trustedDomains.includes(domain)) return true;
    
    // Allow company/organization domains (has at least one dot and reasonable length)
    const domainParts = domain.split('.');
    if (domainParts.length >= 2 && domainParts[domainParts.length - 1].length >= 2) {
      return true;
    }
    
    return false;
  };

  const validateFields = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'This field is required.';
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!formData.email.trim()) {
      newErrors.email = 'This field is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please use a valid email address.';
      isValid = false;
    } else if (!isValidEmailDomain(formData.email)) {
      newErrors.email = 'Please use a valid email address.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'This field is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateFields()) {
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        description: (
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">Message Sent Successfully</span>
          </div>
        ),
      });

      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        variant: "destructive",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-label">Get in Touch</p>
            <div className="section-divider mx-auto" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            
            Have something in mind? <span className="text-primary">Let's talk.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto pt-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="space-y-2">
                <label className="text-sm text-primary">Name</label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  className={`bg-muted/50 border-muted-foreground/20 focus:border-primary/50 ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-primary">Email</label>
                <Input
                  type="email"
                  placeholder="xyz@example.com"
                  value={formData.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  className={`bg-muted/50 border-muted-foreground/20 focus:border-primary/50 ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-primary">Message</label>
                <Textarea
                  placeholder="Feel free to message me.."
                  value={formData.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  className={`bg-muted/50 border-muted-foreground/20 focus:border-primary/50 min-h-[120px] resize-none ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-medium border-2 border-primary text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(84,81%,44%,0.3)] hover:border-primary/80 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
