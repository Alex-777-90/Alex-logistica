import styled from "styled-components";

export const StyledFooter = styled.footer`
    
    margin: 0 auto;
    max-width: 1320px;
    background: linear-gradient(90deg,#0ba5a8 0%,#054379 100%);
    color: whitesmoke;
    border-radius:10px;


    .contato{
        margin-top: 30px;
        padding: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-style: dashed;
        border-color: #4169E1;
        border-bottom-width:0;
        border-left:0;
        border-right: 0;
        background: linear-gradient(90deg,#0999c5 0%,#044581 100%);
        border-top-left-radius:10px;
        border-top-right-radius:10px;
  
    }

    .contactInfos p {
        color: whitesmoke;
        font-size: 130%;
    }

    .contactInfos a {
        text-decoration: none;
        color: #00CED1;
        font-weight: 600;
    }


    .whatsapp a p{
        font-size: 500%;
        color: #00CED1;
        transition:transform 1s;

    }
    .whatsapp a p:hover{
        transform: scale(1.5);
    }

    @media(max-width: 481px) {

      .contactInfos p {
         font-size: 110%;
       }
       .whatsapp a p{
          font-size: 400%;
       } 

      .paragrafo {
        display: none;
      }
    }

    @media(max-width: 438px) {

      .contactInfos p {
          font-size: 100%;
        }
      .whatsapp a p{
          font-size: 300%;
        }
    
    }

    @media(max-width: 334px) {

      .contactInfos p {
        font-size: 90%;
        }
      .whatsapp a p{
        font-size: 250%;
        }
 
}

`