import style from "./Cv.module.css"

export default function Cv() {
  return (
    <div id="cv" className={style.container}>
      <h2>My Curriculum Vitae</h2>
      <p>You can View or Download it.</p>

      <iframe className={style.iframe}  title="Cv Ingles Alejandro Motta Full Stack Js" src="https://es.scribd.com/embeds/537255358/content?start_page=1&view_mode=scroll&access_key=key-dxEuX7NeN4PVgSIbpyO8" data-auto-height="false" data-aspect-ratio="0.7066666666666667" scrolling="no" id="doc_74431" frameborder="0"></iframe>
     </div>
    );
}



