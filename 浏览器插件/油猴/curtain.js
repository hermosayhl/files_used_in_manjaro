(function(){var a=null;Registry.require(["crcrc","i18n"],function(){var g=Registry.get("crcrc"),k=Registry.get("i18n"),n=g.cr,h=g.crc,e=null,q=function(d,c,b,a,f){a||(a="");var e=h("table","curtable"+(f?" "+f:""),c,b,"table"+a);f=h("tr",f?" "+f:"",c,b,"tr2"+a);var p=h("td","curtableoutertd",c,b,"td1"+a),g=h("td","curtableinner",c,b,"td2"+a);c=h("td","curtableoutertd",c,b,"td3"+a);f.appendChild(p);f.appendChild(g);f.appendChild(c);e.appendChild(f);d&&g.appendChild(d);return e},l=function(a,c){c||(c=
{});var b=n("div","ct","0","p"),e=h("div","curbg","ct","0","c"),f=h("div",c.fixed?"curmiddle_fixed":"curmiddle_relative","ct","0","d");b.inserted||(b.setAttribute("class","curouter hide"),b.setAttribute("style","z-index: 10000"));var g=q(a,"ct","0");f.appendChild(g);b.appendChild(f);b.appendChild(e);b.show=function(){b.setAttribute("class","curouter block")};b.hide=function(){b.setAttribute("class","curouter hide")};b.remove=function(){b.parentNode&&b.parentNode.removeChild(b)};b.setText=function(a){b.text=
a};b.print=function(a){b.text&&(b.text.textContent=a)};document.body.appendChild(b);return b},m=function(){var a=document.createElement("div");a.setAttribute("class","curcontainer");var c=document.createElement("div");c.setAttribute("class","curwaithead");var b=document.createElement("div");b.setAttribute("class","curwaitmsg");a.appendChild(c);a.appendChild(b);return{outer:a,inner:b}};Registry.register("curtain","6095",{wait:function(d){var c;if(document.body){void 0===d&&(d=k.getMessage("Please_wait___"));
if(null===e){a&&(a.remove(),a=null);e=0;c=d;var b=m(),g=b.inner;d=document.createElement("div");d.textContent=c;d.setAttribute("class","curtext");$(g).append($('<div class="lds-css ng-scope"><div class="lds-dual-ring"><div></div><div></div></div>')).append(d);c=b.outer;a=l(c,{fixed:!0});a.setText(d);a.show();return!0}if(0===e&&(void 0===d&&(d=k.getMessage("Please_wait___")),a))return d&&a.print(d),a.show(),!0}},hide:function(){0===e&&(a&&a.hide(),e=null)},dialog:function(d){if(document.body){if(1===
e)return!1;if(null===e){a&&(a.remove(),a=null);e=1;var c=m();c.inner.appendChild(d);a=l(c.outer);a.show();return!0}}},hideDialog:function(){1===e&&(a&&a.hide(),e=null)}})})})();
