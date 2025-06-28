"use client"
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const photos = [
  { src: "/images/photo1.jpg", alt: "A loving couple", hint: "couple smiling" },
  { src: "/images/photo2.jpg", alt: "A beautiful memory", hint: "couple beach" },
  { src: "/images/photo3.jpg", alt: "A happy moment", hint: "couple nature" },
  { src: "/images/photo4.jpg", alt: "A shared laugh", hint: "couple laughing" },
  { src: "/images/photo5.jpg", alt: "A quiet walk", hint: "couple walking" },
  { src: "/images/photo6.jpg", alt: "A romantic dinner", hint: "couple dinner" },
];

export function PhotoGallery() {
  return (
    <section className="py-12 px-4 relative z-10">
      <h2 className="text-4xl md:text-6xl text-center mb-8 font-headline text-primary-foreground drop-shadow-md">Our Precious Moments</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-accent/50 shadow-lg hover:shadow-accent/50 transition-shadow duration-300">
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                     <Image 
                        src={photo.src}
                        alt={photo.alt}
                        width={400}
                        height={400}
                        className="rounded-md object-cover w-full h-full"
                        data-ai-hint={photo.hint}
                     />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-primary-foreground bg-primary hover:bg-accent" />
        <CarouselNext className="text-primary-foreground bg-primary hover:bg-accent" />
      </Carousel>
    </section>
  );
}
