import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [memoryAddresses, setMemoryAddresses] = useState([])

  const generateHexAddress = () => {
    return '0x' + Math.random().toString(16).substring(2, 10).toUpperCase()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newAddress = {
        id: Date.now(),
        text: generateHexAddress(),
        x: Math.random() * 100,
        y: Math.random() * 100
      }
      
      setMemoryAddresses(prev => [...prev, newAddress])
      
      // Remove address after 1 second
      setTimeout(() => {
        setMemoryAddresses(prev => prev.filter(addr => addr.id !== newAddress.id))
      }, 1000)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const asciiText = `
                              _ 
 ___ _ __  _ __ __ ___      _| |
/ __| '_ \\| '__/ _\` \\ \\ /\\ / / |
\\__ \\ |_) | | | (_| |\\ V  V /| |
|___/ .__/|_|  \\__,_| \\_/\\_/ |_|
    |_|
`

  return (
    <div className="app">
      {/* Background memory addresses */}
      {memoryAddresses.map(address => (
        <div
          key={address.id}
          className="memory-address"
          data-text={address.text}
          style={{
            left: `${address.x}%`,
            top: `${address.y}%`
          }}
        >
          {address.text}
        </div>
      ))}
      
      <div className="ascii-art-container">
        <pre className="ascii-art" data-text={asciiText}>
{asciiText}
        </pre>
        <div className="text-line">
          nyc - cybersecurity - 2025
        </div>
      </div>
    </div>
  )
}

export default App


