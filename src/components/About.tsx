
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
                    <p>Olá, me chamo <strong>Alex lima</strong> tenho uma longa experiência na área da logística e administrativa</p>
                    <br />
                    <p>Já trabalhei em todo o fluxo da cadeia de suprimento desde de compras , recebimento, 
                       contato com fornecedores, armazenagem, controle estoque, follow-up com transportadoras, 
                       rastreamento, contato com o cliente final e logística reversa.</p>
                    <br/>
                    <p>Estou em busca de uma recolocação no mercado na área da Logística ,administrativa desde assistente, 
                       analista de logística, compras , transporte, almoxarifado.</p>
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
