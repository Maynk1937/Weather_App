import PanelLeft from "./components/PanelLeft"
import PanelRight from "./components/PanelRight"
import UserContextProvider from "./UserContextProvider"

function App() {


  return (
    <UserContextProvider>
      <div className="w-full flex min-h-[100vh]">
        <PanelLeft />
        <PanelRight/>
      </div>
    </UserContextProvider>
  )
}

export default App
