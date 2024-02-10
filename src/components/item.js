import "./item.css"
function Item(props) {
  const {data} = props
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <button className="btn">Delete</button>
        <button className="btn">Edit</button>
      </div>
    </div>
  );
}

export default Item;
