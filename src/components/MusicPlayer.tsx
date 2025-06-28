"use client";

import { useEffect, useRef, useCallback } from 'react';
import * as Tone from 'tone';

export function MusicPlayer({ play }: { play: boolean }) {
  const playerRef = useRef<Tone.Player | null>(null);
  const isPlayerReady = useRef(false);
  const playWhenReady = useRef(false);

  const startAudio = useCallback(async () => {
    if (!playerRef.current || !isPlayerReady.current) {
      return;
    }

    try {
      await Tone.start();
      if (playerRef.current.state !== 'started') {
        playerRef.current.start();
      }
    } catch (e) {
      console.error("Could not start audio", e);
    }
  }, []);

  useEffect(() => {
    const player = new Tone.Player({
      // Use a fixed filename for simplicity
      url: "/audio/music.mp3",
      loop: true,
      autostart: false,
      onload: () => {
        isPlayerReady.current = true;
        if (playWhenReady.current) {
          startAudio();
        }
      },
      onerror: (error) => {
          console.error("Error loading music file. Make sure 'music.mp3' exists in `public/audio`.", error);
      }
    }).toDestination();
    playerRef.current = player;
    
    return () => {
      player.dispose();
    };
  }, [startAudio]);
  
  useEffect(() => {
    if (play) {
      playWhenReady.current = true;
      if (isPlayerReady.current) {
        startAudio();
      }
    }
  }, [play, startAudio]);

  return null;
}
