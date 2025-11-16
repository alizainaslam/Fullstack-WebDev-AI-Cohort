import * as faceapi from "face-api.js";
import { useEffect, useRef } from "react";

const FacialExpression = () => {
  const videoRef = useRef();

  const laodModels = async () => {
    const MODEL_URL = "/models";

    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

    startVideo();
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.log("Camera error: ", err));
  };

  const onPlay = () => {
    setInterval(async () => {
      if (!videoRef.current) return;

      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections.length === 0 || !detections[0].expressions) {
        console.log("Something went wrong!");
        return;
      }

      const expression = detections[0]?.expressions;
      let _maxExpression = 0;
      let _dominate = "";
      for (let key in expression) {
        if (expression[key] > _maxExpression) {
          _maxExpression = expression[key];
          _dominate = key;
        }
      }
      console.log(_dominate);
    }, 5000);
  };

  return (
    <>
      <h1>Moody Player</h1>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="320"
        height="420"
        onPlay={onPlay}
      />
      <button onClick={laodModels}>Detact Mood</button>
    </>
  );
};

export default FacialExpression;
