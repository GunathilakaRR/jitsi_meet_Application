

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
      jwt="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZwYWFzLW1hZ2ljLWNvb2tpZS0zOWY1YWI5ZGIzNjQ0MWMxODZlNGIyYjRkYzg5YmJkYS9kMzEyMzEifQ.eyJhdWQiOiJqaXRzaSIsImNvbnRleHQiOnsidXNlciI6eyJpZCI6IjE5YzYyNWUzLWI4MWQtNDU1Ny05NmQxLTMyNDA1ODljNDVhNSIsIm5hbWUiOiJydXNpcnVndW5hdGhpbGFrYTExOCIsImF2YXRhciI6Im15IGF2YXRhciB1cmwiLCJlbWFpbCI6InJ1c2lydWd1bmF0aGlsYWthMTE4QGdtYWlsLmNvbSIsIm1vZGVyYXRvciI6InRydWUifSwiZmVhdHVyZXMiOnsibGl2ZXN0cmVhbWluZyI6InRydWUiLCJyZWNvcmRpbmciOiJ0cnVlIiwidHJhbnNjcmlwdGlvbiI6InRydWUiLCJvdXRib3VuZC1jYWxsIjoidHJ1ZSJ9fSwiaXNzIjoiY2hhdCIsInJvb20iOiIqIiwic3ViIjoidnBhYXMtbWFnaWMtY29va2llLTM5ZjVhYjlkYjM2NDQxYzE4NmU0YjJiNGRjODliYmRhIiwiZXhwIjoxNjk3NzQ1NzE3LCJuYmYiOjE2OTc3MzQ5MDcsImlhdCI6MTY5NzczNDkxNn0.TYl3_IDpXp4Ydu8OaLrfbauIq4rvT5CdkjBfPfFd3hKl73iuCZ0U2naR3UUU-lHnkPPWEv592k9W4vvSViJRGacMZae4w6Tdjc1cggxF-9Kv8r84UxgDbVy-7pPwJneX9aZtv1hxQKW67S2mqsNZxz1lo6ufk7ZlCoVMQTOEK_AjdXse0M_ZS-HYyRnt_MgbX1-JjyHkxxitDTSLKHKMDaUNsq_PlTCU6QFY39jXPI9D_14XveVoUEaHGdHU9AOm31r2vDw-6uXBsEmqRKRe16nVewzZGMCNbaIioY2FWaA6hCFeKNG0lEk6E612mmEGWTlffPucCoLhwh-V-tSB2w"
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
