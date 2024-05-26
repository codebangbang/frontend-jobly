import React, {useState, useEffect  } from 'react';
import SearchForm from '../common/SearchForm';
import JoblyApi from '../api';
import JobCardList from './JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';


function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function updateJobsListOnMount() {
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
      <div className="JobList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {jobs.length
          ? <JobCardList jobs={jobs} />
          : <p className="lead">Sorry, no results were found!</p>
        }
      </div>
  );
} 

export default JobList;
