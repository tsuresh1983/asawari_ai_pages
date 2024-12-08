export default {
  logo: <span style={{ fontWeight: 'bold', fontFamily: 'fantasy', 
    fontSize: '20px'
  }}>asawari.ai</span>,
  
  useNextSeoProps() {
    return {
      titleTemplate: '%s – asawari.ai'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="asawari.ai: AI with Love" />
      <meta property="og:description" content="Documentation for asawari.ai" />
    </>
  ),
  footer: false,
  editLink: {
    component: null
  },
  feedback: {
    content: null, // Removes the "Give us feedback" link
  },
}
