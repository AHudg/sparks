import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function Terms() {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <div>
      <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>
        Terms of Service
      </MDBBtn>

      <MDBModal
        show={scrollableModal}
        setShow={setScrollableModal}
        tabIndex="-1"
      >
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Terms of Service</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Last updated: August 8th, 2023
                <br />
                <br />
                Please read these Terms of Service ("Terms", "Terms of Service")
                carefully before using www.KindlingbyJ.com (the "Website")
                operated by Kindling by J/Key VI/Jalene Manzie ("us", "we", or
                “our").
                <br />
                <br />
                Your access to and use of the Website is conditioned upon your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users, and others who wish to access or use the
                Website.
              </p>
              <ul>
                <li>
                  <span className="boldText">Acceptance of Terms</span>
                  <p>
                    By using our website, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Use, as
                    well as any additional terms and conditions that may apply
                    to specific sections of the website.
                  </p>
                </li>
                <li>
                  <span className="boldText">User Eligibility</span>
                  <p>
                    You must be at least 18 years old to use our website. By
                    using our website, you represent and warrant that you meet
                    the age requirement and have the legal capacity to enter
                    into these Terms of Service.
                  </p>
                </li>
                <li>
                  <span className="boldText">Content Ownership and Use</span>
                  <p>
                    All content provided on this Website, including but not
                    limited to articles, blog posts, images, graphics, videos,
                    and any other material ("Content"), is the intellectual
                    property of Kindling by J unless otherwise stated. You
                    acknowledge and agree that the Content is protected by
                    copyright, trademark, and other intellectual property laws.
                    You may not use, reproduce, distribute, modify, or create
                    derivative works based on the Content without obtaining
                    explicit written permission from Kindling by J.
                  </p>
                </li>
                <li>
                  <span className="boldText">Website Use</span>
                  <p>
                    The Website is intended for personal and non-commercial use
                    only. You agree not to use the Website for any illegal or
                    unauthorized purpose. You must not, in the use of the
                    Website, violate any laws or regulations in your
                    jurisdiction, including but not limited to copyright or
                    trademark laws. These Terms restrict you from transmitting
                    viruses, malware, or any other harmful code.
                  </p>
                </li>
                <li>
                  <span className="boldText">Disclaimer of Warranties</span>
                  <p>
                    Our website and its content are provided on an “as is” and
                    “as available” basis. We do not make any warranties, express
                    or implied, regarding the accuracy, reliability, or
                    suitability of the content.
                  </p>
                </li>
                <li>
                  <span className="boldText">Limitation of Liability</span>
                  <p>
                    Kindling by J will not be liable for any direct, indirect,
                    incidental, consequential, or punitive damages arising from
                    your use of the website, even if we have been advised of the
                    possibility of such damages.
                  </p>
                </li>
                <li>
                  <span className="boldText">
                    No Recommendations, Medical or Lifestyle Advice
                  </span>
                  <p>
                    The information provided on this Website, including
                    recommendations, suggestions, opinions, or any other
                    content, is for informational and entertainment purposes
                    only. It should not be considered as professional advice,
                    medical advice, or as a substitute for seeking advice from
                    qualified professionals. Kindling by J is not responsible
                    for any actions taken based on the information provided on
                    the Website. Always consult with appropriate professionals
                    before making any decisions related to your health,
                    lifestyle, or other important matters.
                  </p>
                </li>
                <li>
                  <span className="boldText">Third-Party Links</span>
                  <p>
                    The Website may contain links to third-party websites or
                    services that are not owned or controlled by Kindling by J.
                    Kindling by J has no control over, and assumes no
                    responsibility for, the content, privacy policies, or
                    practices of any third-party websites or services. You
                    further acknowledge and agree that Kindling by J shall not
                    be responsible or liable, directly or indirectly, for any
                    damage or loss caused or alleged to be caused by or in
                    connection with the use of or reliance on any such content,
                    goods, or services available on or through any such websites
                    or services.
                  </p>
                </li>
                <li>
                  <span className="boldText">Privacy</span>
                  <p>
                    Your privacy is important to us. Our Privacy Policy outlines
                    how we collect, use, and protect your personal information.
                    By using our website, you consent to the practices described
                    in the Privacy Policy.
                  </p>
                </li>
                <li>
                  <span className="boldText">Changes to Terms of Service</span>
                  <p>
                    Kindling by J reserves the right to modify or replace these
                    Terms of Service at any time. Any changes will be effective
                    immediately upon posting on the Website. Your continued use
                    of the Website after any such changes constitutes your
                    acceptance of the new Terms of Service.
                  </p>
                </li>
                <li>
                  <span className="boldText">Modification and Termination</span>
                  <p>
                    Kindling by J reserves the right to modify, suspend, or
                    terminate the website, any content, or these Terms of Use at
                    any time without notice.
                  </p>
                </li>
                <li>
                  <span className="boldText">Governing Law</span>
                  <p>
                    These Terms of Use shall be governed by and construed in
                    accordance with the laws of Texas, where we operate
                    business.
                  </p>
                </li>
                <li>
                  <span className="boldText">Contact Us</span>
                  <p>
                    If you have any questions about these Terms of Service,
                    please contact us at [Your Contact Email].
                  </p>
                </li>
              </ul>
              <p>
                By accessing or using the Website, you agree to be bound by
                these Terms of Service. If you do not agree with any part of
                these terms, please do not use the Website. This Terms of
                Service statement was generated by Kindling by J and is not a
                legally binding document. It is intended to provide a general
                overview of the terms and conditions for using the Website. For
                legally accurate and personalized terms, it is recommended to
                consult with a legal professional.
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => setScrollableModal(!setScrollableModal)}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
