import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
              <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
                       <h1 className="text center">Today's Work</h1>
                       <div className="row">
                        <div className="col-9">
                           <input type="text" className="form-control" placeholder='My everyday work' /> 
                        </div>
                       </div>
                    </div>
                </div>
              </div>
               
            </div>
        );
    }
}

export default App;