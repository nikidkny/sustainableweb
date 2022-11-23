import Intro from "../components/Intro";
import Form from "../components/Form";
import GettingCo2 from "../components/GettingCo2";
import GettingKwh from "../components/GettingKwh";
import GettingKm from "../components/GettingKm";
import GettingTrees from "../components/GettingTrees";
import { useState } from "react";

import GettingMonthlyh from "./GettingMontlyh";
export default function Container() {
  const [hour, setHour] = useState("");
  const handleChange = (event) => {
    setHour(event.target.value);
    //console.log('value is:', event.target.value);
  };
  const month = 30 * hour;
  console.log(month);
  return (
    <div>
      <Intro />
      <input type="range" id="message" name="message" min="0" max="10" onChange={handleChange} value={hour} />
      <h2>{hour} hour daily</h2>
      <h2 month={month}>{month} hour month</h2>

      <GettingKwh month={month} />

      <GettingKm month={month} />

      <GettingCo2 month={month} />

      <GettingTrees />
    </div>
  );
}
