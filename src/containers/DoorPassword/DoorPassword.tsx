import '../DoorPassword/DoorPassword.css'
const DoorPassword = () => {
  return (

    <div className="door-password">
      <div className="container top-three">
        <button className="btn-password">1</button>
        <button className="btn-password">2</button>
        <button className="btn-password">3</button>
      </div>

      <div className=" container second-three">
        <button className="btn-password">4</button>
        <button className="btn-password">5</button>
        <button className="btn-password">6</button>
      </div>

      <div className="container hird-three">
        <button className="btn-password">7</button>
        <button className="btn-password">8</button>
        <button className="btn-password">9</button>
      </div>

      <div className="container actions">
        <button className="btn-password">{'<'}</button>
        <button className="btn-password">0</button>
        <button className="btn-password">E</button>
      </div>
      <button>Reset</button>
    </div>
  );
};

export default DoorPassword;