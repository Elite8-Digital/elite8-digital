import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Work', href: '/work' },
        { name: 'Services', href: '/#services' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Testimonials', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'ri-twitter-fill', href: '#' },
    { name: 'Instagram', icon: 'ri-instagram-fill', href: '#' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/company/elite8-digital/about/' },
    { name: 'GitHub', icon: 'ri-github-fill', href: '#' },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                  ELITE8
                </span>
                <span className="text-2xl font-bold text-white">DIGITAL</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6">
              Creating stunning digital experiences that captivate and convert. We blend creativity with technology to build remarkable websites.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="text-white font-semibold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Elite8Digital. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
