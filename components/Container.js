import Intro from "../components/Intro";
//import Form from "../components/Form";
import GettingCo2 from "../components/GettingCo2";
import GettingKwh from "../components/GettingKwh";
import GettingKm from "../components/GettingKm";
import GettingCar from "./GettingCar";
import { inView, animate } from "motion";
inView("#co2", ({ target }) => {
  animate(target.querySelector(".tree6"), { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.9, easing: "ease-in" });
  animate(target.querySelector(".tree8"), { opacity: 1, transform: "none" }, { delay: 0.4, duration: 0.9, easing: "ease-in" });
  animate(target.querySelector(".tree10"), { opacity: 1, transform: "none" }, { delay: 0.8, duration: 0.9, easing: "ease-in" });
  animate(target.querySelector(".tree11"), { opacity: 1, transform: "none" }, { delay: 1, duration: 0.9, easing: "ease-in" });
});

import { useState } from "react";
export default function Container() {
  // 1.- Declare a state variable that tracks the value of the input field.
  // 2.- Add an onChange prop to the input field.(Inside the input HTML tag)
  // 3.- Use event.target.value to get the input field's value and update the state variable.
  const [hour, setHour] = useState("");
  const handleChange = (event) => {
    setHour(event.target.value);
  };
  const month = 30 * hour;
  return (
    <>
      <section id="intro">
        <div className="container">
          <Intro />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="form-and-text">
            <p>How many hours on avarage do you spend streaming daily? Check out how much CO2 it generates.</p>
            <form>
              <input type="range" step="1" id="hour" name="hour" min="0" max="10" onChange={handleChange} value={hour} />
              <output htmlFor="hour">
                <div>
                  <h2>{hour}</h2>
                  <p>hours per day</p>
                </div>
              </output>
            </form>
          </div>
          <div className="hours-month">
            <h2>{month} hour monthly</h2>
          </div>
        </div>
      </section>

      {/* <section> */}
      <div className="cabel"></div>
      {/* </section> */}

      <section id="kwh-km">
        <div className="container">
          <GettingCar />
          <div className="kwh-km">
            <GettingKwh month={month} />
            <GettingKm month={month} />
          </div>
        </div>
      </section>

      <section id="co2">
        <div className="container">
          <GettingCo2 month={month} />
        </div>
      </section>
    </>
  );
}
