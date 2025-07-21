import React, { useState } from "react";

const invoiceJson = `{
  "companyName": "string",
  "companyStreet": "string",
  "companyCityZip": "string",
  "companyPhone": "string",
  "companyFax": "string",
  "companyWebsite": "string",
  "invoiceDate": "string",
  "invoiceNumber": "string",
  "customerId": "string",
  "dueDate": "string",
  "clientName": "string",
  "clientCompany": "string",
  "clientStreet": "string",
  "clientCityZip": "string",
  "clientPhone": "string",
  "items": [
    {
      "description": "string",
      "isTaxed": true,
      "amount": 0
    }
  ],
  "subtotal": 0,
  "taxableAmount": 0,
  "taxRate": 0,
  "taxDue": 0,
  "otherCharges": 0,
  "total": 0,
  "otherComments": [
    "string"
  ],
  "contactInfo": "string"
}`;

const letterJson = `{
  "senderName": "string",
  "senderTitle": "string",
  "senderCompany": "string",
  "senderAddress": "string",
  "recipientName": "string",
  "recipientTitle": "string",
  "recipientCompany": "string",
  "recipientAddress": "string",
  "date": "string",
  "subject": "string",
  "body": "string",
  "closing": "string",
  "signatureName": "string",
  "signatureTitle": "string"
}`;

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
