'use client';
import { Star } from 'lucide-react';

export default function ServiceTestimonials({ serviceTitle }) {
  const testimonials = [
    { quote: "Service impeccable ! Résultat au-delà de mes attentes.", author: "Marie L." },
    { quote: `Très professionnel et efficace. Mon ${serviceTitle.toLowerCase()} est comme neuf !`, author: "Thomas B." },
    { quote: "Excellent rapport qualité-prix. Technicien compétent et sympathique.", author: "Sophie D." },
  ];

  return (
    <section className="!py-32 bg-white">
      <div className="container mx-auto px-8 !text-center max-w-6xl">
        <div className="!mb-16">
          <div className="flex items-center justify-center gap-2 !mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="!text-4xl md:!text-5xl font-bold !text-gray-900 !mb-4 !text-center">Nos Clients Sont Ravis</h2>
          <p className="!text-xl !text-gray-600 !text-center">Plus de 50 avis 5 étoiles sur Google</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map(({ quote, author }, i) => (
            <div key={i} className="bg-gray-50 !p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-1 !mb-6 justify-center">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="!text-gray-700 italic !mb-6 !text-lg !text-center">"{quote}"</p>
              <p className="font-semibold !text-gray-900 !text-center">{author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
