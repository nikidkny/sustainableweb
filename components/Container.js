import Intro from "../components/Intro";
//import Form from "../components/Form";
import GettingCo2 from "../components/GettingCo2";
import GettingKwh from "../components/GettingKwh";
import GettingKm from "../components/GettingKm";
import GettingTrees from "../components/GettingTrees";
import { useState } from "react";

import GettingMonthlyh from "./GettingMontlyh";
export default function Container() {
 // 1.- Declare a state variable that tracks the value of the input field.
 // 2.- Add an onChange prop to the input field.(Inside the input HTML tag)
  const [hour, setHour] = useState('');
  const handleChange = event => {
  // 3.- Use event.target.value to get the input field's value and update the state variable.
    setHour(event.target.value);
  };

const month=30*hour;

  return (
    <>
      <Intro />
     
      <form>
      <input
        type="range"
        id="hour"
        name="hour"
        min="0"
        max="10"
        onChange={handleChange}
        value={hour}
      />
      <output for="hour" onforminput="value = foo.valueAsNumber;">{hour} hours per day</output></form>

      <h2>{month} hour month</h2>
      
      <GettingKwh month={month}/>
 
      <GettingKm month={month}/>

      <GettingCo2 month={month} />

      <GettingTrees />
    </>
  );  
    
  
}
