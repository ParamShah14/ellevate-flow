import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 24, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

export const MaskedLines = ({ lines, className = "", delay = 0.15 }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
        <motion.span
          className="block"
          initial={{ y: "105%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.05, delay: delay + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);
