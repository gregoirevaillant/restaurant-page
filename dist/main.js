(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.classList.add("title"),n.textContent="The Best Restaurant",t.appendChild(n);const c=document.createElement("h2");c.classList.add("subtitle"),c.textContent="The Best Food",t.appendChild(c),e.appendChild(t)};(()=>{const t=document.querySelector("#content"),n=document.createElement("header");t.appendChild(n);const c=document.createElement("button");c.textContent="Home",n.appendChild(c);const i=document.createElement("button");i.textContent="Menu",n.appendChild(i);const s=document.createElement("button");function d(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}s.textContent="Contact",n.appendChild(s),i.setAttribute("id","menu"),c.setAttribute("id","home"),s.setAttribute("id","contact"),c.classList.add("active"),n.addEventListener("click",(t=>{"home"===t.target.id?(d(),c.classList.add("active"),i.classList.remove("active"),s.classList.remove("active"),e()):"menu"===t.target.id?(d(),c.classList.remove("active"),i.classList.add("active"),s.classList.remove("active"),(()=>{const e=[{name:"Chicken",price:"$10",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur. Sed euismod, enim at ultrices tincidunt."},{name:"Beef",price:"$15",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur."},{name:"Beef",price:"$15",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur."},{name:"Beef",price:"$15",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur."},{name:"Beef",price:"$15",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur."}],t=e.length,n=document.getElementById("content"),c=document.createElement("div");c.classList.add("page-content");const i=document.createElement("div");i.classList.add("dishes");for(let n=0;n<t;n++){const t=document.createElement("div");t.classList.add("dish");const c=document.createElement("h1");c.classList.add("menu-title"),c.textContent=e[n].name,t.appendChild(c);const s=document.createElement("h2");s.classList.add("menu-price"),s.textContent=e[n].price,t.appendChild(s);const d=document.createElement("p");d.classList.add("menu-description"),d.textContent=e[n].description,t.appendChild(d),i.appendChild(t)}c.appendChild(i),n.appendChild(c)})()):"contact"===t.target.id&&(d(),c.classList.remove("active"),i.classList.remove("active"),s.classList.add("active"),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);const c=document.createElement("p");c.textContent="Phone: 555-555-5555",t.appendChild(c),e.appendChild(t)})())}))})(),e()})();