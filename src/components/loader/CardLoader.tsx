import { Player, Controls } from "@lottiefiles/react-lottie-player";

export function CardLoader() {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/9b9d8d32-d800-4e14-8949-9756bf016dda/9SInWclc76.json"
      style={{ height: "300px", width: "300px" }}
    ></Player>
  );
}
