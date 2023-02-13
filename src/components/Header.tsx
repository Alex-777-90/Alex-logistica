import {StyledHeader} from "./HeaderStyled"
import Burger from './Burger';

const Header = () => {
  return (
    <StyledHeader>
           <div className="name">
               <h1>Alex Lima Souza dos Santos</h1>
           </div>
           <Burger open={true || false} />
    </StyledHeader>
  );
}

export default Header;