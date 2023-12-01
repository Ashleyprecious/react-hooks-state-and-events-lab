import React, { useState } from 'react';

const Item = ({ itemName }) => {
  const [inCart, setInCart] = useState(false);

  const handleToggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {itemName}
      <button onClick={handleToggleCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item;
