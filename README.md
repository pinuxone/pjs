
Autore: Giuseppe Latini => giuseppe.latini AT gmail.com
Oggetto: p.js => Framework Javascript minimale per gestire chiamate ajax
Scopo: evitare pesanti framework, a vantaggio della velocità di caricamento
Data inizio stesura: 31/03/2022
Rel: 0.1 - Data release: 02/04/2022

Esempio di utilizzo:

_.ajax ({
	url: '',
	type: 'post',
	data: {
		csrfmiddlewaretoken: csrf
	},
	success: function(x) {
		alert(x.proprietà)
	}
});

NB: Di norma il valore x ritornato è un oggetto json
