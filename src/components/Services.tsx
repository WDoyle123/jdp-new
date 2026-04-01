import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  TrendingUp,
  ShieldCheck,
  Receipt,
  Users,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Accounts Preparation",
    description: "Accurate statutory accounts prepared in full compliance with current regulations.",
  },
  {
    icon: Receipt,
    title: "Tax Returns",
    description: "Personal and corporate tax returns handled efficiently, maximising your allowances.",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic guidance to help your business grow, plan ahead, and stay competitive.",
  },
  {
    icon: BarChart3,
    title: "Management Accounts",
    description: "Timely management accounts providing the insights you need to make informed decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    description: "Independent audit services that give stakeholders confidence in your financial position.",
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Fully managed payroll processing — accurate, compliant, and on time, every time.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-cream">
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
            What We Offer
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-olive-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            A comprehensive suite of accountancy and advisory services built around your needs.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl p-8 border border-cream-dark hover:border-olive/20 shadow-sm hover:shadow-xl hover:shadow-olive/10 transition-shadow duration-300 cursor-default"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-olive/10 group-hover:bg-olive group-hover:text-cream text-olive transition-all duration-300 mb-5">
                  <Icon size={22} />
                </div>
                <h3
                  className="text-xl font-semibold text-olive-dark mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
