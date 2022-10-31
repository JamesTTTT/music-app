import config from '../config/config.json';

const topTracks = {
    getTopTracks: async function getTopTracks(genre){
        const response = await fetch(
            `${config.top_tracks}&tag=${genre}&api_key=${config.api_key}${config.json}`
        )
        //console.log(`${config.top_tracks}&tag=${genre}&api_key=${config.api_key}${config.json}`)
        const result = await response.json();
        console.log(result.tracks.track)
        return result
    }
}

export default topTracks;