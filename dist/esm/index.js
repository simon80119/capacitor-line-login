import { registerPlugin } from '@capacitor/core';
const LineLogin = registerPlugin('LineLogin', {
    web: () => import('./web').then(m => new m.LineLoginWeb()),
});
export * from './definitions';
export { LineLogin };
//# sourceMappingURL=index.js.map