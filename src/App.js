import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let person={
      name: "Rayatul",
      phone: "23423423"
  }
  let style={
    color:"red",
    backgroundColor:"yellow"
  }

  const peoples = ["Rafat", "Kamal", "zaman","Sumon"]
  const products = [
    {name: "Photoshop",price: "$1999.99"},
    {name: "illustrator",price: "$1000.00"},
    {name: "PDF Reader",price: "$500.00"},
    {name: "PDF Reader",price: "$500.00"},
    {name: "PDF Reader",price: "$500.00"}
  ]

  const productNames = products.map(pro => pro.name);  // map() creates an array with property of an object inside an array

  console.log("Product Names: ",productNames);

  const peopleNames = peoples.map(ppl => ppl);

  console.log("Peoples: ", peopleNames);

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit Done and save to reload.
        </p>
        <ul>
          {
            peoples.map(ppl => <li>{ppl}</li>)
          }
        </ul>

        <ol>
          {
              products.map(product => <li>{product.name}</li>)

          }
        </ol>
        <h1>mapping product array then showing all the items of the array using the style of Products function</h1> 
          {

            products.map(pd => <Product p={pd}></Product>)

          }

      <h1 style={style}>Name: {person.name + " " + person.phone}</h1>
       <p>My first React Paragraph</p>

       <h2 style={{color:"white",backgroundColor:"black", padding:"10px"}}>Showing Products Statically </h2>        

       <Product p={products[0]}></Product>
       <Product p={products[1]}></Product>
       <Person name="Rubel" age="23"></Person>
       <Person name={peoples[0]} age="30"></Person>

      </header>
    </div>
  );
}

function Person(props){
    const personStyle={
      border:'2px solid red', 
      margin:'10px'

    }  


    console.log(props)
    return (
      <div style={personStyle}>
        <h1>Name: {props.name}</h1>
        <h3>Age: {props.age}</h3>
        
      </div>

    )
}

function Product(props){
  const productStyles={
    color:'red',
    border:'1px solid',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    padding:'10px'
  }

    // const {name,price} = props.product;   // optional destructuring 



  return(
    <div style={productStyles}>
        <h2>{props.p.name}</h2>      

        <h1>{props.p.price}</h1>
        <button>Buy now</button>
    </div>
  )


}



export default App;
