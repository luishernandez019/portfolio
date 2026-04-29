/// <reference types="vite/client" />
/// <reference types="vite-imagetools" />

declare module "*&format=webp" {
  const src: string;
  export default src;
}

declare module "*&as=srcset" {
  const srcset: string;
  export default srcset;
}
