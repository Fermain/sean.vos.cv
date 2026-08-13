async function printWhenImagesReady(button) {
  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = 'Preparing print…';

  const images = Array.from(document.images);
  for (const img of images) {
    if (img.loading === 'lazy') {
      img.loading = 'eager';
    }
  }

  await Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalWidth > 0) {
        return img.decode?.().catch(() => undefined) ?? Promise.resolve();
      }
      return new Promise((resolve) => {
        const done = () => resolve();
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      });
    })
  );

  // Brief settle so the browser paints decoded images before the print snapshot.
  await new Promise((resolve) => setTimeout(resolve, 150));

  window.print();
  button.disabled = false;
  button.textContent = originalLabel;
}

window.printWhenImagesReady = printWhenImagesReady;
