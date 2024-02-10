import "./AddForm.css";

function AddForm() {
  const {title,setTitle} = props;
  return (
    <>
      <h2>แอพบริหารจัดการงาน</h2>
      <form>
        <div className="form-control">
          <input type="text" className="text-input" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <button type="submit" className="submit-btn">
            เพิ่ม
          </button>
        </div>
      </form>
    </>
  );
}

export default AddForm;
