import{d as _,u as p,c as f,w as s,o as k,a as r,b as n,g as e,I as b,n as v,i as t}from"./app.0fd1e729.js";import{_ as g}from"./ActionSection.1b13fef9.js";import{_ as h}from"./DangerButton.b10ea6f8.js";import{a as x}from"./DialogModal.d9b919fc.js";import{_ as w,a as y}from"./TextInput.ee8796d5.js";import{_ as V}from"./SecondaryButton.12e19f07.js";import"./SectionTitle.7f1ff86c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C=t(" X\xF3a t\xE0i kho\u1EA3n "),$=t(" X\xF3a v\u0129nh vi\u1EC5n t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n. "),U=r("div",{class:"max-w-xl text-sm text-gray-600"}," Sau khi t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n b\u1ECB x\xF3a, t\u1EA5t c\u1EA3 t\xE0i nguy\xEAn v\xE0 d\u1EEF li\u1EC7u c\u1EE7a t\xE0i kho\u1EA3n \u0111\xF3 s\u1EBD b\u1ECB x\xF3a v\u0129nh vi\u1EC5n. Tr\u01B0\u1EDBc khi x\xF3a t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n, b\u1EA1n c\xF3 th\u1EC3 t\u1EA3i xu\u1ED1ng b\u1EA5t k\u1EF3 d\u1EEF li\u1EC7u ho\u1EB7c th\xF4ng tin n\xE0o b\u1EA1n mu\u1ED1n gi\u1EEF l\u1EA1i b\u1EB1ng c\xE1ch li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i. ",-1),X={class:"mt-5"},B=t(" X\xF3a t\xE0i kho\u1EA3n "),K=t(" X\xF3a T\xE0i Kho\u1EA3n "),S=t(" B\u1EA1n c\xF3 ch\u1EAFc r\u1EB1ng b\u1EA1n mu\u1ED1n x\xF3a t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n? Sau khi t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n b\u1ECB x\xF3a, t\u1EA5t c\u1EA3 t\xE0i nguy\xEAn v\xE0 d\u1EEF li\u1EC7u c\u1EE7a t\xE0i kho\u1EA3n \u0111\xF3 s\u1EBD b\u1ECB x\xF3a v\u0129nh vi\u1EC5n. Vui l\xF2ng nh\u1EADp m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n \u0111\u1EC3 x\xE1c nh\u1EADn r\u1EB1ng b\u1EA1n mu\u1ED1n x\xF3a v\u0129nh vi\u1EC5n t\xE0i kho\u1EA3n c\u1EE7a m\xECnh. "),T={class:"mt-4"},D=t(" H\u1EE7y "),F=t(" X\xF3a t\xE0i kho\u1EA3n "),J={__name:"DeleteUserForm",setup(I){const a=_(!1),i=_(null),o=p({password:""}),m=()=>{a.value=!0,setTimeout(()=>i.value.focus(),250)},l=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>i.value.focus(),onFinish:()=>o.reset()})},c=()=>{a.value=!1,o.reset()};return(N,u)=>(k(),f(g,null,{title:s(()=>[C]),description:s(()=>[$]),content:s(()=>[U,r("div",X,[n(h,{onClick:m},{default:s(()=>[B]),_:1})]),n(x,{show:a.value,onClose:c},{title:s(()=>[K]),content:s(()=>[S,r("div",T,[n(w,{ref_key:"passwordInput",ref:i,modelValue:e(o).password,"onUpdate:modelValue":u[0]||(u[0]=d=>e(o).password=d),type:"password",class:"mt-1 block w-3/4",placeholder:"M\u1EADt kh\u1EA9u",onKeyup:b(l,["enter"])},null,8,["modelValue","onKeyup"]),n(y,{message:e(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:s(()=>[n(V,{onClick:c},{default:s(()=>[D]),_:1}),n(h,{class:v(["ml-3",{"opacity-25":e(o).processing}]),disabled:e(o).processing,onClick:l},{default:s(()=>[F]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{J as default};
