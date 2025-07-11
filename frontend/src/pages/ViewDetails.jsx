import { useLocation } from "react-router-dom";
import '../css/ViewDetails.css';


export default function ViewDetails(){

    const location = useLocation();
    const {job} = location.state;

    if(!job)    return;

    return(
        <div className="job-description-container"> 
    <div className="job-description-title">Job Description</div>
        <div className="job-description-text">
        {job.job_description.split(/\n+/).map((line, index) => {
          // Make headings bold if they match known keywords
          const isHeading = /^(Job\s*ID|Location|Category|Clearance|Description|Qualifications|CERTIFICATION REQUIREMENT|EDUCATION AND EXPERIENCE|Target salary)/i.test(line.trim());
          return (
            <p key={index}>
              {isHeading ? <strong>{line}</strong> : line}
            </p>
          );
        })}
      </div>

            <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer">
                <button>Apply Now</button>
            </a>
        </div>
    )
    
}

