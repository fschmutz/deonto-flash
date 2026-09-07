// Bloc 1 - Les regles deontologiques (8 sujets du programme officiel).
// Contenu original redige a partir des textes publics : loi n° 71-1130 du 31 decembre 1971,
// decret n° 91-1197 du 27 novembre 1991, RIN du CNB, decret n° 2023-552 du 30 juin 2023
// (code de deontologie des avocats), code monetaire et financier, code de procedure penale.

export const REGLES = [
  {
    id: 'principes-essentiels',
    titre: 'Les principes essentiels de la profession d’avocat',
    sources: ['RIN art. 1.3', 'Code de déontologie 2023, art. 1er', 'L. 31 déc. 1971, art. 3 (serment)'],
    principes: ['dignité', 'conscience', 'indépendance', 'probité', 'humanité'],
    accroche: 'La déontologie n’est pas une couche administrative posée sur le métier : elle en est la condition d’exercice. Les principes essentiels sont la traduction normative de ce que le public attend d’un auxiliaire de justice indépendant, et ils s’imposent à l’avocat en toutes circonstances, y compris dans sa vie privée.',
    plan: [
      {
        t: 'I. Un socle unique, trois cercles concentriques',
        pts: [
          'Le serment (art. 3 L. 1971) : dignité, conscience, indépendance, probité, humanité. Cinq principes prononcés devant la cour d’appel.',
          'Huit principes de l’exercice professionnel : honneur, loyauté, égalité et non‑discrimination, désintéressement, confraternité, délicatesse, modération, courtoisie.',
          'Quatre principes tournés vers le client : compétence, dévouement, diligence, prudence.',
          'Soit dix‑sept principes à l’article 1.3 du RIN, repris par le code de déontologie de 2023 à droit constant.'
        ]
      },
      {
        t: 'II. Une portée volontairement large, sanctionnée in concreto',
        pts: [
          'Applicables « en toutes circonstances » : la vie privée est atteinte dès lors que le comportement rejaillit sur la crédibilité de l’avocat ou l’honneur de la profession.',
          'Applicables aussi aux avocats honoraires, qui restent tenus par leur serment.',
          'Aucune nomenclature de fautes : le juge disciplinaire apprécie in concreto, par référence au comportement attendu d’un bon professionnel.',
          'La violation d’un seul de ces devoirs suffit à fonder une sanction ; les principes se recoupent et sont presque toujours invoqués en faisceau.'
        ]
      }
    ],
    cles: [
      'Dignité = attitude générale ; modération = paroles et écrits ; délicatesse = actes. Ne pas confondre les trois à l’oral, le jury écoute cette distinction.',
      'Probité = la personne de l’avocat ; honneur = la profession et le barreau. Une atteinte grave à la probité emporte presque toujours atteinte à l’honneur.',
      'Conscience, trois déclinaisons : conscience professionnelle (sérieux), liberté de conscience (refuser un dossier sans se justifier), clause de conscience (obligatoire dans tout contrat de travail et de collaboration libérale).',
      'Indépendance : fonde les incompatibilités, l’interdiction du pacte de quota litis, la prohibition du partage d’honoraires avec un non‑avocat et l’interdiction du cabinet dans les locaux d’une entreprise cliente.',
      'Désintéressement : faire primer l’intérêt du client sur le sien ; il ne régit pas les relations entre avocats (rétrocession d’honoraires).',
      'Égalité et non‑discrimination : principe ajouté au RIN en 2019, de valeur constitutionnelle, couvrant harcèlement moral et sexuel envers collaborateurs et personnel.',
      'Une négligence suffit : l’intention frauduleuse n’est pas requise, sous réserve d’une gravité suffisante.',
      'Le préjudice n’est pas une condition de l’action disciplinaire ; il ne joue que sur le quantum de la sanction.'
    ],
    cartes: [
      { q: 'Quels sont les cinq principes du serment ?', r: 'Dignité, conscience, indépendance, probité, humanité. « Je jure, comme avocat, d’exercer mes fonctions avec dignité, conscience, indépendance, probité et humanité. »', src: 'L. 31 déc. 1971, art. 3' },
      { q: 'Combien de principes essentiels l’article 1.3 du RIN énonce‑t‑il ?', r: 'Dix‑sept : les cinq du serment, huit propres à l’exercice professionnel, quatre tournés vers le client.', src: 'RIN art. 1.3' },
      { q: 'Dignité, modération, délicatesse : quelle est la ligne de partage ?', r: 'La dignité vise l’attitude générale et l’apparence, la modération les paroles et les écrits, la délicatesse les actes accomplis.', src: 'RIN art. 1.3' },
      { q: 'Que recouvre la clause de conscience ?', r: 'Une clause obligatoire dans tout contrat de travail et de collaboration libérale, permettant à l’avocat d’être déchargé d’une mission contraire à sa conscience.', src: 'RIN art. 14.2.3' },
      { q: 'Les principes essentiels s’appliquent‑ils à la vie privée ?', r: 'Oui. Ils guident le comportement de l’avocat « en toutes circonstances » ; les faits extraprofessionnels sont appréciés au regard d’un critère fonctionnel, la crédibilité de l’avocat et la réputation de la profession.', src: 'RIN art. 1.3 ; Code de déontologie 2023' },
      { q: 'L’avocat honoraire est‑il tenu par les principes essentiels ?', r: 'Oui, il demeure soumis aux obligations résultant de son serment, même s’il ne peut plus accomplir les actes de la profession sauf autorisation du bâtonnier.', src: 'D. 27 nov. 1991' },
      { q: 'Faut‑il une intention fautive pour engager la responsabilité disciplinaire ?', r: 'Non. Une simple négligence suffit dès lors qu’elle est suffisamment grave ; seules des causes exonératoires tenant à l’altération du discernement peuvent être retenues.', src: 'Jurisprudence disciplinaire' },
      { q: 'Le désintéressement s’applique‑t‑il aux rapports entre avocats ?', r: 'Non. Il régit la relation avec le client ; il ne s’applique ni à la rétrocession d’honoraires ni à la collaboration entre confrères.', src: 'RIN art. 1.3' },
      { q: 'Quel principe fonde l’interdiction du pacte de quota litis ?', r: 'Le désintéressement, appuyé par l’indépendance : des honoraires entièrement liés au résultat feraient de l’avocat le partenaire financier de la cause.', src: 'RIN art. 11.3' },
      { q: 'Quand le principe d’égalité et de non‑discrimination a‑t‑il été ajouté ?', r: 'En 2019 dans le RIN, puis repris par le code de déontologie de 2023. Il a valeur constitutionnelle et couvre le harcèlement moral et sexuel.', src: 'RIN art. 1.3' }
    ],
    qcm: [
      { q: 'Le serment de l’avocat comporte :', o: ['3 principes', '5 principes', '17 principes'], b: 1, e: 'Cinq : dignité, conscience, indépendance, probité, humanité. Les dix‑sept sont ceux de l’article 1.3 du RIN.' },
      { q: 'Le texte qui énonce aujourd’hui les principes essentiels par voie réglementaire est :', o: ['le décret du 12 juillet 2005', 'le décret du 30 juin 2023 portant code de déontologie', 'le décret du 27 novembre 1991'], b: 1, e: 'Le décret du 30 juin 2023 a abrogé le décret « déontologie » de 2005 ; il codifie à droit constant.' },
      { q: 'Un manquement disciplinaire suppose :', o: ['un préjudice caractérisé', 'une intention frauduleuse', 'ni l’un ni l’autre'], b: 2, e: 'Ni préjudice ni intention : une négligence suffisamment grave suffit. Le préjudice n’influe que sur le quantum.' },
      { q: 'L’avocat honoraire :', o: ['échappe aux principes essentiels', 'reste tenu par son serment', 'redevient un simple justiciable'], b: 1, e: 'Il demeure soumis aux obligations résultant du serment et à la discipline de son ordre.' },
      { q: 'La distinction dignité / modération / délicatesse porte respectivement sur :', o: ['les actes, les paroles, l’attitude', 'l’attitude, les paroles et écrits, les actes', 'l’honneur, la probité, la conscience'], b: 1, e: 'Dignité = attitude générale ; modération = paroles et écrits ; délicatesse = actes. Le jury écoute cette précision.' },
      { q: 'Le principe d’égalité et de non‑discrimination a été ajouté au RIN en :', o: ['2004', '2015', '2019'], b: 2, e: 'Ajouté au RIN en 2019, de valeur constitutionnelle ; il couvre notamment le harcèlement moral et sexuel.' },
      { q: 'Une négligence peut‑elle fonder une poursuite disciplinaire ?', o: ['non, l’intention frauduleuse est requise', 'oui, si elle présente une gravité suffisante', 'seulement en matière d’honoraires'], b: 1, e: 'L’intention frauduleuse n’est pas requise : une négligence d’une gravité suffisante suffit.' },
      { q: 'Le désintéressement régit‑il les rétrocessions d’honoraires entre avocats ?', o: ['oui, toujours', 'non, il concerne l’intérêt du client face à celui de l’avocat', 'uniquement en collaboration'], b: 1, e: 'Le désintéressement fait primer l’intérêt du client ; il ne régit pas les relations pécuniaires entre avocats.' }
    ],
    jury: [
      { q: 'Un avocat joue de l’accordéon dans la rue, un étui ouvert à ses pieds. Manquement à la dignité ?', r: 'Non, par principe. La pratique n’est fautive que si un signe rappelle ostensiblement sa qualité d’avocat : c’est l’association entre l’acte et le titre qui atteint la dignité de la profession, pas l’acte lui‑même, qui relève de la vie privée.' },
      { q: 'Distinguez probité et honneur.', r: 'La probité vise les actes et la personne de l’avocat : honnêteté, intégrité, droiture. L’honneur vise la considération dont jouit la profession. En pratique, toute atteinte grave à la probité atteint l’honneur, mais l’inverse n’est pas vrai : des propos vulgaires à la télévision peuvent atteindre l’honneur sans mettre en cause la probité.' },
      { q: 'L’avocat doit‑il la vérité au juge ?', r: 'Il lui doit « sa » vérité, celle de son client, sans mentir ni induire en erreur. Trois postulats : le client n’est tenu d’aucun devoir de vérité ; l’avocat doit la vérité à son client, y compris les pronostics défavorables ; l’avocat ne peut affirmer devant le juge le contraire de ce qu’il sait être faux. S’il découvre que son client lui a menti, la conscience lui commande de se retirer.' },
      { q: 'La sanction du manquement peut‑elle être autre que disciplinaire ?', r: 'Oui, et les voies se cumulent : disciplinaire (avertissement à radiation), civile si un préjudice est causé, pénale si les faits constituent une infraction, prud’homale en cas de discrimination ou de harcèlement. Certaines conventions peuvent en outre être privées d’effet, par exemple en matière d’honoraires.' },
      { q: 'Que répondez‑vous à celui qui dit que dix‑sept principes, c’est trop pour être opérant ?', r: 'Ils ne sont pas une check‑list mais un faisceau. La jurisprudence disciplinaire les invoque presque toujours ensemble parce qu’un même comportement les heurte simultanément. Leur nombre est le prix de l’absence de nomenclature des fautes : c’est ce qui permet une appréciation in concreto plutôt qu’une répression automatique, que la Cour de cassation censure.' },
      { q: 'Pourquoi l’indépendance fonde‑t‑elle à la fois les incompatibilités et l’interdiction du pacte de quota litis ?', r: 'L’indépendance protège la liberté de conseil et de défense contre toute pression économique ou statutaire. Les incompatibilités écartent les activités qui placeraient l’avocat sous une dépendance étrangère à la mission. Le pacte de quota litis, en liant la rémunération au seul résultat, ferait de l’avocat un co‑intéressé au litige et altérerait son libre jugement. La même logique explique la prohibition du partage d’honoraires avec un non‑avocat : elle évite qu’un tiers dicte la conduite du dossier.' },
      { q: 'Comment articuler conscience professionnelle et liberté de conscience à l’oral ?', r: 'La conscience professionnelle impose le sérieux de la mission : diligence, information, compétence. La liberté de conscience autorise à refuser un dossier sans avoir à se justifier, sous réserve des désignations d’office. La clause de conscience permet de se retirer en cours de mission pour un motif sérieux, en protégeant les intérêts du client. L’oral gagne à distinguer ces trois déclinaisons plutôt que d’invoquer « la conscience » de façon indifférenciée.' }
    ],
    cas: {
      e: 'Un avocat, en règle avec ses obligations, est condamné pénalement pour des violences conjugales. Aucun élément ne touche à son activité professionnelle. Le bâtonnier peut‑il engager des poursuites disciplinaires ?',
      r: 'Oui. Les faits extraprofessionnels relèvent de la discipline dès lors qu’ils constituent un manquement à la probité, à l’honneur ou à la délicatesse. Le critère est fonctionnel : la réputation de l’avocat et sa crédibilité en justice. La condamnation pénale n’est pas même nécessaire, et une relaxe ne ferait pas obstacle à la sanction disciplinaire, les deux ordres étant autonomes. Le cumul des deux répressions est admis, chacune poursuivant un intérêt distinct.'
    }
  },

  {
    id: 'secret-professionnel',
    titre: 'Le secret professionnel',
    sources: ['L. 31 déc. 1971, art. 66‑5', 'RIN art. 2', 'C. pén. art. 226‑13', 'CPP art. 56‑1 et 100'],
    principes: ['indépendance', 'loyauté', 'prudence', 'honneur'],
    accroche: 'Le secret professionnel n’est pas un privilège accordé à l’avocat, c’est une garantie accordée au justiciable. Il permet au client de tout dire, condition sans laquelle la défense n’est qu’une plaidoirie à l’aveugle. D’oú un principe absolu, d’ordre public et illimité dans le temps, et des exceptions strictement encadrées et contrôlées par le bâtonnier.',
    plan: [
      {
        t: 'I. Un secret général, absolu et d’ordre public',
        pts: [
          'Fondements : droits de la défense et procès équitable (art. 6 CEDH), respect de la vie privée et des correspondances (art. 8 CEDH), intérêt privé du client. Le Conseil constitutionnel ne lui reconnaît pas de valeur constitutionnelle.',
          'Champ matériel : toutes matières, conseil comme défense, tous supports (correspondances, notes, agenda, nom du client, pièces, règlements pécuniaires, relevés CARPA).',
          'Champ personnel : l’avocat, ses associés, collaborateurs, salariés, élèves‑avocats, et tout prestataire auquel il doit imposer le secret. Partagé dans une structure d’exercice, non partagé dans une structure de moyens.',
          'Nul ne peut en délier l’avocat : ni le client, ni le bâtonnier, ni le conseil de l’ordre. Le client, lui, n’y est pas tenu et peut rendre publiques les informations qu’il détient.'
        ]
      },
      {
        t: 'II. Des levées strictement encadrées, sous le contrôle du bâtonnier',
        pts: [
          'Par l’avocat : pour sa propre défense, dans la stricte mesure du nécessaire ; dans les cas autorisés ou imposés par la loi (protection d’un mineur ou d’un majeur vulnérable, déclaration de soupçon, mandats spéciaux).',
          'Contre l’avocat : perquisition sur décision écrite et motivée du JLD, présence obligatoire du bâtonnier qui peut s’opposer ; écoutes soumises aux mêmes garanties et à une infraction punie d’au moins trois ans.',
          'Exception légale au secret du conseil (art. 56‑1‑2 CPP) : fraude fiscale, terrorisme, corruption, trafic d’influence et blanchiment de ces délits, uniquement pour les pièces établissant l’usage du conseil à ces fins.',
          'Sanctions : retrait des pièces des débats, faute disciplinaire, et délit puni d’un an d’emprisonnement et 15 000 euros d’amende.'
        ]
      }
    ],
    cles: [
      'Absolu dans son principe, relatif dans son étendue : l’avocat utilise les confidences de son client pour construire sa défense, dans l’intérêt de celui‑ci.',
      'Le secret survit à la fin de la mission et au décès du client comme de l’avocat.',
      'Les échanges avec les autorités ordinales ne sont pas couverts par le secret, position constante et critiquée de la Cour de cassation.',
      'Ne sont pas couvertes les informations déjà publiques, ni les confidences reçues hors de tout lien de clientèle (cadre amical).',
      'Perquisition : la décision du JLD doit être écrite et motivée, la fouille générale est interdite, seuls le magistrat et le bâtonnier prennent connaissance des pièces sur place.',
      'Opposition du bâtonnier : mise sous scellé, le JLD statue dans les cinq jours, recours suspensif dans les 24 heures devant le président de la chambre de l’instruction, qui statue en cinq jours.',
      'Contrôle fiscal : identité du client, montant, date et forme du versement sont communicables ; la nature des prestations ne l’est pas. D’où des factures nominatives muettes et un relevé de diligences séparé.',
      'Recel de violation du secret : l’avocat qui détient ou transmet sciemment une information obtenue en violation d’un secret encourt une répression aggravée.'
    ],
    cartes: [
      { q: 'Quel est le texte fondateur du secret professionnel de l’avocat ?', r: 'L’article 66‑5 de la loi du 31 décembre 1971, complété par l’article 2 du RIN et sanctionné par l’article 226‑13 du code pénal.', src: 'L. 1971 art. 66‑5' },
      { q: 'Le client peut‑il délier son avocat du secret ?', r: 'Non. Ni le client, ni le bâtonnier, ni le conseil de l’ordre ne peuvent délier l’avocat. Le client, en revanche, n’est pas lui‑même tenu au secret.', src: 'RIN art. 2' },
      { q: 'Quelle peine sanctionne la violation du secret professionnel ?', r: 'Un an d’emprisonnement et 15 000 euros d’amende. La plainte doit émaner du procureur de la République ou de l’auteur du secret.', src: 'C. pén. art. 226‑13' },
      { q: 'Qui doit être présent lors d’une perquisition au cabinet d’un avocat ?', r: 'Le bâtonnier ou son délégué, informé préalablement. Seuls lui et le magistrat peuvent prendre connaissance des documents sur place avant saisie.', src: 'CPP art. 56‑1' },
      { q: 'Dans quel délai le JLD statue‑t‑il sur l’opposition du bâtonnier à une saisie ?', r: 'Cinq jours à compter de la réception du procès‑verbal ; les pièces sont placées sous scellé dans l’intervalle. Recours suspensif dans les 24 heures.', src: 'CPP art. 56‑1' },
      { q: 'Quelles infractions écartent le secret du conseil ?', r: 'Fraude fiscale, terrorisme, corruption, trafic d’influence et blanchiment de ces délits, et seulement pour les pièces établissant que le conseil a servi à les commettre ou les faciliter.', src: 'CPP art. 56‑1‑2' },
      { q: 'Quelle condition tenant à la peine encourue permet l’écoute de la ligne d’un avocat ?', r: 'Des raisons plausibles de le soupçonner d’avoir participé à une infraction punie d’au moins trois ans d’emprisonnement, avec information du bâtonnier et ordonnance motivée du JLD.', src: 'CPP art. 100 à 100‑7' },
      { q: 'Que peut communiquer l’avocat à l’administration fiscale ?', r: 'L’identité du client, le montant, la date et la forme du versement. Jamais la nature, même sommaire, des prestations fournies.', src: 'LPF ; jurisprudence CE' },
      { q: 'Le secret couvre‑t‑il les propos tenus à un ami qui se trouve être avocat ?', r: 'Non, faute de lien de clientèle. Il couvre en revanche les confidences reçues à raison de la qualité d’avocat, même d’un tiers qui n’est pas client.', src: 'Jurisprudence' },
      { q: 'Combien de temps dure le secret ?', r: 'Il est illimité dans le temps : il survit à la fin de la mission, au décès du client et à celui de l’avocat.', src: 'RIN art. 2' }
    ],
    qcm: [
      { q: 'La décision autorisant une perquisition au cabinet d’un avocat émane :', o: ['du procureur de la République', 'du juge des libertés et de la détention', 'du bâtonnier'], b: 1, e: 'Le JLD, par décision écrite et motivée, saisi par le magistrat requérant. Le bâtonnier est présent, il n’autorise pas.' },
      { q: 'La violation du secret professionnel est punie de :', o: ['1 an et 15 000 €', '3 ans et 45 000 €', '5 ans et 75 000 €'], b: 0, e: '1 an et 15 000 euros (art. 226‑13 C. pén.). 3 ans et 45 000 euros, c’est la violation du secret de l’enquête et de l’instruction.' },
      { q: 'Le secret professionnel s’impose :', o: ['à l’avocat et à son client', 'au seul avocat et à ceux qui coopèrent avec lui', 'à l’avocat, au client et aux tiers'], b: 1, e: 'Le client n’y est pas tenu et peut rendre publiques les informations dont il dispose.' },
      { q: 'Les correspondances entre un avocat et son bâtonnier sont :', o: ['couvertes par le secret', 'non couvertes par le secret', 'couvertes seulement si elles portent la mention confidentiel'], b: 1, e: 'Position constante de la Cour de cassation : les échanges avec les autorités ordinales ne sont pas couverts, ce que la doctrine critique.' },
      { q: 'Le secret professionnel survit‑il au décès du client ?', o: ['non', 'oui, ainsi qu’à la fin de la mission et au décès de l’avocat', 'seulement pendant dix ans'], b: 1, e: 'Le secret survit à la fin de la mission et au décès du client comme de l’avocat.' },
      { q: 'En cas d’opposition du bâtonnier lors d’une perquisition, le JLD statue dans :', o: ['vingt‑quatre heures', 'cinq jours', 'quinze jours'], b: 1, e: 'Mise sous scellé ; le JLD statue dans les cinq jours ; recours suspensif dans les 24 heures devant le premier président.' },
      { q: 'Lors d’un contrôle fiscal, la nature des prestations est‑elle communicable ?', o: ['oui, comme le montant', 'non ; sont communicables l’identité, le montant, la date et la forme du versement', 'uniquement avec l’accord du client'], b: 1, e: 'Identité du client, montant, date et forme du versement : communicables. Nature des prestations : non.' },
      { q: 'Les échanges avec les autorités ordinales sont‑ils couverts par le secret ?', o: ['oui, absolument', 'non, selon la position constante de la Cour de cassation', 'seulement les avis du bâtonnier'], b: 1, e: 'Position constante et critiquée de la Cour de cassation : ces échanges ne sont pas couverts.' }
    ],
    jury: [
      { q: 'Votre client vous confie qu’il a séquestré une personne, encore vivante. Que faites‑vous ?', r: 'La loi pénale n’oblige pas l’avocat à dénoncer, l’article 434‑1 du code pénal réservant le cas des personnes tenues au secret. Mais elle l’y autorise lorsqu’il est encore possible de prévenir les effets du crime : c’est une option de conscience, pas une obligation. Je consulterais mon bâtonnier avant toute décision. La révélation ne pourrait alors donner lieu à aucune sanction.' },
      { q: 'Le secret professionnel a‑t‑il valeur constitutionnelle ?', r: 'Non. Le Conseil constitutionnel ne lui reconnaît pas cette valeur en lui‑même. Sa protection se rattache aux droits de la défense et au droit au procès équitable, ainsi qu’aux articles 6 et 8 de la Convention européenne, ce qui explique que le législateur puisse y apporter des exceptions sous réserve de proportionnalité.' },
      { q: 'Que pensez‑vous de l’article 56‑1‑2 du code de procédure pénale ?', r: 'Il consacre une exception au secret du conseil pour cinq catégories d’infractions. Le compromis est étroit : ne sont saisissables que les pièces établissant que le conseil a servi à commettre ou faciliter l’infraction, et le secret de la défense reste intact. La profession y voit tout de même une brèche, une partie de la doctrine estimant l’atteinte disproportionnée au regard de la jurisprudence européenne.' },
      { q: 'Un confrère vous transmet une pièce couverte par le secret médical de son client. Vous la versez aux débats ?', r: 'Non. L’avocat qui détient ou transmet sciemment une information obtenue en violation d’un secret commet un recel, réprimé plus sévèrement que la violation elle‑même. Il faut vérifier que le client a lui‑même renoncé à son secret médical, seul lui pouvant le faire. La prudence commande de solliciter l’avis du bâtonnier.' },
      { q: 'Comment protégez‑vous concrètement le secret dans votre cabinet ?', r: 'C’est une obligation de moyens renforcée : authentification et mots de passe robustes, stockage et messagerie sécurisés, cloud privé proposé par le CNB, cloisonnement des dossiers, imprimante à code, pièce de réception distincte du bureau, ligne dédiée en espace partagé. Le secret doit être imposé contractuellement à tout prestataire, du secrétariat à l’hébergeur.' },
      { q: 'Le secret est‑il absolu ou relatif ?', r: 'Absolu dans son principe : l’avocat ne peut le révéler, sous peine pénale (art. 226‑13) et disciplinaire. Relatif dans son étendue : il utilise les confidences pour construire la défense, dans l’intérêt du client. Il ne couvre pas les informations déjà publiques ni les confidences reçues hors de tout lien de clientèle. La mission, le décès du client ou celui de l’avocat ne l’éteignent pas. Les perquisitions et écoutes obéissent à un régime dérogatoire strict (JLD, bâtonnier).' },
      { q: 'Que faire si un confrère vous transmet une pièce obtenue en violation du secret d’un tiers ?', r: 'Recel de violation du secret : détenir ou transmettre sciemment une information obtenue en violation d’un secret expose l’avocat. Il faut refuser d’exploiter la pièce, alerter le bâtonnier, et ne pas la verser aux débats. La loyauté procédurale et le secret se renforcent ici : le succès du dossier ne justifie pas l’usage d’une preuve illicite obtenue par un confrère.' }
    ],
    cas: {
      e: 'L’administration fiscale contrôle votre cabinet et exige la communication de vos notes d’honoraires, sur lesquelles vous détaillez habituellement la nature de chaque diligence. Que faites‑vous ?',
      r: 'Le droit de communication porte sur le livre‑journal et les pièces justificatives, et permet de connaître l’identité du client, le montant, la date et la forme du versement. Il ne permet pas d’exiger de renseignements sur la nature des prestations. Les factures détaillant les diligences sont donc couvertes par le secret et non communicables ; je m’y oppose, et j’en réfère au bâtonnier. Pour l’avenir, la pratique correcte consiste à établir des factures nominatives muettes sur la nature de l’affaire, accompagnées d’un relevé de diligences séparé remis au seul client. Un redressement fondé sur des éléments couverts par le secret doit être annulé.'
    },
    cas2: {
      e: 'Lors d’une garde à vue, votre client vous confie le lieu où se trouve une arme utilisée dans les faits. Le procureur, informé par l’OPJ d’« éléments nouveaux », vous demande de confirmer ou d’infirmer. Que répondez‑vous ?',
      r: 'Le secret professionnel couvre cette confidence, reçue dans le cadre de la défense. Vous ne confirmez ni n’infirmez auprès du procureur : toute révélation exposerait à l’article 226‑13 et à la discipline. Vous pouvez conseiller au client de révéler lui‑même s’il y va de la sécurité d’autrui, mais vous ne vous substituez pas à lui. Si un danger imminent et grave pour une personne se précisait, la question de l’état de nécessité se poserait en doctrine ; en pratique, vous saisissez le bâtonnier pour conduite à tenir sans rompre le secret par une déclaration spontanée au parquet. Aucune « collaboration » avec l’enquête ne découlent de votre présence en garde à vue.'
    }
  },

  {
    id: 'contradictoire',
    titre: 'Le respect du contradictoire',
    sources: ['RIN art. 5', 'Code de déontologie 2023', 'CPC art. 15 et 16', 'art. 6 CEDH'],
    principes: ['loyauté', 'confraternité', 'courtoisie'],
    accroche: 'Le contradictoire est à la fois une règle de procédure et un devoir déontologique. Aucune décision ne peut être rendue sans que chaque partie ait pu connaître à l’avance et discuter les moyens adverses : c’est l’égalité des armes, et pour l’avocat, l’expression de sa loyauté envers son contradicteur autant qu’envers le juge.',
    plan: [
      {
        t: 'I. Une obligation partagée, de portée générale',
        pts: [
          'Double nature : principe directeur du procès (art. 15 et 16 CPC), élément du procès équitable au sens de l’article 6 CEDH, et devoir déontologique de l’article 5 du RIN.',
          'S’impose aux parties, aux avocats et au juge, qui doit le faire observer et ne peut fonder sa décision que sur des éléments débattus.',
          'Devant toutes les juridictions, avec ou sans représentation obligatoire, en procédure écrite comme orale, y compris en matière d’expertise et devant les autorités administratives indépendantes.',
          'Exceptions : procédures non contradictoires par nature (requête, référé d’heure à heure, mesures conservatoires) où le contradictoire est simplement différé.'
        ]
      },
      {
        t: 'II. Une mise en œuvre exigeante et sanctionnée',
        pts: [
          'Communication spontanée, par écrit et en temps utile : pièces, écritures, jurisprudence et doctrine non aisément accessibles.',
          'Voies : RPVA obligatoire pour la remise des actes en procédure écrite avec représentation obligatoire, Télérecours devant les juridictions administratives, mention « officiel » pour les correspondances valant acte de procédure. Se ménager la preuve de l’envoi.',
          'Sanctions procédurales : injonction de communiquer sous astreinte, rejet des pièces tardives, renvoi ou rabat de clôture, nullité du jugement si le juge a lui‑même méconnu le principe.',
          'Sanction disciplinaire : le manquement heurte la loyauté, la confraternité et la courtoisie. Le bâtonnier peut intervenir à chaud lorsqu’un refus de renvoi porte une atteinte flagrante à ces principes.'
        ]
      }
    ],
    cles: [
      'L’argument selon lequel l’adversaire « connaît déjà la pièce » est inopérant : la communication doit être spontanée et prouvée.',
      'Prendre contact avec la partie adverse alors qu’elle est assistée est un manquement : on ne s’adresse qu’au confrère, sauf autorisation et information de celui‑ci.',
      'RPVA : obligatoire pour la remise des actes à la juridiction en procédure écrite avec représentation obligatoire ; devant les juridictions pénales il suppose l’accord de l’avocat adverse et un protocole local. Son ouverture devant les autres juridictions dépend des conventions en vigueur : vérifiez‑la.',
      'Devant les juridictions administratives, c’est le greffe qui organise le contradictoire, mais la prudence commande d’adresser aussi les pièces à l’adversaire.',
      'Notes en délibéré : prohibées par principe, sauf pour répondre au ministère public ou sur autorisation du président, l’autre partie devant alors pouvoir répondre.',
      'Le dossier de plaidoirie ne peut contenir d’élément non communiqué : une annotation nouvelle est une violation du contradictoire.',
      'Audience sans contradicteur : tenter de joindre le confrère avant de plaider ; à défaut, déposer son dossier plutôt que de plaider, sauf péril pour le client.',
      'Témoignage anonyme : le juge ne peut fonder sa décision uniquement sur lui ; il doit être indispensable et proportionné.'
    ],
    cartes: [
      { q: 'Quels articles du code de procédure civile consacrent le contradictoire ?', r: 'Les articles 15 et 16 : communication en temps utile des moyens, pièces et prises de position, et obligation pour le juge de faire observer et d’observer lui‑même le principe.', src: 'CPC art. 15 et 16' },
      { q: 'Le contradictoire s’applique‑t‑il en procédure orale ?', r: 'Oui, devant toutes les juridictions, avec ou sans représentation obligatoire, y compris prud’hommes, AMF, DGCCRF et modes amiables.', src: 'RIN art. 5' },
      { q: 'Quelle mention permet à une correspondance entre avocats de valoir acte de procédure ?', r: 'La mention « officiel », sous les trois conditions cumulatives de l’article 3.2 du RIN.', src: 'RIN art. 3.2' },
      { q: 'Quand l’usage du RPVA est‑il obligatoire ?', r: 'Pour la remise de tout acte de procédure à la juridiction devant le tribunal judiciaire et la cour d’appel en procédure avec représentation obligatoire. Il est seulement conseillé entre avocats, et son ouverture devant les autres juridictions dépend des conventions applicables.', src: 'CPC ; conventions CNB‑ministère' },
      { q: 'Que peut faire le juge face à une pièce communiquée tardivement ?', r: 'L’écarter des débats en précisant les circonstances ayant empêché le respect du contradictoire, ordonner la communication sous astreinte, ou renvoyer l’affaire.', src: 'CPC art. 15 et 16 ; jurisprudence' },
      { q: 'Une note en délibéré est‑elle recevable ?', r: 'Par principe non. Elle l’est pour répondre aux arguments du ministère public, qui parle en dernier, ou sur autorisation du président, l’autre partie devant alors pouvoir répondre.', src: 'CPC art. 445' },
      { q: 'Peut‑on s’adresser directement à la partie adverse ?', r: 'Non lorsqu’elle est assistée d’un avocat, sauf autorisation de ce dernier et information préalable. L’avocat doit vérifier si la partie adverse a constitué conseil.', src: 'RIN art. 8.2' },
      { q: 'Le juge peut‑il fonder sa décision sur un témoignage anonyme ?', r: 'Pas uniquement. Le recours doit être indispensable et proportionné, et la décision doit reposer sur d’autres éléments.', src: 'Jurisprudence CEDH' },
      { q: 'Que sont les notes en délibéré au regard du contradictoire ?', r: 'Elles sont prohibées par principe. Exceptions : répondre au ministère public, ou y être autorisé par le président, l’autre partie devant avoir pu s’exprimer.', src: 'CPC ; RIN art. 5' },
      { q: 'Que faire avant de plaider en l’absence du contradicteur ?', r: 'Tenter de joindre le confrère. À défaut, déposer le dossier plutôt que plaider, sauf péril pour les intérêts du client.', src: 'RIN art. 5' },
      { q: 'Le dossier de plaidoirie peut‑il introduire un élément nouveau ?', r: 'Non. Il ne peut contenir aucun élément non communiqué ; une annotation nouvelle viole le contradictoire.', src: 'RIN art. 5 ; CPC' }
    ],
    qcm: [
      { q: 'En procédure écrite avec représentation obligatoire devant le tribunal judiciaire, la remise d’un acte de procédure à la juridiction par le RPVA est :', o: ['facultative', 'obligatoire', 'interdite'], b: 1, e: 'Obligatoire pour la remise des actes à la juridiction, et seulement conseillée entre avocats. Devant les juridictions administratives, c’est Télérecours qui s’impose.' },
      { q: 'Une pièce non communiquée mais que l’adversaire connaît déjà :', o: ['peut être invoquée', 'ne peut pas être invoquée', 'peut l’être avec l’accord du juge'], b: 1, e: 'La communication doit être spontanée ; la connaissance de fait par l’adversaire est inopérante.' },
      { q: 'Devant les juridictions administratives, la communication aux autres parties incombe :', o: ['à l’avocat demandeur', 'au greffe', 'au rapporteur public'], b: 1, e: 'C’est le greffe, saisi via Télérecours, qui met en œuvre le contradictoire. La prudence commande néanmoins d’adresser aussi les pièces à l’adversaire.' },
      { q: 'Les notes en délibéré sont :', o: ['toujours libres', 'prohibées par principe, sauf réponse au ministère public ou autorisation du président', 'obligatoires en matière commerciale'], b: 1, e: 'Prohibées par principe ; exceptions strictes, l’autre partie devant avoir pu répondre.' },
      { q: 'Prendre contact avec une partie adverse assistée d’un avocat est :', o: ['autorisé si l’urgence le commande', 'un manquement : on s’adresse au confrère, sauf autorisation et information', 'libre en matière gracieuse'], b: 1, e: 'On ne s’adresse qu’au confrère, sauf autorisation et information de celui‑ci.' },
      { q: 'Un dossier de plaidoirie peut‑il contenir une annotation non communiquée ?', o: ['oui, si elle est manuscrite', 'non, c’est une violation du contradictoire', 'oui, devant le tribunal de commerce'], b: 1, e: 'Aucun élément non communiqué ; une annotation nouvelle viole le contradictoire.' },
      { q: 'En audience sans contradicteur, la conduite prudente consiste à :', o: ['plaider normalement', 'tenter de joindre le confrère, à défaut déposer le dossier plutôt que plaider, sauf péril', 'demander systématiquement le renvoi sans autre diligence'], b: 1, e: 'Joindre le confrère ; à défaut, déposer plutôt que plaider, sauf péril pour le client.' },
      { q: 'Le témoignage anonyme peut fonder à lui seul une décision :', o: ['oui', 'non ; il doit être indispensable et proportionné, et ne peut fonder seul la décision', 'seulement au pénal'], b: 1, e: 'Le juge ne peut fonder sa décision uniquement sur un témoignage anonyme.' }
    ],
    jury: [
      { q: 'Votre confrère vous adresse 400 pages de pièces à 23 heures la veille de l’audience. Que faites‑vous ?', r: 'C’est un procédé déloyal, manquement à la loyauté et à la confraternité. Je sollicite le renvoi ou le rabat de clôture, subsidiairement le rejet des pièces des débats faute de communication en temps utile. Je préviens le confrère, et si le refus de renvoi porte une atteinte flagrante aux principes essentiels, le bâtonnier peut intervenir. Je ne plaide pas au fond sur des pièces que je n’ai pas pu étudier.' },
      { q: 'Un confrère a oublié la pièce jointe annoncée dans son courriel. Vous vous taisez ?', r: 'Non. La délicatesse et la courtoisie imposent de le prévenir immédiatement. Se prévaloir d’une erreur purement matérielle de l’adversaire est un manquement à la loyauté. La réciproque vaut : celui qui a omis la pièce doit reconnaître l’erreur et la transmettre sans délai.' },
      { q: 'Le contradictoire connaît‑il des exceptions ?', r: 'Il est différé, non supprimé, dans les procédures non contradictoires par nature : requête, mesure d’instruction de l’article 145 du code de procédure civile lorsque l’effet de surprise est nécessaire à la conservation des preuves, récusation, déclaration de créance, référé d’heure à heure. Le débat contradictoire se rétablit ensuite, lors du recours contre l’ordonnance.' },
      { q: 'Votre adversaire ne se présente pas et le juge refuse le renvoi. Vous plaidez ?', r: 'Je tente d’abord de joindre le confrère, au cabinet et par téléphone. Si je n’y parviens pas, l’usage est de déposer mon dossier sans plaider, pour ne pas tirer avantage de son absence. Je ne plaide que si l’intérêt de mon client l’exige absolument, par exemple en cas de péril, et j’en informe le bâtonnier si l’incident le justifie.' },
      { q: 'Devez‑vous communiquer la jurisprudence que vous invoquez ?', r: 'Oui lorsqu’elle n’est pas publiée ou aisément accessible : il faut alors verser la décision intégrale, de même que la doctrine invoquée. Si la décision est publiée, la référence suffit. Le dossier de plaidoirie remis au juge doit contenir la jurisprudence sur laquelle il pourra fonder sa décision.' },
      { q: 'Pourquoi l’argument « l’adversaire connaît déjà la pièce » est‑il inopérant ?', r: 'Le contradictoire exige une communication spontanée, en temps utile, et prouvée. La connaissance informelle ou fortuite ne remplace pas la communication régulière : elle ne permet ni de vérifier la complétude, ni de garantir le délai pour répondre. Les articles 15 et 16 du CPC et l’article 6 CEDH imposent cette rigueur. D’où la pratique du RPVA et des bordereaux datés.' },
      { q: 'Comment articuler RPVA et Télérecours dans votre exposé ?', r: 'RPVA : obligatoire pour la remise des actes à la juridiction en procédure écrite avec représentation obligatoire devant le TJ ; conseillé entre avocats. Télérecours : devant les juridictions administratives, c’est le greffe qui organise souvent le contradictoire, mais la prudence commande d’adresser aussi les pièces au confrère. Deux outils, deux logiques, une même exigence de loyauté.' }
    ],
    cas: {
      e: 'Vous concluez en réplique et ajoutez un moyen nouveau dans des écritures récapitulatives de soixante pages, sans le signaler. L’adversaire s’en plaint. A‑t‑il raison ?',
      r: 'Oui. En procédure écrite, les écritures sont récapitulatives : tout moyen nouveau doit être formellement distingué pour permettre son identification immédiate par le confrère, par exemple par un trait dans la marge. Noyer un moyen nouveau dans une récapitulation est un procédé déloyal, contraire à la loyauté, à la confraternité et au contradictoire. Le confrère peut solliciter le renvoi pour y répondre ; sur le plan disciplinaire, le manquement peut justifier un avertissement.'
    },
    cas2: {
      e: 'Vous plaidez en référé. Votre contradicteur est absent malgré une convocation régulière. Vous avez tenté de le joindre sans succès. Le président vous invite à plaider. Que faites‑vous ?',
      r: 'Vous exposez vos diligences de contact. Sauf péril caractérisé pour votre client (mesure conservatoire urgente, exécution imminente), vous déposez le dossier plutôt que de plaider à charge en l’absence du confrère : le contradictoire prime sur la commodité de l’audience. Si le péril est réel, vous plaidez en le signalant au président et en limitant votre propos aux éléments déjà communiqués. Vous confirmez ensuite par écrit au confrère le dépôt ou la teneur de l’audience.'
    }
  },

  {
    id: 'confraternite',
    titre: 'La confraternité',
    sources: ['RIN art. 1.3 et art. 8', 'Code de déontologie 2023', 'Code de déontologie des avocats européens'],
    principes: ['confraternité', 'courtoisie', 'loyauté', 'délicatesse', 'modération'],
    accroche: 'La confraternité organise les rapports entre avocats et rend possible ce que le procès suppose : un contradicteur, non un adversaire. Elle protège la cohésion du barreau et la confiance du public, mais elle trouve sa limite dans l’intérêt du client, qu’elle ne saurait sacrifier.',
    plan: [
      {
        t: 'I. Un rapport horizontal : entre confrères',
        pts: [
          'Dans l’enceinte du palais : robe qui efface les distinctions, interdiction de toute attaque personnelle, ordre de passage selon les usages, visite de courtoisie hors du barreau.',
          'Dans les échanges : confidentialité de plein droit des correspondances, respect du contradictoire, information de tout empêchement, interdiction de s’adresser à la partie adverse assistée.',
          'Dans les rapports professionnels : succession d’avocats, obligation de ducroire lorsqu’on confie un dossier à un confrère, information préalable avant toute action contre un confrère et visa du bâtonnier selon le règlement intérieur.',
          'Confraternité intergénérationnelle : déférence des jeunes envers les anciens, bienveillance des anciens envers les jeunes.'
        ]
      },
      {
        t: 'II. Un rapport vertical : envers l’Ordre, et ses limites',
        pts: [
          'Respect et déférence envers le bâtonnier et le conseil de l’ordre : répondre à leurs demandes, s’abstenir de tout propos injurieux, se soumettre aux contrôles, acquitter ses cotisations.',
          'Le défaut de réponse aux sollicitations du bâtonnier ou de la CARPA est en lui‑même une faute disciplinaire.',
          'Limite essentielle : l’intérêt du client. La confraternité ne peut justifier de taire une faute grave d’un confrère ni de sacrifier une position utile à la défense.',
          'Sanction : faute disciplinaire, et responsabilité civile si le manquement cause un préjudice au confrère, par exemple une atteinte à sa réputation professionnelle.'
        ]
      }
    ],
    cles: [
      'Avant de mettre en cause la responsabilité d’un confrère : avertir le bâtonnier et recueillir les observations du confrère.',
      'Installation à la même adresse qu’un confrère : information préalable obligatoire, mais son opposition ne lie pas, en vertu du principe de libre installation.',
      'Rendez‑vous entre confrères : au cabinet du plus ancien dans l’ordre du tableau.',
      'Ordre de passage à l’audience : priorité à l’avocat venant d’un barreau extérieur, puis au plus ancien, sauf règle du règlement intérieur local.',
      'Visite de courtoisie hors de son barreau : au président de la juridiction, au ministère public, au bâtonnier local et au contradicteur.',
      'Obligation de ducroire : l’avocat qui confie un dossier à un confrère reste personnellement tenu du paiement de ses honoraires, puis se fait rembourser par son client.',
      'Abus de confidentialité : soutenir dans ses écritures le contraire de ce qui a été convenu dans les échanges confidentiels est un manquement grave.',
      'Envers l’Ordre, la liberté d’expression existe mais des attaques publiques peuvent être sanctionnées de façon proportionnée, ce que la Cour européenne admet.'
    ],
    cartes: [
      { q: 'La confraternité figure‑t‑elle parmi les principes essentiels ?', r: 'Oui, à l’article 1.3 du RIN, parmi les huit principes de l’exercice professionnel. Elle est également reprise par le code de déontologie des avocats européens.', src: 'RIN art. 1.3' },
      { q: 'Que doit faire l’avocat avant d’agir contre un confrère ?', r: 'L’en avertir et lui communiquer l’assignation, recueillir ses observations, avertir le bâtonnier, et solliciter le visa lorsque le règlement intérieur l’impose.', src: 'RIN art. 8' },
      { q: 'Qu’est‑ce que l’obligation de ducroire ?', r: 'L’avocat qui confie un dossier à un confrère ou le consulte reste personnellement tenu du paiement de ses honoraires, frais et débours, quitte à en obtenir ensuite le remboursement par son client.', src: 'RIN art. 11.8' },
      { q: 'Où se tiennent par usage les rendez‑vous entre confrères ?', r: 'Au cabinet du plus ancien dans l’ordre du tableau.', src: 'Usages professionnels' },
      { q: 'Un confrère s’installe à votre adresse. Peut‑il passer outre votre opposition ?', r: 'Oui. Il doit vous informer préalablement, mais le principe de libre installation lui permet de maintenir son projet malgré votre opposition.', src: 'Jurisprudence ordinale' },
      { q: 'Le défaut de réponse au bâtonnier est‑il fautif ?', r: 'Oui, c’est en soi une faute déontologique, sanctionnée le cas échéant par une interdiction temporaire.', src: 'Jurisprudence disciplinaire' },
      { q: 'Quelle est la limite de la confraternité ?', r: 'L’intérêt du client. Elle ne peut justifier ni de sacrifier la défense, ni de s’abstenir face à une faute grave d’un confrère.', src: 'Code de déontologie des avocats européens, art. 20' },
      { q: 'Que doit faire l’avocat qui plaide hors de son barreau ?', r: 'Une visite de courtoisie au président de la juridiction, au magistrat du ministère public, au bâtonnier local et à son contradicteur.', src: 'Usages professionnels' },
      { q: 'Où se tient le rendez‑vous entre confrères ?', r: 'Au cabinet du plus ancien dans l’ordre du tableau, sauf accord contraire.', src: 'RIN art. 8' },
      { q: 'Que suppose l’installation à la même adresse qu’un confrère ?', r: 'Une information préalable obligatoire. L’opposition du confrère ne lie pas, en vertu de la liberté d’établissement.', src: 'RIN art. 8' },
      { q: 'Qu’est‑ce que l’obligation de ducroire entre avocats ?', r: 'L’avocat qui confie un dossier à un confrère reste personnellement tenu du paiement de ses honoraires, puis se retourne vers le client.', src: 'RIN art. 8' }
    ],
    qcm: [
      { q: 'Avant d’assigner un confrère, l’avocat doit :', o: ['obtenir l’autorisation du bâtonnier', 'l’en informer et prévenir le bâtonnier', 'ne rien faire de particulier'], b: 1, e: 'Information préalable et communication de l’assignation ; le visa du bâtonnier est une obligation d’information, non une autorisation.' },
      { q: 'L’obligation de ducroire pèse sur :', o: ['le client', 'l’avocat qui confie le dossier', 'l’avocat qui reçoit le dossier'], b: 1, e: 'Celui qui confie le dossier ou consulte un confrère garantit le paiement de ses honoraires.' },
      { q: 'La confraternité cède devant :', o: ['la courtoisie', 'l’intérêt du client', 'l’ancienneté au tableau'], b: 1, e: 'C’est la limite essentielle, rappelée notamment par le code de déontologie des avocats européens.' },
      { q: 'Le rendez‑vous entre confrères a lieu :', o: ['au choix du demandeur', 'au cabinet du plus ancien dans l’ordre du tableau', 'toujours chez le bâtonnier'], b: 1, e: 'Usage : au cabinet du plus ancien dans l’ordre du tableau.' },
      { q: 'L’installation à la même adresse qu’un confrère suppose :', o: ['son accord écrit obligatoire', 'une information préalable ; son opposition ne lie pas', 'l’autorisation du CNB'], b: 1, e: 'Information préalable obligatoire ; l’opposition ne lie pas, au nom de la liberté d’établissement.' },
      { q: 'Hors de son barreau, la visite de courtoisie s’adresse notamment :', o: ['au seul greffier en chef', 'au président de la juridiction, au ministère public, au bâtonnier local et au contradicteur', 'au seul bâtonnier de Paris'], b: 1, e: 'Visite au président, au parquet, au bâtonnier local et au contradicteur.' },
      { q: 'Abuser de la confidentialité des échanges entre confrères est :', o: ['une simple incorrection', 'un manquement disciplinaire', 'autorisé si l’intérêt du client le commande'], b: 1, e: 'Soutenir le contraire de ce qui a été convenu confidentiellement est un manquement.' },
      { q: 'L’ordre de passage à l’audience privilégie :', o: ['le plus jeune', 'l’avocat venant d’un barreau extérieur, puis le plus ancien, sauf règlement local', 'toujours le demandeur'], b: 1, e: 'Priorité à l’avocat d’un barreau extérieur, puis au plus ancien, sauf règle locale.' }
    ],
    jury: [
      { q: 'Vous découvrez qu’un confrère a détourné des fonds appartenant à votre client. La confraternité vous impose le silence ?', r: 'Non. La confraternité cède devant l’intérêt du client et ne peut couvrir une faute grave. Je saisis le bâtonnier, autorité de poursuite, après avoir avisé le confrère et recueilli ses observations si les circonstances le permettent. Le silence, ici, serait lui‑même un manquement à la probité et à la diligence envers mon client.' },
      { q: 'Un confrère vous insulte publiquement. Pouvez‑vous répondre sur le même ton ?', r: 'Non. La modération et la courtoisie s’imposent même face à l’outrance. L’excuse de provocation, prévue par la loi de 1881, peut jouer entre confrères mais elle est d’interprétation stricte : la riposte doit être immédiate, irréfléchie et proportionnée. La voie correcte est la saisine du bâtonnier, qui concilie ou poursuit.' },
      { q: 'La confraternité est‑elle un corporatisme déguisé ?', r: 'C’est la critique adressée à l’autorégulation. Elle ne résiste pas à l’examen : la confraternité cède devant l’intérêt du client, le réclamant a vu son rôle renforcé depuis 2021 avec la saisine directe de la juridiction disciplinaire, l’échevinage est de droit lorsque la poursuite émane d’un tiers, et le procureur général peut agir. La confiance du public est précisément ce que la confraternité protège.' },
      { q: 'Le confrère adverse est‑il un adversaire ?', r: 'Non, c’est un contradicteur. L’adversaire est la partie. Cette distinction n’est pas une figure de style : elle interdit l’attaque personnelle, impose de répondre aux courriers, d’informer d’un empêchement, de s’associer à un renvoi légitime, et fonde la confidentialité des échanges qui rend possible la négociation.' },
      { q: 'Confraternité et concurrence sont‑elles compatibles ?', r: 'Oui, sous réserve de la loyauté. Chaque avocat peut changer de structure et démarcher, chaque client peut changer d’avocat : la clientèle n’est pas une propriété. Est fautif ce qui dépasse : désorganisation du cabinet quitté, débauchage massif, dénigrement, offre de services précise adressée au fichier clients. La Cour de cassation rappelle qu’un manquement déontologique n’est pas automatiquement un acte de concurrence déloyale.' },
      { q: 'La confraternité est‑elle un devoir absolu ?', r: 'Non : elle cède devant les devoirs envers le client, devant la loi et devant les exigences du contradictoire. Elle organise les rapports entre avocats (courtoisie, confidentialité des pourparlers, ducroire, ordre de passage) mais ne justifie ni la dissimulation d’une pièce, ni le silence sur une faute préjudiciable au client. Avant d’agir contre un confrère, l’avertissement au bâtonnier et la collecte des observations restent la voie normale.' },
      { q: 'Que répondre sur la liberté d’expression envers l’Ordre ?', r: 'Elle existe : l’avocat peut critiquer une décision ordinale. Mais des attaques publiques disproportionnées peuvent être sanctionnées, ce que la Cour européenne admet sous réserve de proportionnalité. La voie du recours interne et la mesure dans le propos sont la conduite attendue à l’oral.' }
    ],
    cas: {
      e: 'Un confrère vous propose par courriel une transaction à 30 000 euros. Vous refusez. Trois mois plus tard, devant le juge, vous produisez ce courriel pour démontrer que la partie adverse reconnaissait sa dette. Que risquez‑vous ?',
      r: 'La production est irrégulière. Les correspondances entre avocats français sont confidentielles de plein droit, sauf mention « officiel » répondant aux trois conditions cumulatives de l’article 3.2 du RIN. Un courriel de proposition transactionnelle non revêtu de cette mention reste couvert. La juridiction saisie doit écarter la pièce des débats. Sur le plan disciplinaire, il s’agit d’un manquement grave à la confraternité, à la loyauté, à l’honneur, à la probité et à la délicatesse, susceptible d’une sanction pénale au titre de la violation du secret professionnel.'
    }
  },

  {
    id: 'conflits-interets',
    titre: 'Les conflits d’intérêts',
    sources: ['RIN art. 4 et 7', 'Code de déontologie 2023', 'D. 27 nov. 1991'],
    principes: ['indépendance', 'loyauté', 'secret professionnel'],
    accroche: 'Le conflit d’intérêts est l’angle mort de la relation de confiance : l’avocat qui sert deux intérêts opposés ne sert bien aucun des deux. La règle est donc préventive et non réparatrice : elle impose l’abstention dès le risque, apprécié in concreto au regard de la mission.',
    plan: [
      {
        t: 'I. Une interdiction préventive, appréciée in concreto',
        pts: [
          'Définition duale de l’article 4.1 du RIN : en conseil, lorsque l’avocat ne peut poursuivre sa mission sans compromettre les intérêts d’une partie ; en défense, lorsque assister plusieurs personnes le conduirait à présenter une défense différente de celle qu’il aurait choisie pour une seule.',
          'La règle vise les intérêts des clients ; le conflit avec les intérêts propres de l’avocat relève de l’indépendance, de la probité et des incompatibilités.',
          'Abstention dès le risque sérieux, sans attendre le conflit avéré ; déport de tous les clients concernés, pas seulement du dernier arrivé.',
          'Extension : la structure d’exercice et chacun de ses membres, le réseau pluridisciplinaire dans son ensemble, la structure de moyens en cas de risque de violation du secret, chaque professionnel d’une SPE.'
        ]
      },
      {
        t: 'II. Des exceptions consenties et des conséquences limitées',
        pts: [
          'Trois hypothèses sans conflit après information et accord des parties (art. 4.1 RIN) : conciliation d’une contrariété d’intérêts, conseil d’une stratégie commune, intervention séparée d’avocats d’une même structure dans une négociation.',
          'Client antérieur : conflit si le secret risque d’être violé ou si la connaissance acquise avantagerait le nouveau client.',
          'Rédacteur d’acte : abstention en cas de conflit ; le rédacteur unique conseil de toutes les parties ne peut agir ni défendre sur la validité, l’exécution ou l’interprétation de l’acte, sauf contestation émanant d’un tiers.',
          'Conséquences : sanction disciplinaire et responsabilité civile, mais ni nullité de l’acte ni de la procédure, sauf en matière de vente judiciaire. Seul le client peut invoquer le conflit.'
        ]
      }
    ],
    cles: [
      'La prohibition ne joue qu’entre clients : le conflit avec l’intérêt personnel de l’avocat relève de l’indépendance et de la probité.',
      'Le déport est celui de tous les clients concernés : on ne garde pas le premier en abandonnant le second.',
      'Échec de la conciliation : l’avocat ne peut plus être le conseil ni le défenseur d’aucune des parties dans la même affaire.',
      'Divorce par consentement mutuel par acte d’avocat : un avocat par époux, obligatoirement, et ils ne peuvent appartenir à la même structure.',
      'Incapable majeur : l’avocat ne peut représenter à la fois l’incapable et son représentant.',
      'Garde à vue : en cas de divergence entre l’avocat et l’OPJ ou le procureur sur l’existence d’un conflit, seul le bâtonnier désigne un autre défenseur.',
      'Acceptation tacite : le conflit soulevé tardivement, alors que le client disposait de tous les éléments, vaut renonciation à s’en prévaloir.',
      'Ethical wall : le cloisonnement interne est reconnu en droit français ; le « chinese wall » anglo‑saxon, qui dispense de l’accord du client, ne l’est pas.'
    ],
    cartes: [
      { q: 'Quel article du RIN définit le conflit d’intérêts ?', r: 'L’article 4, complété par l’article 7 pour la rédaction d’actes. La définition est duale : conseil d’une part, assistance et représentation d’autre part.', src: 'RIN art. 4' },
      { q: 'Quelles sont les trois hypothèses où il n’y a pas conflit après accord des parties ?', r: 'Concilier une contrariété d’intérêts, conseiller une stratégie commune, et l’intervention séparée d’avocats d’une même structure dans une négociation, les clients étant informés de cette appartenance commune.', src: 'RIN art. 4.1' },
      { q: 'Qui peut invoquer un conflit d’intérêts ?', r: 'Seuls les clients concernés, à charge pour eux de prouver la violation de la règle et l’atteinte au secret qui en résulte. Ni un tiers ni l’avocat adverse ne le peuvent.', src: 'Jurisprudence' },
      { q: 'Le conflit d’intérêts entraîne‑t‑il la nullité de la procédure ?', r: 'Non. Il n’affecte ni la validité de l’acte ni la procédure. Exception notable : la vente judiciaire, où la pluralité de mandats entraîne la nullité des enchères.', src: 'RIN art. 12.2 ; jurisprudence' },
      { q: 'Le rédacteur unique conseil de toutes les parties peut‑il défendre l’acte ?', r: 'Non : il ne peut agir ni défendre sur la validité, l’exécution ou l’interprétation de l’acte, sauf si la contestation émane d’un tiers.', src: 'RIN art. 7' },
      { q: 'En garde à vue, qui tranche l’existence d’un conflit d’intérêts ?', r: 'Le bâtonnier, seul compétent pour désigner un autre avocat en cas de divergence d’appréciation entre l’avocat et l’officier de police judiciaire ou le procureur.', src: 'CPP ; RIN' },
      { q: 'La règle du conflit s’applique‑t‑elle dans une structure de moyens ?', r: 'Oui, dès lors qu’existe un risque de violation du secret professionnel. La présomption est simple et peut être combattue par des mesures de cloisonnement.', src: 'RIN art. 4' },
      { q: 'Qu’est‑ce que l’ethical wall ?', r: 'Un ensemble de mesures de cloisonnement de l’information entre bureaux ou équipes d’une même structure. Reconnu en droit français, contrairement au chinese wall anglo‑saxon qui prétend dispenser de l’accord du client.', src: 'Pratique ordinale' },
      { q: 'Peut‑on défendre un nouveau client contre un ancien dans la même affaire ?', r: 'En principe non. La jurisprudence l’admet exceptionnellement en l’absence de preuve d’une violation du secret et d’un avantage tiré au profit du nouveau client, mais la prudence commande le refus.', src: 'Jurisprudence' }
    ],
    qcm: [
      { q: 'En cas de risque sérieux de conflit, l’avocat doit :', o: ['attendre que le conflit se réalise', 'se déporter de tous les clients concernés', 'conserver le premier client saisi'], b: 1, e: 'Le déport porte sur l’ensemble des clients concernés ; l’abstention joue dès le risque.' },
      { q: 'Le divorce par acte sous signature privée contresigné par avocats suppose :', o: ['un avocat commun', 'un avocat par époux', 'un avocat et un notaire'], b: 1, e: 'Un avocat par époux, obligatoirement, et ils ne peuvent appartenir à la même structure d’exercice.' },
      { q: 'Un conflit d’intérêts soulevé tardivement par un client informé :', o: ['reste invocable', 'vaut acceptation tacite', 'entraîne la nullité rétroactive'], b: 1, e: 'Celui qui disposait de tous les éléments et n’a pas jugé utile de soulever le conflit est réputé y avoir renoncé.' },
      { q: 'La nullité des enchères sanctionne :', o: ['tout conflit d’intérêts', 'la pluralité de mandats pour un même bien', 'l’absence de convention d’honoraires'], b: 1, e: 'C’est l’exception notable en matière de vente judiciaire.' },
      { q: 'En cas de conflit, le déport concerne :', o: ['le seul second client', 'tous les clients concernés : on ne garde pas le premier en lâchant le second', 'le seul client le moins ancien'], b: 1, e: 'Le déport est celui de tous les clients concernés.' },
      { q: 'L’avocat peut‑il représenter à la fois un incapable majeur et son représentant ?', o: ['oui, avec information', 'non', 'oui, sur autorisation du juge des tutelles'], b: 1, e: 'Interdiction de représenter à la fois l’incapable et son représentant.' },
      { q: 'En garde à vue, en cas de divergence sur l’existence d’un conflit, qui désigne un autre avocat ?', o: ['l’OPJ', 'le procureur', 'le bâtonnier'], b: 2, e: 'Seul le bâtonnier désigne un autre avocat en cas de divergence.' },
      { q: 'L’ethical wall français :', o: ['dispense de l’accord du client, comme le chinese wall', 'est reconnu mais ne dispense pas de l’accord du client lorsque celui‑ci est requis', 'est interdit'], b: 1, e: 'Cloisonnement reconnu ; il ne remplace pas l’accord du client quand la règle l’exige.' }
    ],
    jury: [
      { q: 'Vous avez conseillé une société pendant vingt ans. Son ancien dirigeant vous demande de l’assister dans son licenciement contre elle. Vous acceptez ?', r: 'Non. Deux motifs cumulés : le risque de violation du secret des affaires de l’ancien client, et le risque de favoritisme puisque ma connaissance de la société avantagerait mécaniquement le nouveau client. L’identité d’affaires n’est pas requise, la règle jouant dans le temps. La prudence commande le refus, même si je pense pouvoir démontrer n’avoir eu connaissance d’aucune information privilégiée.' },
      { q: 'Deux coprévenus vous demandent de les défendre ensemble. Est‑ce possible ?', r: 'Oui si je peux leur conseiller une stratégie commune, après les avoir informés et recueilli leur accord. Le test est celui de l’article 4.1 : si assister les deux me conduisait à présenter une défense différente de celle que j’aurais choisie pour un seul, il y a conflit. En pratique, dès qu’un prévenu peut avoir intérêt à charger l’autre, il faut se déporter des deux.' },
      { q: 'Peut‑on défendre le conjoint d’un membre de sa famille ?', r: 'Il n’existe pas d’interdiction de principe, à condition que l’indépendance soit garantie, mais la pratique le déconseille. On quitte alors le terrain du conflit d’intérêts stricto sensu pour celui de l’indépendance et de la délicatesse, qui peuvent commander un déport même en l’absence de conflit caractérisé.' },
      { q: 'Comment prévenez‑vous les conflits en pratique ?', r: 'Identification systématique du client et du bénéficiaire effectif avant toute intervention, ce qui rejoint les obligations de vigilance anti‑blanchiment. Logiciel de conflict check interrogeant clients, parties adverses et bénéficiaires économiques. Information réciproque au sein de la structure, y compris de la clientèle personnelle des collaborateurs. Ethical wall entre bureaux. Et en cas de doute, l’avis du bâtonnier ou de la commission dédiée du barreau.' },
      { q: 'Le juge des référés peut‑il enjoindre à un avocat de se déporter ?', r: 'Oui, sa compétence est admise pour faire cesser un trouble manifestement illicite. C’est une soupape lorsque le bâtonnier reste en carence, puisque son avis déontologique n’a pas de force contraignante. La voie normale demeure ordinale, le bâtonnier pouvant, s’il estime la faute constituée, saisir la juridiction disciplinaire.' },
      { q: 'Distinguez conflit entre clients et conflit avec l’intérêt personnel de l’avocat.', r: 'Le conflit d’intérêts au sens du RIN joue entre clients (art. 4 et 7) : secret partagé, risques pour la loyauté de la défense. Le conflit avec l’intérêt personnel de l’avocat (participation financière, relation affective, enjeu réputationnel) relève de l’indépendance et de la probité : l’avocat doit se déporter ou refuser, même hors « conflit » au sens strict. À l’oral, cette distinction évite de tout ramener à une seule rubrique.' },
      { q: 'Que se passe‑t‑il si la conciliation entre clients échoue ?', r: 'L’avocat ne peut plus être le conseil ni le défenseur d’aucune des parties dans la même affaire. Il se déporte de tous. Garder le « premier » client en abandonnant le second serait une faute : le secret et la connaissance acquise contaminent la suite. L’information loyale des clients et, au besoin, l’orientation vers d’autres conseils, clôturent la mission.' }
    ],
    cas: {
      e: 'Votre cabinet conseille un promoteur. Un collaborateur, sur sa clientèle personnelle, accepte de défendre un riverain qui attaque le permis de construire de ce promoteur. Le collaborateur soutient qu’il est indépendant. Que décidez‑vous ?',
      r: 'Le collaborateur libéral ne peut assister ou représenter une personne dont les intérêts sont contraires à ceux d’un client du cabinet dans lequel il collabore. L’interdiction s’apprécie au niveau de la structure et de chacun de ses membres, indépendamment de l’indépendance intellectuelle du collaborateur. Le dossier doit être refusé ou restitué. Ce cas illustre la contrepartie de la clientèle personnelle : le collaborateur doit informer le cabinet de l’identité de ses clients pour permettre le contrôle des conflits.'
    },
    cas2: {
      e: 'Deux époux vous consultent ensemble pour un divorce par consentement mutuel par acte d’avocat. Ils insistent pour « un seul avocat, moins cher ». Que répondez‑vous ?',
      r: 'Refus clair : la loi impose un avocat par époux, qui ne peuvent appartenir à la même structure. Vous expliquez que la règle protège le consentement libre et éclairé de chacun. Vous orientez l’un des deux vers un confrère extérieur à votre structure. Toute acceptation exposerait à la nullité de l’acte et à la discipline. L’argument économique ne fait pas céder la règle.'
    }
  },

  {
    id: 'succession-avocats',
    titre: 'La succession d’avocats dans un même dossier',
    sources: ['RIN art. 9', 'Code de déontologie 2023', 'L. 10 juill. 1991 (aide juridictionnelle)'],
    principes: ['confraternité', 'loyauté', 'diligence', 'délicatesse'],
    accroche: 'La succession d’avocats met à l’épreuve deux principes qui pourraient s’opposer : le libre choix de son défenseur, d’ordre public, et la confraternité. Le RIN les concilie en plaçant la continuité de la défense au‑dessus du différend d’honoraires : le dossier se transmet sans délai, sans droit de rétention.',
    plan: [
      {
        t: 'I. Les obligations de l’avocat dessaisi',
        pts: [
          'Transmission intégrale et sans délai du dossier au successeur, y compris les correspondances confidentielles nécessaires à la connaissance du litige, qui restent couvertes par le secret.',
          'Aucun droit de rétention, même en cas d’honoraires impayés. Seule exception : les matières à tarif réglementé (saisie immobilière, partage, licitation, sûretés judiciaires).',
          'Envers le client : informer suffisamment tôt et par écrit, préciser les délais de procédure, rappeler qu’il lui appartient de désigner un nouvel avocat, dégager sa responsabilité pour l’avenir sans mettre en péril ses intérêts.',
          'En représentation obligatoire, il reste constitué jusqu’à son remplacement effectif : il continue de recevoir les actes et doit en informer le client.'
        ]
      },
      {
        t: 'II. Les obligations de l’avocat successeur',
        pts: [
          'Vérifier qu’aucun confrère n’a été précédemment chargé du dossier, puis l’informer par écrit de sa saisine et demander la transmission.',
          'S’enquérir des sommes restant dues au prédécesseur et faire les efforts suffisants pour en obtenir le paiement par le client.',
          'S’abstenir de défendre son client contre le prédécesseur sans accord préalable du bâtonnier, et ne jamais le critiquer devant le client.',
          'Prudence : vérifier l’état de la procédure et les échéances avant d’accepter, pour assurer la continuité. Sous aide juridictionnelle totale, informer le prédécesseur, le bureau d’aide juridictionnelle et le bâtonnier.'
        ]
      }
    ],
    cles: [
      'La succession suppose deux conditions : rupture de la relation contractuelle avec l’avocat initial, et reprise du même dossier par le nouveau, quelle que soit l’origine de l’initiative.',
      'Le défaut ou le retard de transmission est une faute disciplinaire, mais ne porte atteinte ni à la probité ni à l’honneur.',
      'Sous AJ totale, aucun honoraire ne peut être perçu, sauf renonciation libre et éclairée du client après information des conséquences.',
      'L’État ne verse qu’une seule contribution pour toute la procédure : elle est versée au dernier avocat, qui la partage en fonction des diligences ; en cas de désaccord, le bâtonnier tranche.',
      'Honoraire de résultat en cas de dessaisissement : caduc, sauf stipulation contraire ; à défaut de clause, chaque avocat est payé à proportion de sa contribution au résultat obtenu.',
      'Si c’est l’avocat qui met fin à la mission : LRAR doublée d’une lettre simple, sans obligation de motiver, en informant le tribunal et l’avocat adverse.',
      'Le mandat ad litem se poursuit jusqu’à l’exécution du jugement : une simple décision ne suffit pas à prouver la décharge.',
      'Restitution : seules les pièces confiées par le client et les correspondances « officiel » lui reviennent ; le reste du dossier appartient à l’avocat.'
    ],
    cartes: [
      { q: 'L’avocat dessaisi dispose‑t‑il d’un droit de rétention ?', r: 'Non, même en cas d’honoraires impayés. Il doit transmettre le dossier sans délai. Seules les matières à tarif réglementé y font exception.', src: 'RIN art. 9' },
      { q: 'Que doit faire l’avocat successeur à l’égard des honoraires du prédécesseur ?', r: 'S’en enquérir et faire les efforts suffisants pour en obtenir le paiement par le client. S’il perçoit des honoraires alors que des sommes restent dues, il doit en informer le bâtonnier.', src: 'RIN art. 9' },
      { q: 'Peut‑on défendre son client contre son propre prédécesseur ?', r: 'Non, sauf accord préalable du bâtonnier. À défaut, il s’agit d’une faute disciplinaire, sans que la procédure en soit irrecevable.', src: 'RIN art. 9' },
      { q: 'Sous aide juridictionnelle totale, combien de contributions l’État verse‑t‑il ?', r: 'Une seule pour toute la procédure, versée au dernier avocat intervenant, qui la partage avec le précédent en fonction des diligences. À défaut d’accord, le bâtonnier fixe la répartition.', src: 'L. 10 juill. 1991' },
      { q: 'Le défaut de transmission du dossier porte‑t‑il atteinte à la probité ?', r: 'Non. C’est une faute disciplinaire, mais elle ne met en cause ni la probité ni l’honneur, ce qui a une incidence en matière d’amnistie.', src: 'Jurisprudence disciplinaire' },
      { q: 'Quelles pièces l’avocat doit‑il restituer au client lui‑même ?', r: 'Les pièces que le client lui a confiées et les correspondances portant la mention « officiel ». Le reste du dossier, notes et correspondances confidentielles, demeure la propriété de l’avocat.', src: 'RIN art. 9' },
      { q: 'Que devient l’honoraire de résultat en cas de dessaisissement ?', r: 'Il devient caduc, sauf si la convention prévoyait son versement avant le résultat définitif. À défaut de clause, chaque avocat est payé à proportion de sa contribution au résultat.', src: 'RIN art. 11 ; code de déontologie' },
      { q: 'Quand l’avocat en représentation obligatoire est‑il déchargé ?', r: 'Au jour où il est effectivement remplacé. Jusque‑là il reste constitué et destinataire des actes ; si le client ne le remplace pas, il saisit le bâtonnier aux fins de désignation.', src: 'CPC ; RIN' },
      { q: 'Qui perçoit la contribution de l’État en cas de succession sous AJ ?', r: 'Le dernier avocat, qui la partage ensuite en fonction des diligences accomplies par chacun.', src: 'L. 10 juill. 1991' },
      { q: 'Comment l’avocat met‑il fin à sa mission ?', r: 'Par LRAR doublée d’une lettre simple, sans obligation de motiver, en informant le tribunal et l’avocat adverse.', src: 'RIN art. 9' },
      { q: 'Que restituer au client lors de la succession ?', r: 'Les pièces confiées par le client et les correspondances « officiel ». Le reste du dossier appartient à l’avocat.', src: 'RIN art. 9' }
    ],
    qcm: [
      { q: 'L’avocat dessaisi impayé peut :', o: ['retenir le dossier', 'transmettre sans délai et s’en remettre au successeur', 'exiger le paiement du successeur'], b: 1, e: 'Aucun droit de rétention ; le successeur doit toutefois s’enquérir des impayés et faire les efforts nécessaires.' },
      { q: 'Sous AJ totale, le nouvel avocat peut percevoir des honoraires :', o: ['librement', 'jamais', 'seulement après renonciation libre et éclairée du client à l’AJ'], b: 2, e: 'La renonciation doit être libre, éclairée, et précédée d’une information sur les conséquences.' },
      { q: 'Agir contre son prédécesseur sans accord du bâtonnier entraîne :', o: ['l’irrecevabilité de la procédure', 'une faute disciplinaire seulement', 'la nullité de la constitution'], b: 1, e: 'La sanction est disciplinaire ; la procédure reste valable.' },
      { q: 'La contribution de l’État sous AJ est versée :', o: ['au premier avocat', 'au dernier avocat, qui la partage selon les diligences', 'à parts égales d’office'], b: 1, e: 'Une seule contribution pour toute la procédure, versée au dernier avocat, puis partage.' },
      { q: 'L’honoraire de résultat en cas de dessaisissement est :', o: ['toujours dû au premier avocat', 'caduc sauf stipulation contraire ; à défaut, paiement au prorata des diligences', 'dû intégralement au nouvel avocat'], b: 1, e: 'Caduc sauf clause contraire ; sinon répartition proportionnelle aux diligences.' },
      { q: 'Si l’avocat met fin à la mission, il doit :', o: ['motiver obligatoirement sa décision', 'notifier par LRAR doublée d’une lettre simple, informer le tribunal et l’avocat adverse', 'seulement appeler le client'], b: 1, e: 'LRAR + lettre simple, sans obligation de motiver ; information du tribunal et du contradicteur.' },
      { q: 'Le mandat ad litem se poursuit jusqu’à :', o: ['le délibéré', 'l’exécution du jugement', 'la clôture de l’instruction'], b: 1, e: 'Jusqu’à l’exécution du jugement : une simple décision ne prouve pas la décharge.' },
      { q: 'Quelles pièces doivent être restituées au client ?', o: ['tout le dossier', 'les pièces confiées par le client et les correspondances « officiel » ; le reste appartient à l’avocat', 'uniquement les originaux administratifs'], b: 1, e: 'Restitution limitée aux pièces du client et aux correspondances officiel ; le travail de l’avocat lui appartient.' }
    ],
    jury: [
      { q: 'Votre client vous quitte pour un confrère, en vous devant 8 000 euros. Que faites‑vous ?', r: 'Je transmets le dossier sans délai et intégralement : aucun droit de rétention n’existe, la continuité de la défense prime. J’informe le successeur des sommes dues, il doit s’en enquérir et faire les efforts nécessaires pour en obtenir le paiement. Pour recouvrer, je saisis le bâtonnier, juge de l’honoraire, dans le délai de prescription de cinq ans, deux ans si mon client est un consommateur.' },
      { q: 'Votre nouveau client veut engager la responsabilité de son ancien avocat. Vous le représentez ?', r: 'Pas sans l’accord préalable du bâtonnier, que je sollicite. La règle protège la confraternité sans priver le client de recours : si l’accord est refusé sans motif, le client conserve le droit d’agir avec un autre conseil. Je dois en outre m’abstenir de toute critique du prédécesseur devant le client, ce qui n’empêche pas de l’informer objectivement de ses droits.' },
      { q: 'C’est vous qui souhaitez vous décharger d’un dossier. Comment procédez‑vous ?', r: 'Par écrit, LRAR doublée d’une lettre simple, sans avoir à me justifier, mais suffisamment tôt pour ne pas mettre en péril les intérêts du client. Je précise les délais de procédure en cours, la nécessité de désigner un nouvel avocat, les conséquences à défaut. J’informe le tribunal et l’avocat adverse. En représentation obligatoire, je reste constitué jusqu’à mon remplacement ; à défaut, je saisis le bâtonnier.' },
      { q: 'Devez‑vous transmettre les correspondances confidentielles échangées avec l’avocat adverse ?', r: 'Oui lorsqu’elles sont nécessaires à la connaissance du dossier : le successeur ne peut défendre utilement sans connaître l’état des négociations. Elles demeurent couvertes par la confidentialité entre ses mains et ne pourront être produites. La logique est celle du secret partagé au service de la continuité de la défense.' },
      { q: 'Sous commission d’office, pouvez‑vous vous décharger librement ?', r: 'Non. L’avocat commis d’office ne peut refuser son ministère ni s’en décharger sans faire approuver ses motifs légitimes (indisponibilité, incompétence, conflit d’intérêts) par le bâtonnier ou par le président de la juridiction qui l’a désigné. Le refus illégitime est sanctionné disciplinairement.' },
      { q: 'Quelles sont les deux conditions de la succession d’avocats ?', r: 'La rupture de la relation contractuelle avec l’avocat initial, et la reprise du même dossier par le nouvel avocat. Sans ces deux éléments, il n’y a qu’un changement de conseil sur une autre affaire, ou une simple fin de mission. Le RIN organise alors transmission du dossier, sort des honoraires, et devoirs réciproques, sans que le retard de transmission n’entache à lui seul la probité ou l’honneur.' },
      { q: 'Que dire du dessaisissement et de l’honoraire de résultat ?', r: 'L’honoraire de résultat est en principe caduc en cas de dessaisissement, sauf stipulation contraire. À défaut de clause, chaque avocat est payé à proportion des diligences. Sous AJ totale, aucun honoraire complémentaire sauf renonciation libre et éclairée après information. Ces règles évitent que la course au résultat ne captive le client.' }
    ],
    cas: {
      e: 'Vous êtes saisi d’un dossier de divorce. Le client ne mentionne aucun avocat précédent. Trois semaines plus tard, un confrère vous écrit qu’il était constitué et n’a jamais été avisé. Quelles fautes avez‑vous commises ?',
      r: 'Une seule, mais réelle : le manquement à l’obligation de renseignements. L’avocat successeur doit vérifier, avant d’intervenir, qu’aucun confrère n’a été chargé du dossier ; il ne peut se retrancher derrière le silence du client. Une simple question au client et la lecture des pièces de procédure y auraient suffi. La régularisation consiste à écrire immédiatement au confrère, à lui demander la transmission du dossier, à s’enquérir des honoraires impayés et, si un incident subsiste, à en informer le bâtonnier. Le manquement est disciplinaire et n’affecte pas la validité des actes accomplis.'
    }
  },

  {
    id: 'lcb-ft',
    titre: 'La lutte contre le blanchiment des capitaux et le financement du terrorisme',
    sources: ['C. mon. fin. art. L. 561‑2 à L. 561‑36', 'RIN art. 1.5', 'Directives européennes LCB‑FT'],
    principes: ['prudence', 'désintéressement', 'secret professionnel'],
    accroche: 'La lutte contre le blanchiment place l’avocat à la croisée de deux exigences contraires : la coopération attendue de tout assujetti, et le secret qui fait de lui le confident nécessaire de son client. Le droit français résout la tension par deux dispositifs : le filtre du bâtonnier, et l’exclusion des activités juridictionnelles et de consultation.',
    plan: [
      {
        t: 'I. Des obligations graduées : vigilance, dissuasion, déclaration',
        pts: [
          'Vigilance et identification, en amont de toute relation d’affaires : identité du client et du bénéficiaire effectif, objet et nature de la relation, origine et destination des fonds, licité de l’opération. Conservation cinq ans.',
          'Vigilance renforcée : client non physiquement présent, personne politiquement exposée, opération risquée par nature, pays à haut risque, signalement de Tracfin. Vigilance allégée possible en l’absence de tout soupçon.',
          'Dissuasion puis déport : l’avocat qui soupçonne une opération de blanchiment doit d’abord dissuader son client ; s’il n’y parvient pas, il se retire.',
          'Déclaration de soupçon, écrite, adressée au bâtonnier qui la transmet à Tracfin dans les huit jours, sauf s’il estime qu’il n’existe pas de soupçon.'
        ]
      },
      {
        t: 'II. Un périmètre limité qui préserve la mission de défense',
        pts: [
          'Activités visées (art. L. 561‑3 CMF) : transactions financières ou immobilières, gestion de fonds et d’actifs, ouverture de comptes, constitution et gestion de sociétés et de fiducies, conseil fiscal.',
          'Deux exclusions : l’activité se rattachant à une procédure juridictionnelle, sauf acte détachable ; la consultation juridique, sauf conseil fiscal ou consultation donnée à des fins de blanchiment. La vigilance demeure, seule la déclaration tombe.',
          'Immunité : aucune action civile, poursuite pénale pour dénonciation calomnieuse ni sanction disciplinaire contre l’avocat de bonne foi ni contre le bâtonnier qui transmet ; l’État répond du dommage.',
          'Contrôle par le conseil de l’ordre, assisté le cas échéant du CNB, avec dispositif d’alerte sécurisé et anonyme ; sanctions administratives spécifiques, disciplinaires et pénales.'
        ]
      }
    ],
    cles: [
      'Le bâtonnier est le filtre : c’est lui, et non l’avocat, qui saisit Tracfin, dans les huit jours.',
      'L’avocat fiduciaire échappe au filtre : il correspond directement avec Tracfin, tout en informant son bâtonnier.',
      'La CARPA est elle‑même assujettie aux obligations LCB‑FT depuis 2020, dans le même périmètre que les avocats.',
      'Bénéficiaire effectif : personne physique contrôlant en dernier lieu l’opération, seuil indicatif de 25 % du capital ou des droits de vote.',
      'Client occasionnel : celui qui s’adresse à l’avocat pour une opération ponctuelle. Son identité et celle du bénéficiaire effectif doivent être vérifiées avant l’opération, notamment au‑delà du seuil réglementaire de 10 000 euros pour une opération ou des opérations liées. Ce seuil est fixé par décret et a évolué : vérifiez‑le au texte en vigueur.',
      'Blanchiment : cinq ans et 375 000 euros ; aggravé par l’usage des facilités procurées par la profession : dix ans et 750 000 euros.',
      'Le gel des avoirs s’applique en toutes matières : vérification au registre national, application immédiate, information du ministère de l’économie.',
      'Arrêt Michaud c. France (CEDH, 6 décembre 2012) : la déclaration de soupçon est une ingérence dans la vie privée, mais justifiée et proportionnée, précisément parce qu’elle passe par le filtre du bâtonnier et ne touche pas au cœur de la mission de défense.'
    ],
    cartes: [
      { q: 'À qui l’avocat adresse‑t‑il sa déclaration de soupçon ?', r: 'Au bâtonnier de l’ordre auprès duquel il est inscrit, qui la transmet à Tracfin dans les huit jours francs, sauf s’il estime qu’il n’existe pas de soupçon. C’est le filtre du bâtonnier, validé par la Cour européenne dans l’arrêt Michaud c. France.', src: 'C. mon. fin. art. L. 561‑17' },
      { q: 'Quelles activités échappent à l’obligation de déclaration ?', r: 'Celles se rattachant à une procédure juridictionnelle, sauf acte détachable, et les consultations juridiques, sauf conseil fiscal ou consultation à des fins de blanchiment. La vigilance reste due.', src: 'C. mon. fin. art. L. 561‑3' },
      { q: 'Que doit faire l’avocat avant de déclarer ?', r: 'Dissuader son client de réaliser l’opération ; s’il n’y parvient pas, se déporter du dossier. La déclaration ne vient qu’ensuite, et seulement dans le périmètre légal.', src: 'RIN art. 1.5' },
      { q: 'Quelles peines sanctionnent le blanchiment aggravé par un professionnel ?', r: 'Dix ans d’emprisonnement et 750 000 euros d’amende, montant pouvant être porté à la moitié de la valeur des biens blanchis, outre des peines complémentaires.', src: 'C. pén. art. 324‑2' },
      { q: 'Qu’est‑ce que le bénéficiaire effectif ?', r: 'La personne physique qui contrôle en dernier lieu l’opération, le seuil indicatif étant de 25 % du capital ou des droits de vote, ou toute autre forme de contrôle.', src: 'C. mon. fin.' },
      { q: 'Combien de temps l’avocat conserve‑t‑il les pièces d’identification ?', r: 'Cinq ans à compter de la fin de la relation d’affaires ou de l’exécution de l’opération.', src: 'C. mon. fin.' },
      { q: 'L’avocat fiduciaire bénéficie‑t‑il du filtre du bâtonnier ?', r: 'Non. Il correspond directement avec Tracfin, selon le droit commun, tout en informant son bâtonnier des correspondances échangées.', src: 'C. mon. fin. ; RIN art. 6.5' },
      { q: 'L’avocat qui déclare de bonne foi risque‑t‑il quelque chose ?', r: 'Non : aucune action en responsabilité civile, aucune poursuite pour dénonciation calomnieuse, aucune sanction disciplinaire pour atteinte au secret. L’État répond du dommage.', src: 'C. mon. fin. art. L. 561‑22' },
      { q: 'Qui contrôle le respect des obligations LCB‑FT ?', r: 'Le conseil de l’ordre du barreau d’inscription, en pratique via le bâtonnier, assisté le cas échéant du CNB. Le bâtonnier rend compte une fois par an au procureur général et au président du CNB.', src: 'C. mon. fin. ; D. 1991' }
    ],
    qcm: [
      { q: 'La déclaration de soupçon est adressée :', o: ['directement à Tracfin', 'au bâtonnier', 'au procureur de la République'], b: 1, e: 'Au bâtonnier, qui transmet à Tracfin dans les huit jours, sauf pour l’avocat fiduciaire.' },
      { q: 'La consultation juridique donne lieu à déclaration :', o: ['jamais', 'toujours', 'en matière fiscale ou si elle est donnée à des fins de blanchiment'], b: 2, e: 'Ce sont les deux exceptions à l’exclusion des consultations.' },
      { q: 'Le blanchiment simple est puni de :', o: ['3 ans et 45 000 €', '5 ans et 375 000 €', '10 ans et 750 000 €'], b: 1, e: '5 ans et 375 000 euros ; 10 ans et 750 000 euros pour le blanchiment aggravé, notamment par l’usage des facilités de la profession.' },
      { q: 'Face à un soupçon, l’avocat doit d’abord :', o: ['déclarer', 'dissuader son client', 'saisir le procureur'], b: 1, e: 'Dissuasion, puis déport si elle échoue, puis déclaration si l’opération entre dans le périmètre légal.' },
      { q: 'Le seuil indicatif du bénéficiaire effectif est de :', o: ['10 %', '25 % du capital ou des droits de vote', '50 %'], b: 1, e: 'Personne physique contrôlant en dernier lieu ; seuil indicatif de 25 %.' },
      { q: 'La CARPA est‑elle assujettie aux obligations LCB‑FT ?', o: ['non', 'oui, depuis 2020, dans le même périmètre que les avocats', 'seulement pour les fiducies'], b: 1, e: 'Assujettissement depuis 2020, même périmètre que les avocats.' },
      { q: 'Le blanchiment aggravé par l’usage des facilités de la profession est puni de :', o: ['cinq ans et 375 000 euros', 'dix ans et 750 000 euros', 'trois ans et 200 000 euros'], b: 1, e: 'Aggravation : dix ans et 750 000 euros lorsque les facilités de la profession sont utilisées.' },
      { q: 'L’arrêt Michaud c. France (CEDH) a jugé que la déclaration de soupçon :', o: ['viole l’article 8', 'est une ingérence justifiée et proportionnée dans la vie privée', 'ne s’applique pas aux avocats'], b: 1, e: 'Ingérence dans la vie privée, mais justifiée et proportionnée ; le filtre du bâtonnier a pesé.' }
    ],
    jury: [
      { q: 'La déclaration de soupçon fait‑elle de l’avocat un auxiliaire de police ?', r: 'C’est la crainte de la profession, et le droit y répond par deux garde‑fous. D’abord le filtre du bâtonnier, qui apprécie la réalité du soupçon avant transmission : la CARPA, assujettie depuis 2020, passe par le même canal. Ensuite l’exclusion de l’activité juridictionnelle et de la consultation, c’est‑à‑dire du cœur de la mission de défense. Dans l’arrêt Michaud c. France du 6 décembre 2012, la Cour européenne a jugé sur ce fondement que l’ingérence était justifiée et proportionnée.' },
      { q: 'Votre client vous remet 3 000 euros en espèces pour vos honoraires. Que faites‑vous ?', r: 'Le paiement en espèces des honoraires est plafonné à 1 000 euros lorsque le débiteur a son domicile fiscal en France ou agit à titre professionnel. Je refuse donc ce montant et propose un virement. Indépendamment du plafond, le devoir de prudence m’impose de vérifier l’origine des fonds et de refuser tout paiement dont je connais le caractère illicite.' },
      { q: 'Quelle différence entre l’obligation d’abstention et l’obligation de déclaration ?', r: 'L’abstention interdit de réaliser l’opération tant que la déclaration n’est pas faite et que Tracfin ne s’y est pas opposé ; elle joue aussi lorsque l’avocat ne parvient pas à identifier son client ou l’objet de la relation, auquel cas il doit y mettre fin. La déclaration est l’information de Tracfin par le bâtonnier. Les deux se cumulent dans le périmètre de l’article L. 561‑3.' },
      { q: 'Comment organisez‑vous votre cabinet en pratique ?', r: 'Un plan de vigilance écrit : procédure d’identification et de conservation, classification des risques par type de dossier (faible pour un contrat de travail, élevé pour une vente immobilière, une cession de fonds ou un mandat de représentation fiscale), dispositif de contrôle interne, désignation d’un responsable dans les structures, formation du personnel, consultation du registre des gels d’avoirs et des bases de personnes sanctionnées.' },
      { q: 'Tracfin s’oppose à une opération. Quel est le mécanisme ?', r: 'L’opposition est notifiée au bâtonnier et reporte l’opération de dix jours. Dans ce délai, le président du tribunal judiciaire peut proroger la mesure ou ordonner le séquestre des fonds. À défaut d’opposition ou de décision dans le délai, l’opération peut être exécutée.' },
      { q: 'Pourquoi le filtre du bâtonnier est‑il central dans votre exposé LCB‑FT ?', r: 'Parce qu’il concilie l’obligation de déclaration et le secret professionnel : l’avocat déclare au bâtonnier, qui transmet à Tracfin dans les huit jours s’il estime le soupçon caractérisé. L’avocat fiduciaire échappe à ce filtre et écrit directement à Tracfin en informant le bâtonnier. La CEDH, dans Michaud c. France, a validé ce dispositif comme proportionné. Sans ce filtre, la déclaration directe ferait de l’avocat un auxiliaire apparent de la police financière.' },
      { q: 'Que faire face à un client occasionnel pour une opération ponctuelle à risque ?', r: 'Identifier le client et le bénéficiaire effectif avant d’agir, classer le risque, appliquer les mesures de vigilance adaptées, et refuser ou rompre si le soupçon persiste. La consultation juridique et la rédaction d’actes entrent dans le champ ; la défense pénale en est exclue dans les conditions légales. Documenter les diligences protège l’avocat autant que le dispositif légal.' }
    ],
    cas: {
      e: 'Un nouveau client vous demande de constituer une société civile immobilière et d’acquérir un immeuble de 2 millions d’euros. Il refuse d’indiquer l’origine des fonds et vous adresse un mandataire que vous ne parvenez pas à identifier. Que faites‑vous ?',
      r: 'Nous sommes au cœur du périmètre de l’article L. 561‑3 : constitution de société et transaction immobilière. Trois étapes. Premièrement, la vigilance renforcée s’impose : client non identifié, refus de justifier l’origine des fonds, montant élevé. Deuxièmement, ne pouvant identifier le client ni le bénéficiaire effectif ni l’objet de la relation, je dois m’abstenir d’exécuter l’opération et n’établir aucune relation d’affaires. Troisièmement, après avoir tenté de dissuader le client, je me déporte et j’adresse une déclaration de soupçon écrite au bâtonnier, qui la transmettra à Tracfin sous huit jours. Ma bonne foi m’immunise contre toute action civile, pénale ou disciplinaire.'
    },
    cas2: {
      e: 'Vous êtes avocat fiduciaire. Un apport en numéraire de 800 000 euros doit transiter pour une acquisition. Les justificatifs d’origine des fonds sont flous. Quelle conduite ?',
      r: 'En qualité de fiduciaire, vous êtes hors filtre du bâtonnier pour la relation avec Tracfin : vigilance renforcée, gel des avoirs à vérifier, refus d’exécuter tant que l’origine n’est pas élucidée. Si le soupçon demeure, déclaration directe à Tracfin et information du bâtonnier. Vous documentez le refus ou la déclaration. Le régime dérogatoire du fiduciaire (assurance additionnelle, comptabilité séparée, absence de confidentialité envers les organes de contrôle) s’applique pleinement : ne pas le confondre avec l’avocat « classique ».'
    }
  },

  {
    id: 'code-europeen',
    titre: 'Le code de déontologie des avocats européens',
    sources: ['Code de déontologie des avocats européens (CCBE, 1988, modifié)', 'RIN art. 21', 'Charte des principes essentiels de l’avocat européen (2006)'],
    principes: ['indépendance', 'confraternité', 'secret professionnel'],
    accroche: 'La libre circulation des services juridiques a créé une difficulté pratique : la double déontologie. Un avocat français qui écrit à un confrère allemand applique deux corps de règles qui peuvent se contredire. Le code du CCBE résout ces conflits de normes, et le RIN l’a intégré pour le rendre obligatoire en France.',
    plan: [
      {
        t: 'I. Un instrument d’harmonisation transfrontalière',
        pts: [
          'Adopté en 1988 par le Conseil des barreaux européens, association internationale de droit belge sans but lucratif créée en 1960, qui fédère les barreaux de l’Union, de l’EEE, de la Suisse et des pays associés et observateurs.',
          'Champ matériel : les activités transfrontalières, c’est‑à‑dire les relations professionnelles entre avocats d’États différents et l’activité exercée dans un autre État membre.',
          'Champ personnel : obligatoire pour les avocats des barreaux ayant formellement accepté d’être liés. En France, l’intégration à l’article 21 du RIN le rend directement applicable.',
          'Textes voisins : la Charte des principes essentiels de l’avocat européen de 2006, qui énonce dix principes socles à vocation paneuropéenne, et le Modèle de code de 2022, boîte à outils non contraignante.'
        ]
      },
      {
        t: 'II. Un corpus aligné sur le droit français, sauf sur deux points',
        pts: [
          'Convergences : indépendance, dignité, confraternité, secret professionnel, conflits d’intérêts, contradictoire, intérêt exclusif du client, honoraires équitables, prohibition du pacte de quota litis et de la rémunération d’apport d’affaires, compte de tiers séparé, assurance raisonnable.',
          'Premier écart : la confidentialité des correspondances. En France elle est présumée ; dans le code européen elle ne l’est pas. L’expéditeur doit exprimer clairement sa volonté avant l’envoi de la première correspondance, et le destinataire qui ne peut y consentir doit en informer sans délai.',
          'Second écart : la limitation de responsabilité de l’avocat, admise si le droit de l’État membre l’autorise, alors que la jurisprudence française la refuse.',
          'Règle de conflit : en représentation devant une juridiction étrangère, priorité aux règles de l’État d’accueil ; hors juridiction, règles de l’État d’origine sans préjudice de celles de l’État d’accueil ; en établissement permanent, règles du pays d’accueil.'
        ]
      }
    ],
    cles: [
      'Le CCBE est une association internationale de droit belge, créée en 1960, regroupant les barreaux d’une quarantaine de pays dont les vingt‑sept de l’Union.',
      'Le code n’est obligatoire que si le barreau a formellement accepté d’être lié : c’est la condition à vérifier avant d’invoquer une règle contre un confrère étranger.',
      'Correspondance avec un avocat de l’Union : demander expressément la confidentialité avant le premier envoi (art. 5.3 du code européen, repris à l’art. 21 RIN).',
      'Correspondance avec un avocat hors Union : vérifier l’existence de règles déontologiques équivalentes ; à défaut, accord de confidentialité ou accord exprès du client acceptant le risque.',
      'Litige avec un confrère européen : tentative de règlement amiable obligatoire, puis information de son barreau et de celui du confrère avant toute procédure.',
      'La Charte de 2006 énonce dix principes essentiels ; elle s’adresse aussi aux décideurs et au public et vise à soutenir les barreaux qui luttent pour leur indépendance.',
      'Convention du Conseil de l’Europe sur la protection de la profession d’avocat, ouverte à la signature en 2025 : premier instrument international contraignant sur la liberté d’exercice.',
      'Arrêt Wouters de la CJUE : les règles déontologiques échappent au droit de la concurrence, ce qui fonde l’autorégulation à la française.'
    ],
    cartes: [
      { q: 'Qui a adopté le code de déontologie des avocats européens, et quand ?', r: 'Le Conseil des barreaux européens (CCBE) en 1988, avec des modifications successives.', src: 'Code de déontologie des avocats européens (CCBE)' },
      { q: 'Par quel texte le code européen s’impose‑t‑il aux avocats français ?', r: 'L’article 21 du RIN, qui l’intègre en droit interne pour les activités transfrontalières et les relations avec les confrères européens.', src: 'RIN art. 21' },
      { q: 'Quels sont les deux écarts principaux avec le droit français ?', r: 'La confidentialité des correspondances, non présumée en droit européen, et la limitation de responsabilité de l’avocat, admise si le droit national l’autorise.', src: 'Code européen ; RIN art. 21' },
      { q: 'Comment rendre confidentielle une correspondance avec un avocat de l’Union ?', r: 'En exprimant clairement cette volonté avant l’envoi de la première correspondance. Le destinataire qui ne peut y consentir doit en informer l’expéditeur sans délai.', src: 'RIN art. 21.5.3' },
      { q: 'Qu’est‑ce que le CCBE ?', r: 'Une association internationale de droit belge sans but lucratif, créée en 1960, qui représente les barreaux européens sur les questions communes à la profession, l’État de droit et la bonne administration de la justice.', src: 'Statuts du CCBE' },
      { q: 'Combien de principes la Charte de 2006 énonce‑t‑elle ?', r: 'Dix principes essentiels, base commune aux règles nationales et internationales, à vocation paneuropéenne.', src: 'Charte CCBE 2006' },
      { q: 'Que faire avant de correspondre avec un avocat hors Union européenne ?', r: 'S’assurer de l’existence de règles déontologiques assurant la confidentialité ; à défaut, conclure un accord de confidentialité ou obtenir l’accord exprès du client acceptant le risque.', src: 'RIN art. 3.4' },
      { q: 'Quelle est la règle en cas de litige avec un confrère européen ?', r: 'Tentative de règlement amiable obligatoire ; en cas d’échec, information de son propre barreau et de celui du confrère avant d’engager une procédure.', src: 'RIN art. 21' },
      { q: 'Quelle est la nature juridique du CCBE ?', r: 'Une association internationale de droit belge, créée en 1960, qui regroupe les barreaux d’une quarantaine de pays dont les États membres de l’UE.', src: 'CCBE' },
      { q: 'Quand le code européen lie‑t‑il un avocat français ?', r: 'Lorsque le barreau a formellement accepté d’être lié, et dans les situations transfrontières prévues ; le RIN art. 21 en assure le relais.', src: 'Code CCBE ; RIN art. 21' },
      { q: 'Que faire avant d’écrire à un avocat hors Union ?', r: 'Verifier l’existence de règles de confidentialité équivalentes ; à défaut, obtenir un accord de confidentialité préalable.', src: 'Code CCBE' }
    ],
    qcm: [
      { q: 'La confidentialité des correspondances entre avocats européens est :', o: ['présumée', 'non présumée', 'interdite'], b: 1, e: 'Elle doit être demandée expressément avant le premier envoi, contrairement au droit français où elle est de plein droit.' },
      { q: 'Le code européen s’applique :', o: ['à toute l’activité de l’avocat', 'aux seules activités transfrontalières', 'aux seules activités judiciaires'], b: 1, e: 'Relations entre avocats d’États différents et activité exercée dans un autre État membre.' },
      { q: 'La limitation de responsabilité de l’avocat est :', o: ['admise en France', 'refusée en France, admise par le code européen si le droit national l’autorise', 'interdite partout'], b: 1, e: 'La jurisprudence française la refuse, l’obligation d’information et de conseil étant d’ordre public.' },
      { q: 'Le CCBE est :', o: ['une institution de l’Union européenne', 'une association internationale de droit belge créée en 1960', 'un service du Conseil de l’Europe'], b: 1, e: 'Association internationale de droit belge, 1960, regroupant les barreaux d’une quarantaine de pays.' },
      { q: 'Avant d’invoquer une règle du code européen comme obligatoire, il faut vérifier :', o: ['la nationalité du client', 'que le barreau a formellement accepté d’être lié', 'l’inscription au tableau de Paris'], b: 1, e: 'Le code n’est obligatoire que si le barreau a accepté d’être lié.' },
      { q: 'En cas de litige avec un confrère européen, il faut d’abord :', o: ['assigner devant le TJ', 'tenter un règlement amiable, puis informer les barreaux concernés', 'saisir la CJUE'], b: 1, e: 'Tentative amiable obligatoire, puis information de son barreau et de celui du confrère.' },
      { q: 'L’arrêt Wouters de la CJUE reconnaît que :', o: ['les règles déontologiques sont soumises au droit de la concurrence comme n’importe quel accord', 'certaines règles déontologiques peuvent échapper au droit de la concurrence', 'le secret professionnel est une règle commerciale'], b: 1, e: 'Wouters fonde l’idée que des règles déontologiques nécessaires à la profession échappent au droit de la concurrence.' },
      { q: 'La Charte des principes essentiels de l’avocat européen date de :', o: ['1988', '2006', '2015'], b: 1, e: 'Charte CCBE de 2006 : dix principes, adressée aussi aux décideurs et au public.' }
    ],
    jury: [
      { q: 'Un confrère espagnol produit devant le juge un courriel que vous pensiez confidentiel. Recours ?', r: 'Vérifier d’abord si j’avais exprimé clairement la volonté de confidentialité avant l’envoi de la première correspondance, comme l’exige le code européen. Si je ne l’ai pas fait, aucune présomption ne joue et la production est régulière. Si je l’ai fait et que le confrère n’a pas décliné, je peux saisir mon bâtonnier, qui informera le barreau espagnol : le code impose la tentative de conciliation entre barreaux avant toute procédure.' },
      { q: 'Qu’est‑ce que la double déontologie ?', r: 'La situation de l’avocat soumis simultanément aux règles de son État d’origine et à celles de l’État où il agit. Le code européen la résout par des règles de priorité : État d’accueil pour la représentation en justice, État d’origine pour les missions extrajudiciaires sans préjudice des règles impératives d’accueil, État d’accueil en cas d’établissement permanent.' },
      { q: 'Le code européen crée‑t‑il des obligations pour un avocat exerçant exclusivement en France ?', r: 'Non en tant que tel : son champ est transfrontalier. Mais l’intégration à l’article 21 du RIN le rend obligatoire dès que l’avocat entre en relation avec un confrère européen ou exerce dans un autre État membre, même ponctuellement. Un simple courriel à un confrère italien suffit à déclencher son application.' },
      { q: 'Quelle place pour l’État de droit dans ce dispositif ?', r: 'Il en est la finalité. Le CCBE se donne pour mission le respect de l’État de droit et la bonne administration de la justice ; la Charte de 2006 s’adresse aussi aux décideurs et au public pour soutenir les barreaux qui luttent pour leur indépendance. La Convention du Conseil de l’Europe ouverte à la signature en 2025 poursuit la même logique, en donnant pour la première fois force contraignante à la protection de la profession.' },
      { q: 'La jurisprudence européenne a‑t‑elle validé l’autorégulation ?', r: 'Oui. Dans l’arrêt Wouters, la Cour de justice a jugé qu’un barreau n’est pas en lui‑même un facteur de restriction de concurrence et que les règles déontologiques échappent au droit de la concurrence, les ordres étant chargés d’une mission d’intérêt général. La Cour européenne des droits de l’homme, dans l’arrêt Nikula, reconnaît de son côté le statut spécial de l’avocat comme auxiliaire de justice, ce qui justifie que le barreau lui impose des normes de conduite.' },
      { q: 'Comment présenter le code européen sans le confondre avec le RIN ?', r: 'Le RIN et le code de déontologie de 2023 gouvernent l’exercice en France. Le code CCBE s’applique surtout aux situations transfrontières lorsque le barreau s’y est lié ; l’article 21 du RIN en organise l’articulation. La Charte de 2006 énonce dix principes à vocation pédagogique et politique. Wouters éclaire la compatibilité de l’autorégulation avec le droit de l’Union. L’oral doit hiérarchiser : loi et décret, RIN, puis instruments européens.' },
      { q: 'Quelle précaution pour la correspondance avec un avocat de l’Union ?', r: 'Demander expressément la confidentialité avant le premier envoi (art. 5.3 du code européen). Les régimes nationaux divergent : sans cette demande, la protection peut faire défaut. Hors Union, vérifier l’équivalence des règles ou conclure un accord. Cette prudence est un marqueur de maturité à l’oral.' }
    ],
    cas: {
      e: 'Vous négociez avec un avocat allemand un accord transactionnel. Vous lui écrivez « confidentiel » en tête de chaque courriel, sans autre précaution. La négociation échoue et il produit vos concessions devant le tribunal français. Que répondez‑vous ?',
      r: 'La mention « confidentiel » apposée unilatéralement en tête d’un courriel ne suffit pas. Le code européen, intégré à l’article 21 du RIN, exige que la volonté de confidentialité soit clairement exprimée avant l’envoi de la première de ces communications, ce qui suppose un échange préalable permettant au destinataire de décliner s’il ne peut y consentir. Faute d’avoir suivi ce protocole, aucune présomption de confidentialité ne joue, contrairement à ce qui vaudrait entre deux avocats français. La pratique correcte, en amont de toute négociation transfrontalière, est de conclure un accord exprès de confidentialité avec le confrère, et d’en informer son client des conséquences.'
    }
  }
];
