function parseDate(input) {
	let parts = input.match(/\d+/g);
	// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
	return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}

function difData() {
	const resultado = document.getElementById('res')
	const select = document.querySelector('select#formato')
	const datas = [// as duas datas estão dentro de uma array
		document.querySelector('input#dataI'),
		document.querySelector('input#dataF')
	]//é possível usar o método .test() dentro de um if, pois esse metodo retorna um valor lógico
	if (/\d{4}-\d{2}-\d{2}/g.test(datas[0].value) && /\d{4}-\d{2}-\d{2}/g.test(datas[1].value)) {
		const diaI = parseDate(datas[0].value)
		const diaF = parseDate(datas[1].value)
		let difTempo = (Math.abs(diaI.getTime() - diaF.getTime()))
		switch (select.value) {
			case 'dias':
				let difDias = (difTempo / (1000 * 60 * 60 * 24))
				resultado.innerHTML = `<p>A diferença de dias entre a data <strong>${diaI.getDate()}/${diaI.getMonth()}/${diaI.getFullYear()}</strong>, e a data <strong>${diaF.getDate()}/${diaF.getMonth()}/${diaF.getFullYear()}</strong> é de <strong>${difDias} dias</strong>.</p>`
				break;

			case 'meses':
				let difMeses = Math.round(difTempo / (1000 * 60 * 60 *24 * 7 * 4))
				resultado.innerHTML = difMeses
				break;

			case 'anos':
				let difAnos = Math.abs(diaI.getFullYear() - diaF.getFullYear())
				resultado.innerHTML = difAnos
				break;

			default:
				resultado.innerHTML = '<p>Formato inválido</p>'
				resultado.innerHTML += select.value
				break;
		}
		
	} else {
		resultado.innerHTML = `<p>Valor de data Inválido</p>`
	}
}