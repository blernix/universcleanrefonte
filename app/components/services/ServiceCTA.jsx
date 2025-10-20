'use client';
import { Calendar } from 'lucide-react';

export default function ServiceCTA() {
  return (
    <section className="!py-32 bg-blue-600">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-10 max-w-6xl">
        {[
          {
            title: "Prêt à réserver votre intervention ?",
            text: "Obtenez votre devis gratuit en moins de 24h. C'est simple, rapide et sans engagement.",
            button: (
              <a
                href="https://app.dispoo.fr/website/368-univers-clean/step1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 !px-8 !py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 no-underline"
              >
                <Calendar className="w-5 h-5" /> Prendre Rendez-vous
              </a>
            ),
          },
          {
            title: "Déjà convaincu par nos clients ?",
            text: "Rejoignez nos centaines de clients satisfaits en Île-de-France.",
            button: (
              <a
                href="tel:+33782364263"
                className="bg-white text-blue-600 !px-8 !py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block no-underline"
              >
                📞 Appeler maintenant
              </a>
            ),
          },
        ].map(({ title, text, button }, i) => (
          <div key={i} className="bg-white/15 backdrop-blur-md rounded-2xl !p-12 text-white !text-center border border-white/20">
            <h3 className="!text-3xl font-bold !mb-6 !text-center">{title}</h3>
            <p className="!mb-8 !text-blue-50 !text-lg !text-center">{text}</p>
            {button}
          </div>
        ))}
      </div>
    </section>
  );
}
