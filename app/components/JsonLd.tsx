// Reusable JSON-LD structured data component
// Use this to inject schema.org structured data into pages

interface JsonLdProps {
  /**
   * The schema data to render
   * Can be a single schema object or an array (will be wrapped in @graph)
   */
  data: object | object[];
}

/**
 * Component for rendering JSON-LD structured data
 *
 * @example
 * // Single schema
 * <JsonLd data={createOrganizationSchema()} />
 *
 * @example
 * // Multiple schemas (automatically wrapped in @graph)
 * <JsonLd data={[orgSchema, serviceSchema, faqSchema]} />
 *
 * @example
 * // Using the composer function
 * <JsonLd data={createServicePageSchema(config)} />
 */
export function JsonLd({ data }: JsonLdProps) {
  // If array, wrap in @graph structure
  const jsonLd = Array.isArray(data)
    ? {
        "@context": "https://schema.org",
        "@graph": data,
      }
    : {
        "@context": "https://schema.org",
        ...data,
      };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

/**
 * Component for rendering multiple separate JSON-LD scripts
 * Use when you need separate script tags instead of @graph
 */
interface JsonLdArrayProps {
  schemas: object[];
}

export function JsonLdArray({ schemas }: JsonLdArrayProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
    </>
  );
}
