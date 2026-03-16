# High-End Scrollytelling Portfolio

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and HTML5 Canvas.

## Overview
This project implements a highly optimized scroll-linked image sequence animation using a canvas element to scrub through `.webp` frames perfectly. It features a sticky parallax text overlay and a glass-morphic project gallery below the animation.

## Setup Instructions

Currently, Node.js (`node` and `npm`) isn't available in your system path, so I've manually scaffolded the entire Next.js project structure directly into your directory! 

Once you install Node.js (preferably LTS version 20+), please follow these steps:

1. Open your terminal in this directory:
   `c:\Users\Hitarth\OneDrive\Pictures\Portfolio Needs\sequence`
   
2. Install the necessary packages:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Architecture

- **`components/Scrollytelling.tsx`**: Combines the highly requested `ScrollyCanvas` and `Overlay` mechanisms into a single component. This allows the text fades/parallaxes to synchronize beautifully with the same scroll `target` as the animated canvas frames.
- **`components/Projects.tsx`**: Features the premium "Glass-morphism" aesthetic with glowing borders and backdrop-blur effects.
- **`app/page.tsx`**: The main assembler of all components.
- **`public/sequence`**: Where the sequence of 120 `.webp` images resides.

## Enhancements Included
- Integrated `devicePixelRatio` on the canvas to ensure images remain beautifully sharp on Retina/High-DPI displays.
- Calculated custom `object-fit: cover` math specifically for the Canvas 2D Context so it stays perfectly proportioned on Mobile and Desktop viewports.
- Used dark `#121212` backgrounds seamlessly across `globals.css` and the Canvas `clearRect` phase to prevent any white flashing artifacts.

Enjoy the beautifully smooth animation! Let me know if you want to tweak any specific timing or styles.
