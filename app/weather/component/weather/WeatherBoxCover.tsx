"use client";
import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import WeatherBox from "./WeatherBox";
import WeatherButton from "./WeatherButton";

const WeatherBoxCover = () => {
  const [weather, setWeather] = React.useState(null); //데이타 존재여부
  const [city, setCity] = React.useState(""); //버튼에서 선택한 도시
  const [loading, setLoading] = React.useState(false); //로딩스피너 상태
  const cities = ["London", "New york", "hong kong", "seoul"]; // 버튼, 도시들을 배열로
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      //console.log('현재 내 위치는?',lat,lon)
      getWeatherByCurrentLocation(lat, lon);
      console.log("dd", lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat: any, lon: any) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=83aeb80a15d50ee7a248d29575f07e8d&units=metric`;
    setLoading(true); //fetch시작 전 로딩 작동
    let response = await fetch(url); //비동기적, url을 호출해서 데이타를 가져올때가 기다려줘
    let data = await response.json();
    //fetch함수로 불러왔을때는 그대로 사용할 수 없음,json()으로 변환
    setWeather(data);
    setLoading(false); //fetch끝 로딩 끝
  }; //선택된 도시의 날씨를 가져오는 함수
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83aeb80a15d50ee7a248d29575f07e8d&units=metric`;
    setLoading(true); //fetch시작 전 로딩 작동
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false); //fetch끝 로딩 끝
  };

  //하나로 합쳐서 if로 구분
  React.useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // 선택된 버튼 모양을 바꿔주기 위해 selectedCity={city}추가
  return (
    <div className="">
      <img
        className="absolute z-[-1] top-30px left-0 z-0 w-full h-full object-cover rounded-b-2xl"
        src="/weaherImage/sky.jpg"
        alt="sky"
      />{" "}
      <div className="z-50">
        {loading !== true ? <WeatherBox weather={weather} /> : <MoonLoader />}
        <WeatherButton cities={cities} setCity={setCity} selectedCity={city} />
      </div>
    </div>
  );
};

export default WeatherBoxCover;
