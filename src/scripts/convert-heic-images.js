
export const convertirImagenesHEIC = async () => {
  // Obtiene las imágenes HEIC
  const imagenesHEIC = document.querySelectorAll('img[src$=".heic"]');

  // Recorre las imágenes y las convierte
  for (const imagen of imagenesHEIC) {
    const urlHEIC = imagen.getAttribute("src");

    try {
      // Convierte la imagen HEIC a JPEG
      const arrayBufferJPEG = await heic2any({
        blob: await fetch(urlHEIC).then((res) => res.blob()),
        toType: "image/jpeg",
      });

      // Crea un objeto Blob con el resultado
      const blobJPEG = new Blob([arrayBufferJPEG], { type: "image/jpeg" });

      // Crea una URL para la imagen JPEG convertida
      const urlJPEG = URL.createObjectURL(blobJPEG);

      // Reemplaza la fuente de la imagen con la nueva URL JPEG
      imagen.setAttribute("src", urlJPEG);
    } catch (error) {
      console.error("Error al convertir la imagen HEIC:", error);
    }
  }
};

// Funciones para mostrar y ocultar un indicador de carga (opcional)
const mostrarIndicadorCarga = () => {
  // Implementa la lógica para mostrar un indicador de carga
};

const ocultarIndicadorCarga = () => {
  // Implementa la lógica para ocultar el indicador de carga
};

// Inicia la conversión de imágenes HEIC (opcional)
document.addEventListener("DOMContentLoaded", async () => {
  mostrarIndicadorCarga();
  await convertirImagenesHEIC();
  ocultarIndicadorCarga();
});