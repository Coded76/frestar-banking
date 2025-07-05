"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload, FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Online Banking", href: "/" },
    { name: "Company", href: "/company" },
    { name: "Help Center", href: "/help" },
  ];

  // Determine active item based on current path
  const getActiveItem = () => {
    return navItems.find((item) => pathname === item.href)?.name || "";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${
        scrolled ? "bg-white shadow-md" : ""
      } transition-all duration-300 border-b border-[#DAE6EE]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          <div className="flex items-center gap-[40px]">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex items-center"
            >
              <Link href="/" className="flex items-center space-x-2">
                <div>
                  <img
                    src="/navbar/star-logo.png"
                    className="h-[28px] w-[33px]"
                    alt=""
                  />
                </div>
                <span className="text-[29px] font-[500] text-gray-900">
                  Frestar
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-[40px]">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-[16px] font-[500] transition-colors relative ${
                      getActiveItem() === item.name
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                    {getActiveItem() === item.name && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-8 left-0 right-0 h-0.5 bg-orange-500"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 cursor-pointer text-sm font-medium text-[#3978F2] border border-[#3978F2] rounded-lg hover:bg-[#3978F2]/40 transition-colors"
            >
              <FiLogIn className="w-4 h-4" />
              <span>Sign In</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 cursor-pointer text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download app</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto"
      >
        <div className="px-4 pt-5 pb-12 flex flex-col h-full">
          {/* Close button at the top */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Close menu"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu items */}
          <div className="flex flex-col items-start space-y-6 flex-grow">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
                className="w-full text-center"
              >
                <Link
                  href={item.href}
                  className={`block px-3 py-4 text-lg w-fit font-medium ${
                    getActiveItem() === item.name
                      ? "text-gray-900 border-b-2 border-orange-500"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Action Buttons */}
            <div className="flex space-x-4 mt-8 w-fit max-w-xs">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-[#3978F2] border border-[#3978F2] rounded-lg hover:bg-[#3978F2]/40 transition-colors"
              >
                <FiLogIn className="w-4 h-4" />
                <span>Sign In</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download app</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
