import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import VijayMap from './components/VijayMap'

const App = () => {
  return (
    <motion.div
      className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <VijayMap />
    </motion.div>
  )
}

export default App