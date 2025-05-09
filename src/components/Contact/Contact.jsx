import { AiFillPhone, AiOutlineUser } from "react-icons/ai";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ contact, id }) {
  const dispatch = useDispatch();
 
  return (
    <div className={css.contact}>
      <div>
        <p>
          <AiOutlineUser />
          {contact.name}
        </p>
        <p>
          <AiFillPhone />
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}
