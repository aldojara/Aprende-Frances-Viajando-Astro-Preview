// Pruebas permanentes del verificador de la web compilada (npm run test:verificar). GitHub las ejecuta en cada
// pull request. Si alguien cambia el detector y bloquea contenido válido, o deja pasar una marca interna, fallan.
import { test } from "node:test";
import assert from "node:assert/strict";
import { revisarHtml } from "./verificar-publicacion.mjs";

const pagina = (cuerpo) => `<!doctype html><html><body><main>${cuerpo}</main></body></html>`;

const debenBloquearse = [
  ["nota TODO: con dos puntos", "<p>TODO: terminar explicación</p>"],
  ["nota FIXME: con dos puntos", "<p>FIXME: revisar el ejemplo</p>"],
  ["nota entre dobles corchetes", "<p>El imparfait describe. [[PENDIENTE: revisar ejemplo]]</p>"],
  ["etiqueta interna de tipo de práctica", '<span class="u-error-tag-tipo">Tipo T1</span>'],
  ["nombre interno de un campo de datos", "<p>Estado: coverageStatus</p>"],
  ["nombre interno en un atributo visible", '<img src="x.png" alt="paginaUnidad">'],
  ["texto de relleno", "<p>Lorem ipsum dolor sit amet.</p>"],
  ["dato vacío de la plantilla", "<h3>undefined</h3>"],
];

const debenPermitirse = [
  ["la palabra «semilla»", '<p lang="fr">Une graine : una semilla.</p>'],
  ["«TODO» en mayúsculas sin dos puntos", "<h2>TODO LO QUE NECESITAS SABER</h2>"],
  ["«todo» en minúsculas", "<p>Te lo cuento todo: el trabajo, el frío, la ciudad.</p>"],
  ["corchetes simples", "<p>Elle [la voisine] est gentille.</p>"],
  ["«Tipo T1» en una frase tachada a propósito", '<span class="u-frase-mal" lang="fr">Je finisais. Tipo T1</span>'],
  ["una nota interna dentro de un script", "<script>// TODO: optimizar</script><p>Texto normal.</p>"],
  ["el texto «Próximamente»", "<p>Próximamente</p>"],
];

for (const [nombre, html] of debenBloquearse) {
  test(`bloquea: ${nombre}`, () => {
    assert.ok(revisarHtml(pagina(html)).errores.length > 0, `debía bloquear: ${html}`);
  });
}

for (const [nombre, html] of debenPermitirse) {
  test(`permite: ${nombre}`, () => {
    assert.deepEqual(revisarHtml(pagina(html)).errores, [], `no debía bloquear: ${html}`);
  });
}

test("«Borrador» da aviso, no error", () => {
  const resultado = revisarHtml(pagina("<p>BORRADOR · pendiente de revisión</p>"));
  assert.deepEqual(resultado.errores, []);
  assert.equal(resultado.avisos.length, 1);
});
