import {useParams} from 'react-router-dom';
import data from "../Database/database.json"
import style from './Detail.module.css'
export default function Detail (){
    let {id} = useParams()
    let dat = data.find(e=> id === e.name)

    if (dat){
     return (<div className={style.container}>
         <h3>Charge: {dat.charge}</h3>
         <div className={style.subContainer}>
         <img src={dat.main_img} alt="data.name"/>
         <div className={style.thirdContnainer}>
        <h3>Project Name: {dat.name}</h3>
        
        {dat.description_front?<><h3 >* What i do in the front?:</h3> <p>{dat.description_front}</p></>:null}
        {dat.description_back?<><h3 >* What i do in the Back?:</h3> <p>{dat.description_back}</p></>:null}
        </div>
        </div>
    </div>)
    }else {
      return  (<div className={style.container}>
            <h1>Not Found</h1>
            </div>)
    }
     
   
}