'use client'

import { useState, useEffect } from 'react'

// Password protection
const CORRECT_PASSWORD = 'nodefy123'

// Activity log
const activityLog = [
  { date: '2026-02-11 21:55', action: 'Google Workspace guide', detail: 'Setup instructies voor email' },
  { date: '2026-02-11 21:55', action: 'LinkedIn setup guide', detail: 'Company page + eerste 5 posts' },
  { date: '2026-02-11 21:55', action: 'Domein opties', detail: '8 alternatieven voor morgen.agency' },
  { date: '2026-02-11 21:40', action: 'Intern dashboard live', detail: 'Password protected /intern' },
  { date: '2026-02-11 21:36', action: 'Content Agent voltooid', detail: '20 LinkedIn posts + lead magnets' },
  { date: '2026-02-11 21:35', action: 'Outreach Agent voltooid', detail: 'Playbook met templates' },
  { date: '2026-02-11 21:34', action: 'ICP Agent voltooid', detail: '5 buyer personas' },
  { date: '2026-02-11 21:34', action: 'Ads Agent voltooid', detail: '€500 budget strategie' },
  { date: '2026-02-11 21:30', action: 'Masterplan geschreven', detail: 'Volledige roadmap' },
  { date: '2026-02-11 20:52', action: 'Scale tier toegevoegd', detail: '3e pricing optie' },
  { date: '2026-02-11 20:33', action: 'Website v2 live', detail: 'Verbeterde homepage + /propositie' },
  { date: '2026-02-11 18:45', action: 'Website v1 live', detail: 'Eerste versie morgen.agency' },
  { date: '2026-02-11 18:00', action: 'Brand Agent voltooid', detail: 'Brandbook compleet' },
  { date: '2026-02-11 17:59', action: 'Propositie Agent voltooid', detail: 'Pricing & diensten' },
  { date: '2026-02-11 17:54', action: 'Project gestart', detail: 'OpenClaw Agency initiated' },
]

// Documents data
const documents = [
  {
    id: 'masterplan',
    title: 'MASTERPLAN',
    description: 'Volledige roadmap, fases, milestones en KPIs',
    status: 'live',
    file: 'MASTERPLAN.md',
  },
  {
    id: 'propositie',
    title: 'PROPOSITIE',
    description: 'Pricing, diensten, doelgroep, proces',
    status: 'live',
    file: 'PROPOSITIE.md',
  },
  {
    id: 'brandbook',
    title: 'BRANDBOOK',
    description: 'Kleuren, fonts, tone of voice, logo',
    status: 'live',
    file: 'BRANDBOOK.md',
  },
  {
    id: 'icp',
    title: 'ICP',
    description: '5 buyer personas, communities, lead scoring',
    status: 'live',
    file: 'ICP.md',
  },
  {
    id: 'outreach',
    title: 'OUTREACH PLAYBOOK',
    description: 'LinkedIn, cold email, partnerships, templates',
    status: 'live',
    file: 'OUTREACH-PLAYBOOK.md',
  },
  {
    id: 'content',
    title: 'CONTENT CALENDAR',
    description: '20 posts, lead magnets, nurture sequence',
    status: 'live',
    file: 'CONTENT-CALENDAR.md',
  },
  {
    id: 'ads',
    title: 'ADS STRATEGY',
    description: '€500 budget, audiences, creatives, week 1 plan',
    status: 'live',
    file: 'ADS-STRATEGY.md',
  },
  {
    id: 'domein',
    title: 'DOMEIN OPTIES',
    description: '8 alternatieven voor morgen.agency',
    status: 'new',
    file: 'DOMEIN-OPTIES.md',
  },
  {
    id: 'linkedin',
    title: 'LINKEDIN SETUP',
    description: 'Company page, posts, engagement strategie',
    status: 'new',
    file: 'LINKEDIN-SETUP.md',
  },
  {
    id: 'workspace',
    title: 'GOOGLE WORKSPACE',
    description: 'Email setup instructies',
    status: 'new',
    file: 'GOOGLE-WORKSPACE-SETUP.md',
  },
]

// Progress data
const phases = [
  {
    name: 'Fase 1: Fundament',
    status: 'done',
    items: [
      { task: 'Propositie uitwerken', done: true },
      { task: 'Brandbook maken', done: true },
      { task: 'Website bouwen', done: true },
      { task: 'ICP definiëren', done: true },
      { task: 'Domein kopen', done: false },
    ],
  },
  {
    name: 'Fase 2: Acquisitie',
    status: 'active',
    items: [
      { task: 'Outreach playbook', done: true },
      { task: 'Content strategie', done: true },
      { task: 'Ads strategie', done: true },
      { task: 'LinkedIn starten', done: false },
      { task: 'Eerste outreach', done: false },
      { task: 'Ads live', done: false },
    ],
  },
  {
    name: 'Fase 3: Operatie',
    status: 'pending',
    items: [
      { task: 'Intake systeem', done: false },
      { task: 'Onboarding proces', done: false },
      { task: 'Campaign management', done: false },
      { task: 'Reporting systeem', done: false },
      { task: 'Eerste klant', done: false },
    ],
  },
]

// KPIs
const kpis = [
  { label: 'Documenten', value: '7/7', target: '7', color: 'teal' },
  { label: 'Leads', value: '0', target: '50', color: 'charcoal' },
  { label: 'Gesprekken', value: '0', target: '5', color: 'charcoal' },
  { label: 'Klanten', value: '0', target: '1', color: 'charcoal' },
  { label: 'MRR', value: '€0', target: '€500', color: 'charcoal' },
]

export default function InternPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [activeDoc, setActiveDoc] = useState<string | null>(null)
  const [docContent, setDocContent] = useState<string>('')
  const [loadingDoc, setLoadingDoc] = useState(false)

  // Check localStorage for session
  useEffect(() => {
    const saved = localStorage.getItem('morgen-intern-auth')
    if (saved === 'true') {
      setAuthenticated(true)
    }
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

  // Login screen
  if (!authenticated) {
    return (
      <main className="min-h-screen bg-warm-bg flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/10 w-full max-w-sm">
          <div className="text-center mb-6">
            <span className="font-headline text-2xl font-bold text-teal">morgen</span>
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
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-teal hover:bg-teal/90 text-white font-headline font-medium rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    )
  }

  // Dashboard
  return (
    <main className="min-h-screen bg-warm-bg">
      {/* Header */}
      <header className="bg-white border-b border-charcoal/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-headline text-xl font-bold text-teal">morgen</span>
            <span className="text-coral text-xl">.</span>
            <span className="text-sm text-charcoal/50 ml-2">Intern Dashboard</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-charcoal/50 hover:text-charcoal"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* KPIs */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-xl p-4 border border-charcoal/10">
              <p className="text-xs text-charcoal/50 uppercase tracking-wider">{kpi.label}</p>
              <p className={`font-mono text-2xl font-medium mt-1 ${kpi.color === 'teal' ? 'text-teal' : 'text-charcoal'}`}>
                {kpi.value}
              </p>
              <p className="text-xs text-charcoal/40 mt-1">Target: {kpi.target}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left column - Progress & Activity */}
          <div className="col-span-4 space-y-6">
            {/* Progress */}
            <div className="bg-white rounded-xl p-6 border border-charcoal/10">
              <h2 className="font-headline font-bold text-lg mb-4">Voortgang</h2>
              <div className="space-y-6">
                {phases.map((phase) => (
                  <div key={phase.name}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${
                        phase.status === 'done' ? 'bg-emerald-500' :
                        phase.status === 'active' ? 'bg-teal' : 'bg-charcoal/20'
                      }`} />
                      <h3 className="font-medium text-sm">{phase.name}</h3>
                    </div>
                    <div className="ml-4 space-y-1">
                      {phase.items.map((item) => (
                        <div key={item.task} className="flex items-center gap-2 text-sm">
                          {item.done ? (
                            <span className="text-emerald-500">✓</span>
                          ) : (
                            <span className="text-charcoal/30">○</span>
                          )}
                          <span className={item.done ? 'text-charcoal/50' : 'text-charcoal'}>
                            {item.task}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-white rounded-xl p-6 border border-charcoal/10">
              <h2 className="font-headline font-bold text-lg mb-4">Activity Log</h2>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {activityLog.map((item, i) => (
                  <div key={i} className="border-l-2 border-teal/20 pl-3 py-1">
                    <p className="text-xs text-charcoal/40 font-mono">{item.date}</p>
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-charcoal/50">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Documents */}
          <div className="col-span-8">
            <div className="bg-white rounded-xl border border-charcoal/10 overflow-hidden">
              <div className="p-6 border-b border-charcoal/10">
                <h2 className="font-headline font-bold text-lg">Documenten</h2>
                <p className="text-sm text-charcoal/50 mt-1">Klik op een document om te lezen</p>
              </div>
              
              {!activeDoc ? (
                <div className="p-6 grid grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => loadDocument(doc.id)}
                      className="text-left p-4 rounded-lg border border-charcoal/10 hover:border-teal/50 hover:bg-teal/5 transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-headline font-medium">{doc.title}</h3>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                          {doc.status}
                        </span>
                      </div>
                      <p className="text-sm text-charcoal/50 mt-1">{doc.description}</p>
                      <p className="text-xs text-charcoal/30 mt-2 font-mono">{doc.file}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  <div className="px-6 py-3 bg-charcoal/5 flex items-center justify-between">
                    <span className="font-mono text-sm">{documents.find(d => d.id === activeDoc)?.file}</span>
                    <button
                      onClick={() => setActiveDoc(null)}
                      className="text-sm text-teal hover:underline"
                    >
                      ← Terug naar overzicht
                    </button>
                  </div>
                  <div className="p-6">
                    {loadingDoc ? (
                      <p className="text-charcoal/50">Laden...</p>
                    ) : (
                      <div className="prose prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap text-sm font-mono bg-charcoal/5 p-4 rounded-lg overflow-auto max-h-[600px]">
                          {docContent}
                        </pre>
                      </div>
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
