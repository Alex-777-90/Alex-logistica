import styled ,{keyframes} from "styled-components";

const animationTextExperience = keyframes`
    0% {
        transform: rotateY(-180deg);
    }
    100% {
        
        transform: rotateY(0deg);
    }
`

export const StyledExperience = styled.div`


background-color: rgba(5, 86, 153, 0.774);
border-radius:10px;

   .subTitle {
        margin-top: 40px; 
        text-align:center;
        padding-top:20px;
        color: whitesmoke;
        font-size:120%;
    } 
    .subTitle p {
        padding-top:20px;
    }

    article {
    
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        padding:20px;
        padding-bottom:25px;
    
       
    }
    
    .nameCompany {
        
        width:20%;
        border-radius:10px;
        text-align:center;
        padding:10px;
        padding-left:70px;
        display:flex;
        flex-direction:column;
        margin-left:-50px;
    
    }

    .nameCompany img {
        width:107px;
        padding:7px;
        border-radius:15px;
        cursor: pointer;
        transition:transform 1s;
      
    }

    .nameCompany img:hover{
        transform: scale(1.2);
    }
    
    .textExperience {
        margin-left:0px;
        width:100%;
        background-color: rgba(124, 175, 218, 0.774);
        padding:20px;
        border-radius:10px;
        font-size:110%;
        animation: ${animationTextExperience} 3s
    }

    .textExperience h3{
        font-size:120%;
        padding-bottom:5px;
        text-align:center;
        color: rgb(0, 0, 139);
    }
    .textExperience p {
        padding-bottom:5px;
        font-family: 'Oswald', sans-serif;
        font-weight:300;

    }

    .textExperience p strong {
        color: rgb(0, 0, 139);
        font-family: 'Oswald', sans-serif;
        font-weight:400;
    }

    .tags{
        color:#8B0000
    }

   .borderExperience{

      border: 1px solid rgb(5, 126, 126);
      width:55%;
      border-radius:10px;
      box-shadow: -6px 6px 40px rgb(5, 126, 126) ;
      background-color:rgba(2, 131, 131, 0.301);
      
   }

    input[type="button"] { display: none; }

    @media(max-width: 1070px) {

        article {
            flex-direction:column;
            padding:0px;
            padding-bottom:35px;
        }

        .nameCompany {
            width:60%;
            flex-direction: row;
            align-items: center;
            justify-content:center;
            padding-left:7px;
            margin-left:0px;
            margin-top:10px;
           
        }

        .nameCompany img {
            width:27%;
           
        }

        .borderExperience{
            width:77%;
            margin-top:10px;
          
        }

    }

    @media(max-width: 590px) {
            .textExperience {
                font-size:90%;
            }

            .nameCompany {
                width:70%;
            }
            .borderExperience{
                width:87%;
            }
            .subTitle {
                font-size:100%;
            }
        }

        @media(max-width: 459px) {
            .textExperience {
                font-size:85%;
            }

            .nameCompany {
                width:75%;
            }
            .borderExperience{
                width:90%;
            }
        }
`
