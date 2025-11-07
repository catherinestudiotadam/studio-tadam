import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Noir',
    type: 'Restaurant Gastronomique',
    description: 'Expérience culinaire cinématique avec parallax dramatique et sophistication minimaliste.',
    image: 'http://studio-tadam.com/wp-content/uploads/2025/10/Image-2025-10-30-a-11.27.jpeg',
    link: 'https://chase-range-92089086.figma.site',
    tags: ['Réservation', 'Menu dynamique', 'Parallax'],
    color: '#D5B77A',
  },
  {
    title: 'Sérénité',
    type: 'Spa & Bien-être',
    description: 'Site spa haut de gamme avec glassmorphism et expérience immersive zen.',
    image: 'http://studio-tadam.com/wp-content/uploads/2025/10/Image-2025-10-30-a-11.32.jpeg',
    link: 'https://clad-slate-36505838.figma.site',
    tags: ['Réservation', 'Glassmorphism', 'Animations'],
    color: '#EFDAD7',
  },
  {
    title: 'Maison Rustique',
    type: 'Boutique en Ligne',
    description: 'E-commerce de décoration farmhouse moderne. Chaleureux, élégant et conversion-optimisé.',
    image: 'http://studio-tadam.com/wp-content/uploads/2025/10/Image-2025-10-30-a-11.31.jpeg',
    link: 'https://bistre-cleat-50139558.figma.site',
    tags: ['Shopify', 'Panier', 'Paiement'],
    color: '#D5B77A',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-[#D5B77A]/30 rounded-full mb-8">
            <Sparkles size={16} className="text-[#D5B77A]" />
            <span className="text-sm tracking-widest text-[#D5B77A] uppercase">Exemples de designs</span>
          </div>

          <h2 className="mb-6 text-white">
            Mon niveau de
            <br />
            <span className="bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
              création
            </span>
          </h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto mb-4">
            Je ne fais pas de portfolio traditionnel parce que chaque site que je crée est unique.
          </p>
          <p className="text-white/80 text-2xl max-w-2xl mx-auto">
            Mais voici des exemples de design pour que tu voies mon niveau de sophistication.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border-2 border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs uppercase tracking-widest" style={{ color: project.color }}>
                    {project.type}
                  </p>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#00F5FF] transition-colors"
                    >
                      Voir le prototype
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <h3 className="text-white mb-4">{project.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-4 py-2 bg-white/10 text-white/80 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-2 border-white/20 p-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-white mb-6">
              Ton site sera unique, créé pour
              <span className="block bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
                TON univers et TON business
              </span>
            </h3>
            <p className="text-white/70 text-xl mb-10">
              C'est pour ça que je crée une maquette gratuite en 24h.
              <br />
              Tu verras exactement à quoi ressemblera TON site avant de payer.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-5 bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] text-black font-semibold tracking-wider uppercase hover:shadow-2xl hover:shadow-[#00F5FF]/20 transition-all flex items-center justify-center"
            >
              Voir ma maquette gratuite
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}