import './App.css'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Card,
  CardHeader,
  CardBody,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  RadioGroup,
  Radio,
  Accordion,
  AccordionItem
} from '@heroui/react'

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden dark">
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
      <Navbar
        className="relative z-50 backdrop-blur-sm bg-black/20 border-b border-gray-800/50"
        maxWidth="full"
        height="5rem"
      >
        <NavbarBrand>
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
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-8" justify="end">
          <NavbarItem>
            <Link
              href="#services"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#why-choose-us"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Why Choose Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#process"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Process
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#privacy"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Privacy
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#faq"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              FAQ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

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
            <Button
              size="lg"
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
              radius="lg"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="px-10 py-5 border-2 border-gray-600 text-gray-300 font-bold hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 backdrop-blur-sm bg-gray-800/20"
              radius="lg"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">50+</div>
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
50              Professional crypto solutions delivered with high-quality security and technical excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Writing Services */}
            <Card className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <CardHeader className="pb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Content Creation</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">Professional whitepapers, announcements, and social media content crafted for the crypto space with technical precision.</p>
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
              </CardBody>
            </Card>

            {/* Development Services */}
            <Card className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardHeader className="pb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Smart Contracts & dApp Development</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">Full-stack decentralized applications with cutting-edge Web3 integration, smart contract backends, and seamless user experiences built for the future of finance.</p>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Full-Stack dApp Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Web3 Frontend Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Smart Contract Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    DeFi Protocol Architecture
                  </li>
                </ul>
              </CardBody>
            </Card>

            {/* Privacy & Security */}
            <Card className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <CardHeader className="pb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Privacy Solutions</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">End-to-end encrypted communications and privacy-preserving technologies for your most sensitive crypto projects.</p>
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
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                WHY CHOOSE US
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by crypto projects and startups for our expertise, discretion, and results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-400 text-lg">Successfully delivered 50+ crypto projects with high client satisfaction</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast Delivery</h3>
                  <p className="text-gray-400 text-lg">Average project completion 40% faster than industry standard</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Uncompromising Security</h3>
                  <p className="text-gray-400 text-lg">Strong security track record with AES-256 encryption and industry-standard protocols</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="text-center p-8">
                  <div className="text-4xl font-black text-green-400 mb-2">$500K+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Total Value Secured</div>
                </CardBody>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="text-center p-8">
                  <div className="text-4xl font-black text-purple-400 mb-2">25+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Satisfied Clients</div>
                </CardBody>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="text-center p-8">
                  <div className="text-4xl font-black text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Global Support</div>
                </CardBody>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="text-center p-8">
                  <div className="text-4xl font-black text-pink-400 mb-2">5+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="relative z-10 px-6 py-32 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                OUR PROCESS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A streamlined, secure workflow designed for maximum privacy and efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader className="pb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
              </CardHeader>
              <CardBody>
                <h3 className="text-2xl font-bold text-white mb-4">Anonymous Contact</h3>
                <p className="text-gray-400">Reach out through your preferred encrypted channel. No personal information required.</p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader className="pb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
              </CardHeader>
              <CardBody>
                <h3 className="text-2xl font-bold text-white mb-4">Secure Consultation</h3>
                <p className="text-gray-400">Discuss your project requirements through end-to-end encrypted communications.</p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
              <CardHeader className="pb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
              </CardHeader>
              <CardBody>
                <h3 className="text-2xl font-bold text-white mb-4">Development & Delivery</h3>
                <p className="text-gray-400">Expert execution with regular encrypted updates and milestone deliveries.</p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300">
              <CardHeader className="pb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
              </CardHeader>
              <CardBody>
                <h3 className="text-2xl font-bold text-white mb-4">Secure Handoff</h3>
                <p className="text-gray-400">Complete project delivery with documentation. All traces automatically purged.</p>
              </CardBody>
            </Card>
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
            <Card className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <CardBody className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">End-to-End Encryption</h3>
                <p className="text-gray-400 text-lg leading-relaxed">All communications secured with AES-256 encryption and RSA-4096 key exchange</p>
              </CardBody>
            </Card>

            <Card className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardBody className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Anonymous Consulting</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Work with us without revealing your identity or personal information</p>
              </CardBody>
            </Card>

            <Card className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <CardBody className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Zero Data Retention</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Your project data is never stored, logged, or retained on our systems</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="relative z-10 px-6 py-32 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                SECURITY & COMPLIANCE
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional security protocols and compliance standards for crypto projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Security-First Architecture</h3>
                      <p className="text-gray-400">Industry-standard security controls and best practices</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Zero-Knowledge Architecture</h3>
                      <p className="text-gray-400">We never see your sensitive data</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Multi-Sig Escrow</h3>
                      <p className="text-gray-400">Secure payment handling with smart contracts</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                Your projects are protected by comprehensive security measures including encryption, secure key management, and access controls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about our crypto services
            </p>
          </div>

          <Accordion variant="splitted" className="space-y-4">
            <AccordionItem
              key="payment-methods"
              aria-label="Payment Methods"
              title="What payment methods do you accept?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl"
            >
              <div className="text-gray-300 space-y-4">
                <p>We accept multiple cryptocurrency payment methods for maximum privacy and convenience:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <strong>Ethereum Network:</strong> ETH, USDC, USDT, DAI (stablecoins preferred)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <strong>Bitcoin Network:</strong> BTC (native Bitcoin transactions)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <strong>Monero Network:</strong> XMR (for maximum privacy)
                  </li>
                </ul>
                <p className="text-sm text-gray-400 mt-4">
                  All payments are processed through secure multi-signature wallets with escrow protection.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="privacy-guarantee"
              aria-label="Privacy Guarantee"
              title="How do you guarantee my privacy?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl"
            >
              <div className="text-gray-300 space-y-3">
                <p>Privacy is our core principle. We implement multiple layers of protection:</p>
                <ul className="space-y-2 ml-4">
                  <li>• End-to-end encryption for all communications</li>
                  <li>• No personal information collection or storage</li>
                  <li>• Anonymous project handling with code names</li>
                  <li>• Automatic data purging after project completion</li>
                  <li>• Tor-compatible communication channels</li>
                  <li>• Zero-knowledge architecture</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem
              key="project-timeline"
              aria-label="Project Timeline"
              title="What are typical project timelines?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl"
            >
              <div className="text-gray-300 space-y-3">
                <p>Project timelines vary based on complexity and scope:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Content Creation:</strong> 1-2 weeks</li>
                  <li>• <strong>Smart Contract Development:</strong> 4-8 weeks</li>
                  <li>• <strong>Full DApp Development:</strong> 8-16 weeks</li>
                  <li>• <strong>Security Audits:</strong> 2-4 weeks</li>
                  <li>• <strong>Whitepaper Writing:</strong> 2-4 weeks</li>
                </ul>
                <p className="text-sm text-gray-400">
                  Rush delivery available for urgent projects (additional fees apply).
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="pricing-structure"
              aria-label="Pricing Structure"
              title="How is pricing determined?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl"
            >
              <div className="text-gray-300 space-y-3">
                <p>Our pricing is transparent and based on project complexity:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Fixed-price quotes for defined scope projects</li>
                  <li>• Hourly rates for consulting and ongoing work</li>
                  <li>• Milestone-based payments with escrow protection</li>
                  <li>• No hidden fees or surprise charges</li>
                  <li>• Volume discounts for multiple projects</li>
                </ul>
                <p className="text-sm text-gray-400">
                  Contact us for a free, anonymous quote tailored to your specific needs.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="technical-expertise"
              aria-label="Technical Expertise"
              title="What blockchain technologies do you work with?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl"
            >
              <div className="text-gray-300 space-y-3">
                <p>We have deep expertise across major blockchain ecosystems:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Ethereum:</strong> Solidity, Web3.js, Hardhat, OpenZeppelin</li>
                  <li>• <strong>Bitcoin:</strong> Script, Lightning Network, Taproot</li>
                  <li>• <strong>Layer 2:</strong> Polygon, Arbitrum, Optimism, Base</li>
                  <li>• <strong>Alternative Chains:</strong> Binance Smart Chain, Avalanche, Solana</li>
                  <li>• <strong>Privacy Coins:</strong> Monero, Zcash integration</li>
                  <li>• <strong>DeFi Protocols:</strong> Uniswap, Aave, Compound, Curve</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem
              key="communication-channels"
              aria-label="Communication Channels"
              title="How do we communicate during the project?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl"
            >
              <div className="text-gray-300 space-y-3">
                <p>We offer multiple secure communication options:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Encrypted email with PGP keys</li>
                  <li>• Signal messenger for real-time chat</li>
                  <li>• Telegram with disappearing messages</li>
                  <li>• Custom secure portals for file sharing</li>
                  <li>• Anonymous video calls via Jitsi Meet</li>
                  <li>• Tor-based communication for maximum privacy</li>
                </ul>
                <p className="text-sm text-gray-400">
                  You choose your preferred method during initial contact.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="quality-assurance"
              aria-label="Quality Assurance"
              title="What quality assurance do you provide?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl"
            >
              <div className="text-gray-300 space-y-3">
                <p>Every project undergoes rigorous quality control:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Comprehensive testing on testnets before mainnet</li>
                  <li>• Code reviews by senior developers</li>
                  <li>• Security audits for smart contracts</li>
                  <li>• Gas optimization and efficiency testing</li>
                  <li>• Documentation and deployment guides</li>
                  <li>• 30-day post-delivery support included</li>
                </ul>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="relative z-10 px-6 py-32 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                CLIENT SUCCESS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by DeFi protocols and crypto innovators
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Anonymous DeFi Founder</div>
                    <div className="text-gray-400 text-sm">DeFi Protocol</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">"Excellent work on our DEX smart contracts. The team delivered secure, well-tested code with thorough documentation. Our protocol has been running smoothly since deployment."</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Crypto Startup CEO</div>
                    <div className="text-gray-400 text-sm">NFT Marketplace</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">"Outstanding dApp development and technical writing. They built our NFT marketplace from scratch and created professional documentation that helped with our funding process. Highly recommended!"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Privacy Advocate</div>
                    <div className="text-gray-400 text-sm">Anonymous DAO</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">"Perfect privacy-focused development. They understood our need for complete anonymity and delivered a governance system with zero-knowledge proofs. Communication was seamless through encrypted channels."</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
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
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="group bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20">
                    <CardBody className="p-6 flex items-center min-h-[80px]">
                      <Checkbox className="mr-4" color="primary" />
                      <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300 text-base">Content Writing (Whitepapers, Announcements)</span>
                    </CardBody>
                  </Card>
                  <Card className="group bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 hover:border-purple-500/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                    <CardBody className="p-6 flex items-center min-h-[80px]">
                      <Checkbox className="mr-4" color="secondary" />
                      <span className="text-gray-300 font-medium group-hover:text-purple-400 transition-colors duration-300 text-base">Smart Contract Development</span>
                    </CardBody>
                  </Card>
                  <Card className="group bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 hover:border-green-500/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20">
                    <CardBody className="p-6 flex items-center min-h-[80px]">
                      <Checkbox className="mr-4" color="success" />
                      <span className="text-gray-300 font-medium group-hover:text-green-400 transition-colors duration-300 text-base">DApp Development</span>
                    </CardBody>
                  </Card>
                  <Card className="group bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/50 hover:border-pink-500/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20">
                    <CardBody className="p-6 flex items-center min-h-[80px]">
                      <Checkbox className="mr-4" color="warning" />
                      <span className="text-gray-300 font-medium group-hover:text-pink-400 transition-colors duration-300 text-base">Social Media & Marketing</span>
                    </CardBody>
                  </Card>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-lg font-semibold text-gray-300 mb-4">
                  Project Description *
                </label>
                <Textarea
                  placeholder="Describe your project requirements, timeline, and any specific needs. Be as detailed as possible to receive an accurate quote."
                  rows={5}
                  className="w-full"
                  classNames={{
                    input: "bg-gray-700/50 border border-gray-600 text-gray-300 text-base leading-relaxed",
                    inputWrapper: "bg-gray-700/50 border border-gray-600 hover:border-cyan-500 focus-within:border-cyan-500 min-h-[140px] transition-colors duration-300"
                  }}
                />
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-lg font-semibold text-gray-300 mb-4">
                  Estimated Budget Range
                </label>
                <Select
                  placeholder="Select budget range (optional)"
                  className="w-full"
                  classNames={{
                    trigger: "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50 min-h-[48px] transition-colors duration-300",
                    label: "text-gray-300 font-medium",
                    value: "text-gray-300",
                    popoverContent: "bg-gray-800 border-gray-600",
                  }}
                >
                  <SelectItem key="under-2k" className="text-gray-300">Under $2,000</SelectItem>
                  <SelectItem key="2k-5k" className="text-gray-300">$2,000 - $5,000</SelectItem>
                  <SelectItem key="5k-15k" className="text-gray-300">$5,000 - $15,000</SelectItem>
                  <SelectItem key="15k-30k" className="text-gray-300">$15,000 - $30,000</SelectItem>
                  <SelectItem key="over-30k" className="text-gray-300">Over $30,000</SelectItem>
                  <SelectItem key="discuss" className="text-gray-300">Prefer to discuss</SelectItem>
                </Select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-lg font-semibold text-gray-300 mb-4">
                  Project Timeline
                </label>
                <Select
                  placeholder="Select timeline (optional)"
                  className="w-full"
                  classNames={{
                    trigger: "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50 min-h-[48px] transition-colors duration-300",
                    label: "text-gray-300 font-medium",
                    value: "text-gray-300",
                    popoverContent: "bg-gray-800 border-gray-600",
                  }}
                >
                  <SelectItem key="urgent" className="text-gray-300">Urgent (1-2 weeks)</SelectItem>
                  <SelectItem key="fast" className="text-gray-300">Fast (2-4 weeks)</SelectItem>
                  <SelectItem key="standard" className="text-gray-300">Standard (1-2 months)</SelectItem>
                  <SelectItem key="flexible" className="text-gray-300">Flexible (2+ months)</SelectItem>
                </Select>
              </div>

              {/* Anonymous Contact Method */}
              <div>
                <label className="block text-lg font-semibold text-gray-300 mb-4">
                  Preferred Anonymous Contact Method *
                </label>
                <RadioGroup className="space-y-4 mb-4">
                  <Radio value="telegram" className="text-gray-300">
                    Telegram (provide username)
                  </Radio>
                  <Radio value="signal" className="text-gray-300">
                    Signal (provide number)
                  </Radio>
                  <Radio value="protonmail" className="text-gray-300">
                    ProtonMail (provide email)
                  </Radio>
                  <Radio value="discord" className="text-gray-300">
                    Discord (provide username)
                  </Radio>
                </RadioGroup>
                <Textarea
                  placeholder="Enter your contact details (username/email/number)"
                  rows={2}
                  className="w-full"
                  classNames={{
                    input: "bg-gray-700/50 border border-gray-600 text-gray-300 text-base",
                    inputWrapper: "bg-gray-700/50 border border-gray-600 hover:border-cyan-500 focus-within:border-cyan-500 min-h-[60px] transition-colors duration-300"
                  }}
                />
              </div>

              {/* Privacy Notice */}
              <Card className="bg-gray-700/30 border border-gray-600">
                <CardBody className="p-6">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Privacy Guarantee</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Your submission is encrypted end-to-end and automatically deleted after 24 hours.
                        We never store personal information, IP addresses, or metadata. All project discussions
                        happen through your chosen anonymous channel with AES-256 encryption.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                  radius="lg"
                >
                  Submit Anonymous Quote Request
                </Button>
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
