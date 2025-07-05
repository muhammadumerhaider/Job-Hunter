import "../css/Favorites.css";
import { UseJobContext } from "../contexts/JobContext";
import JobCard from "../components/JobCard";


export default function Favorites() {

  const {favorites} = UseJobContext();
  console.log('favorites ',favorites);
  

  if(favorites.length>=1){
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="jobs-grid">
          {favorites.map((job) => (
            <JobCard job={job} key={job.job_id} />
          ))}
        </div>
      </div>
    );
  }else{
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
  );
  }

}
