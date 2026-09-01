import Gallery from "@/components/Gallery";
import { photos } from "@/data/gallery";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <section className="mb-14 max-w-2xl">
        <h1 className="font-display text-3xl leading-tight text-paper sm:text-5xl">
          Finding light in darkness
        </h1>
        <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
          Landscape and night photography from Morro Bay, California — and from
          wherever the light has been worth waiting for.
        </p>
      </section>

      <Gallery photos={photos} />
    </div>
  );
}
