import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useTypewriter } from "../../hooks/useTypewriter";
import { MMatrixColumn } from "../molecules/MMatrixColumn";
import { AGlow } from "../atoms/AGlow";
import { ACursor } from "../atoms/ACursor";
import { AButton } from "../atoms/AButton";

interface OHeroSectionProps {
  onNav: (section: string) => void;
}

export const OHeroSection: React.FC<OHeroSectionProps> = ({ onNav }) => {
  const t = useTheme();
  const cRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState<Array<{ x: number; speed: number }>>([]);

  const { displayed: l1, done: d1 } = useTypewriter("> HELLO, WORLD!", 70, 500);
  const { displayed: l2, done: d2 } = useTypewriter("> I AM A FULL-STACK DEVELOPER.", 50, 1700);
  const { displayed: l3 } = useTypewriter("> BUILDING DIGITAL EXPERIENCES SINCE 2018.", 40, 3200);

  const ASCII = `  ██╗  ██╗███████╗██╗     ██╗      ██████╗ \n  ██║  ██║██╔════╝██║     ██║     ██╔═══██╗\n  ███████║█████╗  ██║     ██║     ██║   ██║\n  ██╔══██║██╔══╝  ██║     ██║     ██║   ██║\n  ██║  ██║███████╗███████╗███████╗╚██████╔╝\n  ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝`;

  // Masukkan Link Embed Spotify kamu di sini. 
  // Cara dapatnya: Buka Spotify > Share > Embed Playlist > Copy url src-nya.
  const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/album/0vmgk9gXBb172YgnZP40hm?utm_source=generator";
  const SPOTIFY_EMBED_URL_2 = "https://open.spotify.com/embed/album/43WJawNLPtx0rCrx2zCwKq?utm_source=generator";
  const SPOTIFY_EMBED_URL_4 = "https://open.spotify.com/embed/track/3DKdWFSwynfGc9APrIwEm0?utm_source=generator";

  useEffect(() => {
    const w = cRef.current?.offsetWidth || 800;
    setCols(
      Array.from({ length: Math.floor(w / 24) }, (_, i) => ({
        x: i * 24,
        speed: 5 + Math.random() * 8,
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes corner-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--color-primary); }
          50%      { opacity: 0.4; box-shadow: none; }
        }
        @keyframes blink-dot {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        .spotify-embed-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 20px var(--color-primary)33;
          transition: box-shadow 0.3s ease;
        }
        .spotify-embed-container:hover {
          box-shadow: 0 0 30px var(--color-primary)66;
        }
        .spotify-embed-container iframe {
          border: 1px solid var(--color-primary)22;
          border-radius: 12px;
          width: 100%;
          max-width: 400px;
        }
      `}</style>

      <section className="py-12 px-4 sm:px-8 min-h-[85vh] flex flex-col justify-center relative font-mono select-none overflow-hidden bg-transparent text-[var(--color-primary)]">
        {/* Matrix rain background */}
        <div ref={cRef} className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none">
          {cols.map((c, i) => <MMatrixColumn key={i} x={c.x} speed={c.speed} />)}
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <pre className="text-[var(--color-primary)] text-[clamp(0.32rem,0.95vw,0.72rem)] leading-tight mb-8 drop-shadow-[0_0_12px_var(--color-primary)] opacity-85">
              {ASCII}
            </pre>
            <div className="space-y-2.5">
              <div className="text-[clamp(1rem,2.3vw,1.4rem)]">
                <AGlow color={t.accent} size="inherit">{l1}</AGlow>
                {!d1 && <ACursor color={t.accent} />}
              </div>
              <div className="text-[clamp(0.9rem,1.9vw,1.2rem)]">
                <AGlow size="inherit">{l2}</AGlow>
                {d1 && !d2 && <ACursor />}
              </div>
              <div className="text-[clamp(0.82rem,1.6vw,1.05rem)] text-[var(--color-white)]/60">
                {l3}{d2 && <ACursor color={`${t.white}99`} />}
              </div>
            </div>
            <div className="flex gap-4 mt-8 flex-wrap">
              <AButton onClick={() => onNav("PROJECTS")}>[ VIEW_PROJECTS ]</AButton>
              <AButton onClick={() => onNav("CONTACT")} variant="alt">[ HIRE_ME.EXE ]</AButton>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-5 flex justify-center items-center">
          </div>
        </div>

        {/* Spotify Embed - Bottom Center */}
        {(SPOTIFY_EMBED_URL || SPOTIFY_EMBED_URL_2 || SPOTIFY_EMBED_URL_4) && (
          <div className="flex justify-center gap-6 mt-16 flex-nowrap px-4 overflow-x-auto">
            {SPOTIFY_EMBED_URL && (
              <div className="spotify-embed-container min-w-[280px]">
                <iframe
                  data-testid="embed-iframe"
                  src={SPOTIFY_EMBED_URL}
                  width="100%"
                  height="110"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            )}
            {SPOTIFY_EMBED_URL_2 && (
              <div className="spotify-embed-container min-w-[280px]">
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: "12px" }}
                  src={SPOTIFY_EMBED_URL_2}
                  width="100%"
                  height="110"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            )}
            {SPOTIFY_EMBED_URL_4 && (
              <div className="spotify-embed-container min-w-[280px]">
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: "12px" }}
                  src={SPOTIFY_EMBED_URL_4}
                  width="100%"
                  height="110"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};