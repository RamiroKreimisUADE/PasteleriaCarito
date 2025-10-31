document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------
  // Función general para formatear números como precios
  // ----------------------------
  const formato = num => `$${num.toLocaleString("es-AR")}`;

  // ----------------------------
  // Función principal para actualizar precios según el tipo de promoción
  // ----------------------------
  function actualizarPromo(form) {
    const tipo = form.dataset.promo;
    const selects = form.querySelectorAll("select");
    const inputCantidad = form.querySelector("input[type='number']");
    const normalEl = form.querySelector(".precio-normal");
    const descuentoEl = form.querySelector(".precio-descuento");

    // Calcular precios base
    let totalNormal = 0;

    selects.forEach(select => {
      totalNormal += parseFloat(select.value);
    });

    const cantidad = inputCantidad ? parseInt(inputCantidad.value) : 1;
    if (selects.length === 1) totalNormal *= cantidad;

    // ----------------------------
    // Aplicar reglas de descuento
    // ----------------------------
    let totalConDescuento = totalNormal;

    if (tipo === "1") {
      // Promo 1: 50% OFF en la tercera torta
      const precioUnitario = parseFloat(selects[0].value);
      const tortasDescuento = Math.floor(cantidad / 3);
      const descuento = tortasDescuento * (precioUnitario * 0.5);
      totalConDescuento -= descuento;

    } else if (tipo === "2") {
      // Promo 2: 10% OFF directo
      totalConDescuento = totalNormal * 0.9;

    } else if (tipo === "3") {
      // Promo 3: Combo dulce - 15% OFF sobre el total
      totalConDescuento = totalNormal * 0.85;
    }

    // ----------------------------
    // Mostrar resultados
    // ----------------------------
    normalEl.textContent = formato(totalNormal);
    descuentoEl.textContent = formato(totalConDescuento);
  }

  // ----------------------------
  // Inicialización para todas las promos
  // ----------------------------
  document.querySelectorAll(".promo-form").forEach(form => {
    form.querySelectorAll("select, input").forEach(el => {
      el.addEventListener("change", () => actualizarPromo(form));
      el.addEventListener("input", () => actualizarPromo(form));
    });
    actualizarPromo(form);
  });
});
