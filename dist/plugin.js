var capacitorLineLogin = (function (exports, core) {
    'use strict';

    const LineLogin = core.registerPlugin('LineLogin', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.LineLoginWeb()),
    });

    class LineLoginWeb extends core.WebPlugin {
        async setup(options) {
            console.log(options);
            throw this.unimplemented('Not implemented on web.');
        }
        async login() {
            throw this.unimplemented('Not implemented on web.');
        }
        async logout() {
            throw this.unimplemented('Not implemented on web.');
        }
        async getAccessToken() {
            throw this.unimplemented('Not implemented on web.');
        }
        async refreshAccessToken() {
            throw this.unimplemented('Not implemented on web.');
        }
        async verifyAccessToken() {
            throw this.unimplemented('Not implemented on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        LineLoginWeb: LineLoginWeb
    });

    exports.LineLogin = LineLogin;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
