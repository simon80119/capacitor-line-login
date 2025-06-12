import { WebPlugin } from '@capacitor/core';
export class LineLoginWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map