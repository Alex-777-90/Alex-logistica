import { StyledDashboard } from "./CertificadosStyled";
import { MouseEvent, useRef } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa"; // Usando FaAngleUp e FaAngleDown para as setas
import diploma from "../videos/facul_certificado.jpg"
import excel from "../videos/excel_certificado.jpg";
import powerbi from "../videos/powerBI_certificado.jpg";
import powerbi2 from "../videos/powerBI_certificado2.jpg";
import sql from "../videos/sql_certificado.jpg"
import sql2 from "../videos/sql_certificado2.jpg"


const Certificate = () => {
  const carousel = useRef<any>(null);

  const handleUpClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    carousel.current.scrollBy(0, -carousel.current.offsetHeight);
  };

  const handleDownClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    carousel.current.scrollBy(0, carousel.current.offsetHeight);
  };

  return (
    <StyledDashboard id="certificate">
       <div className="buttons1">
           <button onClick={handleUpClick}>
              <FaAngleUp />
           </button>
       </div>
      <div className="slide" ref={carousel}>
         {/* Estilo para criar um carrossel vertical */}
         <div className="vertical-carousel">
            <div className="card">
                <p>Diploma da faculdade curso logística</p>
                <img src={diploma} alt="Diploma da faculdade curso logística"/>
            </div>
            <div className="card">
                <p>Certificado de conclusão curso Excel</p>
                <img src={excel} alt="Certificado de conclusão curso Excel"/>
            </div>

            <div className="card">
                <p>Certficado curso de SQL</p>
                <img src={sql} alt="Certficado curso de sql"/>
            </div>

            <div className="card">
                <p>Certficado curso de ETL com Python e SQL</p>
                <img src={sql2} alt="Certficado curso de sql"/>
            </div>
            
            <div className="card">
                <p>Certficado curso power BI intensivo</p>
                <img src={powerbi} alt="Certficado curso power BI intensivo"/>
            </div>
            <div className="card">
                <p>Certficado curso power BI intensivo</p>
                <img src={powerbi2} alt="Certficado curso power BI intensivo"/>
            </div>
        </div>
      </div>

       <div className="buttons2">
          <button onClick={handleDownClick}>
             <FaAngleDown />
          </button>
       </div>
    </StyledDashboard>
  );
};

export default Certificate;