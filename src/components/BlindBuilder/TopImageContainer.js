import React from "react"
import Checkmark from './Checkmark'


const TopImageContainer = (props) => {
  if( props.primaryImage == undefined ) return null;
  return (
    <div class="Control--imagebutton__container__top">
      <div class="Control--imagebutton__container__top__wrap">
          <div class="Control--imagebutton__container__top__wrap__inner"><img src={props.primaryImage} /></div>
      </div>
      <img class="child-safe-logo" src={props.childSafeImage} />
    </div>
  )
}

export default TopImageContainer;
