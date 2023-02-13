import styled from "styled-components";

export const StyledDashboard = styled.section`

background-color: rgba(5, 86, 153, 0.774);
display: flex;
justify-content: center;
align-items: center;
margin-top:40px;
padding-bottom:30px;
border-radius:10px;
padding-top:20px;


.slide {
   display: flex;
   width:900px;
   justify-content:space-between;
   overflow-x: scroll;
   scroll-behavior: smooth;
   border-radius:10px;
}

.slide::-webkit-scrollbar {
  display: none;
}


.card p {
   color: white;
   padding: 15px;
   text-align:center;
   font-size:120%;
}

.card video {
  width: 900px;
  object-fit:cover;
  height:490px;
  background-size:cover;
  border-radius:10px;
}


button {
   cursor: pointer;
   font-size:217%;
   color:blue;
   background-color: transparent;
   border:none;
   margin-top:30px;
}

@media(max-width: 1100px) {
   .slide {
      width:700px;
   }
   .card video {
      width:700px;
      height:390px;
   }
}

@media(max-width: 830px) {
   .slide {
      width:600px;
   }
   .card video {
      width:600px;
      height:340px;
   }
}

@media(max-width: 727px) {
   .slide {
      width:500px;
   }
   .card video {
      width:500px;
      height:300px;
   }
}

@media(max-width: 622px) {
   .slide {
      width:400px;
   }
   .card video {
      width:400px;
      height:290px;
   }
   button {
      font-size:190%;
   }
}

@media(max-width: 500px) {
   .slide {
      width:350px;
   }
   .card video {
      width:350px;
      height:200px;
   }
   .card p {
      font-size:80%;
   }
   button {
      font-size:190%;
   }
}

@media(max-width: 444px) {
   .slide {
      width:300px;
   }
   .card video {
      width:300px;
      height:170px;
   }
   .card p {
      font-size:70%;
   }
   button {
      font-size:190%;
   }
}

@media(max-width: 388px) {
   .slide {
      width:250px;
   }
   .card video {
      width:250px;
      height:140px;
   }
   .card p {
      font-size:70%;
   }
   button {
      font-size:190%;
   }
}

@media(max-width: 335px) {
   .slide {
      width:230px;
   }
   .card video {
      width:230px;
      height:140px;
   }
   .card p {
      font-size:60%;
   }
   button {
      font-size:190%;
   }
}

@media(max-width: 297px) {
   .slide {
      width:220px;
   }
   .card video {
      width:220px;
      height:140px;
   }
   .card p {
      font-size:55%;
   }
   button {
      font-size:180%;
   }
}

`
