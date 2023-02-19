import {StyledDashboard} from "./DashboardsStyled";
import {MouseEvent,useRef} from "react";
import {FaAngleLeft ,FaAngleRight} from "react-icons/fa";
import frota from "../videos/dashboardFrotas1.mp4";
import manutencao from "../videos/dashboardManutencao3.mp4";
import movimentacao from "../videos/dashboardMovimentacao1.mp4";


const Dashboards  = () => {

    const carousel = useRef<any>(null);
    
      const handleLeftClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
       
      };
    
      const handleRightClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        carousel.current.scrollLeft += carousel.current.offsetWidth;

      };

 

    return (
        <StyledDashboard id="tecnologias">
            <div className="buttons1" >
                <button onClick={handleLeftClick} >
                    <FaAngleLeft/>
                </button>
            </div>
           
            <div className="slide" ref={carousel}>
             
                 <div className="card" >
                    <p>Controle de Frota e multas</p>
                        <video controls muted autoPlay loop >
                            <source src={ frota }/>
                        </video>
                 </div>
                 <div className="card" >
                    <p>Controle de movimentações onboarding e offboarding</p>
                        <video controls muted autoPlay loop >
                            <source src={ movimentacao }/>
                        </video>
                 </div>
                 <div className="card" >
                    <p>Controle de aparelhos em manutenção</p>
                        <video controls muted autoPlay loop >
                            <source src={ manutencao }/>
                        </video>
                 </div>
            </div>

            <div className="buttons2">
                <button onClick={handleRightClick} >
                    <FaAngleRight/>
                </button>
            </div>
        </StyledDashboard>
    );
}

export default Dashboards;

