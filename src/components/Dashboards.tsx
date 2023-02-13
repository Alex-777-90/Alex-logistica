import {StyledDashboard} from "./DashboardsStyled";
import DataBase from "../data/Dashboards.json";
import {useEffect ,useState , FormEvent ,MouseEvent,useRef} from "react";
import {FaAngleLeft ,FaAngleRight} from "react-icons/fa"



const Dashboards  = () => {

    const [data, setData] = useState<any>([]);
    const carousel = useRef<any>(null);

    useEffect(() => {

        const videojson = DataBase
        setData(videojson)
      
    },[])

    
      const handleLeftClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
       
      };
    
      const handleRightClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        console.log(carousel.current)

      };

    if (!data || !data.length) return null;
     
      console.log(data)

    return (
        <StyledDashboard>
            <div className="buttons1" >
                <button onClick={handleLeftClick} >
                    <FaAngleLeft/>
                </button>
            </div>
           
            <div className="slide" ref={carousel}>
                {data.map((item:any,index:any) =>{
                    const {id,nameDashboard,description,dashboardVideo} = item
                    const pathVideos = `http://localhost:3000/videos/${dashboardVideo}`

                    return(
                        <div className="card"  key={id}>
                            <p>{nameDashboard}</p>
                              <video controls muted autoPlay loop id={`video-${index}`}>
                                  <source src={ pathVideos }/>
                              </video>
                        </div>
                    )
                })} 
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

