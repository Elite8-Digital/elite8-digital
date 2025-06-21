import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <motion.main 
        className="flex-grow pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
