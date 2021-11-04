import style from './PortFolios.module.css'
import data from "../Database/database.json"
import Card from "../Card/Card"
export default function PortFolios () {
    return (
       <div id="projects" className={style.container}>
              <h2>Projects</h2>
              <p> These are my projects, you can see my Full Stack, Backend and Frontend projects here.</p>
              <div className={style.grid}>
              {data? 
              data.map((e, i) => {
                  if(e){
                    return <div className={style.iCard} key={i}> <Card img={e.main_img}
                         name={e.name}
                         index ={i}/>
                         </div>
                  } else {
                      return []
                  }
              }):
              <h1>Cargando...</h1>
              }
              </div>
       </div>
    )
}