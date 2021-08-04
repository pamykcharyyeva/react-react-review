// QUESTION 1
// make a counter 
// 0 on a right 
// create button 
// when button is pressed, it incremeans to  1 to 2 and to 3
// answer:
// const [counter, setCounter]= useState(0);
// and check the buttons below


//  QUESTION 2
// fetch the api and dispay as a string in react to see what api gives
// https://randomuser.me/api
// Answer:
// user axios library- import axios

// QUESTION 3
// use the data and display name of the user and picture 

import  React from 'react';
// import './App.css';
import axios from 'axios';



const {useEffect,useState} = React;

const fetchRandomData =() => {
  return axios
  .get("https://randomUser.me/api")
  .then(({ data}) => {
    // handle success
    console.log(data);
    return JSON.stringify(data, null, 2);
  })
  .catch((err) => {
    // handle error
    console.error(err);
  });
};




function App() {

  // keep track of counter state
  const [counter, setCounter]= useState(0);

  const[randomUserDataJSON, setRandomUserDataJSON] = useState("");

  useEffect(() => {

    fetchRandomData().then(randomData => {
      setRandomUserDataJSON(randomData || 'No user data found.');
    })
  }, []);



  return (
    <div className="App">
      <h1>hello world</h1>
      <h2> this is practise page</h2>
      <p>
        {counter}
      </p>
      
      <button onClick={()=> {
        setCounter(counter +1);
        }}>
          Increase counter
        </button>
        <button onClick={()=> {
        setCounter(counter -1);
        }}>
          Decrease counter
        </button>

        <pre>
          {randomUserDataJSON}
        </pre>
    </div>
  );
}

export default App;
