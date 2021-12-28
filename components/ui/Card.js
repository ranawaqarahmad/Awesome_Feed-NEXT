const Card = (props) => {
  return (
    <div className={`custom-card ${props.className}`}> {props.children} </div>
  );
};

export default Card;
