import { useEffect, useState } from 'react';
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
import invo from '@/assets/invoice.png';
import school from '@/assets/school.png';
import college from '@/assets/college.png';

export default function MobileVerticalScroll() {
	const [currentText, setCurrentText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const words = ['Websites.', 'E-commerce.', 'ERPs.', 'Apps.'];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

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
			companyName: 'School & College ERP ',
			title: 'Education Management System',
			description:
				'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
			imageUrl: school,
			link: '/',
			type: 'image',
		},
		{
			companyName: 'Education Management System ',
			title: ' College ERP',
			description:
				'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
			imageUrl: college,
			link: '/',
			type: 'image',
		},
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

	return (
		<div className="bg-black text-white overflow-x-hidden w-full">
			{/* Hero Section - Optimized for mobile */}
			<section className=" min-h-screen flex flex-col justify-center items-center px-4 py-8 pt-20">
				<div className="w-full max-w-sm text-center">
					<h1 className="text-3xl xs:text-4xl mb-4">
						<span className="font-serif block mb-2 leading-tight">Let's create</span>
						<span className="font-['Brush_Script_MT',cursive] italic text-4xl xs:text-5xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent leading-tight">
							{currentText}
							<span className="animate-pulse">|</span>
						</span>
					</h1>

					<p className="text-gray-400 text-sm xs:text-base leading-relaxed mb-8 px-2">
						We help businesses turn ideas into scalable websites, Apps & software — built for performance,
						clarity, and growth.
					</p>

					<h2 className="text-5xl xs:text-6xl font-serif italic -rotate-6 my-8">
						<span
							className="font-serif italic"
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
					</h2>
				</div>
			</section>

			{/* Projects Header Section */}
			<section className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
				<div className="w-full max-w-sm">
					<ProjectsHeader />
				</div>
			</section>

			{/* Project Sections - Optimized for mobile scrolling */}
			{projects.map((project, index) => (
				<section key={index} className=" flex flex-col justify-center items-center px-4 py-8">
					<div className="w-full max-w-sm">
						{/* Animated Header */}
						<div className="mb-3 text-center">
							<h2 className="text-2xl xs:text-3xl font-bold font-serif mb-1 relative inline-block leading-tight">
								<span
									className="absolute inset-0 blur-xl opacity-50 animate-pulse"
									style={{
										background: 'linear-gradient(90deg, #c82736, #e77614, #8d3dae)',
										WebkitBackgroundClip: 'text',
										backgroundClip: 'text',
									}}
								>
									{project.title}
								</span>
								<span className="relative">
									{project.title}
								</span>
							</h2>
						</div>

						{/* Project Showcase */}
						<div className="space-y-3">
							{/* Conditional rendering based on type */}
							{project.type === 'video' ? (
								<div className="relative group cursor-pointer touch-manipulation">
									<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-green-600 rounded-xl blur-lg opacity-40 group-active:opacity-60 transition-all duration-300"></div>
									<div className="relative overflow-hidden rounded-xl transition-all duration-300 transform group-active:scale-[0.98]">
										<video
											autoPlay
											loop
											muted
											playsInline
											className="w-full h-56 xs:h-64 object-contain transition-transform duration-500"
										>
											<source src={project.videoUrl} type="video/mp4" />
										</video>
									</div>
								</div>
							) : (
								<div className="relative group cursor-pointer touch-manipulation">
									<div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur-lg opacity-40 group-active:opacity-60 transition-all duration-300"></div>
									<div className="relative overflow-hidden rounded-xl border border-white/10 transition-all duration-300 transform group-active:scale-[0.98]">
										<img
											src={project.imageUrl}
											alt={project.title}
											className="w-full h-56 xs:h-64 object-cover transition-transform duration-500"
										/>
									</div>
								</div>
							)}
						</div>

						{/* Project Info */}
						<div className="mt-6 text-center space-y-2 px-2">
							<p className="text-gray-400 text-sm xs:text-base leading-relaxed">
								{project.description}
							</p>
							{project.link !== '/' && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block mt-3 text-purple-400 text-sm hover:text-purple-300 transition-colors touch-manipulation"
								>
									View Project →
								</a>
							)}
						</div>
					</div>
				</section>
			))}

			{/* Footer - Mobile optimized */}
			<section className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
				<div className="w-full max-w-sm text-center">
					<h2 className="text-3xl xs:text-4xl font-bold font-serif mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
						Let's Connect
					</h2>
					<p className="text-gray-400 text-sm xs:text-base mb-8 px-2">
						Ready to create something amazing together?
					</p>
					<button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold active:scale-95 transition-transform duration-200 touch-manipulation text-sm xs:text-base">
						Get In Touch
					</button>
				</div>
			</section>
		</div>
	);
}



// import { useEffect, useState } from 'react';
// import img from '@/assets/elite1.jpeg';
// import ProjectsHeader from '@/components/ui/ProjectHeader';
// import vid1 from '@/assets/drvikas.mp4';
// import vid2 from '@/assets/IB.mp4';
// import vid3 from '@/assets/IB.mp4';
// import vid4 from '@/assets/onesty_demo.mp4';
// import vid5 from '@/assets/temple.mp4';
// import vid6 from '../assets/standford.mp4';
// import vid7 from '../assets/nymara_demo.mp4';
// // Import your images for the last three projects
// import invo from '@/assets/invoice.png'; // Replace with your actual image paths
// import school from '@/assets/school.png';
// import college from '@/assets/college.png';

// export default function MobileVerticalScroll() {
// 	const [currentText, setCurrentText] = useState('');
// 	const [isDeleting, setIsDeleting] = useState(false);
// 	const words = ['Websites.', 'E-commerce.', 'ERPs.', 'Apps.'];
// 	const [currentWordIndex, setCurrentWordIndex] = useState(0);

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

// 	const projects = [
// 		{
// 			companyName: 'Nymara Jewells',
// 			title: 'NYMARA Jewells',
// 			description: 'Leading the future of design with cutting-edge technology and creative excellence',
// 			videoUrl: vid7,
// 			link: 'https://nymara.netlify.app/',
// 			type: 'video',
// 		},
// 		{
// 			companyName: 'Standford School',
// 			title: 'Standford School',
// 			description:
// 				'A clean and informative school website designed to showcase academics, admissions, and campus life with an intuitive and user-friendly interface.',
// 			videoUrl: vid6,
// 			link: 'https://startling-cascaron-a840d3.netlify.app/',
// 			type: 'video',
// 		},
// 		{
// 			companyName: 'Lets Taxify',
// 			title: 'Lets Taxify',
// 			description:
// 				'A professional website for a Chartered Accountant firm, built to establish trust, showcase services, and enable easy client inquiries.',
// 			videoUrl: vid3,
// 			link: 'https://letstaxify.com/',
// 			type: 'video',
// 		},
// 		{
// 			companyName: 'Nashville Hanuman Temple',
// 			title: 'Temple Website',
// 			description:
// 				'A simple and informative website for a temple, designed to share events, timings, and connect the community online.',
// 			videoUrl: vid5,
// 			link: 'http://nashvillehanuman.org/',
// 			type: 'video',
// 		},
// 		{
// 			companyName: 'Doctor Website',
// 			title: 'Healthcare Website',
// 			description:
// 				'A professional healthcare website designed to build trust, share medical services clearly, and make patient inquiries easy.',
// 			videoUrl: vid1,
// 			link: 'http://www.drvikasbhalekar.in/',
// 			type: 'video',
// 		},
// 		{
// 			companyName: 'Bharat Onesty',
// 			title: 'E-commerce Website',
// 			description:
// 				'A clean and engaging brand website showcasing a range of premium teas with a strong focus on storytelling and product presentation.',
// 			videoUrl: vid4,
// 			link: 'https://bharatonesty.com/',
// 			type: 'video',
// 		},
// 		{
// 			companyName: ' IB Tech',
// 			title: 'Software Company Website',
// 			description:
// 				'A modern corporate website for a software company, focused on credibility, service clarity, and strong brand presence.',
// 			videoUrl: vid2,
// 			link: 'https://ibtechnologiesgroup.com/',
// 			type: 'video',
// 		},
// 		{
// 			companyName: 'School & College ERP ',
// 			title: 'Education Management System',
// 			description:
// 				'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
// 			imageUrl: school,
// 			link: '/',
// 			type: 'image',
// 		},
// 		{
// 			companyName: 'School & College ERP',
// 			title: 'Education Management System',
// 			description:
// 				'A complete ERP system built to manage academics, students, staff, and administration from a single platform.',
// 			imageUrl: college,
// 			link: '/',
// 			type: 'image',
// 		},
// 		{
// 			companyName: 'Invoice Software',
// 			title: 'Billing & Invoicing Software',
// 			description:
// 				'A user-friendly invoicing software designed to simplify billing, payments, and financial record management for businesses.',
// 			imageUrl: invo,
// 			link: '/',
// 			type: 'image',
// 		},
// 	];

// 	return (
// 		<div className="bg-black text-white overflow-x-hidden">
// 			{/* Hero Section */}
// 			<section className="max-h-screen flex flex-col justify-center items-center px-6 py-12 mt-28">
// 				<div className="max-w-lg text-center">
// 					<h1 className="text-4xl sm:text-5xl mb-6">
// 						<span className="font-serif block mb-2">Let's create</span>
// 						<span className="font-['Brush_Script_MT',cursive] italic text-5xl sm:text-6xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
// 							{currentText}
// 							<span className="animate-pulse">|</span>
// 						</span>
// 					</h1>
// 					{/* <p>
// 						<ol className="mx-auto mt-6 w-fit  mb-4 gap-x-2 py-1 space-y-2 list-decimal list-inside text-left">
// 							<li className="leading-none ">Websites</li>
// 							<li className="leading-none">E-commerce</li>
// 							<li className="leading-none">ERPs</li>
							
// 							<li className="leading-none">Apps</li>
// 						</ol>
// 					</p> */}

// 					<p className="text-gray-400 text-base sm:text-lg mb-12">
// 						We help businesses turn ideas into scalable websites, Apps & software — built for performance,
// 						clarity, and growth.
// 					</p>

// 					<h2 className="text-6xl sm:text-8xl font-serif italic -rotate-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
// 						<span
// 							className="font-serif italic text-6xl md:text-8xl md:text-[250px]"
// 							style={{
// 								backgroundImage: `url(${img})`,
// 								backgroundSize: 'cover',
// 								backgroundPosition: 'center',
// 								backgroundClip: 'text',
// 								WebkitBackgroundClip: 'text',
// 								WebkitTextFillColor: 'transparent',
// 								color: 'transparent',
// 							}}
// 						>
// 							ELITE8
// 						</span>
// 					</h2>
// 				</div>
// 			</section>

// 			{/* Projects Header Section */}
// 			<section className="max-h-screen flex flex-col justify-center items-center px-6 py-20">
// 				<div className="max-w-lg">
// 					<ProjectsHeader />
// 				</div>
// 			</section>

// 			{/* Project Sections */}
// 			{projects.map((project, index) => (
// 				<section key={index} className="max-h-screen flex flex-col justify-center items-center px-4 py-12">
// 					<div className="max-w-lg w-full">
// 						{/* Animated Header */}
// 						<div className="mb-4 text-center">
// 							<h2 className="text-3xl sm:text-5xl font-bold font-serif mb-4 relative inline-block">
// 								<span
// 									className="absolute inset-0 blur-2xl opacity-50 animate-pulse"
// 									style={{
// 										background: 'linear-gradient(90deg, #c82736, #e77614, #8d3dae)',
// 										WebkitBackgroundClip: 'text',
// 										backgroundClip: 'text',
// 									}}
// 								>
// 									{project.title}
// 								</span>
// 								<span
// 									className="relative"
// 									// style={{
// 									// 	background: 'linear-gradient(90deg, #c82736, #e77614, #8d3dae)',
// 									// 	WebkitBackgroundClip: 'text',
// 									// 	WebkitTextFillColor: 'transparent',
// 									// 	backgroundClip: 'text',
// 									// }}
// 								>
// 									{project.title}
// 								</span>
// 							</h2>
// 						</div>

// 						{/* Project Showcase */}
// 						<div className="space-y-3">
// 							{/* Project Image */}
// 							{/* <div className="relative group cursor-pointer">
// 								<div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500 animate-pulse"></div>
// 								<div className="relative overflow-hidden rounded-2xl border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 transform group-hover:scale-105">
// 									<img
// 										src={project.imageUrl}
// 										alt={project.title}
// 										className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
// 									/>
// 									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
// 										<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
// 											<h3 className="text-2xl font-bold mb-2">Brand Evolution</h3>
// 											<p className="text-gray-300">Complete visual identity redesign</p>
// 										</div>
// 									</div>
// 								</div>
// 							</div> */}

// 							{/* Project Video */}
// 							<div className="relative group cursor-pointer">
// 								<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500 animate-pulse"></div>
// 								<div className="relative overflow-hidden rounded-2xl  transition-all duration-500 transform group-hover:scale-105">
// 									<video
// 										autoPlay
// 										loop
// 										muted
// 										playsInline
// 										className="w-full h-48 sm:h-80 object-contain transition-transform duration-700 group-hover:scale-110"
// 									>
// 										<source src={project.videoUrl} type="video/mp4" />
// 									</video>
// 									{/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
// 										<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
// 											<h3 className="text-2xl font-bold mb-2">Digital Experience</h3>
// 											<p className="text-gray-300">Interactive web platform</p>
// 										</div>
// 									</div> */}
// 								</div>
// 							</div>
// 						</div>

// 						{/* Project Info */}
// 						<div className="mt-6 text-center space-y-2">
// 							{/* <h3 className="text-2xl font-bold">{project.title}</h3> */}
// 							<p className="text-gray-400">{project.description}</p>
// 						</div>
// 					</div>
// 				</section>
// 			))}

// 			{/* Footer */}
// 			<section className="max-h-screen flex flex-col justify-center items-center px-6 py-20">
// 				<div className="max-w-lg text-center">
// 					<h2 className="text-4xl sm:text-6xl font-bold font-serif mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
// 						Let's Connect
// 					</h2>
// 					<p className="text-gray-400 text-lg mb-8">Ready to create something amazing together?</p>
// 					<button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300">
// 						Get In Touch
// 					</button>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }
