import React from 'react';
import SaleItem from './SaleItem';
import { Data } from '../helpers/Data';
import '../styles/Sale.css';

export const Sale = () => {
  return (
    <div className="sale">
      <h1 className="saleTitle">Real Estate Listings</h1>
      <div className="saleList">
        {Data.map((item, key) => (
          <SaleItem
            key={key}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
