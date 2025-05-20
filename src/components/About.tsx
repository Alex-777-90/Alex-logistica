
import { StyledAbout } from "./AboutStyled";
import AlexImage from "../image/Alex.jpg"
import {FaDownload} from "react-icons/fa";


const About = () => {

  
  const handleDownload = () => {
    // Aqui fica o codigo para o download do arquivo em PDF
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/u/0/uc?id=1eJGb4eOylvrjKwSELP_WQlCoQoBv4qwV&export=download';
    link.setAttribute('download', 'AlexLogistica.pdf');
    document.body.appendChild(link);
    link.click();
    console.log("Arquivo PDF foi baixado com sucesso!");
  }

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
