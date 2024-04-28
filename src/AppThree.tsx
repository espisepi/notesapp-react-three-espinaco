import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Shoe'

// redux
import { useAppSelector } from './common/framework/presentation/store/hooks';

export default function AppThree() {
  // to work code below: <Provider store={store}><AppThree /></Provider>
  const { isLoading, books } = useAppSelector((state) => state.BookSlice);
  console.log("Listado de books de redux: ",{books})

  return (
    <Canvas shadows camera={{ position: [0, 0, 1.66] }}>
      <Environment files="./img/forest_slope_1k.hdr" />
      <Model />
      <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  )
}
