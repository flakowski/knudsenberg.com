export interface BlogPost {
  translationId: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  language: string;
  image?: string;
}

const allPosts: BlogPost[] = [
  // === Jens Knudsen is dead ===
  {
    translationId: 'ecd27330-9730-4b1a-ac39-23dbbfacf98f',
    slug: 'jens-knudsen-is-dead',
    language: 'en',
    date: '2021-09-06',
    title: 'Jens Knudsen is dead',
    excerpt: 'Our dear colleague and friend, Jens Knudsen, was found dead on Saturday.',
    body: `Our dear colleague and friend, Jens Knudsen, was found dead on Saturday.

There will probably be a lot of rumors and articles surrounding his death in the news in the coming weeks, and know that Knudsen & Berg are working with the police to clear up the matter.

Knudsen & Berg is in mourning and we send our thoughts and prayers to his family.`,
  },
  {
    translationId: 'ecd27330-9730-4b1a-ac39-23dbbfacf98f',
    slug: 'jens-knudsen-er-død',
    language: 'no',
    date: '2021-09-06',
    title: 'Jens Knudsen er død',
    excerpt: 'Vår kjære medarbeider og venn, Jens Knudsen ble funnet død på lørdag.',
    body: `Vår kjære medarbeider og venn, Jens Knudsen ble funnet død på lørdag.

Det vil være mye skriverier om dødsfallet hans i avisene i ukene fremover, og vi ønsker å informere om at Knudsen & Berg samarbeider med politiet for å oppklare saken.

Knudsen & Berg er i sorg og vi sender våre tanker og bønner til hans familie.`,
  },
  {
    translationId: 'ecd27330-9730-4b1a-ac39-23dbbfacf98f',
    slug: 'jens-knudsen-är-avliden',
    language: 'sv',
    date: '2021-09-06',
    title: 'Jens Knudsen är avliden',
    excerpt: 'Vår käre kollega och vän, Jens Knudsen, hittades död på lördagen.',
    body: `Vår käre kollega och vän, Jens Knudsen, hittades död på lördagen.

Det kommer förmodligen att finnas många rykten och artiklar om hans bortgång i nyheterna under de kommande veckorna. Vi vill informera om att Knudsen & Berg samarbetar med polisen för att utreda ärendet.

Knudsen & Berg sörjer och vi skickar våra tankar och böner till hans familj.`,
  },
  {
    translationId: 'ecd27330-9730-4b1a-ac39-23dbbfacf98f',
    slug: 'jens-knudsen-er-død-1',
    language: 'da',
    date: '2021-09-06',
    title: 'Jens Knudsen er død',
    excerpt: 'Vores kære kollega og ven, Jens Knudsen, blev fundet død lørdag.',
    body: `Vores kære kollega og ven, Jens Knudsen, blev fundet død lørdag.

Der vil sandsynligvis være mange rygter og artikler om hans død i nyhederne i de kommende uger. Vi ønsker at informere om, at Knudsen & Berg samarbejder med politiet for at opklare sagen.

Knudsen & Berg er i sorg, og vi sender vores tanker og bønner til hans familie.`,
  },
  {
    translationId: 'ecd27330-9730-4b1a-ac39-23dbbfacf98f',
    slug: 'jari-knudsen-on-kuollut',
    language: 'fi',
    date: '2021-09-06',
    title: 'Jari Knudsen on kuollut',
    excerpt: 'Rakas kollegamme ja ystävämme Jari Knudsen löydettiin kuolleena lauantaina.',
    body: `Rakas kollegamme ja ystävämme Jari Knudsen löydettiin kuolleena lauantaina.

Tulevina viikkoina mediassa tulee todennäköisesti olemaan paljon huhuja ja artikkeleita hänen kuolemastaan. Knudsen & Berg tekee yhteistyötä poliisin kanssa asian selvittämiseksi.

Knudsen & Berg suree ja lähetämme ajatuksemme ja rukouksemme hänen perheelleen.`,
  },
  {
    translationId: 'ecd27330-9730-4b1a-ac39-23dbbfacf98f',
    slug: 'jano-knudsen-è-morto',
    language: 'it',
    date: '2021-09-06',
    title: 'Jano Knudsen è morto',
    excerpt: 'Il nostro caro collega e amico, Jens Knudsen, è stato trovato morto sabato.',
    body: `Il nostro caro collega e amico, Jens Knudsen, è stato trovato morto sabato.

Nelle prossime settimane ci saranno probabilmente molte voci e articoli sulla sua morte. Knudsen & Berg sta collaborando con la polizia per chiarire la situazione.

Knudsen & Berg è in lutto e inviamo i nostri pensieri e le nostre preghiere alla sua famiglia.`,
  },
  {
    translationId: 'ecd27330-9730-4b1a-ac39-23dbbfacf98f',
    slug: 'jens-knudsen-est-mort',
    language: 'fr',
    date: '2021-09-06',
    title: 'Jens Knudsen est mort',
    excerpt: 'Notre cher collègue et ami, Jens Knudsen, a été retrouvé mort samedi.',
    body: `Notre cher collègue et ami, Jens Knudsen, a été retrouvé mort samedi.

Il y aura probablement beaucoup de rumeurs et d'articles autour de sa mort dans les semaines à venir. Knudsen & Berg travaille avec la police pour clarifier la situation.

Knudsen & Berg est en deuil et nous envoyons nos pensées et prières à sa famille.`,
  },
  {
    translationId: 'ecd27330-9730-4b1a-ac39-23dbbfacf98f',
    slug: 'jaan-knudsen-on-surnud',
    language: 'et',
    date: '2021-09-06',
    title: 'Jaan Knudsen on surnud',
    excerpt: 'Meie kallis kolleeg ja sõber Jaan Knudsen leiti laupäeval surnult.',
    body: `Meie kallis kolleeg ja sõber Jaan Knudsen leiti laupäeval surnult.

Järgnevatel nädalatel ilmub tõenäoliselt palju kuulujutte ja artikleid tema surmaga seoses. Knudsen & Berg teeb politseiga koostööd juhtunu selgitamiseks.

Knudsen & Berg leinas ja saadame oma mõtted ning palved tema perele.`,
  },

  // === End of quarter party ===
  {
    translationId: '3c78a6f7-4f72-4e2a-89fb-e422db49da39',
    slug: 'end-of-quarter-party',
    language: 'en',
    date: '2021-09-02',
    image: '/images/Bilde til nettside.jpg',
    title: 'End of quarter party!',
    excerpt: '8% higher than we had projected! I think we deserve a little party, right?',
    body: `I am currently sitting on the office floor and working hard (or hardly working, am I right?). Just a few hours more until the weekend!

No, I'm not doing stock analysis, like I am most other working hours. I am doing good old fashioned arts and crafts (very unlike me, I know). I am putting together a party banner for tomorrow's quarter party.

As always, Knudsen & Berg delivers staggering figures in its quarterly reports, and this quarter is no exception. 8% higher than we had projected! I think we deserve a little party, right?`,
  },
  {
    translationId: '3c78a6f7-4f72-4e2a-89fb-e422db49da39',
    slug: 'kvartalfest',
    language: 'no',
    date: '2021-09-02',
    image: '/images/banner til nettside.jpg',
    title: 'Kvartalfest!',
    excerpt: '8 % høyere enn vi hadde anslått! Jeg tror vi fortjener litt fest, ikke sant?',
    body: `Jeg sitter for øyeblikket på kontoret og jobber hardt (eller jobber knapt, stemmer det?). Bare noen timer til helgen!

Nei, jeg gjør ikke aksjeanalyse, slik jeg gjør de fleste andre arbeidstimer. Jeg driver med gammeldags håndverk (veldig ulik meg, jeg vet). Jeg setter sammen et festbanner til kvartalsfesten i morgen.

Som alltid leverer Knudsen & Berg imponerende tall i kvartalrapportene, og dette kvartalet er intet unntak. 8 % høyere enn vi hadde anslått! Jeg tror vi fortjener litt fest, ikke sant?`,
  },
  {
    translationId: '3c78a6f7-4f72-4e2a-89fb-e422db49da39',
    slug: 'slut-på-kvartalet-fest',
    language: 'sv',
    date: '2021-09-02',
    title: 'Slut på kvartalet-fest!',
    excerpt: '8% högre än vi hade prognostiserat! Jag tycker vi förtjänar en liten fest, eller hur?',
    body: `Jag sitter för närvarande på kontorets golv och jobbar hårt (eller jobbar knappt, eller hur?). Bara några timmar kvar till helgen!

Nej, jag gör inte aktieanalys, som jag gör de flesta andra arbetstimmar. Jag sysslar med gammaldags pyssel (väldigt olikt mig, jag vet). Jag sätter ihop en festbanner till morgondagens kvartasfest.

Som alltid levererar Knudsen & Berg häpnadsväckande siffror i sina kvartalsrapporter, och det här kvartalet är inget undantag. 8% högre än vi hade prognostiserat! Jag tycker vi förtjänar en liten fest, eller hur?`,
  },
  {
    translationId: '3c78a6f7-4f72-4e2a-89fb-e422db49da39',
    slug: 'kvartalsafslutningsfest',
    language: 'da',
    date: '2021-09-02',
    title: 'Kvartalsafslutningsfest!',
    excerpt: '8 % højere end vi havde anslået! Jeg tror, vi fortjener en lille fest, ikke?',
    body: `Jeg sidder i øjeblikket på kontorets gulv og arbejder hårdt (eller arbejder knap, vel?). Kun et par timer til weekenden!

Nej, jeg laver ikke aktieanalyse, som jeg gør de fleste andre arbejdstimer. Jeg laver godt gammeldags håndverk (meget ulig mig, jeg ved det). Jeg sætter et festbanner sammen til morgendagens kvartalsfest.

Som altid leverer Knudsen & Berg imponerende tal i sine kvartalsrapporter, og dette kvartal er ingen undtagelse. 8 % højere end vi havde anslået! Jeg tror, vi fortjener en lille fest, ikke?`,
  },
  {
    translationId: '3c78a6f7-4f72-4e2a-89fb-e422db49da39',
    slug: 'kvartaalin-päätösjuhla',
    language: 'fi',
    date: '2021-09-02',
    title: 'Kvartaalin päätösjuhla!',
    excerpt: '8% enemmän kuin olimme arvioineet! Mielestäni ansaitsemme pienen juhlan, eikö niin?',
    body: `Istun tällä hetkellä toimiston lattialla ja teen töitä kovasti (tai tuskin töitä, eikö niin?). Enää muutama tunti viikonloppuun!

En tee osakeanalyysiä, kuten teen useimpina muina työtunteina. Teen vanhanaikaista askartelua (hyvin epätyypillistä minulle, tiedän). Olen kokoamassa juhlabanneeria huomiseen kvartaalijuhlaan.

Kuten aina, Knudsen & Berg toimittaa hämmästyttäviä lukuja neljännesvuosiraporteissaan, eikä tämä neljännes ole poikkeus. 8% enemmän kuin olimme arvioineet! Mielestäni ansaitsemme pienen juhlan, eikö niin?`,
  },
  {
    translationId: '3c78a6f7-4f72-4e2a-89fb-e422db49da39',
    slug: 'festa-trimestrale',
    language: 'it',
    date: '2021-09-02',
    title: 'Festa trimestrale!',
    excerpt: '8% in più di quanto avevamo previsto! Credo che meritiamo una piccola festa, no?',
    body: `Sto attualmente sedendo sul pavimento dell'ufficio e lavorando sodo (o quasi, vero?). Ancora poche ore al fine settimana!

No, non sto facendo analisi azionarie, come faccio la maggior parte delle altre ore lavorative. Sto facendo i classici lavoretti manuali (molto poco adatto a me, lo so). Sto assemblando uno striscione per la festa trimestrale di domani.

Come sempre, Knudsen & Berg fornisce cifre sorprendenti nei suoi rapporti trimestrali, e questo trimestre non fa eccezione. 8% in più di quanto avevamo previsto! Credo che meritiamo una piccola festa, no?`,
  },
  {
    translationId: '3c78a6f7-4f72-4e2a-89fb-e422db49da39',
    slug: 'fête-de-fin-de-trimestre',
    language: 'fr',
    date: '2021-09-02',
    title: 'Fête de fin de trimestre !',
    excerpt: '8 % de plus que prévu ! Je pense que nous méritons une petite fête, non ?',
    body: `Je suis actuellement assis par terre au bureau et je travaille dur (ou à peine, c'est vrai ?). Plus que quelques heures avant le week-end !

Non, je ne fais pas d'analyse boursière, comme je le fais la plupart des autres heures de travail. Je fais du bon vieux bricolage (très inhabituel pour moi, je sais). Je prépare une banderole pour la fête trimestrielle de demain.

Comme toujours, Knudsen & Berg délivre des chiffres impressionnants dans ses rapports trimestriels, et ce trimestre ne fait pas exception. 8 % de plus que prévu ! Je pense que nous méritons une petite fête, non ?`,
  },
  {
    translationId: '3c78a6f7-4f72-4e2a-89fb-e422db49da39',
    slug: 'veerandaasta-lõpupidu',
    language: 'et',
    date: '2021-09-02',
    title: 'Veerandaasta lõpupidu!',
    excerpt: '8% rohkem, kui me olime prognoositud! Ma arvan, et väärime pisut pidu, eks?',
    body: `Istun praegu kontori põrandal ja töötan usinasti (või vaevalt töötades, kas pole?). Veel mõni tund kuni nädalavahetuseni!

Ei, ma ei tee aktsiaanalüüsi, nagu ma teen enamikul teistel töötundidel. Teen vanamoodsat käsitööd (väga minu-mittelaadne, tean). Seab koos peolippe homse kvartalipidustuse jaoks.

Nagu alati, toimetab Knudsen & Berg oma kvartaliaruannetes vapustavaid numbreid, ja see kvartal pole erand. 8% rohkem, kui me olime prognoositud! Ma arvan, et väärime pisut pidu, eks?`,
  },

  // === Quarterly report ===
  {
    translationId: '69ab620a-4382-407a-be6d-1cdc57bfd385',
    slug: 'quarterly-report',
    language: 'en',
    date: '2021-08-28',
    title: 'Quarterly report',
    excerpt: "I'm currently looking at the quarterly report for Q3, and I got to say that this looks promising.",
    body: `I'm currently looking at the quarterly report for Q3, and I got to say that this looks promising.

The report will be sent to our customers tomorrow, so I'm looking forward to that!`,
  },
  {
    translationId: '69ab620a-4382-407a-be6d-1cdc57bfd385',
    slug: 'kvartalsrapporten',
    language: 'no',
    date: '2021-08-28',
    title: 'Kvartalsrapporten',
    excerpt: 'Jeg ser på kvartalsrapporten for Q3 for øyeblikket, og jeg må si at dette ser lovende ut.',
    body: `Jeg ser på kvartalsrapporten for Q3 for øyeblikket, og jeg må si at dette ser lovende ut.

Rapporten sendes til kundene våre i morgen, så jeg ser frem til det!`,
  },
  {
    translationId: '69ab620a-4382-407a-be6d-1cdc57bfd385',
    slug: 'kvartalsrapport-1',
    language: 'sv',
    date: '2021-08-28',
    title: 'Kvartalsrapport',
    excerpt: 'Jag tittar för närvarande på kvartalsrapporten för Q3, och jag måste säga att det ser lovande ut.',
    body: `Jag tittar för närvarande på kvartalsrapporten för Q3, och jag måste säga att det ser lovande ut.

Rapporten skickas till våra kunder imorgon, så jag ser fram emot det!`,
  },
  {
    translationId: '69ab620a-4382-407a-be6d-1cdc57bfd385',
    slug: 'kvartalsrapport',
    language: 'da',
    date: '2021-08-28',
    title: 'Kvartalsrapport',
    excerpt: 'Jeg kigger i øjeblikket på kvartalsrapporten for Q3, og jeg må sige, at det ser lovende ud.',
    body: `Jeg kigger i øjeblikket på kvartalsrapporten for Q3, og jeg må sige, at det ser lovende ud.

Rapporten sendes til vores kunder i morgen, så jeg glæder mig til det!`,
  },
  {
    translationId: '69ab620a-4382-407a-be6d-1cdc57bfd385',
    slug: 'kvartaali-raportti',
    language: 'fi',
    date: '2021-08-28',
    title: 'Kvartaali­raportti',
    excerpt: 'Tarkastelen tällä hetkellä Q3:n neljännesvuosiraporttia, ja minun täytyy sanoa, että se näyttää lupaavalta.',
    body: `Tarkastelen tällä hetkellä Q3:n neljännesvuosiraporttia, ja minun täytyy sanoa, että se näyttää lupaavalta.

Raportti lähetetään asiakkaillemme huomenna, joten odotan sitä innolla!`,
  },
  {
    translationId: '69ab620a-4382-407a-be6d-1cdc57bfd385',
    slug: 'il-rapporto-trimestrale',
    language: 'it',
    date: '2021-08-28',
    title: 'Il rapporto trimestrale',
    excerpt: 'Sto attualmente esaminando il rapporto trimestrale per il Q3, e devo dire che sembra promettente.',
    body: `Sto attualmente esaminando il rapporto trimestrale per il Q3, e devo dire che sembra promettente.

Il rapporto verrà inviato ai nostri clienti domani, quindi non vedo l'ora!`,
  },
  {
    translationId: '69ab620a-4382-407a-be6d-1cdc57bfd385',
    slug: 'le-rapport-trimestriel',
    language: 'fr',
    date: '2021-08-28',
    title: 'Le rapport trimestriel',
    excerpt: 'Je consulte actuellement le rapport trimestriel du T3, et je dois dire que ça semble prometteur.',
    body: `Je consulte actuellement le rapport trimestriel du T3, et je dois dire que ça semble prometteur.

Le rapport sera envoyé à nos clients demain, j'ai donc hâte !`,
  },
  {
    translationId: '69ab620a-4382-407a-be6d-1cdc57bfd385',
    slug: 'kvartaliaruanne',
    language: 'et',
    date: '2021-08-28',
    title: 'Kvartaliaruanne',
    excerpt: 'Vaatan praegu Q3 kvartaliaruannet ja pean ütlema, et see tundub paljutõotav.',
    body: `Vaatan praegu Q3 kvartaliaruannet ja pean ütlema, et see tundub paljutõotav.

Aruanne saadetakse meie klientidele homme, nii et ootan seda põnevusega!`,
  },

  // === New partner ===
  {
    translationId: '97e9b9a1-de9c-4a03-91cf-8c98fdcad093',
    slug: 'new-partner',
    language: 'en',
    date: '2021-07-15',
    title: 'New partner',
    excerpt: 'We are happy to announce that we are now part owners of Nilsen Maritime.',
    body: `We are happy to announce that we are now part owners of Nilsen Maritime.

Nilsen Maritime has an enormous room for growth, and partnering with Knudsen & Berg is definitely a step in the right direction.`,
  },
  {
    translationId: '97e9b9a1-de9c-4a03-91cf-8c98fdcad093',
    slug: 'ny-partner',
    language: 'no',
    date: '2021-07-15',
    title: 'Ny partner',
    excerpt: 'Vi er glade for å kunngjøre at vi nå er deleiere av Nilsen Maritime.',
    body: `Vi er glade for å kunngjøre at vi nå er deleiere av Nilsen Maritime.

Nilsen Maritime har et enormt vekstpotensial, og et partnerskap med Knudsen & Berg er definitivt et skritt i riktig retning.`,
  },
  {
    translationId: '97e9b9a1-de9c-4a03-91cf-8c98fdcad093',
    slug: 'ny-partner-2',
    language: 'sv',
    date: '2021-07-15',
    title: 'Ny partner',
    excerpt: 'Vi är glada att meddela att vi nu är delägare i Nilsen Maritime.',
    body: `Vi är glada att meddela att vi nu är delägare i Nilsen Maritime.

Nilsen Maritime har en enorm tillväxtpotential, och ett partnerskap med Knudsen & Berg är definitivt ett steg i rätt riktning.`,
  },
  {
    translationId: '97e9b9a1-de9c-4a03-91cf-8c98fdcad093',
    slug: 'ny-partner-1',
    language: 'da',
    date: '2021-07-15',
    title: 'Ny partner',
    excerpt: 'Vi er glade for at meddele, at vi nu er medejer af Nilsen Maritime.',
    body: `Vi er glade for at meddele, at vi nu er medejer af Nilsen Maritime.

Nilsen Maritime har et enormt vækstpotentiale, og et partnerskab med Knudsen & Berg er bestemt et skridt i den rigtige retning.`,
  },
  {
    translationId: '97e9b9a1-de9c-4a03-91cf-8c98fdcad093',
    slug: 'uusi-kumppani',
    language: 'fi',
    date: '2021-07-15',
    title: 'Uusi kumppani',
    excerpt: 'Olemme iloisia ilmoittaa, että olemme nyt osaomistajia Nilsen Maritimessa.',
    body: `Olemme iloisia ilmoittaa, että olemme nyt osaomistajia Nilsen Maritimessa.

Nilsen Maritimella on valtava kasvupotentiaali, ja kumppanuus Knudsen & Bergin kanssa on ehdottomasti askel oikeaan suuntaan.`,
  },
  {
    translationId: '97e9b9a1-de9c-4a03-91cf-8c98fdcad093',
    slug: 'nuovo-partner',
    language: 'it',
    date: '2021-07-15',
    title: 'Nuovo partner',
    excerpt: 'Siamo lieti di annunciare che siamo ora comproprietari di Nilsen Maritime.',
    body: `Siamo lieti di annunciare che siamo ora comproprietari di Nilsen Maritime.

Nilsen Maritime ha un enorme margine di crescita, e la partnership con Knudsen & Berg è sicuramente un passo nella giusta direzione.`,
  },
  {
    translationId: '97e9b9a1-de9c-4a03-91cf-8c98fdcad093',
    slug: 'nouveau-partenaire',
    language: 'fr',
    date: '2021-07-15',
    title: 'Nouveau partenaire',
    excerpt: 'Nous sommes heureux d\'annoncer que nous sommes désormais copropriétaires de Nilsen Maritime.',
    body: `Nous sommes heureux d'annoncer que nous sommes désormais copropriétaires de Nilsen Maritime.

Nilsen Maritime a un énorme potentiel de croissance, et le partenariat avec Knudsen & Berg est définitivement un pas dans la bonne direction.`,
  },
  {
    translationId: '97e9b9a1-de9c-4a03-91cf-8c98fdcad093',
    slug: 'uus-partner',
    language: 'et',
    date: '2021-07-15',
    title: 'Uus partner',
    excerpt: 'Meil on hea meel teatada, et oleme nüüd Nilsen Maritime kaasomanikud.',
    body: `Meil on hea meel teatada, et oleme nüüd Nilsen Maritime kaasomanikud.

Nilsen Maritimeil on tohutu kasvupotentsiaal ning partnerlus Knudsen & Bergiga on kindlasti samm õiges suunas.`,
  },
];

export function getPostsByLocale(locale: string): BlogPost[] {
  // Prefer exact locale match, fall back to 'en', then first available
  const localeMap: Record<string, string> = { sv: 'sv', da: 'da', fi: 'fi', it: 'it', fr: 'fr', et: 'et', no: 'no', en: 'en' };
  const targetLang = localeMap[locale] || 'en';

  const byTid = new Map<string, BlogPost>();
  // First pass: exact match
  for (const post of allPosts) {
    if (post.language === targetLang) {
      byTid.set(post.translationId, post);
    }
  }
  // Second pass: fill missing with English
  for (const post of allPosts) {
    if (!byTid.has(post.translationId) && post.language === 'en') {
      byTid.set(post.translationId, post);
    }
  }
  // Sort by date descending
  return Array.from(byTid.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}
