import React from "react";
import Card from "../Card/Card";

const CardsList = (props) => {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default CardsList;
