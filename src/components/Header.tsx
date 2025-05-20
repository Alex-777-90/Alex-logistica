import {StyledHeader} from "./HeaderStyled"
import Burger from './Burger';
import usa from "../image/estados-unidos.png"
import brasil from "../image/brasil.png"
import { useTranslation } from "react-i18next";

const Header = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <StyledHeader>
           <div className="name">
               <h1 className="name1">Alex Lima 
                <img src={usa} alt="Inglês" onClick={() => changeLanguage("en")} />
                <img src={brasil} alt="Português" onClick={() => changeLanguage("pt")} />
               </h1>
               <h1 className="name2">Alex Lima</h1>
           </div>
           <Burger open={true || false} />
    </StyledHeader>
  );
}

export default Header;