
import {StyledExperience} from "./ExperienceStyled";
import DataBaseExperience from "../data/Experience.json";
import {useEffect ,useState ,MouseEvent} from "react";


const Experience = () => {

    const [data,setData] =useState<any>([])
    const [index, setIndex] = useState<any>();
    const [isHidden, setIsHidden] = useState<boolean>(true);


    useEffect(() => {
        
        const Experiencejson = DataBaseExperience
        setData(Experiencejson)
      
         
    },[])

    console.log(index)
    

    return (
        <StyledExperience>
            <div className='subTitle' >
                <h2>Experiências</h2>
                <p>Clique no logo da empresa para mais detalhes</p>
            </div>
            {data && 
            <article>
                <div className="nameCompany " > 
                    {data.map((item:any,index:any) => {

                        const handleclick = (event:MouseEvent) => {
                            event.preventDefault();
                            setIndex(index)
                            setIsHidden(false)
                        }

                            const pathImage = `http://localhost:3000/image/${item.companyImage}`
                            // console.log(pathImage)
                            console.log(isHidden)
                 
                            return (
                                <img id={index} src={pathImage} 
                                    alt={item.companyImage} 
                                    key={item.id} 
                                    onClick={handleclick}
                                />
                            )
                    })}
                </div>
                {data[0] && isHidden == true &&
              <div className="borderExperience">
                    <div className="textExperience" id="standardClass" key={data[0].id} >
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
                {index == 0 && 
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
               {index == 1 && 
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
               {index == 2 && 
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
