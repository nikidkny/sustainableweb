export default function GettingKm({ month }) {
  return (
    <>
      <div className="km">
        <p>And with that amount of energy a electric car can travel</p>
        <h2>{month * 4.5}km</h2>;
      </div>
    </>
  );
}
