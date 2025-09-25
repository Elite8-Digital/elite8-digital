import React from 'react';
import { Shield, Database, Eye, Lock, UserCheck, Mail, Globe, Trash2, FileText } from 'lucide-react';

const PP = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="mt-2 text-gray-600">Last Updated: September 25, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-start space-x-3">
            <FileText className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">About This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-green-600">ELITE8 DIGITAL PRIVATE LIMITED</span>, 
                located in Ujjain, Madhya Pradesh, India, ("we", "us", "our") operates the website 
                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm ml-1">www.elite8digital.in</span>
                (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard 
                personal information when you use our Service.
              </p>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            {/* Personal Data */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Personal Data</h3>
              <p className="text-blue-800">
                Name, email address, phone number, company name, address, etc., when you provide 
                them via contact forms, service inquiries, or registrations.
              </p>
            </div>

            {/* Usage Data */}
            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Usage Data</h3>
              <p className="text-purple-800">
                IP address, browser type, device information, pages visited, timestamps, 
                referring URLs, etc.
              </p>
            </div>

            {/* Cookies & Tracking */}
            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Cookies & Tracking</h3>
              <p className="text-orange-800">
                We may use cookies or similar technologies to enhance user experience, 
                analyze traffic, and manage preferences.
              </p>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
          </div>
          
          <p className="text-gray-700 mb-4">We use the information for the following purposes:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-indigo-800">• To provide, maintain, and operate our Service</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-indigo-800">• To respond to your inquiries and offer support</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-indigo-800">• To send updates, newsletters, or promotional communications (if you've opted in)</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-indigo-800">• To analyze usage and improve our Service</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 md:col-span-2">
              <p className="text-indigo-800">• To enforce our policies, prevent fraud, and ensure security</p>
            </div>
          </div>
        </div>

        {/* Disclosure of Information */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">3. Disclosure of Your Information</h2>
          <p className="text-gray-700 mb-4">We may share your data with:</p>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <span className="font-medium">Third-party service providers</span> (hosting, analytics, email services) under confidentiality
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">
                <span className="font-medium">Legal authorities</span> if required by law or court order
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <span className="font-medium">In connection with a business transfer</span> (merger, acquisition) with proper notice
              </p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-start space-x-3">
            <Lock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">
                  We implement appropriate technical and organizational measures to protect your 
                  personal data from unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-start space-x-3">
            <Trash2 className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
              <p className="text-gray-700">
                We retain personal data for as long as necessary to fulfill the purposes outlined 
                or as required by law. When data is no longer needed, we delete or anonymize it.
              </p>
            </div>
          </div>
        </div>

        {/* Third-Party Links */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-start space-x-3">
            <Globe className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Third-Party Links</h2>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-purple-800">
                  Our Service may contain links to third-party websites. Their policies and practices 
                  are outside our control, so please review their privacy policies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <UserCheck className="h-6 w-6 text-teal-600" />
            <h2 className="text-xl font-semibold text-gray-900">7. Your Rights</h2>
          </div>
          
          <p className="text-gray-700 mb-4">Depending on applicable law, you may have rights such as:</p>
          
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-lg p-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-teal-800">Access your personal data</span>
            </div>
            <div className="flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-lg p-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-teal-800">Request correction or deletion</span>
            </div>
            <div className="flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-lg p-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-teal-800">Withdraw consent</span>
            </div>
            <div className="flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-lg p-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-teal-800">Object to certain processing</span>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800">
              Our Service is not intended for minors under the applicable legal age (e.g., under 13). 
              We do not knowingly collect data from children.
            </p>
          </div>
        </div>

        {/* Policy Changes */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Changes will be effective when posted, 
            and the "Last Updated" date will change accordingly.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg text-white p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="h-6 w-6" />
            <h2 className="text-xl font-semibold">10. Contact Us</h2>
          </div>
          <p className="mb-4">
            If you have questions or concerns about our Privacy Policy, you can contact us at:
          </p>
          <a 
            href="mailto:contact@elite8digital.in"
            className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            contact@elite8digital.in
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © 2025 Elite8 Digital Private Limited. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Your privacy is important to us. We are committed to protecting your personal information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PP;