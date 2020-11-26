require('dotenv').config();
 const api_key= process.env.REACT_APP_API;

// console.log(api_key)

  const requests={
    fetchTrending: `/trending/all/week?api_key=${api_key}&page=1`,
    fetchTrending1: `/trending/all/week?api_key=${api_key}&page=2`,
    fetchTrending2: `/trending/all/week?api_key=${api_key}&page=3`,
    fetchTrending3: `/trending/all/week?api_key=${api_key}&page=4`,
    fetchTrending4: `/trending/all/week?api_key=${api_key}&page=5`,
    search: `/search/movie?api_key=${api_key}&language=en-US&query=`,
    popup: `/api_key=${api_key}&language=en-US/movie/`


  }

  export default requests;