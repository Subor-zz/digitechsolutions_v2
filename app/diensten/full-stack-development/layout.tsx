import { JsonLd } from '../../components/JsonLd';
import { generateServicePageSeo } from '../../lib/seo';

const { metadata, graphSchema } = generateServicePageSeo({
  title: "Full-stack development | Web- & app-ontwikkeling | Digitech",
  description: "Van MVP tot schaalbaar product. Web- en mobiele apps gebouwd voor onderhoud, performance en groei. Geen snelle hacks.",
  serviceName: "Full-stack Development",
  serviceSlug: "full-stack-development",
});

export { metadata };

export default function FullStackLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={graphSchema} />
      {children}
    </>
  );
}
