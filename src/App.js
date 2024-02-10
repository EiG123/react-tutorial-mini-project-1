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
  function deleteTask(id){
    const result = tasks.filter(item=>item.id !==id)
    setTasks(result);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm />
        <section>
          {tasks.map((data) => (
            <Item key={data.id} data={data} deleteTask={deleteTask}/>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
