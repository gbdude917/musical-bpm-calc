import classes from "./BpmItem.module.css";

function BpmItem(props) {
  return (
    <li className={classes.list}>
      <h3>{props.value}</h3>
    </li>
  );
}

export default BpmItem;
