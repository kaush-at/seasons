import React from 'react';

const Spinner = (props) =>{

    return (
        <div className="ui active dimmer">
            <div className="ui massive text loader">{props.message }</div>
            {/* <div className="ui massive text loader">{props.message || 'Loading..'}</div> */}
        </div>
    );
};

//above commented line is mentioned default message
//below code also making some default messages (if we dont pass in message props it will be provide default props to message)
Spinner.defaultProps = {
    message : 'Loading...'
};


export default Spinner;