import React, { useState } from 'react';

function ShoppingList(props) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = props.items.filter((item) => {
    return selectedCategory === '' || item.category === selectedCategory;
  });

  return (
    <div>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// import React from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter">
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {items.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;


