import BlogPost from "./components/BlogPost"
import ClickButton from "./components/ClickButton"
import TestClientSideAsChildren from "./components/TestClientSideAsChildren"

export default function Home() {

  console.log('server rendering --- Home.tsx')
  return (
    <main>
      <BlogPost />

      <ClickButton >
        {/*
         O Componente abaixo, mesmo sendo uma children, será renderizado como server-component
        */}
        <TestClientSideAsChildren />
      </ClickButton>
    </main>
  )
}
