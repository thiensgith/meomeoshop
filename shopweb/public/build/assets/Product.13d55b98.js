import{_ as y}from"./AppLayout.86dae14c.js";import"./carousel.fd94b56e.js";import{d as u,M as f,l as x,o as l,e as m,F as b,h as _,v,S as k,a as s,g as w,n as c,c as I,w as p,b as L}from"./app.0063afc6.js";const S=["checked","value","disabled"],M={__name:"Rating",props:{rate:{type:Number,default:.5},ratingSize:{type:String},enabled:{type:Boolean,default:!1}},emits:["v-rate"],setup(e,{emit:i}){const o=e,t=u(o.rate),g=f(()=>Math.round(o.rate*2)/2);return x(t,(r,n)=>{i("v-rate",r)}),(r,n)=>{var d;return l(),m("div",{class:c(["rating rating-half","rating rating-half "+((d=e.ratingSize)!=null?d:"rating-md")])},[(l(),m(b,null,_(10,a=>v(s("input",{key:a,checked:a==w(g)*2,type:"radio",name:"rating-10",class:c("bg-orange-400 mask mask-star-2 mask-half-"+(a%2==0?2:1)),value:a/2,"onUpdate:modelValue":n[0]||(n[0]=h=>t.value=h),disabled:!e.enabled},null,10,S),[[k,t.value]])),64))],2)}}};const B={class:"container mx-auto mb-8"},P={class:"flex flex-col xl:flex-row gap-8"},R={class:"md:basis-9/12"},z={class:"hero"},A={class:"hero-content flex-col md:flex-row gap-12 p-0"},N=s("img",{src:"https://placeimg.com/400/400/arch",class:"w-full rounded-box"},null,-1),T={class:"flex flex-col"},$=s("h1",{class:"text-3xl font-semibold"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry",-1),j=s("h1",{class:"text-5xl font-bold py-4"},"255.000 \u0111",-1),F=s("p",{class:"pb-6 hidden lg:block"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",-1),V=s("div",{class:"justify-end flex gap-2"},[s("button",{class:"btn btn-secondary"},"Th\xEAm v\xE0o gi\u1ECF"),s("button",{class:"btn btn-primary"},"Mua ngay")],-1),C=s("div",{class:"lg:hidden flex-1"},[s("div",{class:"pb-4 w-full flex justify-center font-bold"},"M\xD4 T\u1EA2"),s("p",{class:"pb-6"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")],-1),E=s("div",{class:"md:flex-1"},[s("div",{class:"pb-4 w-full flex justify-center font-bold"},"TH\xD4NG S\u1ED0"),s("div",{class:"bg-base-100 font-semibold overflow-hidden rounded-box"},[s("div",{class:"border-t border-gray-200"},[s("dl",null,[s("div",{class:"px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[s("dt",{class:"text-sm font-bold text-primary"}," Full name "),s("dd",{class:"mt-1 text-sm sm:mt-0 sm:col-span-2"}," Mickael Poulaz ")]),s("div",{class:"px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[s("dt",{class:"text-sm font-bold text-primary"}," Best techno "),s("dd",{class:"mt-1 text-sm sm:mt-0 sm:col-span-2"}," React JS ")]),s("div",{class:"px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[s("dt",{class:"text-sm font-bold text-primary"}," Email address "),s("dd",{class:"mt-1 text-sm sm:mt-0 sm:col-span-2"}," m.poul@example.com ")]),s("div",{class:"px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[s("dt",{class:"text-sm font-bold text-primary"}," Salary "),s("dd",{class:"mt-1 text-sm sm:mt-0 sm:col-span-2"}," $10,000 ")]),s("div",{class:"px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[s("dt",{class:"text-sm font-bold text-primary"}," About "),s("dd",{class:"mt-1 text-sm sm:mt-0 sm:col-span-2"}," To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself ")])])])])],-1),J={__name:"Product",props:{carouselImages:Array,homeHeaderSvg:String},setup(e){return u(),(i,o)=>(l(),I(y,{title:"San pham gi do"},{header:p(()=>[]),default:p(t=>[s("div",B,[s("div",P,[s("div",R,[s("div",z,[s("div",A,[N,s("div",T,[$,j,F,L(M,{rate:3.2,class:"pb-6"},null,8,["rate"]),V])])])]),C,E])])]),_:1}))}};export{J as default};
