"use client";

import { useEffect, useRef } from 'react';
import * as Tone from 'tone';

export function MusicPlayer({ play }: { play: boolean }) {
  const playerRef = useRef<Tone.Player | null>(null);
  const hasStartedRef = useRef(false);

  // Initialize the player
  useEffect(() => {
    playerRef.current = new Tone.Player({
      url: "/audio/your-song.mp3",
      loop: true,
      autostart: false,
    }).toDestination();

    return () => {
      playerRef.current?.dispose();
    };
  }, []);
  
  // Start playing when the 'play' prop becomes true
  useEffect(() => {
    const startAudio = async () => {
      if (!playerRef.current || hasStartedRef.current) return;

      try {
        // This requires a user gesture, which we get from the button click
        await Tone.start();
        // Wait for all buffers to load
        await Tone.loaded();
        // Start the player
        playerRef.current.start();
        hasStartedRef.current = true;
      } catch (e) {
        console.error("Could not start audio", e);
      }
    };

    if (play) {
      startAudio();
    }
  }, [play]);

  return null;
}
