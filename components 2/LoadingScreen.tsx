import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #D5B77A 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #00F5FF 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, #EFDAD7 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #D5B77A 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 text-center">
        {/* TA-DAM text with explosive animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
        >
          <h1 className="text-white mb-8">
            <motion.span
              animate={{
                color: ['#FFFFFF', '#D5B77A', '#00F5FF', '#EFDAD7', '#FFFFFF'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              TA-DAM
            </motion.span>
          </h1>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-64 mx-auto"
        >
          <div className="h-1 bg-white/20 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D5B77A] via-[#00F5FF] to-[#EFDAD7]"
              style={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-white/60 text-sm tracking-widest">{count}%</p>
        </motion.div>

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#D5B77A' : i % 3 === 1 ? '#00F5FF' : '#EFDAD7',
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 400],
              y: [0, (Math.random() - 0.5) * 400],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
