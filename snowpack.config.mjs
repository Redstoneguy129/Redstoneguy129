/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  buildOptions: {
    clean: true,
    out: "dist",
    tailwindConfig: './tailwind.config.js'
  },
  plugins: [
    '@prefresh/snowpack',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-typescript'
  ],
  alias: {
    "react": "preact/compat",
    "react-dom/test-utils": "preact/test-utils",
    "react-dom": "preact/compat",
    "react/jsx-runtime": "preact/jsx-runtime"
  },
  optimize: {
    bundle: true,
    manifest: true,
    minify: true,
    sourcemap: true,
    treeshake: true,
  },
}