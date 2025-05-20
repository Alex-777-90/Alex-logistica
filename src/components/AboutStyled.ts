import styled ,{keyframes} from "styled-components";


const animationButtonAbout = keyframes`
    0% {
        transform: rotateZ(10deg);
    }
    100% {
        
        transform: rotateZ(-10deg);
    }
`

export const StyledAbout = styled.div`
    
    .subTitle {
        margin-top: 62px; 
        text-align:center;
        background-color: rgba(5, 86, 153, 0.774);
        padding-top:20px;
        color: whitesmoke;
        font-size:120%;
    
    } 
    
    article{       
        margin-top: 0px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-left: 100px;
        padding-right: 100px;
        padding-bottom:30px;
        justify-content: space-around;
        color: whitesmoke;
        background-color: rgba(5, 86, 153, 0.774);
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
        
    }
 
    .aboutImage{
        width: 370px;
        margin-top:-37px;
        background-color: rgba(5, 86, 153, 0);
        margin-left:50px;
        padding-left:50px;
        padding-top:30px;
        padding-bottom:30px;
    }
    .aboutImage img{
        width: 77%;
        border-radius: 300px;
        -webkit-box-shadow: 9px 19px 36px -16px rgba(0, 0, 0, 0.54);
        -moz-box-shadow: 9px 19px 36px -16px rgba(0, 0, 0, 0.54);
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.95); /* sombra mais suave e forte */
    }

    .textAbout{
        width: 50%;
        padding: 10px;
        background-color: rgba(5, 86, 153, 0);
        padding-top:20px;
        margin-left:-70px;
        
    }
    .textAbout p{
        font-size: 110%;
        font-family: 'Oswald', sans-serif;
        font-weight:300;
    }
    .textAbout strong{
        color: rgb(0, 0, 139);
        font-size: 120%;
        font-family: 'Oswald', sans-serif;
        font-weight:500;
       
     }

     button{
         background: linear-gradient(90deg,#0b0377 0%,#0cafe0 100%);
         padding:10px;
         padding-left:20px;
         padding-right:20px;
         border-radius:10px;
         cursor: pointer;
         color:white;
         border: 1px solid lightgreen;
         margin-top:20px;
     }

     button:hover{
        background: linear-gradient(90deg,#0cafe0 0%,#bfe3ee 100%);
        color:#0b0377;
        font-weight: bold;
        animation:${animationButtonAbout} 1s
     }
     .FaDownload{
       margin-right:10px;
     }

     @media(max-width: 1000px) {
        article{
            padding-left: 0;
            padding-right: 0;
       }
       .textAbout{
            width: 100%;
            margin-top: 0px;
            padding-top:0px;
            padding-left:50px;
            padding-right:50px;
            margin-left:0px;
         
        }

       .aboutImage{
            width: 100%;
            margin-top: 30px;
            text-align: center;
            margin-left:0px;
            padding-left:0px;
            padding-top:0px;
            padding-bottom:0px;
          
        }
  
       .aboutImage img {
           width: 25%;
        }
     }

     @media(max-width: 600px) {
        .textAbout p {
           font-size:90%;
        }
        .textAbout{
            width: 100%;
            padding-left:20px;
            padding-right:20px;
        }
        .subTitle {
            font-size:100%;
        }
        .aboutImage img {
           width: 30%;
        }
     }

`