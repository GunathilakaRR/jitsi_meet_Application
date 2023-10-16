

import React from 'react'
import { JitsiMeeting, JaaSMeeting } from '@jitsi/react-sdk';
import SpinnerView from './SpinnerView'; 
function Meeting() {
  // const jitsiMeetRef = useRef(null);

  const setIframeHeight = (iframeRef) => {
    if (iframeRef) {
      iframeRef.style.height = '90vh';
    }
  };

  return (
    <div>
      
      <JaaSMeeting
      appId="vpaas-magic-cookie-39f5ab9db36441c186e4b2b4dc89bbda"
      roomName="YourRoomName"
      jwt="eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtMzlmNWFiOWRiMzY0NDFjMTg2ZTRiMmI0ZGM4OWJiZGEvNmNlMDFkLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2OTc0NDYzNDQsImV4cCI6MTY5NzQ1MzU0NCwibmJmIjoxNjk3NDQ2MzM5LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMzlmNWFiOWRiMzY0NDFjMTg2ZTRiMmI0ZGM4OWJiZGEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6InJ1c2lydWd1bmF0aGlsYWthMTE4IiwiaWQiOiJnb29nbGUtb2F1dGgyfDExMDc0MjQ5OTc4Mjg1NDEwNTU4MiIsImF2YXRhciI6IiIsImVtYWlsIjoicnVzaXJ1Z3VuYXRoaWxha2ExMThAZ21haWwuY29tIn19LCJyb29tIjoiKiJ9.bjNpB_0dFdzP9-dgDsWBzRw9odnC2oxuPlK3Z6s1VdpdylqGIhKpVg5eLJlefQ7lZxYEYrS7XgvGILW6YkybuT21wD3n8J49XouRN8g1OAi_BiKuFeqohKCFzgq0plr7JO81Aq_CVbXI6gpwiu2bfENlKuehm07xL8ihFO76HAPRGt6kCnZRomQGWuPu9CRne3JyjGa4PoGyPkp-8yDGVo3uajNQkE8418r_Vi3AlaxG7tTPCvQpMTVGEczrLqZjgwIvFU8q2MKob-1EWxxlV2Ot4AnDCPBgpWB8r7Upl_61tTM3G0hMqwYln7Ss0HFaUQ9S72PAink7X0sfKXouIQ"
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
