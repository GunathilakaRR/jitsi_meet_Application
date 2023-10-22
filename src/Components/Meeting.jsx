

import React, { useEffect } from 'react'
import { useState } from 'react';
import { JitsiMeeting, JaaSMeeting } from '@jitsi/react-sdk';
import SpinnerView from './SpinnerView'; 
import getToken from '../services/authService';
import axios from 'axios'



const Meeting = () => {

  // useEffect(()=>{
  //   const getToken = async ()=>{
  //     const response = await fetch(getToken);
  //     const responseData = await response.json();

  //     console.log(responseData)
  //   }
  // }, [])



  const [t, setT] = useState("");

  const setToken = async () => {
    setT(await getToken());
  }

  useEffect(()=>{
    setToken();
  },[])
  
  console.log("jwt token: ", t);




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
      jwt={t.data}
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
