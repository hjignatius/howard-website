import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Howard Ignatius is a retired high-tech marketing executive and photographer based in Lewes, Delaware.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <h1 className="font-display text-3xl text-paper sm:text-4xl">About</h1>

      <Image
        src="/images/howard-portrait.jpg"
        alt="Howard Ignatius with his camera in front of the Teton Range in winter"
        width={1500}
        height={844}
        sizes="(max-width: 768px) 100vw, 768px"
        priority
        className="mt-8 w-full rounded-sm"
      />

      <div className="mt-8 space-y-6 text-base leading-relaxed text-mist">
        <p>
          Howard Ignatius is a retired high-tech marketing executive from
          Lewes, Delaware. He grew up in Minnesota surrounded by the natural
          beauty of Lake Superior and the great “Northland.” Upon graduation
          from the University of Minnesota, he enlisted in the US Navy and
          purchased his first 35mm camera and a complete darkroom.
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
          He has traveled the world extensively, and displays his work here.
        </p>
      </div>

    </div>
  );
}
