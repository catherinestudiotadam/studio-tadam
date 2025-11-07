import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Découverte',
    description: 'Nous analysons vos besoins, vos objectifs et votre identité pour concevoir une solution parfaitement adaptée.'
  },
  {
    number: '02',
    title: 'Conception',
    description: 'Création de maquettes et prototypes élégants qui donnent vie à votre vision avec précision et créativité.'
  },
  {
    number: '03',
    title: 'Développement',
    description: 'Transformation des designs en sites web performants, avec une attention particulière aux détails techniques.'
  },
  {
    number: '04',
    title: 'Lancement',
    description: 'Mise en ligne optimisée et accompagnement personnalisé pour assurer le succès de votre projet.'
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] mb-4"
          >
            NOTRE PROCESSUS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            Une méthode éprouvée pour votre réussite
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="mb-6">
                <span className="text-6xl tracking-tighter opacity-20">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-4">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-6 w-12 h-px bg-neutral-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
