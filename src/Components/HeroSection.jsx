import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] via-[#0c0c0c] to-[#121212] text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Generate Stunning PDFs from JSON Instantly.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Docify is a developer-first PDF generation API that converts JSON input into elegant documents using customizable templates. Perfect for invoices, HR letters, and more.
          </p>
          <a href="#try-service" className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium transition">
            Try it Now →
          </a>
        </div>

        {/* Code preview */}
        <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-6 shadow-lg overflow-auto">
          <div className="text-sm text-green-400 mb-2">POST /api/pdf/generate/invoice</div>
          <pre className="text-sm text-gray-200">
            {`{
  "invoiceNumber": "INV-2025-001",
  "customerName": "John Doe",
  "items": [
    { "name": "Web Design", "price": 500 },
    { "name": "Hosting", "price": 100 }
  ],
  "total": 600
}`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
