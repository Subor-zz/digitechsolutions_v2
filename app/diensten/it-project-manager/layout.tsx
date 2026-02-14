import { JsonLd } from '../../components/JsonLd';
import { generateServicePageSeo } from '../../lib/seo';

const { metadata, graphSchema } = generateServicePageSeo({
  title: "IT Project Manager (ZZP) | Digitech Solutions",
  description: "ZZP IT Project Manager voor succesvolle IT-projecten. Projectplanning, stakeholdermanagement, release coördinatie en kwaliteitsbewaking voor Nederlandse organisaties.",
  serviceName: "IT Project Manager",
  serviceSlug: "it-project-manager",
  ogImage: "/images/og-it-project-manager.jpg",
});

export { metadata };

export default function ITProjectManagerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={graphSchema} />
      {children}
    </>
  );
}
