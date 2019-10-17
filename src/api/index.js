import config from './config'

const {apiKey} = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`

export default
function getArtists(country){
  return fetch(URL.replace(':country', country))
  .then(res => res.json())
  .then(json => json.topartists.artist)
}