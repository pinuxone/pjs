
Autore: Giuseppe Latini => giuseppe.latini AT gmail.com
Oggetto: p.js => Framework Javascript minimale per gestire chiamate ajax
Scopo: evitare pesanti framework, a vantaggio della velocità di caricamento
Data inizio stesura: 31/03/2022
Rel: 0.2 - Data release: 06/04/2022

Esempio di utilizzo:

_.ajax ({
	url: '',
	type: 'post',
	data: {
		var1: value1,
		var2: value2
	},
	success: function(x) {
		alert(x.proprietà)
	}
});

La variabile json "data" passata alla funzione ajax, contiene i parametri 
che verranno codificati come url prima di essere utilizzati;
Se / quando la funzione ajax dovesse avere successo e quindi ritornare
con un oggetto json, verrà richiamata la funzione specificata con success:
mentre il parametro x assumerà il valore dell'oggetto json ritornato.
