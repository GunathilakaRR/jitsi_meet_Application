
var jsonwebtoken = require('jsonwebtoken');
var uuid = require('uuid-random');
require('dotenv').config();
const fs = require('fs')

const privateKey = fs.readFileSync('private-key.pem', 'utf-8');
  
    const generate = (privateKey, { id, name, email, avatar, appId, kid }) => {
        const now = new Date()
        const jwt = jsonwebtoken.sign({
          aud: 'jitsi',
          context: {
            user: {
              id,
              name,
              avatar,
              email: email,
              moderator: 'true'
            },
            features: {
              livestreaming: 'true',
              recording: 'true',
              transcription: 'true',
              "outbound-call": 'true'
            }
          },
          iss: 'chat',
          room: '*',
          sub: appId,
          exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
          nbf: (Math.round((new Date).getTime() / 1000) - 10)
        }, privateKey, { algorithm: 'RS256', header: { kid } })
        return jwt;
      }
      
      /**
       * Generate a new JWT.
       */
      const token = generate(privateKey, {
          id: uuid(),
          name: "rusirugunathilaka118",
          email: "rusirugunathilaka118@gmail.com",
          avatar: "my avatar url",
          appId: "vpaas-magic-cookie-39f5ab9db36441c186e4b2b4dc89bbda", // Your AppID ( previously tenant )
          kid: "vpaas-magic-cookie-39f5ab9db36441c186e4b2b4dc89bbda/d31231"
      });
      
      console.log(token);
      module.exports = {token, generate};



