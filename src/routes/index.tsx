import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Clock,
  Phone,
  Truck,
  Warehouse,
  ShieldCheck,
  BadgeCheck,
  Wrench,
  CircleDot,
  BatteryCharging,
  Droplets,
  ArrowRight,
  Check,
} from "lucide-react";

import heroImg from "@/assets/hero-warehouse.jpg";
import mapImg from "@/assets/map-benghazi.jpg";
import transparentLogo from "@/assets/libyan-road-logo-transparent.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Libyan Road Company | Auto Parts & Tires Wholesale, Benghazi" },
      {
        name: "description",
        content:
          "Benghazi's premier importer and wholesale distributor of automotive spare parts, tires, batteries and lubricants. Request a trade quote today.",
      },
      { property: "og:title", content: "Libyan Road Company | Wholesale Auto Parts, Benghazi" },
      {
        property: "og:description",
        content:
          "Spare parts, tires, batteries and lubricants supplied to garages, fleets and retailers across Libya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Partners", href: "#partners" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  {
    icon: Wrench,
    title: "Spare Parts",
    text: "Filters, brake systems, suspension, belts, electrical and engine components for Japanese, Korean, European and American models.",
    points: ["OEM & quality aftermarket", "Fast-moving lines always in stock", "Full VIN-based sourcing"],
  },
  {
    icon: CircleDot,
    title: "Tires",
    text: "Passenger, 4x4, light truck and commercial tires sized for Libyan road and desert conditions, stored in shaded racking.",
    points: ["13\" to 22.5\" range", "Container-load pricing", "DOT-fresh stock rotation"],
  },
  {
    icon: BatteryCharging,
    title: "Batteries",
    text: "Sealed maintenance-free and heavy-duty batteries built for high ambient temperatures, delivered charge-tested.",
    points: ["45Ah to 200Ah", "Heat-resistant chemistry", "Warranty-backed batches"],
  },
  {
    icon: Droplets,
    title: "Lubricants",
    text: "Engine oils, gear oils, coolants and greases in retail packs, pails and drums, with API and ACEA certification.",
    points: ["Synthetic & mineral grades", "Drum and pail volumes", "Certified supply chain"],
  },
];

const VALUES = [
  {
    icon: Warehouse,
    title: "Deep Warehouse Stock",
    text: "Over 12,000 SKUs held in our Benghazi facility, so orders leave the shelf instead of waiting on a shipment.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    text: "Own fleet across Benghazi and scheduled freight to Tripoli, Misrata, Al Bayda, Tobruk and Sabha.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Sourcing",
    text: "Direct import agreements with manufacturers and authorised exporters — no grey-market inventory.",
  },
  {
    icon: BadgeCheck,
    title: "Trade Pricing",
    text: "Tiered wholesale pricing with credit terms for garages, fleet operators and retail partners.",
  },
];

const STANDARDS = [
  {
    title: "Direct Import Agreements",
    text: "We buy from manufacturers and authorised regional exporters in the Gulf, Türkiye, and East Asia under written supply agreements.",
  },
  {
    title: "Documented Certification",
    text: "Every lubricant and battery batch arrives with API, ACEA or IEC documentation available to our trade customers on request.",
  },
  {
    title: "Climate-Aware Storage",
    text: "Tires and chemicals are held in shaded, ventilated racking with stock rotation to protect shelf life in Libyan summers.",
  },
  {
    title: "Inspection on Arrival",
    text: "Containers are opened and sampled against packing lists before stock is released for sale — mismatches are rejected.",
  },
];

const STATS = [
  { value: "4", label: "Core product lines" },
  { value: "12,000+", label: "Parts SKUs in stock" },
  { value: "600+", label: "Trade customers" },
  { value: "6", label: "Cities served weekly" },
];

function Logo() {
  return (
    <a
      href="#home"
      className="group relative flex h-14 w-[7.25rem] shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border bg-card px-2 py-1 shadow-sm sm:w-32"
      aria-label="Libyan Road Company home"
    >
      <span className="absolute inset-y-0 left-0 w-1 bg-steel" aria-hidden="true" />
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" aria-hidden="true" />
      <img
        src={transparentLogo}
        alt="Libyan Road Company logo"
        width={910}
        height={571}
        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5-1.34A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.52-4.51-1.42l-.32-.21-2.97.79.79-2.89-.21-.33A8.01 8.01 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.36-5.92c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.65-.14-.24-.02-.37.1-.49.12-.12.24-.3.36-.45.12-.15.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.76-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.59 4.1 3.64.58.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.08.2-.5.2-.92.14-1.08-.06-.16-.22-.24-.46-.36z" />
    </svg>
  );
}

function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 hidden h-9 items-center border-b border-navy-foreground/10 bg-navy text-navy-foreground sm:flex">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 text-xs sm:px-6">
        <div className="flex items-center gap-4">
          <a href="mailto:info@libyanrc.com" className="flex items-center gap-1.5 hover:text-accent">
            <Mail className="size-3.5" /> info@libyanrc.com
          </a>
          <span className="flex items-center gap-1.5 text-navy-foreground/70">
            <Clock className="size-3.5" /> Sat–Thu 08:00–18:00
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+218942143587" className="flex items-center gap-1.5 hover:text-accent">
            <Phone className="size-3.5" /> +218 94 214 3587
          </a>
          <a
            href="https://wa.me/218942143587"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-green-400 hover:text-green-300"
          >
            <WhatsAppIcon className="size-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header
        className={`fixed inset-x-0 top-9 z-40 transition-all ${
          scrolled ? "border-b border-border bg-background/95 backdrop-blur" : "bg-background"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
          <Logo />
          <nav className="hidden justify-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="tel:+218942143587"
              className="hidden items-center gap-1.5 rounded-sm border border-border px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary lg:inline-flex"
              aria-label="Call us"
            >
              <Phone className="size-4" />
              <span className="hidden xl:inline">+218 94 214 3587</span>
            </a>
            <a
              href="#contact"
              className="hidden rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-block"
            >
              Request a Quote
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-sm border border-border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-medium last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="my-3 rounded-sm bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                Request a Quote
              </a>
              <div className="flex flex-col gap-2 border-t border-border/60 pt-3">
                <a
                  href="tel:+218942143587"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm font-medium"
                >
                  <Phone className="size-4" /> +218 94 214 3587
                </a>
                <a
                  href="https://wa.me/218942143587"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-green-600"
                >
                  <WhatsAppIcon className="size-4" /> WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
        <div className="road-line h-0.5 w-full opacity-70" />
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy pt-32">
      <img
        src={heroImg}
        alt="Libyan Road Company distribution warehouse with tires, lubricant drums and a delivery truck"
        width={1600}
        height={1008}
        className="absolute inset-0 -z-10 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      <div className="tread absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          Benghazi, Libya
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-bold text-navy-foreground uppercase sm:text-6xl lg:text-7xl">
          Keeping Libya&apos;s
          <span className="text-accent"> Roads Moving</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
          Libyan Road Company is Benghazi&apos;s premier importer and wholesale distributor of
          automotive spare parts, tires, batteries and lubricants — supplying garages, fleets and
          retailers with genuine stock, at trade prices, ready to collect today.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Request a Quote <ArrowRight className="size-4" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-sm border border-navy-foreground/25 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
          >
            Browse Product Lines
          </a>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-navy-foreground/15 bg-navy-foreground/15 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-navy px-5 py-6">
              <dt className="font-display text-3xl font-bold text-accent sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-xs tracking-wider text-navy-foreground/65 uppercase">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-3xl font-bold uppercase sm:text-4xl ${
          light ? "text-navy-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="A supply partner built for Libyan workshops"
            text="Based in Benghazi, Libyan Road Company is a wholesale import and distribution business serving repair shops, fleet operators, government workshops and retail stores across eastern and southern Libya."
          />
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Our buying team works directly with manufacturers and authorised exporters, clearing our
            own containers through Benghazi port. That control means our customers get consistent
            quality, honest lead times and pricing that holds — even when the market moves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Open a trade account <ArrowRight className="size-4" />
            </a>
            <a
              href="#location"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Visit the warehouse
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <v.icon className="size-6 text-accent" strokeWidth={2} />
              <h3 className="mt-4 font-display text-xl font-semibold uppercase">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="relative border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Product Lines"
          title="Four categories, one delivery note"
          text="Everything a workshop or retailer restocks weekly, consolidated into a single wholesale order."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              <span className="grid size-12 place-items-center rounded-sm bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <p.icon className="size-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold uppercase">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
              >
                Ask for pricing <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="relative isolate overflow-hidden bg-navy">
      <div className="tread absolute inset-0 -z-10 opacity-50" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Why Libyan Road"
          title="Stock you can count on, week after week"
          text="Wholesale buyers do not need slogans — they need availability, documentation and delivery that arrives when promised."
          light
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-navy-foreground/15 bg-navy-foreground/15 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              n: "01",
              t: "Order by noon, ship same day",
              d: "In-stock lines picked and dispatched within Benghazi the same working day.",
            },
            {
              n: "02",
              t: "Real availability, live counts",
              d: "Our counter team quotes from live stock — no promises against a container at sea.",
            },
            {
              n: "03",
              t: "Warranty handled locally",
              d: "Battery and lubricant claims processed in Benghazi, not routed abroad.",
            },
            {
              n: "04",
              t: "Bulk and container terms",
              d: "Full-container programmes for retailers who want to buy at import cost.",
            },
          ].map((item) => (
            <div key={item.n} className="bg-navy p-7">
              <span className="font-display text-4xl font-bold text-accent/70">{item.n}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy-foreground uppercase">
                {item.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Partner Standards"
        title="How we choose what we import"
        text="Every supplier we work with is held to the same four commitments before a single pallet enters our warehouse."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {STANDARDS.map((s, i) => (
          <div key={s.title} className="flex gap-5 rounded-sm border border-border bg-card p-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-accent/15 font-display text-lg font-bold text-accent">
              {i + 1}
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold uppercase">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="road-line mt-14 h-1 w-full rounded-full opacity-50" />
    </section>
  );
}

function Rfq() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full rounded-sm border border-border bg-background px-3.5 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

  return (
    <section id="contact" className="border-y border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-24">
        <div>
          <SectionHeading
            eyebrow="Request a Quote"
            title="Tell us what you need to restock"
            text="Send your list — part numbers, tire sizes, battery ratings or oil grades — and our trade desk replies with pricing and availability within one working day."
          />
          <ul className="mt-8 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "info@libyanrc.com", href: "mailto:info@libyanrc.com" },
              { icon: Phone, label: "Phone", value: "+218 94 214 3587", href: "tel:+218942143587" },
              { icon: MapPin, label: "Warehouse", value: "Ring Road 6, Benghazi, Libya" },
              { icon: Clock, label: "Hours", value: "Sat–Thu, 08:00 – 18:00" },
            ].map((c) => (
              <li key={c.label} className="flex items-start gap-3">
                <c.icon className="mt-0.5 size-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="font-medium break-words hover:text-accent">
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-medium break-words">{c.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/218942143587"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-sm bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="size-4" /> Chat on WhatsApp
          </a>
        </div>

        <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
          {sent ? (
            <div className="py-14 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent/15">
                <Check className="size-7 text-accent" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold uppercase">Request sent</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you — our trade desk will reply within one working day.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-sm border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Full name
                </label>
                <input id="name" name="name" required className={field} placeholder="Ahmed Sharaf" />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                  Company
                </label>
                <input id="company" name="company" className={field} placeholder="Garage or store" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={field}
                  placeholder="you@company.ly"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="category" className="mb-1.5 block text-sm font-medium">
                  Product category
                </label>
                <select id="category" name="category" className={field} defaultValue="">
                  <option value="" disabled>
                    Select a category
                  </option>
                  {PRODUCTS.map((p) => (
                    <option key={p.title} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                  <option value="Mixed">Mixed order</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="details" className="mb-1.5 block text-sm font-medium">
                  What do you need?
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  className={field}
                  placeholder="Part numbers, tire sizes, quantities, vehicle models…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:col-span-2"
              >
                Send request <ArrowRight className="size-4" />
              </button>
              <p className="text-xs text-muted-foreground sm:col-span-2">
                Wholesale enquiries only. We reply Sat–Thu during business hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Find Us"
        title="Benghazi warehouse & trade counter"
        text="Our Benghazi loading bays are open for pickups and light trucks. Collections welcome without an appointment."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative overflow-hidden rounded-sm border border-border">
          <img
            src={mapImg}
            alt="Stylised map of Benghazi showing the Libyan Road Company warehouse district"
            width={1200}
            height={800}
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96 lg:h-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="grid size-11 place-items-center rounded-full bg-accent shadow-lg ring-8 ring-accent/25">
              <MapPin className="size-5 text-accent-foreground" />
            </span>
          </div>
          <div className="absolute bottom-4 left-4 rounded-sm bg-background/95 px-4 py-3 backdrop-blur">
            <p className="font-display text-base font-semibold uppercase">Libyan Road Company</p>
            <p className="text-xs text-muted-foreground">Ring Road 6, Benghazi, Libya</p>
          </div>
        </div>
        <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold uppercase">Visit or collect</h3>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-xs tracking-widest text-muted-foreground uppercase">Address</dt>
              <dd className="mt-1 font-medium">Ring Road 6, Benghazi, Libya</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-muted-foreground uppercase">
                Counter hours
              </dt>
              <dd className="mt-1 font-medium">Saturday – Thursday, 08:00 – 18:00</dd>
            </div>
            <div>
              <dt className="text-xs tracking-widest text-muted-foreground uppercase">
                Delivery days
              </dt>
              <dd className="mt-1 font-medium">
                Benghazi daily · Tripoli, Misrata, Al Bayda, Tobruk, Sabha weekly
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="road-line h-0.5 w-full opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="relative inline-flex w-48 items-center justify-center overflow-hidden rounded-sm border border-steel/45 bg-navy-foreground px-4 py-3 shadow-lg">
            <span className="absolute inset-y-0 left-0 w-1 bg-steel" aria-hidden="true" />
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" aria-hidden="true" />
            <img
              src={transparentLogo}
              alt="Libyan Road Company logo"
              width={910}
              height={571}
              loading="lazy"
              className="h-24 w-full object-contain"
            />
          </div>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/65">
            Importer and wholesale distributor of automotive spare parts, tires, batteries and
            lubricants, serving Benghazi and all of Libya.
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm tracking-widest uppercase">Navigate</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-accent">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm tracking-widest uppercase">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
            <li>
              <a href="mailto:info@libyanrc.com" className="hover:text-accent">
                info@libyanrc.com
              </a>
            </li>
            <li>
              <a href="tel:+218942143587" className="hover:text-accent">
                +218 94 214 3587
              </a>
            </li>
            <li>Ring Road 6, Benghazi, Libya</li>
            <li>Sat – Thu, 08:00 – 18:00</li>
            <li>
              <a
                href="https://wa.me/218942143587"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300"
              >
                <WhatsAppIcon className="size-3.5" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Libyan Road Company. All rights reserved.</p>
          <p>Wholesale &amp; trade supply · Benghazi, Libya</p>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <Partners />
        <Rfq />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
