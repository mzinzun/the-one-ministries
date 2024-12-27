// Code: ParalaxTest.jsx
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const ParalaxTest = () => {

  return (
    <Parallax pages={1} style={{ top: '0', left: '0' }}>
    <ParallaxLayer offset={0} speed={2.5}>
      <p>Parallax</p>
    </ParallaxLayer>
  </Parallax>
  )
}

export default ParalaxTest
