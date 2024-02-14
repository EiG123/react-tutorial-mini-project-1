import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/item";
import { useState } from "react";

function App(props) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "แก้ bug โปรแกรม" },
    { id: 2, title: "ทำงาน" },
    { id: 3, title: "ออกกำลังกาย" },
  ]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  function deleteTask(id) {
    const result = tasks.filter((item) => item.id !== id);
    setTasks(result);
  }

  function editTask(id){
    setEditId(id)
    const editTask = tasks.find((item)=>item.id === id)
    setTitle(editTask.title)
  }

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณาป้อนข้อมูล")
    }else{
      const newTask={
        id:Math.floor(Math.random()*1000),
        title:title
      }
      setTasks([...tasks,newTask])
      setTitle("")
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
          {tasks.map((data) => (
            <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
