function calcularPromo1() {
    const precio = parseFloat(document.getElementById("promo1-precio").value);
    const cantidad = parseInt(document.getElementById("promo1-cantidad").value);
    let totalSinDescuento = precio * cantidad;
    let descuento = 0;

    if (cantidad >= 2) {
        descuento = precio * 0.5; // 50% en el segundo
    }

    const totalFinal = totalSinDescuento - descuento;
    document.getElementById("promo1-resultado").innerHTML =
        `<p>Total sin descuento: $${totalSinDescuento.toLocaleString()}</p>
        <p>Descuento: $${descuento.toLocaleString()}</p>
        <p><strong>Total final: $${totalFinal.toLocaleString()}</strong></p>`;
}

function calcularPromo2() {
    const precio = parseFloat(document.getElementById("promo2-precio").value);
    const cantidad = parseInt(document.getElementById("promo2-cantidad").value);
    const gruposDeTres = Math.floor(cantidad / 3);
    const restantes = cantidad % 3;

    let totalSinDescuento = precio * cantidad;
    let descuento = gruposDeTres * precio; // paga 2 de cada 3
    const totalFinal = totalSinDescuento - descuento;

    document.getElementById("promo2-resultado").innerHTML =
        `<p>Total sin descuento: $${totalSinDescuento.toLocaleString()}</p>
        <p>Descuento: $${descuento.toLocaleString()}</p>
        <p><strong>Total final: $${totalFinal.toLocaleString()}</strong></p>`;
}

function calcularPromo3() {
    const precio = parseFloat(document.getElementById("promo3-precio").value);
    const cantidad = parseInt(document.getElementById("promo3-cantidad").value);
    let totalSinDescuento = precio * cantidad;
    let descuento = 0;

    if (totalSinDescuento > 30000) {
        descuento = totalSinDescuento * 0.1; // 10%
    }

    const totalFinal = totalSinDescuento - descuento;
    document.getElementById("promo3-resultado").innerHTML =
        `<p>Total sin descuento: $${totalSinDescuento.toLocaleString()}</p>
        <p>Descuento: $${descuento.toLocaleString()}</p>
        <p><strong>Total final: $${totalFinal.toLocaleString()}</strong></p>`;
}

/*
------------------------ OLD SECTION
<!-- Promociones -->
<section id="promociones" class="py-5 bg-light text-dark">
<div class="container">
<h2 class="fw-bold text-center mb-5">Promociones Especiales</h2>

<div class="row g-4">
    <!-- Promoción 1 -->
    <div class="col-md-4">
        <div class="card h-100 shadow-sm p-3">
            <h4 class="text-center mb-3">Llevá 2 y obtené 50% en el segundo</h4>
            <label for="promo1-precio" class="form-label">Precio unitario ($)</label>
            <p class="fw-bold">$25.000</p>
            <input type="hidden" id="promo1-precio" value="25000">
            <label for="promo1-cantidad" class="form-label">Cantidad</label>
            <input type="number" id="promo1-cantidad" class="form-control mb-3" min="1" value="1">
            <button class="btn btn-dark w-100" onclick="calcularPromo1()">Calcular</button>
            <div id="promo1-resultado" class="mt-3 text-center"></div>
        </div>
    </div>

    <!-- Promoción 2 -->
    <div class="col-md-4">
        <div class="card h-100 shadow-sm p-3">
            <h4 class="text-center mb-3">3x2 en productos seleccionados</h4>
            <label for="promo2-precio" class="form-label">Precio unitario ($)</label>
            <input type="number" id="promo2-precio" class="form-control mb-2" value="20000">
            <label for="promo2-cantidad" class="form-label">Cantidad</label>
            <input type="number" id="promo2-cantidad" class="form-control mb-3" min="1" value="1">
            <button class="btn btn-dark w-100" onclick="calcularPromo2()">Calcular</button>
            <div id="promo2-resultado" class="mt-3 text-center"></div>
        </div>
    </div>

    <!-- Promoción 3 -->
    <div class="col-md-4">
        <div class="card h-100 shadow-sm p-3">
            <h4 class="text-center mb-3">10% de descuento en compras mayores a $30.000</h4>
            <label for="promo3-precio" class="form-label">Precio unitario ($)</label>
            <input type="number" id="promo3-precio" class="form-control mb-2" value="15000">
            <label for="promo3-cantidad" class="form-label">Cantidad</label>
            <input type="number" id="promo3-cantidad" class="form-control mb-3" min="1" value="1">
            <button class="btn btn-dark w-100" onclick="calcularPromo3()">Calcular</button>
            <div id="promo3-resultado" class="mt-3 text-center"></div>
        </div>
    </div>
</div>
</div>
</section>
*/