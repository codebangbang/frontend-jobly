import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';
import LoadingSpinner from '../common/LoadingSpinner';
import JobCardList from '../jobs/JobCardList';

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function getCompanyOnMount() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }
    getCompany();
  }
  , [handle]);

  if (!company) return <LoadingSpinner />;
  return (
    <div className="CompanyDetail">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;