import React from "react";


function CategoryFilter({ categories, updateSelectedCategory, selectedCategory }) {
 const categoryButtonsArray = categories.map((category) => {
  const className = category === selectedCategory ? "selected": null
  function handleClick() {
    updateSelectedCategory(category)
  }
  return (
    <button
      key={category}
      onClick={handleClick}
      className={className}
    >
      {category}
    </button>
     
  )
 })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtonsArray}
    </div>
  );
}

export default CategoryFilter;
