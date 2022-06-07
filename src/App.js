import React, { Fragment } from "react";
import Header from "./Components/Header/Header";
import Bpm from "./Components/musicalBpm/Bpm";
import SavedBpmList from "./Components/musicalBpm/SavedBpmList";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Bpm />
        <SavedBpmList />
      </main>
    </Fragment>
  );
}

export default App;
