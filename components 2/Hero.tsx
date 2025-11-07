import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #D5B77A 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #00F5FF 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, #EFDAD7 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #D5B77A 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#D5B77A] rounded-full mb-12"
          >
            <span className="text-sm tracking-widest text-[#D5B77A] uppercase">
              Sites web pour entrepreneures qui démarrent
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-white"
          >
            STUDIO
            <br />
            <span className="bg-gradient-to-r from-[#D5B77A] via-[#00F5FF] to-[#EFDAD7] bg-clip-text text-transparent">
              TA-DAM
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6 text-white/80 max-w-3xl mx-auto text-2xl leading-relaxed"
          >
            Un site web professionnel qui te ressemble.
            <br />
            Livré en 5-10 jours. Pas 3 mois.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16 text-white/60 max-w-2xl mx-auto text-lg"
          >
            Fini le Linktree amateur. C'est le temps d'avoir un vrai site qui convertit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-12 py-5 bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] text-black font-semibold tracking-wide overflow-hidden flex items-center justify-center"
            >
              <span className="relative z-10">Maquette gratuite en 24h</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 flex items-center justify-center">Maquette gratuite en 24h</span>
            </button>
            
            <button
              onClick={() => scrollToSection('forfaits')}
              className="px-12 py-5 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-all flex items-center justify-center"
            >
              Voir les forfaits
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D5B77A] mb-2">5-10j</div>
              <div className="text-white/60 text-sm">Livraison rapide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00F5FF] mb-2">1000$</div>
              <div className="text-white/60 text-sm">À partir de</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#EFDAD7] mb-2">24h</div>
              <div className="text-white/60 text-sm">Maquette gratuite</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ 
          y: [0, 10, 0],
          opacity: showScrollIndicator ? 1 : 0
        }}
        transition={{ 
          y: { duration: 2, repeat: Infinity },
          opacity: { duration: 0.3 }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        style={{ pointerEvents: 'none' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}