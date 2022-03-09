import React from "react";
import * as styles from "./styles.module.css";

const Card = ({ heading, amount, icon, increase, decrease }) => {
  let Icon = icon;
  let Icons = require("react-icons/io5");
  console.log(Icons["IoAddCircleOutline"].name);
  Icon = Icons[icon];
  const Up = Icons["IoCaretUpCircleSharp"];
  const Down = Icons["IoCaretDownCircleSharp"];
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.amount}>
        <Icon size={32} />
        {amount}
      </div>
      <div className={styles.footer}>
        {increase && (
          <>
            <p>Avg up by </p>
            <h3>
              <Up size={20} color="green" /> +{increase}%
            </h3>
          </>
        )}
        {decrease && (
          <>
            <p>Avg down by </p>
            <h3>
              <Down size={20} color="red" /> -{decrease}%
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
