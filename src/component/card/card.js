import './card.css';
import "./flip-transition.css"
const Card = ({onClick, content}) => {
  return <div className="card" onClick={onClick}>
    <div className='card-back'>{content}</div>
    <div className='card-front'></div>
  </div>;
};

export default Card;
