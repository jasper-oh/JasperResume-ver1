import { useEffect, useState } from "react";
import "./social-contact.css";
import { Social } from "../../../data/repository/socialRepository";
import { repositories } from "../../../data";

function SocialContact() {
  const [social, setSocial] = useState<Social[]>([])

  useEffect(() => {
    const fetchSocial = async (): Promise<void> => {
      try {
        const socialData = await repositories.socialData.getAll();
        setSocial(socialData);        
      } catch (error: any) {
        console.error(`Error fetching socials: ${error.message}`);
      }
    };

    fetchSocial(); 
  }, []);

  return (
    <div className="social-contact">
      {social.map((item) => {
        return (
          <a key={item.id} href={item.link}>
            <div className="social-icon-div">
              <img src={"src/assets/icons/" + item.icon} className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
