import { useState } from "react";

const App = () => {

  const [days, setDays] = useState(303);

  const handleClick = ()  => setDays(days => days - 1);

  return (
    <div className="App">
      <h1>Birthday Party Count Down App</h1>
      <div className="card">
        <button onClick={handleClick}>
          Days remaining until Jon's Birthday are: {days}
        </button>
      </div>
    </div>
  )
};

export default App;