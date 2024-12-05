// pages/_document.js or app/_document.js if you're using the `app` directory
"use client";

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Set the theme color for mobile status bar */}
        <meta name="theme-color" content="#00e6e6" />
      </Head>
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
