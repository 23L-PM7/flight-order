import { Player, Controls } from "@lottiefiles/react-lottie-player";

export function WeatherLoader() {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/51615ad5-97b5-4bcf-a6bb-d7f7144ab0f3/PnRqhb4UA1.json"
      style={{ height: "500px", width: "500px" }}
    ></Player>
  );
}
