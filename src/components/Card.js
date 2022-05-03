import React from "react";

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow">
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
