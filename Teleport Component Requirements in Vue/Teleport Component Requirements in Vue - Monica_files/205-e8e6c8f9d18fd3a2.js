"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{68420:function(e,t,r){r.d(t,{BH:function(){return m},L:function(){return l},LL:function(){return y},ZR:function(){return _},aH:function(){return g},eu:function(){return v},hl:function(){return b},m9:function(){return S},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),a=Object.keys(r);for(let i of n){if(!a.includes(i))return!1;let n=t[i],o=r[i];if(I(n)&&I(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of a)if(!n.includes(e))return!1;return!0}},zI:function(){return w}});var n=r(64633);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?t[r++]=a:(a<2048?t[r++]=a>>6|192:((64512&a)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128):t[r++]=a>>12|224,t[r++]=a>>6&63|128),t[r++]=63&a|128)}return t},i=function(e){let t=[],r=0,n=0;for(;r<e.length;){let a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){let i=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){let i=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(i>>10)),t[n++]=String.fromCharCode(56320+(1023&i))}else{let i=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let a=e[t],i=t+1<e.length,o=i?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=a>>2,u=(3&a)<<4|o>>4,h=(15&o)<<2|c>>6,f=63&c;s||(f=64,i||(h=64)),n.push(r[l],r[u],r[h],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let a=r[e.charAt(t++)],i=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,c=++t<e.length?r[e.charAt(t)]:64;if(++t,null==a||null==i||null==o||null==c)throw new s;let l=a<<2|i>>4;if(n.push(l),64!==o){let e=i<<4&240|o>>2;if(n.push(e),64!==c){let e=o<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let c=function(e){let t=a(e);return o.encodeByteArray(t,!0)},l=function(e){return c(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,f=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},d=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||f()||d()}catch(e){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e));return}},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}function b(){try{return"object"==typeof indexedDB}catch(e){return!1}}function v(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function w(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class _ extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{create(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];let a=r[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?o.replace(E,(e,t)=>{let r=a[t];return null!=r?String(r):"<".concat(t,"?>")}):"Error",c="".concat(this.serviceName,": ").concat(s," (").concat(i,").");return new _(i,c,a)}constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}}let E=/\{\$([^}]+)}/g;function I(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return e&&e._delegate?e._delegate:e}},691:function(e,t,r){r.d(t,{KN:function(){return I},Mq:function(){return E},Xd:function(){return b},ZF:function(){return y},qX:function(){return v}});var n=r(27609),a=r(46988),i=r(68420),o=r(27440);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}}).filter(e=>e).join(" ")}constructor(e){this.container=e}}let c="@firebase/app",l="0.10.7",u=new a.Yd("@firebase/app"),h="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(r){u.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function b(e){let t=e.name;if(g.has(t))return u.debug("There were multiple attempts to register component ".concat(t,".")),!1;for(let r of(g.set(t,e),d.values()))m(r,e);for(let t of p.values())m(t,e);return!0}function v(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let w=new i.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.wA("app",()=>this,"PUBLIC"))}}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;"object"!=typeof t&&(t={name:t});let a=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),o=a.name;if("string"!=typeof o||!o)throw w.create("bad-app-name",{appName:String(o)});if(r||(r=(0,i.aH)()),!r)throw w.create("no-options");let s=d.get(o);if(s){if((0,i.vZ)(r,s.options)&&(0,i.vZ)(a,s.config))return s;throw w.create("duplicate-app",{appName:o})}let c=new n.H0(o);for(let e of g.values())c.addComponent(e);let l=new _(r,a,c);return d.set(o,l),l}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=d.get(e);if(!t&&e===h&&(0,i.aH)())return y();if(!t)throw w.create("no-app",{appName:e});return t}function I(e,t,r){var a;let i=null!==(a=f[e])&&void 0!==a?a:e;r&&(i+="-".concat(r));let o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){let e=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];o&&e.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&s&&e.push("and"),s&&e.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),u.warn(e.join(" "));return}b(new n.wA("".concat(i,"-version"),()=>({library:i,version:t}),"VERSION"))}let S="firebase-heartbeat-store",T=null;function A(){return T||(T=(0,o.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(S)}catch(e){console.warn(e)}}}).catch(e=>{throw w.create("idb-open",{originalErrorMessage:e.message})})),T}async function C(e){try{let t=(await A()).transaction(S),r=await t.objectStore(S).get(N(e));return await t.done,r}catch(e){if(e instanceof i.ZR)u.warn(e.message);else{let t=w.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}async function D(e,t){try{let r=(await A()).transaction(S,"readwrite"),n=r.objectStore(S);await n.put(t,N(e)),await r.done}catch(e){if(e instanceof i.ZR)u.warn(e.message);else{let t=w.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function N(e){return"".concat(e.name,"!").concat(e.options.appId)}class O{async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=k();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=k(),{heartbeatsToSend:r,unsentEntries:n}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice();for(let a of e){let e=r.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),B(r)>t){e.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),B(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),a=(0,i.L)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new M(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}}function k(){return new Date().toISOString().substring(0,10)}class M{async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await C(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return D(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return D(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function B(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}b(new n.wA("platform-logger",e=>new s(e),"PRIVATE")),b(new n.wA("heartbeat",e=>new O(e),"PRIVATE")),I(c,l,""),I(c,l,"esm2017"),I("fire-js","")},27609:function(e,t,r){r.d(t,{H0:function(){return s},wA:function(){return a}});var n=r(68420);class a{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),a=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;a.add(e),this.onInitCallbacks.set(n,a);let i=this.instances.get(n);return i&&e(i,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService(e){let{instanceIdentifier:t,options:r={}}=e,n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:t===i?void 0:t,options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(e){}return n||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}},46988:function(e,t,r){var n,a;r.d(t,{Yd:function(){return u},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=[];(a=n||(n={}))[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},s=n.INFO,c={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},l=function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];if(t<e.logLevel)return;let i=new Date().toISOString(),o=c[t];if(o)console[o]("[".concat(i,"]  ").concat(e.name,":"),...n);else throw Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))};class u{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...t),this._logHandler(this,n.DEBUG,...t)}log(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...t),this._logHandler(this,n.VERBOSE,...t)}info(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.INFO,...t),this._logHandler(this,n.INFO,...t)}warn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.WARN,...t),this._logHandler(this,n.WARN,...t)}error(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler(this,n.ERROR,...t),this._logHandler(this,n.ERROR,...t)}constructor(e){this.name=e,this._logLevel=s,this._logHandler=l,this._userLogHandler=null,i.push(this)}}},57947:function(e,t,r){r.d(t,{ZF:function(){return n.ZF}});var n=r(691);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","10.12.4","app")},38670:function(e,t,r){let n,a,i,o,s,c;r.d(t,{r:function(){return eU}});var l,u,h=r(68420),f=r(46988),d=r(691),p=r(27609),g=r(27440);let m="@firebase/installations",b="0.6.8",v="w:".concat(b),w="FIS_v2",_=new h.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function y(e){return e instanceof h.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){let{projectId:t}=e;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function I(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function S(e,t){let r=(await t.json()).error;return _.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function T(e){let{apiKey:t}=e;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function A(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C(e,t){let{appConfig:r,heartbeatServiceProvider:n}=e,{fid:a}=t,i=E(r),o=T(r),s=n.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}let c={method:"POST",headers:o,body:JSON.stringify({fid:a,authVersion:w,appId:r.appId,sdkVersion:v})},l=await A(()=>fetch(i,c));if(l.ok){let e=await l.json();return{fid:e.fid||a,registrationStatus:2,refreshToken:e.refreshToken,authToken:I(e.authToken)}}throw await S("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return"".concat(e.appName,"!").concat(e.appId)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k=new Map;function M(e,t){let r=O(e);B(r,t),function(e,t){let r=(!L&&"BroadcastChannel"in self&&((L=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{B(e.data.key,e.data.fid)}),L);r&&r.postMessage({key:e,fid:t}),0===k.size&&L&&(L.close(),L=null)}(r,t)}function B(e,t){let r=k.get(e);if(r)for(let e of r)e(t)}let L=null,R="firebase-installations-store",P=null;function j(){return P||(P=(0,g.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(R)}})),P}async function F(e,t){let r=O(e),n=(await j()).transaction(R,"readwrite"),a=n.objectStore(R),i=await a.get(r);return await a.put(t,r),await n.done,i&&i.fid===t.fid||M(e,t.fid),t}async function U(e){let t=O(e),r=(await j()).transaction(R,"readwrite");await r.objectStore(R).delete(t),await r.done}async function H(e,t){let r=O(e),n=(await j()).transaction(R,"readwrite"),a=n.objectStore(R),i=await a.get(r),o=t(i);return void 0===o?await a.delete(r):await a.put(o,r),await n.done,o&&(!i||i.fid!==o.fid)&&M(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e){let t;let r=await H(e.appConfig,r=>{let n=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(_.create("app-offline"))};let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=q(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:x(e)}:{installationEntry:t}}(e,W(r||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return N.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=n.registrationPromise,n.installationEntry});return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function q(e,t){try{let r=await C(e,t);return F(e.appConfig,r)}catch(r){throw y(r)&&409===r.customData.serverCode?await U(e.appConfig):await F(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function x(e){let t=await z(e.appConfig);for(;1===t.registrationStatus;)await D(100),t=await z(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:r}=await V(e);return r||t}return t}function z(e){return H(e,e=>{if(!e)throw _.create("installation-not-found");return W(e)})}function W(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){let{appConfig:r,heartbeatServiceProvider:n}=e,a=function(e,t){let{fid:r}=t;return"".concat(E(e),"/").concat(r,"/authTokens:generate")}(r,t),i=function(e,t){let{refreshToken:r}=t,n=T(e);return n.append("Authorization","".concat(w," ").concat(r)),n}(r,t),o=n.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let s={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:v,appId:r.appId}})},c=await A(()=>fetch(a,s));if(c.ok)return I(await c.json());throw await S("Generate Auth Token",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e){let t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=await H(e.appConfig,n=>{var a;if(!G(n))throw _.create("not-registered");let i=n.authToken;if(!r&&2===(a=i).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(a))return n;if(1===i.requestStatus)return t=J(e,r),n;{if(!navigator.onLine)throw _.create("app-offline");let r=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return t=Z(e,r),r}});return t?await t:n.authToken}async function J(e,t){let r=await X(e.appConfig);for(;1===r.authToken.requestStatus;)await D(100),r=await X(e.appConfig);let n=r.authToken;return 0===n.requestStatus?K(e,t):n}function X(e){return H(e,e=>{var t;if(!G(e))throw _.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Z(e,t){try{let r=await $(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await F(e.appConfig,n),r}catch(r){if(y(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await U(e.appConfig);else{let r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await F(e.appConfig,r)}throw r}}function G(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){let{installationEntry:t,registrationPromise:r}=await V(e);return r?r.catch(console.error):K(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return await ee(e),(await K(e,t)).token}async function ee(e){let{registrationPromise:t}=await V(e);t&&await t}function et(e){return _.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er="installations";(0,d.Xd)(new p.wA(er,e=>{let t=e.getProvider("app").getImmediate(),r=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw et("App Configuration");if(!e.name)throw et("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw et(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=(0,d.qX)(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,d.Xd)(new p.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),r=(0,d.qX)(t,er).getImmediate();return{getId:()=>Y(r),getToken:e=>Q(r,e)}},"PRIVATE")),(0,d.KN)(m,b),(0,d.KN)(m,b,"esm2017");let en="@firebase/performance",ea="0.6.8",ei="FB-PERF-TRACE-MEASURE",eo="_wt_",es="_fcp",ec="_fid",el="@firebase/performance/config",eu="@firebase/performance/configexpire",eh="Performance",ef=new h.LL("performance",eh,{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."}),ed=new f.Yd(eh);ed.logLevel=f.in.INFO;class ep{getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){this.performance&&this.performance.mark&&this.performance.mark(e)}measure(e,t,r){this.performance&&this.performance.measure&&this.performance.measure(e,t,r)}getEntriesByType(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]}getEntriesByName(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&(0,h.zI)()?!!(0,h.hl)()||(ed.info("IndexedDB is not supported by current browser"),!1):(ed.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(e,t){this.PerformanceObserver&&new this.PerformanceObserver(e=>{for(let r of e.getEntries())t(r)}).observe({entryTypes:[e]})}static getInstance(){return void 0===n&&(n=new ep(a)),n}constructor(e){if(this.window=e,!e)throw ef.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(e,t){let r=e.length-t.length;if(r<0||r>1)throw ef.create("invalid String merger input");let n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),t.length>r&&n.push(t.charAt(r));return n.join("")}class em{getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===o&&(o=new em),o}constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=eg("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=eg("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}}(l=u||(u={}))[l.UNKNOWN=0]="UNKNOWN",l[l.VISIBLE=1]="VISIBLE",l[l.HIDDEN=2]="HIDDEN";let eb=["firebase_","google_","ga_"],ev=RegExp("^[a-zA-Z]\\w*$");function ew(){switch(ep.getInstance().document.visibilityState){case"visible":return u.VISIBLE;case"hidden":return u.HIDDEN;default:return u.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(e){var t;let r=null===(t=e.options)||void 0===t?void 0:t.appId;if(!r)throw ef.create("no app id");return r}let ey={loggingEnabled:!0};function eE(e){if(!e)return e;let t=em.getInstance(),r=e.entries||{};return void 0!==r.fpr_enabled?t.loggingEnabled="true"===String(r.fpr_enabled):t.loggingEnabled=ey.loggingEnabled,r.fpr_log_source?t.logSource=Number(r.fpr_log_source):ey.logSource&&(t.logSource=ey.logSource),r.fpr_log_endpoint_url?t.logEndPointUrl=r.fpr_log_endpoint_url:ey.logEndPointUrl&&(t.logEndPointUrl=ey.logEndPointUrl),r.fpr_log_transport_key?t.transportKey=r.fpr_log_transport_key:ey.transportKey&&(t.transportKey=ey.transportKey),void 0!==r.fpr_vc_network_request_sampling_rate?t.networkRequestsSamplingRate=Number(r.fpr_vc_network_request_sampling_rate):void 0!==ey.networkRequestsSamplingRate&&(t.networkRequestsSamplingRate=ey.networkRequestsSamplingRate),void 0!==r.fpr_vc_trace_sampling_rate?t.tracesSamplingRate=Number(r.fpr_vc_trace_sampling_rate):void 0!==ey.tracesSamplingRate&&(t.tracesSamplingRate=ey.tracesSamplingRate),t.logTraceAfterSampling=eI(t.tracesSamplingRate),t.logNetworkAfterSampling=eI(t.networkRequestsSamplingRate),e}function eI(e){return Math.random()<=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eS=1;function eT(e){return eS=2,s=s||(function(){let e=ep.getInstance().document;return new Promise(t=>{if(e&&"complete"!==e.readyState){let r=()=>{"complete"===e.readyState&&(e.removeEventListener("readystatechange",r),t())};e.addEventListener("readystatechange",r)}else t()})})().then(()=>(function(e){let t=e.getId();return t.then(e=>{i=e}),t})(e.installations)).then(t=>(function(e,t){let r=function(){let e=ep.getInstance().localStorage;if(!e)return;let t=e.getItem(eu);if(!t||!(Number(t)>Date.now()))return;let r=e.getItem(el);if(r)try{return JSON.parse(r)}catch(e){return}}();return r?(eE(r),Promise.resolve()):(function(e){let t=e.getToken();return t.then(e=>{}),t})(e.installations).then(r=>{let n=function(e){var t;let r=null===(t=e.options)||void 0===t?void 0:t.projectId;if(!r)throw ef.create("no project id");return r}(e.app),a=function(e){var t;let r=null===(t=e.options)||void 0===t?void 0:t.apiKey;if(!r)throw ef.create("no api key");return r}(e.app),i="https://firebaseremoteconfig.googleapis.com/v1/projects/".concat(n,"/namespaces/fireperf:fetch?key=").concat(a),o=new Request(i,{method:"POST",headers:{Authorization:"".concat("FIREBASE_INSTALLATIONS_AUTH"," ").concat(r)},body:JSON.stringify({app_instance_id:t,app_instance_id_token:r,app_id:e_(e.app),app_version:ea,sdk_version:"0.0.1"})});return fetch(o).then(e=>{if(e.ok)return e.json();throw ef.create("RC response not ok")})}).catch(()=>{ed.info("Could not fetch config, will use default configs")}).then(eE).then(e=>(function(e){let t=ep.getInstance().localStorage;e&&t&&(t.setItem(el,JSON.stringify(e)),t.setItem(eu,String(Date.now()+36e5*em.getInstance().configTimeToLive)))})(e),()=>{})})(e,t)).then(()=>void(eS=3),()=>void(eS=3))}let eA=3,eC=[],eD=!1;function eN(e,t){!c&&(c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];!function(e){if(!e.eventTime||!e.message)throw ef.create("invalid cc log");eC=[...eC,e]}({message:function(e,t){return 0===t?function(e){let t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs};return JSON.stringify({application_info:eM(e.performanceController.app),network_request_metric:t})}(e):function(e){let t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);let r=e.getAttributes();return 0!==Object.keys(r).length&&(t.custom_attributes=r),JSON.stringify({application_info:eM(e.performanceController.app),trace_metric:t})}(e)}(...t),eventTime:Date.now()})}),c(e,t)}function eO(e){let t=em.getInstance();(t.instrumentationEnabled||!e.isAuto)&&(t.dataCollectionEnabled||e.isAuto)&&ep.getInstance().requiredApisAvailable()&&(!e.isAuto||ew()===u.VISIBLE)&&(3===eS?ek(e):eT(e.performanceController).then(()=>ek(e),()=>ek(e)))}function ek(e){if(!i)return;let t=em.getInstance();t.loggingEnabled&&t.logTraceAfterSampling&&setTimeout(()=>eN(e,1),0)}function eM(e){return{google_app_id:e_(e),app_instance_id:i,web_app_info:{sdk_version:ea,page_url:ep.getInstance().getUrl(),service_worker_status:function(){let e=ep.getInstance().navigator;return null!=e&&e.serviceWorker?e.serviceWorker.controller?2:3:1}(),visibility_state:ew(),effective_connection_type:function(){let e=ep.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}()},application_process_state:0}}let eB=["_fp",es,ec];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{start(){if(1!==this.state)throw ef.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw ef.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),eO(this)}record(e,t,r){if(e<=0)throw ef.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw ef.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(let e of Object.keys(r.metrics))isNaN(Number(r.metrics[e]))||(this.counters[e]=Math.floor(Number(r.metrics[e])));eO(this)}incrementMetric(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;void 0===this.counters[e]?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){var r;if(r=this.name,0!==e.length&&!(e.length>100)&&(r&&r.startsWith(eo)&&eB.indexOf(e)>-1||!e.startsWith("_")))this.counters[e]=function(e){let t=Math.floor(e);return t<e&&ed.info("Metric value should be an Integer, setting the value as : ".concat(t,".")),t}(null!=t?t:0);else throw ef.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,t){let r=0!==e.length&&!(e.length>40)&&!eb.some(t=>e.startsWith(t))&&!!e.match(ev),n=0!==t.length&&t.length<=100;if(r&&n){this.customAttributes[e]=t;return}if(!r)throw ef.create("invalid attribute name",{attributeName:e});if(!n)throw ef.create("invalid attribute value",{attributeValue:t})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){let e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor((t.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,t,r,n){let a=ep.getInstance().getUrl();if(!a)return;let i=new eL(e,eo+a,!0),o=Math.floor(1e3*ep.getInstance().getTimeOrigin());if(i.setStartTime(o),t&&t[0]&&(i.setDuration(Math.floor(1e3*t[0].duration)),i.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),i.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),i.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd))),r){let e=r.find(e=>"first-paint"===e.name);e&&e.startTime&&i.putMetric("_fp",Math.floor(1e3*e.startTime));let t=r.find(e=>"first-contentful-paint"===e.name);t&&t.startTime&&i.putMetric(es,Math.floor(1e3*t.startTime)),n&&i.putMetric(ec,Math.floor(1e3*n))}eO(i)}static createUserTimingTrace(e,t){eO(new eL(e,t,!1,t))}constructor(e,t,r=!1,n){this.performanceController=e,this.name=t,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=ep.getInstance(),this.randomId=Math.floor(1e6*Math.random()),!this.isAuto&&(this.traceStartMark="".concat("FB-PERF-TRACE-START","-").concat(this.randomId,"-").concat(this.name),this.traceStopMark="".concat("FB-PERF-TRACE-STOP","-").concat(this.randomId,"-").concat(this.name),this.traceMeasure=n||"".concat(ei,"-").concat(this.randomId,"-").concat(this.name),n&&this.calculateTraceMetrics())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(e,t){if(!t||void 0===t.responseStart)return;let r=ep.getInstance().getTimeOrigin(),n=Math.floor((t.startTime+r)*1e3),a=t.responseStart?Math.floor((t.responseStart-t.startTime)*1e3):void 0,i=Math.floor((t.responseEnd-t.startTime)*1e3);!function(e){let t=em.getInstance();if(!t.instrumentationEnabled)return;let r=e.url,n=t.logEndPointUrl.split("?")[0],a=t.flTransportEndpointUrl.split("?")[0];r!==n&&r!==a&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout(()=>eN(e,0),0)}({performanceController:e,url:t.name&&t.name.split("?")[0],responsePayloadBytes:t.transferSize,startTimeUs:n,timeToResponseInitiatedUs:a,timeToResponseCompletedUs:i})}function eP(e){i&&(setTimeout(()=>(function(e){let t=ep.getInstance(),r=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){let a=setTimeout(()=>{eL.createOobTrace(e,r,n),a=void 0},5e3);t.onFirstInputDelay(t=>{a&&(clearTimeout(a),eL.createOobTrace(e,r,n,t))})}else eL.createOobTrace(e,r,n)})(e),0),setTimeout(()=>(function(e){let t=ep.getInstance();for(let r of t.getEntriesByType("resource"))eR(e,r);t.setupObserver("resource",t=>eR(e,t))})(e),0),setTimeout(()=>(function(e){let t=ep.getInstance();for(let r of t.getEntriesByType("measure"))ej(e,r);t.setupObserver("measure",t=>ej(e,t))})(e),0))}function ej(e,t){let r=t.name;r.substring(0,ei.length)!==ei&&eL.createUserTimingTrace(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{_init(e){this.initialized||((null==e?void 0:e.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),(null==e?void 0:e.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),ep.getInstance().requiredApisAvailable()?(0,h.eu)().then(e=>{e&&(eD||(function e(t){setTimeout(()=>{if(0!==eA){if(!eC.length)return e(1e4);!function(){let t=eC.splice(0,1e3),r=t.map(e=>({source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)}));(function(e){let t=em.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:em.getInstance().logSource,log_event:r}).then(e=>(e.ok||ed.info("Call to Firebase backend failed."),e.json())).then(r=>{let n=Number(r.nextRequestWaitMillis),a=1e4;isNaN(n)||(a=Math.max(n,a));let i=r.logResponseDetails;Array.isArray(i)&&i.length>0&&"RETRY_REQUEST_LATER"===i[0].responseAction&&(eC=[...t,...eC],ed.info("Retry transport request later.")),eA=3,e(a)}).catch(()=>{eC=[...t,...eC],eA--,ed.info("Tries left: ".concat(eA,".")),e(1e4)})}()}},t)}(5500),eD=!0),eT(this).then(()=>eP(this),()=>eP(this)),this.initialized=!0)}).catch(e=>{ed.info("Environment doesn't support IndexedDB: ".concat(e))}):ed.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){em.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return em.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){em.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return em.getInstance().dataCollectionEnabled}constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}}function eU(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,d.Mq)();return e=(0,h.m9)(e),(0,d.qX)(e,"performance").getImmediate()}(0,d.Xd)(new p.wA("performance",(e,t)=>{let{options:r}=t,n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==n.name)throw ef.create("FB not default");if("undefined"==typeof window)throw ef.create("no window");a=window;let o=new eF(n,i);return o._init(r),o},"PUBLIC")),(0,d.KN)(en,ea),(0,d.KN)(en,ea,"esm2017")},27440:function(e,t,r){var n;let a,i;r.d(t,{X3:function(){return g}});let o=(e,t)=>t.some(t=>e instanceof t),s=new WeakMap,c=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,f={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return d(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(d(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&s.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(u.has(e))return u.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(p(this),r),d(s.get(this))}:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return d(t.apply(p(this),r))}:function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];let i=t.call(p(this),e,...n);return l.set(i,e.sort?e.sort():[e]),d(i)}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),n()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});c.set(e,t)}(t),o(t,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,f):t;return r!==e&&(u.set(e,r),h.set(r,e)),r}let p=e=>h.get(e);function g(e,t){let{blocked:r,upgrade:n,blocking:a,terminated:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=indexedDB.open(e,t),s=d(o);return n&&o.addEventListener("upgradeneeded",e=>{n(d(o.result),e.oldVersion,e.newVersion,d(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}let m=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],v=new Map;function w(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(v.get(t))return v.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,a=b.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(a||m.includes(r)))return;let i=async function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];let s=this.transaction(e,a?"readwrite":"readonly"),c=s.store;return n&&(c=c.index(i.shift())),(await Promise.all([c[r](...i),a&&s.done]))[0]};return v.set(t,i),i}f={...n=f,get:(e,t,r)=>w(e,t)||n.get(e,t,r),has:(e,t)=>!!w(e,t)||n.has(e,t)}}}]);