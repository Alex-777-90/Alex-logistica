
import { StyledAbout } from "./AboutStyled";
import AlexImage from "../image/Alex.jpg"
import { saveAs } from 'file-saver';
import {useEffect,useState} from "react";
import {FaDownload} from "react-icons/fa"


const About = () => {

  const [data, setData] = useState<any>([]);

  useEffect(() => {

    fetch("http://localhost:3000/image/AlexLogistica.pdf")
    .then(response => response.arrayBuffer()) 
    .then(setData)

  },[])

  const handleDownload = () => {

    // Código para fazer o download do arquivo)
    const file =  new Blob([data], { type: 'application/pdf' }); // o arquivo que você deseja baixar
    saveAs(file, 'AlexLogistica.pdf'); //nome do arquivo que será salvo
    // console.log(file);
    // console.log(file.text())
    // console.log(file.arrayBuffer())
    // console.log(data)
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
                    <p>Olá, meu chamo <strong>Alex lima</strong> tenho uma longa experiência na área da logística</p>
                    <br />
                    <p>Dentro da Logística já trabalhei em todo o fluxo da cadeia de suprimento desde do recebimento, 
                       contato com fornecedores, armazenagem, controle estoque, follow-up com transportadoras, 
                       rastreamento, contato com o cliente final e logística reversa.</p>
                    <br/>
                    <p>Estou em busca de uma recolocação no mercado na área da Logística desde assistente, 
                       analista de logística, transporte, almoxarifado.</p>
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
