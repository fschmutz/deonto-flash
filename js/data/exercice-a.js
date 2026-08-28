// Bloc 3 - Exercice professionnel, premiere partie (6 sujets sur 12).
// Sources publiques : loi n° 71-1130 du 31 decembre 1971, decret n° 91-1197 du 27 novembre 1991,
// RIN du CNB, code de deontologie 2023, loi du 6 aout 2015.

export const EXERCICE_A = [
  {
    id: 'domicile-professionnel',
    titre: 'Le domicile professionnel',
    sources: ['RIN art. 15', 'D. 27 nov. 1991', 'art. 8 CEDH'],
    principes: ['dignité', 'indépendance', 'secret professionnel', 'honneur'],
    accroche: 'Le domicile professionnel est le point de rattachement ordinal de l’avocat : il détermine son barreau d’inscription, l’autorité disciplinaire compétente et l’étendue de sa postulation. Derrière une question apparemment matérielle se joue donc l’essentiel : l’unicité du rattachement disciplinaire et la garantie du secret.',
    plan: [
      {
        t: 'I. Une exigence de rattachement et d’effectivité',
        pts: [
          'Le domicile professionnel est fixé dans le ressort du tribunal judiciaire auprès duquel l’avocat est inscrit. Principe d’unicité : un seul cabinet principal, un seul tableau.',
          'Exercice réel et non simplement apparent, permanent et stable. En exercice de groupe, le domicile est fixé au siège de la structure ou au domicile professionnel de ses membres.',
          'Conditions matérielles : conformité aux usages et aux principes essentiels, pièce de réception et bureau de travail, ligne dédiée et locaux garantissant le secret, adresse électronique.',
          'Changement de domicile : déclaration préalable au bâtonnier, qui peut faire procéder aux vérifications utiles ; hors du ressort, il faut une démission puis une réinscription.'
        ]
      },
      {
        t: 'II. Un domicile protégé, mais sous contrôle ordinal',
        pts: [
          'Casuistique de l’indépendance : locaux d’une entreprise cliente interdits, décision du Conseil d’État ; client détenant les clés interdit ; coworking et centre d’affaires admis sous réserve du secret et d’un local loué à temps complet.',
          'Domiciliation temporaire dans les locaux de l’Ordre ou chez un confrère : possible sur convention écrite approuvée par le conseil de l’ordre, pour une durée limitée. La simple domiciliation chez un confrère est exclue.',
          'Contrôle du conseil de l’ordre, avec visites possibles ; son rôle est restreint, il émet un avis et transmet au bâtonnier qui peut engager des poursuites.',
          'Protection : l’article 8 de la Convention européenne s’applique au domicile professionnel ; perquisitions et visites domiciliaires supposent des garanties renforcées, dont la présence du bâtonnier.'
        ]
      }
    ],
    cles: [
      'Pluralité de domiciles autorisée : un cabinet principal, un ou plusieurs bureaux secondaires, un ou plusieurs établissements d’exercice. L’inscription reste unique.',
      'Cabinet au domicile personnel : admis si la dignité est respectée, avec de préférence une pièce de réception distincte du bureau de travail.',
      'Époux tous deux avocats : cabinets distincts exigés, même au domicile conjugal, sauf exercice en association ou en SCP.',
      'Ancien officier ministériel : il ne peut fixer son domicile professionnel au lieu de son ancienne étude. L’exercice d’un proche dans les mêmes locaux, autrefois interdit, n’est plus qu’un indice de collusion.',
      'Maintien à l’ancien cabinet après déménagement : trois mois au maximum, le temps de faire connaître les nouvelles conditions d’exercice au conseil de l’ordre.',
      'Établissement d’exercice, créé en 2016 : instrument de la pluralité d’exercice, il ne crée pas d’inscription nouvelle et ne déroge pas aux règles territoriales de la postulation.',
      'Avocat européen en libre prestation : élection de domicile chez un confrère pour les procédures à représentation obligatoire, mais il postule librement.',
      'Local insalubre : manquement à la dignité, motif de refus.'
    ],
    cartes: [
      { q: 'Où doit être fixé le domicile professionnel de l’avocat ?', r: 'Dans le ressort du tribunal judiciaire auprès duquel il est inscrit. Il ne peut être inscrit qu’à un seul tableau.', src: 'RIN art. 15' },
      { q: 'Peut‑on domicilier son cabinet dans les locaux d’une entreprise cliente ?', r: 'Non. Le Conseil d’État a annulé la modification du RIN qui l’autorisait : la dépendance matérielle et fonctionnelle est incompatible avec l’indépendance.', src: 'CE ; RIN art. 15' },
      { q: 'Le coworking est‑il admis ?', r: 'Oui, après évolution de la jurisprudence, sous réserve que le local soit loué à temps complet, que le secret soit garanti (bureau dédié, ligne propre, transfert de courrier) et que les principes essentiels soient respectés.', src: 'Jurisprudence ; RIN art. 15' },
      { q: 'Un client peut‑il détenir les clés du cabinet ?', r: 'Non : cela ne permet pas de garantir le secret professionnel et compromet l’indépendance.', src: 'Jurisprudence ordinale' },
      { q: 'Combien de temps peut‑on rester domicilié à son ancien cabinet ?', r: 'Trois mois au maximum, le temps de faire connaître au conseil de l’ordre les nouvelles conditions d’exercice.', src: 'RIN art. 15' },
      { q: 'Deux époux avocats peuvent‑ils partager un cabinet ?', r: 'Non : des cabinets distincts sont exigés, même au domicile conjugal, sauf s’ils exercent en association ou en société civile professionnelle.', src: 'RIN art. 15' },
      { q: 'Le domicile professionnel bénéficie‑t‑il de la protection de l’article 8 CEDH ?', r: 'Oui. Toute perquisition ou visite domiciliaire suppose des garanties spéciales : autorisation motivée du JLD, présence du bâtonnier, limitation aux éléments visés.', src: 'CEDH art. 8 ; CPP art. 56‑1' },
      { q: 'Qu’est‑ce qu’un établissement d’exercice ?', r: 'La structure au moyen de laquelle l’avocat cumule plusieurs modes d’exercice, créée en 2016. Elle ne crée pas d’inscription nouvelle et ne déroge pas aux règles territoriales de postulation.', src: 'RIN art. 15' }
    ],
    qcm: [
      { q: 'L’avocat peut être inscrit :', o: ['à un seul tableau', 'à deux tableaux au maximum', 'à autant de tableaux que de bureaux'], b: 0, e: 'Principe d’unicité de l’inscription, corollaire de l’unicité du rattachement disciplinaire.' },
      { q: 'Le cabinet dans les locaux d’une entreprise cliente est :', o: ['autorisé avec convention', 'interdit', 'autorisé si le secret est garanti'], b: 1, e: 'Interdit : le Conseil d’État a annulé la modification du RIN qui l’autorisait.' },
      { q: 'Le changement de domicile professionnel suppose :', o: ['une simple information a posteriori', 'une déclaration préalable au bâtonnier', 'une autorisation du CNB'], b: 1, e: 'Déclaration préalable ; le bâtonnier peut demander bail ou titre de propriété et faire procéder à des vérifications.' }
    ],
    jury: [
      { q: 'Pourquoi le domicile professionnel est‑il si encadré ?', r: 'Parce qu’il n’est pas qu’une adresse. Il détermine trois choses : le barreau d’inscription et donc l’autorité disciplinaire compétente, ce qui garantit l’unicité du rattachement quel que soit le nombre de lieux d’exercice ; le ressort de postulation, territorialement limité ; et les conditions matérielles du secret. C’est le point où la déontologie devient physique.' },
      { q: 'Un jeune confrère veut démarrer depuis un espace de coworking. Que lui dites‑vous ?', r: 'C’est aujourd’hui possible, la jurisprudence ayant évolué, mais à conditions strictes : un local loué à temps complet et non à l’heure, un bureau dédié permettant de recevoir sans être entendu, une ligne téléphonique propre, un circuit de courrier distinct, l’absence de salle d’attente, de secrétariat ou d’archives partagés avec des tiers. Le conseil de l’ordre peut visiter les locaux, et le refus se fonderait sur le secret, non sur la formule choisie.' },
      { q: 'Que se passe‑t‑il si l’exercice au domicile déclaré n’est qu’apparent ?', r: 'L’exigence est celle d’un exercice réel, effectif et permanent. Un domicile fictif expose à un refus d’inscription ou à une omission facultative pour absence d’exercice effectif sans motif légitime. À défaut d’établissement principal régulier, les activités exercées dans un bureau secondaire deviennent illicites et les cessions de clientèle privées d’objet.' },
      { q: 'L’avocat peut‑il consulter ailleurs qu’à son cabinet ?', r: 'Oui, il se déplace librement pour exercer ses fonctions, y compris à distance. La limite est la dignité : pas de consultation dans un bar ou un lieu inapproprié. La liberté de déplacement ne remet pas en cause l’exigence d’un lieu d’exercice effectif ni les règles de postulation.' },
      { q: 'L’avocat dont le conjoint est expert judiciaire peut‑il partager ses locaux ?', r: 'La règle a évolué. Autrefois interdit en raison du risque de collusion, d’atteinte à l’indépendance et à la liberté de choix du client, ce partage est aujourd’hui admis : il ne constitue plus qu’un indice permettant de caractériser une collusion. L’appréciation redevient concrète, ce qui est cohérent avec la méthode générale du droit disciplinaire.' }
    ],
    cas: {
      e: 'Un avocat installe son cabinet principal dans un centre d’affaires : accueil mutualisé, salle de réunion partagée, courrier réceptionné par l’hôtesse commune, pas de ligne propre. Le conseil de l’ordre peut‑il s’y opposer ?',
      r: 'Le centre d’affaires n’est pas interdit en soi, la Cour de cassation ayant opéré un revirement en ce sens. Mais l’admission est conditionnée : accueil dédié, bureau dédié respectant la confidentialité, ligne téléphonique propre et transfert de courrier organisé. Ici, trois conditions font défaut : l’accueil est mutualisé, le courrier transite par un tiers non tenu au secret, aucune ligne n’est dédiée. Le conseil de l’ordre peut donc refuser, non parce que la formule serait prohibée, mais parce que les conditions du secret et de l’indépendance ne sont pas réunies. La régularisation est simple : ligne propre, boîte aux lettres personnelle, engagement de confidentialité du prestataire.'
    }
  },

  {
    id: 'bureaux-secondaires',
    titre: 'Les bureaux secondaires',
    sources: ['RIN art. 15.3', 'D. 27 nov. 1991', 'L. 6 août 2015'],
    principes: ['indépendance', 'secret professionnel', 'confraternité'],
    accroche: 'Le bureau secondaire permet à l’avocat d’étendre géographiquement son activité sans rompre l’unicité de son rattachement ordinal. C’est une extension du cabinet principal, jamais un second domicile professionnel : le tableau, la discipline et la postulation restent commandés par l’établissement principal.',
    plan: [
      {
        t: 'I. Notion et procédure d’ouverture',
        pts: [
          'Installation professionnelle permanente, distincte du cabinet principal dont elle est l’extension, répondant aux conditions du domicile professionnel et à un exercice effectif : l’usage retenu étant de s’y rendre au moins deux fois par mois.',
          'Ouverture dans le ressort de son propre barreau : simple déclaration au conseil de l’ordre. Dans le ressort d’un autre barreau : déclaration au barreau d’origine et autorisation du conseil de l’ordre d’accueil, qui statue dans le mois, le silence valant acceptation.',
          'À l’étranger : déclaration au conseil de l’ordre d’origine dans l’Union européenne, autorisation préalable hors Union, avec assurance couvrant les activités à l’étranger.',
          'Régime parisien : un avocat inscrit à Paris, Bobigny, Créteil ou Nanterre ne peut ouvrir de bureau secondaire dans le ressort de l’un de ces tribunaux autre que le sien, en raison de la multipostulation.'
        ]
      },
      {
        t: 'II. Effets : discipline, postulation, charges',
        pts: [
          'Discipline : l’avocat reste soumis à la discipline de son ordre d’inscription, mais doit se conformer au règlement intérieur du barreau d’accueil pour l’activité qu’il y exerce.',
          'Postulation inchangée : il ne postule que devant les tribunaux judiciaires du ressort de la cour d’appel où est établi son cabinet principal. La société interbarreaux ne postule dans le ressort du bureau secondaire que si un associé y est inscrit.',
          'Charges : cotisation au barreau d’accueil, jamais supérieure à celle des avocats locaux, dans le respect de l’égalité ; extension de l’assurance et des garanties financières aux actes accomplis dans le bureau secondaire.',
          'Depuis la loi du 6 août 2015, obligations d’aide à l’accès au droit, d’aide à l’intervention de l’avocat et de commission d’office également au barreau d’accueil.'
        ]
      }
    ],
    cles: [
      'Motifs de refus opérants : conditions matérielles et déontologiques d’exercice dans le bureau secondaire. Motifs inopérants : comportement dans le barreau d’origine, absence de rentabilité.',
      'La décision de refus ou de retrait suppose un débat contradictoire et une motivation ; appel dans les quinze jours devant la cour d’appel, par l’avocat ou le procureur général.',
      'Silence du conseil de l’ordre d’accueil pendant un mois : autorisation tacite. L’avocat en informe alors son bâtonnier, celui du barreau d’accueil et le procureur général.',
      'Hors Union européenne : délai d’instruction de deux mois, silence valant autorisation tacite, plus autorisation de l’autorité locale compétente.',
      'Fermeture : information du bâtonnier d’origine et de celui du barreau d’accueil. Le conseil de l’ordre d’accueil peut fermer un bureau où l’exercice n’est pas effectif.',
      'Un second bureau secondaire peut être ouvert dans un ressort où il en existe déjà un.',
      'Bureau secondaire en entreprise : interdit, comme le cabinet principal, pour les mêmes motifs d’indépendance.',
      'Le collaborateur libéral n’est redevable de la cotisation au barreau d’accueil que s’il y développe une clientèle personnelle.'
    ],
    cartes: [
      { q: 'Qu’est‑ce qu’un bureau secondaire ?', r: 'Une installation professionnelle permanente, distincte du cabinet principal dont elle est l’extension, répondant aux conditions du domicile professionnel et à un exercice effectif.', src: 'RIN art. 15.3' },
      { q: 'Quelle formalité pour ouvrir un bureau secondaire dans un autre barreau ?', r: 'Déclaration au barreau d’origine et demande d’autorisation au conseil de l’ordre du barreau d’accueil, qui statue dans le mois ; le silence vaut autorisation.', src: 'RIN art. 15.3' },
      { q: 'Quels motifs de refus sont inopérants ?', r: 'Ceux tirés du comportement de l’avocat dans son barreau d’origine, seul compétent, et ceux tirés de l’absence de rentabilité économique du bureau projeté.', src: 'Jurisprudence' },
      { q: 'Le bureau secondaire modifie‑t‑il la postulation ?', r: 'Non. L’avocat ne postule que devant les tribunaux judiciaires du ressort de la cour d’appel de son cabinet principal.', src: 'L. 1971 ; RIN' },
      { q: 'Quelle cotisation est due au barreau d’accueil ?', r: 'Celle fixée par son conseil de l’ordre, dans le respect de l’égalité : elle peut être inférieure ou égale à celle des avocats locaux, jamais supérieure sans justification d’une charge particulière.', src: 'Jurisprudence' },
      { q: 'Peut‑on ouvrir un bureau secondaire à Bobigny quand on est inscrit à Paris ?', r: 'Non. Le régime de multipostulation interdit à un avocat inscrit à Paris, Bobigny, Créteil ou Nanterre d’ouvrir un bureau secondaire dans le ressort de l’un de ces tribunaux autre que le sien.', src: 'RIN art. 15.3' },
      { q: 'Quel délai d’instruction hors Union européenne ?', r: 'Deux mois, le silence valant autorisation tacite, outre l’autorisation de l’autorité compétente de l’État concerné et une assurance couvrant les activités à l’étranger.', src: 'RIN art. 15.3' },
      { q: 'À quelle fréquence faut‑il se rendre dans son bureau secondaire ?', r: 'L’usage retient au moins deux fois par mois, pour caractériser l’exercice effectif. À défaut, le conseil de l’ordre d’accueil peut en décider la fermeture.', src: 'RIN art. 15.3' }
    ],
    qcm: [
      { q: 'Le silence du conseil de l’ordre d’accueil pendant un mois vaut :', o: ['rejet', 'autorisation', 'prorogation'], b: 1, e: 'Autorisation tacite ; l’avocat en informe alors son bâtonnier, celui d’accueil et le procureur général.' },
      { q: 'Le refus d’ouverture peut être fondé sur :', o: ['la rentabilité du projet', 'les conditions d’exercice dans le bureau secondaire', 'des fautes commises au barreau d’origine'], b: 1, e: 'Seuls les motifs tirés des conditions d’exercice sur place sont opérants.' },
      { q: 'Un bureau secondaire situé dans le ressort d’une autre cour d’appel permet :', o: ['d’y postuler', 'd’y recevoir la clientèle et d’y plaider, sans y postuler', 'de changer de barreau'], b: 1, e: 'La postulation reste attachée au ressort de la cour d’appel du cabinet principal. Un bureau secondaire dans un autre barreau du même ressort ne pose donc pas la question.' }
    ],
    jury: [
      { q: 'Un bureau secondaire est‑il un second domicile professionnel ?', r: 'Non, et la nuance est décisive. C’est une extension du cabinet principal, dont il dépend juridiquement. Il ne crée pas d’inscription nouvelle, ne déplace pas l’autorité disciplinaire, ne modifie pas la postulation. Il se distingue de l’établissement d’exercice, instrument de la pluralité d’exercice, et de la succursale d’une société interbarreaux, qui existe là où un associé est établi.' },
      { q: 'Que se passe‑t‑il si le cabinet principal n’est qu’une adresse de façade ?', r: 'Les activités exercées dans le bureau secondaire deviennent illicites, faute d’établissement principal régulier, et les cessions de clientèle qui s’y rapportent sont privées d’objet. Le bureau secondaire ne peut exister sans le principal dont il est l’extension : c’est la conséquence directe de sa nature accessoire.' },
      { q: 'Un différend surgit avec le barreau d’accueil. Qui est compétent ?', r: 'L’avocat reste soumis à la discipline de son ordre d’inscription : c’est son bâtonnier ou le procureur général de son ressort qui poursuit. S’il rencontre des difficultés avec le barreau d’accueil, il en informe le conseil de l’ordre d’origine. En matière d’honoraires, la compétence appartient au bâtonnier du barreau d’origine.' },
      { q: 'Le barreau d’accueil peut‑il fixer une cotisation dissuasive ?', r: 'Non. La cotisation ne peut être telle qu’elle constitue une restriction de concurrence, et le principe d’égalité impose qu’elle soit calculée de la même manière pour tous. Elle peut être réduite ou égale à celle des avocats locaux, jamais supérieure, à moins que le barreau ne démontre que les bureaux secondaires entraînent une charge financière particulière. Les motifs tirés d’un usage partiel des services de l’Ordre ou de la modestie de l’activité sont inopérants.' },
      { q: 'La loi Macron a‑t‑elle changé quelque chose ?', r: 'Oui, sur deux plans. Elle a facilité l’implantation en portant la postulation au niveau de la cour d’appel, ce qui a réduit l’intérêt du bureau secondaire pour la seule postulation. Et elle a imposé, depuis 2015, de satisfaire aux obligations d’aide à l’accès au droit, d’aide à l’intervention de l’avocat dans les procédures non juridictionnelles et de commission d’office également dans le barreau d’accueil.' }
    ],
    cas: {
      e: 'Un avocat inscrit à Lyon ouvre un bureau secondaire à Grenoble. Il n’en informe personne, y reçoit sa clientèle et postule devant le tribunal judiciaire de Grenoble. Quelles irrégularités relevez‑vous ?',
      r: 'Trois. Premièrement, l’absence de déclaration au barreau d’origine et de demande d’autorisation au conseil de l’ordre de Grenoble, obligatoire dès lors que le bureau se situe dans le ressort d’un autre barreau. L’inobservation de ces formalités n’entraîne ni fin de non‑recevoir ni nullité, mais expose à des poursuites disciplinaires. Deuxièmement, la postulation à Grenoble est irrégulière : Lyon et Grenoble relèvent de la même cour d’appel, la postulation y est donc possible, l’irrégularité n’existerait que si le ressort de cour d’appel différait, auquel cas le défaut de capacité invaliderait l’acte. Troisièmement, il n’a acquitté ni cotisation au barreau d’accueil ni étendu son assurance et ses garanties financières aux actes du bureau secondaire, ce dernier point pouvant emporter omission obligatoire du tableau.'
    }
  },

  {
    id: 'champ-activite',
    titre: 'Le champ d’activité professionnelle',
    sources: ['RIN art. 6 et 7', 'L. 31 déc. 1971, art. 4, 6 et 54 s.', 'L. 28 mars 2011 (acte d’avocat)'],
    principes: ['compétence', 'indépendance', 'secret professionnel'],
    accroche: 'L’avocat est défini par la loi comme un acteur de la pratique universelle du droit et le défenseur des droits et libertés. Son champ s’organise autour de trois missions inhérentes (assistance, représentation, maniement de fonds) auxquelles s’ajoute une liste ouverte de missions non inhérentes, accessoires, qui ont profondément élargi le métier.',
    plan: [
      {
        t: 'I. Les missions inhérentes à la profession',
        pts: [
          'Assistance judiciaire : conseiller et présenter la défense sans engager la partie. Monopole de principe devant les juridictions pénales, administratives, cours d’appel, tribunaux judiciaires et de commerce, avec des exceptions notamment en deçà de 10 000 euros.',
          'Assistance juridique : consultation et rédaction d’actes, sans monopole. L’acte d’avocat, créé en 2011, est un monopole : contresigné, il fait foi de l’écriture et de la signature des parties et atteste que le devoir de conseil a été rempli. Force probante supérieure à l’acte sous seing privé, inférieure à l’acte authentique.',
          'Représentation : mandat ad litem, présumé, général, dispensant de justifier d’une procuration ; il ne s’étend ni aux voies de recours ni à l’inscription de faux, qui exigent un mandat spécial écrit. Monopole de la postulation.',
          'Maniement de fonds, accessoire d’un acte juridique ou judiciaire, avec dépôt sans délai à la CARPA.'
        ]
      },
      {
        t: 'II. Les missions non inhérentes, accessoires et encadrées',
        pts: [
          'Liste non limitative de l’article 6.3 du RIN : fiduciaire, représentant fiscal, tiers de confiance, lobbyiste, délégué à la protection des données, mandataire d’intermédiaire d’assurances, mandataire en recouvrement, enseignement, mandataire aux enchères judiciaires, enquêteur interne, missions de justice, mandataire en transactions immobilières, gestionnaire de portefeuille ou d’immeubles, syndic, mandataire sportif, mandataire d’artistes et d’auteurs.',
          'Caractère nécessairement accessoire : il doit s’agir d’une mission, non d’une profession, sous peine d’incompatibilité.',
          'Contraintes propres : mandat écrit, déclaration au bâtonnier pour certaines, assurance spéciale et formation pour le fiduciaire, plafond de 10 % pour le mandataire sportif, honoraires réglementés pour les enchères judiciaires.',
          'Levées ponctuelles du secret : identité du client et honoraires pour le lobbyiste, transmission du contrat aux fédérations pour le mandataire sportif, contrôles des organes de la fiducie.'
        ]
      }
    ],
    cles: [
      'Représentation et assistance ne se confondent pas : la représentation emporte l’assistance, l’inverse est faux.',
      'Le rédacteur d’acte est tenu d’une obligation de conseil absolue, y compris envers un client juriste, et d’une obligation de résultat quant à la validité et l’efficacité de l’acte et aux formalités subséquentes.',
      'Rédacteur unique : l’avocat ne l’est plus dès lors que la partie adverse est assistée d’un conseil. Rédacteur unique et conseil de toutes les parties : obligation de conseil renforcée, équilibre des intérêts, et interdiction d’agir sur l’acte.',
      'Divorce par consentement mutuel : projet adressé par LRAR à chaque époux quinze jours avant signature, signature en présence physique et simultanée des parties et des avocats, dépôt au rang des minutes d’un notaire.',
      'Prestations juridiques en ligne : le contenu reste de l’assistance juridique, seule la forme change. L’avocat doit vérifier la conformité de la plateforme et conserver la maîtrise de ses honoraires.',
      'Une plateforme ne peut ni collecter les honoraires pour le compte de l’avocat, sauf agrément, ni voir sa rémunération dépendre de ceux‑ci.',
      'Représentation obligatoire : tribunaux répressifs, cours d’appel, tribunal judiciaire, tribunal de commerce au‑delà de 10 000 euros. Monopole des avocats aux Conseils devant le Conseil d’État et la Cour de cassation.',
      'La procédure participative est un monopole de l’avocat.'
    ],
    cartes: [
      { q: 'Quelles sont les trois missions inhérentes à la profession ?', r: 'L’assistance, la représentation et le maniement de fonds.', src: 'RIN art. 6' },
      { q: 'Qu’est‑ce que l’acte d’avocat ?', r: 'Un acte sous seing privé contresigné par avocat, créé par la loi du 28 mars 2011. Il fait foi de l’écriture et de la signature des parties, atteste que le devoir de conseil a été rempli, et peut recevoir la formule exécutoire.', src: 'L. 28 mars 2011' },
      { q: 'Le mandat ad litem couvre‑t‑il l’exercice des voies de recours ?', r: 'Non. Il est général pour les actes de la procédure, mais l’exercice des voies de recours et l’inscription de faux exigent un mandat spécial écrit.', src: 'CPC ; jurisprudence' },
      { q: 'Le rédacteur unique conseil de toutes les parties peut‑il plaider sur l’acte ?', r: 'Non : il ne peut agir ni défendre sur sa validité, son exécution ou son interprétation, sauf si la contestation émane d’un tiers.', src: 'RIN art. 7' },
      { q: 'Quel est le plafond de rémunération de l’avocat mandataire sportif ?', r: 'Dix pour cent du montant du contrat, tous intervenants confondus, et il ne peut être rémunéré que par son client.', src: 'Code du sport ; RIN art. 6.3' },
      { q: 'Combien de temps avant la signature le projet de convention de divorce doit‑il être adressé ?', r: 'Quinze jours à compter de la réception, par lettre recommandée avec accusé de réception adressée par chaque avocat à son client.', src: 'C. civ. art. 229‑4' },
      { q: 'Une plateforme peut‑elle encaisser les honoraires de l’avocat ?', r: 'Non, sauf s’il s’agit d’une entreprise agréée dans les conditions du code monétaire et financier. Sa rémunération ne peut en outre dépendre des honoraires perçus.', src: 'RIN art. 19' },
      { q: 'À partir de quel montant la représentation est‑elle obligatoire devant le tribunal de commerce ?', r: '10 000 euros, sauf matières exclues comme les procédures collectives ou la tenue du registre du commerce.', src: 'CPC ; L. 31 déc. 1971' },
      { q: 'L’avocat qui signe un acte qu’il n’a pas rédigé en est‑il rédacteur ?', r: 'Oui : apposer sa signature sur un acte non rédigé par lui suffit à lui conférer la qualité de rédacteur, avec les obligations qui s’y attachent.', src: 'RIN art. 7' }
    ],
    qcm: [
      { q: 'L’acte d’avocat a une force probante :', o: ['supérieure à l’acte authentique', 'supérieure à l’acte sous seing privé ordinaire', 'identique à un courrier simple'], b: 1, e: 'Supérieure au sous seing privé (la contestation passe par l’inscription de faux) mais inférieure à l’acte authentique.' },
      { q: 'Le mandat ad litem est :', o: ['présumé et général', 'écrit à peine de nullité', 'limité aux actes énumérés dans une procuration'], b: 0, e: 'Présomption simple, générale pour les actes de procédure. Mandat spécial écrit requis pour les voies de recours et l’inscription de faux.' },
      { q: 'Le mandataire sportif avocat peut être rémunéré :', o: ['par le club', 'par son seul client, dans la limite de 10 %', 'au forfait sans plafond'], b: 1, e: 'Par son seul client, plafond de 10 % du montant du contrat, tous intervenants confondus.' },
      { q: 'La procédure participative est :', o: ['ouverte à tout tiers', 'un monopole de l’avocat', 'réservée aux notaires'], b: 1, e: 'Les avocats en ont le monopole ; les parties s’engagent à œuvrer conjointement et de bonne foi à la résolution amiable.' }
    ],
    jury: [
      { q: 'Pourquoi l’obligation du rédacteur d’acte est‑elle de résultat ?', r: 'Parce que la rédaction n’est pas soumise à l’aléa judiciaire. L’avocat doit assurer la validité et la pleine efficacité de l’acte au regard du but poursuivi par les parties, accomplir les formalités subséquentes, vérifier les documents et interroger les parties. C’est une obligation de comportement actif. Elle cède si le client, dûment averti par écrit des risques, persiste dans son intention.' },
      { q: 'Peut‑on exercer une activité totalement étrangère au droit ?', r: 'Oui, sous conditions. L’enseignement, même non juridique (yoga, ski, danse) est admis dès lors qu’il reste accessoire, secondaire et occasionnel, et ne constitue pas l’exercice d’une véritable profession. La ligne de partage est là : une mission accessoire est compatible, une seconde profession ne l’est pas.' },
      { q: 'Quelle est la différence entre consultation juridique et information juridique ?', r: 'La consultation est une prestation intellectuelle personnalisée tendant, sur une question posée, à fournir un avis ou un conseil fondé sur l’application d’une règle de droit en vue d’une décision. L’information est générale et impersonnelle. La distinction est opératoire : sur un plateau de télévision ou en live tweet, l’avocat ne peut donner qu’une information, faute de pouvoir vérifier l’identité de son interlocuteur, prévenir un conflit d’intérêts et garantir le secret.' },
      { q: 'L’avocat fiduciaire reste‑t‑il un avocat ?', r: 'La qualité de fiduciaire est attachée à celle d’avocat : la perte de l’une emporte celle de l’autre. Mais son régime déroge largement : formation spécifique, assurance additionnelle couvrant la restitution (5 % de la valeur des immeubles, 20 % des autres biens), comptabilité, papier à en‑tête et archivage distincts, mention obligatoire de sa qualité, correspondance directe avec Tracfin sans le filtre du bâtonnier, et absence de confidentialité des échanges à l’égard des organes de contrôle.' },
      { q: 'Le champ d’activité s’est‑il trop élargi ?', r: 'C’est un débat. L’élargissement répond à une demande de service global et à la concurrence d’autres professions. Le garde‑fou tient en trois règles : le caractère accessoire, qui évite la seconde profession ; les incompatibilités, qui écartent l’activité commerciale et la subordination ; et les obligations déclaratives, qui permettent au bâtonnier de contrôler. Le risque résiduel est celui de la dilution de l’identité : l’avocat mandataire en transactions immobilières doit veiller à ne pas se présenter comme intervenant exclusivement dans ce domaine.' }
    ],
    cas: {
      e: 'Un avocat rédige seul le protocole de cession d’un fonds de commerce. Le cédant est son client de longue date ; le cessionnaire, non assisté, signe sans réserve. Deux ans plus tard, le cessionnaire attaque l’acte en nullité. L’avocat peut‑il défendre son client cédant ?',
      r: 'Non. Il faut d’abord qualifier : il est rédacteur unique, la partie adverse n’étant assistée d’aucun conseil, et il était le conseil de toutes les parties dès lors qu’il n’a pas invité le cessionnaire à se faire assister et lui a de fait délivré conseil. Dans cette configuration, l’article 7 du RIN lui interdit d’agir ou de défendre sur la validité, l’exécution ou l’interprétation de l’acte, sauf si la contestation émane d’un tiers, ce qui n’est pas le cas. Il doit se déporter. En amont, deux fautes : il aurait dû informer le cessionnaire de sa faculté d’être assisté, et veiller à l’équilibre des intérêts au titre de son obligation de conseil renforcée. La leçon pratique est de mentionner dans l’acte l’identité des rédacteurs et des conseils de chaque partie, la qualification commandant à la fois les obligations et la faculté d’intervenir ensuite.'
    }
  },

  {
    id: 'incompatibilites',
    titre: 'Les incompatibilités',
    sources: ['RIN art. 1.1', 'D. 27 nov. 1991, art. 111 à 123', 'L. 6 août 2015'],
    principes: ['indépendance', 'désintéressement', 'dignité', 'dévouement'],
    accroche: 'L’incompatibilité n’est pas une interdiction gratuite : elle est le prolongement matériel de l’indépendance. Une profession libérale qui ne peut être ni subordonnée ni animée par un esprit de lucre doit se protéger de tout ce qui la placerait sous une autre autorité ou sous une autre logique économique.',
    plan: [
      {
        t: 'I. Les incompatibilités strictes',
        pts: [
          'Exclusivité ordinale : on ne peut être fidèle à deux ordres. Sont exclues les autres professions libérales réglementées (médecin, notaire, commissaire de justice, mandataire judiciaire, expert immobilier) sauf texte contraire.',
          'Prohibition de la subordination : l’avocat ne peut être lié par un contrat de travail, sauf l’exception encadrée du collaborateur salarié. Le fonctionnaire ne peut être avocat pendant l’application de son statut.',
          'Prohibition de l’activité commerciale, appréciée par son objet et non par l’inscription au registre : agent d’affaires, courtier, agent sportif, trader, hôtelier.',
          'Fonctions sociales interdites lorsqu’elles engagent au‑delà des apports : associé en nom collectif, commandité, gérant de SARL ou de société civile, membre du directoire, directeur général de société anonyme.'
        ]
      },
      {
        t: 'II. Les incompatibilités partielles et les compatibilités',
        pts: [
          'Exceptions aux fonctions sociales : président du conseil d’administration d’une société anonyme, associé ou actionnaire, membre du conseil de surveillance ou administrateur sous condition de sept années d’exercice, sans pouvoir plaider ni conseiller cette société. Déclaration au bâtonnier.',
          'Loi Macron : exercice de ces fonctions admis si la société a pour objet la gestion d’intérêts familiaux ou l’exercice de la profession ; commercialisation à titre accessoire de biens ou services connexes destinés aux clients ou aux confrères, avec information écrite du conseil de l’ordre dans les trente jours.',
          'Mandats électifs : compatibles, mais interdiction d’accomplir des actes de la profession dans les affaires intéressant la chose publique, la presse, le crédit ou l’épargne ; interdiction de plaider contre l’État ou la collectivité concernée.',
          'Fonctionnaires : incapacité partielle de cinq ans après la cessation des fonctions, à l’égard des administrations dont ils relevaient ; interdiction permanente pour les enseignants. Compatibilités expresses : enseignement, assesseur, conseiller prud’homme, membre du pôle social.'
        ]
      }
    ],
    cles: [
      'L’incompatibilité s’apprécie au moment de l’inscription, et son interprétation est restrictive.',
      'La sanction est l’omission obligatoire du tableau, à côté des poursuites disciplinaires.',
      'Le collaborateur salarié n’est pas une exception à l’indépendance : la subordination ne porte que sur les conditions de travail, jamais sur l’argumentation ni sur la conscience.',
      'Le fonctionnaire mis en disponibilité peut être inscrit : il se place hors de son administration.',
      'Mission temporaire de l’État : l’avocat en avise le bâtonnier, qui saisit le conseil de l’ordre ; la rémunération est possible s’il n’accomplit aucun acte de la profession pendant la mission.',
      'Attaché ou collaborateur parlementaire : compatible, mais aucun acte de la profession en faveur des personnes reçues dans le cadre de ces fonctions.',
      'Élu local : interdiction d’exercer directement ou indirectement contre la collectivité, ses entités et ses établissements publics.',
      'Médiateur salarié et conciliateur de justice : incompatibles avec la profession d’avocat.'
    ],
    cartes: [
      { q: 'À quel moment s’apprécie l’incompatibilité ?', r: 'Au moment de l’inscription, et l’interprétation en est restrictive. Elle peut aussi survenir en cours d’exercice et emporte alors omission obligatoire.', src: 'D. 27 nov. 1991, art. 111' },
      { q: 'Quelle est la sanction d’une incompatibilité ?', r: 'L’omission obligatoire du tableau, prononcée par le conseil de l’ordre, sans préjudice de poursuites disciplinaires.', src: 'D. 27 nov. 1991' },
      { q: 'Quelles fonctions sociales sont interdites à l’avocat ?', r: 'Associé en nom collectif, associé commandité, gérant de SARL ou de société civile, membre du directoire, directeur général de société anonyme : toutes celles qui engagent au‑delà des apports.', src: 'D. 27 nov. 1991, art. 111' },
      { q: 'L’avocat peut‑il être administrateur d’une société anonyme ?', r: 'Oui, comme membre du conseil de surveillance ou administrateur, s’il justifie de sept années d’exercice sauf dispense. Il ne peut alors ni plaider, ni assister, ni conseiller cette société. Déclaration au bâtonnier.', src: 'D. 27 nov. 1991' },
      { q: 'Qu’a permis la loi Macron en matière d’incompatibilités ?', r: 'L’exercice de fonctions sociales dans une société de gestion d’intérêts familiaux ou d’exercice de la profession, et la commercialisation à titre accessoire de biens ou services connexes destinés aux clients ou aux confrères. Information écrite du conseil de l’ordre dans les trente jours.', src: 'L. 6 août 2015' },
      { q: 'Quelle limitation frappe l’ancien fonctionnaire devenu avocat ?', r: 'Pendant cinq ans à compter de la cessation de ses fonctions, il ne peut conclure ni plaider contre les administrations dont il relevait. L’interdiction est permanente pour les enseignants à l’égard de l’État.', src: 'D. 27 nov. 1991' },
      { q: 'Un avocat parlementaire peut‑il plaider contre l’État ?', r: 'Non, sauf pour un dommage causé par un véhicule de l’État ou d’une personne morale de droit public. Il ne peut davantage consulter ou plaider pour une entreprise nationale ou subventionnée, sauf s’il en était le conseil habituel avant son élection.', src: 'D. 27 nov. 1991' },
      { q: 'Quelles fonctions sont expressément compatibles ?', r: 'Enseignement, assesseur des tribunaux pour enfants ou paritaires de baux ruraux, conseiller prud’homme, membre du pôle social du tribunal judiciaire, et les fonctions juridictionnelles limitativement prévues par le code de l’organisation judiciaire.', src: 'D. 27 nov. 1991' }
    ],
    qcm: [
      { q: 'L’activité commerciale est incompatible :', o: ['seulement si l’avocat est inscrit au registre du commerce', 'quel que soit le formalisme, y compris par personne interposée', 'seulement si elle est principale'], b: 1, e: 'C’est le lien avec une activité commerciale qui compte, l’esprit de lucre, indépendamment de toute inscription.' },
      { q: 'L’avocat peut être :', o: ['gérant de SARL', 'président du conseil d’administration d’une SA', 'associé commandité'], b: 1, e: 'Depuis un décret de 2020. Gérance et commandite engagent au‑delà des apports et restent interdites.' },
      { q: 'Le conciliateur de justice est :', o: ['compatible', 'incompatible', 'compatible après cinq ans'], b: 1, e: 'Incompatible, de même que la fonction de médiateur salarié.' },
      { q: 'L’ancien fonctionnaire ne peut plaider contre son ancienne administration pendant :', o: ['3 ans', '5 ans', '10 ans'], b: 1, e: 'Cinq ans à compter de la cessation des fonctions. À ne pas confondre avec le délit de pantouflage, qui vise trois ans.' }
    ],
    jury: [
      { q: 'Pourquoi l’activité commerciale est‑elle incompatible ?', r: 'Parce qu’elle repose sur un esprit de lucre inconciliable avec le désintéressement, et parce qu’elle place l’avocat dans une logique de marge et de risque qui peut compromettre son indépendance à l’égard de ses partenaires. L’appréciation est fonctionnelle : peu importe l’inscription au registre du commerce ou la qualité de commerçant de fait, ce qui compte est le lien avec une activité commerciale, y compris par personne interposée.' },
      { q: 'Un avocat peut‑il être loueur en meublé ?', r: 'Oui, la gestion d’un patrimoine personnel n’est pas une activité commerciale, à la différence de l’activité hôtelière. La ligne est celle de la dérive : la location d’un bien propre relève de la gestion patrimoniale, mais l’organisation d’une véritable exploitation, avec services associés et volume, bascule dans le commercial et devient incompatible.' },
      { q: 'Le collaborateur salarié contredit‑il l’indépendance ?', r: 'Non, parce que le lien de subordination est strictement circonscrit aux conditions de travail. L’avocat salarié conserve son indépendance intellectuelle : il informe son employeur si son argumentation diffère de la sienne, il dispose de la clause de conscience, il ne peut recevoir d’instruction sur le contenu de sa défense. Le contrat est contrôlé par le conseil de l’ordre, et les clauses portant atteinte à l’indépendance sont interdites.' },
      { q: 'Qu’est‑ce que le délit de pantouflage, et concerne‑t‑il l’avocat ?', r: 'C’est la prise illégale d’intérêts commise par un ancien agent public qui rejoint, dans les trois ans de la cessation de ses fonctions, une entreprise privée qu’il surveillait, contrôlait ou avec laquelle il contractait. Trois ans d’emprisonnement et 200 000 euros d’amende, avec peine complémentaire d’interdiction d’exercer l’activité d’avocat. Il ne se confond pas avec l’incapacité partielle de cinq ans prévue par le décret de 1991, qui vise l’interdiction de plaider contre l’administration d’origine.' },
      { q: 'La loi Macron a‑t‑elle affaibli le principe ?', r: 'Elle l’a assoupli sans le renverser. La commercialisation accessoire suppose trois conditions cumulatives : caractère accessoire, connexité avec la profession, et destination aux clients ou aux confrères, édition juridique, formation, mise à disposition de moyens, legaltech. L’avocat ne peut en tirer l’essentiel de ses revenus, et doit informer le conseil de l’ordre dans les trente jours. Le contrôle demeure, seul le périmètre s’est déplacé.' }
    ],
    cas: {
      e: 'Une avocate est gérante de la SCI familiale qui détient l’appartement de ses parents et le local de son cabinet. Elle envisage par ailleurs de devenir présidente du conseil d’administration d’une société anonyme cliente. Que lui conseillez‑vous ?',
      r: 'Deux réponses distinctes. Sur la SCI : la gérance d’une société civile est en principe incompatible, mais la loi du 6 août 2015 admet l’exercice de ces fonctions lorsque la société a pour objet la gestion d’intérêts familiaux. Encore faut‑il que cet objet soit réel, statutairement et en fait, et de nature patrimoniale : la prise de participations financières dans d’autres sociétés ou toute finalité entrepreneuriale ferait basculer dans l’incompatibilité. La situation est ici régulière, sous réserve d’informer par écrit le conseil de l’ordre dans les trente jours. Sur la présidence du conseil d’administration : elle est possible depuis 2020 et suppose une déclaration au bâtonnier, mais elle est ici doublement problématique, car la société est cliente. L’avocate ne pourrait plus plaider, assister ni conseiller cette société, ce qui la placerait en conflit d’intérêts avec sa propre activité. Il faut choisir : le mandat social ou le client.'
    }
  },

  {
    id: 'publicite',
    titre: 'La publicité personnelle de l’avocat',
    sources: ['RIN art. 10', 'L. 31 déc. 1971', 'L. 17 mars 2014 (sollicitation personnalisée)'],
    principes: ['loyauté', 'dignité', 'délicatesse', 'modération', 'confraternité'],
    accroche: 'Longtemps prohibée, la publicité de l’avocat a été libérée sous la pression du droit européen de la concurrence, la loi de 2014 y ajoutant la sollicitation personnalisée. La liberté est aujourd’hui le principe, mais elle reste bornée par une exigence de sincérité et par les principes essentiels : l’avocat informe, il ne fait pas commerce de sa qualité.',
    plan: [
      {
        t: 'I. Le principe : une communication libre mais sincère',
        pts: [
          'Publicité personnelle et information professionnelle relèvent désormais du même régime. Sont permises si elles procurent une information sincère sur la nature des prestations et respectent les principes essentiels.',
          'Obligation d’identification : faire état de sa qualité et fournir, quel que soit le support, tout élément permettant de l’identifier, de le contacter, de le localiser, de connaître son barreau, sa structure et le réseau dont il est membre.',
          'Communication au conseil de l’ordre sans délai ; le bâtonnier rend un avis. Sont autorisées la mention des spécialisations, des qualifications spécifiques et de trois domaines d’activité dominante au plus.',
          'Tous supports admis : tracts, affiches, radio, télévision, colloques, encarts, site internet, application, goodies, plaque et enseigne discrète.'
        ]
      },
      {
        t: 'II. Les limites : ce que l’article 10.2 interdit',
        pts: [
          'Mentions comparatives ou dénigrantes ; publicités mensongères ou trompeuses ; mentions créant l’apparence d’une structure inexistante ou d’une qualification non reconnue ; références à des fonctions juridictionnelles ou sans lien avec la profession ; recours à un tiers pour contourner ces interdictions.',
          'Sollicitation personnalisée : communication directe ou indirecte visant à promouvoir ses services auprès d’une personne déterminée. Écrite seulement, par voie postale ou électronique ; démarchage physique, téléphonique et SMS interdits. Elle doit indiquer les modalités de détermination du coût et l’existence d’une convention d’honoraires.',
          'Internet : information du conseil de l’ordre à l’ouverture ou lors de toute modification substantielle ; nom de domaine comportant le nom de l’avocat ou du cabinet, les dénominations génériques étant prohibées ; interdiction des bannières publicitaires de tiers et des liens vers des sites contraires aux principes essentiels.',
          'Réseaux sociaux : plus grande retenue, respect du secret y compris de l’enquête et de l’instruction, pas de nom de client, modération des commentaires de tiers dont l’avocat répond.'
        ]
      }
    ],
    cles: [
      'La publicité ciblée par catégories n’est pas une sollicitation personnalisée : celle‑ci suppose une personne physique ou morale déterminée.',
      'Les avis et notations de clients ne sont pas conformes aux principes essentiels : sincérité invérifiable, risque de faux avis, atteinte possible au secret.',
      'Plaquettes de présentation : elles ne peuvent mentionner ni le nom des clients ni des activités étrangères à la profession.',
      'Lettres d’information : le destinataire doit s’être inscrit lui‑même et pouvoir se désabonner à chaque envoi.',
      'Le port de la robe sur un cliché publicitaire peut être considéré comme un manquement à la dignité, la robe étant réservée à l’exercice des fonctions judiciaires.',
      'Le référencement payant est admis mais ne doit pas devenir un acte de concurrence déloyale : usage de mots‑clés portant atteinte à une marque ou à la notoriété d’un confrère.',
      'Sanctions : disciplinaires, mais aussi pénales (publicité trompeuse, pratique commerciale déloyale, infractions à la réglementation sur les données personnelles) et administratives, devant la CNIL ou l’Autorité de la concurrence.',
      'L’avocat mandataire en transactions immobilières peut le faire savoir, mais ne peut se présenter comme intervenant exclusivement dans ce domaine.'
    ],
    cartes: [
      { q: 'Combien de domaines d’activité dominante l’avocat peut‑il mentionner ?', r: 'Trois au maximum, à valider avec le conseil de l’ordre, à ne pas confondre avec les mentions de spécialisation, qui supposent un certificat.', src: 'RIN art. 10' },
      { q: 'Qu’est‑ce que la sollicitation personnalisée ?', r: 'Une communication directe ou indirecte, dépassant la simple information, destinée à promouvoir les services de l’avocat auprès d’une personne physique ou morale déterminée. Autorisée depuis la loi du 17 mars 2014.', src: 'RIN art. 10.3' },
      { q: 'Quels supports sont interdits pour la sollicitation personnalisée ?', r: 'Le démarchage physique, le démarchage téléphonique et le SMS. Seuls l’envoi postal et le courrier électronique sont admis, une trace écrite étant requise.', src: 'RIN art. 10.3' },
      { q: 'Que doit indiquer une sollicitation personnalisée ?', r: 'Les modalités de détermination du coût de la prestation et le fait qu’elle donnera lieu à une convention d’honoraires.', src: 'RIN art. 10.3' },
      { q: 'Quelles mentions l’article 10.2 du RIN interdit‑il ?', r: 'Les mentions comparatives ou dénigrantes, mensongères ou trompeuses, celles créant l’apparence d’une structure inexistante ou d’une qualification non reconnue, les références à des fonctions juridictionnelles ou sans lien avec la profession, et le recours à un tiers pour contourner ces interdictions.', src: 'RIN art. 10.2' },
      { q: 'Quelles exigences pèsent sur le nom de domaine ?', r: 'Il doit comporter le nom de l’avocat ou la dénomination du cabinet, éventuellement suivi ou précédé du mot « avocat ». Sont interdits les noms génériques évoquant le titre, un domaine du droit ou une activité.', src: 'RIN art. 10.5' },
      { q: 'Les avis clients sont‑ils admis sur le site d’un avocat ?', r: 'Non. Ils ne sont pas conformes aux principes de délicatesse, modération, dignité et loyauté : leur sincérité ne peut être garantie et ils peuvent porter atteinte au secret.', src: 'Avis déontologique du CNB' },
      { q: 'Que faut‑il faire à l’ouverture d’un site internet ?', r: 'Informer le conseil de l’ordre sans délai, en communiquant les noms de domaine, de préférence avant la mise en ligne. Idem en cas de modification substantielle.', src: 'RIN art. 10.5' }
    ],
    qcm: [
      { q: 'L’envoi de SMS de démarchage par un avocat est :', o: ['autorisé', 'interdit', 'autorisé avec accord préalable'], b: 1, e: 'Assimilé au démarchage téléphonique, jugé indigne et indélicat.' },
      { q: 'Un nom de domaine « avocat‑divorce.com » est :', o: ['autorisé', 'interdit', 'autorisé si le nom du cabinet figure sur la page'], b: 1, e: 'Les dénominations génériques évoquant le titre ou un domaine du droit sont prohibées.' },
      { q: 'La publicité de l’avocat doit être communiquée :', o: ['au CNB', 'au conseil de l’ordre sans délai', 'à personne'], b: 1, e: 'Au conseil de l’ordre, sans délai ; le bâtonnier rend un avis.' },
      { q: 'Les avis clients affichés sur le site d’un avocat sont :', o: ['recommandés', 'non conformes aux principes essentiels', 'obligatoires depuis 2014'], b: 1, e: 'Sincérité invérifiable, risque de faux avis, atteinte possible au secret.' }
    ],
    jury: [
      { q: 'Pourquoi la publicité a‑t‑elle été libéralisée ?', r: 'Sous l’effet du droit européen. La Cour de justice a considéré que les cabinets d’avocats exercent une activité économique et sont des entreprises, seules les règles déontologiques échappant au droit de la concurrence. La politique européenne, favorable à l’information du consommateur face à l’asymétrie d’information, a conduit à lever la prohibition, puis la loi de 2014 a autorisé la sollicitation personnalisée. La contrepartie est l’exigence de sincérité.' },
      { q: 'Où passe la ligne entre information et publicité déguisée ?', r: 'Elle tient à la finalité et au ton. Une brève juridique dans un hebdomadaire est licite ; la même, répétée, laudative et manifestement destinée à capter la clientèle, devient une publicité déguisée. Ont été sanctionnés la diffusion en boucle d’un logo dans le hall d’un hôpital, qui vise des personnes en situation de faiblesse, et l’installation de panneaux géants sur la voie publique.' },
      { q: 'Un avocat peut‑il tenir un compte de réseau social personnel ?', r: 'Oui, y compris anonyme ou consacré à une autre passion, mais il reste tenu des principes essentiels et demeure sanctionnable pour des faits extraprofessionnels. Sur un compte professionnel, il doit être identifiable, mentionner son barreau, s’en tenir à l’information juridique et jamais à la consultation, ne pas citer ses clients, respecter le secret de l’enquête et de l’instruction, et modérer les commentaires de tiers dont il répond.' },
      { q: 'La première consultation gratuite est‑elle admise ?', r: 'Elle est risquée. Elle peut constituer un acte de concurrence déloyale, et l’avocat qui la pratique doit, par loyauté, préciser sa rémunération au‑delà de cette première consultation. Plus largement, les prix d’appel et les promotions commerciales heurtent l’essence de la profession et le principe de libre fixation de l’honoraire en accord avec le client, tout en relevant du droit de la consommation.' },
      { q: 'Peut‑on porter la robe sur une photographie de son site ?', r: 'Le CNB considère que le port de la robe sur des clichés publicitaires peut constituer un irrespect du principe de dignité, la robe étant réservée à l’exercice des fonctions judiciaires. La prudence commande de s’en abstenir, et de la réserver aux photographies d’audience ou de manifestations professionnelles.' }
    ],
    cas: {
      e: 'Un cabinet lance une campagne d’affichage : « Le meilleur cabinet en droit de la famille de la région, 95 % de réussite, première consultation offerte », avec la photographie des associés en robe. Quelles irrégularités ?',
      r: 'Quatre. « Le meilleur » est une mention comparative et laudative, interdite par l’article 10.2 et constitutive d’une pratique commerciale déloyale à l’égard des confrères. « 95 % de réussite » est trompeur : le taux n’est ni vérifiable ni signifiant, et la publicité mensongère est prohibée et pénalement sanctionnée. La première consultation offerte est un prix d’appel qui, s’il est pratiqué, impose au moins d’indiquer par loyauté la rémunération applicable au‑delà. Enfin le port de la robe sur un cliché publicitaire est regardé par le CNB comme contraire à la dignité. S’ajoute une faute de procédure si la campagne n’a pas été communiquée sans délai au conseil de l’ordre. La régularisation consisterait en une communication factuelle : identité, barreau, structure, spécialisation ou trois domaines dominants au plus, modalités de détermination des honoraires.'
    }
  },

  {
    id: 'formation-continue',
    titre: 'La formation continue',
    sources: ['L. 11 févr. 2004', 'D. 27 nov. 1991, art. 85', 'RIN art. 14.2.5', 'D. 1er déc. 2023'],
    principes: ['compétence'],
    accroche: 'La formation continue est le versant opérationnel du devoir de compétence : le droit se complexifie, l’avocat ne peut prétendre le maîtriser une fois pour toutes. Obligatoire depuis 2004, elle est à la fois une obligation personnelle, contrôlée par le conseil de l’ordre, et un droit du collaborateur que le cabinet doit rendre effectif.',
    plan: [
      {
        t: 'I. Le contenu de l’obligation',
        pts: [
          'Vingt heures par année civile, ou quarante heures sur deux années consécutives par lissage. Calcul au prorata temporis en cas de prestation de serment en cours d’année ou de motif légitime : maladie, parentalité, omission.',
          'Jeunes avocats : durant les deux premières années, dix heures par an consacrées à la déontologie et au statut professionnel, et dix heures étalées sur deux ans à la gestion de cabinet. Depuis 2025, accompagnement par un avocat référent désigné par le conseil de l’ordre.',
          'Spécialistes : la moitié du temps consacré à la spécialisation, soit dix heures par an et par mention, sans lissage possible.',
          'Activités éligibles : formations juridiques ou professionnelles, colloques et conférences, enseignement (une heure dispensée valant quatre heures reçues, plafonnées à douze heures sur deux ans en cas de duplication), publication de travaux juridiques, dix mille signes valant trois heures.'
        ]
      },
      {
        t: 'II. Le contrôle et les sanctions',
        pts: [
          'Rôle du CNB : il détermine les modalités, harmonise, et homologue les formations. Cahier des charges : deux heures minimum, attestation de fin de formation, information préalable détaillée, support pédagogique, questionnaire d’évaluation anonyme, au moins un formateur avocat.',
          'Sont homologuées de plein droit les formations des établissements universitaires, des centres régionaux, de l’École nationale de la magistrature, de l’École nationale des greffes et du centre de formation de la juridiction administrative.',
          'Formation à distance : admise si elle comporte une évaluation des acquis et une interaction entre formateur et participants ; le simple replay ne suffit pas.',
          'Déclaration annuelle au conseil de l’ordre au plus tard le 31 janvier, avec justificatifs. Sanctions : omission facultative depuis le décret de 2023, sanction disciplinaire, et pour le spécialiste, perte de l’usage de la mention.'
        ]
      }
    ],
    cles: [
      'Vingt heures par an ou quarante sur deux ans : le lissage est possible pour l’obligation générale, jamais pour la spécialisation.',
      'Une heure d’enseignement dispensé équivaut à quatre heures de formation reçue.',
      'Dix mille signes publiés valent trois heures, comptabilisées l’année du dépôt légal, ce qui exclut les blogs. En cas de coauteurs, on divise.',
      'Le nombre d’heures se divise entre auteurs ; la formation étrangère peut être reconnue par la commission de la formation professionnelle du CNB.',
      'Le collaborateur doit disposer du temps de se former et choisit librement ses formations ; en collaboration libérale, il informe le cabinet quinze jours avant une formation externe.',
      'Clause de dédit‑formation : pas d’indemnité due, sauf formation exceptionnelle expressément stipulée.',
      'Le spécialiste mis en demeure dispose de trois mois pour régulariser ; à défaut, le conseil de l’ordre peut lui retirer l’usage du titre, récupérable s’il justifie sous deux ans avoir satisfait à son obligation.',
      'Financement : FIF‑PL pour les libéraux, via la cotisation URSSAF, et compte personnel de formation.'
    ],
    cartes: [
      { q: 'Quel est le volume annuel de formation continue ?', r: 'Vingt heures par année civile, ou quarante heures au cours de deux années consécutives.', src: 'D. 27 nov. 1991, art. 85' },
      { q: 'Quelle obligation particulière pèse sur les avocats de moins de deux ans ?', r: 'Dix heures par an consacrées à la déontologie et au statut professionnel, et dix heures étalées sur deux ans consacrées à la gestion de cabinet.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle est l’obligation du spécialiste ?', r: 'Consacrer la moitié de son temps de formation à sa spécialisation, soit dix heures par an et par mention, sans lissage possible.', src: 'D. 27 nov. 1991, art. 85 ; décisions du CNB' },
      { q: 'Combien d’heures vaut une heure d’enseignement dispensé ?', r: 'Quatre heures de formation continue, avec un plafond de douze heures sur deux ans si l’enseignement est dupliqué.', src: 'D. 27 nov. 1991' },
      { q: 'Combien d’heures vaut une publication juridique ?', r: 'Trois heures pour dix mille signes au moins, comptabilisées l’année du dépôt légal ; le nombre d’heures est divisé par le nombre d’auteurs.', src: 'D. 27 nov. 1991' },
      { q: 'À quelle date l’avocat déclare‑t‑il sa formation ?', r: 'Au plus tard le 31 janvier de chaque année, auprès de son conseil de l’ordre, avec les justificatifs et attestations.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle sanction pour le défaut de formation continue ?', r: 'Une omission facultative du tableau depuis le décret de 2023, sans préjudice d’une sanction disciplinaire. Le spécialiste défaillant perd en outre l’usage de sa mention.', src: 'D. 1er déc. 2023' },
      { q: 'Le simple replay d’une conférence est‑il éligible ?', r: 'Non. La formation à distance doit comporter une évaluation des acquis et permettre une interaction entre le formateur et les participants.', src: 'Cahier des charges CNB' },
      { q: 'Qu’est‑ce que l’avocat référent ?', r: 'Un avocat d’au moins deux ans d’exercice, désigné par le conseil de l’ordre, qui accompagne à titre gratuit le jeune avocat pendant ses deux premières années. Il ne le conseille pas sur ses dossiers, pour éviter tout conflit d’intérêts.', src: 'D. 27 nov. 1991, art. 85‑2' }
    ],
    qcm: [
      { q: 'L’obligation annuelle de formation continue est de :', o: ['10 heures', '20 heures', '30 heures'], b: 1, e: '20 heures par an, ou 40 sur deux années consécutives.' },
      { q: 'Le spécialiste doit consacrer à sa spécialité :', o: ['5 h/an', '10 h/an sans lissage', '20 h sur deux ans'], b: 1, e: 'La moitié de son temps, soit 10 heures par an et par mention, sans lissage.' },
      { q: 'Une heure d’enseignement dispensé vaut :', o: ['1 heure', '2 heures', '4 heures'], b: 2, e: 'Quatre heures reçues, plafonnées à douze heures sur deux ans en cas de duplication.' },
      { q: 'La déclaration annuelle est due au plus tard le :', o: ['31 décembre', '31 janvier', '31 mars'], b: 1, e: '31 janvier, auprès du conseil de l’ordre.' }
    ],
    jury: [
      { q: 'La formation continue est‑elle seulement une obligation ?', r: 'Non, c’est aussi un droit, particulièrement pour le collaborateur. Le RIN impose au cabinet de lui laisser le temps de se former et de respecter son libre choix de formations ; le collaborateur libéral informe le cabinet quinze jours avant une formation externe. Le cabinet doit en outre lui confier, dans la mesure du possible, des dossiers en rapport avec la spécialisation qu’il recherche.' },
      { q: 'La sanction du défaut de formation est‑elle effective ?', r: 'Elle a longtemps été théorique, la sanction disciplinaire étant rarement prononcée pour ce seul motif. Le décret de 2023 a ajouté un cas d’omission facultative, avec une procédure spécifique : l’avocat est appelé quatre mois avant l’audience en matière de formation continue, contre quinze jours en principe. La sanction la plus efficace reste, pour le spécialiste, la perte de l’usage de sa mention, qui a un effet économique immédiat.' },
      { q: 'Un cabinet peut‑il former lui‑même ses avocats ?', r: 'Oui, au titre des activités accessoires ouvertes par la loi Macron. Le cabinet doit désigner un correspondant formations auprès du bâtonnier, qui conserve feuilles de présence, supports et évaluations, et soumettre annuellement au centre régional de son siège le contenu des actions dispensées. Le cahier des charges s’applique intégralement.' },
      { q: 'Quel lien entre formation continue et devoir de compétence ?', r: 'La formation continue est l’expression procédurale du devoir de compétence, qui impose de refuser un dossier dont on ne maîtrise pas la matière et d’entretenir ses connaissances. Le lien n’est pas seulement symbolique : la responsabilité civile de l’avocat s’apprécie au jour de son intervention, au regard du droit positif et de l’évolution jurisprudentielle qu’il devait connaître, et parfois anticiper lorsqu’un revirement avait des chances sérieuses de prospérer.' },
      { q: 'Comment est financée la formation ?', r: 'Par le Fonds interprofessionnel de formation des professions libérales, alimenté par une contribution recouvrée avec les cotisations URSSAF, qui prend en charge les formations d’au moins trois heures dispensées par un organisme certifié Qualiopi ; et par le compte personnel de formation, auquel l’avocat contribue chaque année. Le CNB détermine par ailleurs une cotisation dédiée à la formation professionnelle, reversée aux centres régionaux.' }
    ],
    cas: {
      e: 'Une avocate spécialisée en droit du travail, prêtée serment il y a dix‑huit mois, a suivi cette année vingt‑deux heures de formation : douze en droit des sociétés, dix en anglais juridique. Elle estime son obligation satisfaite. A‑t‑elle raison ?',
      r: 'Non, sur trois points. Le volume global est atteint, mais la répartition ne l’est pas. Comme avocate de moins de deux ans, elle devait consacrer dix heures à la déontologie et au statut professionnel sur l’année, et prévoir dix heures de gestion de cabinet étalées sur ses deux premières années : aucune n’a été suivie. Comme titulaire d’une mention de spécialisation, elle devait consacrer dix heures au droit du travail, sans possibilité de lissage : elle n’en a suivi aucune. Sur l’anglais juridique, l’éligibilité est admise dès lors que la formation est en lien avec l’activité professionnelle, sans devoir être strictement juridique. Conséquences : omission facultative encourue pour le défaut d’obligation générale, et surtout mise en demeure du bâtonnier de régulariser dans les trois mois, faute de quoi le conseil de l’ordre peut lui retirer l’usage de sa mention de spécialisation, qu’elle ne retrouvera qu’en justifiant dans les deux ans avoir satisfait à son obligation.'
    }
  }
];
