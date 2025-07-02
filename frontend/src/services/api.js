const API_URL = 'https://jsearch.p.rapidapi.com/search';

const headers = {
  'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
  'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
};

export const fetchJobs = async () => {
  const query = 'developer'; 
  const numPages = 3; 
  let allJobs = [];

  for (let page = 1; page <= numPages; page++) {
    const params = new URLSearchParams({
      query: query,
      page: page.toString(),
    });

    try {
      const response = await fetch(`${API_URL}?${params.toString()}`, {
        method: 'GET',
        headers,
      });

      const data = await response.json();
      console.log('data ',data);
      
      allJobs = [...allJobs, ...data.data]; 
    } catch (error) {
      console.error(`Failed to fetch page ${page}:`, error);
    }
  }

  return allJobs;
};
