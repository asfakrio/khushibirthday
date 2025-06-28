import React from 'react';

export function BirthdayHeader() {
  return (
    <header className="py-12 md:py-20 text-center relative z-10">
      <h1 className="text-5xl md:text-8xl font-bold text-primary-foreground animate-glow drop-shadow-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
        Happy Birthday, Khushi
      </h1>
      <p className="text-2xl md:text-3xl text-primary-foreground mt-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
        To the one who makes my world magical
      </p>
    </header>
  );
}
