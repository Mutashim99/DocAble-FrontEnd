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

  const responseExample = `const blob = await response.blob();
const url = URL.createObjectURL(blob);
window.open(url); // or trigger download`;

  const endpointInfo = `POST /api/pdf/generate/{template}

Available templates:
- invoice
- letter`;

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white pt-28  md:px-12 lg:px-20 px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-3">📄 Docable API Documentation</h1>
          <p className="text-gray-400 text-lg">
            Everything you need to generate beautiful PDFs from JSON using Docable.
          </p>
        </div>

        {/* How It Works */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">🚀 How It Works</h2>
          <p className="text-gray-300">
            Docable is a developer-friendly PDF generator API. Just pick a template, send structured JSON, and get a polished PDF in return.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Send a <code className="text-green-400">POST</code> request to the template endpoint</li>
            <li>Include required JSON in the body</li>
            <li>Receive a downloadable PDF file</li>
          </ul>
        </div>

        {/* Endpoint Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">🌐 API Endpoint</h2>
          <CodeBlock
            code={endpointInfo}
            language="bash"
            onCopy={() => copyToClipboard(endpointInfo)}
          />
        </div>

        {/* Invoice JSON */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">🧾 Invoice Template</h2>
          <CodeBlock
            code={invoiceJSON}
            language="json"
            onCopy={() => copyToClipboard(invoiceJSON)}
            color="text-green-300"
          />
        </div>

        {/* Letter JSON */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">✉️ Letter Template</h2>
          <CodeBlock
            code={letterJSON}
            language="json"
            onCopy={() => copyToClipboard(letterJSON)}
            color="text-green-300"
          />
        </div>

        {/* Response Handling */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">📦 Handling PDF Response</h2>
          <CodeBlock
            code={responseExample}
            language="js"
            onCopy={() => copyToClipboard(responseExample)}
          />
        </div>
      </div>
    </section>
  );
};

// Reusable component for all code blocks
const CodeBlock = ({ code, language = "json", onCopy, color = "text-gray-300" }) => {
  return (
    <div className={`relative bg-[#1a1a1a] border border-neutral-800 rounded-lg  shadow-xl overflow-auto font-mono p-4 text-sm ${color} overflow-x-auto`}>
      <pre className="whitespace-pre-wrap">{code}</pre>
      <button
        onClick={onCopy}
        className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded shadow"
      >
        Copy
      </button>
    </div>
  );
};

export default Docs;
