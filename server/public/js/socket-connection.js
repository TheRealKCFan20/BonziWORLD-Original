// The imported bundle supplies an absolute URL without the current page's port.
// Keep this prebuilt client same-origin without requiring the legacy Ruby build.
// Rebuilding from src/www/js/main.js removes the need for this adapter.
(function () {
    var connect = window.io;
    function sameOriginConnection(uri, options) {
        return window.isApp
            ? connect(uri, options)
            : connect(window.location.origin, options);
    }
    Object.assign(sameOriginConnection, connect);
    window.io = sameOriginConnection;
})();
