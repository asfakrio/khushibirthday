"use client";

import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isInitialized, setIsInitialized] = useState(false);
  const playerRef = useRef<Tone.Player | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !playerRef.current) {
        const player = new Tone.Player({
            url: "/audio/romantic-music.mp3",
            loop: true,
            autostart: false,
        }).toDestination();
        
        playerRef.current = player;
    }

    return () => {
        playerRef.current?.dispose();
    };
  }, []);
  
  const handlePlayPause = async () => {
    if (!isInitialized) {
        try {
            await Tone.start();
            setIsInitialized(true);
        } catch (e) {
            console.error("Audio context could not be started.", e);
            return;
        }
    }
    if (playerRef.current) {
        if (playerRef.current.state === 'started') {
            playerRef.current.stop();
            setIsPlaying(false);
        } else {
            playerRef.current.start();
            setIsPlaying(true);
        }
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (playerRef.current) {
        const volumeInDb = newVolume === 0 ? -Infinity : Tone.gainToDb(newVolume / 100);
        playerRef.current.volume.value = volumeInDb;
    }
    if (newVolume > 0 && isMuted) {
        setIsMuted(false);
        if(playerRef.current) playerRef.current.mute = false;
    }
  };

  const toggleMute = () => {
    if (playerRef.current) {
        playerRef.current.mute = !isMuted;
        setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-card/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-accent/50 flex items-center space-x-3">
      <Button onClick={handlePlayPause} size="icon" variant="ghost">
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      <div className="flex items-center space-x-2 w-32">
        <Button onClick={toggleMute} size="icon" variant="ghost" className="h-8 w-8">
            {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
        <Slider
          value={[isMuted ? 0 : volume]}
          onValueChange={handleVolumeChange}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
}
