require('dotenv').config();
 const api_key= process.env.REACT_APP_API;

// console.log(api_key)

  const requests={
    fetchTrending: `/trending/all/week?api_key=${api_key}&page=1`,
    fetchTrending1: `/trending/all/week?api_key=${api_key}&page=2`,
    fetchTrending2: `/trending/all/week?api_key=${api_key}&page=3`,
    fetchTrending3: `/trending/all/week?api_key=${api_key}&page=4`,
    fetchTrending4: `/trending/all/week?api_key=${api_key}&page=5`,
    // fetchTrending5: `/trending/all/week?api_key=${API_KEY}&page=6`,
    // fetchTrending6: `/trending/all/week?api_key=${API_KEY}&page=7`,
    // fetchTrending7: `/trending/all/week?api_key=${API_KEY}&page=8`,
 


  }

  export default requests;