import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'


const Layout = ({children}) => {

  return (
    <>
      <main className="flex flex-col lg:flex-row">
        <div className="h-1/5 lg:h-screen flex lg:flex-col justify-between p-4 lg:w-1/6 bg-gray-600">
            <div className="hidden lg:block">
              <StaticImage
                src="../images/chibi_no_bg.png"
                alt="A cute chibi-style image of Lily"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
            <div className="flex flex-col lg:text-2xl">
              <Link to="/">Home</Link>
              <Link to="/bleep">Bleep</Link>
            </div>
          <div className="lg:text-2xl">
            <p className="font-display lg:text-4xl">Lily Eisner</p>
            <p>Developer</p>
            <p>Writer</p>
          </div>
        </div>
        <div className="h-4/5 lg:h-screen lg:w-5/6 flex flex-col justify-center items-center text-center text-xl lg:text-4xl leading-loose p-6 lg:p-0">
          {children}
          <div className="lg:hidden">
            <StaticImage
              src="../images/chibi_no_bg.png"
              alt="A cute chibi-style image of Lily"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout