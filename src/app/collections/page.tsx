import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CollectionsGallery from "@/components/CollectionsGallery";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore the full body of work from Adora Vanessa Mofunanya and Dela-Fin, couture, ready-to-wear, accessories, footwear, and loungewear, all made by hand.",
};

export default function CollectionsPage() {
  return (
    <section className="container-page pb-28 pt-40 sm:pb-36 sm:pt-48">
      <PageHeader
        eyebrow="The Work"
        heading="Collections"
        body="Couture and eveningwear, ready-to-wear, accessories and footwear, loungewear and streetwear, every piece designed and finished by hand. Filter by category, or browse the full archive."
      />

      <div className="mt-16">
        <CollectionsGallery />
      </div>
    </section>
  );
}
