﻿"use strict";
_kangoLoader.add("kango/storage_sync", function(require, exports, module) {
function StorageSyncModule(e,n,t){var o="undefined"!=typeof module,a="KangoStorage",r={setItem:function(n){e.setItem(n.name,n.value,!o)},removeItem:function(n){return e.removeItem(n.name,!o)},clear:function(){return e.clear(!o)}};n("message",function(e){var n=e.data,t=e.name.split("_");if(t[0]==a)for(var o in r)if(r.hasOwnProperty(o)&&o==t[1]){r[o](n,e.source);break}}),e.addEventListener("setItem",function(e){t([a,e.type].join("_"),e.data)}),e.addEventListener("removeItem",function(e){t([a,e.type].join("_"),e.data)}),e.addEventListener("clear",function(e){t([a,e.type].join("_"))})}"undefined"!=typeof module&&(module.exports=StorageSyncModule);
});