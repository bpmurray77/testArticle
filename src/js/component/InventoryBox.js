import React, { useState } from "react";
import data from "./data.json";
import List from "./List.js";



  function Inventory() {
  const [List, setList] = useState(data);

  return (
    <div className="App">
      <List list={list} />
    </div>
  );
}

export default Inventory;