export default function GettingKm({ month }) {
  return (
    <>
      <div className="km">
        <p>And with that amount of energy a electric car can travel</p>
        <h2>{month * 4.5}km</h2>;
      </div>
    </>
  );
export default function GettingKm({month}) {

  const kmHour=4.5
  return   <> 
  <h2>And with that amount of energy a electric car can travel</h2>
  <h2>{month * kmHour} km</h2>
  </>
}
