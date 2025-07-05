import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import { fetchJobs, searchJobs } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchJob, setSearchJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs().then((data) => {
      setJobs(data);
      setLoading(false);
    });
  }, []);

  const handleSearchJobs = async (e)=>{
    e.preventDefault();
    if(!searchJob.trim()) return
    if(loading) return

    setLoading(true)
    
    try{
        const searchResults = await searchJobs(searchJob)
        setJobs(searchResults)
        setLoading(false);

    }catch(err){
      console.log(err);
      
    }
    

  }

  const filteredJobs = jobs.filter((job) =>
    job.job_title.toLowerCase().startsWith(searchJob.toLowerCase())
  );

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearchJobs}>
        <input
          type="text"
          placeholder="Search for job using job title."
          value={searchJob}
          onChange={(e) => setSearchJob(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>


      {loading ? (
        <div className="loading">Loading jobs...</div>
      ) : (
        <div className="jobs-grid">
          {jobs.map((job) => (
            // console.log(job)
            
            <JobCard job={job} key={job.job_id} />
          ))}
        </div>
      )}

    </div>
  );
}

export default Home;
