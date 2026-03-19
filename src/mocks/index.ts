async function initMocks() {
  if (typeof window === "undefined") {
    // Para SSR o pruebas, usa setupServer
    // const { server } = await import("./server");
    // server.listen();
  } else {
    // Para navegador, usa setupWorker
    const { worker } = await import("./browser");
    await worker.start({
      onUnhandledRequest: "bypass", // Permite otras solicitudes
    });
  }
}

initMocks();

export {};
