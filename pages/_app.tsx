import { RecoilRoot } from "recoil";
import { DebugObserver } from "../states/observer";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <div className="mx-auto bg-gray-100">
        <div className="container mx-auto h-screen">
          <Component {...pageProps} />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
