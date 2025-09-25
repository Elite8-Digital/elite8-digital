import React from 'react';
import { ScrollText, Shield, AlertCircle, Scale, Phone } from 'lucide-react';

const TC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3">
            <ScrollText className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
          </div>
          <p className="mt-2 text-gray-600">Last Updated: September 25, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the Service provided by 
                <span className="font-semibold text-blue-600"> ELITE8 DIGITAL PRIVATE LIMITED</span>, 
                located in Ujjain, Madhya Pradesh, India ("we", "us"). By using or accessing 
                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">www.elite8digital.in</span>, 
                you agree to these Terms.
              </p>
            </div>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">1. Definitions</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="font-medium text-gray-900">Service:</p>
              <p className="text-gray-700">The website, applications, and functionalities offered by us</p>
            </div>
            <div className="border-l-4 border-green-200 pl-4">
              <p className="font-medium text-gray-900">User / You:</p>
              <p className="text-gray-700">Any person accessing or using the Service</p>
            </div>
            <div className="border-l-4 border-purple-200 pl-4">
              <p className="font-medium text-gray-900">Content:</p>
              <p className="text-gray-700">Texts, images, graphics, software, or other materials on the Service</p>
            </div>
          </div>
        </div>

        {/* Use of Service */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">2. Use of the Service</h2>
          <p className="text-gray-700 mb-4">You agree not to:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">• Use the Service for unlawful or unauthorized activities</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">• Modify or tamper with the Service's functionality</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">• Upload harmful code, viruses, or malware</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">• Infringe intellectual property or privacy rights of others</p>
            </div>
          </div>
        </div>

        {/* Account & Registration */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Account & Registration</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800">
              If account registration is required, you are responsible for safeguarding login credentials 
              and all actions under your account.
            </p>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700">
                All content, design, code, and materials used in the Service are the property of 
                <span className="font-semibold"> ELITE8 DIGITAL PRIVATE LIMITED</span> or its licensors. 
                You may not use them without prior permission.
              </p>
            </div>
          </div>
        </div>

        {/* Payments & Fees */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Payments, Fees & Taxes</h2>
          <div className="space-y-3">
            <p className="text-gray-700">Any services purchased are subject to applicable fees.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium">
                All fees are non-refundable unless stated otherwise. An additional 18% GST will be applied as required by law.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers & Liability */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Disclaimers & Limitation of Liability</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-800">• The Service is provided "as is" and "as available."</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-800">• We disclaim all warranties to the maximum extent permitted by law.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-800">• We are not liable for indirect, incidental, or consequential damages arising from your use of the Service.</p>
            </div>
          </div>
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Third-Party Links & Services</h2>
          <p className="text-gray-700">
            Our Service may link to or integrate with third-party services. We are not responsible for 
            their content, operations, or liability.
          </p>
        </div>

        {/* Modifications */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Modifications & Suspension</h2>
          <p className="text-gray-700">
            We reserve the right to modify, suspend or discontinue parts of the Service 
            (temporarily or permanently) at our discretion.
          </p>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-start space-x-3">
            <Scale className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Governing Law & Dispute Resolution</h2>
              <p className="text-gray-700">
                These Terms are governed by the laws of Madhya Pradesh, India. Any dispute arising under 
                these Terms shall be resolved in the courts of Ujjain, Madhya Pradesh, India.
              </p>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Termination</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">
              We may suspend or terminate your access to the Service at any time, for violations of 
              these Terms or other reasons, with or without notice.
            </p>
          </div>
        </div>

        {/* Miscellaneous */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Miscellaneous</h2>
          <p className="text-gray-700">
            If any provision is invalid, it will not affect the validity of the remaining provisions. 
            These Terms constitute the entire agreement between you and ELITE8 DIGITAL PRIVATE LIMITED 
            regarding the Service.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-white p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-6 w-6" />
            <h2 className="text-xl font-semibold">12. Contact</h2>
          </div>
          <p className="mb-4">
            If you have any questions or concerns about these Terms, contact us at:
          </p>
          <a 
            href="mailto:contact@elite8digital.in"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            contact@elite8digital.in
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © 2025 Elite8 Digital Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TC;