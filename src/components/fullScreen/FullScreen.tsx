"use client";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import FullScreenPrompt from ":/components/fullScreen/FullScreenPrompt";

function FullScreen() {
  const [showPrompt, setShowPrompt] = useState(isMobile);

  const handleAccept = () => {
    setShowPrompt(false);
    const requestFullScreen = document.documentElement.requestFullscreen;

    if (requestFullScreen) {
      requestFullScreen.call(document.documentElement);
    }
  };

  const handleDecline = () => {
    setShowPrompt(false);
  };

  return (
    <>
      {showPrompt && (
        <FullScreenPrompt onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </>
  );
}

export default FullScreen;
