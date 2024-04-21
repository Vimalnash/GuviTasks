import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import FullStackDevelopment from './Pages/FullStackDevelopment';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import { topicDataArr } from './Components/TopicDataArr';
import TopicDetailView from './Components/TopicDetailView';

// Main App Component holing Route paths and links
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/fullstackdevelopment" element={<FullStackDevelopment />}/>
        <Route path="/datascience" element={<DataScience />}/>
        <Route path="/cybersecurity" element={<CyberSecurity />}/>
        <Route path="/career" element={<Career />}/>
        {/* Dynamically Creating Routes */}
        {
          topicDataArr.map((topicData, idx) => {
            return <Route key={idx} path={`${topicData.navigate}`} element={<TopicDetailView topicData={topicData}/>} />
          })
        }
        <Route path="*" element={<h1>404 Page Not Found - Check URL Once</h1>}/>
      </Routes>
    </>
  )
}