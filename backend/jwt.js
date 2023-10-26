
var jsonwebtoken = require('jsonwebtoken');
var uuid = require('uuid-random');
require('dotenv').config();
const fs = require('fs')
require('dotenv').config();

const privateKey = fs.readFileSync('private-key.pem', 'utf-8');
const genID = uuid();
  
    const generate = ({ id, name, email, avatar, appId, kid }) => {
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
      

      const token = generate({
          id: genID,
          name: process.env.NAME,
          email: process.env.EMAIL,
          avatar: "my avatar url",
          appId: process.env.APPID, 
          kid: process.env.KID
      });
      
      console.log(token);
      module.exports = token;



