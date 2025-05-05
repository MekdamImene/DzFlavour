// NutritionInfo.js
import React from 'react';

const NutritionInfo = ({ nutritionInfo }) => {
  if (!nutritionInfo) {
    return <p>No nutrition information available.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Nutrient</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(nutritionInfo).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NutritionInfo;