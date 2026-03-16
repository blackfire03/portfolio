import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#121212] text-zinc-300 py-16 px-6 md:px-12 lg:px-24 font-light">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-zinc-500 hover:text-white transition-colors mb-12 flex flex-row items-center gap-2 w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl text-white font-medium mb-4">Terms and Conditions</h1>
        <p className="text-zinc-500 mb-12">Last updated: March 17, 2026</p>

        <div className="space-y-12 leading-relaxed">
          {/* Interpretation and Definitions */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white font-medium">1. Interpretation and Definitions</h2>
            
            <div>
              <h3 className="text-xl text-white font-medium mb-3">Interpretation</h3>
              <p>The words whose initial letters are capitalised have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            </div>
            
            <div>
              <h3 className="text-xl text-white font-medium mb-3">Definitions</h3>
              <p className="mb-4">For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc pl-6 space-y-3 text-zinc-400">
                <li><strong className="text-zinc-200 font-medium">Affiliate</strong> — an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong className="text-zinc-200 font-medium">Country</strong> — refers to India.</li>
                <li><strong className="text-zinc-200 font-medium">Company</strong> — referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions; refers to Hitarth Nayak, operating as an independent UI/UX & Graphic Designer.</li>
                <li><strong className="text-zinc-200 font-medium">Device</strong> — any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                <li><strong className="text-zinc-200 font-medium">Service</strong> — refers to the Website.</li>
                <li><strong className="text-zinc-200 font-medium">Terms and Conditions</strong> — also referred to as "Terms"; means these Terms and Conditions which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.</li>
                <li><strong className="text-zinc-200 font-medium">Third-Party Social Media Service</strong> — any services or content provided by a third party that is displayed, included, made available, or linked to through the Service.</li>
                <li><strong className="text-zinc-200 font-medium">Website</strong> — refers to Hitarth Nayak's portfolio, accessible from hitarthnayak.com</li>
                <li><strong className="text-zinc-200 font-medium">You</strong> — the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white font-medium">2. Acknowledgment</h2>
            <div className="space-y-4">
              <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms set out the rights and obligations of all users regarding the use of the Service.</p>
              <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms apply to all visitors, users, and others who access or use the Service.</p>
              <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms then You may not access the Service.</p>
              <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
              <p>Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.</p>
            </div>
          </section>

          {/* Intellectual Property, Client Work and Content */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white font-medium">3. Intellectual Property, Client Work and Content</h2>
            
            <div>
              <h3 className="text-xl text-white font-medium mb-3">Intellectual Property</h3>
              <div className="space-y-4">
                <p className="text-white font-medium">© Copyright 2026 Hitarth Nayak — All Rights Reserved</p>
                <p>The Service and its original content, features, functionality, and design — including but not limited to text, graphics, logos, images, portfolio work, and any creative works produced by the Company — are and shall remain the exclusive property of Hitarth Nayak and are protected by copyright, trademark, and other applicable intellectual property laws of India.</p>
                <p>No content on this Service may be reproduced, distributed, modified, published, or used for commercial purposes without the prior written consent of the Company, except as expressly permitted under the Content Sharing section below.</p>
                <p>Any unauthorised use of the Company's content may violate copyright, trademark, and other applicable laws and may result in civil or criminal penalties.</p>
                <p>The Company name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Hitarth Nayak. You must not use such marks without the prior written permission of the Company.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white font-medium mb-3">Client Work</h3>
              <div className="space-y-4">
                <p>This Service may display work produced during the Company's collaboration with clients including Vitrag Estates Agency, Vision World, Daydreamsoft Infotech, and other third-party clients. Such work is shown for portfolio purposes only, to demonstrate the Company's creative capabilities and professional experience.</p>
                <p>The intellectual property rights in client work may be owned by the relevant client. Where third-party work is displayed, it is done so with implied or explicit permission, and no ownership over that work is claimed by the Company beyond the creative contributions made by the Company during its involvement in that project.</p>
                <p>If you are a client representative and have concerns about how your work is presented on this Service, please contact Us using the details in the Contact section and We will address your concerns promptly.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white font-medium mb-3">Content Sharing</h3>
              <p className="mb-4">You are permitted to share content from this Service freely — including across social media, personal websites, blogs, and other platforms — provided that:</p>
              <ul className="list-disc pl-6 space-y-3 text-zinc-400 mb-4">
                <li>You provide clear attribution to Hitarth Nayak and, where possible, include a link back to hitarthnayak.com as the original source.</li>
                <li>Content is not used for commercial purposes, altered in a way that misrepresents the original work, or presented in a manner that implies endorsement or affiliation with the Company without prior written consent.</li>
              </ul>
              <p>The Company reserves the right to revoke sharing permissions for specific content at its sole discretion by providing reasonable notice.</p>
            </div>
          </section>

          {/* Data Collection & Third-Party Links */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white font-medium">4. Data Collection & Third-Party Links</h2>
            
            <div>
              <h3 className="text-xl text-white font-medium mb-3">Data Collection via Contact Form</h3>
              <div className="space-y-4">
                <p>This Service includes a contact form through which You may submit an enquiry to the Company. When You use this form, We may collect the following information:</p>
                <p><strong className="text-zinc-200">Required fields:</strong> First Name, Last Name, Email Address, Enquiry Type, and Message.</p>
                <p>This information is collected solely for the purpose of responding to Your enquiry and facilitating communication between You and the Company. We do not use this data for unsolicited marketing, and We do not sell or share it with third parties except as required to operate the Service or comply with applicable law.</p>
                <p>Full details of how We collect, store, use, and protect your personal data are set out in Our Privacy Policy. By submitting the contact form, You acknowledge that You have read and understood Our Privacy Policy.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white font-medium mb-3">Links to Other Websites</h3>
              <div className="space-y-4">
                <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
                <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.</p>
              </div>
            </div>
          </section>

          {/* Termination, Liability and Disclaimers */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white font-medium">5. Termination, Liability and Disclaimers</h2>
            
            <div>
              <h3 className="text-xl text-white font-medium mb-3">Termination</h3>
              <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-medium mb-3">Limitation of Liability</h3>
              <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, or loss of privacy arising out of or in any way related to the use of or inability to use the Service), even if the Company has been advised of the possibility of such damages.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-medium mb-3">"AS IS" and "AS AVAILABLE" Disclaimer</h3>
              <p className="mb-4">The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service. Without limiting the foregoing, neither the Company nor any of the Company's providers makes any representation or warranty of any kind, express or implied:</p>
              <ul className="list-disc pl-6 space-y-3 text-zinc-400">
                <li>As to the operation or availability of the Service, or the information, content, and materials included thereon</li>
                <li>That the Service will be uninterrupted or error-free</li>
                <li>As to the accuracy, reliability, or currency of any information or content provided through the Service</li>
                <li>That the Service, its servers, the content, or emails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components</li>
              </ul>
            </div>
          </section>

          {/* Governing Law, Disputes and Compliance */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white font-medium">6. Governing Law, Disputes and Compliance</h2>
            
            <div>
              <h3 className="text-xl text-white font-medium mb-3">Governing Law</h3>
              <p>The laws of India, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-medium mb-3">Disputes Resolution</h3>
              <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company directly.</p>
            </div>
          </section>

          {/* Severability, Changes and Contact */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white font-medium">7. Severability, Changes and Contact</h2>
            
            <div>
              <h3 className="text-xl text-white font-medium mb-3">Severability</h3>
              <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-medium mb-3">Waiver</h3>
              <p>The failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
            </div>

            <div>
              <h3 className="text-xl text-white font-medium mb-3">Changes to These Terms and Conditions</h3>
              <div className="space-y-4">
                <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.</p>
                <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, please stop using the Service.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white font-medium mb-3">Contact Us</h3>
              <p className="mb-4">If you have any questions about these Terms and Conditions, You can contact us:</p>
              <ul className="list-disc pl-6 space-y-3 text-zinc-400">
                <li><strong className="text-zinc-200">By email:</strong> <a href="mailto:freelancing.hitarth@gmail.com" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">freelancing.hitarth@gmail.com</a></li>
                <li><strong className="text-zinc-200">By visiting this page on our website:</strong> <span className="italic">COMING SOON!</span></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
