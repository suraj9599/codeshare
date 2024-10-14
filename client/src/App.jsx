
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import CodeInput from './components/CodeInput';
import CodeViewer from './components/CodeViewer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<CodeInput />} />
          <Route path="/view/:codeId" element={<CodeViewer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
