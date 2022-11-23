export default function GettingKwh({ month }) {
  return (
    <>
      <div className="kwh">
        <p>That monthly equals to</p>
        <h2>{month * 0.8002}kWh</h2>
      </div>
    </>
  );
export default function GettingKwh({month}) {
const kwhHour=0.8002;
const kwhMonth=Math.round((month * 0.8002)*100)/100;


  return (<>Kwh
  <h2>That monthly equals to</h2>
  <h2>{kwhMonth}kWh</h2>
  </>);
}
