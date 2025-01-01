import "./skill-card.css";


interface SkillCardProps {
  icon: string;
  name: string;
}

function SkillCard( { icon, name } : SkillCardProps ) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>

      <label className="skill-name">{name}</label>
    </div>
  );
}

export default SkillCard;
