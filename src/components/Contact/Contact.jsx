import { AiFillPhone, AiOutlineUser } from "react-icons/ai";
export default function Contact({ contact, id, deleteUser }) {
  const handlerClick = (id) => deleteUser(id);
  return (
    <div>
      <p>
        <AiOutlineUser />
        {contact.name}
      </p>
      <p>
        <AiFillPhone />
        {contact.number}
      </p>
      <button onClick={() => handlerClick(id)}>Delete</button>
    </div>
  );
}
