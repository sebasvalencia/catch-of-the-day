import React from "react";
import {render} from "react-dom";
import App from "./components/App";

//Every single component is a class

//Small component/class basic
class StorePicker extends React.Component {
    //what html element do I put in the DOM
    render() {
        //return JSX
        return (
            <p>Hello World!</p>
        )
    }
}

//Render to the page
//render(<p>HEYYYY</p>, document.querySelector('#main'));
render(<StorePicker />, document.querySelector('#main'));