import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import "./index.css";

export default function Privacy() {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <div className="row">
      <MDBBtn
        onClick={() => setScrollableModal(!scrollableModal)}
        className="footerBtn col-6"
      >
        Privacy Policy
      </MDBBtn>

      <MDBModal
        show={scrollableModal}
        setShow={setScrollableModal}
        tabIndex="-1"
      >
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Privacy Policy</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Welcome to Kindling by J's Privacy Policy. This policy outlines
                how we collect, use, disclose, and protect your personal
                information when you use our blog website. By accessing or using
                our website, you consent to the practices described in this
                policy.
              </p>
              <br />
              <ol className="list">
                <li>
                  <span className="boldText">
                    Information We Collect Personal Information:
                  </span>
                  <p>
                    When you create an account or interact with our website, we
                    may collect information such as your name, email address,
                    and other contact details. Usage Data: We may collect
                    information about your interactions with our website,
                    including pages visited, content viewed, and actions taken.
                    Cookies and Tracking Technologies: We use cookies and
                    similar technologies to enhance your experience and collect
                    data about your usage patterns. You can adjust your browser
                    settings to manage or disable cookies.
                  </p>
                </li>
                <li>
                  <span className="boldText">
                    How We Use Your Information Providing Services:
                  </span>
                  <p>
                    We use your information to provide and maintain our
                    website's functionality, including user accounts and content
                    delivery. Communication: We may use your contact information
                    to send you updates, newsletters, or notifications related
                    to our website. You can opt out of these communications at
                    any time. Improvement and Analytics: We analyze user
                    behavior and preferences to improve our website's
                    performance, content, and user experience.
                  </p>
                </li>
                <li>
                  <span className="boldText">
                    Data Sharing and Disclosure Third Parties:
                  </span>
                  <p>
                    We may share your information with trusted third-party
                    service providers who assist us in operating and maintaining
                    the website. These providers are obligated to protect your
                    data and use it only for authorized purposes. Legal
                    Requirements: We may disclose your information in response
                    to legal requests, such as court orders or subpoenas, or to
                    protect our rights, property, or safety.
                  </p>
                </li>
                <li>
                  <span className="boldText">Data Security:</span>
                  <p>
                    We implement security measures to protect your personal
                    information from unauthorized access, disclosure,
                    alteration, or destruction. However, no method of data
                    transmission over the internet or electronic storage is
                    completely secure, and we cannot guarantee absolute
                    security.
                  </p>
                </li>
                <li>
                  <span className="boldText">
                    Your Choices Account Information:
                  </span>
                  <p>
                    You can review and update your account information through
                    your user profile settings. Cookies: You can modify your
                    browser settings to control or block cookies. Note that
                    blocking cookies may affect certain website functionalities.
                    Marketing Communications: You can opt out of receiving
                    marketing communications from us by following the
                    unsubscribe instructions in our emails.
                  </p>
                </li>
                <li>
                  <span className="boldText">Children's Privacy:</span>
                  <p>
                    Our website is not intended for use by individuals under the
                    age of 18. We do not knowingly collect personal information
                    from children. If you believe a child has provided us with
                    personal information, please contact us to have the
                    information removed.
                  </p>
                </li>
                <li>
                  <span className="boldText">Changes to this Policy:</span>
                  <p>
                    We may update this Privacy Policy to reflect changes in our
                    practices or legal requirements. The revised policy will be
                    posted on our website, and the date of the latest revision
                    will be indicated.
                  </p>
                </li>
                <li>
                  <span className="boldText">Contact Us:</span>
                  <p>
                    If you have any questions, concerns, or requests regarding
                    your personal information or this Privacy Policy, please
                    contact us at [Your Contact Information]. By using our
                    website, you agree to the terms outlined in this Privacy
                    Policy. Thank you for trusting Kindling by J with your
                    data's protection and privacy.
                  </p>
                </li>
              </ol>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
