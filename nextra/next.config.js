import nextra from 'nextra'
/**
 * @type {import('next').NextConfig}
 */
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.jsx',
  latex: true,
  search: {
    codeblocks: false
  }

})

export default withNextra({
  reactStrictMode: true,

  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
})
