import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Combien de temps ça prend vraiment?',
    answer: 'Maquette gratuite: 24h\nLanding Page: 3-5 jours\nSite Vitrine: 5-7 jours\nSite Complet: 10-14 jours\n\nCes délais incluent le design, le développement, et les révisions. Pas de mois d\'attente, pas de surprises.',
  },
  {
    question: 'Qu\'est-ce qui est inclus exactement?',
    answer: 'Tous les forfaits incluent:\n• Design responsive (mobile, tablette, desktop)\n• Site 100% à toi (code source propriétaire)\n• Certificat SSL (sécurité)\n• Formulaire de contact fonctionnel\n• Optimisation SEO de base\n• Formation pour gérer ton contenu\n• Support technique inclus\n\nMaintenance optionnelle après: à partir de 75$/mois si tu veux que je m\'en occupe.\n\nPas de frais cachés. Le prix que tu vois, c\'est le prix que tu paies.',
  },
  {
    question: 'Combien de retouches sont incluses?',
    answer: 'Ça dépend du forfait:\n• Landing Page: 1 révision incluse\n• Site Vitrine: 2 révisions incluses\n• Site Complet: 3 révisions incluses\n\nC\'est largement suffisant quand on a déjà validé la maquette ensemble au départ. Si tu as besoin de modifications supplémentaires après, on peut en discuter. Mon objectif c\'est que tu sois satisfaite, pas de te facturer des extras.',
  },
  {
    question: 'Peux-tu m\'aider avec les textes et photos?',
    answer: 'Oui! Je te guide sur ce qu\'il te faut comme contenu. Tu fournis tes textes et photos, et si besoin, je peux:\n\n• Restructurer tes textes pour qu\'ils convertissent mieux\n• Te suggérer des images stock professionnelles\n• T\'aider avec la rédaction (service additionnel)\n\nL\'important c\'est que ton site reflète TON univers avec tes mots.',
  },
  {
    question: 'Et la maintenance après la livraison?',
    answer: 'Maintenance 100% optionnelle. Après la livraison, tu choisis:\n\nOPTION A: Tu gères toi-même (0$/mois)\n→ Je te forme, le site est à toi, tu fais ce que tu veux\n\nOPTION B: Je m\'en occupe (75-125-200$/mois selon tes besoins)\n→ Hébergement + support + modifications incluses\n→ Sans engagement après 3 mois minimum\n\nLa plupart de mes clientes commencent par gérer elles-mêmes, puis prennent maintenance après 3-6 mois quand elles réalisent qu\'elles préfèrent se concentrer sur leur business.',
  },
  {
    question: 'Pourquoi pas de portfolio visible?',
    answer: 'Parce que ton site ne ressemblera à aucun autre. Je ne fais pas du copier-coller. Chaque site est créé sur-mesure pour l\'entrepreneure qui le commande.\n\nC\'est pour ça que je crée une maquette personnalisée gratuite en 24h. C\'est TON portfolio à toi. Tu vois exactement ce que tu vas avoir avant de payer.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            Questions
            <br />
            <span className="bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
              fréquentes
            </span>
          </h2>
          <p className="text-xl text-gray-600">Tout ce que tu dois savoir avant de démarrer</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-white/50 transition-colors"
              >
                <h4 className="pr-6">{faq.question}</h4>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D5B77A] to-[#00F5FF] rounded-full flex items-center justify-center">
                      <Minus size={20} className="text-black" strokeWidth={2.5} />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#D5B77A] group-hover:to-[#00F5FF] transition-all">
                      <Plus size={20} className="text-gray-600 group-hover:text-black" strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="pl-6 border-l-4 border-gradient-to-b from-[#D5B77A] to-[#00F5FF]" style={{ borderImage: 'linear-gradient(to bottom, #D5B77A, #00F5FF) 1' }}>
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}