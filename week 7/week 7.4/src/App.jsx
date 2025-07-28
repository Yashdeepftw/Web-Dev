import { useRecoilValue, RecoilRoot } from 'recoil'
import { networkAtom } from './atoms/atoms'


function App() {
  
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalValue = networkNotificationCount >=100 ? "99+" : networkNotificationCount;
  return (
    <>
      <button>Home</button>
  
      <button>My Network ({finalValue})</button>
  
      <button>Jobs {}</button>
  
      <button>Notifications {}</button>
  
      <button>Me {}</button>
    </>
  )
}
export default App