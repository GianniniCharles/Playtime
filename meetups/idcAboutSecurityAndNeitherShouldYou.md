Joel Lord is teaching.

Techincal evangelist for ground zero.

Transitioned from his travel life to using a credit card, to bank auth.

OAuth is like bank authorizing a credit card.

Token based authentication makes things simple.

Website tries to access resource on api.
- Api redirects to authorization server, and then authorization server tells api it's ok.

- The biggest reason to do that is to delegate security things. Pass the puck.


Tradional Applications
- Browser requests a login page.
- login form, credentials, server goes to the database, and will send back a session key (cookie with an id number that keeps track of user connection, what they have access to, etc); Has some flaws.


Devices/platforms like Alexa, etc can't do a login form.


- In PHP, user management can be a nightmare.
- Trying to share credentials to post to another API can be an issue.


OAuth isn't magic/perfect, but it helps decrease problems.


OAuth -The Flows

Authorization Code Flows: More secure, but more work for implementations.

So:
- SPA, then server behind it. Server will access api which contains secured data.
- User directs to authorization server to login if not logged in.
- On auth server you can add two factor authentication.
- Browser will get auth code, server will get the code, go back to auth serv and ask for access token and refresh token.
- ALl your browser needs to do is pass it over to authentication.



You can also do Implicit flow: The same, but not as secure.

- SPA
  - Will check if authenticated. If not, redirect straight to auth server.
  - Auth server will give token and allow you to fetch data on api.
  - If anyone gets that access token from the browser, someone could log in as you. and no refresh token.


Tokens 101.
- JSON Web Tokens in this case.
- Access Token:
  - Gives you access to resource: expiration time 
        - (You decide: consider security/ux)
  - Controls access to your api.
  - Short lived



- Refresh Token
    - Enables you to get a new token.
    - Long lived
    - Can be revoked.
    - Lets you get another access token.
    - Example (Github, Google, Facebook when it comes to services you are logged into for a long time.).


- Tokens
  - WS-Federated
  - SAML (for xml)
  - JWT (Json Web Tokens)
      - Easy to understand,transport, simple, lightweight.
      - Has Header, 
      - Payload(json object), (scope means permission level, you can use audience, issuer, _id, sub, etc); 
      - Signature.
  - Custom stuff
  - More

You can use the link below to access JWT and decode what a JWT contains.
https://jwt.io/


In code.

Ask question: Should encrypt password before sending to the server?

The client should never have access to the secret key or it can get hacked.

then you can have node/express redirecdt with callback with the access token.


with oauth will run on a different server. 
- randopeeop makes random click bait.

He starts another server and has a callback.

- Add authorization header, lightweight, easy to pass around and etc.

- He is redirected to a totally different server, and once he's done, he's redirected to his SPA. no username and a password.

Now he's logged in. 

With API side, you just need the middleware.
Front end, you'd just need to pass the access token around.



Authentication:

In real life, a driver's license is better id than a social security card because it has a picture and other information about you, such as your class, address, etc.


Open ID Connect handles authentication.

- Build on top of OAuth2.0

- OpenID Connect (OIDC) is to OpenID what JavaScript is to Java.

- Provides Identity Tokens in JWT format.
- Uses a /userinfo endpoint to provide the info.

THe web giants didn't get behind you because they wanted our information for themselves.


Access token with right permissions can access.

- Scopes are:
  - Open id
  - profile
  - email
  - address
  - phone
  - etc.


  The difference is that the scope will be part of original request, openid=/profile etc.

  Http://openidconnect.net



https://openidconnect.net/
- You can delegate the security stuff * authentication by passing to authorization.
- A single developer working alone will not build as well as a team.
- By using Oauth, you delegate security. to the specialists.



- The companies using this.

- Google, Github, Facebook does their own thing but similar principles.
- Governments, Financial institutions, are moving towards OAuth.

It is now the standard. As long as they follow the standard, you can add different providers.

- You don't need SSL key to use oauth, but you should.
- SSL protects you from the man in the middle attacks using oauth.
- Creating a user.
- 