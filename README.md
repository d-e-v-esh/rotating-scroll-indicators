# **Scroll Indicator with Framer Motion and Next.js**

Welcome to the Scroll Indicator repository! This Next.js project contains a unique and interactive React scroll indicator component that rotates as the user scrolls down the page. I built it using Framer Motion to create a smooth scrolling experience and eye-catching animations.

Before diving into the implementation of this Scroll Indicator, **I recommend pairing it with the Momentum Scrolling feature** discussed in my **[earlier blog](https://medium.com/@devesh.codes/craft-a-smooth-momentum-scrolling-experience-with-react-and-framer-motion-72533d3cfc92)** for the best experience. It's essential to ensure **both components use the same spring physics properties** to create uniform animations in your web app. That's why I have implemented both of these components in this repository.

## **Overview**

This repository contains the following key files:

- **`ScrollIndicator.tsx`**: The main React component file for the scroll indicator.
- **`_app.tsx`** where the scroll indicator is implemented.

## **Usage**

To use the **`ScrollIndicator`** component in your own project, simply follow these steps:

1. Copy the **`ScrollIndicator.tsx`** file into your project's components directory.
2. Import the **`ScrollIndicator`** component into the root file of your project:

```typescript
import ScrollIndicator from "@/components/ScrollIndicator";
```

3. Add the **`<ScrollIndicator />`** to your root component. Here's how I'm using it with the **`<MomentumScroll />`** in my Next.js project:

```typescript
import MomentumScroll from "@/components/MomentumScroll";
import ScrollIndicator from "@/components/ScrollIndicator";
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
```

4. Customize the component according to your preferences by modifying the styles, positioning, and rotation values inside the **`ScrollIndicator.tsx`** file.

That's it! Now you can enjoy a unique and interactive scroll indicator in your project. Feel free to customize it further to suit your specific needs. **If you like this project then don't forget to star it and follow me on GitHub– it motivates me to create more projects like this.**

## **_Happy coding!_**
