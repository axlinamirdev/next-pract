import React from 'react';
import styles from  '@styles/Order.module.scss';
import Image from "next/image";
import icon_img from "@icons/flechita.svg";

const Order = () => {
  return (
    <div className={styles.Order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={icon_img} alt="arrow" width={200} height={200} />
    </div>
  );
};

export default Order;
