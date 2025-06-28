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

// This component now receives photos as a prop
export function PhotoGallery({ photos }: { photos: string[] }) {
  // If no photos are found, display a helpful message
  if (!photos || photos.length === 0) {
    return (
      <section className="py-12 px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl text-center mb-8 font-headline text-primary-foreground drop-shadow-md">Our Precious Moments</h2>
        <div className="max-w-4xl mx-auto p-1">
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-accent/50 shadow-lg">
                <CardContent className="flex flex-col aspect-video items-center justify-center p-6 text-center">
                    <p className="text-2xl font-headline text-primary-foreground mb-4">Your Photo Gallery is Empty</p>
                    <p className="text-lg font-headline text-secondary-foreground">To add pictures, just place your image files inside the `public/images` folder.</p>
                </CardContent>
            </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 relative z-10">
      <h2 className="text-4xl md:text-6xl text-center mb-8 font-headline text-primary-foreground drop-shadow-md">Our Precious Moments</h2>
      <Carousel
        opts={{
          align: "start",
          loop: photos.length > 1, // Only loop if there's more than one photo
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {photos.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-accent/50 shadow-lg hover:shadow-accent/50 transition-shadow duration-300">
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                     <Image 
                        src={src}
                        alt={`A precious moment with Khushi ${index + 1}`}
                        width={400}
                        height={400}
                        className="rounded-md object-cover w-full h-full"
                        data-ai-hint="birthday couple"
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
