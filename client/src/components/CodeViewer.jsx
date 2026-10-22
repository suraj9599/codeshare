import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CodeViewer = () => {
  const { codeId } = useParams();
  const [code, setCode] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  React.useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/code/${codeId}`);
        setCode(response.data.code);
      } catch (error) {
        console.error('Error fetching code:', error);
      }
    };
    fetchCode();
  }, [codeId]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await axios.put(`http://localhost:5000/api/code/${codeId}`, { code });
      setIsSaving(false);
    } catch (error) {
      console.error('Error saving code:', error);
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Fullscreen editable textarea */}
      <div className="w-full h-screen flex flex-col">
        <textarea
          className="w-full h-full bg-black text-gray-200 p-4 font-mono text-lg focus:outline-none resize-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      {/* Fixed footer with save button */}
      <div className="fixed bottom-0 w-full bg-gray-800 p-4 flex justify-center">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default CodeViewer;