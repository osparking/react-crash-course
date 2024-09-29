import React from 'react'

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
        {}
      </ListGroup>

    </div>);
}

export default Product
