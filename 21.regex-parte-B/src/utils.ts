export function renderizarImagenes(urls: string[]): string {
  return `
    <h2>Enlaces encontrados:</h2>
    <div class="grid-imagenes">
      ${urls
        .map(
          (url) => `
          <div class="img-card">
            <img src="${url}" alt="imagen" />
            <p>${url}</p>
          </div>`
        )
        .join("")}
    </div>
  `;
}
