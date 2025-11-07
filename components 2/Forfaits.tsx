import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

const forfaits = [
  {
    name: 'Landing Page',
    prix: '1000',
    description: '1 page unique et percutante',
    paiement: [
      'Paiement unique: 950$ (économise 50$)',
      '2 paiements: 500$ × 2',
    ],
    features: [
      '1 page unique et percutante',
      'Design responsive',
      'Formulaire de contact',
      'Formation 15 min',
      '1 révision',
      'Livraison 3-5 jours',
    ],
    popular: false,
    color: '#D5B77A',
  },
  {
    name: 'Site Vitrine',
    prix: '1800',
    description: '4-6 pages professionnelles',
    paiement: [
      'Paiement unique: 1,700$ (économise 100$)',
      '2 paiements: 900$ × 2',
    ],
    features: [
      '4-6 pages professionnelles',
      'Design personnalisé',
      'SEO de base',
      'Formation 30 min',
      '2 révisions',
      'Livraison 5-7 jours',
    ],
    popular: true,
    color: '#00F5FF',
  },
  {
    name: 'Site Complet',
    prix: '2500',
    description: '8-10 pages + fonctionnalités avancées',
    paiement: [
      'Paiement unique: 2,350$ (économise 150$)',
      '2 paiements: 1,250$ × 2',
    ],
    features: [
      '8-10 pages',
      'Réservation OU boutique',
      'Paiement intégré (Stripe/PayPal)',
      'Email professionnel',
      'SEO avancé',
      '3 révisions',
      'Livraison 10-14 jours',
    ],
    popular: false,
    color: '#EFDAD7',
  },
];

export function Forfaits() {
  return (
    <section id="forfaits" className="py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D5B77A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00F5FF]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-[#D5B77A]/30 rounded-full mb-8">
            <Sparkles size={16} className="text-[#D5B77A]" />
            <span className="text-sm tracking-widest text-[#D5B77A] uppercase">Tarification</span>
          </div>
          
          <h2 className="text-white mb-6">
            Choisis ton
            <br />
            <span className="bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
              forfait parfait
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Un seul paiement. C'est à toi. Pour toujours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {forfaits.map((forfait, index) => (
            <motion.div
              key={forfait.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm border p-10 ${
                forfait.popular
                  ? 'border-[#00F5FF] shadow-2xl shadow-[#00F5FF]/10 scale-105'
                  : 'border-white/10 hover:border-white/30'
              } transition-all duration-300 group`}
            >
              {forfait.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-6 py-2 bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] text-black text-xs font-semibold tracking-wider uppercase rounded-full">
                    ⭐ Populaire
                  </div>
                </div>
              )}

              <div className={forfait.popular ? 'pt-4' : ''}>
                <h3 className="mb-3 text-white">{forfait.name}</h3>
                <p className="text-white/60 mb-8">{forfait.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-7xl font-bold text-white">{forfait.prix}</span>
                    <span className="text-2xl text-white/60">$</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 space-y-3 mb-8">
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Options de paiement:</p>
                    {forfait.paiement.map((option) => (
                      <p key={option} className="text-sm text-white/80">{option}</p>
                    ))}
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {forfait.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: forfait.color }}
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white/5 border border-white/10 p-6 mb-8">
                  <p className="text-xs text-white/60">
                    <strong className="text-white">Après la livraison:</strong><br />
                    Maintenance optionnelle à partir de 75$/mois<br />
                    (hébergement + support + modifications)
                  </p>
                </div>

                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-4 font-semibold text-sm tracking-wider uppercase transition-all flex items-center justify-center ${
                    forfait.popular
                      ? 'bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] text-black hover:shadow-xl hover:shadow-[#00F5FF]/20'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Démarrer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}