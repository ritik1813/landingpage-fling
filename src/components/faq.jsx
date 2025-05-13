import { useState } from 'react';

const faqs = [
{
  question: "Who is this for?",
  answer:
    "FlingBizzz is for anyone who wants to build something meaningful — whether you're looking for a partner to bring your idea to life, or looking for exciting opportunities to join. Founders, students, creators, freelancers, or curious minds — if you want to create, collaborate, or contribute, this is for you.",
},
 
  {
    question: "Is it free to use?",
    answer:
      "Yes! We're currently in beta and all features are free for early adopters. Premium features may be added in the future.",
  },
  {
    question: "How do matches work?",
    answer:
      "Once you answer a few questions about your skills and goals, our algorithm matches you with people who complement your strengths.",
  },
  {
    question: "Do I need to have a project already?",
    answer:
      "Nope. You can join to explore opportunities, connect with builders, or just get inspired by others' ideas.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl shadow-sm overflow-hidden">
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
