
import { StyledAbout } from "./AboutStyled";
import AlexImage from "../image/Alex.jpg"
import {FaDownload} from "react-icons/fa";


const About = () => {

  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Alex-Lima-Souza-dos-Santos -Logistica.pdf';
    link.setAttribute('download', 'Alex-Lima-Souza-dos-Santos -Logistica.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Arquivo PDF foi baixado com sucesso!");
  };

    return (
      <StyledAbout id="sobre">
         <div className='subTitle'>
             <h2>Sobre</h2>
         </div>
    
           <article >
                <div className='aboutImage'>
                        <img src={AlexImage} alt="imagem do Alex"/>
                </div>
                <div className= "textAbout">
                    <p>Olá, me chamo <strong>Alex lima</strong> e atuo há mais de 11 anos na logística, com experiência em
                    toda a cadeia de suprimentos — de compras e recebimento até estoque, transporte, atendimento final e logística reversa.</p>
                    <br/>
                    <p>Tenho vivência prática em controle de notas fiscais, gestão de ativos, 
                      follow-up com transportadoras, rastreabilidade e indicadores logísticos. 
                      Domino Excel avançado, Power BI, SQL e Power Query, usando dados para apoiar decisões e melhorar processos.</p>
                    <br/>
                    <p><strong>Para baixar o meu currículo em PDF clique abaixo no botão :</strong></p>   
                    <button onClick={handleDownload} >
                          <FaDownload className="FaDownload"/>  Download CV
                   </button>
                </div>
           </article>
      </StyledAbout>
    )
  };
  
  export default About;
