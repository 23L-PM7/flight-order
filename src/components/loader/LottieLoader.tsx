import { Player, Controls } from "@lottiefiles/react-lottie-player";

export function LottieLoader() {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/519858df-6318-44fa-ac3d-58d0ca53f443/YjLM5GLmsS.json"
      style={{ height: "500px", width: "500px" }}
    ></Player>
  );
}
