import { motion } from 'motion/react';
import { Calendar, Send, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6 text-white">
            Prête à
            <br />
            <span className="bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] bg-clip-text text-transparent">
              lancer?
            </span>
          </h2>
          <p className="text-xl text-white/60">Choisis l'option qui te convient le mieux</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Option 1: Appel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 hover:border-[#D5B77A]/50 transition-all duration-300 group"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D5B77A] to-[#00F5FF] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar size={32} className="text-black" strokeWidth={2} />
              </div>
              <h3 className="mb-3 text-white">Réserve un appel</h3>
              <p className="text-white/60">15 minutes pour discuter de ton projet et recevoir ta maquette gratuite en 24h</p>
            </div>

            <a
              href="https://cal.com/studiotadam/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] text-black text-center font-semibold tracking-wider uppercase hover:shadow-2xl hover:shadow-[#00F5FF]/20 transition-all mb-8"
            >
              Réserver mon appel gratuit
            </a>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {['Lundi 9h-17h', 'Mardi 9h-17h', 'Mercredi 9h-17h', 'Jeudi 9h-17h'].map((time) => (
                <div key={time} className="bg-white/5 border border-white/10 p-3 text-center">
                  <Clock size={16} className="inline-block mr-2 text-[#D5B77A]" />
                  <span className="text-sm text-white/80">{time}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-white/40">Appel Zoom ou téléphone • Sans engagement</p>
          </motion.div>

          {/* Option 2: Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 hover:border-[#00F5FF]/50 transition-all duration-300 group"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00F5FF] to-[#EFDAD7] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Send size={32} className="text-black" strokeWidth={2} />
              </div>
              <h3 className="mb-3 text-white">Envoie un message</h3>
              <p className="text-white/60">Tu préfères écrire? Raconte-moi ton projet ici</p>
            </div>

            <form action="https://formspree.io/f/xgvnyvrv" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider text-white/60 mb-2">Prénom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:border-[#00F5FF] focus:outline-none transition-colors text-white placeholder:text-white/40"
                  placeholder="Marie"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:border-[#00F5FF] focus:outline-none transition-colors text-white placeholder:text-white/40"
                  placeholder="marie@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="forfait" className="block text-xs uppercase tracking-wider text-white/60 mb-2">Forfait intéressé</label>
                <select
                  id="forfait"
                  name="forfait"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:border-[#00F5FF] focus:outline-none transition-colors text-white"
                >
                  <option value="" className="bg-black">Sélectionne une option</option>
                  <option value="landing" className="bg-black">Landing Page - 1000$</option>
                  <option value="vitrine" className="bg-black">Site Vitrine - 1800$</option>
                  <option value="complet" className="bg-black">Site Complet - 2500$</option>
                  <option value="pas-sur" className="bg-black">Pas encore sûre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-white/60 mb-2">Ton projet</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:border-[#00F5FF] focus:outline-none transition-colors resize-none text-white placeholder:text-white/40"
                  placeholder="Dis-moi tout sur ton business et ta vision..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-[#D5B77A] to-[#00F5FF] text-black font-semibold tracking-wider uppercase hover:shadow-2xl hover:shadow-[#00F5FF]/20 transition-all flex items-center justify-center"
              >
                Envoyer ma demande
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D5B77A] rounded-full animate-pulse" />
              <span className="text-white/60">Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00F5FF] rounded-full animate-pulse" />
              <span className="text-white/60">Maquette gratuite</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#EFDAD7] rounded-full animate-pulse" />
              <span className="text-white/60">Sans engagement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}