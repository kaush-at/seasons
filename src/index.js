import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),        
//         (err) => console.log(err)                           
//     );
    
//     return <div>Hi theterrr...</div>

// }

class App extends React.Component {
    // constructor(props){
    //     super(props);

    //     // THIS IS THE ONLY TIME WE GOING TO USE DIRECT ASSIGNMENT 
    //     // TO this.state
    //     this.state = { lat: null, errorMessage:"" };

    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     (position) => {
    //     //         this.setState({ lat: position.coords.latitude });
    //     //     },
    //     //     (err) => {
    //     //         this.setState({ errorMessage: err.message });
    //     //     }
    //     // );
        
    // }
    state = { lat: null, errorMessage: "" };  // this will replace constructor function and initializing state object


    // this will called after our component get rendered
    componentDidMount(){
        console.log('my component was rendered');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    // this will called any time our component get updated (before this render method will be called)
    componentDidUpdate(){
        console.log('my component just updated- it rendered');
    }



    // we have to define render definetly 
    // render(){
    //     if(this.state.errorMessage && !this.state.lat){
    //         return <div>Error : {this.state.errorMessage}</div>
    //     }
    //     if (!this.state.errorMessage && this.state.lat){
    //         // return <div>Latitude : {this.state.lat}</div>
    //         return <SeasonDisplay lat={this.state.lat}/> // we can take state from one component and pass it as a prop down to the childrens
    //     }
    //     return <Spinner /> //message="Please allow us to access your location" this we done to check our default props in spinner
    // }

    // NEW REQUIREMENT CAME
    // we need to implement red border for each and every screens how we going to do this
    //-------------------------------------------------------------------------------------------------------------------------
    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
           
            return <SeasonDisplay lat={this.state.lat} /> 
        }
        return <Spinner />

    }

    render(){
        return (
            <div className="boarder red">
                {this.renderContent()}
            </div>
        );

    }
// in general anytime  we make component try much as possible to have not to have multiple return statement inside the render method
//  if we have to keep multiple returns try to put in to have in a helper method

}

ReactDOM.render(<App/>, document.querySelector('#root'));