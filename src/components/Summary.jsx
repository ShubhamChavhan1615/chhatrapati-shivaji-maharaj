import { motion } from "framer-motion";
export const Summary = () => (
    <motion.div 
      className="p-6 text-center text-lg font-semibold z-5 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold text-orange-500">छत्रपती शिवरायांचा विजय नकाशा</h2>
      <p className="mt-4 max-w-2xl mx-auto text-white">
        छत्रपती शिवाजी महाराज यांनी आपल्या शौर्य, चातुर्य आणि रणनीतीने असंख्य किल्ले जिंकले.
        त्यांच्या विजयी नकाश्यातील प्रत्येक किल्ला इतिहासाचा अभिमान आहे.
        हा नकाशा केवळ त्यांच्या लढायांचा दस्तऐवज नाही, तर स्वराज्य स्थापनेचा एक प्रेरणादायक प्रवास आहे.
      </p>
    </motion.div>
  );
  