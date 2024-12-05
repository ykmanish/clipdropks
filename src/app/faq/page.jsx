'use client';
import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../../components/Reusables/Button';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleCard = (index) => {
    const contentRef = contentRefs.current[index];

    if (contentRef) {
      if (openIndex === index) {
        // Close the currently open card
        gsap.to(contentRef, { height: 0, opacity: 0, duration: 0.2, ease: 'power1.out' });
        setOpenIndex(null);
      } else {
        // Close any previously open card
        if (openIndex !== null) {
          const previousContentRef = contentRefs.current[openIndex];
          gsap.to(previousContentRef, { height: 0, opacity: 0, duration: 0.2, ease: 'power1.out' });
        }

        // Open the clicked card
        contentRef.style.height = 'auto';
        const height = contentRef.scrollHeight; // Get the full height for animation
        contentRef.style.height = 0; // Reset height for animation

        gsap.to(contentRef, { height, opacity: 1, duration: 0.2, ease: 'power1.out' });
        setOpenIndex(index);
      }
    }
  };

  return (
    <div className=" h-auto">
      <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto lg:grid-cols-5">
        {/* Left Section - Sticky */}
        <div className="lg:col-span-2 px-4 lg:px-0 lg:h-screen lg:sticky lg:top-0 flex flex-col lg:justify-center items-start">
          <h1 className="small gap-2 mt-24 lg:mt-0 max-w-2xl items-center flex text-[17px] text-[#0c0c0c] dark:text-[#ffffff]">
            <span className="dark:bg-[#ffffff] bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
            frequently asked questions
          </h1>
          <h1 className="small mt-6 lg:mt-10 font-semibold tracking-tight text-4xl lg:text-5xl  dark:text-[#ffffff] text-[#0c0c0c]">
            The answers to<br/> your questions.
          </h1>
          <Button className="mt-8 px-6" text="Get in touch now" />
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="lg:col-span-3 px-4 overflow-y-auto">
          <div className="flex flex-col gap-4 items-end justify-start mt-16 lg:mt-32 mb-20">
            {faqData.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className="w-full p-6 flex flex-col cursor-pointer bg-[#ececec]/60 dark:bg-[#101010] h-auto rounded-3xl"
              >
                <div
                  className="flex justify-between items-center "
                 
                >
                  <h1 className="small w-4/5 lg:text-xl dark:text-[#ffffff] text-[#0c0c0c]">
                    {faq.question}
                  </h1>
                  <span
                    className={`bg-[#0c0c0c] dark:bg-[#26282C]
                      flex justify-center items-center h-8 w-8 rounded-full transition-transform duration-500 ${
                        openIndex === index ? 'rotate-90' : ''
                      }`}
                  >
                    <img
                      src="/lwarrow.svg"
                      alt="arrow"
                      className={`h-6 w-6 transition-transform duration-500 ${
                        openIndex === index ? 'rotate-45' : '-rotate-45'
                      }`}
                    />
                  </span>
                </div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden"
                  style={{ height: 0, opacity: 0 }}
                >
                  <p className="mt-4 small dark:text-[#989999] text-md lg:text-lg text-zinc-700 max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'How long does a website project usually take to complete?',
    answer:
      'The time it takes to complete a website project depends on the complexity of the project. A simple website can take as little as 4 weeks, while a more complex website can take 6 months or more.',
  },
  {
    question: 'What is your approach to SEO optimization?',
    answer:
      'Our approach involves thorough keyword research, technical SEO optimization, and creating high-quality content that aligns with user intent.',
  },
  {
    question: 'How long does a website project usually take to complete?',
    answer:
      'The time it takes to complete a website project depends on the complexity of the project. A simple website can take as little as 4 weeks, while a more complex website can take 6 months or more.',
  },
  {
    question: 'What is your approach to SEO optimization?',
    answer:
      'Our approach involves thorough keyword research, technical SEO optimization, and creating high-quality content that aligns with user intent.',
  },
  {
    question: 'How long does a website project usually take to complete?',
    answer:
      'The time it takes to complete a website project depends on the complexity of the project. A simple website can take as little as 4 weeks, while a more complex website can take 6 months or more.',
  },
  {
    question: 'What is your approach to SEO optimization?',
    answer:
      'Our approach involves thorough keyword research, technical SEO optimization, and creating high-quality content that aligns with user intent.',
  },
];

export default FAQPage;
