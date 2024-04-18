import { ConfigProvider } from 'antd'
import './App.css'
import TrunkFoods from './pages/TrunkFoods'

function App() {
  return (
    <>
      <ConfigProvider
        theme={{ token: { colorPrimary: '#00b96b' } }}
      >
        <TrunkFoods />
      </ConfigProvider>
    </>
  )
}

export default App
