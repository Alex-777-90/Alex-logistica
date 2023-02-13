import {StyledFooter} from "./FooterStyled";

import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
    return (
      <StyledFooter>
           <article className ="contato" >
                 <div className="contactInfos">
                        <p><strong>Nome:</strong> Alex Lima Souza dos Santos</p>
                        <p><strong>Endereço:</strong> São Paulo -SP</p>
                        <p><strong>Telefone:</strong> <a href="">(11) 9 6647-1637</a></p>
                        <p><strong>Email:</strong> 
                          alxnvn@yahoo.com.br</p>
                  </div>
                  <div className="whatsapp">
                      <p>Clique Aqui</p>
                      <a target="_blank"
                          href="https://api.whatsapp.com/send?phone=5511966471937">
                          <p><FaWhatsappSquare/></p>
                      </a>
                  </div>
            </article>
      </StyledFooter>
    );
  }
  
  export default Footer;