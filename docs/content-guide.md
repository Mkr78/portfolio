# Guide de contenu

Ce portfolio est piloté par deux fichiers :

- `src/content/fr.json`
- `src/content/en.json`

Pour chaque ajout, il faut maintenir les deux langues cohérentes.

## Ajouter un projet

1. Ajouter le même `slug` dans `projects` côté FR et EN.
2. Garder un slug court, en kebab-case : `pipeline-musique`, `assistant-rag`, `dashboard-rh`.
3. Remplir tous les champs obligatoires :
   - `slug`
   - `title`
   - `tagline`
   - `type`
   - `summary`
   - `tags`
   - `problem`
   - `solution`
   - `architecture`
   - `stack`
   - `highlights`
   - `results`
   - `learnings`
4. Ajouter `security` dès que le projet contient API, données, auth, fichier, IA ou déploiement.
5. Ajouter `status` pour clarifier l'état : `Démo produit`, `Prototype académique`, `À publier`, etc.
6. Ne pas mettre de liens vides. Si une démo n'existe pas, supprimer `demo`.
7. Limiter `tags` à 3 maximum. Utiliser des familles larges plutôt que des technos isolées :
   - `Big Data`
   - `Streaming`
   - `IA`
   - `Fullstack`
   - `API`
   - `Sécurité`
   - `Dashboard`
   - `Python`

## Choisir les projets à mettre en avant

`featuredProjects` doit rester court. Recommandation : 3 projets maximum.

Priorité actuelle du profil :

1. Big Data / streaming / lakehouse
2. IA appliquée / NLP / recommandation / RAG
3. Fullstack sécurisé / APIs / dashboards

## Ajouter une expérience

Chaque expérience doit expliquer :

- le contexte
- les responsabilités concrètes
- les réalisations
- la stack
- les pratiques de sécurité ou qualité

Éviter les formulations trop génériques comme "participation à un projet". Préférer une action démontrable : "Conception d'APIs REST", "Déploiement Docker", "Traitement Kafka/Spark".

## Validation

Avant commit :

```bash
npm run validate:content
npm run lint
npm run build
```

Ou directement :

```bash
npm run check
```
