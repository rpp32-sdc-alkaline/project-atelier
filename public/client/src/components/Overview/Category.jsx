import React from 'react';

const Category = (props) => {
var upperCase = props.category.toUpperCase()
  return (
    <h4 className="category">{upperCase}</h4>
  )
}

export default Category;