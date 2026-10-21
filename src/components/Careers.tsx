import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Clock, MapPin, PoundSterling } from "lucide-react";

const jobs = [
  {
    title: "Accounts Senior / Senior Accounts Assistant (Practice)",
    posted: "13 October",
    salary: "£24,000 - £30,000 per annum, negotiable",
    location: "Southsea, Hampshire",
    type: "Permanent, full-time",
    skills: ["Payroll", "Bookkeeping", "VAT Returns", "CIS Returns"],
    href: "https://www.reed.co.uk/jobs/accounts-senior-senior-accounts-assistant-practice/57453715",
  },
];

function Careers() {
  return (
    <section id="careers" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-olive text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Join Our Team
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-olive-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Careers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            We're always keen to hear from talented people. Take a look at our latest opportunities.
          </p>
        </motion.div>

        {/* Job cards */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {jobs.map((job) => (
            <motion.div
              key={job.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-cream rounded-2xl p-8 border border-cream-dark shadow-sm"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="inline-flex shrink-0 items-center justify-center w-12 h-12 rounded-xl bg-olive/10 text-olive">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-semibold text-olive-dark mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {job.title}
                  </h3>
                  <p className="text-gray-500 text-sm">Posted {job.posted}</p>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600 mb-5">
                <li className="flex items-center gap-2">
                  <PoundSterling size={16} className="text-olive-light shrink-0" />
                  {job.salary}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-olive-light shrink-0" />
                  {job.location}
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-olive-light shrink-0" />
                  {job.type}
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-olive-dark/10 text-olive-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold bg-olive-light text-cream hover:bg-olive transition-colors duration-200"
                >
                  Apply on Reed
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Careers;
