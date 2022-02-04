import React from "react";
import { Wrapper, Title, Array } from "./ShoppingList.styled";
import Checkbox from "../../shared/checkbox";

function ShoppingList({ title, products, onToggle, themes }) {
  return (
    <Wrapper themes={themes}>
      <Title>{title}:</Title>
      <Array>
        {products.map((product) => (
          <Checkbox
            themes={themes}
            key={product._id}
            value={product.checked}
            title={product.name}
            onClick={() => onToggle(product._id, product.checked, product.name)}
          />
        ))}
      </Array>
    </Wrapper>
  );
}

export default ShoppingList;
