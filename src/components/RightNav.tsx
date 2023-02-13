import React from 'react';
import styled from 'styled-components';

interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean | null | undefined;
}

const Ul = styled.ul<MobileNavProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    padding: 18px 10px;
    text-decoration: none;
    color: whitesmoke;
    font-size: 130%;
  }

  a:hover{
    color: #00008B;
  }

  @media (max-width: 820px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }:{ open:boolean | null | undefined}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: #fff;
      
    }
  }
`


const RightNav: React.FC<MobileNavProps> = ({ open }) => {
 

  return (
    <Ul open = {open}>
        <a href="#sobre">Sobre</a>
        <a href="#portofolio">Experiência</a>
        <a href="#tecnologias">Dashboards</a>
        <a href="#contato">Contato</a>
    </Ul>
  )
}

export default RightNav;