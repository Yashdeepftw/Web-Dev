import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificatonSelector } from './atoms/atoms'


function App() {
  
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalValue = networkNotificationCount >=100 ? "99+" : networkNotificationCount;

  const jobsAtomCount = useRecoilValue(jobsAtom);

  const notificationsAtomCount = useRecoilValue(notificationsAtom);

  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

  const totalNotificationSelector = useRecoilValue(totalNotificatonSelector);

  return (
    <>
      <button>Home</button>
  
      <button>My Network {finalValue}</button>
  
      <button>Jobs {jobsAtomCount}</button>
  
      <button>Notifications {notificationsAtomCount}</button>
  
      <button>Me {totalNotificationSelector}</button>
      
    </>
  )
}
export default App