const DB='mecast-audio', STORE='files';
function db(){return new Promise((ok,no)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE);r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)})}
export async function putAudio(id,file){const d=await db();return new Promise((ok,no)=>{const t=d.transaction(STORE,'readwrite');t.objectStore(STORE).put(file,id);t.oncomplete=()=>{d.close();ok()};t.onerror=()=>no(t.error)})}
export async function getAudio(id){const d=await db();return new Promise((ok,no)=>{const r=d.transaction(STORE).objectStore(STORE).get(id);r.onsuccess=()=>{d.close();ok(r.result||null)};r.onerror=()=>no(r.error)})}
export async function delAudio(id){const d=await db();return new Promise((ok,no)=>{const t=d.transaction(STORE,'readwrite');t.objectStore(STORE).delete(id);t.oncomplete=()=>{d.close();ok()};t.onerror=()=>no(t.error)})}
