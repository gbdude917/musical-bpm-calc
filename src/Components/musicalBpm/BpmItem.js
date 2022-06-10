import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./BpmItem.module.css";

function BpmItem(props) {
  return (
    <li id={props.id} name={props.value} className={classes.list}>
      <h3>{props.value}</h3>
      <div className={classes.icons}>
        <button onClick={props.delete} className={classes.btn}>
          <FontAwesomeIcon icon={faTrash} className={classes.faIcons} />
        </button>
      </div>
    </li>
  );
}

export default BpmItem;
