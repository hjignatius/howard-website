import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Howard Ignatius is a retired high-tech marketing executive and photographer based in Morro Bay, California.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <h1 className="font-display text-3xl text-paper sm:text-4xl">About</h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-mist">
        <p>
          Howard Ignatius is a retired high-tech marketing executive from Morro
          Bay, California. He grew up in Minnesota surrounded by the natural
          beauty of Lake Superior and the great “Northland.” Upon graduation from
          the University of Minnesota, he enlisted in the US Navy and purchased
          his first 35mm camera and a complete darkroom.
        </p>
        <p>
          When he returned home from the service, the demands of his career took
          precedence over his photography, and he soon found himself in the
          fast-paced world of semiconductor manufacturing in Silicon Valley. As
          the digital revolution eclipsed film and older imaging technologies, he
          started to invest in new cameras and software — though photography
          would remain a hobby until his retirement.
        </p>
        <p>
          He now combines his love for photography with a strong technology
          background to complement his art in non-traditional and unique ways.
          He has traveled the world extensively, and displays his work here and
          at{" "}
          <a
            href="https://www.nocturnography.com"
            className="text-paper underline decoration-line underline-offset-4 transition-colors hover:decoration-paper"
            target="_blank"
            rel="noopener noreferrer"
          >
            nocturnography.com
          </a>
          .
        </p>
      </div>

      <figure className="mt-14">
        <Image
          src="/images/gallery/morro-bay-christmas.jpg"
          alt="Morro Bay Christmas"
          width={1600}
          height={1065}
          sizes="(max-width: 768px) 100vw, 768px"
          className="w-full rounded-sm"
        />
        <figcaption className="mt-3 text-xs text-mist">
          Morro Bay Christmas — home water.
        </figcaption>
      </figure>
    </div>
  );
}
