import{_ as m}from"./AppLayout.afd4344d.js";import{R as _,c as d,w as r,o as a,a as t,t as e,b as g,g as o,L as c,e as f,h as y,F as b,Q as p,i as w,y as v}from"./app.0fd1e729.js";import"./sweetalert2.all.915f31f2.js";const k={class:"container mx-auto mb-8"},N=t("h2",{class:"text-4xl font-extrabold dark:text-white mb-4"},"Chi ti\u1EBFt \u0111\u01A1n h\xE0ng",-1),V={class:"flex justify-between"},T={class:"text-2xl font-extrabold dark:text-white"},j=t("a",{href:"#",class:"text-base text-gray-500 underline dark:text-white"},"Xem h\xF3a \u0111\u01A1n",-1),D=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2 -ml-1"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"})],-1),F=w(" Quay v\u1EC1 "),C=t("hr",{class:"mt-8 mb-8"},null,-1),I={class:"grid grid-cols-4"},$=t("h2",{class:"mb-2 text-lg font-semibold text-gray-900 dark:text-white"},"Th\xF4ng tin c\xE1 nh\xE2n: ",-1),B={class:"space-y-1 max-w-md list-none list-inside text-gray-500 dark:text-gray-400"},S=t("h2",{class:"mb-2 text-lg font-semibold text-gray-900 dark:text-white"},"\u0110\u1ECBa ch\u1EC9 giao h\xE0ng: ",-1),L={class:"space-y-1 max-w-md list-none list-inside text-gray-500 dark:text-gray-400"},O=t("h2",{class:"mb-2 text-lg font-semibold text-gray-900 dark:text-white"},"Th\xF4ng tin \u0111\u01A1n h\xE0ng: ",-1),q={class:"space-y-1 max-w-md list-none list-inside text-gray-500 dark:text-gray-400"},A=t("h2",{class:"mb-2 text-lg font-semibold text-gray-900 dark:text-white"},"T\xECnh tr\u1EA1ng \u0111\u01A1n h\xE0ng: ",-1),E={class:"space-y-1 max-w-md list-none list-inside text-gray-500 dark:text-gray-400"},M=t("li",null," Thanh to\xE1n: Th\xE0nh c\xF4ng ",-1),P={class:"mt-8 grid grid-cols-3 divide-x content-center place-content-center"},Q={class:"col-span-2"},X={class:"flex flex-col"},z=["src"],G={class:"grow flex flex-col gap-y-2"},H={class:"font-bold text-md leading-none"},K={class:"font-extrabold text-sm text-gray-500"},R={class:"font-bold text-md leading-none"},J={class:"flex flex-col"},U={class:"inline-flex px-5 py-2 items-center justify-between font-semibold text-lg"},W=t("span",null,"T\u1EA1m t\xEDnh",-1),Y={class:"inline-flex px-5 py-2 items-center justify-between font-semibold text-lg"},Z=t("span",null,"Ph\xED giao h\xE0ng ",-1),tt={class:"inline-flex px-5 py-2 items-center justify-between font-semibold text-lg"},et=t("span",null,"Gi\u1EA3m gi\xE1 ",-1),st={class:"inline-flex px-5 py-3 items-center justify-between font-bold text-xl rounded-b-lg border-t"},nt=t("span",null,"T\u1ED5ng \u0111\u01A1n h\xE0ng ",-1),lt={class:"border p-8 rounded-xl mt-8"},ot={class:"flex justify-between mb-1"},rt={class:"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"},at={class:"flex justify-between mt-1"},it={class:"text-sm font-bold text-yellow-700 dark:text-white"},dt=t("span",{class:"text-sm font-bold text-yellow-700 dark:text-white"},"\u0110\xE3 x\xE1c nh\u1EADn",-1),ct=t("span",{class:"text-sm font-bold text-yellow-700 dark:text-white"},"\u0110\xE3 \u0111\xF3ng g\xF3i",-1),ut=t("span",{class:"text-sm font-bold text-yellow-700 dark:text-white"},"\u0110ang \u0111\u01B0\u1EE3c giao",-1),ht=t("span",{class:"text-sm font-bold text-yellow-700 dark:text-white"},"\u0110\xE3 giao th\xE0nh c\xF4ng",-1),ft={__name:"OrderDetail",props:{order:Object},setup(s){const u=s,i=v(),h=_(()=>{let n=0;switch(u.order.state){case 1:n=0;break;case 2:n=25;break;case 3:n=50;break;case 4:n=75;break;case 5:n=100;break;default:n=0;break}return n});return(n,xt)=>(a(),d(m,{title:"Kh\xE1m ph\xE1"},{header:r(()=>[]),default:r(()=>[t("div",k,[N,t("div",V,[t("div",null,[t("h2",T,"\u0110\u01A1n h\xE0ng #"+e(s.order.id),1),j]),t("div",null,[g(o(c),{href:n.route("order.index"),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},{default:r(()=>[D,F]),_:1},8,["href"])])]),C,t("div",I,[t("div",null,[$,t("ul",B,[t("li",null," H\u1ECD t\xEAn: "+e(n.$page.props.user.name),1),t("li",null," Email: "+e(n.$page.props.user.email),1)])]),t("div",null,[S,t("ul",L,[t("li",null,e(s.order.address.address)+" - "+e(s.order.address.province)+" - "+e(s.order.address.country),1),t("li",null," S\u0110T giao h\xE0ng: "+e(s.order.address.phone_number),1)])]),t("div",null,[O,t("ul",q,[t("li",null," S\u1ED1 s\u1EA3n ph\u1EA9m: "+e(s.order.orderitems.length),1),t("li",null," \u0110\u01B0\u1EE3c t\u1EA1o l\xFAc: "+e(s.order.created_at),1)])]),t("div",null,[A,t("ul",E,[M,t("li",null," Tr\u1EA1ng th\xE1i: "+e(s.order.state_name),1)])])]),t("div",P,[t("div",Q,[t("div",X,[(a(!0),f(b,null,y(s.order.orderitems,(l,x)=>(a(),d(o(c),{href:l.product.url,class:"inline-flex gap-x-4 p-5 items-center",key:x},{default:r(()=>[t("img",{src:l.product.image.url,class:"w-16 rounded-md border border-gray-200"},null,8,z),t("div",G,[t("span",H,e(l.product.name),1),t("span",K,e(`${l.quantity} X
                                                            ${Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(l.final_unit_price)}`),1)]),t("span",R,e(Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(l.quantity*l.final_unit_price)),1)]),_:2},1032,["href"]))),128))])]),t("div",null,[t("div",J,[t("div",U,[W,t("span",null,e(Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(o(i).getters["cart/cartTotalAmount"])),1)]),t("div",Y,[Z,t("span",null,e(Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(0)),1)]),t("div",tt,[et,t("span",null,"- "+e(Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(0)),1)]),t("div",st,[nt,t("span",null,e(Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(o(i).getters["cart/cartTotalAmount"])),1)])])])]),t("div",lt,[t("div",ot," C\u1EADp nh\u1EADt l\u1EA7n cu\u1ED1i: "+e(s.order.updated_at),1),t("div",rt,[t("div",{class:"bg-yellow-600 h-2.5 rounded-full",style:p(`width: ${o(h)}%`)},null,4)]),t("div",at,[t("span",it,e(s.order.state==0?"\u0110\xE3 h\u1EE7y \u0111\u01A1n":"Ch\u1EDD x\xE1c nh\u1EADn"),1),dt,ct,ut,ht])])])]),_:1}))}};export{ft as default};
