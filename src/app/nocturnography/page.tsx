import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nocturnography",
  description:
    "Finding Light In Darkness — how one dark evening in the Greek Islands changed the way I photograph.",
};

export default function Nocturnography() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <h1 className="font-display text-3xl leading-tight text-paper sm:text-4xl">
        Nocturnography
      </h1>
      <p className="mt-3 text-sm uppercase tracking-[0.25em] text-mist">
        Finding Light In Darkness
      </p>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-mist">
        <p>
          In the fall of 2007, I went to the Greek Islands with Wilderness Travel
          and Dan Heller. My goal was to learn more about digital photography and
          get some good exercise — we walked 8–10 miles a day, photographing our
          way across some of the most beautiful parts of the islands. Dan is a
          professional photographer who often goes out on Wilderness tours to
          shoot for their catalog; on this tour, though, he was available to help
          others with their photography. During the day we would walk and take
          pictures, then Dan would review them that night and we would decide
          what to do the next day. Our photography was all done during daylight
          hours.
        </p>

        <figure className="my-10 text-center">
          <Image
            src="/images/tholaria-amorgos.jpg"
            alt="A white Greek church at night above the lights of Aigiali, Amorgos"
            width={300}
            height={201}
            className="mx-auto rounded-sm"
          />
          <figcaption className="mt-3 text-xs text-mist">
            Tholaria, Amorgos, Greece
          </figcaption>
        </figure>

        <p>
          Near the end of the tour we visited the island of Amorgos, not far from
          Santorini. One evening we all went out to photograph a particularly
          great sunset. As we were walking back to the hotel, Dan noticed a shot
          of a classic Greek church with the small town of Aigiali behind it. He
          pointed it out and started shooting.
        </p>

        <p>
          I immediately went into a panic. What do I do? It was dark. My camera
          would not focus and the metering system was flashing an error — okay, I
          could not even see the display, but something was clearly not working
          right. Dan fired off two or three frames before I could figure out how
          to get into manual mode. With his help I took control of my camera, and
          photography as I knew it has never been the same. It opened up a new
          way for me to express myself, and it taught me a skill that improved
          all the rest of my work.
        </p>

        <p>
          In 2009 I decided to get my work on the web. Remembering what night
          photography had done for me, I wondered whether others might benefit
          from learning more about it — and whether the web was a good place to
          make that happen. I gave it a lot of thought and decided to go for it.
          But what should I call it? After a lengthy search, I came up with the
          word <em className="not-italic text-paper">nocturnography</em>:
        </p>

        <blockquote className="border-l border-line pl-6 font-display text-lg leading-relaxed text-paper">
          nocturnography <span className="text-mist">(noun)</span> : Images
          collected by way of film or digital cameras during periods of darkness
          without the benefit of sunlight; as in between sunset and sunrise.
        </blockquote>

        <p>
          It covered a wide range of lighting conditions — from night to low
          light and even light painting. I loved it. So I bought the domain
          nocturnography.com, and there it sat for three whole years. Part of the
          delay was my reservations about publishing on the web, and part of it
          was personal — but that is another story.
        </p>

        <p>
          I want this to be a sharing site. I plan to include material from
          others, not just my own. I hope to inspire and to be inspired. I want
          it to be a place you will return to often, to learn more about using
          and shaping light into a new art form — one that involves the extremes
          of low-light photography.
        </p>

        <figure className="my-12 not-prose">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                src: "/images/night/nelson-mining-rig.jpg",
                alt: "Star trails circling above a light-painted mining rig and vintage tanker truck",
                w: 1600,
                h: 1246,
              },
              {
                src: "/images/night/nelson-gas-station.jpg",
                alt: "An old gas station lit green and gold beneath circular star trails",
                w: 1600,
                h: 1445,
              },
              {
                src: "/images/gallery/desert-driving.jpg",
                alt: "Headlight trails sweeping through the desert under star trails",
                w: 1600,
                h: 1065,
              },
              {
                src: "/images/night/milky-way-desert.jpg",
                alt: "The Milky Way above desert rock, with the photographer's shadow light-painted on the stone",
                w: 1600,
                h: 1058,
              },
            ].map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="w-full rounded-sm"
              />
            ))}
          </div>
          <figcaption className="mt-3 text-xs text-mist">
            Light painting and star trails, Nelson, Nevada.
          </figcaption>
        </figure>

        <p>
          That is where the tagline “Finding Light In Darkness” comes from. There
          is a double meaning in it: finding the light in developing your own
          photographic art, and the way I felt that first time I tried night
          photography. It was an epiphany to learn that I could do this at all —
          and the “darkness” was the unknown of how to create images after dark.
        </p>

        <p>
          If you run across something you would like to share, send it to me. You
          can reach me on the{" "}
          <a
            href="/contact"
            className="text-paper underline decoration-line underline-offset-4 transition-colors hover:decoration-paper"
          >
            contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
