import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
    contentDirBasePath: '/' // Or even nested e.g. `/docs/advanced`
    // ... Add Nextra-specific options here
})

// Export the final Next.js config with Nextra included
export default withNextra({
    // search: false,
    // ... Add regular Next.js options here
    turbopack: {
        resolveAlias: {
        // Path to your `mdx-components` file with extension
        'next-mdx-import-source-file': './src/mdx-components.js'
        }
    }
})