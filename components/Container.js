import Intro from "../components/Intro";
import Form from "../components/Form";
import GettingCo2 from "../components/GettingCo2";
import GettingKwh from "../components/GettingKwh";
import GettingKm from "../components/GettingKm";
import GettingTrees from "../components/GettingTrees";
import GettingMonthlyh from "./GettingMontlyh";
export default function Container() {
  return (
    <>
      <Intro />
      <Form />
      <h1>
        <a>Advice</a>
      </h1>
      <GettingMonthlyh />
      <GettingCo2 />
      <GettingKwh />
      <GettingKm />
      <GettingTrees />
    </>
  );
}
