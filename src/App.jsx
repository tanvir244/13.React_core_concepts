import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price: '$70.65'},
    {name: 'PDF Reader', price: '$69.70'},
    {name: 'Visual Studio', price:'$15.28'},
    {name: 'WhatsApp', price:'$25.38'},
    {name: 'Git Hub', price:'$32.13'}
  ]
  return (
      <div className='App'>
        <header className='App-header'>
          <Counter></Counter>
          <Users></Users>
          <ul>
            {
              products.map(pd => <Product product={pd}></Product>)
            }
          </ul>
        </header>
      </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1) }>Decrease</button>
      <button onClick={ () => setCount(count + 1) }>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>{users.length}</h3>
        <ul>
          {
            users.map(ur => <li>{ur.name}</li>)
          }
        </ul>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '4px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgay',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

export default App