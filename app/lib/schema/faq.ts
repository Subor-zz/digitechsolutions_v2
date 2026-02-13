// FAQPage schema builder

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSchema {
  "@type": "FAQPage";
  "@id"?: string;
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

/**
 * Creates a FAQPage schema from an array of Q&A items
 * @param items - Array of FAQ items with question and answer
 * @returns FAQPage schema object
 */
export function createFAQSchema(items: FAQItem[]): FAQSchema {
  return {
    "@type": "FAQPage",
    "@id": "#faq",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Type guard to check if object is a valid FAQItem
 */
export function isFAQItem(item: unknown): item is FAQItem {
  return (
    typeof item === "object" &&
    item !== null &&
    "question" in item &&
    "answer" in item &&
    typeof (item as FAQItem).question === "string" &&
    typeof (item as FAQItem).answer === "string"
  );
}
