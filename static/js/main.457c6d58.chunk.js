(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(20),o=a.n(i),s=(a(28),a(13)),l=a(5),c=a(6),d=a(7),h=a(9),m=a(8),p=a(10),u=a(12),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props;fetch("http://www.omdbapi.com/?i="+t.imdbID+"&apikey=2ec014c3").then(function(e){return e.json()}).then(function(a){e.setState({isLoaded:!0,item:{id:t.imdbID,title:a.Title,year:a.Year,poster:a.Poster}})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,r=e.item;return t?n.a.createElement("div",null,"Error: ",t.message):a?n.a.createElement("a",{className:"poster",href:"shows/"+r.id},n.a.createElement("img",{className:"posterImage",src:r.poster,alt:""}),n.a.createElement("p",null,r.title),n.a.createElement("p",null,"(",r.year,")")):n.a.createElement("div",null,"Loading...")}}]),t}(r.Component),f=(a(29),{shows:[{title:"Atlanta",year:"2008\u20132013",description:"Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; \"Earnest 'Earn' Marks,\" an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.",poster:"a.jpg",imdbID:"tt4288182",trailer:"MpEdJ-mmTlY"},{title:"Billions",year:"2016\u2013",description:'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',poster:"b.jpg",imdbID:"tt4270492",trailer:"_raEUMLL-ZI"},{title:"Black Mirror",year:"2011\u2013",description:"A television anthology series that shows the dark side of life and technology.",poster:"bm.jpg",imdbID:"tt2085059",trailer:"jDiYGjp5iFg"},{title:"Breaking Bad",year:"2008\u20132013",description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",poster:"bb.jpg",imdbID:"tt0903747",trailer:"XZ8daibM3AE"},{title:"Game of Thrones",year:"2011\u2013",description:"Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.",poster:"got.jpg",imdbID:"tt0944947",trailer:"giYeaKsXnsI"},{title:"Homeland",year:"2011\u2013",description:"A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.",poster:"h.jpg",imdbID:"tt1796960",trailer:"KyFmS3wRPCQ"},{title:"House of Cards",year:"2013\u2013",description:"A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",poster:"hoc.jpg",imdbID:"tt1856010",trailer:"NTzycsqxYJ0"},{title:"Master of None",year:"2015\u2013",description:"The personal and professional life of Dev, a 30-year-old actor in New York.",poster:"mon.jpg",imdbID:"tt4635276",trailer:"6bFvb3WKISk"},{title:"Narcos",year:"2015\u2013",description:"A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",poster:"n.jpg",imdbID:"tt2707408",trailer:"U7elNhHwgBU"},{title:"Orange Is the New Black",year:"2013\u2013",description:"The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.",poster:"oitnb.jpg",imdbID:"tt2372162",trailer:"th8WT_pxGqg"},{title:"Silicon Valley",year:"2014\u2013",description:"Follows the struggle of Richard Hendricks, a silicon valley engineer trying to build his own company called Pied Piper.",poster:"sv.jpg",imdbID:"tt2575988",trailer:"69V__a49xtw"},{title:"Stranger Things",year:"2016\u2013",description:"When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",poster:"st.jpg",imdbID:"tt4574334",trailer:"9Egf5U8xLo8"},{title:"The Americans",year:"2013\u2013",description:"Two Soviet intelligence agents pose as a married couple to spy on the American government.",poster:"ta.jpg",imdbID:"tt2149175",trailer:"HjuUkbhsI24"},{title:"Veep",year:"2012\u2013",description:"Former Senator Selina Meyer finds that being Vice President of the United States is nothing like she hoped and everything that everyone ever warned her about.",poster:"v.jpg",imdbID:"tt1759761",trailer:"I2HoCG_iyhU"},{title:"Westworld",year:"2016\u2013",description:"Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",poster:"ww.jpg",imdbID:"tt0475784",trailer:"eX3u0IlBBO4"}]}),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={shows:f.shows},a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t,a=e.target.value;a?(t=f.shows.filter(function(e){return e.title.toLowerCase().includes(a.toLowerCase())}),this.setState({shows:t})):this.setState({shows:f.shows})}},{key:"render",value:function(){return n.a.createElement("div",{className:"gridView"},n.a.createElement("input",{className:"search",type:"text",placeholder:"Search Show",onChange:this.handleChange}),n.a.createElement("div",{className:"billboard"},this.state.shows.map(function(e){return n.a.createElement(g,Object.assign({},e,{key:e.title.replace(" ","-")}))})))}}]),t}(r.Component),w=function(e){return console.log(e),n.a.createElement("div",null,n.a.createElement("img",{className:"detailPosterImage",src:e.Poster}),n.a.createElement("h1",null,e.Title),n.a.createElement("p",null,e.Year),n.a.createElement("p",null,e.Plot))},y=(a(30),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={error:null,isLoaded:!1,show:{}},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("http://www.omdbapi.com/?i="+t+"&apikey=2ec014c3").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,show:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded;e.item;return t?n.a.createElement("div",null,"Error: ",t.message):a?n.a.createElement("div",{className:"detailsView"},n.a.createElement("span",null,n.a.createElement(s.b,{to:"/"},"<<< Back to Shows List")),n.a.createElement(w,this.state.show)):n.a.createElement("div",null,"Loading...")}}]),t}(r.Component));var v=function(){return n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(l.a,{exact:!0,path:"/",component:b}),n.a.createElement(l.a,{exact:!0,path:"/shows",component:b}),n.a.createElement(l.a,{path:"/shows/:id",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.457c6d58.chunk.js.map