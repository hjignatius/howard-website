"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/data/gallery";

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const active = index === null ? null : photos[index];

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View ${photo.title || "photograph"} full size`}
            className="group relative block w-full cursor-zoom-in overflow-hidden break-inside-avoid rounded-sm bg-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-paper"
          >
            <Image
              src={photo.src}
              alt={photo.title || photo.caption || "Photograph by Howard Ignatius"}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {photo.title && (
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-left font-display text-sm text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {photo.title}
              </span>
            )}
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title || "Photograph"}
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-6 py-4 text-xs text-mist">
            <span>
              {index! + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="transition-colors hover:text-paper"
            >
              Close
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photograph"
              className="absolute left-2 z-10 p-4 text-2xl text-mist transition-colors hover:text-paper sm:left-6"
            >
              ‹
            </button>

            <Image
              src={active.src}
              alt={active.title || active.caption || "Photograph by Howard Ignatius"}
              width={active.width}
              height={active.height}
              sizes="90vw"
              priority
              className="max-h-full w-auto max-w-full object-contain"
            />

            <button
              type="button"
              onClick={next}
              aria-label="Next photograph"
              className="absolute right-2 z-10 p-4 text-2xl text-mist transition-colors hover:text-paper sm:right-6"
            >
              ›
            </button>
          </div>

          {(active.title || active.caption) && (
            <div
              className="px-6 pb-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {active.title && (
                <p className="font-display text-lg text-paper">{active.title}</p>
              )}
              {active.caption && (
                <p className="mx-auto mt-1 max-w-xl text-sm text-mist">
                  {active.caption}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
