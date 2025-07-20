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

    // Update prefilled JSON
    if (newTemplate === "invoice") {
      setJsonInput(invoiceJson);
    } else if (newTemplate === "letter") {
      setJsonInput(letterJson);
    }
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
        `https://localhost:7053/api/pdf/generate/${selectedTemplate}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedJson), // ✅ Fixed here
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
    <section className="py-20 px-6 bg-[#111827] text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Try Our Service
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: JSON + Template Selection */}
        <div>
          <label className="block mb-2 font-medium">JSON Input</label>
          <textarea
            rows="18"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full p-4 text-sm bg-[#1f2937] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          <label className="block mt-4 mb-2 font-medium">Select Template</label>
          <select
            value={selectedTemplate}
            onChange={handleTemplateChange}
            className="w-full p-3 bg-[#1f2937] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="invoice">Invoice</option>
            <option value="letter">Letter</option>
          </select>

          {error && (
            <div className="mt-4 bg-red-600/20 text-red-400 px-4 py-2 rounded border border-red-500 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleGeneratePDF}
            disabled={loading}
            className={`mt-6 px-6 py-3 rounded font-semibold transition ${
              loading
                ? "bg-blue-800 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
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
        <div className="bg-[#1f2937] border border-gray-600 rounded overflow-hidden h-[600px]">
          {pdfBlobUrl ? (
            <iframe
              src={pdfBlobUrl}
              title="PDF Preview"
              className="w-full h-full border-none"
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-sm text-center px-4">
              PDF Preview will appear here once generated
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TryServiceSection;
