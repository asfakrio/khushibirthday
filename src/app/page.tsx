"use client";

import { useState } from "react";
import { BirthdayHeader } from "@/components/BirthdayHeader";
import { MemoryLane } from "@/components/MemoryLane";
import { MusicPlayer } from "@/components/MusicPlayer";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Sparkles } from "@/components/Sparkles";
import { SurpriseMessage } from "@/components/SurpriseMessage";

export default function Home() {
  const [playMusic, setPlayMusic] = useState(false);

  const handleReveal = () => {
    setPlayMusic(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden">
      <Sparkles />
      <div className="relative z-10">
        <main className="container mx-auto px-4">
          <BirthdayHeader />
          <PhotoGallery />
          <MemoryLane />
          <SurpriseMessage onReveal={handleReveal} />
        </main>
        <footer className="text-center py-8 text-primary-foreground/70 font-headline text-lg">
          <p>Made with Love by Rio for Khushi.</p>
          <p>Happy Birthday! - August 15th</p>
        </footer>
      </div>
      <MusicPlayer play={playMusic} />
    </div>
  );
}
