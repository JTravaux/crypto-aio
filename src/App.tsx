import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CryptoAIO
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          </div>
          
          <h1 className="relative text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              All-in-One
            </span>
            <br />
            <span className="text-white">Crypto Services</span>
          </h1>
          
          <p className="relative text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Privacy-first solutions for the decentralized future. From whitepapers to smart contracts, 
            we deliver comprehensive crypto services with absolute discretion.
          </p>
          
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Writing Services */}
            <div className="group p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Content Creation</h3>
              <p className="text-gray-300 mb-6">Professional whitepapers, announcements, and social media content crafted for the crypto space.</p>
              <ul className="text-gray-400 space-y-2">
                <li>• Technical Whitepapers</li>
                <li>• Marketing Content</li>
                <li>• Social Media Strategy</li>
                <li>• Community Management</li>
              </ul>
            </div>

            {/* Development Services */}
            <div className="group p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Contracts</h3>
              <p className="text-gray-300 mb-6">Secure, audited smart contracts and decentralized applications built to your specifications.</p>
              <ul className="text-gray-400 space-y-2">
                <li>• Smart Contract Development</li>
                <li>• DApp Architecture</li>
                <li>• Security Audits</li>
                <li>• Protocol Design</li>
              </ul>
            </div>

            {/* Privacy & Security */}
            <div className="group p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Privacy Solutions</h3>
              <p className="text-gray-300 mb-6">End-to-end encrypted communications and privacy-preserving technologies for your crypto projects.</p>
              <ul className="text-gray-400 space-y-2">
                <li>• Zero-Knowledge Proofs</li>
                <li>• Private Transactions</li>
                <li>• Encrypted Communications</li>
                <li>• Anonymous Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Privacy First
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Your privacy is our priority. All communications are encrypted, projects are handled with complete discretion, 
            and we never store sensitive information.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">End-to-End Encryption</h3>
              <p className="text-gray-400">All communications secured with military-grade encryption</p>
            </div>
            
            <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Anonymous Consulting</h3>
              <p className="text-gray-400">Work with us without revealing your identity</p>
            </div>
            
            <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zero Data Retention</h3>
              <p className="text-gray-400">Your project data is never stored or logged</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Request Anonymous Quote
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a confidential quote for your crypto project. No personal information required.
            </p>
            
            {/* Privacy Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-300 font-medium">No Identity Required</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-gray-300 font-medium">Encrypted Submission</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="text-gray-300 font-medium">Auto-Delete After 24h</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
            <form className="space-y-6">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Service Required *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-cyan-500/50 cursor-pointer transition-all">
                    <input type="checkbox" className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2" />
                    <span className="ml-3 text-gray-300">Content Writing (Whitepapers, Announcements)</span>
                  </label>
                  <label className="flex items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-purple-500/50 cursor-pointer transition-all">
                    <input type="checkbox" className="w-4 h-4 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2" />
                    <span className="ml-3 text-gray-300">Smart Contract Development</span>
                  </label>
                  <label className="flex items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-green-500/50 cursor-pointer transition-all">
                    <input type="checkbox" className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2" />
                    <span className="ml-3 text-gray-300">DApp Development</span>
                  </label>
                  <label className="flex items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-pink-500/50 cursor-pointer transition-all">
                    <input type="checkbox" className="w-4 h-4 text-pink-500 bg-gray-700 border-gray-600 rounded focus:ring-pink-500 focus:ring-2" />
                    <span className="ml-3 text-gray-300">Social Media & Marketing</span>
                  </label>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="project-description" className="block text-sm font-medium text-gray-300 mb-3">
                  Project Description *
                </label>
                <textarea
                  id="project-description"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Describe your project requirements, timeline, and any specific needs. Be as detailed as possible to receive an accurate quote."
                ></textarea>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-3">
                  Estimated Budget Range
                </label>
                <select
                  id="budget"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select budget range (optional)</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                  <option value="discuss">Prefer to discuss</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-3">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select timeline (optional)</option>
                  <option value="urgent">Urgent (1-2 weeks)</option>
                  <option value="fast">Fast (2-4 weeks)</option>
                  <option value="standard">Standard (1-2 months)</option>
                  <option value="flexible">Flexible (2+ months)</option>
                </select>
              </div>

              {/* Anonymous Contact Method */}
              <div>
                <label htmlFor="contact-method" className="block text-sm font-medium text-gray-300 mb-3">
                  Preferred Anonymous Contact Method *
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="radio" name="contact" value="telegram" className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 focus:ring-cyan-500 focus:ring-2" />
                    <span className="ml-3 text-gray-300">Telegram (provide username)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="contact" value="signal" className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 focus:ring-cyan-500 focus:ring-2" />
                    <span className="ml-3 text-gray-300">Signal (provide number)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="contact" value="protonmail" className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 focus:ring-cyan-500 focus:ring-2" />
                    <span className="ml-3 text-gray-300">ProtonMail (provide email)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="contact" value="discord" className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 focus:ring-cyan-500 focus:ring-2" />
                    <span className="ml-3 text-gray-300">Discord (provide username)</span>
                  </label>
                </div>
                <input
                  type="text"
                  className="w-full mt-3 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your contact details (username/email/number)"
                />
              </div>

              {/* Privacy Notice */}
              <div className="bg-gray-700/30 border border-gray-600 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Privacy Guarantee</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Your submission is encrypted end-to-end and automatically deleted after 24 hours. 
                      We never store personal information, IP addresses, or metadata. All project discussions 
                      happen through your chosen anonymous channel with military-grade encryption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Submit Anonymous Quote Request
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  Response within 2-4 hours • All communications encrypted
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            CryptoAIO
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 CryptoAIO. Privacy-first crypto services. All communications encrypted.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
