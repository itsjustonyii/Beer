import { FaCircle } from 'react-icons/fa';

function Popup1() {
  return (
    <div className="pop">
      <img src="Images/beer.png" alt="drink" className="drink"/>
      <div className='cover'>
        <p className='thrills'>Thrills</p>
        <div className='enclose'>
          <FaCircle size={7} className="icon"/>
          <p>Available</p>  
        </div>
      </div>
        <p className='carton'>567 Cartons left</p>
        <p className='carton'>30 days to stockout</p>
        <div className='center'>
          <div className='level'><p>Set stock low level</p></div>
          <div className='history'><p>Stock History</p></div>
        </div>
        <button className='back'>Back</button>
     </div>
  );
}

export default Popup1;
