import { useContext, useState } from 'react';
import { countAtom } from './store/atoms/count';
import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count =  useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}
function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={() => {
      setCount(c => c + 1);
    }}>Increase</button>

    <button onClick={() => {
      setCount(c => c + 1);
    }}>Decrease</button>

  </div>
}
export default App