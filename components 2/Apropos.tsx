import { motion } from 'motion/react';
import { TrendingUp, Lightbulb, Target } from 'lucide-react';

export function Apropos() {
  return (
    <section id="apropos" className="py-32 bg-gradient-to-br from-[#EFDAD7] to-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8">
              Je comprends
              <br />
              <span className="bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
                ton défi
              </span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Je suis <strong className="text-black">Catherine</strong>, et j'ai passé 10 ans en tant que VP vente et marketing digital.
                J'ai lancé mes propres entreprises, j'ai vécu les hauts et les bas de l'entrepreneuriat.
              </p>
              <p>
                Je sais ce que c'est de démarrer avec un budget serré. Je sais l'importance d'avoir un site qui inspire
                confiance dès le premier jour. Et je sais que tu n'as pas le temps d'attendre 3 mois ni le budget pour payer 5000$.
              </p>
              <p>
                <strong className="text-black text-xl">Studio Ta-dam est né de cette réalité.</strong> Des sites professionnels, à prix accessible, livrés rapidement.
                Pas de bullshit marketing, juste des résultats.
              </p>
            </div>

            <div className="mt-12 grid gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#D5B77A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-[#D5B77A]" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Expertise marketing</p>
                  <p className="text-gray-600">Je ne fais pas que du "joli". Je crée des sites qui convertissent parce que je comprends la vente en ligne.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#00F5FF]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-[#00F5FF]" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Vision entrepreneure</p>
                  <p className="text-gray-600">J'ai été à ta place. Je sais exactement ce dont tu as besoin pour lancer sereinement.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#EFDAD7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-[#D5B77A]" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Pas de portfolio traditionnel</p>
                  <p className="text-gray-600">Ton site sera unique, pas un copier-coller. Tu veux quand même voir mon niveau? Regarde mes exemples ci-dessous.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-black to-gray-900 p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B77A]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00F5FF]/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="text-8xl font-bold bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent mb-6"
                >
                  10+
                </motion.div>
                <p className="text-2xl mb-16 text-white">
                  Années d'expérience<br />en marketing digital
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                    <div className="text-5xl font-bold text-[#D5B77A] mb-3">24h</div>
                    <p className="text-white/80">Maquette gratuite</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                    <div className="text-5xl font-bold text-[#00F5FF] mb-3">5-10j</div>
                    <p className="text-white/80">Livraison rapide</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
