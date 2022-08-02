# Getting Started

El proyecto lista las facturas del endpoint (bloqueado por cors en el navegador) por lo cual se copió la información
obtenida mediante postman.

Al seleccionar una factura si ésta posee notas de créditos, estas se listan a continuación mas abajo y al momento de
seleccionar una nota de crédito se muestra en pantalla el botón de asignar.

Al hacer click en el botón asignar aparece un modal indicando el id de la factura con su monto en CLP y el id de la nota
de crédito con su monto en CLP, además del nuevo monto final de la Factura.

Al confirmar el modal, se resetean los estados, pero se actualiza el monto final de la factura a la cual se le aplicó la
nota de crédito. Finalmente, en conjunto con lo anterior la nota de crédito se elimina de la lista original solo dejando
las notas no asignadas.

`npm start` inicia el proyecto