"use client"
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import {motion , AnimatePresence} from 'framer-motion';
const items = [
  {
    question: "What is the cost of installing the solar tracking system?",
    answer:
      "The cost of installation depends on several factors, including the size of your solar array and your specific location. Please contact our sales team for a customized quote based on your needs and location.",
  },
  {
    question: "How does the solar tracking system improve efficiency?",
    answer:
      "Our solar tracking system automatically adjusts the angle of your solar panels to follow the sun’s path throughout the day. This ensures that your panels receive maximum sunlight exposure, increasing energy production by up to 30% compared to fixed systems.",
  },
  {
    question: "Can I retrofit the solar tracker to my existing solar panels?",
    answer:
      "Yes, our solar tracking system is designed to be compatible with most existing solar panel setups. Our installation team will evaluate your current system and make any necessary adjustments to ensure a smooth integration.",
  },
  {
    question: "What maintenance is required for the solar tracking system?",
    answer:
      "The solar tracking system is designed for minimal maintenance. Regular checks and occasional cleaning of the panels are recommended to ensure optimal performance. Our support team provides detailed maintenance guidelines and is available for assistance if needed.",
  },
];

const AccordinationItem = ({question, answer}:{question:string, answer: string}) => {
  const[isOpen, setIsOpen] = useState(false);
  return(
   
    <div className=" py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon /> :<PlusIcon />}
      
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
         {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
         ))}
        </div>
      </div>
    </div>
  )
};
