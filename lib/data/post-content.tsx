// /lib/data/post-content.tsx
import React from 'react';

// Interface pour le contenu détaillé
export interface PostContent {
    slug: string;
    content: React.ReactNode;
}

// Composant pour le code highlighting
const CodeBlock: React.FC<{ children: React.ReactNode; language?: string }> = ({ children, language = 'javascript' }) => (
    <div className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto">
        <div className="text-xs text-gray-400 mb-2">{language}</div>
        <pre className="text-green-400 font-mono text-sm">
            <code>{children}</code>
        </pre>
    </div>
);

// Composants réutilisables pour le styling
const Article: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <article className="max-w-4xl mx-auto prose prose-lg">{children}</article>
);

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{children}</h1>
);

const Subtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4 border-b-2 border-blue-500 pb-2">{children}</h2>
);

const Subheading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-xl md:text-2xl font-medium text-gray-700 mt-6 mb-3">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">{children}</p>
);

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <strong className="font-semibold text-gray-800">{children}</strong>
);

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ul className="list-none space-y-3 my-6">{children}</ul>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start space-x-3">
        <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5"></span>
        <span className="text-gray-600">{children}</span>
    </li>
);

const NumberedList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ol className="list-decimal list-inside space-y-3 my-6 text-gray-600">{children}</ol>
);

const NumberedListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="ml-2">{children}</li>
);

const InlineCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">{children}</code>
);

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="bg-yellow-100 px-1 py-0.5 rounded">{children}</span>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg ${className}`}>
        {children}
    </div>
);

// Un objet mappé par slug pour un accès rapide
export const postDetails: Record<string, React.ReactNode> = {
    "guide-complet-pour-optimiser-les-performances-react": (
        <Article>
            <Title>Optimisation des performances React: Le guide ultime</Title>

            <Paragraph>
                React est aujourd’hui l’une des bibliothèques JavaScript les plus utilisées. Sa rapidité
                et sa flexibilité séduisent les développeurs. Pourtant, même une application React bien construite
                peut vite devenir lente si certaines optimisations ne sont pas respectées.
                Dans ce guide, nous allons explorer les meilleures pratiques pour booster vos applications React.
            </Paragraph>

            <Subtitle>1. Comprendre le re-render : la base de tout</Subtitle>
            <Paragraph>
                Un <Strong>re-rendu</Strong> (re-render) est déclenché à chaque fois que l’état (<InlineCode>state</InlineCode>)
                ou les propriétés (<InlineCode>props</InlineCode>) d’un composant changent. Mais attention : si un parent
                se re-render, ses enfants se re-render aussi, même si leurs données n’ont pas changé.
                C’est souvent la cause principale des ralentissements.
            </Paragraph>

            <Subtitle>2. Utiliser la memoization intelligemment</Subtitle>
            <Paragraph>
                La <Strong>memoization</Strong> est une technique qui permet de “mémoriser” des valeurs ou
                des composants pour éviter de recalculer/rerendre inutilement :
            </Paragraph>

            <List>
                <ListItem>
                    <InlineCode>React.memo</InlineCode> : empêche le re-render d’un composant fonctionnel
                    si ses <InlineCode>props</InlineCode> n’ont pas changé.
                </ListItem>
                <ListItem>
                    <InlineCode>useMemo</InlineCode> : mémorise le résultat d’un calcul coûteux.
                </ListItem>
                <ListItem>
                    <InlineCode>useCallback</InlineCode> : mémorise une fonction pour éviter de la recréer
                    à chaque re-render.
                </ListItem>
            </List>

            <CodeBlock language="javascript">
                {`// Exemple avec React.memo
const ProductList = React.memo(({ products }) => {
  console.log("Render ProductList");
  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
});`}
            </CodeBlock>

            <Subtitle>3. Découper vos composants</Subtitle>
            <Paragraph>
                Plus un composant est gros, plus il y a de chances qu’il se re-render inutilement.
                Découper en composants plus petits et spécialisés permet de mieux contrôler les re-renders
                et d’optimiser l’affichage.
            </Paragraph>

            <Subtitle>4. Lazy Loading et Code Splitting</Subtitle>
            <Paragraph>
                Charger tout votre code dès le départ est une mauvaise pratique. Avec
                <InlineCode>React.lazy</InlineCode> et <InlineCode>Suspense</InlineCode>, vous pouvez
                charger vos composants uniquement lorsqu’ils sont nécessaires.
            </Paragraph>

            <CodeBlock language="javascript">
                {`// Exemple de lazy loading
const Checkout = React.lazy(() => import("./Checkout"));

function App() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Checkout />
    </Suspense>
  );
}`}
            </CodeBlock>

            <Subtitle>5. Virtualisation des listes</Subtitle>
            <Paragraph>
                Lorsque vous affichez de longues listes (par exemple 10 000 lignes), le DOM peut vite devenir
                ingérable. La solution : la <Strong>virtualisation</Strong>. Avec des librairies comme
                <InlineCode>react-window</InlineCode> ou <InlineCode>react-virtualized</InlineCode>,
                seules les lignes visibles sont rendues.
            </Paragraph>

            <Subtitle>6. Utiliser un profiler</Subtitle>
            <Paragraph>
                Avant d’optimiser à l’aveugle, il faut mesurer. React propose un outil intégré : le
                <Strong>React Profiler</Strong> (via React DevTools). Il permet d’identifier les composants
                qui consomment le plus de ressources et de comprendre pourquoi.
            </Paragraph>

            <Card>
                <Subheading>Conclusion</Subheading>
                <Paragraph>
                    Optimiser une application React, ce n’est pas empiler des hacks, mais comprendre
                    comment React gère les re-renders. Combinez <Strong>memoization</Strong>,
                    <Strong>lazy loading</Strong>, <Strong>virtualisation</Strong> et une bonne architecture,
                    et vos applications seront rapides et scalables.
                </Paragraph>
            </Card>
        </Article>
    ),


    "mongodb-vs-postgresql-quel-choix-en-2025": (
        <Article>
            <Title>MongoDB ou PostgreSQL : Le Match de 2025</Title>

            <Paragraph>
                Le choix d’une base de données est une décision stratégique pour tout projet. En 2025,
                deux technologies dominent les débats : <Strong>PostgreSQL</Strong>, le roi du SQL relationnel,
                et <Strong>MongoDB</Strong>, la star du NoSQL orienté documents.
                Les deux sont puissants, mais leurs forces et faiblesses diffèrent.
                Ce guide vous aidera à déterminer quelle solution correspond le mieux à vos besoins.
            </Paragraph>

            <Subtitle>1. PostgreSQL : le champion du relationnel</Subtitle>
            <Paragraph>
                PostgreSQL est une base de données relationnelle open-source qui respecte les principes
                <Strong> ACID</Strong> (Atomicité, Cohérence, Isolation, Durabilité).
                Cela en fait un choix sûr pour toutes les applications nécessitant une forte intégrité des données.
            </Paragraph>

            <List>
                <ListItem>
                    <Strong>Transactions robustes</Strong> : idéal pour la finance, la comptabilité ou tout système critique.
                </ListItem>
                <ListItem>
                    <Strong>Relations complexes</Strong> : gestion efficace des schémas normalisés et des jointures multiples.
                </ListItem>
                <ListItem>
                    <Strong>Écosystème mature</Strong> : supporte les vues matérialisées, triggers, procédures stockées, etc.
                </ListItem>
            </List>

            <CodeBlock language="sql">
                {`-- Exemple PostgreSQL : relation client/commande
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100),
    email VARCHAR(150) UNIQUE
);

CREATE TABLE commandes (
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES clients(id),
    montant DECIMAL(10,2),
    date TIMESTAMP DEFAULT NOW()
);`
                }
            </CodeBlock>

            <Subtitle>2. MongoDB : la flexibilité du NoSQL</Subtitle>
            <Paragraph>
                MongoDB est une base de données orientée documents (format <InlineCode>JSON</InlineCode>-like).
                Sa force principale est la <Strong>flexibilité</Strong> : pas de schéma rigide, vous adaptez vos
                collections à vos besoins.
            </Paragraph>

            <List>
                <ListItem>
                    <Strong>Schémas dynamiques</Strong> : ajoutez facilement de nouveaux champs sans migration complexe.
                </ListItem>
                <ListItem>
                    <Strong>Scalabilité horizontale</Strong> : sharding natif pour distribuer vos données sur plusieurs serveurs.
                </ListItem>
                <ListItem>
                    <Strong>Idéal pour le temps réel</Strong> : très performant pour la collecte massive de données
                    (IoT, analytics, logs).
                </ListItem>
            </List>

            <CodeBlock language="javascript">
                {`// Exemple MongoDB : document client avec commandes imbriquées
{
    "_id": ObjectId("650f0a..."),
    "nom": "Dupont",
    "email": "dupont@example.com",
    "commandes": [
        { "date": "2025-09-01", "montant": 200.50 },
        { "date": "2025-09-15", "montant": 150.00 }
    ]
}`
                }
            </CodeBlock>

            <Subtitle>3. Performances et cas d’usage</Subtitle>
            <Subheading>Quand choisir PostgreSQL ?</Subheading>
            <Paragraph>
                ➝ Lorsque vos données sont fortement liées, que la cohérence est critique et que
                vous avez besoin de <Strong>requêtes complexes</Strong> (SQL avancé).
                Exemples : systèmes bancaires, ERP, e-commerce avec inventaire complexe.
            </Paragraph>

            <Subheading>Quand choisir MongoDB ?</Subheading>
            <Paragraph>
                ➝ Lorsque vos données évoluent rapidement, que vous stockez de gros volumes non
                structurés, ou que vous devez <Strong>scaler horizontalement</Strong> dès le départ.
                Exemples : plateformes de contenu, applications IoT, chat en temps réel, big data.
            </Paragraph>

            <Subtitle>4. Tendances 2025</Subtitle>
            <Paragraph>
                En 2025, la frontière s’estompe :
                PostgreSQL ajoute des fonctionnalités <Strong>NoSQL</Strong> (JSONB, index GIN),
                tandis que MongoDB améliore ses capacités de <Strong>transactions ACID</Strong>.
                Le choix dépend donc moins d’une opposition stricte que d’une question de
                <Highlight>priorité projet</Highlight>.
            </Paragraph>

            <Card className="bg-green-50 border-green-500">
                <Subheading>Verdict</Subheading>
                <Paragraph>
                    Si vos données nécessitent stabilité et intégrité, optez pour <Strong>PostgreSQL</Strong>.
                    Si vous misez sur l’agilité et la scalabilité, <Strong>MongoDB</Strong> sera votre allié.
                    Et dans certains projets hybrides, les deux peuvent même coexister.
                </Paragraph>
            </Card>
        </Article>
    ),


    "ia-generative-dans-le-developpement-logiciel": (
        <Article>
            <Title>L'IA générative : Le futur du codage</Title>

            <Paragraph>
                L’<Strong>IA générative</Strong> bouleverse le développement logiciel. Des outils comme
                <Strong> GitHub Copilot</Strong>, <Strong>ChatGPT</Strong> ou encore <Strong>CodeWhisperer</Strong>
                transforment la manière dont les développeurs écrivent, testent et maintiennent leur code.
                Mais comment ces technologies fonctionnent-elles ? Quels en sont les avantages, les limites,
                et surtout : que faut-il en attendre en 2025 ?
            </Paragraph>

            <Subtitle>1. Qu’est-ce que l’IA générative appliquée au code ?</Subtitle>
            <Paragraph>
                L’IA générative repose sur des modèles de langage capables de produire du texte, ici
                du <Strong>code source</Strong>, à partir d’un contexte.
                Par exemple : vous écrivez un commentaire, et l’IA vous propose directement
                une fonction complète en JavaScript, Python ou autre langage.
            </Paragraph>

            <CodeBlock language="javascript">
                {`// Exemple avec GitHub Copilot
// Fonction qui calcule la factorielle d'un nombre
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`}
            </CodeBlock>

            <Paragraph>
                Ce code peut être généré automatiquement par un modèle, à partir du simple commentaire
                <InlineCode>"// Fonction qui calcule la factorielle d'un nombre"</InlineCode>.
            </Paragraph>

            <Subtitle>2. Les avantages concrets pour les développeurs</Subtitle>
            <NumberedList>
                <NumberedListItem>
                    <Strong>Gain de temps</Strong> : génération de code boilerplate répétitif en quelques secondes.
                </NumberedListItem>
                <NumberedListItem>
                    <Strong>Exploration</Strong> : découverte de nouvelles librairies, APIs et patterns.
                </NumberedListItem>
                <NumberedListItem>
                    <Strong>Amélioration de la productivité</Strong> : l’IA agit comme un pair-programmer
                    toujours disponible.
                </NumberedListItem>
                <NumberedListItem>
                    <Strong>Accessibilité</Strong> : les juniors et autodidactes peuvent progresser plus vite
                    grâce à des suggestions guidées.
                </NumberedListItem>
            </NumberedList>

            <Subtitle>3. Les limites et défis à surmonter</Subtitle>
            <Paragraph>
                Malgré ses atouts, l’IA générative n’est pas parfaite. Trois risques principaux ressortent :
            </Paragraph>

            <List>
                <ListItem>
                    <Strong>Qualité du code</Strong> : l’IA peut générer du code fonctionnel mais sous-optimal.
                </ListItem>
                <ListItem>
                    <Strong>Sécurité</Strong> : risque d’introduire des failles si le code n’est pas vérifié.
                </ListItem>
                <ListItem>
                    <Strong>Dépendance</Strong> : risque de sur-confiance, qui réduit la compréhension réelle du développeur.
                </ListItem>
            </List>

            <Card className="bg-orange-50 border-orange-500">
                <Subheading>⚠️ Bonnes pratiques</Subheading>
                <Paragraph>
                    Utilisez l’IA comme <Highlight>assistant</Highlight>, pas comme substitut.
                    Revoyez toujours le code généré, ajoutez des tests, et formez vos équipes à
                    maintenir un esprit critique.
                </Paragraph>
            </Card>

            <Subtitle>4. L’IA générative et le futur du métier</Subtitle>
            <Paragraph>
                En 2025, le rôle du développeur évolue. Moins de temps passé à écrire du code brut,
                plus de temps consacré à :
            </Paragraph>

            <List>
                <ListItem>
                    La <Strong>conception</Strong> et l’architecture logicielle.
                </ListItem>
                <ListItem>
                    La <Strong>revue</Strong> et l’amélioration du code produit (par l’IA ou par les pairs).
                </ListItem>
                <ListItem>
                    L’<Strong>innovation</Strong> : imaginer de nouvelles fonctionnalités, plutôt que
                    coder des bases répétitives.
                </ListItem>
            </List>

            <Subtitle>5. Les tendances à surveiller en 2025</Subtitle>
            <Paragraph>
                - Les IDE intelligents intégrant l’IA nativement (VS Code, JetBrains).
                - L’essor de <Strong>tests unitaires générés automatiquement</Strong>.
                - La montée en puissance des IA spécialisées par langage ou domaine métier (finance, santé, IoT).
                - Les discussions éthiques et légales autour de la propriété du code généré.
            </Paragraph>

            <Card>
                <Subheading>Conclusion</Subheading>
                <Paragraph>
                    L’IA générative n’est pas une menace mais une <Highlight>révolution</Highlight>.
                    Comme toute technologie, son impact dépend de la façon dont nous l’adoptons.
                    Les développeurs qui sauront combiner <Strong>compétences humaines</Strong> et
                    <Strong>puissance de l’IA</Strong> seront les mieux armés pour créer le logiciel du futur.
                </Paragraph>
            </Card>
        </Article>
    ),

    "creer-une-api-rest-avec-nodejs-et-express": (
        <Article>
            <Title>Créer une API REST avec Node.js et Express : Le Guide Ultime</Title>

            <Paragraph>
                Les <Strong>API REST</Strong> sont au cœur du web moderne. Elles permettent à des applications
                différentes de communiquer entre elles : site web, mobile, IoT…
                Avec <Strong>Node.js</Strong> et <Strong>Express</Strong>, il est possible de construire une
                API rapide, flexible et scalable en un temps record.
                Voici le <Highlight>guide ultime</Highlight> pour 2025.
            </Paragraph>

            <Subtitle>1. Qu’est-ce qu’une API REST ?</Subtitle>
            <Paragraph>
                Une API REST (Representational State Transfer) est une interface qui expose des
                <Strong>endpoints</Strong> pour effectuer des opérations CRUD (<Strong>C</Strong>reate,
                <Strong>R</Strong>ead, <Strong>U</Strong>pdate, <Strong>D</Strong>elete).
                Elle repose sur les méthodes HTTP (GET, POST, PUT, DELETE) et échange des données au format JSON.
            </Paragraph>

            <Subtitle>2. Installation de Node.js et Express</Subtitle>
            <Paragraph>
                Avant de commencer, assurez-vous d’avoir installé Node.js (v18+ recommandé en 2025).
                Ensuite, créez un projet et installez Express :
            </Paragraph>

            <CodeBlock language="bash">
                {`mkdir api-rest-node
cd api-rest-node
npm init -y
npm install express`}
            </CodeBlock>

            <Subtitle>3. Hello World avec Express</Subtitle>
            <CodeBlock language="javascript">
                {`const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue dans mon API REST !');
});

app.listen(port, () => {
  console.log(\`Serveur démarré sur http://localhost:\${port}\`);
});`}
            </CodeBlock>

            <Paragraph>
                Lancez votre serveur avec <InlineCode>node index.js</InlineCode> et ouvrez
                <InlineCode>http://localhost:3000</InlineCode>.
            </Paragraph>

            <Subtitle>4. Création d’un CRUD simple</Subtitle>
            <Paragraph>
                Imaginons une API pour gérer une liste d’articles (blog).
            </Paragraph>

            <CodeBlock language="javascript">
                {`let articles = [
  { id: 1, titre: "Introduction à Node.js" },
  { id: 2, titre: "Express pour les débutants" }
];

// Lire tous les articles
app.get('/articles', (req, res) => {
  res.json(articles);
});

// Lire un article par ID
app.get('/articles/:id', (req, res) => {
  const article = articles.find(a => a.id == req.params.id);
  article ? res.json(article) : res.status(404).send("Article non trouvé");
});

// Créer un nouvel article
app.post('/articles', (req, res) => {
  const newArticle = { id: articles.length + 1, ...req.body };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// Mettre à jour un article
app.put('/articles/:id', (req, res) => {
  const index = articles.findIndex(a => a.id == req.params.id);
  if (index !== -1) {
    articles[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(articles[index]);
  } else {
    res.status(404).send("Article non trouvé");
  }
});

// Supprimer un article
app.delete('/articles/:id', (req, res) => {
  articles = articles.filter(a => a.id != req.params.id);
  res.status(204).send();
});`}
            </CodeBlock>

            <Subtitle>5. Améliorer son API</Subtitle>
            <NumberedList>
                <NumberedListItem>
                    <Strong>Validation des données</Strong> : utiliser <InlineCode>Joi</InlineCode> ou
                    <InlineCode>express-validator</InlineCode>.
                </NumberedListItem>
                <NumberedListItem>
                    <Strong>Connexion à une base de données</Strong> : MongoDB, PostgreSQL, MySQL…
                </NumberedListItem>
                <NumberedListItem>
                    <Strong>Authentification</Strong> : mettre en place JWT ou OAuth2.
                </NumberedListItem>
                <NumberedListItem>
                    <Strong>Structurer le projet</Strong> : séparer routes, contrôleurs, modèles.
                </NumberedListItem>
            </NumberedList>

            <Card className="bg-green-50 border-green-500">
                <Subheading>Bonnes pratiques</Subheading>
                <Paragraph>
                    - Utilisez des <Highlight>middlewares</Highlight> pour gérer erreurs et logs.
                    - Versionnez votre API (<InlineCode>/api/v1</InlineCode>).
                    - Documentez avec <Strong>Swagger</Strong> ou <Strong>OpenAPI</Strong>.
                    - Ajoutez des tests unitaires (Jest, Mocha).
                </Paragraph>
            </Card>

            <Subtitle>6. Déploiement en 2025</Subtitle>
            <Paragraph>
                Les solutions modernes pour déployer une API REST incluent :
                - <Strong>Docker</Strong> pour la containerisation.
                - <Strong>Railway</Strong>, <Strong>Render</Strong> ou <Strong>Heroku</Strong> (simples).
                - <Strong>AWS Lambda</Strong> ou <Strong>Vercel</Strong> pour une approche serverless.
            </Paragraph>

            <Card>
                <Subheading>Conclusion</Subheading>
                <Paragraph>
                    Construire une API REST avec Node.js et Express est <Highlight>simple, rapide et puissant</Highlight>.
                    Ce guide vous a montré les bases : installation, création d’un CRUD, bonnes pratiques
                    et déploiement.
                    À partir d’ici, vous pouvez étendre votre API en ajoutant une base de données,
                    une authentification et une architecture scalable.
                </Paragraph>
            </Card>
        </Article>
    ),

    "css-grid-vs-flexbox-guide-pratique-2025": (
  <Article>
    <Title>CSS Grid vs Flexbox : Le Guide Pratique 2025</Title>

    <Paragraph>
      Quand on parle de <Strong>mise en page moderne</Strong>, deux technologies reviennent 
      systématiquement : <Strong>Flexbox</Strong> et <Strong>CSS Grid</Strong>.  
      Ces deux outils ont révolutionné le design web, mais chacun répond à des besoins différents.  
      Alors, en 2025, faut-il choisir <Highlight>Grid</Highlight> ou <Highlight>Flexbox</Highlight> ?  
      Voici le <Strong>guide pratique ultime</Strong> pour comprendre et maîtriser ces deux systèmes.
    </Paragraph>

    <Subtitle>1. Flexbox : la flexibilité en une dimension</Subtitle>
    <Paragraph>
      Flexbox (<InlineCode>display: flex;</InlineCode>) est pensé pour organiser les éléments 
      <Strong>en ligne</Strong> ou <Strong>en colonne</Strong>.  
      C’est idéal pour aligner, distribuer l’espace et gérer la réactivité sans calculs complexes.
    </Paragraph>

    <CodeBlock language="css">
{`/* Exemple simple avec Flexbox */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}
    </CodeBlock>

    <Paragraph>
      Avec Flexbox, le navigateur gère automatiquement la répartition de l’espace.  
      Pratique pour des <Strong>menus de navigation</Strong>, des <Strong>barres d’outils</Strong> 
      ou des <Strong>cartes alignées</Strong>.
    </Paragraph>

    <Subtitle>2. CSS Grid : la puissance en deux dimensions</Subtitle>
    <Paragraph>
      CSS Grid (<InlineCode>display: grid;</InlineCode>) est conçu pour créer des 
      <Strong>grilles bidimensionnelles</Strong>.  
      Il permet de placer des éléments à la fois sur l’axe des lignes et des colonnes, 
      avec une précision millimétrée.
    </Paragraph>

    <CodeBlock language="css">
{`/* Exemple simple avec Grid */
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
}`}
    </CodeBlock>

    <Paragraph>
      Idéal pour des <Strong>layouts complexes</Strong> : tableaux de bord, pages de magazines, 
      interfaces responsives avec plusieurs zones.
    </Paragraph>

    <Subtitle>3. Quand utiliser Flexbox ?</Subtitle>
    <List>
      <ListItem>Aligner des éléments dans un <Strong>header</Strong>.</ListItem>
      <ListItem>Créer une <Strong>barre de navigation</Strong>.</ListItem>
      <ListItem>Distribuer de l’espace entre des <Strong>boutons</Strong>.</ListItem>
      <ListItem>Gérer une <Strong>liste horizontale ou verticale</Strong>.</ListItem>
    </List>

    <Subtitle>4. Quand utiliser Grid ?</Subtitle>
    <List>
      <ListItem>Construire une <Strong>page entière</Strong> avec zones définies.</ListItem>
      <ListItem>Créer un <Strong>dashboard</Strong> avec sidebar et contenu.</ListItem>
      <ListItem>Positionner des cartes en <Strong>grille responsive</Strong>.</ListItem>
      <ListItem>Reproduire des <Strong>maquettes complexes</Strong>.</ListItem>
    </List>

    <Subtitle>5. Flexbox vs Grid : tableau comparatif</Subtitle>
    <Paragraph>
      Voici un résumé rapide des différences :
    </Paragraph>

    <CodeBlock language="plaintext">
{`Flexbox :             | CSS Grid :
----------------------+---------------------------
1D (ligne OU colonne) | 2D (lignes ET colonnes)
Alignements simples   | Layouts complexes
Menus, boutons        | Pages entières, dashboards
Réactivité rapide     | Structure puissante`}
    </CodeBlock>

    <Card className="bg-blue-50 border-blue-500">
      <Subheading>Astuce pratique</Subheading>
      <Paragraph>
        En 2025, la tendance est à la <Highlight>combinaison des deux</Highlight>.  
        Utilisez Grid pour la structure globale, et Flexbox à l’intérieur des sections 
        pour affiner l’alignement.
      </Paragraph>
    </Card>

    <Subtitle>6. Compatibilité et performances en 2025</Subtitle>
    <Paragraph>
      - Flexbox et Grid sont <Strong>compatibles avec tous les navigateurs modernes</Strong>.  
      - Les performances sont similaires, mais Grid réduit souvent le code CSS nécessaire.  
      - Pour la compatibilité rétro, Flexbox reste plus sûr, mais Grid est devenu standard.
    </Paragraph>

    <Card>
      <Subheading>Conclusion</Subheading>
      <Paragraph>
        <Strong>Flexbox</Strong> et <Strong>Grid</Strong> ne s’opposent pas : ils se complètent.  
        Le secret pour un <Highlight>design moderne en 2025</Highlight> est de savoir 
        quand utiliser l’un, l’autre… ou les deux ensemble.  
        Flexbox pour la <Strong>simplicité</Strong>, Grid pour la <Strong>puissance</Strong>.
      </Paragraph>
    </Card>
  </Article>
),


"optimiser-votre-seo-avec-nextjs": (
  <Article>
    <Title>Optimiser votre SEO avec Next.js : Le Guide Ultime 2025</Title>

    <Paragraph>
      Le <Strong>SEO</Strong> (Search Engine Optimization) est essentiel pour rendre vos projets visibles sur Google.  
      Avec <Strong>Next.js</Strong>, vous bénéficiez d’un framework moderne qui intègre des fonctionnalités avancées pour améliorer le référencement : 
      rendu côté serveur (SSR), génération statique (SSG), métadonnées dynamiques, etc.  
      Voici le <Highlight>guide ultime</Highlight> pour booster votre SEO avec Next.js en 2025.
    </Paragraph>

    <Subtitle>1. Pourquoi Next.js est un atout pour le SEO ?</Subtitle>
    <List>
      <ListItem>
        <Strong>SSR (Server-Side Rendering)</Strong> : le contenu est pré-rendu côté serveur et indexé rapidement par Google.
      </ListItem>
      <ListItem>
        <Strong>SSG (Static Site Generation)</Strong> : les pages statiques sont ultra rapides à charger, un signal fort pour le SEO.
      </ListItem>
      <ListItem>
        <Strong>Optimisation intégrée</Strong> : Next.js gère automatiquement le code-splitting, l’optimisation des images et des scripts.
      </ListItem>
    </List>

    <Subtitle>2. Gérer les balises meta et titres</Subtitle>
    <Paragraph>
      Les balises <InlineCode>&lt;title&gt;</InlineCode> et <InlineCode>&lt;meta&gt;</InlineCode> 
      sont cruciales pour le SEO. Next.js fournit un composant <InlineCode>Head</InlineCode>.
    </Paragraph>

    <CodeBlock language="javascript">
{`import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon site optimisé SEO avec Next.js</title>
        <meta name="description" content="Découvrez comment optimiser le SEO avec Next.js en 2025." />
      </Head>
      <h1>Bienvenue sur mon site</h1>
    </>
  );
}`}
    </CodeBlock>

    <Card className="bg-green-50 border-green-500">
      <Subheading>Astuce</Subheading>
      <Paragraph>
        En 2025, privilégiez <Highlight>app/</Highlight> et 
        <Highlight>generateMetadata</Highlight> avec Next.js 13+ pour centraliser vos métadonnées.
      </Paragraph>
    </Card>

    <Subtitle>3. Structurer son contenu avec des balises sémantiques</Subtitle>
    <Paragraph>
      L’utilisation de balises sémantiques (<InlineCode>&lt;header&gt;</InlineCode>, 
      <InlineCode>&lt;main&gt;</InlineCode>, <InlineCode>&lt;article&gt;</InlineCode>, 
      <InlineCode>&lt;footer&gt;</InlineCode>) facilite la compréhension du contenu par les moteurs de recherche.
    </Paragraph>

    <Subtitle>4. Optimiser les images avec Next.js</Subtitle>
    <Paragraph>
      Les images lourdes ralentissent votre site. Next.js propose le composant 
      <InlineCode>next/image</InlineCode> pour un chargement optimisé et lazy loading automatique.
    </Paragraph>

    <CodeBlock language="javascript">
{`import Image from "next/image";

export default function Exemple() {
  return (
    <Image 
      src="/seo.png" 
      alt="Optimisation SEO" 
      width={600} 
      height={400} 
      priority 
    />
  );
}`}
    </CodeBlock>

    <Subtitle>5. Générer un sitemap et robots.txt</Subtitle>
    <Paragraph>
      Pour améliorer l’indexation, générez automatiquement un <Strong>sitemap.xml</Strong> 
      et un <Strong>robots.txt</Strong>. Des packages comme 
      <InlineCode>next-sitemap</InlineCode> simplifient cette tâche.
    </Paragraph>

    <CodeBlock language="bash">
{`npm install next-sitemap`}
    </CodeBlock>

    <CodeBlock language="javascript">
{`// next-sitemap.config.js
module.exports = {
  siteUrl: "https://www.monsite.com",
  generateRobotsTxt: true,
};`}
    </CodeBlock>

    <Subtitle>6. Performance et Core Web Vitals</Subtitle>
    <Paragraph>
      Google prend en compte les <Strong>Core Web Vitals</Strong> (LCP, CLS, FID) pour le classement.  
      Next.js facilite leur optimisation via :
    </Paragraph>
    <List>
      <ListItem>Le <Strong>lazy loading</Strong> des composants.</ListItem>
      <ListItem>Le <Strong>préchargement</Strong> des liens avec <InlineCode>next/link</InlineCode>.</ListItem>
      <ListItem>L’<Strong>optimisation des scripts</Strong> avec <InlineCode>next/script</InlineCode>.</ListItem>
    </List>

    <Subtitle>7. Déploiement optimisé</Subtitle>
    <Paragraph>
      Déployez sur <Strong>Vercel</Strong> (plateforme officielle de Next.js) pour bénéficier 
      d’un CDN global et d’optimisations automatiques.  
      Alternatives : <Strong>Netlify</Strong>, <Strong>Cloudflare Pages</Strong>, <Strong>AWS Amplify</Strong>.
    </Paragraph>

    <Card>
      <Subheading>Conclusion</Subheading>
      <Paragraph>
        Avec ses fonctionnalités natives, Next.js est en 2025 l’un des meilleurs frameworks 
        pour <Highlight>un SEO performant</Highlight>.  
        De la gestion des métadonnées à l’optimisation des images et Core Web Vitals, 
        tout est pensé pour vous aider à atteindre les meilleures positions dans Google.  
        Maîtrisez ces bonnes pratiques, et votre site sera à la fois rapide, accessible et visible.
      </Paragraph>
    </Card>
  </Article>
),


"les-microservices-avec-nestjs": (
  <Article>
    <Title>Les Microservices avec NestJS : Le Guide Ultime 2025</Title>

    <Paragraph>
      Les <Strong>microservices</Strong> sont devenus l’architecture de choix pour les applications 
      modernes et scalables.  
      Contrairement au monolithe, les microservices permettent de découper une application en plusieurs 
      services indépendants, faciles à maintenir et à déployer.  
      Avec <Strong>NestJS</Strong>, framework Node.js basé sur TypeScript, créer des microservices 
      devient <Highlight>plus simple, structuré et productif</Highlight>.  
      Voici le guide complet pour démarrer en 2025.
    </Paragraph>

    <Subtitle>1. Pourquoi choisir NestJS pour les microservices ?</Subtitle>
    <List>
      <ListItem>
        <Strong>Architecture modulaire</Strong> : idéale pour découper vos services en modules indépendants.
      </ListItem>
      <ListItem>
        <Strong>Support natif des microservices</Strong> : NestJS intègre nativement plusieurs transports (TCP, Redis, NATS, Kafka, RabbitMQ).
      </ListItem>
      <ListItem>
        <Strong>TypeScript</Strong> : assure une meilleure maintenabilité et lisibilité du code.
      </ListItem>
      <ListItem>
        <Strong>Interopérabilité</Strong> : facile à connecter avec des services externes ou d’autres frameworks.
      </ListItem>
    </List>

    <Subtitle>2. Mise en place d’un microservice avec NestJS</Subtitle>
    <Paragraph>
      Créez un nouveau projet NestJS et configurez le microservice.  
      Exemple avec un transport TCP :
    </Paragraph>

    <CodeBlock language="bash">
{`nest new microservice-app`}
    </CodeBlock>

    <CodeBlock language="typescript">
{`// main.ts (Microservice TCP)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { host: '127.0.0.1', port: 3001 },
    },
  );
  await app.listen();
}
bootstrap();`}
    </CodeBlock>

    <Subtitle>3. Communication entre microservices</Subtitle>
    <Paragraph>
      Un client peut envoyer un message ou une requête à un microservice via des 
      <Strong>patterns</Strong> (ex. : <InlineCode>message</InlineCode>, <InlineCode>request-response</InlineCode>).  
      Exemple :
    </Paragraph>

    <CodeBlock language="typescript">
{`// app.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'get_hello' })
  getHello(): string {
    return 'Hello from microservice!';
  }
}`}
    </CodeBlock>

    <CodeBlock language="typescript">
{`// client.service.ts
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

const client: ClientProxy = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: { host: '127.0.0.1', port: 3001 },
});

client.send({ cmd: 'get_hello' }, {}).subscribe((response) => {
  console.log(response); // "Hello from microservice!"
});`}
    </CodeBlock>

    <Subtitle>4. Avantages des microservices avec NestJS</Subtitle>
    <List>
      <ListItem>
        <Strong>Scalabilité</Strong> : chaque microservice peut être déployé et mis à l’échelle indépendamment.
      </ListItem>
      <ListItem>
        <Strong>Résilience</Strong> : une panne dans un service n’affecte pas tout le système.
      </ListItem>
      <ListItem>
        <Strong>Polyglotte</Strong> : chaque service peut être développé dans une techno différente si besoin.
      </ListItem>
      <ListItem>
        <Strong>Productivité accrue</Strong> grâce au CLI NestJS et au typage TypeScript.
      </ListItem>
    </List>

    <Subtitle>5. Cas d’usage en 2025</Subtitle>
    <NumberedList>
      <NumberedListItem>
        <Strong>E-commerce</Strong> : services indépendants pour le paiement, le catalogue, la livraison.
      </NumberedListItem>
      <NumberedListItem>
        <Strong>IoT</Strong> : gestion des capteurs et traitement des données en temps réel via Kafka ou MQTT.
      </NumberedListItem>
      <NumberedListItem>
        <Strong>SaaS</Strong> : modules indépendants (authentification, facturation, analytics).
      </NumberedListItem>
    </NumberedList>

    <Card className="bg-yellow-50 border-yellow-500">
      <Subheading>Conclusion</Subheading>
      <Paragraph>
        En 2025, les <Strong>microservices avec NestJS</Strong> s’imposent comme une architecture robuste et moderne.  
        Grâce à son support natif des transports, sa structure modulaire et TypeScript, NestJS simplifie la 
        conception d’applications distribuées.  
        Que vous construisiez un SaaS, une plateforme e-commerce ou un système IoT, 
        NestJS est un choix stratégique pour un avenir scalable et performant.
      </Paragraph>
    </Card>
  </Article>
),


};

// Fonction d'accès public pour le contenu
export const getPostContentBySlug = (slug: string): React.ReactNode | null => {
    return postDetails[slug] || null;
};