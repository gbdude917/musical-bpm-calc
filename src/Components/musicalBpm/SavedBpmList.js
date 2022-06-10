import { useState } from "react";
import BpmItem from "./BpmItem";
import Card from "../UI/Card";
import classes from "./SavedBpmList.module.css";

function SavedBpmList(props) {
  // Delete BPM from list
  const deleteBpmHandler = (e) => {
    e.preventDefault();

    const name =
      e.currentTarget.parentElement.parentElement.getAttribute("name");

    // Remove from list
    // props.setList(props.list.filter((item) => item.value !== +name));

    // Remove from localStorage
    let updatedList = props.list.filter((item) => item.value !== +name);
    props.setList(updatedList);
    localStorage.setItem("bpmList", JSON.stringify(updatedList));
  };
  let bpmList = <BpmItem />;
  if (props.list !== null && props.list !== undefined) {
    bpmList = props.list.map((bpmElem) => (
      <BpmItem
        key={bpmElem.id}
        id={bpmElem.id}
        value={bpmElem.value}
        delete={deleteBpmHandler}
      />
    ));
  }

  return (
    <section className={classes.bpmList}>
      <h2>Saved BPMs</h2>
      <Card>
        <ul>{bpmList}</ul>
      </Card>
    </section>
  );
}

export default SavedBpmList;
