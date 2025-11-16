import { motion } from 'framer-motion';

interface AuroraTextProps {
  children: React.ReactNode;
}

const AuroraText = ({ children }: AuroraTextProps) => {
  return (
    <motion.span
      className="inline-block relative"
      style={{
        background: 'linear-gradient(90deg, hsl(36, 85%, 50%), hsl(210, 40%, 32%), hsl(36, 85%, 50%))',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{
        backgroundPosition: ['0% center', '200% center', '0% center'],
      }}
      transition={{
        duration: 4,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
};

export default AuroraText;
