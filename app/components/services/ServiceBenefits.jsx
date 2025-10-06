'use client';
import { Check } from 'lucide-react';

export default function ServiceBenefits({ benefits }) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="!py-32 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <h2 className="!text-4xl md:!text-5xl font-bold !text-gray-900 !mb-16 !text-center">
          Tous les Avantages de Notre Service
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 !p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="!text-gray-700 !text-base">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
