import React from 'react';
import { Link } from 'react-router-dom';
// import './CompanyCard.css';

function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <div className="CompanyCard card">
      <div className="card-body">
        <h6 className="card-title">
          <Link to={`/companies/${handle}`}>
            {name}
            {logoUrl && <img src={logoUrl} alt={name} className="float-right" />}
            <p>{ description } </p>
          </Link>
        </h6>
        <p className="card-text">{company.description}</p>
      </div>
    </div>
  );
}

export default CompanyCard;

