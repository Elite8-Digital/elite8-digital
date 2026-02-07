import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '@/assets/elite1.jpeg';
import ProjectsHeader from '@/components/ui/ProjectHeader';
import vid1 from '@/assets/drvikas.mp4';
import vid2 from '@/assets/IB.mp4';
import vid3 from '@/assets/IB.mp4';
import vid4 from '@/assets/onesty_demo.mp4';
import vid5 from '@/assets/temple.mp4';
import vid6 from '../assets/standford.mp4';
import vid7 from '../assets/nymara_demo.mp4';
// Import your images for the last three projects
import invo from '@/assets/invoice.png'; // Replace with your actual image paths
import school from '@/assets/school.png';
import college from '@/assets/college.png';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSnap() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const verticalSectionRef = useRef<HTMLDivElement | null>(null);
	const [currentText, setCurrentText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [showVerticalSection, setShowVerticalSection] = useState(false);
	const currentIndexRef = useRef(0);

	const words = ['Websites.', 'E-commerce.', 'ERPs.', 'Apps.'];

	const projects = [
		{
			companyName: 'Nymara Jewells',
			title: 'NYMARA Jewells',
			description: 'Leading the future of design with cutting-edge technology and creative excellence',
			videoUrl: vid7,
			link: 'https://nymara.netlify.app/',
			type: 'video',
		},
		{
			companyName: 'Standford School',
			title: 'Standford School',
			description:
				'A clean and informative school website designed to showcase academics, admissions, and campus life with an intuitive and user-friendly interface.',
			videoUrl: vid6,
			link: 'https://startling-cascaron-a840d3.netlify.app/',
			type: 'video',
		},
		{
			companyName: 'Lets Taxify',
			title: 'Lets Taxify',
			description:
				'A professional website for a Chartered Accountant firm, built to establish trust, showcase services, and enable easy client inquiries.',
			videoUrl: vid3,
			link: 'https://letstaxify.com/',
			type: 'video',
		},
		{
			companyName: 'Nashville Hanuman Temple',
			title: 'Temple Website',
			description:
				'A simple and informative website for a temple, designed to share events, timings, and connect the community online.',
			videoUrl: vid5,
			link: 'http://nashvillehanuman.org/',
			type: 'video',
		},
		{
			companyName: 'Doctor Website',
			title: 'Healthcare Website',
			description:
				'A professional healthcare website designed to build trust, share medical services clearly, and make patient inquiries easy.',
			videoUrl: vid1,
			link: 'http://www.drvikasbhalekar.in/',
			type: 'video',
		},
		{
			companyName: 'Bharat Onesty',
			title: 'E-commerce Website',
			description:
				'A clean and engaging brand website showcasing a range of premium teas with a strong focus on storytelling and product presentation.',
			videoUrl: vid4,
			link: 'https://bharatonesty.com/',
			type: 'video',
		},
		{
			companyName: ' IB Tech',
			title: 'Software Company Website',
			description:
				'A modern corporate website for a software company, focused on credibility, service clarity, and strong brand presence.',
			videoUrl: vid2,
			link: 'https://ibtechnologiesgroup.com/',
			type: 'video',
		},
		{
			companyName: 'Education Management System ',
			title: 'School ERP',
			description:
				'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
			imageUrl: school,
			link: '/',
			type: 'image',
		},
		// {
		// 	companyName: 'School & College ERP ',
		// 	title: 'Education Management System',
		// 	description:
		// 		'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
		// 	imageUrl: school,
		// 	link: '/',
		// 	type: 'image',
		// },
		{
			companyName: 'Education Management System',
			title: 'College ERP',
			description:
				'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
			imageUrl: college,
			link: '/',
			type: 'image',
		},
		// {
		// 	companyName: 'School & College ERP',
		// 	title: 'Education Management System',
		// 	description:
		// 		'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
		// 	imageUrl: college,
		// 	link: '/',
		// 	type: 'image',
		// },
		{
			companyName: 'Invoice Software',
			title: 'Billing & Invoicing Software',
			description:
				'A user-friendly invoicing software designed to simplify billing, payments, and financial record management for businesses.',
			imageUrl: invo,
			link: '/',
			type: 'image',
		},
	];

	// Typing effect
	useEffect(() => {
		const currentWord = words[currentWordIndex];
		const typingSpeed = isDeleting ? 50 : 150;
		const pauseTime = 2000;

		const timer = setTimeout(() => {
			if (!isDeleting) {
				if (currentText.length < currentWord.length) {
					setCurrentText(currentWord.slice(0, currentText.length + 1));
				} else {
					setTimeout(() => setIsDeleting(true), pauseTime);
				}
			} else {
				if (currentText.length > 0) {
					setCurrentText(currentText.slice(0, -1));
				} else {
					setIsDeleting(false);
					setCurrentWordIndex((prev) => (prev + 1) % words.length);
				}
			}
		}, typingSpeed);

		return () => clearTimeout(timer);
	}, [currentText, isDeleting, currentWordIndex, words]);

	useEffect(() => {
		if (!containerRef.current) return;

		const panels = containerRef.current.querySelectorAll<HTMLElement>('.panel');
		let isScrolling = false;

		const scrollToPanel = (index: number) => {
			if (index < 0 || index >= panels.length) return;
			currentIndexRef.current = index;
			const translateX = -index * 100;

			panels.forEach((panel: HTMLElement) => {
				panel.style.transform = `translateX(${translateX}%)`;
			});

			// Show vertical section when reaching the last panel
			if (index === panels.length - 1) {
				setTimeout(() => {
					setShowVerticalSection(true);
				}, 500);
			} else {
				setShowVerticalSection(false);
			}
		};

		const handleWheel = (e: WheelEvent) => {
			// Allow normal scrolling in vertical section
			if (showVerticalSection && verticalSectionRef.current) {
				const verticalSection = verticalSectionRef.current;
				const isAtTop = verticalSection.scrollTop === 0;

				// If scrolling up and at the top of vertical section, go back to panels
				if (e.deltaY < 0 && isAtTop) {
					e.preventDefault();
					setShowVerticalSection(false);
					scrollToPanel(currentIndexRef.current - 1);
					return;
				}
				return;
			}

			e.preventDefault();

			if (isScrolling) return;

			isScrolling = true;

			if (e.deltaY > 0) {
				// Scroll down/right
				if (currentIndexRef.current < panels.length - 1) {
					scrollToPanel(currentIndexRef.current + 1);
				}
			} else {
				// Scroll up/left
				if (currentIndexRef.current > 0) {
					scrollToPanel(currentIndexRef.current - 1);
				}
			}

			setTimeout(() => {
				isScrolling = false;
			}, 1000);
		};

		window.addEventListener('wheel', handleWheel, { passive: false });

		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [showVerticalSection]);

	return (
		<div className="relative">
			<div id="root" className="overflow-hidden h-screen">
				<div ref={containerRef} className="w-[700%] h-screen flex flex-nowrap">
					{/* Hero Section */}
					<div className="panel w-screen h-screen flex-shrink-0 flex justify-center items-center font-semibold text-2xl text-center text-white relative box-border p-2.5 transition-transform duration-1000 ease-out bg-black">
						<section className="font-semibold text-2xl text-center text-white relative box-border p-2.5">
							<div className="max-w-4xl mt-44">
								<h1 className="text-5xl md:text-8xl mb-8">
									<span className="font-serif">Let's create</span>
									<br />
									<span className="font-['Brush_Script_MT',cursive] italic text-6xl md:text-8xl">
										{currentText}
										<span className="animate-pulse">|</span>
									</span>
								</h1>

								<p className="text-gray-400 text-lg md:text-xl max-w-2xl ml-32">
									We help businesses turn ideas into scalable websites, Apps & software — built for
									performance, clarity, and growth.
								</p>

								<h1 className="-rotate-12 mt-20">
									<span
										className="font-serif italic text-6xl md:text-8xl md:text-[250px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
										style={{
											backgroundImage: `url(${img})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center',
											backgroundClip: 'text',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
											color: 'transparent',
										}}
									>
										ELITE8
									</span>
								</h1>
							</div>
						</section>
					</div>

					{/* Projects Header */}
					<section className="panel w-screen h-screen flex-shrink-0 flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-transform duration-1000 ease-out">
						<ProjectsHeader />
					</section>

					{/* Project Panels */}
					{projects.map((project, index) => (
						<section
							key={index}
							className={`panel w-screen h-screen flex-shrink-0 flex justify-center items-center relative overflow-hidden transition-transform duration-1000 ease-out ${
								index % 2 === 0 ? 'bg-black' : 'bg-black'
							}`}
						>
							<div className="absolute inset-0 opacity-20"></div>

							<div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 xl:gap-20 items-center relative z-10">
								<div className={`space-y-6 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
									<div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
										<span className="text-blue-300 text-sm font-semibold">
											{project.companyName}
										</span>
									</div>
									<h2 className="text-6xl font-bold text-white leading-tight">{project.title}</h2>
									<p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="group inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
									>
										View Website
										<span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
											→
										</span>
									</a>
								</div>

								<div className={`relative ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
									<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
									<div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
										{project.type === 'video' ? (
											<video
												src={project.videoUrl}
												autoPlay
												loop
												muted
												playsInline
												className="w-full h-[400px] xl:h-[500px] object-contain"
											/>
										) : (
											<img
												src={project.imageUrl}
												alt={project.title}
												className="w-full h-[400px] xl:h-[500px] object-contain"
											/>
										)}
									</div>
								</div>
							</div>
						</section>
					))}
				</div>
			</div>
		</div>
	);
}










// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import img from '@/assets/elite1.jpeg';
// import ProjectsHeader from '@/components/ui/ProjectHeader';
// import vid1 from '@/assets/drvikas.mp4';
// import vid2 from '@/assets/IB.mp4';
// import vid3 from '@/assets/IB.mp4';
// import vid4 from '@/assets/onesty_demo.mp4';
// import vid5 from '@/assets/temple.mp4';
// import vid6 from '../assets/standford.mp4';
// import vid7 from '../assets/nymara_demo.mp4'
// gsap.registerPlugin(ScrollTrigger);

// export default function HorizontalScrollSnap() {
// 	const containerRef = useRef<HTMLDivElement | null>(null);
// 	const verticalSectionRef = useRef<HTMLDivElement | null>(null);
// 	const [currentText, setCurrentText] = useState('');
// 	const [isDeleting, setIsDeleting] = useState(false);
// 	const [currentWordIndex, setCurrentWordIndex] = useState(0);
// 	const [showVerticalSection, setShowVerticalSection] = useState(false);
// 	const currentIndexRef = useRef(0);

// 	const words = ['together.', 'brands.', 'products.', 'designs.', 'ideas.'];

// 	const projects = [
// 		{
// 			title: 'NYMARA Jewells',
// 			description: 'Leading the future of design with cutting-edge technology and creative excellence',
// 			// imageUrl: img3,
// 			videoUrl: vid7,
// 		},
// 		{
// 			title: 'Standford School',
// 			description: 'A clean and informative school website designed to showcase academics, admissions, and campus life with an intuitive and user-friendly interface.',
// 			// imageUrl: img3,
// 			videoUrl: vid6,
// 		},
// 		{
// 			title: 'Lets Taxify',
// 			description: 'A professional website for a Chartered Accountant firm, built to establish trust, showcase services, and enable easy client inquiries.',
// 			// imageUrl: img3,
// 			videoUrl: vid3,

// 			//video update karna h
// 		},
// 		{
// 			title: 'Temple Website',
// 			description: 'A simple and informative website for a temple, designed to share events, timings, and connect the community online.',
// 			// imageUrl: img5,
// 			videoUrl: vid5,
// 		},
// 		{
// 			title: 'Healthcare Website',
// 			description:
// 				'A professional healthcare website designed to build trust, share medical services clearly, and make patient inquiries easy.',
// 			// imageUrl: img1,
// 			videoUrl: vid1,
// 		},

// 		{
// 			title: "E-commerce Website ",
// 			description: 'A clean and engaging brand website showcasing a range of premium teas with a strong focus on storytelling and product presentation.',
// 			// imageUrl: img4,
// 			videoUrl: vid4,
// 		},

// 		{
// 			title: 'Software Company Website',
// 			description:
// 				'A modern corporate website for a software company, focused on credibility, service clarity, and strong brand presence.',
// 			// imageUrl: img2,
// 			videoUrl: vid2,
// 		},
		
		
		
// 		{
// 			title: 'Education Management System',
// 			description: 'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
// 			// imageUrl: img5,
// 			videoUrl: vid2,
// 		},

// 		{
// 			title: 'Education Management System',
// 			description: 'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
// 			// imageUrl: img5,
// 			videoUrl: vid2,
// 		},

// 		{
// 			title: 'Billing & Invoicing Software',
// 			description: 'A user-friendly invoicing software designed to simplify billing, payments, and financial record management for businesses.',
// 			// imageUrl: img5,
// 			videoUrl: vid1,
// 		},
// 	];

// 	// Typing effect
// 	useEffect(() => {
// 		const currentWord = words[currentWordIndex];
// 		const typingSpeed = isDeleting ? 50 : 150;
// 		const pauseTime = 2000;

// 		const timer = setTimeout(() => {
// 			if (!isDeleting) {
// 				if (currentText.length < currentWord.length) {
// 					setCurrentText(currentWord.slice(0, currentText.length + 1));
// 				} else {
// 					setTimeout(() => setIsDeleting(true), pauseTime);
// 				}
// 			} else {
// 				if (currentText.length > 0) {
// 					setCurrentText(currentText.slice(0, -1));
// 				} else {
// 					setIsDeleting(false);
// 					setCurrentWordIndex((prev) => (prev + 1) % words.length);
// 				}
// 			}
// 		}, typingSpeed);

// 		return () => clearTimeout(timer);
// 	}, [currentText, isDeleting, currentWordIndex, words]);

// 	useEffect(() => {
// 		if (!containerRef.current) return;

// 		const panels = containerRef.current.querySelectorAll<HTMLElement>('.panel');
// 		let isScrolling = false;

// 		const scrollToPanel = (index: number) => {
// 			if (index < 0 || index >= panels.length) return;
// 			currentIndexRef.current = index;
// 			const translateX = -index * 100;

// 			panels.forEach((panel: HTMLElement) => {
// 				panel.style.transform = `translateX(${translateX}%)`;
// 			});

// 			// Show vertical section when reaching the last panel
// 			if (index === panels.length - 1) {
// 				setTimeout(() => {
// 					setShowVerticalSection(true);
// 				}, 500);
// 			} else {
// 				setShowVerticalSection(false);
// 			}
// 		};

// 		const handleWheel = (e: WheelEvent) => {
// 			// Allow normal scrolling in vertical section
// 			if (showVerticalSection && verticalSectionRef.current) {
// 				const verticalSection = verticalSectionRef.current;
// 				const isAtTop = verticalSection.scrollTop === 0;

// 				// If scrolling up and at the top of vertical section, go back to panels
// 				if (e.deltaY < 0 && isAtTop) {
// 					e.preventDefault();
// 					setShowVerticalSection(false);
// 					scrollToPanel(currentIndexRef.current - 1);
// 					return;
// 				}
// 				return;
// 			}

// 			e.preventDefault();

// 			if (isScrolling) return;

// 			isScrolling = true;

// 			if (e.deltaY > 0) {
// 				// Scroll down/right
// 				if (currentIndexRef.current < panels.length - 1) {
// 					scrollToPanel(currentIndexRef.current + 1);
// 				}
// 			} else {
// 				// Scroll up/left
// 				if (currentIndexRef.current > 0) {
// 					scrollToPanel(currentIndexRef.current - 1);
// 				}
// 			}

// 			setTimeout(() => {
// 				isScrolling = false;
// 			}, 1000);
// 		};

// 		window.addEventListener('wheel', handleWheel, { passive: false });

// 		return () => {
// 			window.removeEventListener('wheel', handleWheel);
// 		};
// 	}, [showVerticalSection]);

// 	return (
// 		<div className="relative">
// 			<div id="root" className="overflow-hidden h-screen">
// 				<div ref={containerRef} className="w-[700%] h-screen flex flex-nowrap">
// 					{/* Hero Section */}
// 					<div className="panel w-screen h-screen flex-shrink-0 flex justify-center items-center font-semibold text-2xl text-center text-white relative box-border p-2.5 transition-transform duration-1000 ease-out bg-black">
// 						<section className="font-semibold text-2xl text-center text-white relative box-border p-2.5">
// 							<div className="max-w-4xl mt-44">
// 								<h1 className="text-5xl md:text-8xl mb-8">
// 									<span className="font-serif">Let's create</span>
// 									<br />
// 									<span className="font-['Brush_Script_MT',cursive] italic text-6xl md:text-8xl">
// 										{currentText}
// 										<span className="animate-pulse">|</span>
// 									</span>
// 								</h1>
								
// 								<p>
// 									<ol className="mx-auto mt-6 w-fit grid grid-cols-2 mb-2 py-3 gap-x-2 gap-y-4 list-decimal list-inside text-start">
// 										<li className="leading-none ">Websites</li>
// 										<li className="leading-none">E-commerce</li>
// 										<li className="leading-none">ERPs</li>
										
// 										<li className="leading-none">Apps</li>
// 									</ol>
// 								</p>
// 								<p className="text-gray-400 text-lg md:text-xl max-w-2xl ml-32">
// 									We help businesses turn ideas into scalable websites, Apps & software — built for performance, clarity, and growth.
// 								</p>

// 								<h1 className="-rotate-12 mt-20">
// 									<span
// 										className="font-serif italic text-6xl md:text-8xl md:text-[250px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
// 										style={{
// 											backgroundImage: `url(${img})`,
// 											backgroundSize: 'cover',
// 											backgroundPosition: 'center',
// 											backgroundClip: 'text',
// 											WebkitBackgroundClip: 'text',
// 											WebkitTextFillColor: 'transparent',
// 											color: 'transparent',
// 										}}
// 									>
// 										ELITE8
// 									</span>
// 								</h1>
// 							</div>
// 						</section>
// 					</div>

// 					{/* Projects Header */}
// 					<section className="panel w-screen h-screen flex-shrink-0 flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-transform duration-1000 ease-out">
// 						<ProjectsHeader />
// 					</section>

// 					{/* Project Panels */}
// 					{projects.map((project, index) => (
// 						<section
// 							key={index}
// 							className={`panel w-screen h-screen flex-shrink-0 flex justify-center items-center relative overflow-hidden transition-transform duration-1000 ease-out ${
// 								index % 2 === 0 ? 'bg-black' : 'bg-black'
// 							}`}
// 						>
// 							<div className="absolute inset-0 opacity-20"></div>

// 							<div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 xl:gap-20 items-center relative z-10">
// 								<div className={`space-y-6 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
// 									<div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
// 										<span className="text-blue-300 text-sm font-semibold">
// 											PROJECT {String(index + 1).padStart(2, '0')}
// 										</span>
// 									</div>
// 									<h2 className="text-6xl font-bold text-white leading-tight">{project.title}</h2>
// 									<p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
// 									<button className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105">
// 										View Website
// 										<span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
// 											→
// 										</span>
// 									</button>
// 								</div>

// 								<div className={`relative ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
// 									<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
// 									<div className="relative rounded-2xl overflow-hidden shadow-2xl  transform hover:scale-105 transition-transform duration-500">
// 										<video
// 											src={project.videoUrl}
// 											autoPlay
// 											loop
// 											muted
// 											playsInline
// 											className="w-full h-[400px] xl:h-[500px] object-contain"
// 										/>
// 									</div>
// 								</div>
// 							</div>
// 						</section>
// 					))}
// 				</div>
// 			</div>

// 			{/* Vertical Scrolling Section */}
// 			{showVerticalSection && (
// 				<div ref={verticalSectionRef} className="relative bg-black text-white overflow-y-auto">
// 					{/* <div className="min-h-screen flex items-center justify-center px-8">
//             <div className="max-w-4xl text-center space-y-8">
//               <h2 className="text-6xl font-bold">Get In Touch</h2>
//               <p className="text-gray-400 text-xl">Let's create something amazing together</p>
//             </div>
//           </div>

//           <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center px-8">
//             <div className="max-w-4xl space-y-8">
//               <h3 className="text-5xl font-bold">Our Services</h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {['Branding', 'Web Design', 'Digital Marketing', 'Strategy'].map((service) => (
//                   <div key={service} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
//                     <h4 className="text-2xl font-semibold mb-2">{service}</h4>
//                     <p className="text-gray-300">Excellence in every detail</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="min-h-screen bg-gradient-to-br from-blue-900 to-teal-900 flex items-center justify-center px-8">
//             <div className="max-w-4xl text-center space-y-8">
//               <h3 className="text-5xl font-bold">Ready to Start?</h3>
//               <button className="px-12 py-6 bg-white text-black font-bold text-xl rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105">
//                 Contact Us
//               </button>
//             </div>
//           </div> */}
// 				</div>
// 			)}
// 		</div>
// 	);
// }
