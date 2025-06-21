import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

import Elite8Digital from '@/assets/images/elite8digital-logo.png';

type TeamMember = {
	name: string;
	role: string;
	bio: string;
};

type Stat = {
	value: string;
	label: string;
	description: string;
};

const About = () => {
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
							About <span className="text-gradient">Us</span>
						</h1>
						<p className="text-xl text-gray-400">
							We bring imagination to life with modern design, smart code, and lasting impact.
						</p>
					</div>
				</div>
			</section>

			<section className="lg:py-24 md:pt-8 md:pb-24">
				<div className="container px-4 mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						<div 
							className="reveal order-2 md:order-1" 
							ref={(el) => (revealRefs.current[0] = el)}
						>
							<h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
							<p className="text-gray-400 mb-4">
								Every great digital product starts with a spark — an idea, a dream, a “what if?” At Elite8 Digital, that spark is what drives us.
							</p>
							<p className="text-gray-400 mb-4">
								We started with a simple belief: technology should feel human. It should empower, inspire, and create real impact. What began as a small group of passionate minds, united by creativity and code, has now evolved into a full-service digital agency helping brands, colleges, and startups build the future they envision.
							</p>
							<p className="text-gray-400 mb-4">
								We saw how many institutions struggled with outdated platforms, clunky designs, or websites that couldn’t keep up with their growth. So, we stepped in — not just to build software, but to build trust, transform experiences, and scale ideas.
							</p>
							<p className="text-gray-400 mb-4">
								From beautifully designed websites and responsive mobile apps to robust platforms used by 1 lakh+ users, we craft digital solutions that are not just functional — they’re unforgettable.
							</p>
							<p className="text-gray-400 mb-4">
								Our story is still being written. Every project we take on is another chapter, another chance to innovate, and another opportunity to create something that makes people say:
								“Wow. That’s Elite.”
							</p>
							<p className="text-gray-400 mb-4">
								We’re not just here to develop. <br />
								We’re here to imagine, innovate, and build— with heart.
							</p>
						</div>
						
						<div 
							className="reveal order-1 md:order-2" 
							ref={(el) => (revealRefs.current[1] = el)}
						>
							<div className="aspect-square bg-muted relative overflow-hidden rounded-2xl">
								<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-emerald-500/20"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<img src={Elite8Digital} alt="Elite8Digital" className="w-full h-full object-cover" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 bg-secondary">
				<div className="container px-4 mx-auto">
					<div 
						className="reveal mb-16 text-center" 
						ref={(el) => (revealRefs.current[2] = el)}
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-4">By the Numbers</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Our impact in numbers that tell the story of our success and growth.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<div 
								key={stat.label} 
								className="reveal p-8 rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm text-center" 
								ref={(el) => (revealRefs.current[index + 3] = el)}
							>
								<div className="text-4xl md:text-6xl font-bold mb-2 text-primary">{stat.value}</div>
								<h3 className="text-xl font-medium mb-3">{stat.label}</h3>
								<p className="text-gray-400">{stat.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Meet Our Team section */}

			{/* <section className="py-24">
				<div className="container px-4 mx-auto">
					<div 
						className="reveal mb-16 text-center" 
						ref={(el) => (revealRefs.current[7] = el)}
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							The talented individuals behind our exceptional work.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{team.map((member, index) => (
							<div 
								key={member.name} 
								className="reveal" 
								ref={(el) => (revealRefs.current[index + 8] = el)}
							>
								<div className="bg-secondary rounded-lg overflow-hidden group">
									<div className="aspect-[3/4] bg-muted relative overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-emerald-500/20"></div>
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
												<span className="text-primary font-bold text-4xl">{member.name.charAt(0)}</span>
											</div>
										</div>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-bold mb-1">{member.name}</h3>
										<p className="text-primary mb-4">{member.role}</p>
										<p className="text-gray-400">{member.bio}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section> */}

			<section className="py-24 bg-secondary">
				<div className="container px-4 mx-auto">
					<div 
						className="reveal mb-16 text-center" 
						ref={(el) => (revealRefs.current[11] = el)}
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							The principles that guide our work and define our culture.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{values.map((value, index) => (
							<div 
								key={value.title} 
								className="reveal p-8 rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm" 
								ref={(el) => (revealRefs.current[index + 12] = el)}
							>
								<h3 className="text-2xl font-bold mb-4">{value.title}</h3>
								<p className="text-gray-400">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24">
				<div className="container px-4 mx-auto">
					<div 
						className="reveal max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-secondary to-secondary/50 border border-white/10" 
						ref={(el) => (revealRefs.current[16] = el)}
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Team</h2>
						<p className="text-xl text-gray-300 mb-8">
							We're always looking for talented individuals to join our team. If you're passionate about creating exceptional digital experiences, we'd love to hear from you.
						</p>
						<Link to="/contact" className="btn btn-primary btn-lg">
							Get in Touch
						</Link>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

const stats: Stat[] = [
	{
		value: '30+',
		label: 'Projects Completed',
		description: 'Successful projects delivered to clients worldwide.',
	},
	{
		value: '5+',
		label: 'Team Members',
		description: 'Talented designers, developers, and strategists.',
	},
	{
		value: '2+',
		label: 'Years of Experience',
		description: 'Creating exceptional digital experiences.',
	},
	{
		value: '100%',
		label: 'Clients Satisfaction',
		description: 'Trusted by businesses around the world.',
	},
];

const team: TeamMember[] = [
	{
		name: 'Alex Morgan',
		role: 'Founder & Creative Director',
		bio: 'With over 10 years of experience in design and development, Alex leads our creative vision and ensures every project exceeds expectations.',
	},
	{
		name: 'Sarah Chen',
		role: 'Lead UX/UI Designer',
		bio: 'Sarah combines aesthetic sensibility with user-centered design principles to create intuitive and engaging digital experiences.',
	},
	{
		name: 'David Rodriguez',
		role: 'Technical Director',
		bio: 'David oversees our development team and ensures our technical solutions are robust, scalable, and cutting-edge.',
	},
];

const values = [
	{
		title: 'Innovation',
		description: 'We embrace new technologies and methodologies to push the boundaries of what\'s possible in digital design and development.',
	},
	{
		title: 'Excellence',
		description: 'We strive for excellence in everything we do, from the smallest detail to the overall user experience.',
	},
	{
		title: 'Collaboration',
		description: 'We believe in the power of collaboration, both within our team and with our clients, to create exceptional results.',
	},
	{
		title: 'User-Centered',
		description: 'We put users at the center of our design process, creating experiences that are intuitive, engaging, and effective.',
	},
];

export default About;
