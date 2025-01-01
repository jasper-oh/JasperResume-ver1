import { repositories } from "../../../data";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../common/separator/index";
import { Works } from "../../../data/repository/worksRespository";
import { useState } from "react";
function Work() {
  const [works, setWorks] = useState<Works[]>([]);
  
  const fetchWorks = async (): Promise<Works[]> => {
    try{
      return await repositories.worksData.getAll();
    } catch (error: any) {
      throw new Error(`Error fetching projects: ${error.message}`);
    }
  }

  fetchWorks()
    .then((works) => {
      console.log('Works:', works)
      setWorks(works)
    }
    )
    .catch((error) => console.error(error));

  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {works.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
