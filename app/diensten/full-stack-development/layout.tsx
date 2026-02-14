import { JsonLd } from '../../components/JsonLd';
import { generateServicePageSeo } from '../../lib/seo';

const { metadata, graphSchema } = generateServicePageSeo({
  title: "Full-stack Development | Digitech Solutions",
  description: "Full-stack development voor startups en MKB: MVP's, webapplicaties, API's en mobiele apps. Next.js, React, TypeScript en Node.js specialist in Nederland.",
  serviceName: "Full-stack Development",
  serviceSlug: "full-stack-development",
  ogImage: "/images/og-full-stack.jpg",
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
