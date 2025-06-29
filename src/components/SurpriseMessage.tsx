"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"

export function SurpriseMessage() {
  return (
    <section className="text-center py-20 relative z-10">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="lg" className="text-2xl px-8 py-6 font-headline animate-bounce-and-glow">
            <Gift className="mr-2 h-6 w-6" />
            Click to Reveal a Surprise
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-card/90 backdrop-blur-sm border-accent">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-4xl font-headline text-primary-foreground opacity-0 animate-text-swoop-in" style={{ animationDelay: '100ms' }}>A Special Message Just For You...</AlertDialogTitle>
            <AlertDialogDescription className="text-2xl font-headline text-secondary-foreground pt-4 leading-relaxed">
              <span className="block opacity-0 animate-text-swoop-in" style={{ animationDelay: '400ms' }}>
                My dearest Khushi, my love, my everything.
              </span>
              <span className="block mt-4 opacity-0 animate-text-swoop-in" style={{ animationDelay: '800ms' }}>
                On your special day, I want to remind you of the incredible light you bring into my life. Every day with you is a gift. I love you more than words can say.

                Btw eta emni website test er jonne ache pore eti likha change korbo !!!!
              </span>
              <br/><br/>
              <span className="block opacity-0 animate-text-swoop-in" style={{ animationDelay: '1200ms' }}>
                Forever and always,
              </span>
              <span className="block opacity-0 animate-text-swoop-in text-3xl text-primary-foreground/90" style={{ animationDelay: '1600ms' }}>
                Rio
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-headline text-lg opacity-0 animate-text-swoop-in" style={{ animationDelay: '2000ms' }}>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}
