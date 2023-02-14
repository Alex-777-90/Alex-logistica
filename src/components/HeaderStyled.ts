import styled from "styled-components";

export const StyledHeader= styled.header`

  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg,#0999c5 0%,#044581 100%);
  -webkit-box-shadow: 9px 19px 36px -16px rgba(0, 0, 0, 0.54);
        -moz-box-shadow: 9px 19px 36px -16px rgba(0, 0, 0, 0.54);
        box-shadow: 9px 19px 36px -16px rgba(0, 0, 0, 0.54);
  color: whitesmoke;
  height: 70px;
  z-index: 1;
  align-items: center;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  position: fixed;
  left:0%;
  top: 0%;
  width: 100%;
  z-index: 999px;

 .name2{
   display:none;
 }

.name h1{
  font-size:170%;
  margin-left: 20px;
}
.links{
  margin-right: 20px;
}
.links a {
  text-decoration: none;
  color: whitesmoke;
  padding-left: 45px;
  font-size: 130%;
 
}

.links a:hover,
.links2 a:hover {
  color: #00008B;
}

.links2{
  background-color: rgb(5, 51, 5);
  text-align: center;
  padding-bottom: 10px;
  margin: 0 auto;
  display: none;
  z-index: 1;
}

.links2 a{
  text-decoration: none;
  color: whitesmoke;
  padding-left: 17px;
  font-size: 110%;

}

@media(max-width: 438px) {
  .name2{
     display:block;
  }

  .name1{
    display:none;
  }
}

`