
//  import React from 'react';

//  const LoadingCircle: React.FC = () => {
//    const waveStyle = {};

//    // Calculate fixed angle (for example, 180 degrees)
//    const angle = 180;
//    const waveRotation = `rotate(${angle}deg)`;

//    return (
//      <div className="relative w-32 h-32">
//        <div className="customCircle">
//          <div className="customWaveBefore" style={{ transform: waveRotation }}></div>
//          <div className="customWaveAfter" style={{ transform: waveRotation }}></div>
//        </div>
//        <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
//          Loading...
//        </div>
//      </div>
//    );
//  };

//  export default LoadingCircle;



























import React, { useState, useEffect } from 'react';

const LoadingCircle: React.FC<{ percentage: number }> = ({ percentage }) => {
  const [waveStyle, setWaveStyle] = useState({});

  useEffect(() => {
    const calculateWaveStyles = () => {
      const angle = (percentage / 100) * 360;
      const waveRotation = `rotate(${angle}deg)`;

      setWaveStyle({
        transform: waveRotation,
      });
    };

    calculateWaveStyles();
  }, [percentage]);

  return (
    <div className="relative w-32 h-32">
  <div className="customCircle">
    <div className="customWaveBefore" style={waveStyle}></div>
    <div className="customWaveAfter" style={waveStyle}></div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
    {percentage}%
  </div>
</div>
  );
};

export default LoadingCircle;
