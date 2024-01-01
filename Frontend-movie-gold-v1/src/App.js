import { useState, useEffect} from 'react';
import axios from 'axios';


function App() {

  const [movies, setMovies] = useState(); 

  // const express = require('express');
  // const { createProxyMiddleware } = require('http-proxy-middleware');

  // const app = express();

  // app.use('/http://localhost:3000/', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));
  // app.listen(3000);


  const getMovies = async () => {

    try{

        const response = await axios.get("http://localhost:8080/api/v1/movies", {
          headers:{
            origin: 'http://localhost:8080'
          }
        });
    
        console.log(response.data);

         setMovies(response.data);

    }
    catch(err){
    
    console.log(err); 
  }
   
}
  useEffect(() => {
  getMovies();
  },[])

  return (
    <div className="App">
    </div>
  );
}

export default App;