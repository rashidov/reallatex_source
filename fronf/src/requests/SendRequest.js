export default function SendRequest(url){
  return fetch(url).then(response => {
    return response.json()
  })
}