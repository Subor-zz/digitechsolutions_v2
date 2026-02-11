/**
 * Server-side FAQ Schema Component
 * Renders JSON-LD structured data for FAQ pages.
 * This component does NOT use 'use client' and can be used in Server Components.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FAQItem[];
}

export function FaqSchema({ faqs }: FaqSchemaProps) {
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
