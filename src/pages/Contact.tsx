import { useRef, useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import ThunderBorder from '../components/ui/ThunderBorder';

const Contact = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://lets-taxify.onrender.com/api/contact/elite8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        mode: 'cors',
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message');
      }

      const data = await response.json();
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-400">
              Have a project in mind? We'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:py-24 md:pt-8 md:pb-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div 
              className="reveal" 
              ref={(el) => (revealRefs.current[0] = el)}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-400">contact@elite8digital.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-400">+91 6260894977</p>
                    <p className="text-gray-400">+91 7303125674</p>
                  </div>
                </div>
                
                {/* location item if needed  */}
                
                {/* <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-gray-400">123 Design Street, Creative District</p>
                  </div>
                </div> */}
              </div>
              
            <div className="mt-12">
  <h3 className="text-lg font-medium mb-4 text-white">Follow Us</h3>
  <div className="flex space-x-4">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/elite8digital/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
      className="group w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center hover:bg-[#E4405F]/20 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        style={{
          fill: "#FFFFFF",
          opacity: 1,
          filter: "brightness(200%) contrast(200%)",
          isolation: "isolate",
        }}
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.307 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.975-2.242 1.245-3.608 1.307-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.975-.975-1.245-2.242-1.307-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.307-3.608.975-.975 2.242-1.245 3.608-1.307C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.155 0-3.507.012-4.737.069-1.032.047-1.59.218-1.957.363a3.902 3.902 0 00-1.417.924 3.902 3.902 0 00-.924 1.417c-.145.367-.316.925-.363 1.957-.057 1.23-.069 1.582-.069 4.737s.012 3.507.069 4.737c.047 1.032.218 1.59.363 1.957.22.554.507.996.924 1.417.421.417.863.704 1.417.924.367.145.925.316 1.957.363 1.23.057 1.582.069 4.737.069s3.507-.012 4.737-.069c1.032-.047 1.59-.218 1.957-.363a3.902 3.902 0 001.417-.924 3.902 3.902 0 00.924-1.417c.145-.367.316-.925.363-1.957.057-1.23.069-1.582.069-4.737s-.012-3.507-.069-4.737c-.047-1.032-.218-1.59-.363-1.957a3.902 3.902 0 00-.924-1.417 3.902 3.902 0 00-1.417-.924c-.367-.145-.925-.316-1.957-.363-1.23-.057-1.582-.069-4.737-.069zm0 3.905a5.932 5.932 0 110 11.865 5.932 5.932 0 010-11.865zm0 9.8a3.868 3.868 0 100-7.735 3.868 3.868 0 000 7.735zm5.941-10.864a1.386 1.386 0 110 2.772 1.386 1.386 0 010-2.772z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/elite8-digital/about/"
      target="_blank"
      rel="noopener noreferrer"
      className="group w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center hover:bg-[#0A66C2]/20 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        style={{
          fill: "#FFFFFF",
          opacity: 1,
          filter: "brightness(200%) contrast(200%)",
          isolation: "isolate",
        }}
      >
        <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.025-3.038-1.852-3.038-1.854 0-2.138 1.445-2.138 2.94v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.601 0 4.269 2.37 4.269 5.451v6.292zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zm1.778 13.019H3.56V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    </a>
  </div>
</div>

            </div>
            
            <div 
              className="reveal" 
              ref={(el) => (revealRefs.current[1] = el)}
            >
              <ThunderBorder color="#8a2be2" thickness={2} speed={15} className="rounded-lg overflow-hidden">
                <form onSubmit={handleSubmit} className="p-8 rounded-lg border border-white/10 bg-secondary/50 backdrop-blur-sm relative z-10">
                  {submitSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-400">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="How can we help you?"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Tell us about your project..."
                            required
                          ></textarea>
                        </div>
                        
                        <div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn btn-primary btn-lg flex items-center justify-center"
                          >
                            {isSubmitting ? (
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            ) : null}
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </form>
              </ThunderBorder>
            </div>
          </div>
        </div>
      </section>

      {/* address card if needed  */}

      {/* <section className="py-24 bg-secondary">
        <div className="container px-4 mx-auto">
          <div 
            className="reveal rounded-lg overflow-hidden h-[400px] bg-black/50" 
            ref={(el) => (revealRefs.current[2] = el)}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-emerald-500/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-400">123 Design Street, Creative District</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </MainLayout>
  );
};

export default Contact;

