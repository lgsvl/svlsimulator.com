// Allow video to work
declare module '*.mp4';
// Images
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.webp';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

declare module 'supports-webp-sync' {
  function checkWebPSupport(): boolean;
}
