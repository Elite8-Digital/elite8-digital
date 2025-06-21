import { useState, useEffect, useRef } from 'react';
import MainLayout from '@/layouts/MainLayout';
import PixelTransition from '../components/ui/PixelTransition';

// Import project images
import project1 from '../assets/projects/project1.svg';
import project2 from '../assets/projects/project2.svg';
import project3 from '../assets/projects/project3.svg';
import project4 from '../assets/projects/project4.svg';
import project5 from '../assets/projects/project5.svg';
import project6 from '../assets/projects/project6.svg';
import project7 from '../assets/projects/project7.svg';
import project8 from '../assets/projects/project8.svg';
import project9 from '../assets/projects/project9.svg';

type Project = {
	id: number;
	title: string;
	description: string;
	category: string;
	tags: string[];
	year: string;
	image: string;
};

const Work = () => {
	const [activeFilter, setActiveFilter] = useState<string>('all');
	const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
	const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			revealRefs.current.forEach((el) => {
				if (!el) return;
				const revealTop = el.getBoundingClientRect().top;
				const revealPoint = 150;

				if (revealTop < window.innerHeight - revealPoint) {
					el.classList.add('active');
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (activeFilter === 'all') {
			setFilteredProjects(projects);
		} else {
			setFilteredProjects(projects.filter((project) => project.category === activeFilter));
		}
	}, [activeFilter]);

	return (
		<MainLayout>
			<section className="relative py-24 overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10"></div>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)] z-20"></div>
				</div>

				<div className="container relative z-10 px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
							Our <span className="text-gradient">Work</span>
						</h1>
						<p className="text-xl text-gray-400">
							Explore our portfolio of projects that showcase our expertise in creating stunning digital experiences.
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-4 mb-12">
						{['all', 'web', 'mobile', 'branding', '3d'].map((filter) => (
							<button
								key={filter}
								className={`px-6 py-2 rounded-full transition-all ${activeFilter === filter ? 'bg-primary text-primary-foreground' : 'bg-secondary text-gray-400 hover:text-white'}`}
								onClick={() => setActiveFilter(filter)}
							>
								{filter.charAt(0).toUpperCase() + filter.slice(1)}
							</button>
						))}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredProjects.map((project, index) => (
							<div 
								key={project.id} 
								className="reveal group cursor-pointer"
								ref={(el) => (revealRefs.current[index] = el)}
							>
								<div className="relative overflow-hidden rounded-lg">
									{/* Project Image with Pixel Transition */}
									<div className="aspect-[4/3] bg-muted relative overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
										<PixelTransition 
											src={project.image} 
											alt={project.title}
											className="h-full w-full"
											pixelSize={15}
											transitionDuration={0.3}
											hoverEffect={true}
										/>
									</div>
									
									{/* Project Info */}
									<div className="p-4">
										<div className="flex justify-between items-center mb-2">
											<h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
											<span className="text-sm text-gray-400">{project.year}</span>
										</div>
										<p className="text-gray-400 mb-3 line-clamp-2">{project.description}</p>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag) => (
												<span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-gray-300">
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 bg-secondary">
				<div className="container px-4 mx-auto">
					<div 
						className="reveal mb-16 text-center" 
						ref={(el) => (revealRefs.current[projects.length] = el)}
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							We follow a structured approach to deliver exceptional results for every project.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{process.map((step, index) => (
							<div 
								key={step.title} 
								className="reveal relative" 
								ref={(el) => (revealRefs.current[projects.length + index + 1] = el)}
							>
								<div className="flex flex-col items-center text-center">
									<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
										<span className="text-primary font-bold text-xl">{index + 1}</span>
										{index < process.length - 1 && (
											<div className="absolute top-1/2 left-full w-full h-0.5 bg-primary/10 hidden md:block"></div>
										)}
									</div>
									<h3 className="text-xl font-bold mb-2">{step.title}</h3>
									<p className="text-gray-400">{step.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24">
				<div className="container px-4 mx-auto">
					<div 
						className="reveal max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-secondary to-secondary/50 border border-white/10" 
						ref={(el) => (revealRefs.current[projects.length + process.length + 1] = el)}
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
						<p className="text-xl text-gray-300 mb-8">
							Ready to start your next project? Contact us today to discuss how we can help bring your vision to life.
						</p>
						<a href="#contact" className="btn btn-primary btn-lg">
							Get in Touch
						</a>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

const projects: Project[] = [
	{
		id: 1,
		title: 'Huly.io Platform',
		description: 'A complete redesign and development of the Huly.io platform with focus on user experience and performance.',
		category: 'web',
		tags: ['UI/UX', 'React', 'Animation'],
		year: '2024',
		image: project1
	},
	{
		id: 2,
		title: 'ReactBits Portfolio',
		description: 'An interactive portfolio website showcasing the capabilities of ReactBits components with 3D elements.',
		category: 'web',
		tags: ['React', '3D', 'Interactive'],
		year: '2023',
		image: project2
	},
	{
		id: 3,
		title: 'Quantum Mobile App',
		description: 'A cutting-edge mobile application for financial management with advanced visualization and analytics.',
		category: 'mobile',
		tags: ['React Native', 'FinTech', 'UI/UX'],
		year: '2023',
		image: project3
	},
	{
		id: 4,
		title: 'Nova Brand Identity',
		description: 'Complete brand identity design for Nova, a tech startup focused on sustainable energy solutions.',
		category: 'branding',
		tags: ['Branding', 'Logo Design', 'Identity'],
		year: '2022',
		image: project4
	},
	{
		id: 5,
		title: 'Immersive VR Experience',
		description: 'A virtual reality experience for a luxury real estate developer to showcase properties in an immersive way.',
		category: '3d',
		tags: ['VR', '3D Modeling', 'Interactive'],
		year: '2023',
		image: project5
	},
	{
		id: 6,
		title: 'Eco E-commerce Platform',
		description: 'An e-commerce platform for sustainable products with a focus on ethical sourcing and carbon footprint tracking.',
		category: 'web',
		tags: ['E-commerce', 'React', 'Sustainability'],
		year: '2022',
		image: project6
	},
	{
		id: 7,
		title: 'Pulse Health App',
		description: 'A health tracking mobile application with personalized insights and wellness recommendations.',
		category: 'mobile',
		tags: ['Health Tech', 'React Native', 'UI/UX'],
		year: '2023',
		image: project7
	},
	{
		id: 8,
		title: 'Nexus 3D Product Configurator',
		description: 'An interactive 3D product configurator for a furniture company allowing customers to customize products in real-time.',
		category: '3d',
		tags: ['3D', 'WebGL', 'E-commerce'],
		year: '2024',
		image: project8
	},
	{
		id: 9,
		title: 'Artisan Brand Refresh',
		description: 'A comprehensive brand refresh for Artisan, a boutique design studio with a global clientele.',
		category: 'branding',
		tags: ['Branding', 'Visual Identity', 'Strategy'],
		year: '2023',
		image: project9
	},
];

const process = [
	{
		title: 'Discovery',
		description: 'We start by understanding your business, goals, and target audience to define the project scope.',
	},
	{
		title: 'Strategy',
		description: 'We develop a comprehensive strategy and roadmap to achieve your business objectives.',
	},
	{
		title: 'Design & Development',
		description: 'Our team creates stunning designs and builds robust, scalable solutions.',
	},
	{
		title: 'Launch & Support',
		description: 'We ensure a smooth launch and provide ongoing support to help you succeed.',
	},
];

export default Work;
