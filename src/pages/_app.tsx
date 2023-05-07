import MomentumScroll from "@/components/MomentumScroll";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MomentumScroll>
        <Component {...pageProps} />
      </MomentumScroll>
      <ScrollIndicator />
    </div>
  );
}
