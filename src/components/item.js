import "./item.css"
function Item(props) {
  const {data, deleteTask} = props
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <button className="btn" onClick={() => deleteTask(data.id)}>Delete</button>
        <button className="btn">Edit</button>
      </div>
    </div>
  );
}

export default Item;
