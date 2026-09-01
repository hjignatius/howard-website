import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Howard Ignatius.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <Image
        src="/images/mesa-arch.jpg"
        alt="Sunrise beneath Mesa Arch, Canyonlands National Park, Utah"
        width={1500}
        height={761}
        sizes="(max-width: 1024px) 100vw, 1024px"
        priority
        className="mb-12 w-full rounded-sm"
      />

      <h1 className="font-display text-3xl text-paper sm:text-4xl">Contact</h1>

      <div className="mt-10 max-w-xl">
        <div>
          <p className="mb-8 text-base leading-relaxed text-mist">
            I want to hear from you. Fill out the form below and I&apos;ll get
            back to you as soon as I can.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
