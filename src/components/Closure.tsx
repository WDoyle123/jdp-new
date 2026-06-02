import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const headline = "We're giving our office a refresh.";
const words = headline.split(" ");

function Closure() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-olive-dark">
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #8A9440 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #636B2F 0%, transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-dark/60 via-olive-dark/80 to-olive-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-olive-light text-xs md:text-sm uppercase tracking-[0.25em] font-medium mb-6"
        >
          Temporary Office Closure
        </motion.p>

        {/* Staggered headline */}
        <h1
          className="text-4xl md:text-6xl font-bold text-cream mb-8 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-3 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0.01, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.45 }}
          className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          From <span className="text-cream font-semibold">8 June 2026</span> to{" "}
          <span className="text-cream font-semibold">12 July 2026</span>, the
          premises will be closed while refurbishment takes place. We can't
          wait to welcome you back to an improved space.
        </motion.p>
        <motion.p
          initial={{ opacity: 0.01, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.45 }}
          className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          If you need us during this time, please reach out by phone — we're
          still here to help.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:02392619999"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-olive-light text-cream font-semibold text-base hover:bg-olive transition-all duration-200 shadow-lg hover:shadow-olive/30 hover:shadow-xl"
          >
            <Phone className="w-4 h-4" />
            02392 619 999
          </a>
          <a
            href="/"
            className="px-8 py-4 rounded-xl border border-cream/30 text-cream font-semibold text-base hover:bg-cream/10 transition-all duration-200"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Closure;
