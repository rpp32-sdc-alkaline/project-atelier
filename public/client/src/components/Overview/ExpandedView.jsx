import React from 'react';

var ExpandedView = (props) => {
  if(!props.show) {
    return null;
  }
  return <div>expanded</div>
}

export default ExpandedView;