//import carousel from react-bootstrap 
import Carousel from 'react-bootstrap/Carousel'
import style from "./Carousel.module.css"
export default function Carrousel({data}) {
  console.log(data)
 return(
    <Carousel className="w-50 h-50">
    {data?.map(e=>{ 
        return(
            <Carousel.Item>
                <img
                className="d-block"
                id={style.item}
                src={e}
                alt="First slide"
                />
            </Carousel.Item>
        )
    })}
  </Carousel>

 )
}