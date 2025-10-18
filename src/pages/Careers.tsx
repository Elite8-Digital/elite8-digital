import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
interface JobOpening {
  id: number;
  title: string;
  type: string;
  location: string;
  duration: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  salary: string[];
}

const jobOpenings: JobOpening[] = [
    // {
    // id: 1,
    // title: 'SDE Intern',
    // type: 'Internship',
    // location: 'Remote',
    // duration: '2 months',
    // description: 'Join our team as an SDE Intern and work on cutting-edge projects while gaining hands-on experience in software development at a fast-growing startup.',
    // responsibilities: [
    //   'Develop and maintain web applications using modern technologies',
    //   'Collaborate with cross-functional teams to define, design, and ship new features',
    //   'Write clean, maintainable, and efficient code',
    //   'Participate in code reviews and team discussions',
    //   'Troubleshoot, debug and upgrade existing systems'
    // ],
  //   requirements: [
  //     'Currently pursuing a degree in Computer Science or related field',
  //     'Basic understanding of programming concepts and data structures',
  //     'Familiarity with at least one programming language (JavaScript, Python, Java, etc.)',
  //     'Basic understanding of web technologies (HTML, CSS, JavaScript)',
  //     'Strong problem-solving skills and eagerness to learn'
  //   ],
  //   skills: ['JavaScript', 'React', 'Node.js', 'Git', 'REST APIs', 'MongoDB'],
  //   salary: [
  //   'Stipend: ₹10,000 – ₹20,000 per month (based on skills and performance).'
  // ]
  // },
  {
    id: 1,
    title: 'Social Media Marketing Intern',
    type: 'Internship',
    location: 'Remote',
    duration: '2 months',
    description: 'We are seeking a creative Social Media Marketing Intern who can take charge of our social media presence and create engaging content that connects with our audience.',
    responsibilities: [
  'Ideate, plan, and create engaging Instagram Reels, posts, and stories.',
  'Manage posting across Instagram, Facebook, and other platforms.',
  'Bring fresh and creative ideas for social media campaigns and trends.',
  'Stay updated with the latest trends, sounds, and formats in social media.',
  'Ensure consistency in branding, tone, and design.',
  'Track engagement and suggest improvements for growth.'
],
requirements: [
  'Strong knowledge of Instagram Reels & trending content.',
  'Ability to shoot, edit, and design creative content (basic editing tools, Canva, CapCut, or similar).',
  'Proactive with new ideas for posts & campaigns.',
  'Good understanding of social media algorithms and audience engagement.',
  'Prior experience in content creation is a plus.'
],
skills: ['Instagram Reels', 'Content Creation', 'Canva', 'CapCut', 'Social Media Algorithms', 'Branding'],
salary: [
    'Stipend: ₹5,000 – ₹20,000 per month (based on skills and performance).'
  ]
  },
  {
    id: 2,
    title: 'React Native Intern',
    type: 'Internship',
    location: 'Remote',
    duration: '2 months',
    description: 'We are seeking a React Native Intern to help build and maintain scalable, high-quality mobile applications for both Android and iOS platforms.',
  responsibilities: [
    'Develop and maintain mobile applications using React Native for Android and iOS.',
    'Write clean, efficient, and reusable code.',
    'Ensure apps are scalable and responsive across different screen sizes and mobile devices.',
    'Collaborate with the design and backend teams to integrate APIs and new features.',
    'Debug, test, and optimize app performance.',
    'Stay updated with the latest trends and best practices in mobile development.'
  ],
  requirements: [
    'Basic knowledge of React Native, JavaScript/TypeScript.',
    'Understanding of mobile UI/UX principles.',
    'Familiarity with REST APIs and third-party libraries.',
    'Problem-solving mindset and eagerness to learn.',
    'Good communication and teamwork skills.',
    '(Bonus) Exposure to Git/GitHub, Firebase, or mobile app deployment.'
  ],
  skills: [
    'React Native',
    'JavaScript',
    'TypeScript',
    'REST APIs',
    'Mobile UI/UX',
    'Git/GitHub',
    'Firebase',
    'App Deployment'
  ],
  salary: [
    'Stipend: ₹15,000 – ₹30,000 per month (based on skills and performance).'
  ]
},
];

const Careers: React.FC = () => {
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
  const [selectedJob, setSelectedJob] = useState<JobOpening>(jobOpenings[0]);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    college: '',
    currentYear: '3rd Year',
    resumeLink: '',
    experience: '',
    portfolioLink: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    college: '',
    currentYear: '',
    resumeLink: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    let errors: typeof formErrors = {
      name: '',
      email: '',
      mobile: '',
      college: '',
      currentYear: '',
      resumeLink: '',
    };
    let valid = true;

    if (!formData.name.trim()) {
      errors.name = 'Full Name is required.';
      valid = false;
    }
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
      valid = false;
    }
    // Mobile validation
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile number is required.';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = 'Mobile number must be exactly 10 digits.';
      valid = false;
    }
    if (!formData.college.trim()) {
      errors.college = 'College/University is required.';
      valid = false;
    }
    if (!formData.currentYear.trim()) {
      errors.currentYear = 'Current Year of Study is required.';
      valid = false;
    }
    if (!formData.resumeLink.trim()) {
      errors.resumeLink = 'Resume/CV link is required.';
      valid = false;
    }
    setFormErrors(errors);
    return valid;
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://lets-taxify.onrender.com/api/careers/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          position: selectedJob?.title
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({
          success: true,
          message: 'Application submitted successfully! We will get back to you soon.'
        });
        
        setFormData({
          name: '',
          email: '',
          mobile: '',
          college: '',
          currentYear: '3rd Year',
          resumeLink: '',
          experience: '',
          portfolioLink: '',
        });
        
        setTimeout(() => {
          setShowApplicationForm(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Failed to submit application. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            ref={el => revealRefs.current[0] = el}
            initial={{ opacity: 0, y: 20 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're looking for talented individuals who are passionate about creating amazing digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-1"
              ref={el => revealRefs.current[1] = el}
              initial={{ opacity: 0, x: -20 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <h2 className="text-xl font-semibold text-white">Current Openings</h2>
                </div>
                <div className="divide-y divide-gray-800">
                  {jobOpenings.map((opening) => (
                    <button
                      key={opening.id}
                      className={`w-full text-left p-6 transition-colors ${
                        selectedJob?.id === opening.id 
                          ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10' 
                          : 'hover:bg-gray-800/50'
                      }`}
                      onClick={() => setSelectedJob(opening)}
                    >
                      <h3 className="text-lg font-medium text-white">{opening.title}</h3>
                      <div className="mt-2 flex items-center text-sm text-gray-400">
                        <span>{opening.type}</span>
                        <span className="mx-2">•</span>
                        <span>{opening.location}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-2"
              ref={el => revealRefs.current[2] = el}
              initial={{ opacity: 0, x: 20 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white">{selectedJob.title}</h2>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-gray-300">
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01" />
                          </svg>
                          {selectedJob.type}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {selectedJob.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {selectedJob.duration}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowApplicationForm(true)}
                      className="relative group w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      <span className="relative z-10">Apply Now</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>

                  <div className="mt-10 space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Job Description</h3>
                      <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Responsibilities</h3>
                      <ul className="space-y-3">
                        {selectedJob.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Requirements</h3>
                      <ul className="space-y-3">
                        {selectedJob.requirements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedJob.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Stipend</h3>
                        <div className="flex flex-wrap gap-3">
                        {selectedJob.salary.map((salary, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 transition-colors"
                          >
                            {salary}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Apply for {selectedJob.title}</h2>
              <button
                onClick={() => {
                  setShowApplicationForm(false);
                  setSubmitStatus(null);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmitApplication} className="p-6 space-y-6">
              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'}`}>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {submitStatus.success ? (
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${submitStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 cursor-text"
                    placeholder="John Doe"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-red-400">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 cursor-text"
                    placeholder="john@example.com"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-red-400">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-1">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 cursor-text"
                    placeholder="+91 9876543210"
                    maxLength={10}
                  />
                  {formErrors.mobile && (
                    <p className="mt-1 text-xs text-red-400">{formErrors.mobile}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-300 mb-1">
                    College/University <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    required
                    value={formData.college}
                    onChange={handleInputChange}
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 cursor-text"
                    placeholder="Your College/University"
                  />
                  {formErrors.college && (
                    <p className="mt-1 text-xs text-red-400">{formErrors.college}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="currentYear" className="block text-sm font-medium text-gray-300 mb-1">
                    Current Year of Study <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="currentYear"
                    name="currentYear"
                    required
                    value={formData.currentYear}
                    onChange={handleInputChange}
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white cursor-pointer"
                  >
                    <option value="" disabled>Select your year</option>
                    <option value="Bachelors - 1st Year">Bachelors - 1st Year</option>
                    <option value="Bachelors - 2nd Year">Bachelors - 2nd Year</option>
                    <option value="Bachelors - 3rd Year">Bachelors - 3rd Year</option>
                    <option value="Bachelors - 4th Year">Bachelors - 4th Year</option>
                    <option value="Under Graduate">Under Graduate</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                  {formErrors.currentYear && (
                    <p className="mt-1 text-xs text-red-400">{formErrors.currentYear}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-300 mb-1">
                    Resume/CV Link <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="url"
                    id="resumeLink"
                    name="resumeLink"
                    required
                    placeholder="https://drive.google.com/..."
                    value={formData.resumeLink}
                    onChange={handleInputChange}
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  {formErrors.resumeLink && (
                    <p className="mt-1 text-xs text-red-400">{formErrors.resumeLink}</p>
                  )}
                  <p className="mt-2 text-xs text-gray-400">Make sure the link is accessible to anyone with the link</p>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">
                  Experience (if any)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 cursor-text resize-y min-h-[100px]"
                  placeholder="Briefly describe your previous work experience, projects, or relevant coursework..."
                />
              </div>

              <div>
                <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-300 mb-1">
                  Portfolio/GitHub/LinkedIn (optional)
                </label>
                <input
                  type="url"
                  id="portfolioLink"
                  name="portfolioLink"
                  placeholder="https://github.com/yourusername or https://linkedin.com/in/yourprofile"
                  value={formData.portfolioLink}
                  onChange={handleInputChange}
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-800">
                <button
                  type="button"
                  onClick={() => {
                    setShowApplicationForm(false);
                    setSubmitStatus(null);
                  }}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-300 bg-transparent border border-gray-700 rounded-lg hover:bg-gray-800/50 hover:border-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : 'Submit Application'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </MainLayout>
  );
};

export default Careers;
