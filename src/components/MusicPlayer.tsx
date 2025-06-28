"use client";

import { useEffect, useRef } from 'react';
import * as Tone from 'tone';

export function MusicPlayer({ play }: { play: boolean }) {
  // Use a ref to hold the player instance.
  // This prevents it from being re-created on every render.
  const playerRef = useRef<Tone.Player | null>(null);

  // This effect runs once when the component mounts.
  // It creates the player and loads the audio file.
  useEffect(() => {
    // Create a new player
    const player = new Tone.Player({
      url: "/audio/music.mp3",
      loop: true,
      autostart: false, // Don't start playing automatically
      onerror: (error) => {
          console.error("Error loading music file. Make sure 'music.mp3' exists in `public/audio`.", error);
      }
    }).toDestination(); // Connect the player to the output

    // Store the player instance in the ref
    playerRef.current = player;
    
    // Cleanup function to dispose of the player when the component unmounts
    return () => {
      player.dispose();
    };
  }, []); // The empty dependency array ensures this effect runs only once

  // This effect handles playing the music.
  // It runs whenever the 'play' prop changes.
  useEffect(() => {
    const player = playerRef.current;

    // We can only play music if the player has been created and the `play` prop is true.
    if (player && play) {
      console.log("Attempting to play music...");
      // Tone.loaded() returns a promise that resolves when all audio files are loaded.
      // This is the safest way to ensure we don't try to play a file that's not ready.
      Tone.loaded().then(() => {
        console.log("Audio files loaded, starting player.");
        // Only start the player if it's not already playing.
        if (player.state !== 'started') {
          player.start();
        }
      });
    }
  }, [play]); // This effect is dependent on the 'play' prop

  return null; // This component doesn't render anything
}
