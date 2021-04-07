import * as React from "react"
import {motion} from 'framer-motion'

// markup
const IndexPage = () => {
  return <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>Home!</motion.div>
}

export default IndexPage
