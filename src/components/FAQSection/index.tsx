"use client"
import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: 'How do I choose the correct event management company?',
      answer: 'Selecting the ideal event management corporation, like Bliss and Blooms, located in Eldoret & Nairobi, Kenya, entails Estimating their innovation, expertise, and track record in orchestrating events that meet your expectations and budget.',
    },
    {
      question: 'What role does an event management company play?',
      answer: 'An event managing company such as Bliss and Blooms takes charge of the whole event procedure, from initial planning and vendor coordination to logistics management and ensuring the event\'s smooth execution.',
    },
    {
      question: 'What are the steps to initiating an event management business?',
      answer: 'Creating an event management firm involves creating a detailed business plan, establishing a various portfolio, and forging strong connections with both vendors and clients.',
    },
    {
      question: 'How can I effectively market myself as an event manager?',
      answer: 'To effectively market yourself as an event director, showcase your specific skills, provide examples of successful occasions you have managed, and demonstrate your ability to deliver memorable experiences.',
    },
    {
      question: 'What are the various types of events in event management?',
      answer: 'Event administration encompasses a broad range of events, including corporate operations, marriages, meetings, exhibitions, and social events; every entails a unique set of skills and approaches.',
    },
  ];

  return (
    <div className="bg-gray-100  py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Commonly Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md dark:border-strokedark dark:bg-boxdark">
              <button
                className="w-full text-left px-6 py-4 font-semibold focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span className="flex items-center justify-between text-black dark:text-white">
                  {faq.question}
                  <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </span>
              </button>
              {activeIndex === index && faq.answer && (
                <div className="p-6 border-t border-gray-300 text-black dark:text-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;