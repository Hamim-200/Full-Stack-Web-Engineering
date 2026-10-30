import Image from "next/image";

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#E1F1F8] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-serif text-4xl text-foreground md:text-[2.5rem]">
          Why Choose Wanderlust
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Your trusted partner for exceptional travel experiences
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-7">
              <Image src={feature.icon} alt="" width={38} height={38} />
              <h3 className="mt-5 font-serif text-2xl text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
