import React from 'react'

const ProductList = () => {
  return (
    <section>      
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
    </section>
  )
}

export default ProductList
