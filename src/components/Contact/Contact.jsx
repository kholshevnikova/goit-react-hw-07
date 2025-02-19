import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.listItem}>
      <p>
        <FaUserAlt />
        {contact.name}
      </p>
      <p>
        <FaPhoneAlt />
        {contact.number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
