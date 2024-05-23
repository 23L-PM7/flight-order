import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Suspense } from "react";

export function TicketLoader() {
  return (
    <Suspense>
      <Player
        autoplay
        loop
        src="https://lottie.host/5e08840e-36b6-47c9-ac08-80f9150d651d/J3YTzZThl1.json"
        style={{ height: "120px", width: "700px" }}
      ></Player>
    </Suspense>
  );
}
