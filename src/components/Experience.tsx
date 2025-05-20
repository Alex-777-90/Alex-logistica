import {StyledExperience} from "./ExperienceStyled";
import DataBaseExperience from "../data/Experience.json";
import {useEffect ,useState,MouseEvent} from "react";

import POPtrade from "../image/pop-trade-marketing.png"
import tecnoset from "../image/tecnoset.png"
import globalHitss from "../image/globalhitss.jpg"
import kidZoneWorld from "../image/kidsZone.png"



const Experience = () => {

    const [data,setData] =useState<any>([])
    const [index, setIndex] = useState<number>();
    const [isHidden, setIsHidden] = useState<boolean>(true);

    

    useEffect(() => {
        const Experiencejson = DataBaseExperience
        setData(Experiencejson)
    },[])


    const handleclick = (event:MouseEvent) => {
        event.preventDefault();
        const idImage = parseInt((event.target as HTMLImageElement).id)
        setIndex(idImage)
        setIsHidden(false)
       
    }


    return (
        <StyledExperience id="portofolio">
            <div className='subTitle' >
                <h2>Experiências</h2>
                <p>Clique no logo da empresa para mais detalhes</p>
            </div>
            {data && 
            <article>
                <div className="nameCompany "  > 

                        <img id="3" src={kidZoneWorld} 
                            alt={kidZoneWorld}  
                            onClick={handleclick}
                         />
    
                        <img id="0" src={POPtrade} 
                            alt={POPtrade} 
                            onClick={handleclick}
                         />
                        <img id="1" src={tecnoset} 
                            alt={tecnoset} 
                            onClick={handleclick}
                         />

                        <img id="2" src={globalHitss} 
                            alt={globalHitss}  
                            onClick={handleclick}
                         />
                       
                </div>
                {data[3] && isHidden === true &&
              <div className="borderExperience">
                    <div className="textExperience" id="standardClass" key={data[3].id} >
                            <h3>{data[3].company}</h3>
                            <p><strong>Cargo:</strong> {data[3].job}</p>
                            <p><strong>Periodo:</strong> {data[3].time}</p>
                            <p><strong>Descrição:</strong></p>
                            <p>{data[3].description}</p>
                            <p><strong>Competências:</strong></p>
                            <p className="tags">{data[3].Skills}</p>
                    </div>
                </div>
                
                }

              {index === 3 && 
               <div className="borderExperience">
                    <div className="textExperience" key={data[3].id} >
                        <h3>{data[3].company}</h3>
                            <p><strong>Cargo:</strong> {data[3].job}</p>
                            <p><strong>Periodo:</strong> {data[3].time}</p>
                            <p><strong>Descrição:</strong></p>
                            <p>{data[3].description}</p>
                            <p><strong>Competências:</strong></p>
                            <p className="tags">{data[3].Skills}</p>
                    </div>
                </div>
               }  
                {index === 0 && 
                <div className="borderExperience">
                    <div className="textExperience" key={data[0].id} >
                        <h3>{data[0].company}</h3>
                            <p><strong>Cargo:</strong> {data[0].job}</p>
                            <p><strong>Periodo:</strong> {data[0].time}</p>
                            <p><strong>Descrição:</strong></p>
                            <p>{data[0].description}</p>
                            <p><strong>Competências:</strong></p>
                            <p className="tags">{data[0].Skills}</p>
                    </div>
                </div>
               }
               {index === 1 && 
               <div className="borderExperience">
                    <div className="textExperience" key={data[1].id} >
                        <h3>{data[1].company}</h3>
                            <p><strong>Cargo:</strong> {data[1].job}</p>
                            <p><strong>Periodo:</strong> {data[1].time}</p>
                            <p><strong>Descrição:</strong></p>
                            <p>{data[1].description}</p>
                            <p><strong>Competências:</strong></p>
                            <p className="tags">{data[1].Skills}</p>
                    </div>
                </div>
               }
               {index === 2 && 
               <div className="borderExperience">
                    <div className="textExperience" key={data[2].id} >
                        <h3>{data[2].company}</h3>
                            <p><strong>Cargo:</strong> {data[2].job}</p>
                            <p><strong>Periodo:</strong> {data[2].time}</p>
                            <p><strong>Descrição:</strong></p>
                            <p>{data[2].description}</p>
                            <p><strong>Competências:</strong></p>
                            <p className="tags">{data[2].Skills}</p>
                    </div>
                </div>
               }

            </article>
            }
        </StyledExperience>
    );
    
}

export default Experience;
