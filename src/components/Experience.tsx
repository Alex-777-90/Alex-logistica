import { StyledExperience } from "./ExperienceStyled";
import DataBaseExperience from "../data/ExperienceTranslated.json";
import { useEffect, useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";

import POPtrade from "../image/pop-trade-marketing.png";
import tecnoset from "../image/tecnoset.png";
import globalHitss from "../image/globalhitss.jpg";
import kidZoneWorld from "../image/kidsZone.png";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<any>([]);
  const [index, setIndex] = useState<number>();
  const [isHidden, setIsHidden] = useState<boolean>(true);

  useEffect(() => {
    const Experiencejson = DataBaseExperience;
    setData(Experiencejson);
  }, []);

  const handleclick = (event: MouseEvent) => {
    event.preventDefault();
    const idImage = parseInt((event.target as HTMLImageElement).id);
    setIndex(idImage);
    setIsHidden(false);
  };

  const renderExperience = (i: number) => (
    <div className="borderExperience">
      <div className="textExperience" key={data[i].id}>
        <h3>{data[i].company}</h3>
        <p><strong>{t("experience_role")}</strong> {data[i].job[i18n.language]}</p>
        <p><strong>{t("experience_period")}</strong> {data[i].time[i18n.language]}</p>
        <p><strong>{t("experience_description")}</strong></p>
        <p>{data[i].description[i18n.language]}</p>
        <p><strong>{t("experience_skills")}</strong></p>
        <div className="tags">
           {data[i].skills[i18n.language].map((skill: string, index: number) => (
              <span key={index}>{skill}{index < data[i].skills[i18n.language].length - 1 ? " · " : ""}</span>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <StyledExperience id="portofolio">
      <div className="subTitle">
        <h2>{t("experience_title")}</h2>
        <p>{t("experience_hint")}</p>
      </div>
      {data && (
        <article>
          <div className="nameCompany">
            <img id="3" src={kidZoneWorld} alt="Kids Zone World" onClick={handleclick} />
            <img id="0" src={POPtrade} alt="Pop Trade" onClick={handleclick} />
            <img id="1" src={tecnoset} alt="Tecnoset" onClick={handleclick} />
            <img id="2" src={globalHitss} alt="Global Hitss" onClick={handleclick} />
          </div>

          {isHidden && data[3] && renderExperience(3)}
          {index !== undefined && renderExperience(index)}
        </article>
      )}
    </StyledExperience>
  );
};

export default Experience;
