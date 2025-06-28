"use client";

import { useEffect, useRef } from 'react';
import * as Tone from 'tone';

export function MusicPlayer() {
  const playerRef = useRef<Tone.Player | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const startAudio = async () => {
      if (hasStartedRef.current || !playerRef.current || !playerRef.current.loaded) {
        return;
      }
      
      try {
        await Tone.start();
        playerRef.current.start();
        hasStartedRef.current = true;
      } catch (e) {
        console.error("Could not start audio", e);
      }
    };

    playerRef.current = new Tone.Player({
      url: "/audio/romantic-music.mp3",
      loop: true,
      autostart: false,
      onload: () => {
        document.body.addEventListener('click', startAudio, { once: true });
      },
    }).toDestination();

    return () => {
      playerRef.current?.dispose();
      document.body.removeEventListener('click', startAudio);
    };
  }, []);

  return null;
}
