// First line needs to be left blank, otherwise an extremely unhelpful error will appear
// Code adapted from: https://superuser.com/a/1747680
try {
    let { classes: Cc, interfaces: Ci, manager: Cm } = Components;
    const Services = globalThis.Services;
    const { SessionStore } = Components.utils.import('resource:///modules/sessionstore/SessionStore.jsm');
    function ConfigJS() { Services.obs.addObserver(this, 'chrome-document-global-created', false); }
    ConfigJS.prototype = {
        observe: function (aSubject) { aSubject.addEventListener('DOMContentLoaded', this, { once: true }); },
        handleEvent: function (aEvent) {
            let document = aEvent.originalTarget; let window = document.defaultView; let location = window.location;
            if (/^(chrome:(?!\/\/(global\/content\/commonDialog|browser\/content\/webext-panels)\.x?html)|about:(?!blank))/i.test(location.href)) {
                if (window._gBrowser) {

                    // Place your keyboard shortcut changes here

                    let key_redo = window.document.getElementById('key_redo')
                    key_redo.setAttribute("modifiers", "accel,shift");
                    key_redo.setAttribute("key", "Z");

                    let key_privatebrowsing = window.document.getElementById('key_privatebrowsing')
                    key_privatebrowsing.setAttribute("modifiers", "accel,shift");
                    key_privatebrowsing.setAttribute("key", "N");

                    // Might clash with #key_privatebrowsing
                    let key_undoCloseWindow = window.document.getElementById('key_undoCloseWindow')
                    key_undoCloseWindow.remove()

                }
            }
        }
    };
    if (!Services.appinfo.inSafeMode) { new ConfigJS(); }
} catch (ex) { };