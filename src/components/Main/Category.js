import React from "react";

const Category = ({ nombre, cantidad }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-info text-white shadow">
        <div className="card-body">
          {nombre} - {cantidad}
        </div>
      </div>
    </div>
  );
};

export default Category;
