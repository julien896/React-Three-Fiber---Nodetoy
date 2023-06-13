import { Environment } from "@react-three/drei";

function App() {
  return (
    <>
      <Environment
        background={"only"}
        files={"assets/textures/envmap_blur.hdr"}
        ground={{ height: 100, radius: 300 }}
      />
      <Environment
        background={false}
        files={"assets/textures/envmap.hdr"}
      />
    </>
  )
}

export default App
