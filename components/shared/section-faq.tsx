import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SecondaryButton } from "./custom-button";

export default function SectionFaq() {
  const faqs = [
    {
      value: "item-1",
      question: "What types of produce do you offer?",
      answer: "We offer a wide range of products.",
    },
    {
      value: "item-2",
      question: "Do you sell in bulk?",
      answer: "Yes, we sell in bulk.",
    },
    {
      value: "item-3",
      question: "What are your hours of operation?",
      answer: "Monday - Friday: 9am - 5pm",
    },
    {
      value: "item-4",
      question: "Do you offer delivery?",
      answer: "Yes, we offer delivery.",
    },
    {
      value: "item-5",
      question: "Can I request custom packages?",
      answer: "Yes, please contact us for custom packages.",
    },
    {
      value: "item-6",
      question: "What is the minimum order requirement?",
      answer: "Varies base on product. Please contact us to find out more.",
    },
    // {
    //   value: "item-7",
    //   question: "How do I pay for my order?",
    //   answer: "We accept cash on delivery.",
    // },
    {
      value: "item-8",
      question: "How long will it take to recieve my order?",
      answer: "We usually recieve your order within 2-3 days.",
    },
    {
      value: "item-9",
      question: "Do you offer discounts for large orders?",
      answer: "Yes, we offer discounts for large orders.",
    },
    {
      value: "item-10",
      question: "Do you have a return policy?",
      answer: "Yes, we offer a 30-day return policy.",
    },
    // {
    //     value: "item-11",
    //   question: "How can i place an order?",
    //   answer: "Please contact us for custom packages.",
    // },
    {
      value: "item-12",
      question: "Do you deliver to my area?",
      answer: "Yes, we deliver to your area.",
    },
    {
      value: "item-13",
      question: "Can I request custom packages for special occassions?",
      answer: "Yes, please contact us for custom packages.",
    },
  ];
  return (
    <section className="section fpb-28 md:fpb-60">
      <h1 className="heading-1 text-center">Got Questions?</h1>
      <h1 className="heading-1 text-center">We&apos;ve Got Answers!</h1>
      <div className="mt-10 md:mt-24">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4 md:gap-8 max-w-7xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionCards
              key={index}
              question={faq.question}
              answer={faq.answer}
              value={faq.value || index.toString()}
            />
          ))}
        </Accordion>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <SecondaryButton variant="secondary-link" className="sm:w-fit w-full">
          Got More Questions?
        </SecondaryButton>
      </div>
    </section>
  );
}

const AccordionCards = ({
  question,
  answer,
  value,
}: {
  question: string;
  answer: string;
  value: string;
}) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="paragraph-1 font-extrabold text-left">
        {question}
      </AccordionTrigger>
      <AccordionContent className="paragraph-2 bg-white">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
