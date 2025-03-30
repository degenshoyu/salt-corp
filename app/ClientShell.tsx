'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'

type TerminalLine = { text: string, type: 'boot' | 'wallet' | 'error' }

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [terminalText, setTerminalText] = useState<TerminalLine[]>([])
  const [terminalVisible, setTerminalVisible] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  const appendToTerminal = (message: string, type: TerminalLine['type'], delay = 1000) => {
    const lines = message.split('\n')
    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalText(prev => [...prev, { text: line, type }])
        setTerminalVisible(true)
      }, index * delay)
    })
  }

  const showSimulationMsg = () => {
    appendToTerminal(
      'ATTEMPTING TO ENTER SIMULATION...\nMODULE NOT READY\nPLEASE WAIT FOR NEXT DEPLOYMENT WINDOW',
      'boot'
    )
  }

  const showWalletMsg = () => {
    appendToTerminal(
      'CONNECTING WALLET...\nInterface under development.\nPlease await next Trust Cycle.',
      'wallet'
    )
  }

  const showNodeMsg = () => {
    appendToTerminal(
      'ATTEMPTING ACCESS TO NODE...\nACCESS DENIED\nOG SALT Signature Required.',
      'error'
    )
  }

  const clearTerminal = () => {
    setTerminalText([])
  }

  useEffect(() => {
    if (terminalText.length === 0) {
      appendToTerminal(
        'booting master node...\nlocating SALT archives...\nsyncing local trust anchor...\ninterface unlocked.\nWELCOME TO NEW SALT CORP',
        'boot'
      )
    }
  }, [terminalText])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalText])

  return (
    <>
      <div className="sticky top-0 z-50 bg-[#111] border-b border-red-800">
        <header className="text-center max-w-2xl mx-auto py-6 space-y-2">
          <Image src="/logo.png" alt="New SALT Corp Logo" width={64} height={64} className="mx-auto mb-2" />
          <h1 className="text-xs sm:text-lg md:text-2xl text-center truncate">
            $ WELCOME TO NEW SALT CORP<span className="inline-block w-2 animate-pulse">|</span>
          </h1>
          <div className="text-red-400 font-mono text-xs uppercase tracking-widest">
            Custodians of the last Trust
          </div>
        </header>

        <nav
          style={{ backgroundColor: '#111' }}
          className="text-red-400 px-4 py-2 flex flex-wrap justify-center items-center font-mono text-sm sm:text-sm uppercase tracking-widest gap-2 sm:gap-4"
        >
          {[
            { label: 'Home', href: '/' },
            { label: 'Archive', href: '/archive' },
            { label: "What's SALT", href: '/salt' },
            { label: 'Roadmap', href: '/roadmap' },
          ].map((item, idx, arr) => (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="px-2 py-1 hover:text-black hover:bg-red-400 rounded transition-colors duration-200"
              >
                {item.label}
              </Link>
              {idx < arr.length - 1 && <span className="mx-2 text-red-600">|</span>}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 py-4">
        <button onClick={showSimulationMsg} className="bg-transparent border border-red-500 px-4 py-2 text-red-400 hover:text-black hover:bg-red-500 hover:shadow-md uppercase text-xs md:text-sm tracking-wider rounded">
          [Enter Simulation]
        </button>
        <button onClick={showWalletMsg} className="bg-transparent border border-red-500 px-4 py-2 text-red-400 hover:text-black hover:bg-red-500 hover:shadow-md uppercase text-xs md:text-sm tracking-wider rounded">
          [Connect Wallet]
        </button>
        <button onClick={showNodeMsg} className="bg-transparent border border-red-500 px-4 py-2 text-red-400 hover:text-black hover:bg-red-500 hover:shadow-md uppercase text-xs md:text-sm tracking-wider rounded">
          [Access Node]
        </button>
        <button onClick={clearTerminal} className="bg-transparent border border-red-500 px-4 py-2 text-red-400 hover:text-black hover:bg-red-500 hover:shadow-md uppercase text-xs md:text-sm tracking-wider rounded">
          [RESET]
        </button>
      </div>

      {children}

      <Footer />

      {!terminalVisible && (
        <button
          onClick={() => setTerminalVisible(true)}
          className="fixed bottom-4 right-4 text-red-400 text-xs bg-black p-2 border border-red-600 rounded font-mono z-50"
        >
          [TERMINAL]
        </button>
      )}

      {terminalVisible && (
        <div
          ref={terminalRef}
          className="fixed bottom-4 right-4 bg-black border-4 border-red-600 rounded-xl text-red-400 font-mono text-xs md:text-sm p-3 shadow-[0_0_10px_rgba(255,0,0,0.4)] z-40 max-h-[50vh] md:max-w-[50vw] w-[90vw] md:w-[40vw] h-[25vh] md:h-[40vh] overflow-auto"
        >
          <div className="flex justify-between items-center pb-2 text-green-400">
            <span>[TERMINAL WINDOW ACTIVE]</span>
            <button onClick={() => setTerminalVisible(false)} className="text-xs text-red-400">[–]</button>
          </div>
          {terminalText.map((line, index) => (
            <div key={index} className={
              line.type === 'boot' ? 'text-green-400' :
              line.type === 'wallet' ? 'text-blue-400' :
              line.type === 'error' ? 'text-yellow-400' :
              'text-red-400'
            }>
              <span className="text-green-600">user@newsalt</span><span className="text-white">:~$</span> {line.text}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

