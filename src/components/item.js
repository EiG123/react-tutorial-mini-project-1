import "./item.css";
import { BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

function Item(props) {
  const { data, deleteTask, editTask } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <BsTrash className="btn" onClick={() => deleteTask(data.id)} />
        <MdEdit className="btn" onClick={() => editTask(data.id)}/>
      </div>
    </div>
  );
}

export default Item;
