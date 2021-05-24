import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Signup } from './components/Signup';
import Image from './images/signup.png';

function App() {
  return (
    <div className="container mt-3">
          <div className="row">
            <div className="col-md-5">
              <Signup />
            </div>
            <div className="col-md-7 my-auto">
              <img src={Image} alt="Signup" className="img-fluid w-100" />
              {/* <Image className="img-fluid w-100" src="/signup.png" alt="Signup" width={300} height={300} /> */}
            </div>
          </div>
        </div> 
  );
}

export default App;
