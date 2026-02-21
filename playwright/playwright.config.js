import { defineConfig } from "playwright/test";

export default defineConfig({
    reporter: [['html']],
    use: {
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
    }
})