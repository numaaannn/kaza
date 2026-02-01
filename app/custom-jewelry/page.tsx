"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"

export default function CustomJewelryPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background to-background/95">
            <div className="w-full h-full flex items-center justify-center p-6">
              <img src="/logo.png" alt="Numaans Silver Shop Emblem" className="object-contain w-48 h-48 md:w-64 md:h-64 opacity-95" loading="eager" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8 backdrop-blur-sm bg-black/30 rounded-xl max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Elite Custom Silver Jewelry
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                From Your Vision to Reality Through Advanced CAD/CAM Technology
              </p>
              <Link
                href="https://wa.me/8390963603"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Custom Design</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.05 22l4.16-1.84C7.81 21.33 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1.06 14.86c-1.11.26-2.26.14-3.31-.34-1.05-.48-1.91-1.34-2.39-2.39-.48-1.05-.6-2.2-.34-3.31.26-1.11.87-2.11 1.73-2.87 1.74-1.54 4.32-1.54 6.06 0 .86.76 1.47 1.76 1.73 2.87.26 1.11.14 2.26-.34 3.31-.48 1.05-1.34 1.91-2.39 2.39-.52.24-1.09.36-1.66.36-.13 0-.27-.01-.4-.02z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Process Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Cutting-Edge Creation Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Using state-of-the-art CAD/CAM technology, we transform your ideas into stunning sterling silver masterpieces. 
              From concept to creation, every piece is crafted with precision and attention to detail.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-muted/50 flex items-center justify-center p-6">
                  <img src="/logo.png" alt="Custom Silver Design Process" className="object-contain w-32 h-32" loading="eager" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">CAD Design</h3>
                    <p>Precise 3D modeling of your custom piece</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-muted/50 flex items-center justify-center p-6">
                  <img src="/logo.png" alt="CAM Production Process" className="object-contain w-32 h-32" loading="eager" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">CAM Production</h3>
                    <p>Advanced casting in premium sterling silver</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-muted/50 flex items-center justify-center p-6">
                  <img src="/logo.png" alt="Expert Finishing" className="object-contain w-32 h-32" loading="eager" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Expert Finishing</h3>
                    <p>Meticulous hand-finishing for perfect detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Designs */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Elite Custom Creations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "/logo.png",
                "/logo.png",
                "/logo.png",
                "/logo.png",
                "/logo.png",
                "/logo.png"
              ].map((src, index) => (
                <div key={index} className="group relative h-80 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-muted/50 flex items-center justify-center p-6">
                    <img src={src} alt={`Custom Silver Jewelry ${index + 1}`} className="object-contain w-full h-full p-4" loading="eager" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-lg font-semibold">Premium Sterling Silver</p>
                      <p className="text-sm">Customized to Your Style</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Statement Piece?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              From concept to CAD design, and CAM production to expert finishing - we'll bring your vision to life 
              with premium sterling silver and unmatched attention to detail.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="https://wa.me/918668738687"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#128C7E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Custom Design Journey</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.05 22l4.16-1.84C7.81 21.33 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1.06 14.86c-1.11.26-2.26.14-3.31-.34-1.05-.48-1.91-1.34-2.39-2.39-.48-1.05-.6-2.2-.34-3.31.26-1.11.87-2.11 1.73-2.87 1.74-1.54 4.32-1.54 6.06 0 .86.76 1.47 1.76 1.73 2.87.26 1.11.14 2.26-.34 3.31-.48 1.05-1.34 1.91-2.39 2.39-.52.24-1.09.36-1.66.36-.13 0-.27-.01-.4-.02z"/>
                </svg>
              </Link>
              <p className="text-sm text-muted-foreground">
                Simply send us your inspiration photos or design ideas on WhatsApp, and we'll guide you through the entire process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}