import React from "react";
// import "./style.css";
import Greeting from './Greetings';

function App(){
  return(
    <div>
      <Greeting isLoggedIn={false}/>
    </div>
  );
}

// function Product(props){
//   return <h1>{props.value}</h1>;
// }

// function Button(){
//   window.alert("test");
// }

// function App() {
//   return (
//     <div>
//       <h2 style={{color:"green"}}>
//       <Product value="name"/>
//       <Product value="id"/>
//       <Product value="datePurchased"/>
//       <Product value="price"/></h2>
//       <button onClick={Button}>
//         Button
//       </button>
//     </div>
//   );
// }

export default App;