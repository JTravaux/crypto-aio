import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 backdrop-blur-sm bg-black/20 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CryptoAIO
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#privacy" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Privacy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-gray-300 text-sm font-medium">Anonymous • Encrypted • Secure</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              ALL-IN-ONE
            </span>
            <span className="block text-white mt-4">
              CRYPTO
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ml-4">
                SERVICES
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-cyan-400 font-semibold">Privacy-first</span> solutions for the decentralized future. 
            From <span className="text-purple-400 font-semibold">whitepapers</span> to <span className="text-pink-400 font-semibold">smart contracts</span>, 
            we deliver comprehensive crypto services with <span className="text-green-400 font-semibold">absolute discretion</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 relative overflow-hidden">
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button className="px-10 py-5 border-2 border-gray-600 text-gray-300 font-bold rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 backdrop-blur-sm bg-gray-800/20">
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">100+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Anonymous Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-pink-400 mb-2">0%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Data Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">256-bit</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Encryption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 py-32 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive crypto solutions delivered with military-grade privacy and professional excellence
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Writing Services */}
            <div className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">Content Creation</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">Professional whitepapers, announcements, and social media content crafted for the crypto space with technical precision.</p>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Technical Whitepapers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Marketing Content
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Social Media Strategy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Community Management
                  </li>
                </ul>
              </div>
            </div>

            {/* Development Services */}
            <div className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors duration-300">Smart Contracts</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">Secure, audited smart contracts and decentralized applications built to your exact specifications with enterprise-grade security.</p>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Smart Contract Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    DApp Architecture
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Security Audits
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Protocol Design
                  </li>
                </ul>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-green-400 transition-colors duration-300">Privacy Solutions</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">End-to-end encrypted communications and privacy-preserving technologies for your most sensitive crypto projects.</p>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Zero-Knowledge Proofs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Private Transactions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Encrypted Communications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Anonymous Consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              PRIVACY FIRST
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Your privacy is our <span className="text-green-400 font-semibold">absolute priority</span>. All communications are encrypted, 
            projects are handled with complete discretion, and we <span className="text-cyan-400 font-semibold">never store sensitive information</span>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">End-to-End Encryption</h3>
              <p className="text-gray-400 text-lg leading-relaxed">All communications secured with military-grade encryption protocols</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Anonymous Consulting</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Work with us without revealing your identity or personal information</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Zero Data Retention</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Your project data is never stored, logged, or retained on our systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-32 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                REQUEST ANONYMOUS QUOTE
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get a <span className="text-cyan-400 font-semibold">confidential quote</span> for your crypto project. 
              <span className="text-green-400 font-semibold">No personal information required</span>.
            </p>
            
            {/* Privacy Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="group flex items-center justify-center space-x-3 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <svg className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-300 font-semibold text-lg">No Identity Required</span>
              </div>
              <div className="group flex items-center justify-center space-x-3 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <svg className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-gray-300 font-semibold text-lg">Encrypted Submission</span>
              </div>
              <div className="group flex items-center justify-center space-x-3 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <svg className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="text-gray-300 font-semibold text-lg">Auto-Delete After 24h</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-10 shadow-2xl">
            <form className="space-y-8">
              {/* Service Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-300 mb-6">
                  Service Required *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="group flex items-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                    <input type="checkbox" className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2" />
                    <span className="ml-4 text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">Content Writing (Whitepapers, Announcements)</span>
                  </label>
                  <label className="group flex items-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:border-purple-500/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                    <input type="checkbox" className="w-5 h-5 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2" />
                    <span className="ml-4 text-gray-300 font-medium group-hover:text-purple-400 transition-colors duration-300">Smart Contract Development</span>
                  </label>
                  <label className="group flex items-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:border-green-500/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                    <input type="checkbox" className="w-5 h-5 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2" />
                    <span className="ml-4 text-gray-300 font-medium group-hover:text-green-400 transition-colors duration-300">DApp Development</span>
                  </label>
                  <label className="group flex items-center p-6 bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:border-pink-500/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
                    <input type="checkbox" className="w-5 h-5 text-pink-500 bg-gray-700 border-gray-600 rounded focus:ring-pink-500 focus:ring-2" />
                    <span className="ml-4 text-gray-300 font-medium group-hover:text-pink-400 transition-colors duration-300">Social Media &amp; Marketing</span>
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
