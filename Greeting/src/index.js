import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let currDate = new Date();
 currDate = currDate.getHours();
 let greeting = '';
 let cssStyle = {};

 if(currDate>=1 && currDate < 12){
    greeting = 'Good Morning';
    cssStyle.color = "green";

 }else if(currDate>=12 && currDate <20){
    greeting = "Good Afternoon";
    cssStyle.color = "orange";

 }else{
    greeting = "Good Night";
    cssStyle.color = "pink";
 }

ReactDOM.render(
    <div>
       <h1>Hello Sir,<span style={cssStyle}> {greeting}</span></h1>
    </div>,
    document.getElementById("root")
)