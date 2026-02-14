import { JsonLd } from '../../components/JsonLd';
import { generateServicePageSeo } from '../../lib/seo';

const { metadata, graphSchema } = generateServicePageSeo({
  title: "IT Project Manager (ZZP) | Digitech Solutions",
  description: "ZZP IT Project Manager voor planning, stakeholdermanagement, releases en delivery. Senior projectmanagement voor IT-projecten.",
  serviceName: "IT Project Manager",
  serviceSlug: "it-project-manager",
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
