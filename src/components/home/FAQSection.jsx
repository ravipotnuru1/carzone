import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";
import "./FAQSection.css";

const faqData = [
  {
    question: "Do you offer financing options for purchasing classic cars?",
    answer:
      "Yes. We offer flexible financing solutions through our trusted partners to make owning a classic car easier.",
  },
  {
    question: "Are the showcased cars fully restored or in original condition?",
    answer:
      "Each vehicle description clearly mentions whether it is fully restored or preserved in original condition.",
  },
  {
    question: "Do you assist with shipping for purchased classic cars?",
    answer:
      "Yes. We provide secure nationwide and international shipping for all purchased vehicles.",
  },
  {
    question: "Are your vintage cars certified or inspected for authenticity?",
    answer:
      "Every vehicle is carefully inspected and verified before being listed in our inventory.",
  },
  {
    question: "Can I request additional photos before purchasing?",
    answer:
      "Yes, we welcome and encourage requests for more detailed photographs or videos of any vehicle in our inventory. Contact our team, and we'll arrange the necessary details for your peace of mind.",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(4);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <motion.section
      className="faq-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="faq-container">

        <motion.div
          className="faq-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>FAQ</h2>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="faq-btn">
              Ask a Question
              <FiArrowUpRight />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="faq-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {faqData.map((item, index) => (
            <motion.div
              className="faq-item"
              key={index}
              whileHover={{ y: -2 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

                <motion.span
                  animate={{ rotate: active === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {active === index ? <FiMinus /> : <FiPlus />}
                </motion.span>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default FAQSection;