import React from 'react';
import JobCard from './JobCard';


function JobCardList(jobs, apply) {
  return (
    <div className="JobCardList">
      <h1>JobCardList</h1>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName}
          // apply={apply}
        />
      
      ))}
    </div>
  );
}

export default JobCardList;