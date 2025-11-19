"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "Does Planta work for any crop?",
    answer: "No, Planta is designed specifically for rice (paddy) farming. It specializes in rice yield prediction and seed variety recommendation based on detailed rice agriculture research."
  },
  {
    question: "How does Planta predict rice yield?",
    answer: "Planta uses a hybrid machine learning model, refined with combined feature selection and multiple algorithms (Decision Trees, Random Forest, SVM, KNN, Naive Bayes) trained on real rice farming data. You provide local field data and it predicts expected harvest output."
  },
  {
    question: "What features or details do I need to enter?",
    answer: "You will enter information like hectares, rainfall, soil type, fertilizer use, weather during the season, crop variety, and more. These help Planta deliver accurate predictions and variety advice."
  },
  {
    question: "How does Planta choose which rice variety to recommend?",
    answer: "Planta evaluates your local data and preferences, then selects the rice variety that matches your field's unique conditions and offers the best potential yield according to AI analysis."
  },
  {
    question: "Is Planta easy to use for new or older smartphone users?",
    answer: "Yes! Planta was made for everyone—including first-time AI users. Its dashboard and chatbot are user-friendly, with clear instructions and easy navigation."
  },
  {
    question: "Is my farm data private?",
    answer: "Yes. All information you enter in Planta is confidential and securely stored. Your data isn't shared with any third parties."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#126E23" }}>
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto">
        {faqData.map((item, i) => (
          <div key={i} className="border-b border-gray-200">
            <button
              className="w-full flex items-center justify-between py-5 px-3 text-left focus:outline-none"
              aria-expanded={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-lg text-planta font-medium">
                {item.question}
              </span>
              <FiChevronDown
                className={`text-xl transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                openIndex === i ? "max-h-40" : "max-h-0"
              }`}
            >
              {openIndex === i && (
                <div className="pb-5 px-3 text-base text-neutral-700">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}