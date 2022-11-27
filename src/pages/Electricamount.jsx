import React from "react";
import DashHeader from "../components/DashHeader";
const Electricamount = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <DashHeader category="전력량" title="일별 전력량" />
    </div>
  );
};

export default Electricamount;
