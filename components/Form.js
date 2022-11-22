export default function Form() {
  return (
    <>
      <form id="form">
        <div>How many hours do you spend watching? Check out how much CO2 it generates.</div>
        <fieldset>
          <legend>Daily Streaming hours</legend>
          <label htmlFor="hours">1-10</label>
          {/* <input type="text" name="hours"></input> */}
          <input type="range" step="1" min="0" max="10" id="hours" name="hours" />
          {/* onChange ?? when value="1" What's that?? */}
          <button value="submit" id="calculate">
            CALCULATE
          </button>
        </fieldset>
      </form>
    </>
  );
}
