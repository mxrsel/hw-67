import '../DoorPassword/DoorPassword.css'
import {useDispatch, useSelector} from 'react-redux';
import {addNumber, checkStatus, removeNumber, resetAll, } from './DoorPasswordSlice.ts';
import {RootState} from '../../app/store.ts';
import {useEffect, useState} from 'react';

const DoorPassword = () => {
  const dispatch = useDispatch();
  const input  = useSelector((state: RootState) => state.doorPassword.input);
  const status = useSelector((state: RootState) => state.doorPassword.status);
  const message = useSelector((state: RootState) => state.doorPassword.message);
  const [displayedInput, setDisplayedInput] = useState<string>('');

  useEffect(() => {
    setDisplayedInput(input);
  }, [input]);

  const handleNumberClick = (number: number) => dispatch(addNumber(number.toString()));
  const handleRemoveClick = () => dispatch(removeNumber());
  const handleEnterClick = () => dispatch(checkStatus());
  const handleResetClick = () => dispatch(resetAll());


  const getMaskedNumber = (input: string) => {
    let maskedInput = '';
    for (let i = 0; i < input.length; i++) {
      maskedInput += '*';
    }
    return maskedInput;
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "success":
        return 'screen success';
      case 'error':
        return 'screen error';
      default:
        return 'screen';
    }
  };
  return (

    <div className="door-password">

      <div className="current-input">
        Current Input: {displayedInput}
      </div>

      <div className={getStatusClass(status)}>
        <div className={getMaskedNumber(input)}></div>
        <div className="message">{message}</div>
      </div>

      <div className="container top-three">
        <button className="btn-password" onClick={() => handleNumberClick(1)}>1</button>
        <button className="btn-password" onClick={() => handleNumberClick(2)}>2</button>
        <button className="btn-password" onClick={() => handleNumberClick(3)}>3</button>
      </div>

      <div className=" container second-three">
        <button className="btn-password" onClick={() => handleNumberClick(4)}>4</button>
        <button className="btn-password" onClick={() => handleNumberClick(5)}>5</button>
        <button className="btn-password" onClick={() => handleNumberClick(6)}>6</button>
      </div>

      <div className="container hird-three">
        <button className="btn-password" onClick={() => handleNumberClick(7)}>7</button>
        <button className="btn-password" onClick={() => handleNumberClick(8)}>8</button>
        <button className="btn-password" onClick={() => handleNumberClick(9)}>9</button>
      </div>

      <div className="container actions">
        <button className="btn-password" onClick={handleRemoveClick}>{'<'}</button>
        <button className="btn-password" onClick={() => handleNumberClick(0)}>0</button>
        <button className="btn-password" onClick={handleEnterClick}>E</button>
      </div>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default DoorPassword;