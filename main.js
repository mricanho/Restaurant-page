(()=>{const e=document.querySelector("div#content");e.innerHTML="";const t=document.createElement("section");t.setAttribute("class","hero is-info is-large");const n=document.createElement("div");n.setAttribute("class","hero-head"),t.appendChild(n);const a=document.createElement("nav");a.setAttribute("class","navbar"),n.appendChild(a);const s=document.createElement("div");s.setAttribute("class","container"),a.appendChild(s);const c=document.createElement("div");c.setAttribute("class","navbar-brand"),s.appendChild(c);const i=document.createElement("a");i.setAttribute("class","navbar-item"),c.appendChild(i);const r=document.createElement("img");r.setAttribute("src","./assets/images/ihop.png"),r.setAttribute("alt","ihop logo"),i.appendChild(r);const d=document.createElement("div");d.setAttribute("class","navbar-menu"),d.setAttribute("id","navbarMenuHeroB"),s.appendChild(d);const o=document.createElement("div");o.setAttribute("class","navbar-end"),d.appendChild(o);const l=document.createElement("a");l.setAttribute("class","navbar-item"),l.innerHTML="Home",o.appendChild(l);const m=document.createElement("a");m.setAttribute("class","navbar-item"),m.innerHTML="Menu",o.appendChild(m);const u=document.createElement("a");u.setAttribute("class","navbar-item"),u.innerHTML="Contact",o.appendChild(u),e.appendChild(t)})();