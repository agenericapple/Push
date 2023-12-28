async function check() {
  console.log("starting check")
  if ('serviceWorker' in navigator) {
    console.log("Service Worker is supported and starting");
  } else {
    throw new Error('Service Worker went to the Backrooms or some shit');
  }
}

function register() {
  onsole.log("starting registration")
  const registration = await navigator.serviceWorker.register('async function check() {
      if ('serviceWorker' in navigator) {
        console.log("Service Worker is supported and starting");
        await register();
      } else {
        throw new Error('Service Worker went to the Backrooms or some shit');
      }
    }

    async function register() {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }

    check();
