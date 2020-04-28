(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{2:function(e,t,a){e.exports={App:"styles_App__37WGR",Searchbar:"styles_Searchbar__o8efk",SearchForm:"styles_SearchForm__1_vaQ","SearchForm-button":"styles_SearchForm-button__2rTX1","SearchForm-button-label":"styles_SearchForm-button-label__2v9Yt","SearchForm-input":"styles_SearchForm-input__2aH60",ImageGallery:"styles_ImageGallery__2gRXH",ImageGalleryItem:"styles_ImageGalleryItem__cQ0Gz","ImageGalleryItem-image":"styles_ImageGalleryItem-image__18DvS",Overlay:"styles_Overlay__2iJWX",Modal:"styles_Modal__3uinw",Button:"styles_Button__zuJ0x",Loader:"styles_Loader__2peHu"}},26:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),l=a.n(c),o=a(12),s=a(4),u=a.n(s),i=a(11),m=a(7),g=a(8),p=a(10),h=a(9),y=a(2),f=a.n(y),d=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){var a=t.target.value;e.setState({query:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.searchBarInput(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state.query;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:f.a.Searchbar},n.a.createElement("form",{className:f.a.SearchForm,onSubmit:this.handleSubmit},n.a.createElement("button",{type:"submit",className:f.a["SearchForm-button"]},n.a.createElement("span",{className:f.a["SearchForm-button-label"]},"Search")),n.a.createElement("input",{className:f.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e}))))}}]),a}(r.Component),v=a(23),b=a.n(v),_="15871594-e6aabc3dbb9db4d877f262370",E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=b.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(_,"&image_type=photo&orientation=horizontal&per_page=12"));return a},S=a(25),I=function(e){var t=e.largeImageURL,a=e.closeModal,c=function(e){"Escape"===e.key&&a()};return Object(r.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}})),n.a.createElement("div",{className:f.a.Overlay,onClick:function(e){"IMG"!==e.target.nodeName&&a()}},n.a.createElement("div",{className:f.a.Modal},n.a.createElement("img",{src:t,alt:""})))},w=function(e){var t=e.url,a=e.alt,c=e.largeImageURL,l=Object(r.useState)(!1),o=Object(S.a)(l,2),s=o[0],u=o[1];return n.a.createElement("li",{className:f.a.ImageGalleryItem},n.a.createElement("img",{src:t,alt:a,className:f.a["ImageGalleryItem-image"],onClick:function(){return u(!0)}}),s&&n.a.createElement(I,{largeImageURL:c,closeModal:function(){return u(!1)}}))},F=function(e){var t=e.gallery;return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:f.a.ImageGallery},t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return n.a.createElement(w,{key:t,url:a,alt:t,largeImageURL:r})}))))},O=function(e){var t=e.pageChanger;return n.a.createElement("button",{type:"button",className:f.a.Button,onClick:t},"Load more")},L=a(24),j=a.n(L),k=(a(70),function(){return n.a.createElement("div",{className:f.a.Loader},n.a.createElement(j.a,{type:"Puff",color:"#00BFFF",height:100,width:100}))}),q=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],query:"",page:1,isLoading:!1,error:!1},e.searchBarInput=function(t){e.setState({query:t,page:1,gallery:[]})},e.axiosRequest=Object(i.a)(u.a.mark((function t(){var a,r,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state,r=a.query,n=a.page,t.next=4,E(r,n);case 4:return c=t.sent,t.abrupt("return",c.data.hits);case 8:t.prev=8,t.t0=t.catch(0),e.setState({error:!0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.pageChanger=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(g.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=this.state,n=r.query,c=r.page;n!==t.query&&(this.setState({isLoading:!0}),function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.axiosRequest();case 2:t=e.sent,a.setState({gallery:Object(o.a)(t),isLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()());c!==t.page&&(this.setState({isLoading:!0}),function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.axiosRequest();case 2:t=e.sent,a.setState((function(e){return{gallery:[].concat(Object(o.a)(e.gallery),Object(o.a)(t)),isLoading:!1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,r=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{searchBarInput:this.searchBarInput}),r&&n.a.createElement("h1",null,"something gone wrong, try again later"),!!t.length&&!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement(F,{gallery:t}),!a&&n.a.createElement(O,{pageChanger:this.pageChanger})),a&&n.a.createElement(k,null))}}]),a}(r.Component);var x=function(){return n.a.createElement(q,null)};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.25beb407.chunk.js.map