'use client';

import { useScrollReveal } from './scroll-reveal';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  showHeader?: boolean;
}

// FAQPage Schema Component (Server-side friendly)
export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQSection({ faqs, showHeader = false }: FAQSectionProps) {
  const [ref, isIntersecting] = useScrollReveal();
  const baseClass = `scroll-reveal reveal-pending${isIntersecting ? ' revealed' : ''}`;

  return (
    <>
      {showHeader && (
        <div ref={ref} className={baseClass}>
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-3">
              Veelgestelde vragen
            </h2>
          </header>
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const [faqRef, faqIsIntersecting] = useScrollReveal();
          const delayClass = ` delay-${(index + 1) * 100}`;
          const faqBaseClass = `scroll-reveal reveal-pending${faqIsIntersecting ? ' revealed' : ''}${delayClass}`;

          return (
            <div key={index} ref={faqRef} className={faqBaseClass}>
              <details className="bg-white rounded-xl group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-deepBlue">{faq.question}</h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            </div>
          );
        })}
      </div>
    </>
  );
}
