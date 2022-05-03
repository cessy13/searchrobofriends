import React, { Fragment } from "react";
import "tachyons";
import Card from "./Card";

const CardList = ({ robots }) => {
  const robotsArr = robots.map((robot, i) => {
    return (
      <Fragment>
        <Card
          key={i}
          id={robot.id}
          name={robot.name}
          username={robot.username}
          email={robot.email}
        />
      </Fragment>
    );
  });
  return <div>{robotsArr}</div>;
};

export default CardList;
