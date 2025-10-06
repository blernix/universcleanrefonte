'use client';

export default function ServiceFAQ({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="!py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-8 max-w-4xl">
        <h2 className="!text-4xl md:!text-5xl font-bold !text-gray-900 !mb-16 !text-center">
          Questions Fréquentes
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white !p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="!text-xl font-bold !text-gray-900 !mb-4 flex items-start gap-3">
                <span className="!text-blue-600">Q:</span> {faq.q}
              </h3>
              <p className="!text-gray-600 !text-base pl-8">
                <span className="font-semibold !text-blue-600">R:</span> {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
