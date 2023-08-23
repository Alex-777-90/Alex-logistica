import styled from "styled-components";

export const StyledDashboard = styled.section `

  background-color: rgba(5, 86, 153, 0.774);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:40px;
  padding-bottom:30px;
  border-radius:10px;
  padding-top:20px;
  height:650px;


  .slide {
    overflow: hidden;
    flex: 1;
    
  }

  .vertical-carousel {
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out; /* Adicione uma transição suave */
  }
 
  .card {
    /* background-color: red; */
    text-align:center;
    height:500px;
  }

  .card img {
    max-width: 100%;
    height:479px;
  }

  .card p {
    color:white;

  }

  .buttons1,
  .buttons2 {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  button {
    background: none;
    color:whitesmoke;
    border: none;
    cursor: pointer;
    font-size: 24px;
  }

  @media(max-width: 790px) {
   
    .card img {
      width: 80%
    }
  }
 
  @media(max-width: 570px) {
   
   .card img {
     width: 90%
   }
 }

 @media(max-width: 470px) {

  height:450px;

  .card {
    height:300px;
  }
   .card img {
     width: 90%;
     height:279px;
   }
 }


`