import "./mobile.css";
interface MobileProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function Mobile({ isOpen, setIsOpen }: MobileProps) {
  return (
    <div className="mobile">
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
        <i className="fi-rr-cross-circle"></i>        
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#skills">
            <i className="fi-rr-laptop option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#projects">
            <i className="fi-rr-edit-alt option-icon"></i>Projects
          </a>
        </div>
        {/* <div className="mobile-option">
          <a href="#work">
            {" "}
            <i class="fi-rr-briefcase option-icon"></i>Work
          </a>
        </div> */}
        <div className="mobile-option">
          <a href="#contact">
            <i className="fi-rr-user option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
