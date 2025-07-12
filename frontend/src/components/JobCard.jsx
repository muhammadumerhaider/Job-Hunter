import "../css/JobCard.css";
import { UseJobContext } from "../contexts/JobContext";
import { useNavigate } from "react-router-dom";

function JobCard({ job }) {
  const { isFavorite, addToFavorites, removeFromFavorites, allJobs } =
    UseJobContext();

  const favorite = isFavorite(job.job_id);

  const navigate = useNavigate();

  function onFavClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(job.job_id);
    } else {
      addToFavorites(job);
    }
  }

  function getViewDetail(job_id) {
    return allJobs?.find((job) => job.job_id === job_id);
  }

  function viewDetailsMethod(e) {
    e.preventDefault();
    const jobDetails = getViewDetail(job.job_id);
    console.log("aaa ", jobDetails);
    jobDetails === undefined
      ? alert("Job not found. Please try again later.")
      : navigate("/viewDetails", { state: { job: jobDetails } });
  }

  return (
    <div className="job-card">
      <div className="job-card-header">
        <img src={job.employer_logo} alt={job.job_title} className="job-logo" />
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={onFavClick}
        >
          ♥
        </button>
      </div>

      <div className="job-card-body">
        <h3 className="job-title">{job.job_title}</h3>
        <p className="company-name">{job.employer_name}</p>

        <p className="job-location">
          📍 {job.job_city}, {job.job_country} |{" "}
          {job.job_is_remote ? "Remote" : "Onsite"}
        </p>

        <p className="job-type">{job.job_employment_type}</p>

        <p className="salary">
          💰 {job.job_min_salary} - {job.job_max_salary}{" "}
          {job.job_salary_currency}
        </p>

        <div className="job-footer">
          <p className="posted-date">
            🕒 Posted on{" "}
            {new Date(job.job_posted_at_datetime_utc).toLocaleDateString()}
          </p>
          <button className="view-details" onClick={viewDetailsMethod}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
