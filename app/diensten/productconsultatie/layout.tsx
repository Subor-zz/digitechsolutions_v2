import { JsonLd } from '../../components/JsonLd';
import { generateServicePageSeo } from '../../lib/seo';

const { metadata, graphSchema } = generateServicePageSeo({
  title: "Productconsultatie & Technische Validatie | Digitech Solutions",
  description: "Productconsultatie en technische validatie voordat je bouwt. Haalbaarheidsanalyse, scope-bepaling, risico-inventarisatie en architectuur review voor startups en MKB.",
  serviceName: "Productconsultatie",
  serviceSlug: "productconsultatie",
  ogImage: "/images/og-productconsultatie.jpg",
});

export { metadata };

export default function ProductconsultatieLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={graphSchema} />
      {children}
    </>
  );
}
