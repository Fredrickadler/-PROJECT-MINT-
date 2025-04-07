// global.d.ts
interface Window {
  FarcasterMiniApps?: {
    MiniAppSDK: new () => {
      actions: {
        ready: () => Promise<void>;
      };
    };
  };
}