import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Maximax Advertising',
  description: 'Terms of Service for Maximax Advertising - Read our terms and conditions for using our mobile billboard advertising services.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Effective Date: January 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Maximax Advertising's services, you accept and agree to be bound by these 
              Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="mb-4">
              Maximax Advertising provides mobile billboard advertising services including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>LED digital mobile billboard trucks</li>
              <li>GPS tracking and route optimization</li>
              <li>4K display technology</li>
              <li>Campaign management and analytics</li>
              <li>Coverage area planning and execution</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
            <p className="mb-4">As our client, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Ensure all advertising content complies with applicable laws</li>
              <li>Own or have rights to all content provided for advertising</li>
              <li>Pay all fees according to agreed terms</li>
              <li>Not use our services for illegal or harmful purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="mb-4">
              Payment terms are as specified in your service agreement. Late payments may result in service 
              suspension or termination. All fees are non-refundable unless otherwise stated in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content, trademarks, and intellectual property on our website and in our services remain the 
              property of Maximax Advertising or our licensors. You may not use our intellectual property without 
              written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Maximax Advertising shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless Maximax Advertising from any claims, damages, or expenses 
              arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Service Modifications</h2>
            <p className="mb-4">
              We reserve the right to modify or discontinue our services at any time with reasonable notice. 
              We will fulfill all contracted campaigns or provide appropriate refunds.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="mb-4">
              Either party may terminate services according to the terms in your service agreement. Upon 
              termination, all outstanding fees become immediately due and payable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p className="mb-4">
              These Terms of Service are governed by the laws of the State of Florida. Any disputes shall be 
              resolved in the courts of Miami-Dade County, Florida.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="mb-4">
              We may update these Terms of Service from time to time. Continued use of our services after changes 
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Maximax Advertising</p>
              <p>Email: legal@maximaxadvertising.com</p>
              <p>Phone: 1-800-MAXIMAX</p>
              <p>Address: Miami, Florida</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}