import React from 'react';
import { useParams } from 'react-router-dom';

function CompanyDetail() {
  const { handle } = useParams();
  return (
    <div className="CompanyDetail">
      <h1>CompanyDetail</h1>
      <p>{handle}</p>
    </div>
  );
}

export default CompanyDetail;