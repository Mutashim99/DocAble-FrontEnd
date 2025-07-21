import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-neutral-900 to-black text-white pt-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Text content */}
        <div>
          <span className="inline-block bg-purple-700 text-white text-xs px-3 py-1 rounded-full mb-4 font-semibold tracking-wide">
            NEW · Developer-First API
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
            Generate Stunning PDFs from JSON Instantly
          </h1>

          <p className="text-lg text-gray-400 mb-8">
            Docable turns simple JSON into beautifully styled documents — invoices, letters, certificates, or anything else. No complex markup. Just your data.
          </p>

          <a
            href="#GeneratePDF"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition duration-200"
          >
            Try it Now →
          </a>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="text-white font-semibold mb-2">⚡ Instant Generation</h4>
              <p>Docs are rendered and returned within milliseconds via API.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">🔒 Secure by Design</h4>
              <p>No data is stored. Everything is stateless and encrypted over HTTPS.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">🎯 Easy Integration</h4>
              <p>Just POST your JSON — no extra tools or learning curves needed.</p>
            </div>
          </div>
        </div>

        {/* Code preview box */}
        <div className="bg-[#1a1a1a] border border-neutral-800 rounded-lg p-6 shadow-xl overflow-auto text-sm font-mono">
          <div className="text-green-400 mb-3 font-medium">POST /api/pdf/generate/invoice</div>
          <pre className="text-gray-200 whitespace-pre-wrap leading-relaxed">
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
