/** @format */
"use client";
import React, { useEffect } from "react";
declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

const MyHomeMap = () => {
  React.useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(37.465896, 126.9316562),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);
        const map2 = new kakao.maps.Map(container, options);
        const markerPosition = new kakao.maps.LatLng(37.465896, 126.9316562);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map2);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default MyHomeMap;