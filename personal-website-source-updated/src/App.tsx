import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'

// Main App component that controls which page is displayed
function App() {
  // State to keep track of which page is currently active
  const [activePage, setActivePage] = useState('home')

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation bar with tabs */}
      <Navbar setActivePage={setActivePage} />
      
      {/* Main content area */}
      <main className="py-8">
        {/* Conditional rendering based on which tab is active */}
        {activePage === 'home' ? (
          <HomePage />
        ) : (
          <AboutPage />
        )}
      </main>
      
      {/* Simple footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© {new Date().getFullYear()} My Personal Website</p>
      </footer>
    </div>
  )
}

export default App
