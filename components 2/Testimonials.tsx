import { motion } from 'motion/react';
import { Star, TrendingUp, Clock, Award } from 'lucide-react';

const stats = [
  {
    number: '15+',
    label: 'Sites livrés ce mois',
    icon: TrendingUp,
  },
  {
    number: '4.9★',
    label: 'Note moyenne',
    icon: Star,
  },
  {
    number: '48h',
    label: 'Livraison maquette',
    icon: Clock,
  },
];

const testimonials = [
  {
    text: "Catherine offre un service impeccable. Elle est à l'écoute de nos besoins et effectue les recherches nécessaires pour nous livrer un produit représentatif de nos valeurs. C'est une personne authentique et transparente. Après 3 ans de recherche, je peux affirmer avec certitude que Catherine fut ma perle rare.",
    author: 'Filomena',
    role: 'Thérapeute',
  },
  {
    text: "Jamais je n'aurais pu mener seule cette tâche jusqu'au bout. Ce que j'ai le plus apprécié, c'est comment tu as compris ce que je voulais que mon site reflète, à la fois sobre, structuré et doux. Tu as su rendre visuellement l'énergie de mon univers.",
    author: 'Marie-Gabrielle',
    role: 'Coach',
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#D5B77A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#00F5FF]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={28} className="text-[#D5B77A]" />
                </div>
                <div className="mb-2">
                  <span className="text-white text-5xl">{stat.number}</span>
                </div>
                <p className="text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-[#D5B77A]/30 rounded-full mb-8">
            <Award size={16} className="text-[#D5B77A]" />
            <span className="text-sm tracking-widest text-[#D5B77A] uppercase">Témoignages</span>
          </div>
          <h2 className="mb-6 text-white">
            Ce qu'elles
            <br />
            <span className="bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
              disent
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 hover:border-[#D5B77A]/30 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#D5B77A] fill-[#D5B77A]" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[#D5B77A] font-semibold">{testimonial.author}</p>
                <p className="text-white/50 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
