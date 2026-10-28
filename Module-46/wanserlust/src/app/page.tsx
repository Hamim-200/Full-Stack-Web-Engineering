import { Banner } from "@/components/banner";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
