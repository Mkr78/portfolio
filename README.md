# Portfolio Mahmoud Mohamed

Portfolio bilingue FR/EN pour un profil Big Data, IA et fullstack sécurisé.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes
- Mermaid
- Contenu éditable dans `src/content/fr.json` et `src/content/en.json`

## Développement local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Vérifications

```bash
npm run validate:content
npm run lint
npm run build
```

Ou tout lancer :

```bash
npm run check
```

## Maintenance du contenu

Avant d'ajouter ou modifier un projet, une expérience ou le parcours académique, lire :

`docs/content-guide.md`

Les données principales sont dans :

- `src/content/fr.json`
- `src/content/en.json`

## Déploiement recommandé : Vercel

1. Créer un dépôt Git propre depuis ce dossier.
2. Pousser le projet sur GitHub.
3. Importer le dépôt dans Vercel.
4. Framework : Next.js.
5. Build command : `npm run build`.
6. Ajouter les variables d'environnement :
   - `NEXT_PUBLIC_SITE_URL=https://votre-url.vercel.app`

Vercel fournit HTTPS automatiquement, CDN, previews par branche et une URL gratuite en `.vercel.app`.

## Sécurité

- Les fichiers `.env*` sont ignorés par Git.
- `.env.example` documente les variables publiques attendues.
- Les headers de base sont configurés dans `next.config.ts`.
- Le contact se fait par email direct, sans formulaire ni service tiers.
- Le CV n'est pas publié pour l'instant. Il sera ajouté dans `public/cv.pdf` après hébergement, une fois l'URL publique intégrée au PDF.

## Pages

- `/`
- `/projects`
- `/projects/[slug]`
- `/about`
- `/skills`
- `/experience`
- `/contact`
