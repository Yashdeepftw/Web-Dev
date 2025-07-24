import { useState } from 'react'
import './App.css'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  
  useEffect(() => {
    fetch("https://google.com", async (res) => {
      const json = await res.json();
      setBankData({income: 100});
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100
      });
    }, 1000)
  }, []);

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;
  return (
    <>
    <div>
      ur tax return is {incomeTax}
    </div>
    </>
  )
}

export default App
