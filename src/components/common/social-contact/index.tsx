import { useEffect, useState } from "react";
import "./social-contact.css";
import { Social } from "../../../data/repository/socialRepository";
import { repositories } from "../../../data";
import githubImg from "../../../assets/icons/github.png";
import linkedinImg from "../../../assets/icons/linkedIn.png";
import notionImg from "../../../assets/icons/notion.png";

function SocialContact() {
  const [social, setSocial] = useState<Social[]>([]);

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

  const getIcon = (icon: string) => {
    switch (icon) {
      case "notion.png":
        return notionImg;
      case "github.png":
        return githubImg;
      case "linkedIn.png":
        return linkedinImg;
      default:
        return icon; 
    }
  };

  return (
    <div className="social-contact">
      {social.map((item) => {
        return (
          <a key={item.id} href={item.link}>
            <div className="social-icon-div">
              <img src={getIcon(item.icon)} className="social-icon" alt={item.icon} />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
