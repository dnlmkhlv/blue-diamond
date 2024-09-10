import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including cleaning, disinfection, painting, and transportation.",
  },
  {
    question: "Where is your head office located?",
    answer: "Our head office is located in Dubai, UAE.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support via phone, email, or through the contact form on our website.",
  },
  {
    question: "Can I reschedule a booked service?",
    answer:
      "Yes, you can reschedule a booked service by contacting our customer support at least 24 hours in advance.",
  },
  {
    question: "Are your services available on weekends?",
    answer: "Yes, we offer services on weekends to accommodate your schedule.",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 px-4" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions❓
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 border-b">
              <button
                className="flex justify-between items-center w-full py-4 text-left font-semibold"
                onClick={() => toggleItem(index)}
              >
                {item.question}
                {openItem === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openItem === index && (
                <div className="pb-4">
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

export default FAQ;
