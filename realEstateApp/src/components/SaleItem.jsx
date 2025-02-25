import React from 'react';

function SaleItem({ image, name, description, price }) {
  return (
    <div className="saleItem">
      <div className="saleItem-image" style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p className="description">{description}</p>
      <p className="price">${price}</p>
    </div>
  );
}

export default SaleItem;
