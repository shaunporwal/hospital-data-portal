/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: {
        readonly BASE_URL: string;
        readonly MODE: string;
        readonly DEV: boolean;
        readonly PROD: boolean;
        readonly SSR: boolean;
    };
}
