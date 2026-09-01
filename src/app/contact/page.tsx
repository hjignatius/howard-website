import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Howard Ignatius.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <h1 className="font-display text-3xl text-paper sm:text-4xl">Contact</h1>

      <div className="mt-10 grid gap-12 md:grid-cols-[1fr_260px]">
        <div>
          <p className="mb-8 text-base leading-relaxed text-mist">
            I want to hear from you. Fill out the form below and I&apos;ll get
            back to you as soon as I can.
          </p>
          <ContactForm />
        </div>

        <aside className="text-sm leading-relaxed text-mist">
          <h2 className="mb-3 font-display text-base text-paper">By mail</h2>
          <p>
            Howard Ignatius
            <br />
            Morro Bay, CA 93442
          </p>

          <h2 className="mb-3 mt-8 font-display text-base text-paper">
            Elsewhere
          </h2>
          <p>
            <a
              href="https://www.nocturnography.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-4 transition-colors hover:text-paper hover:decoration-paper"
            >
              nocturnography.com
            </a>
          </p>
        </aside>
      </div>
    </div>
  );
}
