
import { useCallback, useRef, useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [passLength, setPassLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
    // useRef hook to get the input element
  const passwordRef = useRef(null);
  const [copyStatus, setCopyStatus] = useState(false); // New state for copy feedback

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) str += '0123456789';
    if (includeSymbols) str += '!@#$%^&*()_+~`|}{[]};:<>?,./';
    for (let i = 1; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passLength, includeNumbers, includeSymbols, setPassword]);
  
  useEffect(() => {
    passwordGenerator();
  }, [passLength, includeNumbers, includeSymbols, passwordGenerator]);

  const copyPasswordTOClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,16);
    window.navigator.clipboard.writeText(password);

    setCopyStatus(true); // Set copy status to true
    setTimeout(() => setCopyStatus(false), 2000); // Reset after 2 seconds
  }, [password]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center text-white my-3'
      >Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            placeholder='Password'
            readOnly
            className='outline-none w-full py-1 px-3'
            style={{backgroundColor: '#fff', color: 'black'}}
            ref={passwordRef}
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 button'
          onClick={copyPasswordTOClipboard}
          >{copyStatus ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={20}
            value={passLength}
            className='cursor-pointer'
            onChange={(e) => {setPassLength(e.target.value)}} />
            <label>Length: {passLength}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={includeNumbers}
            id='numberInput'
            onChange={(e) => {setIncludeNumbers(e.target.checked)}} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={includeSymbols}
            id='numberInput'
            onChange={(e) => {setIncludeSymbols(e.target.checked)}} />
            <label htmlFor='numberInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
