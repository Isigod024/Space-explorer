import style from './Citation.module.css'
export default  function Citation(props) {
  return<>
  <div className={style.Citation}>
    {props.children}
  </div>
  <div className={style.auteur}>
    - {props.auteur}
  </div>
  </>
  }
