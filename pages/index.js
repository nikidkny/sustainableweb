import Form from "../components/Form";
import GettingCo2 from "../components/GettingCo2";
import GettingKwh from "../components/GettingKwh";
import GettingKm from "../components/GettingKm";
import GettingTrees from "../components/GettingTrees";
export default function Home() {
  return (
    <>
      <Form />
      <h1>
        <a>Advice</a>
      </h1>
      <GettingCo2 />
      <GettingKwh />
      <GettingKm />
      <GettingTrees />
    </>
  );
}
