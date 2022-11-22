export default function GettingKwh({ month }) {
  return (
    <>
      <div className="kwh">
        <p>That monthly equals to</p>
        <h2>{month * 0.8002}kWh</h2>
      </div>
    </>
  );
}
