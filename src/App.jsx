import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [memoryAddresses, setMemoryAddresses] = useState([])
  const [expandedTalks, setExpandedTalks] = useState({})
  const [currentTheme, setCurrentTheme] = useState('default')

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

  const toggleTalk = (talkId) => {
    setExpandedTalks(prev => ({
      ...prev,
      [talkId]: !prev[talkId]
    }))
  }

  const asciiText = `
                              _
 ___ _ __  _ __ __ ___      _| |
/ __| '_ \\| '__/ _\` \\ \\ /\\ / / |
\\__ \\ |_) | | | (_| |\\ V  V /| |
|___/ .__/|_|  \\__,_| \\_/\\_/ |_|
    |_|
`

  const talks = [
    {
      id: 1,
      title: "A Secret Talk about macOS Detection Engineering",
      speaker: "Olivia Gallucci",
      description: "This talk examines macOS telemetry sources (Unified Logging System, Endpoint Security, and TCC.db) and methods for extracting signals. It analyzes abuse of automation utilities in infostealers, highlighting common methods of persistence and credential-theft. Detection strategies focus on behavioral correlations, and how they can be visualized through open-source tooling."
    },
    {
      id: 2,
      title: "Your Apes May Be Gone, But the Hackers Made $9 Billion and They're Still Here",
      speaker: "Andrew MacPherson",
      description: `Last year, crypto thefts hit $9.32 billion—more than half of all cybercrime losses. North Korea just pulled off a $1.5 billion heist from a single exchange. Meanwhile, most security professionals still think crypto is just magic internet money for buying NFT monkeys.

This talk is for the crypto-skeptical security professional who's tired of hearing about "blockchain". I'll show you why crypto security is 90% the same Web2 skills you already have—phishing, social engineering, API abuse—just with irreversible consequences and way better attacker ROI.

We'll start with a practical crypto primer covering the essentials: how blockchains work, what wallets actually do, and why stablecoins matter. Then we'll dive into the current threat landscape: who's stealing what, how OFAC sanctions work in a pseudonymous world, and why traditional threat intel is failing miserably at tracking crypto crime.

Most importantly, I'll show you what makes crypto security uniquely interesting. You're dealing with immutable code, irreversible transactions, and attackers monetary wins that can't just be rolled or clawed back. The threat actors range from nation-states to teenage hackers, the attack surface spans everything from smart contract logic to social engineering, and the defensive tooling is still being invented.

Come for the massive heist stories, stay because you realize this is an unexplored frontier with its own unique problems. By the end, you'll understand why crypto security attracts both sophisticated attackers and curious defenders—not for the hype, but because it's a different kind of security challenge worth understanding.

Key Takeaways:

- Why crypto crimes now dominate cybercrime statistics
- How your existing security skills translate directly to Web3
- What makes crypto security different from traditional infosec
- Practical resources to explore this space without the hype`
    },
    {
      id: 3,
      title: "Confidential To Compromised: A Deep Dive Into Private LLMs",
      speaker: "Aman Ali",
      description: `Private LLMs are emerging across the tech landscape, starting with Apple's PCC, then GCP/Azure's Confidential AI Cloud offerings, and Whatsapps Private Processing products. These systems promise a secure LLM you can verifiably send your most sensitive information to, and often draw parallels to e2ee messaging systems like Signal or WhatsApp. However, one end of this connection is always decrypted in a server somewhere and is subject to undetectable law enforcement, hackers and curious insiders. How far do the technologies underpinning these systems actually go, and what does it take to turn your upcoming AI confidant into a backdoor into your phone's data?

This talk will test the promise of privacy provided by these systems -- covering confidentiality, non-targetability, and verifiable transparency offered through TEEs, OHTTP and binary transparency logs.`
    }
  ]

  return (
    <div className={`app theme-${currentTheme}`}>
      {/* Theme switcher buttons */}
      <div className="theme-switcher">
        <button
          className={`theme-btn ${currentTheme === 'default' ? 'active' : ''}`}
          onClick={() => setCurrentTheme('default')}
          aria-label="Default theme"
        >
          𓁿
        </button>
        <button
          className={`theme-btn ${currentTheme === 'green' ? 'active' : ''}`}
          onClick={() => setCurrentTheme('green')}
          aria-label="Unifont green theme"
        >
          𓆣
        </button>
        <button
          className={`theme-btn ${currentTheme === 'purple' ? 'active' : ''}`}
          onClick={() => setCurrentTheme('purple')}
          aria-label="Reader mode theme"
        >
          𓃠
        </button>
      </div>

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
        {currentTheme === 'purple' ? (
          <h1 className="fancy-title">The Sprawl</h1>
        ) : (
          <pre className="ascii-art" data-text={asciiText}>
{asciiText}
          </pre>
        )}
        <div className="text-line">
          nyc - cybersecurity - 2025
        </div>

        {/* New content from README */}
        <div className="sprawl-info">
          <div className="info-header">
            <div>A non-corporate technical meetup run by a NYC hacker community.</div>
            <div>3x 20-min talks by smart people we all like.</div>
            <div>Hosted every couple of months.</div>
          </div>

          <div className="event-details">
            <h2>-- Sprawl 0x1 --</h2>
            <div>Date: October 2nd, 2025</div>
            <div>Invite: <a href="https://luma.com/zxlmzqg3" target="_blank" rel="noopener noreferrer">https://luma.com/zxlmzqg3</a></div>
          </div>

          <div className="talks-container">
            {talks.map(talk => (
              <div key={talk.id} className="talk-box">
                <div
                  className="talk-header"
                  onClick={() => toggleTalk(talk.id)}
                >
                  <span className="toggle-icon">
                    [ {expandedTalks[talk.id] ? '-' : '+'} ]
                  </span>
                  <div className="talk-info">
                    <div className="talk-title">Talk {talk.id}: {talk.title}</div>
                    <div className="talk-speaker">{talk.speaker}</div>
                  </div>
                </div>
                {expandedTalks[talk.id] && (
                  <div className="talk-description">
                    {talk.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} style={{ marginBottom: '1em' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


