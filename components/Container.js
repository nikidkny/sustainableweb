import Intro from "../components/Intro";
// import Form from "../components/Form";
import GettingCo2 from "../components/GettingCo2";
import GettingKwh from "../components/GettingKwh";
import GettingKm from "../components/GettingKm";
import GettingTrees from "../components/GettingTrees";

import { useState } from "react";

import GettingMonthlyh from "./GettingMontlyh";
export default function Container() {
  //Here we define the States for CO2, kWh and Km
  // const initCo2 = 0.23314;
  // const initKwh = 0.85;
  // const initKm = 4.5;
  const [co2, setCo2] = useState();
  const [kwh, setKwh] = useState();
  const [km, setKm] = useState();

  const calculate = (event) => {
    const input = event;
    setCo2((initialValue) => initialValue * 30 * 0.23314);
    setKwh((initialValue) => initialValue * 30 * 0.85);
    setKm((initialValue) => initialValue * 30 * 4.5);
    console.log(co2);
    console.log(kwh);
    console.log(km);

    // setCo2(event.target.value);
    // console.log("CO2:", event.target.value);
  };

  return (
    <>
      <Intro />
      {/* <Form /> */}
      <section>
        <form id="form">
          <div>How many hours do you spend watching? Check out how much CO2 it generates.</div>
          <fieldset>
            <legend>Daily Streaming hours</legend>
            <label htmlFor="hours">1-10</label>
            {/* <input type="text" name="hours"></input> */}
            <input type="range" step="1" min="0" max="10" id="hours" name="hours" onChange={calculate} />
            <h2>CO2 Monthly: {co2}</h2>
            <h2>kWh Monthly: {kwh}</h2>
            <h2>Km Monthly: {km}</h2>
          </fieldset>
        </form>
      </section>
      <GettingCo2 />
      <GettingKwh />
      <GettingKm />
      <GettingTrees />
    </>
  );
}
