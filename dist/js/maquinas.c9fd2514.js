"use strict";(self["webpackChunkinjettv_vue"]=self["webpackChunkinjettv_vue"]||[]).push([[922],{7187:function(e){var t,n="object"===typeof Reflect?Reflect:null,o=n&&"function"===typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};function r(e){console&&console.warn&&console.warn(e)}t=n&&"function"===typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!==e};function s(){s.init.call(this)}e.exports=s,e.exports.once=y,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var a=10;function l(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function u(e,t,n,o){var i,s,a;if(l(n),s=e._events,void 0===s?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),a=s[t]),void 0===a)a=s[t]=n,++e._eventsCount;else if("function"===typeof a?a=s[t]=o?[n,a]:[a,n]:o?a.unshift(n):a.push(n),i=c(e),i>0&&a.length>i&&!a.warned){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=a.length,r(u)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var o={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=d.bind(o);return r.listener=n,o.wrapFn=r,r}function h(e,t,n){var o=e._events;if(void 0===o)return[];var r=o[t];return void 0===r?[]:"function"===typeof r?n?[r.listener||r]:[r]:n?g(r):v(r,r.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),o=0;o<t;++o)n[o]=e[o];return n}function m(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function g(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function y(e,t){return new Promise((function(n,o){function r(n){e.removeListener(t,i),o(n)}function i(){"function"===typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}w(e,t,i,{once:!0}),"error"!==t&&_(e,r,{once:!0})}))}function _(e,t,n){"function"===typeof e.on&&w(e,"error",t,n)}function w(e,t,n,o){if("function"===typeof e.on)o.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(i){o.once&&e.removeEventListener(t,r),n(i)}))}}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=i[e];if(void 0===l)return!1;if("function"===typeof l)o(l,this,t);else{var c=l.length,u=v(l,c);for(n=0;n<c;++n)o(u[n],this,t)}return!0},s.prototype.addListener=function(e,t){return u(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return u(this,e,t,!0)},s.prototype.once=function(e,t){return l(t),this.on(e,f(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,f(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,o,r,i,s;if(l(t),o=this._events,void 0===o)return this;if(n=o[e],void 0===n)return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(r=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,r=i;break}if(r<0)return this;0===r?n.shift():m(n,r),1===n.length&&(o[e]=n[0]),void 0!==o.removeListener&&this.emit("removeListener",e,s||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,o;if(n=this._events,void 0===n)return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,i=Object.keys(n);for(o=0;o<i.length;++o)r=i[o],"removeListener"!==r&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],"function"===typeof t)this.removeListener(e,t);else if(void 0!==t)for(o=t.length-1;o>=0;o--)this.removeListener(e,t[o]);return this},s.prototype.listeners=function(e){return h(this,e,!0)},s.prototype.rawListeners=function(e){return h(this,e,!1)},s.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},s.prototype.listenerCount=p,s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},4393:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var o=n(6252),r=n(3577);const i={class:"maquinas"},s={align:"center"},a={class:"container",id:"container"},l={class:"legends"},c={id:"legenda-box"},u=(0,o._)("h6",null,[(0,o._)("b",null,"Cor da 1° Coluna")],-1),d={class:"color-conteiner"},f={id:"legenda-box"},h=(0,o._)("h6",null,[(0,o._)("b",null,"Cor da 2° Coluna")],-1),p={class:"color-conteiner"},v={class:"col l12",style:{display:"inline-block",margin:"0 auto"}},m={class:"tes",name:"testee"},g=(0,o._)("tr",null,[(0,o._)("th",null,"1ª Coluna"),(0,o._)("th",null,"2ª Coluna"),(0,o._)("th",null,"Máquina"),(0,o._)("th",null,"Descrição do Produto"),(0,o._)("th",null,"OEE")],-1),y={class:"teste",id:"circle1"},_={class:"ultima-atualizacao"};function w(e,t,n,w,b,L){return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("h1",s,"Performance Máquinas - "+(0,r.zw)(b.galpaoName),1),(0,o._)("div",a,[(0,o._)("div",l,[(0,o._)("div",c,[u,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(b.legendaColors1,((e,t)=>((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",{class:"cor-p",style:(0,r.j5)(b.back+e.style)},null,4),(0,o._)("p",null,(0,r.zw)(e.nome),1)])))),256))]),(0,o._)("div",f,[h,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(b.legendaColors2,((e,t)=>((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",{class:"cor-p",style:(0,r.j5)(b.back+e.style)},null,4),(0,o._)("p",null,(0,r.zw)(e.nome),1)])))),256))])]),(0,o._)("div",v,[(0,o._)("table",m,[g,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(b.pts,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",y,[(0,o._)("td",null,[(0,o._)("div",{class:"quadrado-icons",style:(0,r.j5)(b.back+e.icone.caminhoIcone)},null,4)]),(0,o._)("td",null,[(0,o._)("div",{class:"quadrado-icons",style:(0,r.j5)(b.back+e.icone.corTriangulo)},null,4)]),(0,o._)("td",{style:(0,r.j5)(b.color+e.icone.caminhoIcone)},(0,r.zw)(e.cdPt),5),(0,o._)("td",{style:(0,r.j5)(b.color+e.icone.caminhoIcone)},(0,r.zw)(e.dsProduto),5),(0,o._)("td",{style:(0,r.j5)(b.color+e.icone.caminhoIcone)},(0,r.zw)(e.indicadores.indiceProdutividadeOEE)+"%",5)])))),256))])])]),(0,o._)("h2",_,"Ultima atualizacão: "+(0,r.zw)(b.ultimaAtualizacao),1)])}n(7658),n(9755);var b=n(594),L=(n(7187),{name:"Maquinas",components:{},created(){},data(){return{ultimaAtualizacao:null,ip:n(7437).API_URL,galpaoName:sessionStorage.getItem("galpaoName"),cd:"000001",info:null,color:"color: ",back:"background-color: ",border:" border-bottom: 20px solid ",pts:null,turno:null,maquinas:void 0,legendaColors1:[{nome:"Parada",style:"#c0392b"},{nome:"Na Meta",style:"#4cd137"},{nome:"Fora da Meta",style:"#f1c40f"},{nome:"Offline",style:"rgb(135, 135, 135)"}],legendaColors2:[{nome:"Em Alerta",style:"#f1c40f"},{nome:"Sem Planejamento",style:"blue"},{nome:"90% Op Concluída",style:"rgb(27, 26, 90)"},{nome:"Planejamneto Concluído",style:"rgb(45, 238, 235)"},{nome:"Índice de Refugo Maior que 5%",style:"rgb(142, 142, 142)"},{nome:"Parada sem Peso na Eficiência",style:"rgb(235, 23, 192)"},{nome:"Parada não Informada",style:"rgb(0, 0, 0)"},{nome:"CIP(Controle Início Processo)",style:"rgb(115, 239, 111)"},{nome:"Sem Ocorrências",style:"#ffff"}]}},methods:{errorF(e){sessionStorage.setItem("error",e),window.location.href="/error"},getToday(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return e=n+"/"+t+"/"+o+"  "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),e},getMaquinas(){this.ultimaAtualizacao=this.getToday();const e=new Date;var t=String(e.getDate()).padStart(2,"0"),n=(new Date).getFullYear(),o=(new Date).getMonth()+1;b.Z.get(`${this.ip}/idw/rest/injet/monitorizacao/turnoAtual`).then((e=>{this.turno=e.data.idTurno,b.Z.post(`${this.ip}/idw/rest/v2/injet/monitorizacao/postosativos`,{idTurno:e.data.idTurno,filtroOp:0,cdGt:this.cd,turnoAtual:!0,dtReferencia:`${t}/${o}/${n}`}).then((e=>{e;let t=[],n=[],o=[],r=[],i=[],s=[];if(e.data.pts.forEach((e=>{void 0!==e.dsProduto&&-1!==e.dsProduto.indexOf("\n")&&(e.dsProduto=e.dsProduto.substring(0,e.dsProduto.indexOf("\n"))),e.icone.caminhoIcone.includes("AbaixoMeta")&&(e.icone.caminhoIcone="#f1c40f",t.push(e)),e.icone.caminhoIcone.includes("SemConexao")&&(e.icone.caminhoIcone="#7f8c8d",n.push(e)),e.icone.caminhoIcone.includes("NaMeta")&&(e.icone.caminhoIcone="#4cd137",o.push(e)),e.icone.caminhoIcone.includes("Parada")&&(e.icone.caminhoIcone="#c0392b",r.push(e))})),i=i.concat(o,t,r,n),"null"!=sessionStorage.getItem("maquinasList")){var a=JSON.parse(sessionStorage.getItem("maquinasList"));a.forEach((e=>{i.forEach((t=>{t.cdPt==e&&s.push(t)}))})),this.info=s,i=s}var l,c=4,u=c,d=0;l=i.filter(((e,t)=>t>=d&&t<u)),this.pts=l,setInterval((()=>{l=i.filter(((e,t)=>t>=d&&t<u)),u+=c,d+=c,0===l.length?("true"==sessionStorage.getItem("paradas")&&(window.location.href="/parada"),"true"==sessionStorage.getItem("produtividade")&&(window.location.href="/produtividade")):this.pts=l}),15e3),this.turno=e})).catch((e=>this.errorF(e)))})).catch((e=>this.errorF(e)))}},mounted(){document.title=`Performance Máquinas - ${sessionStorage.getItem("galpaoName")}`,this.cd=sessionStorage.getItem("galpao"),this.getMaquinas()}}),C=n(3744);const P=(0,C.Z)(L,[["render",w]]);var O=P}}]);
//# sourceMappingURL=maquinas.c9fd2514.js.map