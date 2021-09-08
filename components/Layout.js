import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet" />
        {/* <link rel='icon' type='image/png' href='/logo-white.jpg' /> */}
        <link rel="apple-touch-icon" href="/logo-white.jpg" />
        <title>Panagiotis Apostolidis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <main>{children}</main>
    </div>
  )
}

export default Layout
