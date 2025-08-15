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
                Happy birthhdayy myyhh Pagli.!!🫶🏻 Wishing you a very very happy birthday..!! I want give you all credit of my whole happiness.!! I'm truly blessed to have you by my side !! 💗.
              </span>
              <span className="block mt-4 opacity-0 animate-text-swoop-in" style={{ animationDelay: '800ms' }}>
                Valo thak amr kaleshi meye ... Tor moto pagli meye ami kokkhono dekhini 😗... Khali kalesh r kalesh.. Sukhe thak ... Kichu kor life aa... Tor masi der tui chara keo nei... Toke kichu ekta korte hobe ... Sei chinta mathai rakh !!! Pora suna toh totaly korisna ... But eei bolchor ta nosto korisna .... Ami genuinely chai tui jeno kichu ekta valo koris... ekta Bhalo jaygai jaash !!!!❤


 <br/>
Ami jani ... Amra ki Obosthai achi akhn.. jaa ee thaki na kno always chesta korbo positive thinking ee thakar !!! Samne ki hobe amra janina ... But positive mentality te thaka hobe amader first priority !!!
              <br/>
Ami joto din achi emni achi sudhu tor ee hoye ☝🏻🤞🏻 .... But ektu jhamela ta komm kor amr valo lagena 😫!!! Ato choto choto jinise ato khit khit .... Valo lage bol.. tor khit khit dekhe ami nijeo pagol hoye jaay .. 🙂... Ektu sovab gulo thik kor 🙂!!  
Thank you for being myhh partner & my best friend of my life !!! Love You So Soo Sooo Much Khushi!!!!💗

              </span>
              <br/><br/>
              <span className="block opacity-0 animate-text-swoop-in" style={{ animationDelay: '1200ms' }}>
                Always,
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
