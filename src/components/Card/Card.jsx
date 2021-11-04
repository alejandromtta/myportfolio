import style from "./Card.module.css"
import {NavLink as Link} from "react-router-dom"
export default function Card ({img, name, index}){
    return(
        <Link to={`/${name}`} className={style.card}>
        <div className={style.containerCard} key ={index}>
            <img className={style.img} src={img} alt={name}/>
            <h3 className={style.name}>{name}</h3>
        </div>
        </Link>
    )
}