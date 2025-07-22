
import { StyledAbout } from "./AboutStyled";
import AlexImage from "../image/Alex-remove.png"
import {FaDownload} from "react-icons/fa";
import { Trans, useTranslation } from 'react-i18next';



const About = () => {

  const { t } = useTranslation(); 
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Alex-Lima-Souza-dos-Santos -Logistica.pdf';
    link.setAttribute('download', 'Alex-Lima-Souza-dos-Santos -Logistica.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Arquivo PDF foi baixado com sucesso!");
  };

  const handleDownload2 = () => {
    const link = document.createElement('a');
    link.href = '/Case_de_sucesso-Alex_Lima_Souza_dos_Santos.pdf';
    link.setAttribute('download', 'Case_de_sucesso-Alex_Lima_Souza_dos_Santos.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Arquivo PDF foi baixado com sucesso!");
  };

    return (
      <StyledAbout id="sobre">
         <div className='subTitle'>
             <h2>{t("about_title")}</h2>
         </div>
    
           <article >
                <div className='aboutImage'>
                        <img src={AlexImage} alt="imagem do Alex"/>
                </div>
                <div className= "textAbout">
                <p><Trans i18nKey="about_intro1"><strong>Alex Lima</strong></Trans></p>
          <br />
          <p>{t("about_intro2")}</p>
          <br />
          <p><strong>{t("about_download_text")}</strong></p>
          <button onClick={handleDownload}>
            <FaDownload className="FaDownload" /> {t("download_cv")}
          </button>
            <button onClick={handleDownload2}>
              <FaDownload className="FaDownload" /> {t("download_case")}
            </button>
          </div>
           </article>
      </StyledAbout>
    )
  };
  
  export default About;
