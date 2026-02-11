'use client'

import { useState, useEffect } from 'react'

const CORRECT_PASSWORD = 'nodefy123'

interface Update {
  time: string
  action: string
  detail: string
}

interface Tasks {
  done: string[]
  inProgress: string[]
  todo: string[]
}

interface KPI {
  current: number
  target: number
}

interface UpdateData {
  lastUpdate: string
  version: string
  updates: Update[]
  tasks: Tasks
  kpis: {
    documenten: KPI
    linkedinPosts: KPI
    leads: KPI
    klanten: KPI
    mrr: KPI
  }
}

const documents = [
  { id: 'masterplan', title: 'MASTERPLAN', description: 'Volledige roadmap, fases, milestones', file: 'MASTERPLAN.md' },
  { id: 'propositie', title: 'PROPOSITIE', description: 'Pricing, diensten, doelgroep', file: 'PROPOSITIE.md' },
  { id: 'brandbook', title: 'BRANDBOOK', description: 'Kleuren, fonts, tone of voice', file: 'BRANDBOOK.md' },
  { id: 'icp', title: 'ICP', description: '5 buyer personas, communities', file: 'ICP.md' },
  { id: 'outreach', title: 'OUTREACH PLAYBOOK', description: 'LinkedIn, cold email, templates', file: 'OUTREACH-PLAYBOOK.md' },
  { id: 'content', title: 'CONTENT CALENDAR', description: '20 posts, lead magnets', file: 'CONTENT-CALENDAR.md' },
  { id: 'ads', title: 'ADS STRATEGY', description: '€500 budget, audiences', file: 'ADS-STRATEGY.md' },
  { id: 'linkedin-posts', title: 'LINKEDIN POSTS', description: '5 posts klaar om te posten', file: 'LINKEDIN-POSTS-READY.md' },
  { id: 'linkedin', title: 'LINKEDIN SETUP', description: 'Company page setup', file: 'LINKEDIN-SETUP.md' },
  { id: 'workspace', title: 'GOOGLE WORKSPACE', description: 'Email setup instructies', file: 'GOOGLE-WORKSPACE-SETUP.md' },
]

export default function InternPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [activeDoc, setActiveDoc] = useState<string | null>(null)
  const [docContent, setDocContent] = useState<string>('')
  const [loadingDoc, setLoadingDoc] = useState(false)
  const [updateData, setUpdateData] = useState<UpdateData | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('morgen-intern-auth')
    if (saved === 'true') setAuthenticated(true)
    
    // Fetch updates
    fetch('/updates.json')
      .then(res => res.json())
      .then(data => setUpdateData(data))
      .catch(console.error)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      setAuthenticated(true)
      localStorage.setItem('morgen-intern-auth', 'true')
      setError(false)
    } else {
      setError(true)
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    localStorage.removeItem('morgen-intern-auth')
  }

  const loadDocument = async (docId: string) => {
    setActiveDoc(docId)
    setLoadingDoc(true)
    const doc = documents.find(d => d.id === docId)
    if (!doc) {
      setDocContent('Document niet gevonden')
      setLoadingDoc(false)
      return
    }
    try {
      const response = await fetch(`/docs/${doc.file}`)
      const content = await response.text()
      setDocContent(content)
    } catch {
      setDocContent('Kon document niet laden')
    }
    setLoadingDoc(false)
  }

  const formatTime = (timeStr: string) => {
    const date = new Date(timeStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    
    if (diffMins < 60) return `${diffMins} min geleden`
    if (diffHours < 24) return `${diffHours} uur geleden`
    return date.toLocaleDateString('nl-NL')
  }

  // Login screen
  if (!authenticated) {
    return (
      <main className="min-h-screen bg-warm-bg flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/10 w-full max-w-sm">
          <div className="text-center mb-6">
            <span className="font-headline text-2xl font-bold text-teal">heymorgen</span>
            <span className="text-coral text-2xl">.</span>
            <p className="text-sm text-charcoal/50 mt-2">Intern Dashboard</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wachtwoord"
              className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-charcoal/20'} focus:outline-none focus:border-teal`}
            />
            {error && <p className="text-red-500 text-sm mt-2">Verkeerd wachtwoord</p>}
            <button type="submit" className="w-full mt-4 py-3 bg-teal hover:bg-teal/90 text-white font-headline font-medium rounded-lg transition-colors">
              Login
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-warm-bg">
      {/* Header */}
      <header className="bg-white border-b border-charcoal/10 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-headline text-xl font-bold text-teal">heymorgen</span>
            <span className="text-coral text-xl">.</span>
            <span className="text-sm text-charcoal/50 ml-2">Intern Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            {updateData && (
              <span className="text-xs text-charcoal/40">
                v{updateData.version} • Updated {formatTime(updateData.lastUpdate)}
              </span>
            )}
            <button onClick={handleLogout} className="text-sm text-charcoal/50 hover:text-charcoal">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Latest Update Banner */}
        {updateData && updateData.updates[0] && (
          <div className="mb-6 p-4 bg-gradient-to-r from-teal to-teal/80 rounded-xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-teal-100 uppercase tracking-wider">Laatste Update</p>
                <h3 className="font-headline font-bold text-lg">{updateData.updates[0].action}</h3>
                <p className="text-sm text-teal-100">{updateData.updates[0].detail}</p>
              </div>
              <span className="text-sm text-teal-100">{updateData.updates[0].time}</span>
            </div>
          </div>
        )}

        {/* DNS Alert - tijdelijk */}
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-headline font-bold text-amber-800">⏳ DNS koppelen (wacht op jou)</h3>
              <p className="text-sm text-amber-700 mt-1">Namecheap → Advanced DNS → records toevoegen</p>
            </div>
            <div className="text-right text-sm text-amber-600">
              <p><strong>A:</strong> @ → 76.76.21.21</p>
              <p><strong>CNAME:</strong> www → cname.vercel-dns.com</p>
            </div>
          </div>
        </div>

        {/* KPIs */}
        {updateData && (
          <div className="grid grid-cols-5 gap-4 mb-8">
            {[
              { label: 'Documenten', ...updateData.kpis.documenten, prefix: '' },
              { label: 'LinkedIn Posts', ...updateData.kpis.linkedinPosts, prefix: '' },
              { label: 'Leads', ...updateData.kpis.leads, prefix: '' },
              { label: 'Klanten', ...updateData.kpis.klanten, prefix: '' },
              { label: 'MRR', ...updateData.kpis.mrr, prefix: '€' },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-xl p-4 border border-charcoal/10">
                <p className="text-xs text-charcoal/50 uppercase tracking-wider">{kpi.label}</p>
                <p className={`font-mono text-2xl font-medium mt-1 ${kpi.current >= kpi.target ? 'text-teal' : 'text-charcoal'}`}>
                  {kpi.prefix}{kpi.current}
                </p>
                <p className="text-xs text-charcoal/40 mt-1">Target: {kpi.prefix}{kpi.target}</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-12 gap-6">
          {/* Left column */}
          <div className="col-span-4 space-y-6">
            {/* Progress */}
            {updateData && (
              <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                <h2 className="font-headline font-bold text-lg mb-4">Voortgang</h2>
                <div className="space-y-6">
                  {/* Done */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <h3 className="font-medium text-sm text-emerald-700">Done ({updateData.tasks.done.length})</h3>
                    </div>
                    <div className="ml-4 space-y-1">
                      {updateData.tasks.done.map((task) => (
                        <div key={task} className="flex items-center gap-2 text-sm text-charcoal/50">
                          <span className="text-emerald-500">✓</span>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* In Progress */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-teal" />
                      <h3 className="font-medium text-sm text-teal">In Progress ({updateData.tasks.inProgress.length})</h3>
                    </div>
                    <div className="ml-4 space-y-1">
                      {updateData.tasks.inProgress.map((task) => (
                        <div key={task} className="flex items-center gap-2 text-sm">
                          <span className="text-teal">→</span>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Todo */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-charcoal/20" />
                      <h3 className="font-medium text-sm text-charcoal/50">Todo ({updateData.tasks.todo.length})</h3>
                    </div>
                    <div className="ml-4 space-y-1">
                      {updateData.tasks.todo.map((task) => (
                        <div key={task} className="flex items-center gap-2 text-sm text-charcoal/40">
                          <span>○</span>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Activity Log */}
            {updateData && (
              <div className="bg-white rounded-xl p-6 border border-charcoal/10">
                <h2 className="font-headline font-bold text-lg mb-4">Activity Log</h2>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {updateData.updates.map((item, i) => (
                    <div key={i} className={`border-l-2 pl-3 py-1 ${i === 0 ? 'border-teal' : 'border-charcoal/10'}`}>
                      <p className="text-xs text-charcoal/40 font-mono">{item.time}</p>
                      <p className="text-sm font-medium">{item.action}</p>
                      <p className="text-xs text-charcoal/50">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - Documents */}
          <div className="col-span-8">
            <div className="bg-white rounded-xl border border-charcoal/10 overflow-hidden">
              <div className="p-6 border-b border-charcoal/10">
                <h2 className="font-headline font-bold text-lg">Documenten</h2>
                <p className="text-sm text-charcoal/50 mt-1">Klik om te lezen</p>
              </div>
              
              {!activeDoc ? (
                <div className="p-6 grid grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => loadDocument(doc.id)}
                      className="text-left p-4 rounded-lg border border-charcoal/10 hover:border-teal/50 hover:bg-teal/5 transition-all"
                    >
                      <h3 className="font-headline font-medium">{doc.title}</h3>
                      <p className="text-sm text-charcoal/50 mt-1">{doc.description}</p>
                      <p className="text-xs text-charcoal/30 mt-2 font-mono">{doc.file}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  <div className="px-6 py-3 bg-charcoal/5 flex items-center justify-between">
                    <span className="font-mono text-sm">{documents.find(d => d.id === activeDoc)?.file}</span>
                    <button onClick={() => setActiveDoc(null)} className="text-sm text-teal hover:underline">
                      ← Terug
                    </button>
                  </div>
                  <div className="p-6">
                    {loadingDoc ? (
                      <p className="text-charcoal/50">Laden...</p>
                    ) : (
                      <pre className="whitespace-pre-wrap text-sm font-mono bg-charcoal/5 p-4 rounded-lg overflow-auto max-h-[600px]">
                        {docContent}
                      </pre>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
