import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    //main Header 
    <motion.header
      className="text-center relative z-50 py-12 bg-gradient-to-r from-orange-600 to-red-700 dark:from-orange-800 dark:to-red-900 text-white shadow-2xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-extrabold drop-shadow-lg tracking-wide">
        🏰 छत्रपती शिवरायांचा विजय नकाशा
      </h1>
      <div className="w-40 mx-auto mt-3 border-b-4 border-yellow-400 dark:border-yellow-500"></div>
      <p className="mt-4 text-xl italic font-semibold text-gray-200 dark:text-gray-300">
        "स्वराज्य हा माझा जन्मसिद्ध हक्क आहे!"
      </p>
    </motion.header>
  )
}

export default Header