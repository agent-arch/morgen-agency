#!/bin/bash
# Sanity Setup Script voor heymorgen.agency
# Run dit script om Sanity te koppelen

echo "🚀 Morgen Agency - Sanity Setup"
echo "================================"
echo ""

# Check if already configured
if [ -f .env.local ] && grep -q "NEXT_PUBLIC_SANITY_PROJECT_ID" .env.local; then
    echo "✅ Sanity lijkt al geconfigureerd te zijn!"
    grep "NEXT_PUBLIC_SANITY_PROJECT_ID" .env.local
    exit 0
fi

echo "Stap 1: Inloggen bij Sanity..."
sanity login

echo ""
echo "Stap 2: Project aanmaken..."
echo "Kies 'Create new project' en noem het 'morgen-agency'"
echo ""

# Create project via CLI
sanity projects create --display-name "morgen-agency" 2>/dev/null

echo ""
echo "Voer je Project ID in (te vinden op sanity.io/manage):"
read -p "Project ID: " PROJECT_ID

# Create .env.local
cat > .env.local << EOF
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=$PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
EOF

echo ""
echo "✅ .env.local aangemaakt!"
echo ""
echo "Stap 3: Studio starten..."
echo "Run: npm run dev"
echo "Ga naar: http://localhost:3000/studio"
echo ""
echo "🎉 Done! Je kunt nu content beheren op /studio"
