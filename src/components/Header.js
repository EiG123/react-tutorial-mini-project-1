import "./Header.css";
import { IoSunny, IoMoon } from "react-icons/io5";
function Header(props) {
  const { theme, setTheme } = props;

  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span>{theme === "light" ? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
        <span className="icon" onClick={ToggleTheme}>
          {theme === "light" ? <IoSunny /> : <IoMoon />}
        </span>
      </div>
    </header>
  );
}

export default Header;
