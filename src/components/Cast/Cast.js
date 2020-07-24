import React from "react";
import "./Cast.css";

const Cast = ({ credits, match }) => {
  const { url } = match;
  console.log("url", url);
  console.log("start request");
  return (
    <>
      <p>We don't have any information about cast for this movie</p>
      {/* {credits.length > 0 ? (
        <ul>
          {credits.map((credit) => (
            <li key={credit.id}>
              <img src={credit.img} alt={credit.about} />
              <h3>{credit.name}</h3>
              <p>Character: {credit.role}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any information about cast for this movie</p>
      )} */}
    </>
  );
};

export default Cast;
