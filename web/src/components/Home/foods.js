
function Foodscard() {
  
  const products = ([
    { name: 'Cheese Burger', price: '600 din', image: './pic/burger1.jpg' },
  { name: 'Chicken Burger Deluxe', price: '620 din', image: './pic/burger2.jpg' },
  { name: 'Veggie Supreme Burger', price: '710 din', image: './pic/burger3.jpg' },
  { name: 'Spicy BBQ Burger', price: '430 din', image: './pic/burger4.jpg' },
  { name: 'Mushroom Swiss Burger', price: '500 din', image: './pic/burger5.jpg' },
  { name: 'Avocado Ranch Burger', price: '550 din', image: './pic/burger6.jpg' },
  { name: 'Bacon Blue Cheese Burger', price: '530 din', image: './pic/burger7.jpg' },
  { name: 'Turkey Burger', price: '610 din', image: './pic/burger8.jpg' },
  { name: 'Fish Fillet Burger', price: '390 din', image: './pic/burger9.jpg' },
  { name: 'Buffalo Chicken Burger', price: '470 din', image: './pic/burger10.jpg' },
  { name: 'Greek Lamb Burger', price: '480 din', image: './pic/burger11.jpg' },
  { name: 'Jalapeno Popper Burger', price: '360 din', image: './pic/burger12.jpg' },
  { name: 'Pulled Pork Burger', price: '520 din', image: './pic/burger13.jpg' },
  { name: 'Teriyaki Pineapple Burger', price: '450 din', image: './pic/burger14.jpg' },
  { name: 'Breakfast Burger', price: '640 din', image: './pic/burger15.jpg' },
  { name: 'Portobello Burger', price: '710 din', image: './pic/burger16.jpg' },
  { name: 'BBQ Ranch Burger', price: '670 din', image: './pic/burger17.jpg' },
  { name: 'California Turkey Burger', price: '560 din', image: './pic/burger18.jpg' },
  { name: 'Black Bean Burger', price: '480 din', image: './pic/burger19.jpg' },
  { name: 'Double Bacon Cheeseburger', price: '810 dn ', image: './pic/burger20.jpg' }
  ]);

  return (
    <>
   <div className='car'>
      {products.map((product, index) => (
        <div className='cards' key={index}>
          <img src={product.image} alt={product.name} className='kep' />
          <p>{product.name}</p>
          <span className="price">{product.price}</span>
        </div>
      ))}

    </div>

          </>
  );
}

export default Foodscard;






