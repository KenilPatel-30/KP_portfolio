import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kenil Patel — UI/UX & Graphic Designer</title>
        <meta
          name="description"
          content="A design portfolio showcasing UI/UX and graphic design work. Crafting digital experiences that resonate."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;