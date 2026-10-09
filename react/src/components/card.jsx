const Card = (props) => {
    console.log(props)
  return (
    <>
    <div className="parent">
        <div className="card">
        <h1 className="bg-red-600 text-2xl font-serif">name : {props.user}</h1>
        <h3>email : </h3>
        <h3>ph : </h3>
        <p>details : </p>
    </div>
    </div>

    </>
);
};

export default Card;