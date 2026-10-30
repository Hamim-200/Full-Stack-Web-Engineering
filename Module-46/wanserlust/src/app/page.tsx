import { Banner } from "@/components/home/banner";
import { CtaBanner } from "@/components/home/cta-banner";
import { Testimonials } from "@/components/home/testimonials";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <main>

      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
