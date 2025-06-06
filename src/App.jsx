// // import { useState, useCallback } from 'react'
// // import { preview } from 'vite'

// // function App() {
// //   const [length, setLength] = useState(8)
// //   const [numberAllowed, setNumberAllowed] = useState(false)
// //   const [charAllowed, setCharAllowed] = useState(false)
// //   const [password, setPassword] = useState("")

// //   const passwordGenerator = useCallback(() => {
// //     let pass = ""
// //     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// //     if (numberAllowed) str += "0123456789"
// //     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

// //     for (let i = 0; i < length; i++) {
// //       let char = Math.floor(Math.random() * str.length)
// //       pass += str.charAt(char)
// //     }

// //     setPassword(pass)
// //   }, [length, numberAllowed, charAllowed])

// //   return (
// //     <div className='h-screen w-screen bg-black flex items-center justify-center'>
// //       <div className='bg-gray-800 text-orange-500 rounded-lg shadow-lg w-full max-w-md p-6'>
// //         <h1 className='text-white text-center text-2xl font-bold mb-4'>
// //           Password Generator
// //         </h1>

// //         {/* Password + Copy Button */}
// //         <div className='flex items-center shadow rounded-lg overflow-hidden bg-white mb-4'>
// //           <input
// //             type="text"
// //             value={password}
// //             placeholder='Password'
// //             readOnly
// //             className='w-full px-4 py-2 text-black outline-none'
// //           />
// //           <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
// //             copy
// //           </button>
// //         </div>

// //         {/* Length Slider Section */}
// //         <div className='flex flex-col gap-y-1 text-sm'>
// //           <label htmlFor="length" className='text-orange-400'>Length: {length}</label>
// //           <input
// //             id="length"
// //             type="range"
// //             min={6}
// //             max={100}
// //             value={length}
// //             onChange={(e) => setLength(e.target.value)}
// //             className='cursor-pointer w-full'
// //           />
// //           </div>
// //         {/* <div className='flex items-center gap-x-1'>
// //           <input type="checkbox" 
// //            defaultChecked ={numberAllowed }
// //            id='numberInput'
// //            onChange={() =>{
// //             setNumberAllowed((prev) => !prev);
// //            }} />
// //         </div>  */}
// //       </div>
// //     </div>
// //   )
// // }

// // export default App


// import { useState, useCallback, useEffect } from 'react'

// function Pass() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length)
//       pass += str.charAt(char)
//     }

//     setPassword(pass)
//   }, [length, numberAllowed, charAllowed])

//   const copyPasswordToClipboard = useCallback(() => {
//     if (password) {
//       navigator.clipboard.writeText(password)
//       alert("Password copied to clipboard!")
//     }
//   }, [password])

//   useEffect(() => {
//     passwordGenerator() // Auto-generate on first load
//   }, [passwordGenerator])

//   return (
//     <div className='h-screen w-screen bg-black flex items-center justify-center'>
//       <div className='bg-gray-800 text-orange-500 rounded-lg shadow-lg w-full max-w-md p-6'>
//         <h1 className='text-white text-center text-2xl font-bold mb-4'>
//           Password Generator
//         </h1>

//         {/* Password + Copy Button */}
//         <div className='flex items-center shadow rounded-lg overflow-hidden bg-white mb-4'>
//           <input
//             type="text"
//             value={password}
//             placeholder='Password'
//             readOnly
//             className='w-full px-4 py-2 text-black outline-none'
//           />
//           <button
//             onClick={copyPasswordToClipboard}
//             className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//           >
//             Copy
//           </button>
//         </div>

//         {/* Length Slider */}
//         <div className='flex flex-col gap-y-1 text-sm mb-4'>
//           <label htmlFor="length" className='text-orange-400'>Length: {length}</label>
//           <input
//             id="length"
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             onChange={(e) => setLength(Number(e.target.value))}
//             className='cursor-pointer w-full'
//           />
//         </div>

//         {/* Checkboxes */}
//         <div className='flex flex-col gap-2 mb-4 text-sm'>
//           <div className='flex items-center gap-x-2'>
//             <input
//               type="checkbox"
//               id="numberInput"
//               checked={numberAllowed}
//               onChange={() => setNumberAllowed((prev) => !prev)}
//             />
//             <label htmlFor="numberInput">Include Numbers</label>
//           </div>

//           <div className='flex items-center gap-x-2'>
//             <input
//               type="checkbox"
//               id="charInput"
//               checked={charAllowed}
//               onChange={() => setCharAllowed((prev) => !prev)}
//             />
//             <label htmlFor="charInput">Include Symbols</label>
//           </div>
//         </div>

//         {/* Generate Button */}
//         <button
//           onClick={passwordGenerator}
//           className='w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded'>
//           Generate Password
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Password

import { useState, useCallback, useEffect } from 'react'

function Password() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    if (password) {
      navigator.clipboard.writeText(password)
      alert("Password copied to clipboard!")
    }
  }, [password])

  useEffect(() => {
    passwordGenerator() // Auto-generate on first load
  }, [passwordGenerator])

  return (
    <div className='h-screen w-screen bg-black flex items-center justify-center'>
      <div className='bg-gray-800 text-orange-500 rounded-lg shadow-lg w-full max-w-md p-6'>
        <h1 className='text-white text-center text-2xl font-bold mb-4'>
          Password Generator
        </h1>

        {/* Password + Copy Button */}
        <div className='flex items-center shadow rounded-lg overflow-hidden bg-white mb-4'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            className='w-full px-4 py-2 text-black outline-none'
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className='flex flex-col gap-y-1 text-sm mb-4'>
          <label htmlFor="length" className='text-orange-400'>Length: {length}</label>
          <input
            id="length"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className='cursor-pointer w-full'
          />
        </div>

        {/* Checkboxes */}
        <div className='flex flex-col gap-2 mb-4 text-sm'>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="charInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Include Symbols</label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className='w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded'>
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default Password