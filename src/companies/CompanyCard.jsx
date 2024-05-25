import React from 'react';

function CompanyCard({ company }) {
  return (
    <div className="CompanyCard card">
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{company.name}</span>
        </h6>
        <p>{company.description}</p>
      </div>
    </div>
  );
}

export default CompanyCard;

