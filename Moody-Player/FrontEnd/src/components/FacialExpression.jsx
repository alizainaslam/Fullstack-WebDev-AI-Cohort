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

  const onPlay = async () => {
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
  };

  return (
    <div className="py-16 flex flex-col w-full justify-center items-center lg:flex-row gap-10">
      <video
        ref={videoRef}
        autoPlay
        muted
        onPlay={onPlay}
        className="w-[380px] h-[250px] object-cover rounded-lg"
      />
      <button
        onClick={laodModels}
        className="bg-gray-900 text-white px-4 py-3 rounded-lg cursor-pointer"
      >
        Detact Mood
      </button>
    </div>
  );
};

export default FacialExpression;
