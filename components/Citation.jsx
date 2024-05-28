import style from './Citation.module.css'
export default  function Citation(props) {
  return<>
  <div className={Styles.Citation}>
    {props.children}
  </div>
  <div className={Styles.auteur}>
    - {props.auteur}
  </div>
  </>
  }
