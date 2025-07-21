import React, { useState } from "react";

const invoiceJson = `{
  "companyName": "Mutashim Mohsin",
  "companyStreet": "123 Software Lane",
  "companyCityZip": "Karachi, 74000",
  "companyPhone": "+92 300 1234567",
  "companyFax": "+92 21 9876543",
  "companyWebsite": "www.mutashim.com",
  "invoiceDate": "2025-07-21",
  "invoiceNumber": "INV-20250721-001",
  "customerId": "CUST-00001",
  "dueDate": "2025-08-05",
  "clientName": "John Doe",
  "clientCompany": "Doe Enterprises",
  "clientStreet": "456 Startup Blvd",
  "clientCityZip": "Islamabad, 44000",
  "clientPhone": "+92 333 6547890",
  "items": [
    {
      "description": "Web Application Development",
      "isTaxed": true,
      "amount": 120000
    },
    {
      "description": "Responsive UI Design",
      "isTaxed": true,
      "amount": 30000
    },
    {
      "description": "API Integration Services",
      "isTaxed": true,
      "amount": 20000
    },
    {
      "description": "3 Months Maintenance",
      "isTaxed": false,
      "amount": 15000
    },
    {
      "description": "Deployment & Hosting Setup",
      "isTaxed": false,
      "amount": 5000
    }
  ],
  "subtotal": 190000,
  "taxableAmount": 170000,
  "taxRate": 0.13,
  "taxDue": 22100,
  "otherCharges": 1000,
  "total": 213100,
  "otherComments": [
    "We appreciate your business!",
    "Kindly clear the payment before the due date.",
    "For support, feel free to contact us anytime."
  ],
  "contactInfo": "Email: contact@mutashim.com | Phone: +92 300 1234567"
}`;

const letterJson = `{
  "senderName": "Mutashim",
  "senderTitle": "Software Developer",
  "senderCompany": "Mutashim Mohsin",
  "senderAddress": "123 Software Lane, Karachi, 74000",
  "recipientName": "Hiring Manager",
  "recipientTitle": "HR Department",
  "recipientCompany": "XYZ Technologies",
  "recipientAddress": "456 Innovation Park, Karachi, 54000",
  "date": "2025-07-21",
  "subject": "Application for Software Developer Position",
  "body": "Dear Hiring Manager,\\n\\nI am writing to apply for the Software Developer position at XYZ Technologies. I have experience building full-stack web applications using .NET Core, Entity Framework, React.js, and SQL Server.\\n\\nRecently, I built a PDF generation SaaS API to automate document creation. I enjoy solving real-world problems with clean, efficient code.\\n\\nI’d love the opportunity to contribute to your team and would be happy to discuss further.\\n\\nThank you for considering my application.",
  "closing": "Sincerely",
  "signatureName": "Mutashim",
  "signatureTitle": "Software Developer"
}
`;

const TryServiceSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("invoice");
  const [jsonInput, setJsonInput] = useState(invoiceJson);
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTemplateChange = (e) => {
    const newTemplate = e.target.value;
    setSelectedTemplate(newTemplate);

    setJsonInput(newTemplate === "invoice" ? invoiceJson : letterJson);
  };

  const handleGeneratePDF = async () => {
    try {
      setError("");
      setLoading(true);
      setPdfBlobUrl(null);

      let parsedJson;
      try {
        parsedJson = JSON.parse(jsonInput);
      } catch (err) {
        setError("Invalid JSON format.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://docable.azurewebsites.net/api/pdf/generate/${selectedTemplate}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedJson),
        }
      );

      if (!response.ok) throw new Error("PDF generation failed");

      const blob = await response.blob();
      setPdfBlobUrl(URL.createObjectURL(blob));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-black via-neutral-900 to-black text-white py-28 px-6 md:px-12 lg:px-20">
      <h2 id="GeneratePDF" className="text-4xl md:text-5xl font-bold text-center mb-14 tracking-tight">
        Try Docable Live
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: JSON + Template Selection */}
        <div className="flex flex-col">
          <label  className="block mb-2 font-medium text-sm text-gray-300">
            JSON Input
          </label>
          <textarea
            rows="18"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full p-4 text-sm bg-[#1a1a1a] border border-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-gray-500"
          ></textarea>

          <label className="block mt-6 mb-2 font-medium text-sm text-gray-300">
            Select Template
          </label>
          <select
            value={selectedTemplate}
            onChange={handleTemplateChange}
            className="w-full p-3 bg-[#1a1a1a] border border-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="invoice">Invoice</option>
            <option value="letter">Letter</option>
          </select>

          {error && (
            <div className="mt-4 bg-red-500/10 text-red-400 px-4 py-2 rounded-md border border-red-600 text-sm">
              {error}
            </div>
          )}

          <button
          
            onClick={handleGeneratePDF}
            disabled={loading}
            className={`mt-6 px-6 py-3 rounded-md font-semibold text-black transition duration-150 ${
              loading
                ? " bg-white cursor-not-allowed"
                : " bg-white hover:bg-gray-200"
            }`}
          >
            {loading ? "Generating..." : "Generate PDF"}
          </button>

          {pdfBlobUrl && (
            <a
              href={pdfBlobUrl}
              download={`document-${selectedTemplate}.pdf`}
              className="block mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
            >
              Download PDF
            </a>
          )}
        </div>

        {/* Right: Preview */}
        <div className="bg-[#1a1a1a] border border-neutral-800 rounded-lg overflow-hidden h-[600px] shadow-lg">
          {pdfBlobUrl ? (
            <iframe
              src={pdfBlobUrl}
              title="PDF Preview"
              className="w-full h-full border-none"
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm text-center px-4">
              PDF preview will appear here once generated.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TryServiceSection;
