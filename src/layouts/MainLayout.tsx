import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import AnimatedCursor from '../components/ui/AnimatedCursor';
import logo from '../assets/images/elite8digital-nav.png';

type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	const location = useLocation();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	
	useEffect(() => {
		document.body.classList.add('custom-cursor');
		return () => {
			document.body.classList.remove('custom-cursor');
		};
	}, []);
	
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [location]);
	
	return (
		<div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
			<AnimatedCursor />
			<div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
					{Array.from({ length: 50 }).map((_, i) => (
						<div 
							key={i}
							className="absolute w-1 h-1 rounded-full bg-white/30"
							style={{
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
								animation: `pulse ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
							}}
						/>
					))}
				</div>
			</div>
			<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
				<motion.div 
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					className="container mx-auto px-4 py-4 flex justify-between items-center"
				>
					<Link to="/" className="relative group">
						<div className="flex items-center">
							<motion.span 
								className="text-2xl font-bold gradient-text mr-1"
								whileHover={{ scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 500 }}
							>
								<img src={logo} alt="Elite8 Digital Logo" className="h-10" />
							</motion.span>
						</div>
						<motion.div 
							className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-blue-500"
							whileHover={{ width: '100%' }}
							transition={{ duration: 0.3 }}
						/>
					</Link>
					
					<nav className="hidden md:flex space-x-8">
						{['Home', 'About', 'Contact', 'Careers'].map((item, index) => (
							<motion.div 
								key={item} 
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 + 0.2 }}
							>
								<NavLink 
									to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
									label={item} 
									currentPath={location.pathname} 
								/>
							</motion.div>
						))}
					</nav>
					
					<motion.div 
						className="md:hidden"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						<button 
							className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label="Toggle mobile menu"
						>
							{mobileMenuOpen ? (
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>
							)}
						</button>
					</motion.div>
				</motion.div>
			</header>
			
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div 
						className="fixed inset-0 z-40 md:hidden"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<motion.div 
							className="absolute inset-0 bg-black/80 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setMobileMenuOpen(false)}
						/>
						
						{/* Menu content */}
						<motion.div
							className="absolute top-0 right-0 w-full max-w-sm h-screen bg-black/95 border-l border-white/10 p-6 overflow-y-auto"
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', damping: 25, stiffness: 300 }}
						>
							<div className="flex flex-col space-y-8">
								<div className="flex justify-end">
									<button 
										className="p-2 rounded-full hover:bg-white/10"
										onClick={() => setMobileMenuOpen(false)}
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								</div>
								
								<nav className="flex flex-col space-y-6">
									{['Home', 'About', 'Contact', 'Careers'].map((item, index) => (
										<motion.div
											key={item}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
										>
											<Link 
												to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
												className={`text-2xl font-bold ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}
												onClick={() => setMobileMenuOpen(false)}
											>
												{item}
											</Link>
										</motion.div>
									))}
								</nav>
								
								<div className="pt-6 mt-6 border-t border-white/10">
									<p className="text-gray-400 mb-4">Get in touch</p>
									<div className="flex space-x-4">
										<a href="https://www.instagram.com/elite8digital/?hl=en" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
												<path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
											</svg>
										</a>
										<a href="https://www.linkedin.com/company/elite8-digital/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
												<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			
			<main className="flex-grow pt-24">
				{children}
			</main>
			
			<footer className="relative bg-black border-t border-white/10 py-16">
				<div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-30"></div>
				
				{/* Animated dots */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					{Array.from({ length: 20 }).map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 rounded-full bg-white/30"
							style={{
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
							}}
							animate={{
								opacity: [0.2, 0.8, 0.2],
								scale: [1, 1.5, 1],
							}}
							transition={{
								duration: 3 + Math.random() * 2,
								repeat: Infinity,
								delay: Math.random() * 2,
							}}
						/>
					))}
				</div>
				
				<div className="container mx-auto px-4 relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="flex items-center mb-4">
								<img src={logo} alt="Elite8 Digital Logo" className="h-16"/>
							</div>
							<p className="text-white/70 mb-6">Creating immersive digital experiences that captivate and convert. We blend creativity with cutting-edge technology.</p>
							<div className="flex space-x-4">
								{['linkedin'].map((social) => (
									<motion.a
										key={social}
										href={social === 'linkedin' ? 'https://www.linkedin.com/company/elite8-digital/about/' : '#'}
										target='_blank'
										rel='noopener noreferrer'
										className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-purple-400 transition-colors"
										whileHover={{ y: -5, scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
									>
										<i className={`ri-${social}-fill text-lg`}></i>
									</motion.a>
								))}
								{
									['instagram'].map((social) => (
										<motion.a
											key={social}
											href={social === 'instagram' ? 'https://www.instagram.com/elite8digital/?hl=en' : '#'}
											target='_blank'
											rel='noopener noreferrer'
											className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-purple-400 transition-colors"
											whileHover={{ y: -5, scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
										>
											<i className={`ri-${social}-fill text-lg`}></i>
										</motion.a>
									))
								}
							</div>
						</motion.div>
						
						{[
							{ title: 'Navigation', links: [
								{ name: 'Home', path: '/' },
								// { name: 'Work', path: '/work' },
								{ name: 'About', path: '/about' },
								{ name: 'Contact', path: '/contact' },
								{ name: 'Careers', path: '/careers' }
							]},
							{ title: 'Services', links: [
								{ name: 'Web Development', path: '#' },
								{ name: 'UI/UX Design', path: '#' },
								{ name: 'Branding', path: '#' },
								{ name: 'Digital Marketing', path: '#' }
							]},
							{ title: 'Contact', links: [
								{ name: 'contact@elite8digital.in', path: 'mailto:contact@elite8digital.in' },
								{ name: '+91 6260894977', path: 'tel:+916260894977' },
								{name:  '+91 7303125674', path: 'tel:+917303125674'}
							]}
						].map((column, columnIndex) => (
							<motion.div
								key={column.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 * columnIndex }}
							>
								<h4 className="text-lg font-medium mb-6 text-white">{column.title}</h4>
								<ul className="space-y-4">
									{column.links.map((link, linkIndex) => (
										<motion.li
											key={link.name}
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: 0.1 * linkIndex + 0.2 * columnIndex }}
										>
											<Link 
												to={link.path} 
												className="text-white/70 hover:text-white transition-colors inline-block"
											>
												<motion.span
													whileHover={{ x: 5 }}
													transition={{ type: 'spring', stiffness: 400 }}
													className="inline-block"
												>
													{link.name}
												</motion.span>
											</Link>
										</motion.li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
					
					<motion.div 
						className="mt-16 pt-8 border-t border-white/10 text-center text-white/50"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<p>© {new Date().getFullYear()} ELITE8DIGITAL. All rights reserved.</p>
					</motion.div>
				</div>
			</footer>
		</div>
	);
};

type NavLinkProps = {
	to: string;
	label: string;
	currentPath: string;
};

const NavLink = ({ to, label, currentPath }: NavLinkProps) => {
	const isActive = currentPath === to || (currentPath.startsWith(to) && to !== '/');
	
	return (
		<Link 
			to={to} 
			className={`relative font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
		>
			<motion.div
				whileHover={{ y: -2 }}
				transition={{ type: 'spring', stiffness: 300 }}
				className="relative"
			>
				{label}
				{isActive && (
					<motion.span 
						layoutId={`underline-${label}`}
						className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
						initial={{ width: 0 }}
						animate={{ width: '100%' }}
						transition={{ duration: 0.3 }}
					></motion.span>
				)}
			</motion.div>
		</Link>
	);
};

export default MainLayout;
