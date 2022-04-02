/*
Autore: Giuseppe Latini => giuseppe.latini AT gmail.com
Oggetto: p.js => Framework Javascript minimale per gestire chiamate ajax
Scopo: evitare pesanti framework, a vantaggio della velocità di caricamento
Data inizio stesura: 31/03/2022
Rel: 0.1 - Data release: 02/04/2022
*/
'use strict';
var _ = {

    version: 0.1,

    ver: function () {
        return (this.version);
    },

    name: function(name, progr=0) {
        return document.getElementsByName('csrfmiddlewaretoken')[progr];
    },

    id: function (id) {
        return document.getElementBy(Id);
    },

    // Istanzia oggetto xhr
    ajaxReq: function () {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            alert("Browser does not support XMLHTTP.");
            return false;
        }
    },

    // trasforma json in stringa di get/post
    json2get: function (data) {
        var url = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')
        return url;
    },

    ajax: function (p) {
        var r = this.ajaxReq();
        r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
            var json = JSON.parse(r.responseText);
            p.success(json);
        };
        var url = p.url;
        var u = this.json2get(p.data);
        // se la chiamata è in get, aggiungo i parametri all'url da aprire
        if (p.type.toLowerCase() === 'get') {
            url = url + '?' + u;
        }
        r.open(p.type, url, true);
        // header per specificare che sto inviando un form con paramtri codificati come url
        r.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // header per specificare si tratta di una chiamata ajax
        r.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        // effettuo la chiamata ajax passando i parametri url enconded
        r.send(u);
    }
}

