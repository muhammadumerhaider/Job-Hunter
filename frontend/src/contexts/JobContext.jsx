import { createContext, useContext, useState, useEffect } from "react";

const JobContext = createContext();

export const UseJobContext = () => useContext(JobContext);

export const JobProvider = ({children}) =>{

    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        const storedFavs = localStorage.getItem("favorites");
        if(storedFavs){
            setFavorites(JSON.parse(storedFavs));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])


    const addToFavorites = (job) =>{
        setFavorites(prev => [...prev, job]);
    }

    const removeFromFavorites = (job_id) =>{
        setFavorites(prev => prev.filter(job => job.job_id!=job_id));
    }

    const isFavorite = (job_id)=>{
        return favorites.some(job =>job.job_id === job_id);
    }

    const value = {
        favorites,
        isFavorite,
        addToFavorites,
        removeFromFavorites
    }

    return <JobContext.Provider value={value}>
        {children}
    </JobContext.Provider>
}