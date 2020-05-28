const axios = require('axios');

async function obterSeason(){
    const result = await axios({
        "method":"GET",
        "url":"https://www.scorebat.com/video-api/v1/"})
        .then((response)=>{
            return response.data[0]["title"]
        })
        .catch((error)=>{
          console.log("error")
        })
    return result
}

module.exports = { obterSeason }