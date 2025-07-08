"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = {
  "General Questions": [
    {
      question: "What is personal banking?",
      answer:
        "Personal banking refers to the suite of financial products and services—like checking/savings accounts, debit cards, and personal loans—that banks offer to individual customers.",
    },
    {
      question: "What documents do I need to open a Frestar Bank account?",
      answer:
        "You’ll need a valid government‑issued ID (passport or driver’s license), proof of address (utility bill or lease agreement), and your Tax Identification Number.",
    },
    {
      question: "Is there a fee for opening an account?",
      answer:
        "No, opening a standard Frestar personal checking or savings account is completely free—no maintenance or setup fees.",
    },
    {
      question: "Is Frestar safe?",
      answer:
        "Absolutely. We’re regulated by the Central Bank of Nigeria, and your deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC) up to the insured limit.",
    },
    {
      question: "Can a personal bank account be used for business?",
      answer:
        "Personal accounts are intended for individual use only. For business transactions, please open one of our business account packages.",
    },
    {
      question: "How many personal bank accounts can I have?",
      answer:
        "You can hold up to three active personal accounts (e.g., one checking and two savings) under the same profile.",
    },
    {
      question: "How do I access my account?",
      answer:
        "You can log in via our mobile app (iOS & Android) or through online banking at www.frestar.com with your username and password.",
    },
  ],

  "App Download": [
    {
      question: "Which devices support the Frestar app?",
      answer:
        "We support iOS 13+ and Android 8.0+ devices. Tablets and phones are both compatible.",
    },
    {
      question: "How do I download the Frestar app on iOS?",
      answer:
        "Open the App Store, search “Frestar Bank”, then tap “Get” to install. You’ll need an Apple ID.",
    },
    {
      question: "How do I download the Frestar app on Android?",
      answer:
        "Open the Google Play Store, search “Frestar Bank”, then tap “Install”. Make sure you’re logged into a Google account.",
    },
    {
      question: "Why isn’t the app showing in my country’s store?",
      answer:
        "Our app is currently available only in Nigeria. If you’re abroad, you may not see it in your local store.",
    },
    {
      question: "Can I install the app on multiple devices?",
      answer:
        "Yes—just log in with the same credentials on each device. We limit simultaneous active sessions to three devices.",
    },
  ],

  "Bill Payment": [
    {
      question: "How do I add a new biller?",
      answer:
        "In the app, go to “Payments” → “Add Biller”. Select the category (e.g. utilities), then enter their details and save.",
    },
    {
      question: "Can I schedule recurring payments?",
      answer:
        "Yes. When you set up a payment, toggle “Recurring” and choose daily, weekly, or monthly intervals.",
    },
    {
      question: "What are your daily payment limits?",
      answer:
        "By default it’s ₦500,000 per day. You can request higher limits by submitting a support ticket.",
    },
    {
      question: "How long does it take to process a payment?",
      answer:
        "Instantly for most billers. Some third‑party billers may take up to 24 hours to confirm receipt.",
    },
    {
      question: "Can I cancel or modify a scheduled payment?",
      answer:
        "Yes—just navigate to “Scheduled Payments” in the app and tap “Edit” or “Cancel” before the next run date.",
    },
  ],

  "Bank Transfer": [
    {
      question: "How do I send money to another bank?",
      answer:
        "Go to “Transfers” → “New Transfer”. Choose “Other Bank”, enter the recipient’s account details, and confirm.",
    },
    {
      question: "What’s the transfer cut‑off time?",
      answer:
        "For same‑day processing, initiate by 3 PM WAT. After that, transfers will pick up on the next business day.",
    },
    {
      question: "Are there fees for domestic transfers?",
      answer:
        "We charge a ₦50 flat fee for transfers under ₦100,000 and 0.1% for amounts above that.",
    },
    {
      question: "Can I transfer internationally?",
      answer:
        "Yes—you can send USD or GBP transfers. Please contact support for correspondent bank details and fees.",
    },
    {
      question: "What’s the exchange rate margin?",
      answer:
        "Our rates include a 1.5% margin over the mid‑market rate, which is automatically applied at the time of transfer.",
    },
  ],
};
export default function FAQ() {
  const tabs = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#F9FAFB] py-10">
      <motion.section
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-[40px] md:text-[56px] font-[750] mb-8">
          Common (FAQ) Questions
        </h2>

        <div className="p-6 sm:p-10 bg-white rounded-xl shadow">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Tabs */}
            <nav className="w-full md:w-1/4 mb-6 md:mb-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`block w-full text-left py-2 px-4 mb-2 rounded transition-colors ${
                    tab === activeTab
                      ? "bg-blue-50 font-semibold text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenIndex(null);
                  }}
                >
                  {tab}
                </button>
              ))}
            </nav>

            {/* Questions */}
            <div className="w-full md:w-3/4 md:pl-8">
              <AnimatePresence initial={false} mode="wait">
                {faqData[activeTab].map((item, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 border border-[#F2F2F2] rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full flex justify-between items-center p-4"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                      >
                        <span className="text-gray-800 text-left">
                          {item.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-4 text-gray-600 overflow-hidden"
                          >
                            {item.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
