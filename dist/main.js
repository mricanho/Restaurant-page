(()=>{"use strict";const e=()=>{const e=document.querySelector("div#content");e.innerHTML="";const t=document.createElement("section");t.setAttribute("class","hero is-info is-large");const n=document.createElement("div");n.setAttribute("class","hero-head"),t.appendChild(n);const a=document.createElement("nav");a.setAttribute("class","navbar"),n.appendChild(a);const c=document.createElement("div");c.setAttribute("class","container"),a.appendChild(c);const s=document.createElement("div");s.setAttribute("class","navbar-brand"),c.appendChild(s);const i=document.createElement("a");i.setAttribute("class","navbar-item"),s.appendChild(i);const r=document.createElement("img");r.setAttribute("src","./assets/images/ihop.png"),r.setAttribute("alt","ihop logo"),i.appendChild(r);const d=document.createElement("div");d.setAttribute("class","navbar-menu"),d.setAttribute("id","navbarMenuHeroB"),c.appendChild(d);const o=document.createElement("div");o.setAttribute("class","navbar-end"),d.appendChild(o);const l=document.createElement("a");l.setAttribute("class","navbar-item"),l.setAttribute("id","home"),l.innerHTML="Home",o.appendChild(l);const u=document.createElement("a");u.setAttribute("class","navbar-item"),u.setAttribute("id","menu"),u.innerHTML="Menu",o.appendChild(u);const m=document.createElement("a");m.setAttribute("class","navbar-item"),m.setAttribute("id","contact"),m.innerHTML="Contact",o.appendChild(m);const p=document.createElement("div");p.setAttribute("class","hero-body py-6"),t.appendChild(p);const b=document.createElement("div");b.setAttribute("class","container has-text-centered"),p.appendChild(b);const A=document.createElement("p");A.setAttribute("class","title mb-6"),A.innerHTML="ALL THE PANCAKES YOU CAN EAT",b.appendChild(A);const h=document.createElement("figure");h.setAttribute("class","image is-5by3"),b.appendChild(h);const E=document.createElement("img");E.setAttribute("class","pancakes"),E.setAttribute("src","./assets/images/stack.png"),h.appendChild(E),e.appendChild(t)},t=()=>{e(),alert("hi")},n=()=>{alert("menu")},a=()=>{alert("Contact")};e(),document.querySelector("a#home").addEventListener("click",t),document.querySelector("a#menu").addEventListener("click",n),document.querySelector("a#contact").addEventListener("click",a)})();