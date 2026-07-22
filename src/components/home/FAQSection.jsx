import { useState } from "react";
import { Link } from "react-router-dom";
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
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-left">
          <h2>FAQ</h2>

          <Link to="/contact" className="faq-btn">
            Ask a Question
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="faq-right">

          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

                {active === index ? (
                  <FiMinus />
                ) : (
                  <FiPlus />
                )}
              </button>

              {active === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;