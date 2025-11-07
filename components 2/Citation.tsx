import { motion } from 'motion/react';

export function Citation() {
  return (
    <section className="py-32 bg-[#EFDAD7] relative overflow-hidden">
      {/* Decorative elements - subtle */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <blockquote className="text-4xl md:text-5xl leading-tight mb-12 font-bold text-black">
            "Tu lances ton business et tu mérites un site qui te ressemble.<br />
            <span className="bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
              Pas un template generic.
            </span>"
          </blockquote>
          
          <p className="text-xl text-gray-700">
            Créer ton identité web dès le départ, c'est investir dans ton succès.
          </p>
        </motion.div>
      </div>
    </section>
  );
}