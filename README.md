# MINCODE Protocol

Build a dark, brutalist, cyber-industrial music label website called MINCODE. The aesthetic is: black background #0A0A0A, concrete grey #333333, electric blue accent #00F0FF, industrial orange #FF3C00. Typography must be monospaced/grotesk (use Space Mono or IBM Plex Mono from Google Fonts). Zero rounded corners. Zero decorations. Pure tension.

INTERACTIONS & ANIMATIONS (this is critical):

Cursor: custom crosshair cursor that leaves a fading electric blue trail

Page transitions: glitch effect between all sections (RGB split + scanlines flash for 0.3s)

All text headings: scramble/decrypt animation on load (characters randomize then resolve into final word)

Hover on any element: subtle CRT scanline flicker overlay

Noise grain texture overlay on entire site, animated, opacity 8%

Scroll: horizontal smooth scroll on desktop for main navigation sections

NAVIGATION: Full screen menu overlay on hamburger click. Menu items are massive (80-100px), numbered 01 through 12, stacked vertically. Each item glitches on hover. Items: HOME / MUSIC / RADIO / VIDEOS / FOUNDER / ARTISTS / MERCH / NEWS / SUBSCRIBE / DEMO / BOOKINGS / SALES / EXCLUSIVE

HOME SECTION:

Full screen hero, dark video background (use a placeholder dark loop)

Giant scrambling headline: "LA FRECUENCIA ABSOLUTA"

Subtitle in electric blue monospace: "Protocolo de resistencia sonora — Colombia × Berlín"

Bottom ticker/marquee scrolling: "MINIMALISMO · OSCURIDAD · REPETICIÓN · FRICCIÓN · MINIMALISMO · OSCURIDAD ·"

Small animated waveform visualizer at bottom of hero (reactive, bouncing bars in #00F0FF)

MUSIC SECTION:

Grid of releases: each card is square, grayscale image that snaps to color on hover with a glitch frame transition

Filter bar: ALL / RELEASES / EPs / ALBUMS — toggle buttons, no dropdown

ARTISTS SECTION:

Featured artist: full bleed portrait, name in massive type, text overlaid

Below: list view like Drumcode BUT each row expands on click to reveal bio + links + embedded tracks with a smooth accordion animation

Row hover: electric blue left border slides in + row background shifts to #111111

RADIO SECTION:

Active "ON AIR" indicator: pulsing red dot + text

Player bar fixed at bottom of screen: waveform animation while playing, track name scrolling marquee

Set cards in a horizontal scroll carousel

SALES SECTION (Hardware Boutique):

Product cards: square format, product image, name, "X/XX AVAILABLE" counter in orange

Sold out state: red overlay + "SIGNAL DEAD" text

Add to cart interaction: button glitches then confirms

VIDEOS SECTION:

Masonry or staggered grid layout

Video thumbnails: grayscale, on hover color returns + play button morphs in

SUBSCRIBE SECTION:

Single centered email input, brutalist style, full width underline only (no border box)

Submit button: "CONECTAR AL PROTOCOLO"

On submit: terminal-style confirmation text types itself out letter by letter

DEMO & BOOKINGS:

Minimal forms, dark inputs, monospace labels

Field focus: electric blue bottom border animation

EXCLUSIVE CONTENT:

Blurred/locked content grid with "MEMBERS ONLY" overlay

Login prompt in center

FOOTER:

Pure black, minimal

Logo left, nav links center, social icons right

One line quote at very bottom: "Minimalismo como disciplina. Oscuridad como lienzo. Repetición como mantra."

TECHNICAL:

Fully responsive mobile-first

React + Tailwind

Framer Motion for all animations

No white backgrounds anywhere, ever

Mobile nav: same full-screen overlay menu

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mincode-protocol-core.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/94ec5e35-ed33-449e-98c5-18293d8aea07).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
