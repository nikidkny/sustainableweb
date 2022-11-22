export default function GettingKwh({month}) {
const kwhHour=0.8002;
const kwhMonth=Math.round((month * 0.8002)*100)/100;


  return (<>Kwh
  <h2>That monthly equals to</h2>
  <h2>{kwhMonth}kWh</h2>
  </>);
}
