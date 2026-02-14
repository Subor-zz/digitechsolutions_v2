import { JsonLd } from '../../components/JsonLd';
import { generateServicePageSeo } from '../../lib/seo';

const { metadata, graphSchema } = generateServicePageSeo({
  title: "Productconsultatie & Technische Validatie | Digitech Solutions",
  description: "Technische validatie van productideeën, haalbaarheidsanalyse, scope-bepaling en risico-inventarisatie.",
  serviceName: "Productconsultatie",
  serviceSlug: "productconsultatie",
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
