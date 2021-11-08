import {useParams} from 'react-router-dom';
import data from "../Database/database.json"
import style from './Detail.module.css'
import Carrousel from "../carousel/Carousel"
export default function Detail (){
    let {id} = useParams()
    let dat = data.find(e=> id === e.name)

    if (dat){
     return (<div className={style.container}>
         <h3>Charge: {dat.charge}</h3>
         <div className={style.subContainer}>
             
         <img src={dat.main_img} alt="data.name"/>
         
        <h3>Project Name: {dat.name}</h3>
        <div className={style.thirdContainer}>
        {dat.description_front?<> <p> <strong>What i do in the front?:<br/></strong>{dat.description_front}</p><Carrousel/></>:null}
        {dat.description_back?<><p><strong>What i do in the Back?:<br/></strong>{dat.description_back}</p><Carrousel/></>:null}
        </div>
        </div>
    </div>)
    }else {
      return  (<div className={style.container}>
            <h1>Not Found</h1>
            </div>)
    }
     
   
}