import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Careers from '../pages/Careers';
import PP from '@/pages/PP';
import TC from '@/pages/TC';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/work" element={<Work />} />
			<Route path="/about" element={<About />} />
			<Route path="/careers" element={<Careers />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/privacy-policy" element={<PP />} />
			<Route path="/terms-condition" element={<TC />} />

		</Routes>
	);
};

export default AppRoutes;
