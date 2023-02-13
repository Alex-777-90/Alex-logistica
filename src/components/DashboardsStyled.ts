import styled from "styled-components";

export const StyledDashboard = styled.div`

background-color: rgba(5, 86, 153, 0.774);
display: flex;
justify-content: center;
align-items: center;
margin-top:40px;
padding-bottom:30px;
border-radius:10px;


.carousel{
   /* background-color:green; */
   width:71%;
   display: flex;
   overflow-x: auto;
   scroll-behavior: smooth;
   
}
.carousel::-webkit-scrollbar {
  display: none;
}
 
.item{
   /* background-color:lightblue; */
   /* width:2900px */
   margin:4px;
   padding:5px;
   border-radius:10px;
   flex: none;
   
}

.item p {
   color: white;
   padding: 15px;
   text-align:center;
   font-size:120%;
}

.video {
   /* background-color:green */
   /* width:300px; */
   
}

video{
   width: 870px;
   height:480px;
   /* width:10px; */
   object-fit:cover;
   border-radius:10px;
}

button {
   cursor: pointer;
   font-size:217%;
   color:blue;
   background-color: transparent;
   border:none;
   margin-top:65px;
}

`
