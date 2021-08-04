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

// Question 4
// create a button when you click on that button, it should display more users info

import  React from 'react';
// import './App.css';
import axios from 'axios';


// to display the data on load
const {useEffect,useState} = React;

// fetching the data 
const fetchRandomData =() => {
  return axios
  .get("https://randomUser.me/api")
  .then(({ data}) => {
    // handle success
    console.log(data);
    return data;
  })
  .catch((err) => {
    // handle error
    console.error(err);
  });
};


// function to get info
const getFullUserName = (userInfo) => {
  const {name: {first, last}} =userInfo;
  return `${first} ${last}`;
}














function App() {

  // keep track of counter state
  const [counter, setCounter]= useState(0);
// random user data
  const[randomUserDataJSON, setRandomUserDataJSON] = useState("");
// user info for name and image
  const [userInfos, setUserInfos] = useState([])

  useEffect(() => {

    fetchRandomData().then(randomData => {
      setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No user data found.')
      // results for displaying name and imgs
      setUserInfos(randomData.results);
    })
  }, []);



  return (
    <div className="App">
      <h1>hello world</h1>
      <h2> this is practise page</h2>
      <p>
        {counter}
      </p>
      {/* button for first question */}
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

        {/* to display name and image */}
        {
          userInfos.map((userInfo)=> (
            <div > 
              <p>{getFullUserName(userInfo)}</p>
              <img src={userInfo.picture.thumbnail} alt="any"/>
            </div>
         
          ))
        }
{/* data display for second question  */}
        <pre>
          {randomUserDataJSON}
        </pre>
    </div>
  );
}

export default App;
