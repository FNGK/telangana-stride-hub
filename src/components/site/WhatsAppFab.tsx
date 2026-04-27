import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => (
  <motion.a
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.2, duration: 0.5 }}
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Hyderabad Globe FC on WhatsApp"
    className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-gold hover:bg-accent-glow transition-colors"
  >
    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
    <MessageCircle className="h-6 w-6 relative" strokeWidth={2} />
  </motion.a>
);
