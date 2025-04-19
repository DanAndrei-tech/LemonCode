export function pintarDatos({
  pais,
  nombreBanco,
  oficina,
  digitoControl,
  cuenta,
}: {
  pais: string;
  nombreBanco: string;
  oficina: string;
  digitoControl: string;
  cuenta: string;
}): void {
  const datosDiv = document.querySelector(".datos") as HTMLDivElement;

  datosDiv.innerHTML = `
    <h3>Datos del IBAN</h3>
    <p style="color:green;">✔️ El IBAN está bien formado</p>
    <p style="color:green;">✔️ El IBAN es válido</p>
    <ul>
      <li><strong>Banco:</strong> ${nombreBanco}</li>
      <li><strong>Codigo Sucursal:</strong> ${oficina}</li>
      <li><strong>Digito de control:</strong> ${digitoControl}</li>
      <li><strong>Numero de Cuenta:</strong> ${cuenta}</li>
      <li><strong>Pais:</strong> ${pais}</li>
    </ul>
  `;
}
