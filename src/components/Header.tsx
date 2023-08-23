import {StyledHeader} from "./HeaderStyled"
import Burger from './Burger';

const Header = () => {
  return (
    <StyledHeader>
           <div className="name">
               <h1 className="name1">Alex Lima </h1>
               <h1 className="name2">Alex Lima</h1>
           </div>
           <Burger open={true || false} />
    </StyledHeader>
  );
}

export default Header;