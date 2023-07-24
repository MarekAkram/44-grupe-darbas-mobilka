import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <form className={style.form}>
        <div className={style.row}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" required placeholder="Your name"/>
        </div>
        <div className={style.row}>
          <label htmlFor="surname">Surname</label>
          <input id='surname'type="text" />
        </div>
        <div className={style.row}>
          <button type="submit">Register</button>
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="prev"></div>
    </div>
  );
}

export default App;
