/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.17.0(63d87164d0bc8c6206d9339c195289c93665028e)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
"use strict";var _amdLoaderGlobal=this,_commonjsGlobal="object"==typeof global?global:{};!function(e){e.global=_amdLoaderGlobal;var t=function(){function t(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1}return Object.defineProperty(t.prototype,"isWindows",{get:function(){return this._detect(),this._isWindows},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isNode",{get:function(){return this._detect(),this._isNode},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isElectronRenderer",{get:function(){return this._detect(),this._isElectronRenderer},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isWebWorker",{get:function(){return this._detect(),this._isWebWorker},enumerable:!0,configurable:!0}),t.prototype._detect=function(){this._detected||(this._detected=!0,this._isWindows=t._isWindows(),this._isNode="undefined"!=typeof module&&!!module.exports,
this._isElectronRenderer="undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.electron&&"renderer"===process.type,this._isWebWorker="function"==typeof e.global.importScripts)},t._isWindows=function(){return!!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0)||"undefined"!=typeof process&&"win32"===process.platform},t}();e.Environment=t}(AMDLoader||(AMDLoader={}));!function(e){var t=function(){return function(e,t,n){this.type=e,this.detail=t,this.timestamp=n}}();e.LoaderEvent=t;var n=function(){function n(e){this._events=[new t(1,"",e)]}return n.prototype.record=function(n,o){this._events.push(new t(n,o,e.Utilities.getHighPerformanceTimestamp()))},n.prototype.getEvents=function(){return this._events},n}();e.LoaderEventRecorder=n;var o=function(){function e(){}return e.prototype.record=function(e,t){},e.prototype.getEvents=function(){return[]},e}();o.INSTANCE=new o,e.NullLoaderEventRecorder=o}(AMDLoader||(AMDLoader={}));!function(e){
var t=function(){function t(){}return t.fileUriToFilePath=function(e,t){if(t=decodeURI(t).replace(/%23/g,"#"),e){if(/^file:\/\/\//.test(t))return t.substr(8);if(/^file:\/\//.test(t))return t.substr(5)}else if(/^file:\/\//.test(t))return t.substr(7);return t},t.startsWith=function(e,t){return e.length>=t.length&&e.substr(0,t.length)===t},t.endsWith=function(e,t){return e.length>=t.length&&e.substr(e.length-t.length)===t},t.containsQueryString=function(e){return/^[^\#]*\?/gi.test(e)},t.isAbsolutePath=function(e){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e)},t.forEachProperty=function(e,t){if(e){var n=void 0;for(n in e)e.hasOwnProperty(n)&&t(n,e[n])}},t.isEmpty=function(e){var n=!0;return t.forEachProperty(e,function(){n=!1}),n},t.recursiveClone=function(e){if(!e||"object"!=typeof e)return e;var n=Array.isArray(e)?[]:{};return t.forEachProperty(e,function(e,o){n[e]=o&&"object"==typeof o?t.recursiveClone(o):o}),n},t.generateAnonymousModule=function(){
return"===anonymous"+t.NEXT_ANONYMOUS_ID+++"==="},t.isAnonymousModule=function(e){return t.startsWith(e,"===anonymous")},t.getHighPerformanceTimestamp=function(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=e.global.performance&&"function"==typeof e.global.performance.now),this.HAS_PERFORMANCE_NOW?e.global.performance.now():Date.now()},t}();t.NEXT_ANONYMOUS_ID=1,t.PERFORMANCE_NOW_PROBED=!1,t.HAS_PERFORMANCE_NOW=!1,e.Utilities=t}(AMDLoader||(AMDLoader={}));!function(e){var t=function(){function t(){}return t.validateConfigurationOptions=function(t){function n(e){return"load"===e.errorCode?(console.error('Loading "'+e.moduleId+'" failed'),console.error("Detail: ",e.detail),e.detail&&e.detail.stack&&console.error(e.detail.stack),console.error("Here are the modules that depend on it:"),void console.error(e.neededBy)):"factory"===e.errorCode?(console.error('The factory method of "'+e.moduleId+'" has thrown an exception'),console.error(e.detail),
void(e.detail&&e.detail.stack&&console.error(e.detail.stack))):void 0}return"string"!=typeof(t=t||{}).baseUrl&&(t.baseUrl=""),"boolean"!=typeof t.isBuild&&(t.isBuild=!1),"object"!=typeof t.paths&&(t.paths={}),"object"!=typeof t.config&&(t.config={}),void 0===t.catchError&&(t.catchError=!1),"string"!=typeof t.urlArgs&&(t.urlArgs=""),"function"!=typeof t.onError&&(t.onError=n),"object"==typeof t.ignoreDuplicateModules&&Array.isArray(t.ignoreDuplicateModules)||(t.ignoreDuplicateModules=[]),t.baseUrl.length>0&&(e.Utilities.endsWith(t.baseUrl,"/")||(t.baseUrl+="/")),"string"!=typeof t.cspNonce&&(t.cspNonce=""),Array.isArray(t.nodeModules)||(t.nodeModules=[]),"object"==typeof t.nodeCachedData&&("string"!=typeof t.nodeCachedData.seed&&(t.nodeCachedData.seed="seed"),("number"!=typeof t.nodeCachedData.writeDelay||t.nodeCachedData.writeDelay<0)&&(t.nodeCachedData.writeDelay=7e3),"function"!=typeof t.nodeCachedData.onData&&(t.nodeCachedData.onData=function(e){
e&&"cachedDataRejected"===e.errorCode?console.warn("Rejected cached data from file: "+e.path):e&&e.errorCode?(console.error("Problems handling cached data file: "+e.path),console.error(e.detail)):e&&console.error(e)}),t.nodeCachedData.path&&"string"==typeof t.nodeCachedData.path||(t.nodeCachedData.onData("INVALID cached data configuration, 'path' MUST be set"),t.nodeCachedData=void 0)),t},t.mergeConfigurationOptions=function(n,o){void 0===n&&(n=null),void 0===o&&(o=null);var r=e.Utilities.recursiveClone(o||{});return e.Utilities.forEachProperty(n,function(t,n){"ignoreDuplicateModules"===t&&void 0!==r.ignoreDuplicateModules?r.ignoreDuplicateModules=r.ignoreDuplicateModules.concat(n):"paths"===t&&void 0!==r.paths?e.Utilities.forEachProperty(n,function(e,t){return r.paths[e]=t}):"config"===t&&void 0!==r.config?e.Utilities.forEachProperty(n,function(e,t){return r.config[e]=t}):r[t]=e.Utilities.recursiveClone(n)}),t.validateConfigurationOptions(r)},t}();e.ConfigurationOptionsUtil=t;var n=function(){
function n(e,n){if(this._env=e,this.options=t.mergeConfigurationOptions(n),this._createIgnoreDuplicateModulesMap(),this._createNodeModulesMap(),this._createSortedPathsRules(),""===this.options.baseUrl){if(this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){var o=this.options.nodeRequire.main.filename,r=Math.max(o.lastIndexOf("/"),o.lastIndexOf("\\"));this.options.baseUrl=o.substring(0,r+1)}if(this.options.nodeMain&&this._env.isNode){var o=this.options.nodeMain,r=Math.max(o.lastIndexOf("/"),o.lastIndexOf("\\"));this.options.baseUrl=o.substring(0,r+1)}}}return n.prototype._createIgnoreDuplicateModulesMap=function(){this.ignoreDuplicateModulesMap={};for(var e=0;e<this.options.ignoreDuplicateModules.length;e++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]]=!0},n.prototype._createNodeModulesMap=function(){this.nodeModulesMap=Object.create(null);for(var e=0,t=this.options.nodeModules;e<t.length;e++){var n=t[e]
;this.nodeModulesMap[n]=!0}},n.prototype._createSortedPathsRules=function(){var t=this;this.sortedPathsRules=[],e.Utilities.forEachProperty(this.options.paths,function(e,n){Array.isArray(n)?t.sortedPathsRules.push({from:e,to:n}):t.sortedPathsRules.push({from:e,to:[n]})}),this.sortedPathsRules.sort(function(e,t){return t.from.length-e.from.length})},n.prototype.cloneAndMerge=function(e){return new n(this._env,t.mergeConfigurationOptions(e,this.options))},n.prototype.getOptionsLiteral=function(){return this.options},n.prototype._applyPaths=function(t){for(var n,o=0,r=this.sortedPathsRules.length;o<r;o++)if(n=this.sortedPathsRules[o],e.Utilities.startsWith(t,n.from)){for(var i=[],s=0,a=n.to.length;s<a;s++)i.push(n.to[s]+t.substr(n.from.length));return i}return[t]},n.prototype._addUrlArgsToUrl=function(t){return e.Utilities.containsQueryString(t)?t+"&"+this.options.urlArgs:t+"?"+this.options.urlArgs},n.prototype._addUrlArgsIfNecessaryToUrl=function(e){return this.options.urlArgs?this._addUrlArgsToUrl(e):e},
n.prototype._addUrlArgsIfNecessaryToUrls=function(e){if(this.options.urlArgs)for(var t=0,n=e.length;t<n;t++)e[t]=this._addUrlArgsToUrl(e[t]);return e},n.prototype.moduleIdToPaths=function(t){if(!0===this.nodeModulesMap[t])return this.isBuild()?["empty:"]:["node|"+t];var n,o=t;if(e.Utilities.endsWith(o,".js")||e.Utilities.isAbsolutePath(o))e.Utilities.endsWith(o,".js")||e.Utilities.containsQueryString(o)||(o+=".js"),n=[o];else for(var r=0,i=(n=this._applyPaths(o)).length;r<i;r++)this.isBuild()&&"empty:"===n[r]||(e.Utilities.isAbsolutePath(n[r])||(n[r]=this.options.baseUrl+n[r]),e.Utilities.endsWith(n[r],".js")||e.Utilities.containsQueryString(n[r])||(n[r]=n[r]+".js"));return this._addUrlArgsIfNecessaryToUrls(n)},n.prototype.requireToUrl=function(t){var n=t;return e.Utilities.isAbsolutePath(n)||(n=this._applyPaths(n)[0],e.Utilities.isAbsolutePath(n)||(n=this.options.baseUrl+n)),this._addUrlArgsIfNecessaryToUrl(n)},n.prototype.isBuild=function(){return this.options.isBuild},
n.prototype.isDuplicateMessageIgnoredFor=function(e){return this.ignoreDuplicateModulesMap.hasOwnProperty(e)},n.prototype.getConfigForModule=function(e){if(this.options.config)return this.options.config[e]},n.prototype.shouldCatchError=function(){return this.options.catchError},n.prototype.shouldRecordStats=function(){return this.options.recordStats},n.prototype.onError=function(e){this.options.onError(e)},n}();e.Configuration=n}(AMDLoader||(AMDLoader={}));!function(e){var t=function(){function e(e){this._env=e,this._scriptLoader=null,this._callbackMap={}}return e.prototype.load=function(e,t,i,s){var a=this;this._scriptLoader||(this._scriptLoader=this._env.isWebWorker?new o:this._env.isNode?new r(this._env):new n);var d={callback:i,errorback:s};this._callbackMap.hasOwnProperty(t)?this._callbackMap[t].push(d):(this._callbackMap[t]=[d],this._scriptLoader.load(e,t,function(){return a.triggerCallback(t)},function(e){return a.triggerErrorback(t,e)}))},e.prototype.triggerCallback=function(e){
var t=this._callbackMap[e];delete this._callbackMap[e];for(var n=0;n<t.length;n++)t[n].callback()},e.prototype.triggerErrorback=function(e,t){var n=this._callbackMap[e];delete this._callbackMap[e];for(var o=0;o<n.length;o++)n[o].errorback(t)},e}(),n=function(){function e(){}return e.prototype.attachListeners=function(e,t,n){var o=function(){e.removeEventListener("load",r),e.removeEventListener("error",i)},r=function(e){o(),t()},i=function(e){o(),n(e)};e.addEventListener("load",r),e.addEventListener("error",i)},e.prototype.load=function(e,t,n,o){var r=document.createElement("script");r.setAttribute("async","async"),r.setAttribute("type","text/javascript"),this.attachListeners(r,n,o),r.setAttribute("src",t);var i=e.getConfig().getOptionsLiteral().cspNonce;i&&r.setAttribute("nonce",i),document.getElementsByTagName("head")[0].appendChild(r)},e}(),o=function(){function e(){}return e.prototype.load=function(e,t,n,o){try{importScripts(t),n()}catch(e){o(e)}},e}(),r=function(){function t(e){this._env=e,
this._didInitialize=!1,this._didPatchNodeRequire=!1,this._hasCreateCachedData=!1}return t.prototype._init=function(e){this._didInitialize||(this._didInitialize=!0,this._fs=e("fs"),this._vm=e("vm"),this._path=e("path"),this._crypto=e("crypto"),this._hasCreateCachedData="function"==typeof new this._vm.Script("").createCachedData)},t.prototype._initNodeRequire=function(e,t){var n=t.getConfig().getOptionsLiteral().nodeCachedData;if(n&&!this._didPatchNodeRequire){this._didPatchNodeRequire=!0;var o=this,r=e("module");r.prototype._compile=function(e,i){e=e.replace(/^#!.*/,"");var s=r.wrap(e),a=o._getCachedDataPath(n.seed,n.path,i),d={filename:i};try{d.cachedData=o._fs.readFileSync(a)}catch(e){d.produceCachedData=!o._hasCreateCachedData}var u=new o._vm.Script(s,d),l=u.runInThisContext(d),c=o._path.dirname(i),h=function(e){var t=e.constructor,n=function(t){try{return e.require(t)}finally{}};return n.resolve=function(n){return t._resolveFilename(n,e)},n.main=process.mainModule,n.extensions=t._extensions,
n.cache=t._cache,n}(this),f=[this.exports,h,this,i,c,process,_commonjsGlobal,Buffer],p=l.apply(this.exports,f);return o._processCachedData(t,u,s,a,!d.cachedData),p}}},t.prototype.load=function(n,o,r,i){var s=this,a=n.getConfig().getOptionsLiteral(),d=a.nodeRequire||e.global.nodeRequire,u=a.nodeInstrumenter||function(e){return e};this._init(d),this._initNodeRequire(d,n);var l=n.getRecorder();if(/^node\|/.test(o)){var c=o.split("|"),h=null;try{h=d(c[1])}catch(e){return void i(e)}n.enqueueDefineAnonymousModule([],function(){return h}),r()}else o=e.Utilities.fileUriToFilePath(this._env.isWindows,o),this._fs.readFile(o,{encoding:"utf8"},function(e,d){if(e)i(e);else{var c=s._path.normalize(o),h=c;if(s._env.isElectronRenderer){var f=h.match(/^([a-z])\:(.*)/i);h=f?"file:///"+(f[1].toUpperCase()+":"+f[2]).replace(/\\/g,"/"):"file://"+h}var p,_="(function (require, define, __filename, __dirname) { ";if(p=d.charCodeAt(0)===t._BOM?_+d.substring(1)+"\n});":_+d+"\n});",p=u(p,c),a.nodeCachedData){
var g=s._getCachedDataPath(a.nodeCachedData.seed,a.nodeCachedData.path,o);s._fs.readFile(g,function(e,t){var a={filename:h,produceCachedData:!s._hasCreateCachedData&&void 0===t,cachedData:t},d=s._loadAndEvalScript(n,o,h,p,a,l,r,i);s._processCachedData(n,d,p,g,!a.cachedData)})}else s._loadAndEvalScript(n,o,h,p,{filename:h},l,r,i)}})},t.prototype._loadAndEvalScript=function(t,n,o,r,i,s,a,d){s.record(31,n);var u=new this._vm.Script(r,i),l=u.runInThisContext(i),c=t.getGlobalAMDDefineFunc(),h=!1,f=function(){return h=!0,c.apply(null,arguments)};return f.amd=c.amd,l.call(e.global,t.getGlobalAMDRequireFunc(),f,o,this._path.dirname(n)),s.record(32,n),h?a():d(new Error("Didn't receive define call in "+n+"!")),u},t.prototype._getCachedDataPath=function(e,t,n){var o=this._crypto.createHash("md5").update(n,"utf8").update(e,"utf8").digest("hex"),r=this._path.basename(n).replace(/\.js$/,"");return this._path.join(t,r+"-"+o+".code")},t.prototype._processCachedData=function(e,n,o,r,i){var s=this
;n.cachedDataRejected?(e.getConfig().getOptionsLiteral().nodeCachedData.onData({errorCode:"cachedDataRejected",path:r}),t._runSoon(function(){return s._fs.unlink(r,function(t){t&&e.getConfig().getOptionsLiteral().nodeCachedData.onData({errorCode:"unlink",path:r,detail:t})})},e.getConfig().getOptionsLiteral().nodeCachedData.writeDelay/2)):n.cachedDataProduced?(e.getConfig().getOptionsLiteral().nodeCachedData.onData(void 0,{path:r}),t._runSoon(function(){return s._fs.writeFile(r,n.cachedData,function(t){t&&e.getConfig().getOptionsLiteral().nodeCachedData.onData({errorCode:"writeFile",path:r,detail:t})})},e.getConfig().getOptionsLiteral().nodeCachedData.writeDelay)):this._hasCreateCachedData&&i&&(e.getConfig().getOptionsLiteral().nodeCachedData.onData(void 0,{path:r}),t._runSoon(function(){var t=n.createCachedData(o);s._fs.writeFile(r,t,function(t){t&&e.getConfig().getOptionsLiteral().nodeCachedData.onData({errorCode:"writeFile",path:r,detail:t})})},e.getConfig().getOptionsLiteral().nodeCachedData.writeDelay))},
t._runSoon=function(e,t){var n=t+Math.ceil(Math.random()*t);setTimeout(e,n)},t}();r._BOM=65279,e.createScriptLoader=function(e){return new t(e)}}(AMDLoader||(AMDLoader={}));!function(e){var t=function(){function t(e){var t=e.lastIndexOf("/");this.fromModulePath=-1!==t?e.substr(0,t+1):""}return t._normalizeModuleId=function(e){var t,n=e;for(t=/\/\.\//;t.test(n);)n=n.replace(t,"/");for(n=n.replace(/^\.\//g,""),t=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;t.test(n);)n=n.replace(t,"/");return n=n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,"")},t.prototype.resolveModule=function(n){var o=n;return e.Utilities.isAbsolutePath(o)||(e.Utilities.startsWith(o,"./")||e.Utilities.startsWith(o,"../"))&&(o=t._normalizeModuleId(this.fromModulePath+o)),o},t}();t.ROOT=new t(""),e.ModuleIdResolver=t;var n=function(){function t(e,t,n,o,r,i){this.id=e,this.strId=t,this.dependencies=n,this._callback=o,this._errorback=r,this.moduleIdResolver=i,this.exports={},
this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}return t._safeInvokeFunction=function(t,n){try{return{returnedValue:t.apply(e.global,n),producedError:null}}catch(e){return{returnedValue:null,producedError:e}}},t._invokeFactory=function(t,n,o,r){return t.isBuild()&&!e.Utilities.isAnonymousModule(n)?{returnedValue:null,producedError:null}:t.shouldCatchError()?this._safeInvokeFunction(o,r):{returnedValue:o.apply(e.global,r),producedError:null}},t.prototype.complete=function(n,o,r){this._isComplete=!0;var i=null;if(this._callback)if("function"==typeof this._callback){n.record(21,this.strId);var s=t._invokeFactory(o,this.strId,this._callback,r);i=s.producedError,n.record(22,this.strId),i||void 0===s.returnedValue||this.exportsPassedIn&&!e.Utilities.isEmpty(this.exports)||(this.exports=s.returnedValue)}else this.exports=this._callback;i&&o.onError({errorCode:"factory",moduleId:this.strId,detail:i}),this.dependencies=null,this._callback=null,this._errorback=null,
this.moduleIdResolver=null},t.prototype.onDependencyError=function(e){return!!this._errorback&&(this._errorback(e),!0)},t.prototype.isComplete=function(){return this._isComplete},t}();e.Module=n;var o=function(){function e(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}return e.prototype.getMaxModuleId=function(){return this._nextId},e.prototype.getModuleId=function(e){var t=this._strModuleIdToIntModuleId.get(e);return void 0===t&&(t=this._nextId++,this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t},e.prototype.getStrModuleId=function(e){return this._intModuleIdToStrModuleId[e]},e}(),r=function(){return function(e){this.id=e}}();r.EXPORTS=new r(0),r.MODULE=new r(1),r.REQUIRE=new r(2),e.RegularDependency=r;var i=function(){return function(e,t,n){this.id=e,this.pluginId=t,this.pluginParam=n}}();e.PluginDependency=i;var s=function(){function s(t,n,r,i,s){
void 0===s&&(s=0),this._env=t,this._scriptLoader=n,this._loaderAvailableTimestamp=s,this._defineFunc=r,this._requireFunc=i,this._moduleIdProvider=new o,this._config=new e.Configuration(this._env),this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[]}return s.prototype.reset=function(){return new s(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)},s.prototype.getGlobalAMDDefineFunc=function(){return this._defineFunc},s.prototype.getGlobalAMDRequireFunc=function(){return this._requireFunc},s._findRelevantLocationInStack=function(e,t){for(var n=function(e){return e.replace(/\\/g,"/")},o=n(e),r=t.split(/\n/),i=0;i<r.length;i++){var s=r[i].match(/(.*):(\d+):(\d+)\)?$/);if(s){var a=s[1],d=s[2],u=s[3],l=Math.max(a.lastIndexOf(" ")+1,a.lastIndexOf("(")+1);if(a=a.substr(l),
(a=n(a))===o){var c={line:parseInt(d,10),col:parseInt(u,10)};return 1===c.line&&(c.col-="(function (require, define, __filename, __dirname) { ".length),c}}}throw new Error("Could not correlate define call site for needle "+e)},s.prototype.getBuildInfo=function(){if(!this._config.isBuild())return null;for(var e=[],t=0,n=0,o=this._modules2.length;n<o;n++){var r=this._modules2[n];if(r){var i=this._buildInfoPath[r.id]||null,a=this._buildInfoDefineStack[r.id]||null,d=this._buildInfoDependencies[r.id];e[t++]={id:r.strId,path:i,defineLocation:i&&a?s._findRelevantLocationInStack(i,a):null,dependencies:d,shim:null,exports:r.exports}}}return e},s.prototype.getRecorder=function(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new e.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=e.NullLoaderEventRecorder.INSTANCE),this._recorder},s.prototype.getLoaderEvents=function(){return this.getRecorder().getEvents()},s.prototype.enqueueDefineAnonymousModule=function(e,t){
if(null!==this._currentAnnonymousDefineCall)throw new Error("Can only have one anonymous define call per script file");var n=null;this._config.isBuild()&&(n=new Error("StackLocation").stack),this._currentAnnonymousDefineCall={stack:n,dependencies:e,callback:t}},s.prototype.defineModule=function(e,o,r,i,s,a){var d=this;void 0===a&&(a=new t(e));var u=this._moduleIdProvider.getModuleId(e);if(this._modules2[u])this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'");else{var l=new n(u,e,this._normalizeDependencies(o,a),r,i,a);this._modules2[u]=l,this._config.isBuild()&&(this._buildInfoDefineStack[u]=s,this._buildInfoDependencies[u]=l.dependencies.map(function(e){return d._moduleIdProvider.getStrModuleId(e.id)})),this._resolve(l)}},s.prototype._normalizeDependency=function(e,t){if("exports"===e)return r.EXPORTS;if("module"===e)return r.MODULE;if("require"===e)return r.REQUIRE;var n=e.indexOf("!");if(n>=0){
var o=t.resolveModule(e.substr(0,n)),s=t.resolveModule(e.substr(n+1)),a=this._moduleIdProvider.getModuleId(o+"!"+s),d=this._moduleIdProvider.getModuleId(o);return new i(a,d,s)}return new r(this._moduleIdProvider.getModuleId(t.resolveModule(e)))},s.prototype._normalizeDependencies=function(e,t){for(var n=[],o=0,r=0,i=e.length;r<i;r++)n[o++]=this._normalizeDependency(e[r],t);return n},s.prototype._relativeRequire=function(t,n,o,r){if("string"==typeof n)return this.synchronousRequire(n,t);this.defineModule(e.Utilities.generateAnonymousModule(),n,o,r,null,t)},s.prototype.synchronousRequire=function(e,n){void 0===n&&(n=new t(e));var o=this._normalizeDependency(e,n),r=this._modules2[o.id];if(!r)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!r.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");return r.exports},
s.prototype.configure=function(t,n){var o=this._config.shouldRecordStats();this._config=n?new e.Configuration(this._env,t):this._config.cloneAndMerge(t),this._config.shouldRecordStats()&&!o&&(this._recorder=null)},s.prototype.getConfig=function(){return this._config},s.prototype._onLoad=function(e){if(null!==this._currentAnnonymousDefineCall){var t=this._currentAnnonymousDefineCall;this._currentAnnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}},s.prototype._createLoadError=function(e,t){var n=this;return{errorCode:"load",moduleId:this._moduleIdProvider.getStrModuleId(e),neededBy:(this._inverseDependencies2[e]||[]).map(function(e){return n._moduleIdProvider.getStrModuleId(e)}),detail:t}},s.prototype._onLoadError=function(e,t){for(var n=this._createLoadError(e,t),o=[],r=0,i=this._moduleIdProvider.getMaxModuleId();r<i;r++)o[r]=!1;var s=!1,a=[];for(a.push(e),o[e]=!0;a.length>0;){var d=a.shift(),u=this._modules2[d]
;u&&(s=u.onDependencyError(n)||s);var l=this._inverseDependencies2[d];if(l)for(var r=0,i=l.length;r<i;r++){var c=l[r];o[c]||(a.push(c),o[c]=!0)}}s||this._config.onError(n)},s.prototype._hasDependencyPath=function(e,t){var n=this._modules2[e];if(!n)return!1;for(var o=[],r=0,i=this._moduleIdProvider.getMaxModuleId();r<i;r++)o[r]=!1;var s=[];for(s.push(n),o[e]=!0;s.length>0;){var a=s.shift().dependencies;if(a)for(var r=0,i=a.length;r<i;r++){var d=a[r];if(d.id===t)return!0;var u=this._modules2[d.id];u&&!o[d.id]&&(o[d.id]=!0,s.push(u))}}return!1},s.prototype._findCyclePath=function(e,t,n){if(e===t||50===n)return[e];var o=this._modules2[e];if(!o)return null;for(var r=o.dependencies,i=0,s=r.length;i<s;i++){var a=this._findCyclePath(r[i].id,t,n+1);if(null!==a)return a.push(e),a}return null},s.prototype._createRequire=function(t){var n=this,o=function(e,o,r){return n._relativeRequire(t,e,o,r)};return o.toUrl=function(e){return n._config.requireToUrl(t.resolveModule(e))},o.getStats=function(){return n.getLoaderEvents()
},o.__$__nodeRequire=e.global.nodeRequire,o},s.prototype._loadModule=function(e){var t=this;if(!this._modules2[e]&&!this._knownModules2[e]){this._knownModules2[e]=!0;var n=this._moduleIdProvider.getStrModuleId(e),o=this._config.moduleIdToPaths(n);this._env.isNode&&(-1===n.indexOf("/")||/^@[^\/]+\/[^\/]+$/.test(n))&&o.push("node|"+n);var r=-1,i=function(n){if(++r>=o.length)t._onLoadError(e,n);else{var s=o[r],a=t.getRecorder();if(t._config.isBuild()&&"empty:"===s)return t._buildInfoPath[e]=s,t.defineModule(t._moduleIdProvider.getStrModuleId(e),[],null,null,null),void t._onLoad(e);a.record(10,s),t._scriptLoader.load(t,s,function(){t._config.isBuild()&&(t._buildInfoPath[e]=s),a.record(11,s),t._onLoad(e)},function(e){a.record(12,s),i(e)})}};i(null)}},s.prototype._loadPluginDependency=function(e,n){var o=this;if(!this._modules2[n.id]&&!this._knownModules2[n.id]){this._knownModules2[n.id]=!0;var r=function(e){o.defineModule(o._moduleIdProvider.getStrModuleId(n.id),[],e,null,null)};r.error=function(e){
o._config.onError(o._createLoadError(n.id,e))},e.load(n.pluginParam,this._createRequire(t.ROOT),r,this._config.getOptionsLiteral())}},s.prototype._resolve=function(e){for(var t=this,n=e.dependencies,o=0,s=n.length;o<s;o++){var a=n[o];if(a!==r.EXPORTS)if(a!==r.MODULE)if(a!==r.REQUIRE){var d=this._modules2[a.id];if(d&&d.isComplete())e.unresolvedDependenciesCount--;else if(this._hasDependencyPath(a.id,e.id)){console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(a.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");var u=this._findCyclePath(a.id,e.id,0);u.reverse(),u.push(a.id),console.warn(u.map(function(e){return t._moduleIdProvider.getStrModuleId(e)}).join(" => \n")),e.unresolvedDependenciesCount--}else if(this._inverseDependencies2[a.id]=this._inverseDependencies2[a.id]||[],this._inverseDependencies2[a.id].push(e.id),a instanceof i){var l=this._modules2[a.pluginId];if(l&&l.isComplete()){this._loadPluginDependency(l.exports,a);continue}
var c=this._inversePluginDependencies2.get(a.pluginId);c||(c=[],this._inversePluginDependencies2.set(a.pluginId,c)),c.push(a),this._loadModule(a.pluginId)}else this._loadModule(a.id)}else e.unresolvedDependenciesCount--;else e.unresolvedDependenciesCount--;else e.exportsPassedIn=!0,e.unresolvedDependenciesCount--}0===e.unresolvedDependenciesCount&&this._onModuleComplete(e)},s.prototype._onModuleComplete=function(e){var t=this,n=this.getRecorder();if(!e.isComplete()){for(var o=e.dependencies,i=[],s=0,a=o.length;s<a;s++){var d=o[s];if(d!==r.EXPORTS)if(d!==r.MODULE)if(d!==r.REQUIRE){var u=this._modules2[d.id];i[s]=u?u.exports:null}else i[s]=this._createRequire(e.moduleIdResolver);else i[s]={id:e.strId,config:function(){return t._config.getConfigForModule(e.strId)}};else i[s]=e.exports}e.complete(n,this._config,i);var l=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,l)for(var s=0,a=l.length;s<a;s++){var c=l[s],h=this._modules2[c];h.unresolvedDependenciesCount--,
0===h.unresolvedDependenciesCount&&this._onModuleComplete(h)}var f=this._inversePluginDependencies2.get(e.id);if(f){this._inversePluginDependencies2.delete(e.id);for(var s=0,a=f.length;s<a;s++)this._loadPluginDependency(e.exports,f[s])}}},s}();e.ModuleManager=s}(AMDLoader||(AMDLoader={}));var define,AMDLoader;!function(e){function t(){if(void 0!==e.global.require||"undefined"!=typeof require){var t=e.global.require||require;if("function"==typeof t&&"function"==typeof t.resolve){var i=function(e){o.getRecorder().record(33,e);try{return t(e)}finally{o.getRecorder().record(34,e)}};e.global.nodeRequire=i,s.nodeRequire=i,s.__$__nodeRequire=i}}n.isNode&&!n.isElectronRenderer?(module.exports=s,require=s):(n.isElectronRenderer||(e.global.define=r),e.global.require=s)}var n=new e.Environment,o=null,r=function(e,t,n){"string"!=typeof e&&(n=t,t=e,e=null),"object"==typeof t&&Array.isArray(t)||(n=t,t=null),t||(t=["require","exports","module"]),e?o.defineModule(e,t,n,null,null):o.enqueueDefineAnonymousModule(t,n)};r.amd={
jQuery:!0};var i=function(e,t){void 0===t&&(t=!1),o.configure(e,t)},s=function(){if(1===arguments.length){if(arguments[0]instanceof Object&&!Array.isArray(arguments[0]))return void i(arguments[0]);if("string"==typeof arguments[0])return o.synchronousRequire(arguments[0])}if(2!==arguments.length&&3!==arguments.length||!Array.isArray(arguments[0]))throw new Error("Unrecognized require call");o.defineModule(e.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null)};s.config=i,s.getConfig=function(){return o.getConfig().getOptionsLiteral()},s.reset=function(){o=o.reset()},s.getBuildInfo=function(){return o.getBuildInfo()},s.getStats=function(){return o.getLoaderEvents()},s.define=function(){return r.apply(null,arguments)},e.init=t,"function"==typeof e.global.define&&e.global.define.amd||(o=new e.ModuleManager(n,e.createScriptLoader(n),r,s,e.Utilities.getHighPerformanceTimestamp()),void 0!==e.global.require&&"function"!=typeof e.global.require&&s.config(e.global.require),
(define=function(){return r.apply(null,arguments)}).amd=r.amd,"undefined"==typeof doNotInitLoader&&t())}(AMDLoader||(AMDLoader={}));
//# sourceMappingURL=/amisnull.map