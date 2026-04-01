import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const contactDetails = [
  { icon: MapPin, label: "Address", value: "Marian House, Priory Cres, Southsea, Portsmouth, Southsea PO4 8RN" },
  { icon: Phone, label: "Phone", value: "023 9261 9999" },
  { icon: Mail, label: "Email", value: "info@johndoylepartnership.com" },
];

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-cream">
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
            Get In Touch
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-olive-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Ready to take control of your finances? Reach out and we'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-olive-dark rounded-2xl p-10 text-cream"
          >
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The John Doyle Partnership
            </h3>
            <p className="text-cream/60 text-sm mb-8">
              We're here to help. Drop us a message or reach us directly.
            </p>

            <ul className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-olive-light" />
                  </div>
                  <div>
                    <p className="text-cream/50 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-cream text-sm">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Google Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3 bg-white rounded-2xl overflow-hidden border border-cream-dark shadow-sm scrollbar-hidden"
            style={{ height: "600px", overflowY: "auto" }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdr2z1GHrFOUD14aeT3sSA9pEd9x5YvOb6Kyx6zgirsfJWLkw/viewform?embedded=true"
              width="100%"
              height="1757"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

