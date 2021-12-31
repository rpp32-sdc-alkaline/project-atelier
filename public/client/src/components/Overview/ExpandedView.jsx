import React from 'react';

var ExpandedView = (props) => {

  if(!props.isOpen) {
    return null
  }

  return (
    <div className={"modal-wrapper"}>
      <div className={"modal-backdrop"} />
      <div className={"modal-box"}>
      <img className={"modal-image"} src={props.image}/>
      </div>
    </div>
  )
}

export default ExpandedView;