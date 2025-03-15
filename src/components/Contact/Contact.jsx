import { AiFillPhone, AiOutlineUser } from "react-icons/ai";
import css from "./Contact.module.css"
export default function Contact({ contact, id, deleteUser }) {
  const handlerClick = (id) => deleteUser(id);
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
      <button className={css.btn} onClick={() => handlerClick(id)}>Delete</button>
    </div>
  );
}
