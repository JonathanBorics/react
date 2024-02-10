import React, { useState } from 'react'; 

function Foodscard({showFood,setShowFood}) {
  const [products, setProducts] = useState([
    { name: 'Cheese Burger', price: '6$', image: './pic/burger1.jpg' },
  { name: 'Chicken Burger Deluxe', price: '8$', image: './pic/burger2.jpg' },
  { name: 'Veggie Supreme Burger', price: '7$', image: './pic/burger3.jpg' },
  { name: 'Spicy BBQ Burger', price: '4$', image: './pic/burger4.jpg' },
  { name: 'Mushroom Swiss Burger', price: '5$', image: './pic/burger5.jpg' },
  { name: 'Avocado Ranch Burger', price: '6$', image: './pic/burger6.jpg' },
  { name: 'Bacon Blue Cheese Burger', price: '7$', image: './pic/burger7.jpg' },
  { name: 'Turkey Burger', price: '9$', image: './pic/burger8.jpg' },
  { name: 'Fish Fillet Burger', price: '3$', image: './pic/burger9.jpg' },
  { name: 'Buffalo Chicken Burger', price: '4$', image: './pic/burger10.jpg' },
  { name: 'Greek Lamb Burger', price: '2$', image: './pic/burger11.jpg' },
  { name: 'Jalapeno Popper Burger', price: '3$', image: './pic/burger12.jpg' },
  { name: 'Pulled Pork Burger', price: '5$', image: './pic/burger13.jpg' },
  { name: 'Teriyaki Pineapple Burger', price: '4$', image: './pic/burger14.jpg' },
  { name: 'Breakfast Burger', price: '6$', image: './pic/burger15.jpg' },
  { name: 'Portobello Burger', price: '7$', image: './pic/burger16.jpg' },
  { name: 'BBQ Ranch Burger', price: '6$', image: './pic/burger17.jpg' },
  { name: 'California Turkey Burger', price: '5$', image: './pic/burger18.jpg' },
  { name: 'Black Bean Burger', price: '4$', image: './pic/burger19.jpg' },
  { name: 'Double Bacon Cheeseburger', price: '8$', image: './pic/burger20.jpg' }
  ]);

  return (
    <>
  {showFood &&  <div className='car'>
      {products.map((product, index) => (
        <div className='cards' key={index}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <span className="price">{product.price}</span>
        </div>
      ))}
       <button onClick={()=>{setShowFood(!showFood)}}>itt is be lehet csukni</button>

    </div>}
          </>
  );
}

export default Foodscard;






