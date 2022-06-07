import BpmItem from "./BpmItem";
import Card from "../UI/Card";
import classes from "./SavedBpmList.module.css";

const DUMMY_BPM = [
  {
    id: 1,
    value: 100,
  },
  {
    id: 2,
    value: 80,
  },
  {
    id: 3,
    value: 120,
  },
];

function SavedBpmList() {
  const bpmList = DUMMY_BPM.map((bpmElem) => (
    <BpmItem key={bpmElem.id} id={bpmElem.id} value={bpmElem.value} />
  ));
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
