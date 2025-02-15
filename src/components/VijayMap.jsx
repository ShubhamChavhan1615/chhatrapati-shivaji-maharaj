import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { kille } from './fortsData'


const VijayMap = () => {
  const [selectedFort, setSelectedFort] = useState(null)
  const [hoveredFort, setHoveredFort] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const fortCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center"
        initial={{ scale: 1.2 }}
        animate={{
          scale: [1.2, 1, 1.1, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1621804298968-5fc664947fd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXZhamklMjBtYWhhcmFqfGVufDB8fDB8fHww')",
          filter: "brightness(0.9)"
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Animated Title */}
        <motion.h1
          className="text-6xl font-extrabold text-white text-center mb-16"
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            textShadow: [
              "0 0 0px rgba(255,165,0,0.5)",
              "0 0 20px rgba(255,165,0,0.8)",
              "0 0 0px rgba(255,165,0,0.5)"
            ]
          }}
          transition={{
            duration: 1,
            textShadow: {
              duration: 2,
              repeat: Infinity
            }
          }}
        >
          🏰 विजयाचा नकाशा 🏰
        </motion.h1>

        {/* Forts Grid with Stagger Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {kille.map((fort, index) => (
            <motion.div
              key={index}
              variants={fortCardVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              onClick={() => setSelectedFort(fort)}
              onHoverStart={() => setHoveredFort(fort)}
              onHoverEnd={() => setHoveredFort(null)}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-orange-900/90 to-red-900/90 rounded-xl overflow-hidden cursor-pointer shadow-xl transform transition-all duration-300">
                <motion.div
                  className="relative h-56 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.img
                    src={fort.image}
                    alt={fort.name}
                    className="w-full h-full object-cover drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                    initial={{ scale: 1.2, filter: "brightness(1.3) contrast(1.2)" }}
                    style={{
                      objectPosition: "center",
                      imageRendering: "crisp-edges",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                    animate={{ scale: 1.25 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </motion.div>
                <motion.div
                  className="p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2">{fort.name}</h2>
                  <p className="text-orange-200 text-lg">{fort.year}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedFort && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[200]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFort(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-orange-900 to-red-900 p-8 rounded-2xl max-w-3xl w-full mx-4 shadow-2xl"
                initial={{ scale: 0.5, y: 100, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={e => e.stopPropagation()}
              >
                <motion.img
                  src={selectedFort.image}
                  alt={selectedFort.name}
                  className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg
             transform transition-transform duration-300
             drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]
             contrast-125 brightness-110 saturate-125"
                  style={{
                    objectPosition: "center",
                    imageRendering: "crisp-edges",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  initial={{ y: 20, opacity: 0, scale: 0.95, filter: "brightness(100%) contrast(100%)" }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    filter: [
                      "brightness(110%) contrast(115%)",
                      "brightness(120%) contrast(120%)",
                      "brightness(110%) contrast(115%)"
                    ]
                  }}
                  transition={{
                    duration: 0.6,
                    filter: {
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  whileHover={{
                    scale: 1.08,
                    filter: "brightness(130%) contrast(130%) saturate(140%)",
                    transition: { duration: 0.3 }
                  }}
                />

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedFort.name} <span className="text-orange-300">({selectedFort.year})</span>
                  </h2>
                  <p className="text-lg text-orange-100 leading-relaxed mb-6">{selectedFort.description}</p>
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold 
                             hover:from-orange-600 hover:to-red-600 transform transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFort(null)}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default VijayMap