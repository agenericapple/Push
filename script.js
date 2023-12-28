function check() {
  if ('serviceWorker' in navigator) {
    console.log("Service Worker is supported and starting");
  } else {
    throw new Error('Service Worker went to the Backrooms or some shit');
  }
}

function register() {
  const registration = await navigator.serviceWorker.register('/sw.js');
  return registration;
}

check();
register();