import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// const CodeInput = () => {
//     const [code, setCode] = useState('');
//     const [generatedLink, setGeneratedLink] = useState('');
//     const navigate = useNavigate();
  
//     const handleSubmit = async () => {
//       try {
//         const response = await axios.post('http://localhost:5000/api/save', { code });
//         setGeneratedLink(`http://localhost:5173/view/${response.data.codeId}`);
//       } catch (error) {
//         console.error("Error saving code:", error);
//       }
//     };
  
//     return (
//       <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-semibold mb-4 text-gray-700">Paste your Code</h1>
//         <textarea
//           className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
//           placeholder="Paste your code here..."
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//         />
//         <button
//           onClick={handleSubmit}
//           className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Generate Link
//         </button>
  
//         {generatedLink && (
//           <div className="mt-4">
//             <p className="text-gray-600">Share this link:</p>
//             <a
//               href={generatedLink}
//               className="text-blue-500 underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {generatedLink}
//             </a>
//           </div>
//         )}
//       </div>
//     );
//   };

//   export default CodeInput;

const CodeInput = () => {
  const [code, setCode] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/save', { code });
      setGeneratedLink(`http://localhost:5173/view/${response.data.codeId}`);
    } catch (error) {
      console.error("Error saving code:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Fullscreen code editor container */}
      <div className="w-full h-screen flex flex-col">
        <textarea
          className="w-full h-full bg-black text-gray-200 p-4 font-mono text-lg focus:outline-none resize-none"
          placeholder="Paste or write your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      {/* Fixed footer with generate button */}
      <div className="fixed bottom-0 w-full bg-gray-800 p-4 flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
        >
          Generate Link
        </button>
      </div>

      {/* Display the generated link */}
      {generatedLink && (
        <div className="fixed bottom-20 w-full flex justify-center">
          <div className="bg-gray-800 p-3 rounded-lg">
            <p className="text-gray-400">Shareable Link:</p>
            <a
              href={generatedLink}
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {generatedLink}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};


export default CodeInput;