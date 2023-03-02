import History from './components/History'
import Search from './components/Search'
import Weather from './components/Weather'

function App() {

  return (
    <div className="h-screen flex items-center justify-center bg-[url('./assets/body-bg.jpg')] bg-cover text-white">
      <div className="flex max-w-[960px] max-h-[640px] w-full h-full p-4 gap-4 rounded-xl bg-slate-800/25 backdrop-blur-md shadow-xl">
        <div className="w-2/3 h-full">
          <Weather/>
        </div>
        <div className="w-1/3 h-full flex flex-col gap-4">
          <Search/>
          <History/>
        </div>
      </div>
    </div>
  )
}

export default App
