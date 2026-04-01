import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've been using Doyle's for more than 20 years now, from when I started my own business, when it was just me, all the way through to today, with a multi-million pound turnover and 34 employees.",
    name: "Shaun Ryan",
    role: "SMR ENTERPRISES",
    initials: "SR",
  },
  {
    quote:
      "The John Doyle Partnership have been our accountancy provider for the last 18 years, and I simply could not recommend them more highly.",
    name: "Matt Bagley",
    role: "Camouflaged Learning",
    initials: "MB",
  },
  {
    quote:
      "I have used the John Doyle Partnership for my accounting and payroll needs within my business for a number of years and can honestly say they are the most professional and approachable family Accountants that I have worked with.",
    name: "Nick Sutherland",
    role: "Business Owner",
    initials: "NS",
  },
  {
    quote:
      "Been using JDP a couple of years now and found them very approachable and helpful. Refreshing no bull**** accounting. Here's to another year.",
    name: "Will Hunt Vincent",
    role: "Business Owner",
    initials: "WV",
  },
  {
    quote:
      "I have been a client for almost twenty years. Andy knows I don't understand anything about accounts but has always patiently answers my questions. I have recommended many happy clients. I've used other accountants in the past who have not been very good at all. Glad I was recommended to use them.",
    name: "Rachael Summers",
    role: "Business Owner",
    initials: "RS",
  },
  {
    quote:
      "The Doyle Partnership have been doing my limited company's accounts for a few years now, and also those for my self-employed husband. They are efficient and helpful, as well as being very knowledgeable in all aspects of financial recordkeeping. I hope they never retire (or at least, do so after me!)",
    name: "Ali Richards",
    role: "Business Owner",
    initials: "AR",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-olive-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-olive-light text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Client Stories
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-cream mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto text-base leading-relaxed">
            We measure our success by the success of the clients we serve.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative bg-olive-muted/60 border border-cream/10 rounded-2xl p-8 flex flex-col gap-6"
            >
              <Quote size={28} className="text-olive-light opacity-60" />
              <p className="text-cream/80 text-base leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-cream/10">
                <div className="w-10 h-10 rounded-full bg-olive-light/30 flex items-center justify-center text-cream text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-cream text-sm font-semibold">{t.name}</p>
                  <p className="text-cream/50 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
