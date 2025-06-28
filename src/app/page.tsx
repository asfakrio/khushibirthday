import { BirthdayHeader } from "@/components/BirthdayHeader";
import { MemoryLane } from "@/components/MemoryLane";
import { MusicPlayer } from "@/components/MusicPlayer";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Sparkles } from "@/components/Sparkles";
import { SurpriseMessage } from "@/components/SurpriseMessage";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden">
      <Sparkles />
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <BirthdayHeader />
          <PhotoGallery />
          <MemoryLane />
          <SurpriseMessage />
        </main>
        <footer className="text-center py-8 text-primary-foreground/70 font-headline text-lg">
          <p>Made with Love for the most special person in the world.</p>
          <p>Happy Birthday! - August 15th</p>
        </footer>
      </div>
      <MusicPlayer />
    </div>
  );
}
