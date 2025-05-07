# Test info

- Name: Home Page Tests >> should navigate to each header page and verify title
- Location: /home/runner/work/technicaltest-ap/technicaltest-ap/tests/e2e/home/home.spec.ts:37:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)

Locator: locator(':root')
Expected string: "Comptes corporatifs crypto | Constituez votre portefeuille crypto | TOKERO"
Received string: "Crypto Corporate Accounts | Build Your Crypto Portfolio | TOKERO"
Call log:
  - expect.toHaveTitle with timeout 5000ms
  - waiting for locator(':root')
    4 × locator resolved to <html lang="fr">…</html>
      - unexpected value "Cryptocurrencies Exchange Platform | Crypto Trends & Market Insights | TOKERO"
    5 × locator resolved to <html lang="fr">…</html>
      - unexpected value "Crypto Corporate Accounts | Build Your Crypto Portfolio | TOKERO"

    at HomePage.verifyPageTitle (/home/runner/work/technicaltest-ap/technicaltest-ap/tests/pages/HomePage.ts:55:33)
    at /home/runner/work/technicaltest-ap/technicaltest-ap/tests/e2e/home/home.spec.ts:42:28
```

# Page snapshot

```yaml
- paragraph:
  - link "SocialFi is happening! Join the official SocialFi Waiting List today to earn Founder status!":
    - /url: /en/link/socialfi-top/
    - strong: SocialFi is happening!
    - text: Join the official SocialFi Waiting List today to earn Founder status!
- button "✖"
- banner:
  - navigation "Topbar menu":
    - link "TOKERO logo":
      - /url: /fr/
      - img "TOKERO logo"
    - list:
      - listitem:
        - link "Corporate":
          - /url: /fr/corporate/
      - listitem:
        - link "Exchange":
          - /url: /fr/exchange/
      - listitem:
        - link "Academy":
          - /url: /fr/academy/
      - listitem:
        - link "Contacte-nous":
          - /url: /fr/contact/
      - listitem:
        - link "Login":
          - /url: /fr/login/
          - img
          - text: Login
      - listitem:
        - link "Créer un compte":
          - /url: /fr/register/
      - listitem:
        - button "fr flag FR":
          - img "fr flag"
          - text: FR
- paragraph
- heading "Ouvre un compte corporate aujourd'hui et accède à encore plus de fonctionnalités sur la plateforme TOKERO !" [level=1]
- paragraph: Si tu veux investir en crypto-monnaies en utilisant des fonds d'entreprise et négocier au nom de ta société, alors un compte professionnel chez TOKERO répondra à tous tes besoins.
- heading "Bénéfices" [level=2]
- list:
  - listitem: Rapidité d'ouverture d'un compte business grâce à la vérification et à la validation efficaces des documents à l'aide d'outils dédiés (quelques heures contre quelques mois sur les plateformes étrangères)
  - listitem: Assistance technique et comptable dédiée
  - listitem: Des frais fixes, quel que soit le volume échangé, afin que tu puisses bénéficier d'un service haut de gamme dès le départ
- heading "Ce que disent nos clients :" [level=2]
- img
- paragraph: Ştefan CHERCIU
- paragraph:
  - text: Casa Noastră/QFort
  - strong: Président / Fondateur
- text:  Deși suntem într-o zonă foarte palpabilă, producția de tâmplărie termoizolantă, ne preocupă și partea digitală a lucrurilor, atâta timp cât se justifică din punct de vedere investițional. Am colaborat cu TOKERO atât pe persoană fizică, cât și juridică și, pe lângă onboarding-ul rapid, am găsit o calitate superioară a suportului ori de câte ori am avut nevoie. 
- img
- paragraph: Daniel TAMAȘ
- paragraph:
  - text: WAM.app
  - strong: CEO & Co-Founder
- text:  Colaborarea cu TOKERO a fost de la început ușoară și mișto. Pe lângă faptul că e o companie care are o fundație solidă și crește în continuu cu ambiție, e o trupă de oameni cu care vrei să faci business. Mulțumesc, Marius, pentru parteneriat. 
- img
- paragraph: Marius GRIGORAȘ
- paragraph:
  - text: BH Network
  - strong: CEO & Co-Founder
- text:  BH.Network este un hub web3 cu sedii în Liechtenstein și România, sub umbrela căruia se construiesc produse precum launchpad-ul BHero.com și marketplace-ul topIQs.com. Suntem recunoscători să găsim în TOKERO un partener local de încredere, care face trecerile on și off ramp într-o manieră sigură, rapidă și fully compliant pe zona de AML și contabilitate. Desigur, există și soluții globale, dar e mult mai ușor să rezolvi lucruri punctuale de contabilitate când toate echipele 3rd party sunt din aceeași țară. 
- heading "Les étapes de l'enregistrement d'un compte corporate sont les suivantes :" [level=2]
- list "Étapes de création d'un compte d'entreprise":
  - listitem:
    - heading "Première étape" [level=3]
    - paragraph: Enregistre un compte ordinaire par lequel tu gère le compte de corporate.
    - paragraph:
      - text: Clique ici pour
      - link "te connecter ou pour enregistrer un nouveau compte personnel":
        - /url: /fr/login-or-register/
  - listitem:
    - heading "Puis" [level=3]
    - paragraph: Pour remplir le formulaire d'inscription du compte corporate, tu dois te connecter avec le compte de personne physique.
  - listitem:
    - heading "Finalement" [level=3]
    - paragraph: Crée des comptes TOKERO complets pour tous les accesseurs de l'entreprise et toute autre personne devant accéder aux fonds. Tu pourras définir des autorisations dédiées dans ton compte corporate pour chacune de ces personnes.
- heading "Avant de commencer, assure-toi que tu disposes des informations suivantes :" [level=2]
- list:
  - listitem: Nom de l'entité juridique
  - listitem: Statut
  - listitem: Numéro d'identification fiscale
  - listitem: Numéro d'enregistrement dans le Registre du Commerce
  - listitem: L'identificateur unique au niveau européen (EUID)
  - listitem: Pays du siège
  - listitem: Adresse du siège social
  - listitem: Site web
  - listitem: Numéro de téléphone
  - listitem: Adresse d'email
  - listitem: Quel secteur d'activité représente la majeure partie de l'activité de l'entreprise ?
  - listitem: Description détaillée des produits et services que ton entreprise propose pour générer des revenus
  - listitem: Motif de l'ouverture d'un compte corporate
  - listitem: Nom de la banque
  - listitem: Numéro de compte bancaire (IBAN)
  - listitem: Volume d'échange mensuel attendu (EUR)
  - listitem: Valeur nette de l'entreprise (EUR)
  - listitem: Valeur nette liquide de l'entité (EUR) = actifs circulants
  - listitem: L'entité a des personnes politiquement exposées en charge
  - listitem: Scan/photo couleur du Extrait Kbis fourni par le gouvernement
  - listitem: Scan/photo couleur de toutes les pages de le plus récents statuts juridiques de l'entreprise
  - listitem: Scan/photo couleur d'un relevé bancaire pour le compte bancaire que tu utiliseras avec ce compte corporate
  - listitem: "Observation : Ces documents doivent être rédigés dans l'une des langues suivantes : anglais, roumain"
- text: Pour remplir le formulaire d'inscription du compte corporate, tu dois te connecter avec le compte de personne physique.
- contentinfo:
  - navigation "breadcrumb":
    - list:
      - listitem:
        - link "Accueil":
          - /url: /fr/
      - listitem:
        - text: ">"
        - link "Comptes corporate":
          - /url: /fr/corporate/
  - paragraph: TOKERO
  - list:
    - listitem:
      - link "À propos de nous":
        - /url: /fr/about-us/
    - listitem:
      - link "Communauté":
        - /url: /fr/community/
    - listitem:
      - link "Découvre l'équipe":
        - /url: /fr/team/
    - listitem:
      - link "Blog":
        - /url: /fr/blog/
    - listitem:
      - link "Carrières Nous embauchons !":
        - /url: https://tokero.team/
    - listitem:
      - link "Webinaires et meetups":
        - /url: /fr/webinars/
    - listitem:
      - link "Événements du Launchpad":
        - /url: /fr/launchpad/
    - listitem:
      - link "Ressources téléchargeables":
        - /url: /fr/downloads/
  - paragraph: Services
  - list:
    - listitem:
      - link "Échange en ligne":
        - /url: /fr/exchange/
    - listitem:
      - link "Comptes corporate":
        - /url: /fr/corporate/
    - listitem:
      - link "Académie TOKERO New !":
        - /url: /fr/academy/
    - listitem:
      - link "TOKERO PRO":
        - /url: /fr/page/pro/
    - listitem:
      - link "TOKERO Ventures New !":
        - /url: /fr/page/tokero-ventures/
    - listitem:
      - link "Crypto Spots":
        - /url: /fr/crypto-spots/united-states-of-america/
    - listitem:
      - link "Parrains":
        - /url: /fr/referral-program/
    - listitem:
      - link "Contacte-nous":
        - /url: /fr/contact/
    - listitem:
      - link "Apply for listing":
        - /url: /fr/get-listed/
    - listitem:
      - button "fr flag Français":
        - img "fr flag"
        - text: Français
  - paragraph: POLITIQUES ET RÈGLES
  - list:
    - listitem:
      - link "Liste des politiques":
        - /url: /fr/policies/
    - listitem:
      - link "Termes et conditions":
        - /url: /fr/policies/terms-of-service/
    - listitem:
      - link "GDPR":
        - /url: /fr/policies/gdpr/
    - listitem:
      - link "Confidentialité":
        - /url: /fr/policies/privacy/
    - listitem:
      - link "KYC":
        - /url: /fr/policies/kyc/
    - listitem:
      - link "Cookies":
        - /url: /fr/policies/cookies/
  - paragraph: INFO
  - list:
    - listitem:
      - link "Frais et délais":
        - /url: /fr/policies/fees/
    - listitem:
      - link "Minimums et options":
        - /url: /fr/policies/minimums-and-options/
    - listitem:
      - link "Temps de réponse/traitement des demandes":
        - /url: /fr/policies/answering-times/
    - listitem:
      - link "Infos monnaies":
        - /url: /fr/info/
    - listitem:
      - link "Jours fériés":
        - /url: /fr/non-banking-days/
    - listitem:
      - link "Règlement des litiges en ligne":
        - /url: https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show
  - paragraph: Newsletter
  - textbox "S'il te plaît, saisis ton e-mail ici"
  - button "S'abonner "
  - link "Visite-nous sur Facebook":
    - /url: /fr/link/sm-facebook/
  - link "Visite-nous sur X":
    - /url: /fr/link/sm-twitter/
    - img
  - link "Visite-nous sur LinkedIn":
    - /url: /fr/link/sm-linkedin/
  - link "Visite-nous sur Instagram":
    - /url: /fr/link/sm-instagram/
  - link "Visite-nous sur Youtube":
    - /url: /fr/link/sm-youtube/
  - link "Visite-nous sur Bitcoin Talk":
    - /url: /fr/link/sm-bitcointalk/
  - link "Visite-nous sur Zealy":
    - /url: /fr/link/sm-zealy/
    - img
  - link "Visite-nous sur Telegram":
    - /url: /fr/link/sm-telegram/
  - paragraph: © 2017 - 2025 by TOKERO
  - text: Version 9ceb0702
- alert: Crypto Corporate Accounts | Build Your Crypto Portfolio | TOKERO
```

# Test source

```ts
   1 | import {Page, Locator, expect} from '@playwright/test'
   2 | import {tabTitleTexts} from '../test-data/language-home-texts'
   3 |
   4 | export type HeaderButton = 'corporate' | 'exchange' | 'academy' | 'contactUs' | 'login'
   5 | const buttonTitleMap: Record<HeaderButton, keyof typeof tabTitleTexts['en']> = {
   6 |     corporate: 'corporate',
   7 |     exchange: 'exchange',
   8 |     academy: 'academy',
   9 |     contactUs: 'contactUs',
  10 |     login: 'login',
  11 | };
  12 | export class HomePage {
  13 |
  14 |     // Header locators
  15 |     private corporateBtn: Locator;
  16 |     private exchangeBtn: Locator;
  17 |     private academyBtn: Locator;
  18 |     private contactUsBtn: Locator;
  19 |     private loginBtn: Locator;
  20 |
  21 |     constructor(private page: Page) {
  22 |         // Header locators
  23 |         this.corporateBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(1)').nth(0)
  24 |         this.exchangeBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(2)').nth(0)
  25 |         this.academyBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(3)').nth(0)
  26 |         this.contactUsBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(4)').nth(0)
  27 |         this.loginBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(5)').nth(0)
  28 |     }
  29 |
  30 |     private buttonUrlMap: Record<HeaderButton, string> = {
  31 |         corporate: '/corporate',
  32 |         exchange: '/exchange',
  33 |         academy: '/academy',
  34 |         contactUs: '/contact',
  35 |         login: '/login',
  36 |     };
  37 |
  38 |     async goto(langCode: string) {
  39 |         await this.page.goto(`/${langCode}/`);
  40 |     }
  41 |
  42 |     async navigateTo(button: HeaderButton): Promise<void> {
  43 |         const buttonLocator = this.getLocator(button);
  44 |         await expect(buttonLocator).toBeVisible();
  45 |         await buttonLocator.click();
  46 |     }
  47 |
  48 |     async verifyPageUrl(button: HeaderButton, language: string): Promise<void> {
  49 |         const expectedUrl = `${this.page.url().split('/').slice(0, 3).join('/')}/${language}${this.buttonUrlMap[button]}/`;
  50 |         await expect(this.page).toHaveURL(expectedUrl);
  51 |     }
  52 |
  53 |     async verifyPageTitle(button: HeaderButton, language: keyof typeof tabTitleTexts): Promise<void> {
  54 |         const expectedTitle = tabTitleTexts[language][buttonTitleMap[button]];
> 55 |         await expect(this.page).toHaveTitle(expectedTitle);
     |                                 ^ Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)
  56 |     }
  57 |
  58 |     async verifyTexts(texts: { [key: string]: { value: string; attribute?: string; locator?: string } }) {
  59 |         for (const [key, { value, attribute, locator }] of Object.entries(texts)) {
  60 |             const element = locator ? this.page.locator(locator) : this.getLocator(key);
  61 |             if (attribute) {
  62 |                 await expect(element).toHaveAttribute(attribute, value);
  63 |             } else {
  64 |                 // Normalize text by trimming and collapsing multiple spaces/newlines
  65 |                 const normalizedText = await element.textContent().then(text => text?.trim().replace(/\s+/g, ' '));
  66 |                 await expect(normalizedText).toBe(value);
  67 |             }
  68 |         }
  69 |     }
  70 |
  71 |     async verifyNavigationBarFieldsVisible() {
  72 |         await expect(this.corporateBtn).toBeVisible();
  73 |         await expect(this.exchangeBtn).toBeVisible();
  74 |         await expect(this.academyBtn).toBeVisible();
  75 |         await expect(this.contactUsBtn).toBeVisible();
  76 |         await expect(this.loginBtn).toBeVisible();
  77 |     }
  78 |     private getLocator(key: string): Locator {
  79 |         switch (key) {
  80 |             case 'corporate': return this.corporateBtn;
  81 |             case 'exchange': return this.exchangeBtn;
  82 |             case 'academy': return this.academyBtn;
  83 |             case 'contactUs': return this.contactUsBtn;
  84 |             case 'login': return this.loginBtn;
  85 |             default: throw new Error(`Unknown text key: ${key}`);
  86 |         }
  87 |     }
  88 | }
```