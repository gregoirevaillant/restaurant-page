(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.classList.add("title"),n.textContent="The Best Restaurant",t.appendChild(n);const c=document.createElement("h2");c.classList.add("subtitle"),c.textContent="The Best Food",t.appendChild(c),e.appendChild(t)};(()=>{const t=document.querySelector("#content"),n=document.createElement("header");t.appendChild(n);const c=document.createElement("button");c.textContent="Home",n.appendChild(c);const o=document.createElement("button");o.textContent="Menu",n.appendChild(o);const d=document.createElement("button");function i(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}d.textContent="Contact",n.appendChild(d),o.setAttribute("id","menu"),c.setAttribute("id","home"),d.setAttribute("id","contact"),n.addEventListener("click",(t=>{"home"===t.target.id?(i(),e()):"menu"===t.target.id?(i(),(()=>{const e=[{name:"Chicken",price:"$10",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur. Sed euismod, enim at ultrices tincidunt."},{name:"Beef",price:"$15",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nisl eget elit ornare consectetur."}],t=e.length,n=document.getElementById("content"),c=document.createElement("div");c.classList.add("page-content");for(let n=0;n<t;n++){const t=document.createElement("h1");t.textContent=e[n].name,c.appendChild(t);const o=document.createElement("h2");o.textContent=e[n].price,c.appendChild(o);const d=document.createElement("p");d.textContent=e[n].description,c.appendChild(d)}n.appendChild(c)})()):"contact"===t.target.id&&(i(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);const c=document.createElement("p");c.textContent="Phone: 555-555-5555",t.appendChild(c),e.appendChild(t)})())}))})(),e()})();