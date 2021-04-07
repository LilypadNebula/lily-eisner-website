import React from 'react'
import './index.css'
import '@fontsource/audiowide'
import '@fontsource/montserrat'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'


const Layout = ({children}) => {

  return (
    <>
      <main className="flex">
        <div className="h-screen flex flex-col justify-between p-4 w-1/6 bg-gray-600">
            <StaticImage
              src="../images/chibi_no_bg.png"
              alt="A cute chibi-style image of Lily"
              placeholder="blurred"
              layout="constrained"
            />
            <div class="flex flex-col text-2xl">
              <Link to="/">Home</Link>
              <Link to="/bleep">Bleep</Link>
            </div>
          <div className="text-2xl">
            <p className="font-display text-4xl">Lily Eisner</p>
            <p>Developer</p>
            <p>Writer</p>
          </div>
        </div>
        <div className="h-screen w-5/6 flex flex-col justify-center items-center text-xl leading-8">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout