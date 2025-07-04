import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Dancing Script"', 'cursive'],
        headline: ['"Dancing Script"', 'cursive'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        glow: {
          '0%, 100%': { 
            textShadow: '0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--accent) / 0.5)'
          },
          '50%': { 
            textShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--accent))'
          },
        },
        'fade-in-up': {
            'from': {
                opacity: '0',
                transform: 'translateY(20px)'
            },
            'to': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        sparkle: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0.5' },
          '50%': { transform: 'scale(1) rotate(180deg)', opacity: '1' },
          '100%': { transform: 'scale(0) rotate(360deg)', opacity: '0' },
        },
        'bounce-and-glow': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            boxShadow: '0 0 15px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--accent) / 0.6)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            boxShadow: '0 0 25px hsl(var(--primary) / 0.8), 0 0 50px hsl(var(--accent) / 0.8)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        'text-swoop-in': {
            '0%': {
                opacity: '0',
                transform: 'translateY(30px) scale(0.95) rotateX(-20deg)',
                filter: 'blur(3px)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0) scale(1) rotateX(0deg)',
                filter: 'blur(0px)',
            },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'bounce-and-glow': 'bounce-and-glow 2s ease-in-out infinite',
        'text-swoop-in': 'text-swoop-in 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
