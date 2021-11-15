// modified from https://remotestack.io/how-to-build-react-mern-stack-todo-crud-application/

import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddTodoComponent from './components/addTodo.components';
import Home from './components/home';
import ViewTodoComponent from './components/viewTodo.components';

function App() {
  return (
    <div className="App container mt-5">
       <Home/>
       <AddTodoComponent />
       <ViewTodoComponent />
    </div>
  );
}

export default App;