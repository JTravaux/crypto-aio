import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem
} from '@heroui/react';
import './App.css';
import ContactForm from './ContactForm';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#process", label: "Process" },
    { href: "#privacy", label: "Privacy" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

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
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CryptoAIO
            </div>
          </div>
        </NavbarBrand>
        
        <NavbarContent className="hidden md:flex gap-4 lg:gap-8" justify="end">
          {menuItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-sm lg:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />

        <NavbarMenu className="bg-black/95 backdrop-blur-md border-b border-gray-800/50">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <Link
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-lg py-3 block"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2 sm:mr-3"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">Anonymous • Encrypted • Secure</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight px-4">
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              ALL-IN-ONE
            </span>
            <span className="block text-white mt-2 sm:mt-4">
              CRYPTO
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ml-2 sm:ml-4">
                SERVICES
              </span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            <span className="text-cyan-400 font-semibold">Privacy-first</span> solutions for the decentralized future.
            From <span className="text-purple-400 font-semibold">whitepapers</span> to <span className="text-pink-400 font-semibold">smart contracts</span>,
            we deliver comprehensive crypto services with <span className="text-green-400 font-semibold">absolute discretion</span>.
          </p>

          {/* Hero Section Buttons */}
          <div className="flex justify-center my-8 sm:my-10 px-4">
            <a
              href="#request-quote"
              className="inline-block w-full sm:w-64 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 text-center"
            >
              Get Started Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400 mb-1 sm:mb-2">25+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">End-to-end Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-purple-400 mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Anonymous Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-pink-400 mb-1 sm:mb-2">0%</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Data Retention</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-green-400 mb-1 sm:mb-2">256-bit</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Encryption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              We deliver professional crypto solutions with high-quality security and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Writing Services */}
            <Card className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/70 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/25 p-6 sm:p-8">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6 pb-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Content Solutions</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">Professional whitepapers, announcements, and social media content crafted for the crypto space with technical precision.</p>
                <ul className="text-gray-400 space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 sm:mr-3"></div>
                    Technical Whitepapers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 sm:mr-3"></div>
                    Marketing Content
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 sm:mr-3"></div>
                    Social Media Strategy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 sm:mr-3"></div>
                    Community Management
                  </li>
                </ul>
              </CardBody>
            </Card>

            {/* Development Services */}
            <Card className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/70 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 p-6 sm:p-8">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6 pb-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Development Solutions</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">Full-stack decentralized applications with cutting-edge Web3 integration, smart contract backends, and seamless user experiences built for the future of finance.</p>
                <ul className="text-gray-400 space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3"></div>
                    Full-Stack dApp Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3"></div>
                    Web3 Frontend Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3"></div>
                    Smart Contract Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3"></div>
                    DeFi Protocol Architecture
                  </li>
                </ul>
              </CardBody>
            </Card>

            {/* Privacy & Security */}
            <Card className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/70 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/25 p-6 sm:p-8">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6 pb-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Privacy Solutions</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">End-to-end encrypted communications and privacy-preserving technologies for your most sensitive crypto projects.</p>
                <ul className="text-gray-400 space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3"></div>
                    Zero-Knowledge Proofs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3"></div>
                    Private Transactions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3"></div>
                    Encrypted Communications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3"></div>
                    Anonymous Consulting
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                WHY CHOOSE US
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              We are trusted by crypto projects and startups for our expertise, discretion, and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-400 text-base sm:text-lg">Over 25 full crypto projects shipped — and plenty more supported with content, consulting, or partial builds.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lightning Fast Delivery</h3>
                  <p className="text-gray-400 text-base sm:text-lg">Average project completion 40% faster than industry standard</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Uncompromising Security</h3>
                  <p className="text-gray-400 text-base sm:text-lg">Strong security track record with AES-256 encryption and industry-standard protocols</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="text-center p-4 sm:p-8">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-green-400 mb-1 sm:mb-2">1,200+</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Hours Saved for Clients</div>
                </CardBody>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="text-center p-4 sm:p-8">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-purple-400 mb-1 sm:mb-2">$50M+</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">TVL Across Projects</div>
                </CardBody>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="text-center p-4 sm:p-8">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400 mb-1 sm:mb-2">24/7</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Global Support</div>
                </CardBody>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="text-center p-4 sm:p-8">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-pink-400 mb-1 sm:mb-2">7+</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Years of Experience</div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                OUR PROCESS
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              A streamlined, secure workflow designed for maximum privacy and efficiency
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500"></div>
              
              <div className="relative flex items-start mb-8 sm:mb-12">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center z-10">
                  <span className="text-lg sm:text-2xl font-black text-white">1</span>
                </div>
                <div className="ml-4 sm:ml-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Anonymous Contact</h3>
                  <p className="text-gray-400 text-base sm:text-lg">Reach out through your preferred encrypted channel. No personal information required.</p>
                </div>
              </div>
              
              <div className="relative flex items-start mb-8 sm:mb-12">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center z-10">
                  <span className="text-lg sm:text-2xl font-black text-white">2</span>
                </div>
                <div className="ml-4 sm:ml-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Secure Consultation</h3>
                  <p className="text-gray-400 text-base sm:text-lg">Discuss your project requirements through end-to-end encrypted communications.</p>
                </div>
              </div>
              
              <div className="relative flex items-start mb-8 sm:mb-12">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center z-10">
                  <span className="text-lg sm:text-2xl font-black text-white">3</span>
                </div>
                <div className="ml-4 sm:ml-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Development & Delivery</h3>
                  <p className="text-gray-400 text-base sm:text-lg">Expert execution with regular encrypted updates and milestone deliveries.</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center z-10">
                  <span className="text-lg sm:text-2xl font-black text-white">4</span>
                </div>
                <div className="ml-4 sm:ml-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Secure Handoff</h3>
                  <p className="text-gray-400 text-base sm:text-lg">Complete project delivery with documentation. All traces automatically purged.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              PRIVACY FIRST
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
            Your privacy is our <span className="text-green-400 font-semibold">absolute priority</span>. All communications are encrypted,
            projects are handled with complete discretion, and we <span className="text-cyan-400 font-semibold">never store sensitive information</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <CardBody className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-green-400 transition-colors duration-300">End-to-End Encryption</h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">All communications secured with AES-256 encryption and RSA-4096 key exchange</p>
              </CardBody>
            </Card>

            <Card className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardBody className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-400 transition-colors duration-300">Anonymous Consulting</h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">Work with us without revealing your identity or personal information</p>
              </CardBody>
            </Card>

            <Card className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <CardBody className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">Zero Data Retention</h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">Your project data is never stored, logged, or retained on our systems</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                SECURITY & COMPLIANCE
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Professional security protocols and compliance standards for crypto projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">Security-First Architecture</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Industry-standard security controls and best practices</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">Zero-Knowledge Architecture</h3>
                      <p className="text-gray-400 text-sm sm:text-base">We never see your sensitive data</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <CardBody className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">Multi-Sig Escrow</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Secure payment handling with smart contracts</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center">
                  <div className="w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Enterprise Security</h3>
              <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto px-4">
                Your projects are protected by comprehensive security measures including encryption, secure key management, and access controls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 px-4">
              Everything you need to know about our crypto services
            </p>
          </div>

          <Accordion variant="splitted" className="space-y-3 sm:space-y-4">
            <AccordionItem
              key="payment-methods"
              aria-label="Payment Methods"
              title="What payment methods do you accept?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl"
            >
              <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>We accept multiple cryptocurrency payment methods for maximum privacy and convenience:</p>
                <ul className="space-y-3 sm:space-y-4 ml-0 sm:ml-4">
                  <li className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <strong className="text-cyan-400">Ethereum Network:</strong>
                    </div>
                    <span className="ml-4 sm:ml-2 text-gray-300">ETH, USDC, USDT, DAI (stablecoins preferred)</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <strong className="text-orange-400">Bitcoin Network:</strong>
                    </div>
                    <span className="ml-4 sm:ml-2 text-gray-300">BTC (native Bitcoin transactions)</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <strong className="text-purple-400">Monero Network:</strong>
                    </div>
                    <span className="ml-4 sm:ml-2 text-gray-300">XMR (for maximum privacy)</span>
                  </li>
                </ul>
                <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 pt-3 border-t border-gray-700/50">
                  All payments are processed through secure multi-signature wallets with escrow protection.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="privacy-guarantee"
              aria-label="Privacy Guarantee"
              title="How do you guarantee my privacy?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl"
            >
              <div className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p>Privacy is our core principle. We implement multiple layers of protection:</p>
                <ul className="space-y-1 sm:space-y-2 ml-4">
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
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl"
            >
              <div className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p>Project timelines vary based on complexity and scope:</p>
                <ul className="space-y-1 sm:space-y-2 ml-4">
                  <li>• <strong>Content Creation:</strong> 1-2 weeks</li>
                  <li>• <strong>Smart Contract Development:</strong> 4-8 weeks</li>
                  <li>• <strong>Full DApp Development:</strong> 8-16 weeks</li>
                  <li>• <strong>Security Audits:</strong> 2-4 weeks</li>
                  <li>• <strong>Whitepaper Writing:</strong> 2-4 weeks</li>
                </ul>
                <p className="text-xs sm:text-sm text-gray-400">
                  Rush delivery available for urgent projects (additional fees apply).
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="pricing-structure"
              aria-label="Pricing Structure"
              title="How is pricing determined?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl"
            >
              <div className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p>Our pricing is transparent and based on project complexity:</p>
                <ul className="space-y-1 sm:space-y-2 ml-4">
                  <li>• Fixed-price quotes for defined scope projects</li>
                  <li>• Hourly rates for consulting and ongoing work</li>
                  <li>• Milestone-based payments with escrow protection</li>
                  <li>• No hidden fees or surprise charges</li>
                  <li>• Volume discounts for multiple projects</li>
                </ul>
                <p className="text-xs sm:text-sm text-gray-400">
                  Contact us for a free, anonymous quote tailored to your specific needs.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="technical-expertise"
              aria-label="Technical Expertise"
              title="What blockchain technologies do you work with?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl"
            >
              <div className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p>We have deep expertise across major blockchain ecosystems:</p>
                <ul className="space-y-1 sm:space-y-2 ml-4">
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
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl"
            >
              <div className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p>We offer multiple secure communication options:</p>
                <ul className="space-y-1 sm:space-y-2 ml-4">
                  <li>• Encrypted email with PGP keys</li>
                  <li>• Signal messenger for real-time chat</li>
                  <li>• Telegram with disappearing messages</li>
                  <li>• Custom secure portals for file sharing</li>
                  <li>• Anonymous video calls via Jitsi Meet</li>
                  <li>• Tor-based communication for maximum privacy</li>
                </ul>
                <p className="text-xs sm:text-sm text-gray-400">
                  You choose your preferred method during initial contact.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              key="quality-assurance"
              aria-label="Quality Assurance"
              title="What quality assurance do you provide?"
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl"
            >
              <div className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p>Every project undergoes rigorous quality control:</p>
                <ul className="space-y-1 sm:space-y-2 ml-4">
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
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                CLIENT SUCCESS
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Trusted by DeFi protocols and crypto innovators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white font-bold text-base sm:text-lg">A</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Anonymous DeFi Founder</div>
                    <div className="text-gray-400 text-xs sm:text-sm">DeFi Protocol</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">"Excellent work on our DEX smart contracts. The team delivered secure, well-tested code with thorough documentation. Our protocol has been running smoothly since deployment."</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white font-bold text-base sm:text-lg">B</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Crypto Startup CEO</div>
                    <div className="text-gray-400 text-xs sm:text-sm">NFT Marketplace</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">"Outstanding dApp development and technical writing. They built our NFT marketplace from scratch and created professional documentation that helped with our funding process. Highly recommended!"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white font-bold text-base sm:text-lg">C</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Privacy Advocate</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Anonymous DAO</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">"Perfect privacy-focused development. They understood our need for complete anonymity and delivered a governance system with zero-knowledge proofs. Communication was seamless through encrypted channels."</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
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
      <section id="contact" className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 id="request-quote" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                REQUEST ANONYMOUS QUOTE
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Get a <span className="text-cyan-400 font-semibold">confidential quote</span> for your crypto project.&nbsp;
              <span className="text-green-400 font-semibold">No personal information required</span>.
            </p>

            {/* Privacy Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              <div className="group flex items-center justify-center space-x-2 sm:space-x-3 p-4 sm:p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-300 font-semibold text-sm sm:text-lg">No Identity Required</span>
              </div>
              <div className="group flex items-center justify-center space-x-2 sm:space-x-3 p-4 sm:p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-gray-300 font-semibold text-sm sm:text-lg">Encrypted Submission</span>
              </div>
              <div className="group flex items-center justify-center space-x-2 sm:space-x-3 p-4 sm:p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="text-gray-300 font-semibold text-sm sm:text-lg">Auto-Delete After 24h</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-700/50 p-6 sm:p-8 md:p-10 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-6 sm:py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3 sm:mb-4">
            CryptoAIO
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 CryptoAIO. Privacy-first crypto services. All communications encrypted.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
