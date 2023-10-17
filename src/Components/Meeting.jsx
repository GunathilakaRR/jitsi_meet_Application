

import React from 'react'
import { JitsiMeeting, JaaSMeeting } from '@jitsi/react-sdk';
import SpinnerView from './SpinnerView'; 
function Meeting() {
  // const jitsiMeetRef = useRef(null);

  const setIframeHeight = (iframeRef) => {
    if (iframeRef) {
      iframeRef.style.height = '100vh';
    }
  };

  return (
    <div>
      
      <JaaSMeeting
      appId="vpaas-magic-cookie-39f5ab9db36441c186e4b2b4dc89bbda"
      roomName="YourRoomName"
      jwt="eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtMzlmNWFiOWRiMzY0NDFjMTg2ZTRiMmI0ZGM4OWJiZGEvNmNlMDFkLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2OTc1MjIyMDcsImV4cCI6MTY5NzUyOTQwNywibmJmIjoxNjk3NTIyMjAyLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMzlmNWFiOWRiMzY0NDFjMTg2ZTRiMmI0ZGM4OWJiZGEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6ZmFsc2UsIm5hbWUiOiJydXNpcnVndW5hdGhpbGFrYTExOCIsImlkIjoiIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJydXNpcnVndW5hdGhpbGFrYTExOEBnbWFpbC5jb20ifX0sInJvb20iOiIqIn0.Ml19SjMj_nE7FiQcu8QtLc3lDF-UFXumUFFWG6fFR7oJwEQ6ecj4tg0hi6Y4hNysdGfQfLIiZOGMygKACr-UjvDw-ojPvDEvh0urTlTAKqTPDLU-r7VveBKBjv06gZF2toVBppLSXdRntM9rNgl-cb2tx9J5NfUGdX1N2vsDY77mCqZkgUOqbcvIVuTi7zguBXHT-3kVCSMgL0HfGXP1qRLp6g03YAp-K3axvCPdhEZLwUPqUW-gB7mkQS144Dk3qX1GcCmJeC1k484Aen59nb1G2cS7Xdr3gx2uUPpAaiQhMLTF5YIEM1kWsCZknC59lB0i4hqj7YaXPH7_AiFqBA"
      configOverwrite={{
        disableThirdPartyRequests: true,
        disableLocalVideoFlip: true,
        backgroundAlpha: 0.5
      }}
      interfaceConfigOverwrite={{
        VIDEO_LAYOUT_FIT: 'nocrop',
        MOBILE_APP_PROMO: false,
        TILE_VIEW_MAX_COLUMNS: 4
      }}
      spinner={SpinnerView} // Provide your custom spinner component
      getIFrameRef={setIframeHeight} // Apply styles to the iframe
      onApiReady={(externalApi) => {
        // Handle external API events and commands here
      }}
    />
    </div>
  )
}

export default Meeting
