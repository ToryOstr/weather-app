import arrow from "./arrow.png";

export default function WindDirection(deg) {
  let dynamicStyleImg = {
    width: "20px",
    height: "20px",
    transform: `rotate(${deg}deg)`,
  };

  if ((deg > 337.5 && deg <= 360) || (deg >= 0 && deg <= 22.5)) {
    return (
      <>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        <span>N</span>
      </>
    );
  }

  if (deg > 22.5 && deg <= 67.5) {
    return (
      <>
        
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" /><span>N-E</span>
      </>
    );
  }

  if (deg > 67.5 && deg <= 112.5) {
    return (
      <>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        <span>E</span>
      </>
    );
  }

  if (deg > 112.5 && deg <= 157.5) {
    return (
      <>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        <span>S-E</span>
      </>
    );
  }

  if (deg > 157.5 && deg <= 202.5) {
    return (
      <>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        <span>S</span>
      </>
    );
  }

  if (deg > 202.5 && deg <= 247.5) {
    return (
      <>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        <span>S-W</span>
      </>
    );
  }

  if (deg > 247.5 && deg <= 292.5) {
    return (
      <>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        <span>W</span>
      </>
    );
  }

  if (deg > 292.5 && deg <= 337.5) {
    return (
      <>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
        <span>N-W</span>
      </>
    );
  }
}
