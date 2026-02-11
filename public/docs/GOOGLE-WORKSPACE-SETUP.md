# Google Workspace Setup voor morgen.agency

## WAAROM GOOGLE WORKSPACE

- Professionele email (team@morgen.agency)
- Google Drive voor documenten
- Google Meet voor klantgesprekken
- Google Calendar voor scheduling
- Professionele uitstraling

---

## KOSTEN

| Plan | Prijs | Storage | Features |
|------|-------|---------|----------|
| Business Starter | €5,75/user/mnd | 30GB | Email, Drive, Meet |
| Business Standard | €11,50/user/mnd | 2TB | + Recording, meer storage |

**Aanbeveling:** Business Starter (€5,75/mnd) is voldoende voor start.

---

## SETUP STAPPEN

### 1. Account Aanmaken
1. Ga naar https://workspace.google.com/
2. Klik "Get Started"
3. Vul bedrijfsgegevens in:
   - Business name: morgen.agency
   - Number of employees: Just you
   - Country: Netherlands
4. Kies admin email (wordt team@morgen.agency of admin@morgen.agency)

### 2. Domein Verifiëren
1. Google vraagt om domein verificatie
2. Voeg TXT record toe aan DNS:
   ```
   Type: TXT
   Host: @
   Value: google-site-verification=XXXX (Google geeft dit)
   ```
3. Wacht 5-10 minuten voor propagatie
4. Klik "Verify"

### 3. MX Records Instellen
Voeg deze MX records toe aan je domein DNS:

| Priority | Mail Server |
|----------|-------------|
| 1 | ASPMX.L.GOOGLE.COM |
| 5 | ALT1.ASPMX.L.GOOGLE.COM |
| 5 | ALT2.ASPMX.L.GOOGLE.COM |
| 10 | ALT3.ASPMX.L.GOOGLE.COM |
| 10 | ALT4.ASPMX.L.GOOGLE.COM |

### 4. SPF Record (voor email deliverability)
```
Type: TXT
Host: @
Value: v=spf1 include:_spf.google.com ~all
```

### 5. DKIM Instellen
1. Google Workspace Admin Console → Apps → Google Workspace → Gmail
2. Authenticate email → Generate new record
3. Voeg DKIM record toe aan DNS

---

## EMAIL ADRESSEN

| Adres | Gebruik |
|-------|---------|
| team@morgen.agency | Hoofdadres, client communicatie |
| support@morgen.agency | Alias voor support vragen |
| admin@morgen.agency | Admin/billing |

---

## SIGNATURES

### Email Signature Template
```html
—
morgen.agency
Professioneel adverteren, zonder agency-prijzen.

🌐 morgen.agency
📧 team@morgen.agency
```

---

## NA SETUP

- [ ] Test email verzenden/ontvangen
- [ ] Signature instellen
- [ ] Google Drive folder structuur maken
- [ ] Google Calendar delen voor scheduling
- [ ] 2FA inschakelen

---

## FOLDER STRUCTUUR (Google Drive)

```
morgen.agency/
├── Klanten/
│   └── [Klantnaam]/
│       ├── Onboarding/
│       ├── Campagnes/
│       ├── Reports/
│       └── Creative/
├── Templates/
│   ├── Onboarding/
│   ├── Reports/
│   └── Proposals/
├── Marketing/
│   ├── Content/
│   ├── Ads/
│   └── Assets/
└── Admin/
    ├── Contracts/
    └── Finance/
```

---

## TIMELINE

| Stap | Tijd |
|------|------|
| Account aanmaken | 10 min |
| Domein verifiëren | 15 min (+ wachten DNS) |
| MX records | 10 min (+ 1-24u propagatie) |
| Email testen | 5 min |

**Totaal:** ~40 min actief werk, 1-24u wachten op DNS propagatie.
