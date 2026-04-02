import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const headline = "Clarity, Confidence & Compliance.";
const words = headline.split(" ");

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-olive-dark"
        style={{ y: bgY }}
      >
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #8A9440 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #636B2F 0%, transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-dark/60 via-olive-dark/80 to-olive-dark" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-olive-light text-xs md:text-sm uppercase tracking-[0.25em] font-medium mb-6"
        >
          Licensed Accountants &amp; Business Advisors &nbsp;·&nbsp; Est. 1974
        </motion.p>

        {/* Staggered headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight"
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

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Expert accountancy services tailored for individuals and businesses.
          We handle the numbers so you can focus on growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-olive-light text-cream font-semibold text-base hover:bg-olive transition-all duration-200 shadow-lg hover:shadow-olive/30 hover:shadow-xl"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-cream/30 text-cream font-semibold text-base hover:bg-cream/10 transition-all duration-200"
          >
            Our Services
          </a>
        </motion.div>

        {/* Google Reviews badge */}
        <motion.a
          href="https://www.google.com/search?q=The+John+Doyle+Partnership+Reviews"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="inline-flex items-center gap-3 mt-10 px-5 py-3 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition-all duration-200 group"
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-cream text-sm font-medium">5-Star Rated on Google</span>
          <svg className="w-3.5 h-3.5 text-cream/50 group-hover:text-cream transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default Hero;

