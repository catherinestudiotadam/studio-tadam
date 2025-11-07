import { motion } from 'motion/react';
import { Phone, Palette, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Appel découverte',
    description: 'On discute 15 minutes de ton projet, ton univers, tes besoins. C\'est gratuit et sans engagement.',
    color: '#D5B77A',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Maquette gratuite',
    description: 'Tu reçois une maquette personnalisée en 24h pour voir exactement à quoi ressemblera ton site. Zéro surprise.',
    color: '#00F5FF',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Tu approuves',
    description: 'La maquette te plaît? On démarre! Tu choisis ton forfait et je me mets au travail immédiatement.',
    color: '#EFDAD7',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Site livré',
    description: 'Ton site est prêt en 5-10 jours. Formation incluse pour que tu puisses le gérer toi-même. Tu lances!',
    color: '#D5B77A',
  },
];

export function Processus() {
  return (
    <section id="processus" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#D5B77A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Un processus
            <br />
            <span className="bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
              simple et rapide
            </span>
          </h2>
          <p className="text-xl text-gray-600">De l'idée au site en ligne en 4 étapes</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 h-full hover:border-transparent hover:shadow-2xl transition-all duration-300">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                  }}
                />
                
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon size={32} style={{ color: step.color }} strokeWidth={2} />
                  </div>
                  
                  <div className="text-6xl font-bold mb-4 opacity-10">{step.number}</div>
                  <h3 className="mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-20">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M12 8L20 16L12 24"
                      stroke={step.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}