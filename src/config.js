export default {
  api: {
    baseUrl: 'https://api.spotify.com/v1',
    //authToken: 'https://accounts.spotify.com/api/token',
    authUrl: 'https://accounts.spotify.com/authorize',
    /**
     * La config de mi app cliente registrada en spotify for devs, usare el flujo 
     * de autenticacion implicito
     */
    clientId: 'a5294a56af9e4dd5a60f8a4bd103b831',
    redirectUri: 'http://localhost:3000/callback',
    scopes: [
      "user-top-read",
      "user-read-currently-playing",
      "user-read-playback-state",
    ]
  }
}
