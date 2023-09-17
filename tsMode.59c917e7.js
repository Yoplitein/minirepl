// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3wZwb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2c0a87e959c917e7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hgh9d":[function(require,module,exports) {
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Adapter", ()=>Adapter);
parcelHelpers.export(exports, "CodeActionAdaptor", ()=>CodeActionAdaptor);
parcelHelpers.export(exports, "DefinitionAdapter", ()=>DefinitionAdapter);
parcelHelpers.export(exports, "DiagnosticsAdapter", ()=>DiagnosticsAdapter);
parcelHelpers.export(exports, "DocumentHighlightAdapter", ()=>DocumentHighlightAdapter);
parcelHelpers.export(exports, "FormatAdapter", ()=>FormatAdapter);
parcelHelpers.export(exports, "FormatHelper", ()=>FormatHelper);
parcelHelpers.export(exports, "FormatOnTypeAdapter", ()=>FormatOnTypeAdapter);
parcelHelpers.export(exports, "InlayHintsAdapter", ()=>InlayHintsAdapter);
parcelHelpers.export(exports, "Kind", ()=>Kind);
parcelHelpers.export(exports, "LibFiles", ()=>LibFiles);
parcelHelpers.export(exports, "OutlineAdapter", ()=>OutlineAdapter);
parcelHelpers.export(exports, "QuickInfoAdapter", ()=>QuickInfoAdapter);
parcelHelpers.export(exports, "ReferenceAdapter", ()=>ReferenceAdapter);
parcelHelpers.export(exports, "RenameAdapter", ()=>RenameAdapter);
parcelHelpers.export(exports, "SignatureHelpAdapter", ()=>SignatureHelpAdapter);
parcelHelpers.export(exports, "SuggestAdapter", ()=>SuggestAdapter);
parcelHelpers.export(exports, "WorkerManager", ()=>WorkerManager);
parcelHelpers.export(exports, "flattenDiagnosticMessageText", ()=>flattenDiagnosticMessageText);
parcelHelpers.export(exports, "getJavaScriptWorker", ()=>getJavaScriptWorker);
parcelHelpers.export(exports, "getTypeScriptWorker", ()=>getTypeScriptWorker);
parcelHelpers.export(exports, "setupJavaScript", ()=>setupJavaScript);
parcelHelpers.export(exports, "setupTypeScript", ()=>setupTypeScript);
var _editorApiJs = require("../../editor/editor.api.js");
// src/language/typescript/languageFeatures.ts
var _monacoContributionJs = require("./monaco.contribution.js");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __reExport = (target, mod, secondTarget)=>(__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editorApiJs);
// src/language/typescript/workerManager.ts
var WorkerManager = class {
    constructor(_modeId, _defaults){
        this._modeId = _modeId;
        this._defaults = _defaults;
        this._worker = null;
        this._client = null;
        this._configChangeListener = this._defaults.onDidChange(()=>this._stopWorker());
        this._updateExtraLibsToken = 0;
        this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs());
    }
    _configChangeListener;
    _updateExtraLibsToken;
    _extraLibsChangeListener;
    _worker;
    _client;
    dispose() {
        this._configChangeListener.dispose();
        this._extraLibsChangeListener.dispose();
        this._stopWorker();
    }
    _stopWorker() {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    }
    async _updateExtraLibs() {
        if (!this._worker) return;
        const myToken = ++this._updateExtraLibsToken;
        const proxy = await this._worker.getProxy();
        if (this._updateExtraLibsToken !== myToken) return;
        proxy.updateExtraLibs(this._defaults.getExtraLibs());
    }
    _getClient() {
        if (!this._client) this._client = (async ()=>{
            this._worker = monaco_editor_core_exports.editor.createWebWorker({
                moduleId: "vs/language/typescript/tsWorker",
                label: this._modeId,
                keepIdleModels: true,
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs(),
                    customWorkerPath: this._defaults.workerOptions.customWorkerPath,
                    inlayHintsOptions: this._defaults.inlayHintsOptions
                }
            });
            if (this._defaults.getEagerModelSync()) return await this._worker.withSyncedResources(monaco_editor_core_exports.editor.getModels().filter((model)=>model.getLanguageId() === this._modeId).map((model)=>model.uri));
            return await this._worker.getProxy();
        })();
        return this._client;
    }
    async getLanguageServiceWorker(...resources) {
        const client = await this._getClient();
        if (this._worker) await this._worker.withSyncedResources(resources);
        return client;
    }
};
// src/language/typescript/lib/lib.index.ts
var libFileSet = {};
libFileSet["lib.d.ts"] = true;
libFileSet["lib.decorators.d.ts"] = true;
libFileSet["lib.decorators.legacy.d.ts"] = true;
libFileSet["lib.dom.d.ts"] = true;
libFileSet["lib.dom.iterable.d.ts"] = true;
libFileSet["lib.es2015.collection.d.ts"] = true;
libFileSet["lib.es2015.core.d.ts"] = true;
libFileSet["lib.es2015.d.ts"] = true;
libFileSet["lib.es2015.generator.d.ts"] = true;
libFileSet["lib.es2015.iterable.d.ts"] = true;
libFileSet["lib.es2015.promise.d.ts"] = true;
libFileSet["lib.es2015.proxy.d.ts"] = true;
libFileSet["lib.es2015.reflect.d.ts"] = true;
libFileSet["lib.es2015.symbol.d.ts"] = true;
libFileSet["lib.es2015.symbol.wellknown.d.ts"] = true;
libFileSet["lib.es2016.array.include.d.ts"] = true;
libFileSet["lib.es2016.d.ts"] = true;
libFileSet["lib.es2016.full.d.ts"] = true;
libFileSet["lib.es2017.d.ts"] = true;
libFileSet["lib.es2017.full.d.ts"] = true;
libFileSet["lib.es2017.intl.d.ts"] = true;
libFileSet["lib.es2017.object.d.ts"] = true;
libFileSet["lib.es2017.sharedmemory.d.ts"] = true;
libFileSet["lib.es2017.string.d.ts"] = true;
libFileSet["lib.es2017.typedarrays.d.ts"] = true;
libFileSet["lib.es2018.asyncgenerator.d.ts"] = true;
libFileSet["lib.es2018.asynciterable.d.ts"] = true;
libFileSet["lib.es2018.d.ts"] = true;
libFileSet["lib.es2018.full.d.ts"] = true;
libFileSet["lib.es2018.intl.d.ts"] = true;
libFileSet["lib.es2018.promise.d.ts"] = true;
libFileSet["lib.es2018.regexp.d.ts"] = true;
libFileSet["lib.es2019.array.d.ts"] = true;
libFileSet["lib.es2019.d.ts"] = true;
libFileSet["lib.es2019.full.d.ts"] = true;
libFileSet["lib.es2019.intl.d.ts"] = true;
libFileSet["lib.es2019.object.d.ts"] = true;
libFileSet["lib.es2019.string.d.ts"] = true;
libFileSet["lib.es2019.symbol.d.ts"] = true;
libFileSet["lib.es2020.bigint.d.ts"] = true;
libFileSet["lib.es2020.d.ts"] = true;
libFileSet["lib.es2020.date.d.ts"] = true;
libFileSet["lib.es2020.full.d.ts"] = true;
libFileSet["lib.es2020.intl.d.ts"] = true;
libFileSet["lib.es2020.number.d.ts"] = true;
libFileSet["lib.es2020.promise.d.ts"] = true;
libFileSet["lib.es2020.sharedmemory.d.ts"] = true;
libFileSet["lib.es2020.string.d.ts"] = true;
libFileSet["lib.es2020.symbol.wellknown.d.ts"] = true;
libFileSet["lib.es2021.d.ts"] = true;
libFileSet["lib.es2021.full.d.ts"] = true;
libFileSet["lib.es2021.intl.d.ts"] = true;
libFileSet["lib.es2021.promise.d.ts"] = true;
libFileSet["lib.es2021.string.d.ts"] = true;
libFileSet["lib.es2021.weakref.d.ts"] = true;
libFileSet["lib.es2022.array.d.ts"] = true;
libFileSet["lib.es2022.d.ts"] = true;
libFileSet["lib.es2022.error.d.ts"] = true;
libFileSet["lib.es2022.full.d.ts"] = true;
libFileSet["lib.es2022.intl.d.ts"] = true;
libFileSet["lib.es2022.object.d.ts"] = true;
libFileSet["lib.es2022.regexp.d.ts"] = true;
libFileSet["lib.es2022.sharedmemory.d.ts"] = true;
libFileSet["lib.es2022.string.d.ts"] = true;
libFileSet["lib.es2023.array.d.ts"] = true;
libFileSet["lib.es2023.d.ts"] = true;
libFileSet["lib.es2023.full.d.ts"] = true;
libFileSet["lib.es5.d.ts"] = true;
libFileSet["lib.es6.d.ts"] = true;
libFileSet["lib.esnext.d.ts"] = true;
libFileSet["lib.esnext.full.d.ts"] = true;
libFileSet["lib.esnext.intl.d.ts"] = true;
libFileSet["lib.scripthost.d.ts"] = true;
libFileSet["lib.webworker.d.ts"] = true;
libFileSet["lib.webworker.importscripts.d.ts"] = true;
libFileSet["lib.webworker.iterable.d.ts"] = true;
// src/language/typescript/languageFeatures.ts
function flattenDiagnosticMessageText(diag, newLine, indent = 0) {
    if (typeof diag === "string") return diag;
    else if (diag === void 0) return "";
    let result = "";
    if (indent) {
        result += newLine;
        for(let i = 0; i < indent; i++)result += "  ";
    }
    result += diag.messageText;
    indent++;
    if (diag.next) for (const kid of diag.next)result += flattenDiagnosticMessageText(kid, newLine, indent);
    return result;
}
function displayPartsToString(displayParts) {
    if (displayParts) return displayParts.map((displayPart)=>displayPart.text).join("");
    return "";
}
var Adapter = class {
    constructor(_worker){
        this._worker = _worker;
    }
    _textSpanToRange(model, span) {
        let p1 = model.getPositionAt(span.start);
        let p2 = model.getPositionAt(span.start + span.length);
        let { lineNumber: startLineNumber, column: startColumn } = p1;
        let { lineNumber: endLineNumber, column: endColumn } = p2;
        return {
            startLineNumber,
            startColumn,
            endLineNumber,
            endColumn
        };
    }
};
var LibFiles = class {
    constructor(_worker){
        this._worker = _worker;
        this._libFiles = {};
        this._hasFetchedLibFiles = false;
        this._fetchLibFilesPromise = null;
    }
    _libFiles;
    _hasFetchedLibFiles;
    _fetchLibFilesPromise;
    isLibFile(uri) {
        if (!uri) return false;
        if (uri.path.indexOf("/lib.") === 0) return !!libFileSet[uri.path.slice(1)];
        return false;
    }
    getOrCreateModel(fileName) {
        const uri = monaco_editor_core_exports.Uri.parse(fileName);
        const model = monaco_editor_core_exports.editor.getModel(uri);
        if (model) return model;
        if (this.isLibFile(uri) && this._hasFetchedLibFiles) return monaco_editor_core_exports.editor.createModel(this._libFiles[uri.path.slice(1)], "typescript", uri);
        const matchedLibFile = (0, _monacoContributionJs.typescriptDefaults).getExtraLibs()[fileName];
        if (matchedLibFile) return monaco_editor_core_exports.editor.createModel(matchedLibFile.content, "typescript", uri);
        return null;
    }
    _containsLibFile(uris) {
        for (let uri of uris){
            if (this.isLibFile(uri)) return true;
        }
        return false;
    }
    async fetchLibFilesIfNecessary(uris) {
        if (!this._containsLibFile(uris)) return;
        await this._fetchLibFiles();
    }
    _fetchLibFiles() {
        if (!this._fetchLibFilesPromise) this._fetchLibFilesPromise = this._worker().then((w)=>w.getLibFiles()).then((libFiles)=>{
            this._hasFetchedLibFiles = true;
            this._libFiles = libFiles;
        });
        return this._fetchLibFilesPromise;
    }
};
var DiagnosticsAdapter = class extends Adapter {
    constructor(_libFiles, _defaults, _selector, worker){
        super(worker);
        this._libFiles = _libFiles;
        this._defaults = _defaults;
        this._selector = _selector;
        const onModelAdd = (model)=>{
            if (model.getLanguageId() !== _selector) return;
            const maybeValidate = ()=>{
                const { onlyVisible } = this._defaults.getDiagnosticsOptions();
                if (onlyVisible) {
                    if (model.isAttachedToEditor()) this._doValidate(model);
                } else this._doValidate(model);
            };
            let handle;
            const changeSubscription = model.onDidChangeContent(()=>{
                clearTimeout(handle);
                handle = window.setTimeout(maybeValidate, 500);
            });
            const visibleSubscription = model.onDidChangeAttached(()=>{
                const { onlyVisible } = this._defaults.getDiagnosticsOptions();
                if (onlyVisible) {
                    if (model.isAttachedToEditor()) maybeValidate();
                    else monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, []);
                }
            });
            this._listener[model.uri.toString()] = {
                dispose () {
                    changeSubscription.dispose();
                    visibleSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            maybeValidate();
        };
        const onModelRemoved = (model)=>{
            monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, []);
            const key = model.uri.toString();
            if (this._listener[key]) {
                this._listener[key].dispose();
                delete this._listener[key];
            }
        };
        this._disposables.push(monaco_editor_core_exports.editor.onDidCreateModel((model)=>onModelAdd(model)));
        this._disposables.push(monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved));
        this._disposables.push(monaco_editor_core_exports.editor.onDidChangeModelLanguage((event)=>{
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        this._disposables.push({
            dispose () {
                for (const model of monaco_editor_core_exports.editor.getModels())onModelRemoved(model);
            }
        });
        const recomputeDiagostics = ()=>{
            for (const model of monaco_editor_core_exports.editor.getModels()){
                onModelRemoved(model);
                onModelAdd(model);
            }
        };
        this._disposables.push(this._defaults.onDidChange(recomputeDiagostics));
        this._disposables.push(this._defaults.onDidExtraLibsChange(recomputeDiagostics));
        monaco_editor_core_exports.editor.getModels().forEach((model)=>onModelAdd(model));
    }
    _disposables = [];
    _listener = /* @__PURE__ */ Object.create(null);
    dispose() {
        this._disposables.forEach((d)=>d && d.dispose());
        this._disposables = [];
    }
    async _doValidate(model) {
        const worker = await this._worker(model.uri);
        if (model.isDisposed()) return;
        const promises = [];
        const { noSyntaxValidation, noSemanticValidation, noSuggestionDiagnostics } = this._defaults.getDiagnosticsOptions();
        if (!noSyntaxValidation) promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
        if (!noSemanticValidation) promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
        if (!noSuggestionDiagnostics) promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
        const allDiagnostics = await Promise.all(promises);
        if (!allDiagnostics || model.isDisposed()) return;
        const diagnostics = allDiagnostics.reduce((p, c)=>c.concat(p), []).filter((d)=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) === -1);
        const relatedUris = diagnostics.map((d)=>d.relatedInformation || []).reduce((p, c)=>c.concat(p), []).map((relatedInformation)=>relatedInformation.file ? monaco_editor_core_exports.Uri.parse(relatedInformation.file.fileName) : null);
        await this._libFiles.fetchLibFilesIfNecessary(relatedUris);
        if (model.isDisposed()) return;
        monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, diagnostics.map((d)=>this._convertDiagnostics(model, d)));
    }
    _convertDiagnostics(model, diag) {
        const diagStart = diag.start || 0;
        const diagLength = diag.length || 1;
        const { lineNumber: startLineNumber, column: startColumn } = model.getPositionAt(diagStart);
        const { lineNumber: endLineNumber, column: endColumn } = model.getPositionAt(diagStart + diagLength);
        const tags = [];
        if (diag.reportsUnnecessary) tags.push(monaco_editor_core_exports.MarkerTag.Unnecessary);
        if (diag.reportsDeprecated) tags.push(monaco_editor_core_exports.MarkerTag.Deprecated);
        return {
            severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
            startLineNumber,
            startColumn,
            endLineNumber,
            endColumn,
            message: flattenDiagnosticMessageText(diag.messageText, "\n"),
            code: diag.code.toString(),
            tags,
            relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation)
        };
    }
    _convertRelatedInformation(model, relatedInformation) {
        if (!relatedInformation) return [];
        const result = [];
        relatedInformation.forEach((info)=>{
            let relatedResource = model;
            if (info.file) relatedResource = this._libFiles.getOrCreateModel(info.file.fileName);
            if (!relatedResource) return;
            const infoStart = info.start || 0;
            const infoLength = info.length || 1;
            const { lineNumber: startLineNumber, column: startColumn } = relatedResource.getPositionAt(infoStart);
            const { lineNumber: endLineNumber, column: endColumn } = relatedResource.getPositionAt(infoStart + infoLength);
            result.push({
                resource: relatedResource.uri,
                startLineNumber,
                startColumn,
                endLineNumber,
                endColumn,
                message: flattenDiagnosticMessageText(info.messageText, "\n")
            });
        });
        return result;
    }
    _tsDiagnosticCategoryToMarkerSeverity(category) {
        switch(category){
            case 1 /* Error */ :
                return monaco_editor_core_exports.MarkerSeverity.Error;
            case 3 /* Message */ :
                return monaco_editor_core_exports.MarkerSeverity.Info;
            case 0 /* Warning */ :
                return monaco_editor_core_exports.MarkerSeverity.Warning;
            case 2 /* Suggestion */ :
                return monaco_editor_core_exports.MarkerSeverity.Hint;
        }
        return monaco_editor_core_exports.MarkerSeverity.Info;
    }
};
var SuggestAdapter = class extends Adapter {
    get triggerCharacters() {
        return [
            "."
        ];
    }
    async provideCompletionItems(model, position, _context, token) {
        const wordInfo = model.getWordUntilPosition(position);
        const wordRange = new monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const info = await worker.getCompletionsAtPosition(resource.toString(), offset);
        if (!info || model.isDisposed()) return;
        const suggestions = info.entries.map((entry)=>{
            let range = wordRange;
            if (entry.replacementSpan) {
                const p1 = model.getPositionAt(entry.replacementSpan.start);
                const p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                range = new monaco_editor_core_exports.Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
            }
            const tags = [];
            if (entry.kindModifiers !== void 0 && entry.kindModifiers.indexOf("deprecated") !== -1) tags.push(monaco_editor_core_exports.languages.CompletionItemTag.Deprecated);
            return {
                uri: resource,
                position,
                offset,
                range,
                label: entry.name,
                insertText: entry.name,
                sortText: entry.sortText,
                kind: SuggestAdapter.convertKind(entry.kind),
                tags
            };
        });
        return {
            suggestions
        };
    }
    async resolveCompletionItem(item, token) {
        const myItem = item;
        const resource = myItem.uri;
        const position = myItem.position;
        const offset = myItem.offset;
        const worker = await this._worker(resource);
        const details = await worker.getCompletionEntryDetails(resource.toString(), offset, myItem.label);
        if (!details) return myItem;
        return {
            uri: resource,
            position,
            label: details.name,
            kind: SuggestAdapter.convertKind(details.kind),
            detail: displayPartsToString(details.displayParts),
            documentation: {
                value: SuggestAdapter.createDocumentationString(details)
            }
        };
    }
    static convertKind(kind) {
        switch(kind){
            case Kind.primitiveType:
            case Kind.keyword:
                return monaco_editor_core_exports.languages.CompletionItemKind.Keyword;
            case Kind.variable:
            case Kind.localVariable:
                return monaco_editor_core_exports.languages.CompletionItemKind.Variable;
            case Kind.memberVariable:
            case Kind.memberGetAccessor:
            case Kind.memberSetAccessor:
                return monaco_editor_core_exports.languages.CompletionItemKind.Field;
            case Kind.function:
            case Kind.memberFunction:
            case Kind.constructSignature:
            case Kind.callSignature:
            case Kind.indexSignature:
                return monaco_editor_core_exports.languages.CompletionItemKind.Function;
            case Kind.enum:
                return monaco_editor_core_exports.languages.CompletionItemKind.Enum;
            case Kind.module:
                return monaco_editor_core_exports.languages.CompletionItemKind.Module;
            case Kind.class:
                return monaco_editor_core_exports.languages.CompletionItemKind.Class;
            case Kind.interface:
                return monaco_editor_core_exports.languages.CompletionItemKind.Interface;
            case Kind.warning:
                return monaco_editor_core_exports.languages.CompletionItemKind.File;
        }
        return monaco_editor_core_exports.languages.CompletionItemKind.Property;
    }
    static createDocumentationString(details) {
        let documentationString = displayPartsToString(details.documentation);
        if (details.tags) for (const tag of details.tags)documentationString += `

${tagToString(tag)}`;
        return documentationString;
    }
};
function tagToString(tag) {
    let tagLabel = `*@${tag.name}*`;
    if (tag.name === "param" && tag.text) {
        const [paramName, ...rest] = tag.text;
        tagLabel += `\`${paramName.text}\``;
        if (rest.length > 0) tagLabel += ` \u2014 ${rest.map((r)=>r.text).join(" ")}`;
    } else if (Array.isArray(tag.text)) tagLabel += ` \u2014 ${tag.text.map((r)=>r.text).join(" ")}`;
    else if (tag.text) tagLabel += ` \u2014 ${tag.text}`;
    return tagLabel;
}
var SignatureHelpAdapter = class extends Adapter {
    signatureHelpTriggerCharacters = [
        "(",
        ","
    ];
    static _toSignatureHelpTriggerReason(context) {
        switch(context.triggerKind){
            case monaco_editor_core_exports.languages.SignatureHelpTriggerKind.TriggerCharacter:
                if (context.triggerCharacter) {
                    if (context.isRetrigger) return {
                        kind: "retrigger",
                        triggerCharacter: context.triggerCharacter
                    };
                    else return {
                        kind: "characterTyped",
                        triggerCharacter: context.triggerCharacter
                    };
                } else return {
                    kind: "invoked"
                };
            case monaco_editor_core_exports.languages.SignatureHelpTriggerKind.ContentChange:
                return context.isRetrigger ? {
                    kind: "retrigger"
                } : {
                    kind: "invoked"
                };
            case monaco_editor_core_exports.languages.SignatureHelpTriggerKind.Invoke:
            default:
                return {
                    kind: "invoked"
                };
        }
    }
    async provideSignatureHelp(model, position, token, context) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const info = await worker.getSignatureHelpItems(resource.toString(), offset, {
            triggerReason: SignatureHelpAdapter._toSignatureHelpTriggerReason(context)
        });
        if (!info || model.isDisposed()) return;
        const ret = {
            activeSignature: info.selectedItemIndex,
            activeParameter: info.argumentIndex,
            signatures: []
        };
        info.items.forEach((item)=>{
            const signature = {
                label: "",
                parameters: []
            };
            signature.documentation = {
                value: displayPartsToString(item.documentation)
            };
            signature.label += displayPartsToString(item.prefixDisplayParts);
            item.parameters.forEach((p, i, a)=>{
                const label = displayPartsToString(p.displayParts);
                const parameter = {
                    label,
                    documentation: {
                        value: displayPartsToString(p.documentation)
                    }
                };
                signature.label += label;
                signature.parameters.push(parameter);
                if (i < a.length - 1) signature.label += displayPartsToString(item.separatorDisplayParts);
            });
            signature.label += displayPartsToString(item.suffixDisplayParts);
            ret.signatures.push(signature);
        });
        return {
            value: ret,
            dispose () {}
        };
    }
};
var QuickInfoAdapter = class extends Adapter {
    async provideHover(model, position, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const info = await worker.getQuickInfoAtPosition(resource.toString(), offset);
        if (!info || model.isDisposed()) return;
        const documentation = displayPartsToString(info.documentation);
        const tags = info.tags ? info.tags.map((tag)=>tagToString(tag)).join("  \n\n") : "";
        const contents = displayPartsToString(info.displayParts);
        return {
            range: this._textSpanToRange(model, info.textSpan),
            contents: [
                {
                    value: "```typescript\n" + contents + "\n```\n"
                },
                {
                    value: documentation + (tags ? "\n\n" + tags : "")
                }
            ]
        };
    }
};
var DocumentHighlightAdapter = class extends Adapter {
    async provideDocumentHighlights(model, position, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const entries = await worker.getDocumentHighlights(resource.toString(), offset, [
            resource.toString()
        ]);
        if (!entries || model.isDisposed()) return;
        return entries.flatMap((entry)=>{
            return entry.highlightSpans.map((highlightSpans)=>{
                return {
                    range: this._textSpanToRange(model, highlightSpans.textSpan),
                    kind: highlightSpans.kind === "writtenReference" ? monaco_editor_core_exports.languages.DocumentHighlightKind.Write : monaco_editor_core_exports.languages.DocumentHighlightKind.Text
                };
            });
        });
    }
};
var DefinitionAdapter = class extends Adapter {
    constructor(_libFiles, worker){
        super(worker);
        this._libFiles = _libFiles;
    }
    async provideDefinition(model, position, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const entries = await worker.getDefinitionAtPosition(resource.toString(), offset);
        if (!entries || model.isDisposed()) return;
        await this._libFiles.fetchLibFilesIfNecessary(entries.map((entry)=>monaco_editor_core_exports.Uri.parse(entry.fileName)));
        if (model.isDisposed()) return;
        const result = [];
        for (let entry of entries){
            const refModel = this._libFiles.getOrCreateModel(entry.fileName);
            if (refModel) result.push({
                uri: refModel.uri,
                range: this._textSpanToRange(refModel, entry.textSpan)
            });
        }
        return result;
    }
};
var ReferenceAdapter = class extends Adapter {
    constructor(_libFiles, worker){
        super(worker);
        this._libFiles = _libFiles;
    }
    async provideReferences(model, position, context, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const entries = await worker.getReferencesAtPosition(resource.toString(), offset);
        if (!entries || model.isDisposed()) return;
        await this._libFiles.fetchLibFilesIfNecessary(entries.map((entry)=>monaco_editor_core_exports.Uri.parse(entry.fileName)));
        if (model.isDisposed()) return;
        const result = [];
        for (let entry of entries){
            const refModel = this._libFiles.getOrCreateModel(entry.fileName);
            if (refModel) result.push({
                uri: refModel.uri,
                range: this._textSpanToRange(refModel, entry.textSpan)
            });
        }
        return result;
    }
};
var OutlineAdapter = class extends Adapter {
    async provideDocumentSymbols(model, token) {
        const resource = model.uri;
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const root = await worker.getNavigationTree(resource.toString());
        if (!root || model.isDisposed()) return;
        const convert = (item, containerLabel)=>{
            const result2 = {
                name: item.text,
                detail: "",
                kind: outlineTypeTable[item.kind] || monaco_editor_core_exports.languages.SymbolKind.Variable,
                range: this._textSpanToRange(model, item.spans[0]),
                selectionRange: this._textSpanToRange(model, item.spans[0]),
                tags: [],
                children: item.childItems?.map((child)=>convert(child, item.text)),
                containerName: containerLabel
            };
            return result2;
        };
        const result = root.childItems ? root.childItems.map((item)=>convert(item)) : [];
        return result;
    }
};
var Kind = class {
};
__publicField(Kind, "unknown", "");
__publicField(Kind, "keyword", "keyword");
__publicField(Kind, "script", "script");
__publicField(Kind, "module", "module");
__publicField(Kind, "class", "class");
__publicField(Kind, "interface", "interface");
__publicField(Kind, "type", "type");
__publicField(Kind, "enum", "enum");
__publicField(Kind, "variable", "var");
__publicField(Kind, "localVariable", "local var");
__publicField(Kind, "function", "function");
__publicField(Kind, "localFunction", "local function");
__publicField(Kind, "memberFunction", "method");
__publicField(Kind, "memberGetAccessor", "getter");
__publicField(Kind, "memberSetAccessor", "setter");
__publicField(Kind, "memberVariable", "property");
__publicField(Kind, "constructorImplementation", "constructor");
__publicField(Kind, "callSignature", "call");
__publicField(Kind, "indexSignature", "index");
__publicField(Kind, "constructSignature", "construct");
__publicField(Kind, "parameter", "parameter");
__publicField(Kind, "typeParameter", "type parameter");
__publicField(Kind, "primitiveType", "primitive type");
__publicField(Kind, "label", "label");
__publicField(Kind, "alias", "alias");
__publicField(Kind, "const", "const");
__publicField(Kind, "let", "let");
__publicField(Kind, "warning", "warning");
var outlineTypeTable = /* @__PURE__ */ Object.create(null);
outlineTypeTable[Kind.module] = monaco_editor_core_exports.languages.SymbolKind.Module;
outlineTypeTable[Kind.class] = monaco_editor_core_exports.languages.SymbolKind.Class;
outlineTypeTable[Kind.enum] = monaco_editor_core_exports.languages.SymbolKind.Enum;
outlineTypeTable[Kind.interface] = monaco_editor_core_exports.languages.SymbolKind.Interface;
outlineTypeTable[Kind.memberFunction] = monaco_editor_core_exports.languages.SymbolKind.Method;
outlineTypeTable[Kind.memberVariable] = monaco_editor_core_exports.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberGetAccessor] = monaco_editor_core_exports.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberSetAccessor] = monaco_editor_core_exports.languages.SymbolKind.Property;
outlineTypeTable[Kind.variable] = monaco_editor_core_exports.languages.SymbolKind.Variable;
outlineTypeTable[Kind.const] = monaco_editor_core_exports.languages.SymbolKind.Variable;
outlineTypeTable[Kind.localVariable] = monaco_editor_core_exports.languages.SymbolKind.Variable;
outlineTypeTable[Kind.variable] = monaco_editor_core_exports.languages.SymbolKind.Variable;
outlineTypeTable[Kind.function] = monaco_editor_core_exports.languages.SymbolKind.Function;
outlineTypeTable[Kind.localFunction] = monaco_editor_core_exports.languages.SymbolKind.Function;
var FormatHelper = class extends Adapter {
    static _convertOptions(options) {
        return {
            ConvertTabsToSpaces: options.insertSpaces,
            TabSize: options.tabSize,
            IndentSize: options.tabSize,
            IndentStyle: 2 /* Smart */ ,
            NewLineCharacter: "\n",
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
            PlaceOpenBraceOnNewLineForFunctions: false
        };
    }
    _convertTextChanges(model, change) {
        return {
            text: change.newText,
            range: this._textSpanToRange(model, change.span)
        };
    }
};
var FormatAdapter = class extends FormatHelper {
    canFormatMultipleRanges = false;
    async provideDocumentRangeFormattingEdits(model, range, options, token) {
        const resource = model.uri;
        const startOffset = model.getOffsetAt({
            lineNumber: range.startLineNumber,
            column: range.startColumn
        });
        const endOffset = model.getOffsetAt({
            lineNumber: range.endLineNumber,
            column: range.endColumn
        });
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const edits = await worker.getFormattingEditsForRange(resource.toString(), startOffset, endOffset, FormatHelper._convertOptions(options));
        if (!edits || model.isDisposed()) return;
        return edits.map((edit)=>this._convertTextChanges(model, edit));
    }
};
var FormatOnTypeAdapter = class extends FormatHelper {
    get autoFormatTriggerCharacters() {
        return [
            ";",
            "}",
            "\n"
        ];
    }
    async provideOnTypeFormattingEdits(model, position, ch, options, token) {
        const resource = model.uri;
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const edits = await worker.getFormattingEditsAfterKeystroke(resource.toString(), offset, ch, FormatHelper._convertOptions(options));
        if (!edits || model.isDisposed()) return;
        return edits.map((edit)=>this._convertTextChanges(model, edit));
    }
};
var CodeActionAdaptor = class extends FormatHelper {
    async provideCodeActions(model, range, context, token) {
        const resource = model.uri;
        const start = model.getOffsetAt({
            lineNumber: range.startLineNumber,
            column: range.startColumn
        });
        const end = model.getOffsetAt({
            lineNumber: range.endLineNumber,
            column: range.endColumn
        });
        const formatOptions = FormatHelper._convertOptions(model.getOptions());
        const errorCodes = context.markers.filter((m)=>m.code).map((m)=>m.code).map(Number);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const codeFixes = await worker.getCodeFixesAtPosition(resource.toString(), start, end, errorCodes, formatOptions);
        if (!codeFixes || model.isDisposed()) return {
            actions: [],
            dispose: ()=>{}
        };
        const actions = codeFixes.filter((fix)=>{
            return fix.changes.filter((change)=>change.isNewFile).length === 0;
        }).map((fix)=>{
            return this._tsCodeFixActionToMonacoCodeAction(model, context, fix);
        });
        return {
            actions,
            dispose: ()=>{}
        };
    }
    _tsCodeFixActionToMonacoCodeAction(model, context, codeFix) {
        const edits = [];
        for (const change of codeFix.changes)for (const textChange of change.textChanges)edits.push({
            resource: model.uri,
            versionId: void 0,
            textEdit: {
                range: this._textSpanToRange(model, textChange.span),
                text: textChange.newText
            }
        });
        const action = {
            title: codeFix.description,
            edit: {
                edits
            },
            diagnostics: context.markers,
            kind: "quickfix"
        };
        return action;
    }
};
var RenameAdapter = class extends Adapter {
    constructor(_libFiles, worker){
        super(worker);
        this._libFiles = _libFiles;
    }
    async provideRenameEdits(model, position, newName, token) {
        const resource = model.uri;
        const fileName = resource.toString();
        const offset = model.getOffsetAt(position);
        const worker = await this._worker(resource);
        if (model.isDisposed()) return;
        const renameInfo = await worker.getRenameInfo(fileName, offset, {
            allowRenameOfImportPath: false
        });
        if (renameInfo.canRename === false) return {
            edits: [],
            rejectReason: renameInfo.localizedErrorMessage
        };
        if (renameInfo.fileToRename !== void 0) throw new Error("Renaming files is not supported.");
        const renameLocations = await worker.findRenameLocations(fileName, offset, false, false, false);
        if (!renameLocations || model.isDisposed()) return;
        const edits = [];
        for (const renameLocation of renameLocations){
            const model2 = this._libFiles.getOrCreateModel(renameLocation.fileName);
            if (model2) edits.push({
                resource: model2.uri,
                versionId: void 0,
                textEdit: {
                    range: this._textSpanToRange(model2, renameLocation.textSpan),
                    text: newName
                }
            });
            else throw new Error(`Unknown file ${renameLocation.fileName}.`);
        }
        return {
            edits
        };
    }
};
var InlayHintsAdapter = class extends Adapter {
    async provideInlayHints(model, range, token) {
        const resource = model.uri;
        const fileName = resource.toString();
        const start = model.getOffsetAt({
            lineNumber: range.startLineNumber,
            column: range.startColumn
        });
        const end = model.getOffsetAt({
            lineNumber: range.endLineNumber,
            column: range.endColumn
        });
        const worker = await this._worker(resource);
        if (model.isDisposed()) return null;
        const tsHints = await worker.provideInlayHints(fileName, start, end);
        const hints = tsHints.map((hint)=>{
            return {
                ...hint,
                label: hint.text,
                position: model.getPositionAt(hint.position),
                kind: this._convertHintKind(hint.kind)
            };
        });
        return {
            hints,
            dispose: ()=>{}
        };
    }
    _convertHintKind(kind) {
        switch(kind){
            case "Parameter":
                return monaco_editor_core_exports.languages.InlayHintKind.Parameter;
            case "Type":
                return monaco_editor_core_exports.languages.InlayHintKind.Type;
            default:
                return monaco_editor_core_exports.languages.InlayHintKind.Type;
        }
    }
};
// src/language/typescript/tsMode.ts
var javaScriptWorker;
var typeScriptWorker;
function setupTypeScript(defaults) {
    typeScriptWorker = setupMode(defaults, "typescript");
}
function setupJavaScript(defaults) {
    javaScriptWorker = setupMode(defaults, "javascript");
}
function getJavaScriptWorker() {
    return new Promise((resolve, reject)=>{
        if (!javaScriptWorker) return reject("JavaScript not registered!");
        resolve(javaScriptWorker);
    });
}
function getTypeScriptWorker() {
    return new Promise((resolve, reject)=>{
        if (!typeScriptWorker) return reject("TypeScript not registered!");
        resolve(typeScriptWorker);
    });
}
function setupMode(defaults, modeId) {
    const disposables = [];
    const providers = [];
    const client = new WorkerManager(modeId, defaults);
    disposables.push(client);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    const libFiles = new LibFiles(worker);
    function registerProviders() {
        const { modeConfiguration } = defaults;
        disposeAll(providers);
        if (modeConfiguration.completionItems) providers.push(monaco_editor_core_exports.languages.registerCompletionItemProvider(modeId, new SuggestAdapter(worker)));
        if (modeConfiguration.signatureHelp) providers.push(monaco_editor_core_exports.languages.registerSignatureHelpProvider(modeId, new SignatureHelpAdapter(worker)));
        if (modeConfiguration.hovers) providers.push(monaco_editor_core_exports.languages.registerHoverProvider(modeId, new QuickInfoAdapter(worker)));
        if (modeConfiguration.documentHighlights) providers.push(monaco_editor_core_exports.languages.registerDocumentHighlightProvider(modeId, new DocumentHighlightAdapter(worker)));
        if (modeConfiguration.definitions) providers.push(monaco_editor_core_exports.languages.registerDefinitionProvider(modeId, new DefinitionAdapter(libFiles, worker)));
        if (modeConfiguration.references) providers.push(monaco_editor_core_exports.languages.registerReferenceProvider(modeId, new ReferenceAdapter(libFiles, worker)));
        if (modeConfiguration.documentSymbols) providers.push(monaco_editor_core_exports.languages.registerDocumentSymbolProvider(modeId, new OutlineAdapter(worker)));
        if (modeConfiguration.rename) providers.push(monaco_editor_core_exports.languages.registerRenameProvider(modeId, new RenameAdapter(libFiles, worker)));
        if (modeConfiguration.documentRangeFormattingEdits) providers.push(monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(modeId, new FormatAdapter(worker)));
        if (modeConfiguration.onTypeFormattingEdits) providers.push(monaco_editor_core_exports.languages.registerOnTypeFormattingEditProvider(modeId, new FormatOnTypeAdapter(worker)));
        if (modeConfiguration.codeActions) providers.push(monaco_editor_core_exports.languages.registerCodeActionProvider(modeId, new CodeActionAdaptor(worker)));
        if (modeConfiguration.inlayHints) providers.push(monaco_editor_core_exports.languages.registerInlayHintsProvider(modeId, new InlayHintsAdapter(worker)));
        if (modeConfiguration.diagnostics) providers.push(new DiagnosticsAdapter(libFiles, defaults, modeId, worker));
    }
    registerProviders();
    disposables.push(asDisposable(providers));
    return worker;
}
function asDisposable(disposables) {
    return {
        dispose: ()=>disposeAll(disposables)
    };
}
function disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}

},{"../../editor/editor.api.js":"eW8p2","./monaco.contribution.js":"g9oCX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3wZwb"], null, "parcelRequire5e9e")

//# sourceMappingURL=tsMode.59c917e7.js.map
