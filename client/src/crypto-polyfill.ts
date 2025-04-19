// Browser-compatible crypto polyfill
// This is only needed for the build process, not in the browser
if (typeof window !== 'undefined' && window.crypto) {
  // Browser environment with native crypto - do nothing
  console.log('Using native crypto');
} else if (typeof window !== 'undefined' && !window.crypto) {
  // Browser without native crypto - create simple polyfill
  (window as any).crypto = {
    getRandomValues: function(buffer: Uint8Array) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = Math.floor(Math.random() * 256);
      }
      return buffer;
    }
  };
}

export {};