// modified from https://remotestack.io/how-to-build-react-mern-stack-todo-crud-application/

import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddTodoComponent from './components/addTodo.components';
import ViewTodoComponent from './components/viewTodo.components';
import Home from './components/home';
// import Map from './components/map';
import BasicGoogleMap from './components/BasicGoogleMap';

function App() {
  return (
    <div className="App container mt-5">
       <Home/>
       {/* <Map/> */}
       <BasicGoogleMap 
         isMarkerShown
         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
         loadingElement={<div style={{ height: `100%` }} />}
         containerElement={<div style={{ height: `400px` }} />}
         mapElement={<div style={{ height: `100%` }} />}
         />
       <AddTodoComponent />
       <ViewTodoComponent />
    </div>
  );
}

export default App;