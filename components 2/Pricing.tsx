import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essentiel',
    price: '1 500€',
    description: 'Pour les projets simples et élégants',
    features: [
      'Site vitrine jusqu\'à 5 pages',
      'Design responsive sur mesure',
      'Optimisation SEO de base',
      'Formulaire de contact',
      'Hébergement 1 an inclus',
      '2 révisions incluses'
    ],
    highlight: false
  },
  {
    name: 'Premium',
    price: '3 500€',
    description: 'Pour une présence web exceptionnelle',
    features: [
      'Site jusqu\'à 15 pages',
      'Design UX/UI avancé',
      'Animations personnalisées',
      'Blog / CMS intégré',
      'SEO avancé & Analytics',
      'Formation à la gestion',
      'Support prioritaire 3 mois',
      'Révisions illimitées'
    ],
    highlight: true
  },
  {
    name: 'Sur Mesure',
    price: 'Sur devis',
    description: 'Pour des projets d\'envergure',
    features: [
      'Site complexe / E-commerce',
      'Fonctionnalités personnalisées',
      'Intégrations API tierces',
      'Design system complet',
      'Application web progressive',
      'Support dédié 6 mois',
      'Maintenance continue',
      'Formation équipe'
    ],
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] mb-4"
          >
            TARIFICATION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            Des formules adaptées à vos ambitions
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white p-10 relative ${
                plan.highlight ? 'border-2 border-black' : 'border border-neutral-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 text-sm tracking-wider">
                  POPULAIRE
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="mb-2">{plan.name}</h3>
                <p className="text-sm text-neutral-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 tracking-wide transition-all ${
                  plan.highlight
                    ? 'bg-black text-white hover:bg-black/80'
                    : 'border border-black hover:bg-black hover:text-white'
                }`}
              >
                Choisir ce forfait
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600">
            Tous nos forfaits incluent un design sur mesure et un code de qualité premium.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
