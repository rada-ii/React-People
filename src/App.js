import React, { Component } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

import { useState } from "react";

function App() {
  const [view, setView] = useState("list");

  const updateState = () => {
    setView((prevView) => (prevView === "list" ? "grid" : "list"));
  };

  return (
    <div className="root">
      <Header changeView={updateState} view={view} />
      <Main view={view} />
      <Footer />
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor(props){
//     super(props)

//     // Set initial state
//     this.state = {view : 'list'}

//     this.updateState = this.updateState.bind(this)
//   }

//   updateState(){
//     this.state.view === 'list' ? this.setState({view : 'grid'}) : this.setState({view : 'list'})
//   }

//   render(){
//     return (
//       <div className='root'>
//         <Header changeView={this.updateState} view={this.state.view}/>
//         <Main view={this.state.view}/>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
