const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-olive-dark text-cream/70 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Firm name */}
        <div className="flex flex-col items-center md:items-start">
          <span
            className="text-cream text-lg font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The John Doyle Partnership
          </span>
          <span className="text-cream/50 text-xs tracking-widest uppercase mt-1">
            Licensed Accountants
          </span>
        </div>

        {/* Nav links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cream transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-xs text-cream/40 text-center md:text-right">
          &copy; {new Date().getFullYear()} The John Doyle Partnership. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
