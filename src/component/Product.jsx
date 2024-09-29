import React from 'react'
import {ListGroup} from "react-bootstrap"

const Product = () => {
  const products = [{
      id: 1,
      name: "보통비누",
      price: 3800,
      description: "정상적으로 제조 및 건조된 제품",
    },
    {
      id: 2,
      name: "메주비누",
      price: 3700,
      description: "비자나무 향이 약간 강한 제품",
    },
    {
      id: 3,
      name: "백설공주",
      price: 3500,
      description: "정상적으로 제조 및 건조 온도 다소 부족한 제품",
    },
  ];

  return (
    <div className='text-success'>
      <ListGroup>
        {products.map((product, index) => (
          <ListGroup.Item key={index}>
            <h4>{product.name}</h4>
            <p>가격: ₩{product.price}</p>
            <p>설명: {product.description}</p>
            <hr />
          </ListGroup.Item>    
        ))}
      </ListGroup>

    </div>);
}

export default Product
