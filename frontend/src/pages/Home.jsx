import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import { fetchJobs } from "../services/api";
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

  const filteredJobs = jobs.filter((job) =>
    job.job_title.toLowerCase().startsWith(searchJob.toLowerCase())
  );

  return (
    <div className="home">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
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

      <div className="movies-grid">
        {loading ? (
          <p style={{ color: "white" }}>Loading jobs...</p>
        ) : filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard job={job} key={job.job_id} />)
        ) : (
          <p style={{ color: "white" }}>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
