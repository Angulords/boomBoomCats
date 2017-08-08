import auth0 from 'auth0-js';

export default class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'michaelkdai.auth0.com',
            clientID: 'Bt93UxMPclylp6P1iwcOY6ofPQsNeSZo',
            redirectUri: 'http://localhost:3000/',
            audience: 'https://michaelkdai.auth0.com/userinfo',
            responseType: 'token id_token',
            scope: 'openid profile'
        });
        this.userProfile = {};
        this.getProfile = this.getProfile.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    getProfile(accessToken, cb) {
        this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
            this.userProfile = profile;
        }
            cb(err, profile);
        });
    }
    login() {
        // console.log(this.auth0);
        this.auth0.authorize();
    }
    handleAuthentication(cb) {
        this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
            cb(authResult.accessToken);
            // history.replace('/home');
        } else if (err) {
            // history.replace('/home');
            console.log(err);
        }
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        
        // navigate to the home route
        // history.replace('/home');
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        // history.replace('/home');
    }

    isAuthenticated() {
        // Check whether the current time is past the 
        // access token's expiry time

        // return localStorage.length > 0;
        // console.log(localStorage)
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}