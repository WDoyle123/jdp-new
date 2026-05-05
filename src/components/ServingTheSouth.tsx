import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import mapImage from "../assets/map.webp";

const cities = [
  "Portsmouth",
  "Southampton",
  "Chichester",
  "Winchester",
  "Isle of Wight",
  "Salisbury",
  "Bournemouth",
];

const cityVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const pillVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function ServingTheSouth() {
  return (
    <section className="py-24 px-6 bg-olive-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p className="text-olive-light text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Our Coverage
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Serving the South
          </h2>
          <p className="text-cream/70 text-base leading-relaxed mb-10">
            Based in Hampshire, The John Doyle Partnership proudly supports individuals and
            businesses across the South of England. Whether you're on the coast or inland, our
            expert team is on hand to deliver the financial clarity you need — locally and personally.
          </p>

          {/* City pills */}
          <motion.ul
            variants={cityVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {cities.map((city) => (
              <motion.li key={city} variants={pillVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-muted/60 border border-cream/20 text-cream text-sm font-medium shadow-sm">
                  <MapPin size={14} className="text-olive-light" />
                  {city}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Map image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-cream"
        >
          <img
            src={mapImage}
            alt="Map of South of England service area"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ServingTheSouth;
