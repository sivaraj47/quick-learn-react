import React from 'react';
import Welcome from './Welcome';
import './style.css';

function Address(props){
  return <h2>I am from chennai {props.add}</h2>
}

function Work(props){
  return <h2>My job role is {props.role}</h2>
}
function Educ(props){
  return (
    <>
<h2>I am studying {props.std}</h2>
<h2>I got this quatly {props.mark}</h2>
<h2>My School name {props.school}</h2>

</>
  ); 
}

export default function App() {

  const city ="chennai";
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen </p>
      <Welcome />
      <h1>welcome to {city}</h1>
      <Address add="guindy"/>
      <Educ std="10th standard" mark="80% mark" school="Bishop Herber HR School" />
      <Work role="Senior Designer" />
    </div>
  );
}
