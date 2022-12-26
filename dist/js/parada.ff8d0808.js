"use strict";(self["webpackChunkinjettv_vue"]=self["webpackChunkinjettv_vue"]||[]).push([[212],{6575:function(a,e,t){t.r(e),t.d(e,{default:function(){return P}});var o=t(6252),l=t(3577);const r={class:"paradas"},s={class:"center-align"},n={class:"container"},i={class:"flex"},c=(0,o._)("tr",null,[(0,o._)("th",null,"MÁQUINA"),(0,o._)("th",null,"DESCRIÇÃO"),(0,o._)("th",null,"DURAÇÃO (HH:MM:SS)")],-1),d={class:"teste",id:"circle1"},u={class:"ultima-atualizacao"};function g(a,e,t,g,m,p){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("h1",s,"Paradas | Alertas - "+(0,l.zw)(m.galpaoName),1),(0,o._)("div",n,[(0,o._)("table",i,[c,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.pts,((a,e)=>((0,o.wg)(),(0,o.iD)("tr",d,[(0,o._)("td",{class:"item flex-item-1",style:(0,l.j5)(m.color+a.cor)},[(0,o._)("b",null,(0,l.zw)(a.cdPt),1)],4),(0,o._)("td",{class:"item flex-item-1",style:(0,l.j5)(m.color+a.cor)},[(0,o._)("b",null,(0,l.zw)(a.descricao),1)],4),(0,o._)("td",{class:"item flex-item-1",style:(0,l.j5)(m.color+a.cor)},[(0,o._)("b",null,(0,l.zw)(a.tempo),1)],4)])))),256))])]),(0,o._)("div",null,[(0,o._)("h2",u,"Ultima atualizacão: "+(0,l.zw)(m.ultimaAtualizacao),1)])])}t(7658);var m=t(9755),p=t.n(m),f=t(594),h={name:"Maquinas",components:{},created(){setInterval((()=>{"true"==sessionStorage.getItem("produtividade")&&(window.location.href="/produtividade"),"true"==sessionStorage.getItem("maquinas")&&(window.location.href="/maquinas"),this.getParadas()}),15e3)},data(){return{errorF(a){sessionStorage.setItem("error",a),window.location.href="/error"},ultimaAtualizacao:null,ip:t(7437).API_URL,galpaoName:sessionStorage.getItem("galpaoName"),cd:"000001",color:"color: ",pts:null,turno:null,maquinas:void 0,legendaColors1:[{nome:"Parada",color:"#c0392b"},{nome:"Na Meta",color:"#4cd137"},{nome:"Fora da Meta",color:"#f1c40f"},{nome:"Offline",color:"rgb(135, 135, 135)"}],legendaColors2:[{nome:"Em Alerta",color:"#f1c40f"},{nome:"Sem Planejamento",color:"blue"},{nome:"90% Op Concluída",color:"rgb(27, 26, 90)"},{nome:"Planejamneto Concluído",color:"rgb(45, 238, 235)"},{nome:"Índice de Refugo Maior que 5%",color:"rgb(142, 142, 142)"},{nome:"Parada sem Peso na Eficiência",color:"rgb(235, 23, 192)"},{nome:"Parada não Informada",color:"rgb(0, 0, 0)"},{nome:"CIP(Controle Início Processo)",color:"rgb(115, 239, 111)"},{nome:"Sem Ocorrências",color:"#ffff"}]}},methods:{carousel(){const a=p()(".teste"),e=5;let t=0;console.log("teeste: "+a.length);for(let o=0;o<a.length;o++)console.log(o),p()(a[o]).css("display","none");for(let o=t;o<t+e;o++)p()(a[o]).css("display","flex");t+=e,setInterval((function(){if(t<a.length){for(let e=0;e<a.length;e++)p()(a[e]).css("display","none");for(let o=t;o<t+e;o++)p()(a[o]).css("display","flex");t+=e}else t=0,"true"==sessionStorage.getItem("produtividade")&&(window.location.href="/produtividade"),"true"==sessionStorage.getItem("maquinas")&&(window.location.href="/maquinas")}),15e3),p()("form").submit((a=>a.preventDefault())),p()("#circle").change((a=>{var e=p()("input[name='group1']:checked").val();console.log(e),0==e&&p()("#circle1").attr("\n                    ")}))},getToday(){var a=new Date,e=String(a.getDate()).padStart(2,"0"),t=String(a.getMonth()+1).padStart(2,"0"),o=a.getFullYear();return a=t+"/"+e+"/"+o+"  "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),a},async getParadas(){this.ultimaAtualizacao=this.getToday(),await f.Z.all([f.Z.get(`${this.ip}/idw/rest/injet/paradas/pesquisaParadasByGalpao`,{params:{cdGalpao:this.cd}}),f.Z.get(`${this.ip}/idw/rest/injet/alertas/pesquisaAlertasByGalpao`,{params:{cdGalpao:this.cd}})]).then(f.Z.spread(((a,e)=>{let t=[],o=[],l=[],r=[],s="";for(var n=0;n<a.data.paradasGalpao.length;n++){let e=a.data.paradasGalpao[n].tempoParado.split(":");e[0].length<2&&(e[0]="0"+e[0]),e[1].length<2&&(e[1]="0"+e[1]),e[2].length<2&&(e[2]="0"+e[2]),s=e[0]+":"+e[1]+":"+e[2],o.push({cdPt:a.data.paradasGalpao[n].cdInjetora,tempo:s,descricao:a.data.paradasGalpao[n].dsParada,cor:"#ff0000"})}for(var i=0;i<e.data.alertasGalpao.length;i++){let a=e.data.alertasGalpao[i].tempoAlerta.split(":");a[0].length<2&&(a[0]="0"+a[0]),a[1].length<2&&(a[1]="0"+a[1]),a[2].length<2&&(a[2]="0"+a[2]),s=a[0]+":"+a[1]+":"+a[2],t.push({cdPt:e.data.alertasGalpao[i].cdInjetora,tempo:s,descricao:e.data.alertasGalpao[i].dsAlerta,cor:"#ff8b16"})}if(l=l.concat(o,t),"null"!=sessionStorage.getItem("maquinasList")){var c=JSON.parse(sessionStorage.getItem("maquinasList"));c.forEach((a=>{l.forEach((e=>{e.cdPt==a&&r.push(e)}))})),this.info=r,l=r}this.pts=l}))).catch((a=>this.errorF(a)))}},mounted(){this.cd=sessionStorage.getItem("galpao"),document.title=`Paradas - ${sessionStorage.getItem("galpaoName")}`,this.getParadas()}},v=t(3744);const w=(0,v.Z)(h,[["render",g]]);var P=w}}]);
//# sourceMappingURL=parada.ff8d0808.js.map