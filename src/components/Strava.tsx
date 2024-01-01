import React from "react";

interface StravaIframeProps {
  stravaID: string;
  title?: string;
}

const StravaIframe: React.FC<StravaIframeProps> = ({ stravaID, title }) => {
  const stravaSrc = `https://strava-embeds.com/activity/${stravaID}`;
  return (
    <details>
      <summary className="text-sm text-gray-500">
        {title || "Route Map"}
      </summary>
      <iframe className="pt-1" src={stravaSrc} width="100%" height="770" />
    </details>
  );
};

export default StravaIframe;
