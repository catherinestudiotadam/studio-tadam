import { motion } from 'motion/react';
import { Code2, Palette, Sparkles, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Design UX/UI',
    description: 'Création d\'interfaces élégantes et intuitives qui captivent vos utilisateurs et reflètent l\'essence de votre marque.'
  },
  {
    icon: Code2,
    title: 'Développement Web',
    description: 'Sites web performants et évolutifs, développés avec les dernières technologies pour une expérience optimale.'
  },
  {
    icon: Sparkles,
    title: 'Identité Visuelle',
    description: 'Conception de logos et chartes graphiques qui donnent une identité unique et mémorable à votre entreprise.'
  },
  {
    icon: Zap,
    title: 'Optimisation & SEO',
    description: 'Amélioration des performances et du référencement pour maximiser votre visibilité en ligne.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] mb-4"
          >
            NOS SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            L'excellence dans chaque détail
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
