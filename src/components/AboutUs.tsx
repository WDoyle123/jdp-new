import { motion } from "framer-motion";
// import { CheckCircle, UserRound } from "lucide-react";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Over 75 years of combined experience",
  "Tailored solutions for businesses of all sizes",
  "Proactive advice, not just compliance",
  "Dedicated partner-level attention on every account",
];

// const team = [
//   { name: "Andrew Doyle", role: "Accountant" },
//   { name: "Jasmine Doyle", role: "Accountant" },
//   { name: "Prunella Brown", role: "Accountant" },
//   { name: "Jess Ballard-Harris", role: "Accountant" },
//   { name: "Florence Doyle", role: "Accountant Assistant" },
//   { name: "Karlie McPhillimey", role: "Accountant Assistant" },
// ];

// const teamContainerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
// };

// const teamCardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
//     },
//   },
// };

function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top: map + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-xl border border-cream-dark"
              style={{ width: "100%", aspectRatio: "1 / 1" }}
            >
              <iframe
                className="w-full h-full"
                frameBorder="0"
                loading="lazy"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=650&height=650&hl=en&q=The+John+Doyle+Partnership&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                title="The John Doyle Partnership location"
                allowFullScreen
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-6 -right-6 bg-olive text-cream rounded-2xl p-6 shadow-xl"
            >
              <p
                className="text-4xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                50+
              </p>
              <p className="text-cream/80 text-sm mt-1">Years of Experience</p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              delay: 0.15,
            }}
            className="order-1 lg:order-2"
          >
            <p className="text-olive text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Who We Are
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-olive-dark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Firm Built on Trust &amp; Expertise
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              The John Doyle Partnership is a forward-thinking accountancy firm
              committed to delivering exceptional financial services. We believe
              great accountancy goes beyond numbers — it's about understanding
              your ambitions and helping you achieve them.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Whether you're a sole trader, a growing SME, or an established
              company, our experienced team provides the clarity and confidence
              you need to succeed.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <CheckCircle
                    size={18}
                    className="text-olive mt-0.5 shrink-0"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center mt-10 px-7 py-3.5 rounded-xl bg-olive text-cream font-semibold text-sm hover:bg-olive-dark transition-colors duration-200"
            >
              Work With Us
            </motion.a>
          </motion.div>
        </div>

        {/* Meet the Team */}
        {/* <motion.div */}
        {/*   initial={{ opacity: 0, y: 30 }} */}
        {/*   whileInView={{ opacity: 1, y: 0 }} */}
        {/*   viewport={{ once: true }} */}
        {/*   transition={{ duration: 0.7 }} */}
        {/*   className="text-center mb-12" */}
        {/* > */}
        {/*   <p className="text-olive text-xs tracking-[0.25em] uppercase font-medium mb-3"> */}
        {/*     The People Behind the Numbers */}
        {/*   </p> */}
        {/*   <h3 */}
        {/*     className="text-3xl md:text-4xl font-bold text-olive-dark" */}
        {/*     style={{ fontFamily: "var(--font-display)" }} */}
        {/*   > */}
        {/*     Meet the Team */}
        {/*   </h3> */}
        {/* </motion.div> */}
        {/**/}
        {/* <motion.div */}
        {/*   variants={teamContainerVariants} */}
        {/*   initial="hidden" */}
        {/*   whileInView="visible" */}
        {/*   viewport={{ once: true, margin: "-60px" }} */}
        {/*   className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" */}
        {/* > */}
        {/*   {team.map((member, i) => ( */}
        {/*     <motion.div */}
        {/*       key={i} */}
        {/*       variants={teamCardVariants} */}
        {/*       whileHover={{ y: -6, transition: { duration: 0.25 } }} */}
        {/*       className="flex flex-col items-center text-center group" */}
        {/*     > */}
        {/* Photo placeholder */}
        {/*       <div className="w-full aspect-square rounded-2xl bg-cream border border-cream-dark flex items-center justify-center mb-4 overflow-hidden group-hover:border-olive/30 group-hover:shadow-lg transition-all duration-300"> */}
        {/*         <UserRound size={48} className="text-olive/25" /> */}
        {/*       </div> */}
        {/*       <p */}
        {/*         className="text-olive-dark font-semibold text-sm" */}
        {/*         style={{ fontFamily: "var(--font-display)" }} */}
        {/*       > */}
        {/*         {member.name} */}
        {/*       </p> */}
        {/*       <p className="text-gray-400 text-xs mt-0.5">{member.role}</p> */}
        {/*     </motion.div> */}
        {/*   ))} */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}

export default AboutUs;
