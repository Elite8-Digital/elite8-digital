import { useState, useEffect } from 'react';
import AppRoutes from './routes';
import AnimatedCursor from './components/ui/AnimatedCursor';
import CurtainAnimation from './components/ui/CurtainAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const App = () => {
	const location = useLocation();
	const [showCurtain, setShowCurtain] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	// Disable default cursor when custom cursor is active
	useEffect(() => {
		document.body.classList.add('custom-cursor');
		return () => {
			document.body.classList.remove('custom-cursor');
		};
	}, []);

	const handleCurtainComplete = () => {
		setShowCurtain(false);
	};

	return (
		<>
			<AnimatedCursor />
			{showCurtain && <CurtainAnimation onComplete={handleCurtainComplete} />}
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<AppRoutes />
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default App;
