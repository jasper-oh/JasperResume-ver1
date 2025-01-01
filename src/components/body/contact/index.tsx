import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Contact me on any of these platform!</p>
          <SocialContact />
        </div>
        {/*  <div className="download">
          <a download href={require("../../../assets/resumeKr.pdf").default}>
            <i class="fi-rr-cloud-download download-icon" />
            <span> Resume - kr</span>
          </a>
        </div> */}
        {/* <div className="download">
          <a download href={require("../../../assets/resumeEn.pdf").default}>
            <i class="fi-rr-cloud-download download-icon" />
            <span> Resume - en</span>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
