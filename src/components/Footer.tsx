import {StyledFooter} from "./FooterStyled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {

  const { t } = useTranslation();

    return (
      <StyledFooter id="contato">
           <article className ="contato" >
                 <div className="contactInfos">
                       <p><strong>{t("footer_name")}</strong> Alex Lima Souza dos Santos</p>
                       <p><strong>{t("footer_address")}</strong> São Paulo -SP</p>
                       <p><strong>{t("footer_phone")}</strong></p><p>(11) 9 6647-1637</p>
                       <p><strong>{t("footer_email")}</strong> alxnvn@yahoo.com.br</p>
                  </div>
                  <div className="whatsapp">
                      <p className="paragrafo">{t("footer_click_here")}</p>
                      <Link target="_blank" rel="noopener noreferrer" 
                             to="https://api.whatsapp.com/send?phone=5511966471637">
                            <p><FaWhatsappSquare/></p>
                      </Link>
                  </div>
            </article>
      </StyledFooter>
    );
  }
  
  export default Footer;
  