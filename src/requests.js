  const API_KEY="675858618060cf82c61a70ebd38cf882"

  const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&page=1`,
    fetchTrending1: `/trending/all/week?api_key=${API_KEY}&page=2`,
    fetchTrending2: `/trending/all/week?api_key=${API_KEY}&page=3`,
    fetchTrending3: `/trending/all/week?api_key=${API_KEY}&page=4`,
    fetchTrending4: `/trending/all/week?api_key=${API_KEY}&page=5`,
    // fetchTrending5: `/trending/all/week?api_key=${API_KEY}&page=6`,
    // fetchTrending6: `/trending/all/week?api_key=${API_KEY}&page=7`,
    // fetchTrending7: `/trending/all/week?api_key=${API_KEY}&page=8`,
 


  }

  export default requests;