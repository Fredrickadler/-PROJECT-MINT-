'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const initializeApp = async () => {
      try {
        if (window.FarcasterMiniApps && window.FarcasterMiniApps.MiniAppSDK) {
          const sdk = new window.FarcasterMiniApps.MiniAppSDK();
          if (sdk.actions && sdk.actions.ready) {
            await sdk.actions.ready();
            console.log("SDK ready called!");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    initializeApp();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#855dcd]">
      <h1 className="text-4xl font-bold text-white">Cosmic Fragment NFT</h1>
    </div>
  );
}