import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Maximax Advertising',
  description: 'Privacy Policy for Maximax Advertising - Your privacy is important to us. Learn how we collect, use, and protect your information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Effective Date: January 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you contact us through our website, 
              request information about our services, or engage with our mobile billboard advertising campaigns.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Business information (company name, industry)</li>
              <li>Service preferences and requirements</li>
              <li>Communications you send to us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and deliver our mobile billboard advertising services</li>
              <li>Communicate with you about our services and campaigns</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and develop new offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
            <p className="mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and 
              analyze site traffic. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Effective Date" above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Maximax Advertising</p>
              <p>Email: privacy@maximaxmobileadvertising.com</p>
              <p>Phone: 1-800-MAXIMAX</p>
              <p>Address: Miami, Florida</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}