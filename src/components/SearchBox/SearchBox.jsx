import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filterItems } from "../../redux/filterSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        onChange={(evt) => dispatch(filterItems(evt.target.value))}
      />
    </div>
  );
}
