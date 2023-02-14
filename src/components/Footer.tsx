import {StyledFooter} from "./FooterStyled";
import { Link } from "react-router-dom";

import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
    return (
      <StyledFooter id="contato">
           <article className ="contato" >
                 <div className="contactInfos">
                        <p><strong>Nome:</strong> Alex Lima Souza dos Santos</p>
                        <p><strong>Endereço:</strong> São Paulo -SP</p>
                        <p><strong>Telefone:</strong> <p>(11) 9 6647-1637</p></p>
                        <p><strong>Email:</strong> 
                          alxnvn@yahoo.com.br</p>
                  </div>
                  <div className="whatsapp">
                      <p className="paragrafo">Clique Aqui</p>
                      <Link target="_blank" rel="noopener noreferrer" 
                             to="https://api.whatsapp.com/send?phone=5511966471937">
                            <p><FaWhatsappSquare/></p>
                      </Link>
                  </div>
            </article>
      </StyledFooter>
    );
  }
  
  export default Footer;
  