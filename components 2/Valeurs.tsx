import { motion } from 'motion/react';
import { Zap, Sparkles, DollarSign, Palette, Star } from 'lucide-react';

const valeurs = [
  {
    icon: Sparkles,
    title: 'Pour démarrer',
    description: 'Sites web professionnels pour entrepreneures en lancement',
    color: '#D5B77A',
  },
  {
    icon: Zap,
    title: 'Rapide',
    description: 'Livraison en 5-10 jours, pas 3 mois',
    color: '#00F5FF',
  },
  {
    icon: DollarSign,
    title: 'Accessible',
    description: 'Forfaits de 1000$ à 2500$, tout inclus',
    color: '#EFDAD7',
  },
  {
    icon: Palette,
    title: 'Templates personnalisés',
    description: 'Design moderne adapté à TON univers',
    color: '#D5B77A',
  },
  {
    icon: Star,
    title: 'Création pure',
    description: 'Pas de refonte, juste des nouveaux sites',
    color: '#00F5FF',
  },
];

export function Valeurs() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Pourquoi choisir
            <br />
            <span className="bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
              Studio Ta-dam?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valeurs.map((valeur, index) => (
            <motion.div
              key={valeur.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${valeur.color}10, transparent)`,
                }}
              />
              
              <div className="relative z-10">
                <div
                  className="w-14 h-14 mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${valeur.color}20` }}
                >
                  <valeur.icon size={28} style={{ color: valeur.color }} strokeWidth={2} />
                </div>
                
                <h3 className="mb-3">{valeur.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {valeur.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}