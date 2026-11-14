/* CNS.corp — actualités automatiques (même source que le bouton Télécharger) + style des questions fréquentes */
(function(){
var U="https://jbjeqxubpqqypysfsubd.supabase.co",K="sb_publishable_bYKnve2bIrsZu1XG_g-syw_8CnA8qPR";
var st=document.createElement("style");st.textContent="details.card summary{cursor:pointer;font-weight:700;color:#0a3d91;list-style:none}details.card summary::-webkit-details-marker{display:none}details.card summary::after{content:'+';float:right;color:#00a8c6}details.card[open] summary::after{content:'−'}details.card p{margin:10px 0 0}";document.head.appendChild(st);
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
var A=document.getElementById("cns-news"),H=document.getElementById("cns-news-home");if(!A&&!H)return;
fetch(U+"/rest/v1/rpc/latest_app_update",{method:"POST",cache:"no-store",headers:{apikey:K,"Content-Type":"application/json"},body:"{}"})
.then(function(r){return r.json()}).then(function(d){
 if(Array.isArray(d))d=d[0];
 if(!d||!d.version_code||!/^https:\/\/jbjeqxubpqqypysfsubd\.supabase\.co\/storage\/v1\/object\/public\/apk\//.test(d.url))return;
 var n=String(d.notes||"").split("\n").filter(function(x){return x.trim()}).map(function(x){return"<li>"+esc(x)+"</li>"}).join("");
 var h='<div class="card"><span class="tag">Nouvelle version</span><h3>TÕÕLé '+esc(d.version_name)+' est disponible</h3>'+(n?"<ul>"+n+"</ul>":"<p>La dernière version de la messagerie burkinabè est prête au téléchargement.</p>");
 if(A)A.innerHTML=h+"</div>";
 if(H)H.innerHTML='<h2>Actualités</h2>'+h+'<p><a href="actualites.html" style="color:#0a7fa0">Toutes les actualités →</a></p></div>';
}).catch(function(){});
})();
