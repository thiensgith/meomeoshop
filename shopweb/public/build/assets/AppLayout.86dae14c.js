import{d as p,j as b,k,l as B,o as a,e as l,g as o,n as u,a as t,f as w,t as x,m as y,r as m,c as S,w as h,L as $,p as M,b as d,i as _,H as z,q as L,s as j}from"./app.0063afc6.js";const N={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},T={class:"flex items-center justify-between flex-wrap"},V={class:"w-0 flex-1 flex items-center min-w-0"},q={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},H=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),I=[H],R={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},J=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),O=[J],A={class:"ml-3 font-medium text-sm text-white truncate"},D={class:"shrink-0 sm:ml-3"},E=t("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),P=[E],F={__name:"Banner",setup(c){const n=p(!0),e=b(()=>{var s;return((s=k().props.value.jetstream.flash)==null?void 0:s.bannerStyle)||"success"}),i=b(()=>{var s;return((s=k().props.value.jetstream.flash)==null?void 0:s.banner)||""});return B(i,async()=>{n.value=!0}),(s,g)=>(a(),l("div",null,[n.value&&o(i)?(a(),l("div",{key:0,class:u({"bg-indigo-500":o(e)=="success","bg-red-700":o(e)=="danger"})},[t("div",N,[t("div",T,[t("div",V,[t("span",{class:u(["flex p-2 rounded-lg",{"bg-indigo-600":o(e)=="success","bg-red-600":o(e)=="danger"}])},[o(e)=="success"?(a(),l("svg",q,I)):w("",!0),o(e)=="danger"?(a(),l("svg",R,O)):w("",!0)],2),t("p",A,x(o(i)),1)]),t("div",D,[t("button",{type:"button",class:u(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":o(e)=="success","hover:bg-red-600 focus:bg-red-600":o(e)=="danger"}]),"aria-label":"Dismiss",onClick:g[0]||(g[0]=y(r=>n.value=!1,["prevent"]))},P,2)])])])],2)):w("",!0)]))}},f={__name:"MenuItemLink",props:{href:String,active:Boolean,isButton:{type:Boolean,default:!1}},setup(c){const n=c,e=b(()=>n.active?"active":"");return(i,s)=>(a(),l("li",null,[c.isButton?(a(),l("button",{key:0,type:"submit",class:u(o(e))},[m(i.$slots,"default")],2)):(a(),S(o($),{key:1,href:c.href,class:u(o(e))},{default:h(()=>[m(i.$slots,"default")]),_:3},8,["href","class"]))]))}},G={class:"dropdown dropdown-end"},K={tabindex:"0",class:"btn btn-ghost btn-circle"},Q={class:"indicator"},U=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),W={class:"badge badge-secondary badge-sm indicator-item"},X={tabindex:"0",class:"mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"},Y={class:"card-body"},Z={class:"font-bold text-lg"},tt=t("span",{class:"text-primary"},"Subtotal: $999",-1),et={class:"card-actions"},st=_("View cart"),ot={__name:"CartMenu",setup(c,{expose:n}){const e=p([]);M(()=>{localStorage.cart&&(e.value=JSON.parse(localStorage.cart)),console.log(e.value)});const i=r=>{const v=e.value.findIndex(C=>C.id===r.id);v===-1?(r.quantity||(r.quantity=1),e.value.push(r)):r.quantity?e.value[v]=r:e.value[v].quantity++,localStorage.cart=JSON.stringify(e.value)};return n({addToCart:r=>{i({id:r})},syncCart:()=>{localStorage.cart&&(e.value=JSON.parse(localStorage.cart))}}),(r,v)=>(a(),l("div",G,[t("label",K,[t("div",Q,[U,t("span",W,x(e.value.length),1)])]),t("div",X,[t("div",Y,[t("span",Z,x(e.value.length)+" s\u1EA3n ph\u1EA9m",1),tt,t("div",et,[d(o($),{class:"btn btn-primary btn-block",href:r.route("cart")},{default:h(()=>[st]),_:1},8,["href"])])])])]))}},at={__name:"ApplicationLogo",props:{width:String,height:String},setup(c){return(n,e)=>(a(),l("img",{class:u("w-"+c.width+" h-"+c.height+" bg-white rounded-full"),src:"http://localhost:8000/dev_assets/logo-transparent.png",alt:"logo"},null,2))}},nt={class:"flex flex-col p-4 bg-neutral min-h-screen relative"},rt={class:"container mx-auto z-20 fixed top-0 right-0 left-0"},lt={class:"navbar bg-base-100 rounded-box my-2 bg-opacity-75"},ct={class:"flex-1"},it={class:"flex-none gap-2"},dt={key:0,class:"dropdown dropdown-end"},ht={tabindex:"0",class:"btn btn-ghost btn-circle avatar"},ut={class:"w-10 rounded-full"},pt=["src","alt"],_t={tabindex:"0",class:"mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"},gt=t("li",{class:"menu-title"},[t("span",null,"T\xE0i kho\u1EA3n")],-1),vt=_(" C\xE0i \u0111\u1EB7t t\xE0i kho\u1EA3n "),ft=["onSubmit"],wt=_(" \u0110\u0103ng xu\u1EA5t "),mt={key:1,class:"menu menu-compact menu-horizontal p-2 rounded-box"},bt=_("Login"),xt=_("Create a new account"),$t={class:"container mx-auto z-0 pt-32"},kt={class:"z-10"},yt=L('<footer class="footer p-10 bg-base-100 rounded-box text-neutral-content"><div><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg><p>MeoMeoShop Ltd.<br>Cung c\u1EA5p d\u1EE5ng c\u1EE5 pha ch\u1EBF t\u1EEB 1992</p></div><div><span class="footer-title">Social</span><div class="grid grid-flow-col gap-4"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></div></div></footer>',1),Ct={__name:"AppLayout",props:{title:String},setup(c){p(),p(!1);const n=p(),e=()=>{j.Inertia.post(route("logout"))},i=s=>{n.value.addToCart(s)};return(s,g)=>(a(),l("div",nt,[d(o(z),{title:c.title},null,8,["title"]),d(F),t("div",rt,[t("div",lt,[t("div",ct,[d(o($),{href:s.route("home"),class:"px-2"},{default:h(()=>[d(at,{width:16,height:16})]),_:1},8,["href"])]),t("div",it,[d(ot,{ref_key:"cartRef",ref:n},null,512),s.$page.props.user?(a(),l("div",dt,[t("label",ht,[t("div",ut,[t("img",{class:"",src:s.$page.props.user.profile_photo_url,alt:s.$page.props.user.name},null,8,pt)])]),t("ul",_t,[gt,d(f,{href:s.route("profile.show")},{default:h(()=>[vt]),_:1},8,["href"]),t("form",{onSubmit:y(e,["prevent"])},[d(f,{isButton:"true"},{default:h(()=>[wt]),_:1})],40,ft)])])):(a(),l("ul",mt,[d(f,{href:s.route("login"),active:s.route().current("login")},{default:h(()=>[bt]),_:1},8,["href","active"]),s.$page.props.canRegister?(a(),S(f,{key:0,href:s.route("register"),active:s.route().current("register")},{default:h(()=>[xt]),_:1},8,["href","active"])):w("",!0)]))])])]),t("div",$t,[m(s.$slots,"header")]),t("main",kt,[m(s.$slots,"default",{addToCart:i,cartRef:n.value})]),yt]))}};export{Ct as _,at as a};
