import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="tracking-wider mb-6">STUDUI-TADAM</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Agence de création web spécialisée dans le design élégant et le développement sur mesure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h5 className="text-sm tracking-wider mb-6">SERVICES</h5>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="hover:text-white transition-colors cursor-pointer">Design UX/UI</li>
              <li className="hover:text-white transition-colors cursor-pointer">Développement Web</li>
              <li className="hover:text-white transition-colors cursor-pointer">Identité Visuelle</li>
              <li className="hover:text-white transition-colors cursor-pointer">Optimisation & SEO</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h5 className="text-sm tracking-wider mb-6">NAVIGATION</h5>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="hover:text-white transition-colors cursor-pointer">Services</li>
              <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
              <li className="hover:text-white transition-colors cursor-pointer">Processus</li>
              <li className="hover:text-white transition-colors cursor-pointer">Tarification</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h5 className="text-sm tracking-wider mb-6">CONTACT</h5>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span>contact@studui-tadam.com</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span>+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Paris, France</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500"
        >
          <p>© 2025 Studui-Tadam. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}
