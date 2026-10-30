"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Michael Chen",
    location: "Singapore",
    photo: "/images/person2.png",
    quote:
      "\"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.\"",
  },
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    photo: "/images/person1.png",
    quote:
      "\"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!\"",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Carousel opts={{ align: "start" }}>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-4xl text-foreground md:text-[2.5rem]">
                What Travelers Say
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <CarouselPrevious
                variant="outline"
                className="relative left-auto size-12 rounded-full bg-transparent text-muted-foreground hover:border-[#1391A5] hover:bg-transparent hover:text-[#1391A5]"
              />
              <CarouselNext
                variant="outline"
                className="relative left-auto size-12 rounded-full bg-transparent text-muted-foreground hover:border-[#1391A5] hover:bg-transparent hover:text-[#1391A5]"
              />
            </div>
          </div>

          <CarouselContent className="mt-10">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-[85%] sm:basis-[calc(50%+0.5rem)]"
              >
                <article className="flex h-full border border-border bg-white p-6">
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="text-[15px] leading-snug text-foreground">
                      {testimonial.quote}
                    </p>
                    <div className="mt-auto pt-8">
                      <p className="text-xs font-medium text-[#1391A5]">
                        — {testimonial.name}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={160}
                    height={192}
                    className="ml-5 h-44 w-36 flex-none object-cover sm:h-48 sm:w-40"
                  />
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
