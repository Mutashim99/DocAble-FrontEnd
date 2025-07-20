import React from 'react';
import { toast } from 'react-hot-toast';

const Docs = () => {
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  const invoiceJSON = `{
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
  "otherComments": ["string"],
  "contactInfo": "string"
}`;

  const letterJSON = `{
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

  const responseExample = `// Response: application/pdf
// Returns a binary stream (PDF file)
// Example in JavaScript:

const blob = await response.blob();
const url = URL.createObjectURL(blob);
window.open(url); // or trigger a download
`;

  const endpointInfo = `POST /api/pdf/generate/{template}

Available templates:
- invoice
- letter

Example:
POST https://localhost:7053/api/pdf/generate/invoice`;

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-14">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">📄 Docify API Documentation</h1>
          <p className="text-gray-400 text-lg">Everything you need to start using Docify PDF Generator</p>
        </div>

        {/* Getting Started */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">🚀 Getting Started</h2>
          <p className="text-gray-300 mb-2">
            Docify is a simple JSON-to-PDF API. Select a template, send the required JSON, and get a styled PDF in return.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Make a <code className="text-green-400">POST</code> request to the desired template endpoint</li>
            <li>Send JSON as request body</li>
            <li>Receive a PDF file as response</li>
          </ul>
        </div>

        {/* Template: Invoice */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">🧾 Invoice Template JSON</h2>
          <div className="relative bg-[#1e293b] border border-gray-700 rounded p-4 text-sm text-green-300 overflow-x-auto">
            <pre>{invoiceJSON}</pre>
            <button
              onClick={() => copyToClipboard(invoiceJSON)}
              className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs rounded"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Template: Letter */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">✉️ Letter Template JSON</h2>
          <div className="relative bg-[#1e293b] border border-gray-700 rounded p-4 text-sm text-yellow-300 overflow-x-auto">
            <pre>{letterJSON}</pre>
            <button
              onClick={() => copyToClipboard(letterJSON)}
              className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs rounded"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Endpoints */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">🌐 API Endpoints</h2>
          <div className="relative bg-[#1e293b] border border-gray-700 rounded p-4 text-sm text-blue-300 overflow-x-auto">
            <pre>{endpointInfo}</pre>
            <button
              onClick={() => copyToClipboard(endpointInfo)}
              className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs rounded"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Response Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">📦 Response Handling</h2>
          <div className="relative bg-[#1e293b] border border-gray-700 rounded p-4 text-sm text-gray-300 overflow-x-auto">
            <pre>{responseExample}</pre>
            <button
              onClick={() => copyToClipboard(responseExample)}
              className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs rounded"
            >
              Copy
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Docs;
