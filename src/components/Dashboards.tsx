import {StyledDashboard} from "./DashboardsStyled";
import {MouseEvent,useRef} from "react";
import {FaAngleLeft ,FaAngleRight} from "react-icons/fa";
import frota from "../videos/dashboardFrotas1.mp4";
import manutencao from "../videos/dashboardManutencao3.mp4";
import movimentacao from "../videos/dashboardMovimentacao1.mp4";
import coleta from "../videos/coleta.mp4"
import entregas from "../videos/entregas.mp4"
import devolucao from "../videos/devolução.mp4"
import { useTranslation } from "react-i18next";



const Dashboards  = () => {

    const { t } = useTranslation();

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
        <>
        <StyledDashboard id="tecnologias">
            <div className="buttons1" >
                <button onClick={handleLeftClick} >
                    <FaAngleLeft/>
                </button>
            </div>
           
            <div className="slide" ref={carousel}>
             
                 <div className="card" >
                        <p>{t("dashboard_frota")}</p>
                        <video controls muted autoPlay loop >
                            <source src={ frota }/>
                        </video>
                 </div>

                 <div className="card" >
                       <p>{t("dashboard_coleta")}</p>
                        <video controls muted autoPlay loop >
                            <source src={ coleta }/>
                        </video>
                 </div>

                 <div className="card" >
                       <p>{t("dashboard_entregas")}</p>
                        <video controls muted autoPlay loop >
                            <source src={ entregas }/>
                        </video>
                 </div>

                 <div className="card" >
                       <p>{t("dashboard_devolucao")}</p>
                        <video controls muted autoPlay loop >
                            <source src={ devolucao }/>
                        </video>
                 </div>

                 <div className="card" >
                       <p>{t("dashboard_movimentacao")}</p>
                        <video controls muted autoPlay loop >
                            <source src={ movimentacao }/>
                        </video>
                 </div>
                 
                 <div className="card" >
                        <p>{t("dashboard_manutencao")}</p>
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
        
        <p className="disclaimer">
           {t("dashboard_Obs")}
        </p>
        </>
    );
}

export default Dashboards;

