"use client";
import {
  AlertDialog,
  AlertDialogAction,
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
          <Button size="lg" className="text-2xl px-8 py-6 font-headline animate-pulse">
            <Gift className="mr-2 h-6 w-6" />
            Click to Reveal a Surprise
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-card/90 backdrop-blur-sm border-accent">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-4xl font-headline text-primary-foreground">A Special Message Just For You...</AlertDialogTitle>
            <AlertDialogDescription className="text-2xl font-headline text-secondary-foreground pt-4 leading-relaxed">
              My dearest, my love, my everything. On your special day, I want to remind you of the incredible light you bring into my life. Every day with you is a gift. I love you more than words can say.
              <br/><br/>
              Forever and always,
              <br/>
              Your Name
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-headline text-lg">Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}
