// Bloc 6 - La responsabilite civile professionnelle (3 sujets).
// Sources publiques : loi n° 71-1130 du 31 decembre 1971, decret n° 91-1197 du 27 novembre 1991,
// decret du 30 juin 2022 (reclamations deontologiques), RIN du CNB, code civil.

export const RESPONSABILITE = [
  {
    id: 'assurance-rcp',
    titre: 'L’assurance de responsabilité civile professionnelle',
    sources: ['L. 31 déc. 1971, art. 27', 'D. 27 nov. 1991, art. 205 s.', 'Arrêté relatif aux garanties'],
    principes: ['prudence', 'probité'],
    accroche: 'L’assurance de responsabilité civile professionnelle est, avec la garantie de représentation des fonds, l’une des deux assurances obligatoires de l’avocat. Elle n’est pas une simple précaution de gestion : son défaut emporte omission obligatoire du tableau, parce qu’un avocat non assuré est un risque pour ses clients.',
    plan: [
      {
        t: 'I. Une obligation d’assurance minimale',
        pts: [
          'Souscription collective par le barreau ou individuelle par l’avocat ; un règlement intérieur peut supprimer la faculté individuelle au profit de l’assurance groupe. En pratique, les primes sont le plus souvent comprises dans les cotisations ordinales.',
          'Montant minimal garanti de 1 500 000 euros par année et par avocat assuré. Au‑delà des enjeux couverts, l’avocat doit souscrire une assurance complémentaire dès l’ouverture du dossier.',
          'Franchise à la charge de l’avocat, plafonnée à 10 % des indemnités dues dans la limite de 3 050 euros. Elle n’est pas opposable aux victimes.',
          'Attestation à remettre chaque année au conseil de l’ordre. Le défaut de souscription ou de paiement entraîne l’omission obligatoire du tableau et a été sanctionné disciplinairement, notamment par une interdiction temporaire.'
        ]
      },
      {
        t: 'II. Le champ et la mise en œuvre de la garantie',
        pts: [
          'Personnes couvertes : l’avocat individuel, ou la structure pour ses membres. Le collaborateur libéral doit veiller à être couvert pour sa clientèle personnelle. À l’étranger, l’avocat européen exerçant à titre permanent est couvert, l’extension devant être sollicitée en libre prestation.',
          'Activités couvertes : les fautes commises dans l’exercice normal de la profession, y compris les missions de l’article 6 du RIN (délégué à la protection des données, lobbyiste, séquestre, expert, arbitre, médiateur, mandataire sportif ou d’artistes). Sont exclues les activités incompatibles.',
          'Extensions nécessaires pour certaines missions : fiduciaire, avec une assurance spéciale combinant responsabilité et restitution ; représentant fiscal ; membre d’un conseil de surveillance ; commercialisation accessoire ; administrateur.',
          'Mise en œuvre : le fait dommageable doit être postérieur à la souscription ; déclaration de sinistre dans les trente jours de la réclamation écrite, sauf force majeure. Exclusions : faute intentionnelle ou dolosive, reconnaissance de responsabilité par l’avocat, préjudice excédant le plafond.'
        ]
      }
    ],
    cles: [
      'Deux assurances obligatoires, à ne pas confondre : la responsabilité civile professionnelle couvre la faute, la garantie de représentation des fonds couvre l’insolvabilité. Aucune des deux ne couvre la restitution des honoraires.',
      'La déclaration de sinistre est due dans les trente jours de la réclamation écrite, qu’il s’agisse d’un simple courrier ou d’une assignation ; ne pas déclarer peut être une faute déontologique.',
      'L’avocat informe le bâtonnier lorsque sa responsabilité civile est mise en jeu.',
      'La reconnaissance de responsabilité n’est pas opposable à l’assureur et expose l’avocat à supporter seul les conséquences.',
      'Franchise : 10 % au plus des indemnités, dans la limite de 3 050 euros, inopposable aux victimes.',
      'Le code de déontologie des avocats européens n’impose pas d’assurance obligatoire, mais une couverture raisonnable au regard des risques.',
      'Assurance civile d’exploitation, facultative : elle couvre les dommages causés par les préposés et collaborateurs, distincte de la responsabilité professionnelle.',
      'Le syndic de copropriété n’est a priori pas couvert par la police de base : les missions accessoires supposent de vérifier l’étendue de la garantie.'
    ],
    cartes: [
      { q: 'Quel est le montant minimal de la garantie de responsabilité civile professionnelle ?', r: '1 500 000 euros par année et par avocat assuré. Au‑delà, une assurance complémentaire doit être souscrite dès l’ouverture du dossier.', src: 'D. 27 nov. 1991, art. 205' },
      { q: 'Quel est le plafond de la franchise ?', r: 'Dix pour cent des indemnités dues, dans la limite de 3 050 euros. Elle est à la charge de l’avocat et n’est pas opposable aux victimes.', src: 'D. 27 nov. 1991, art. 205' },
      { q: 'Dans quel délai déclarer un sinistre ?', r: 'Trente jours à compter de la réclamation écrite, sauf force majeure ou cas fortuit. Le défaut de déclaration peut constituer une faute déontologique.', src: 'D. 27 nov. 1991, art. 207' },
      { q: 'Quelle sanction en cas de défaut d’assurance ?', r: 'L’omission obligatoire du tableau, sans préjudice de poursuites disciplinaires ; une interdiction temporaire a déjà été prononcée à ce titre.', src: 'D. 27 nov. 1991' },
      { q: 'Quelles fautes l’assurance ne couvre‑t‑elle pas ?', r: 'Les fautes intentionnelles ou dolosives, c’est‑à‑dire la volonté délibérée de causer le dommage, ainsi que le préjudice excédant le plafond garanti. La reconnaissance de responsabilité par l’avocat n’est pas opposable à l’assureur.', src: 'C. assur. ; RIN' },
      { q: 'Le collaborateur libéral est‑il couvert par l’assurance du cabinet ?', r: 'Pour les actes accomplis pour le compte du cabinet, oui. Pour sa clientèle personnelle, il doit veiller à disposer d’une couverture propre.', src: 'D. 27 nov. 1991, art. 205 s. ; RIN art. 14' },
      { q: 'Quelle assurance supplémentaire pour l’avocat fiduciaire ?', r: 'Une assurance spéciale combinant la responsabilité civile professionnelle et la restitution des fonds, effets, titres et valeurs, avec attestation annuelle au conseil de l’ordre et au constituant.', src: 'RIN art. 6.5' },
      { q: 'Qu’est‑ce que l’assurance civile d’exploitation ?', r: 'Une assurance facultative, distincte de la responsabilité professionnelle, qui couvre les dommages causés du fait des préposés ou collaborateurs.', src: 'Pratique assurantielle' },
      { q: 'Le code de déontologie des avocats européens impose‑t‑il une assurance ?', r: 'Il n’impose pas d’assurance obligatoire à montant déterminé, mais exige que l’avocat s’assure dans une mesure raisonnable au regard des risques à couvrir.', src: 'Code CCBE' }
    ],
    qcm: [
      { q: 'Le plancher de garantie de la RCP est de :', o: ['500 000 €', '1 500 000 €', '3 000 000 €'], b: 1, e: 'Un million cinq cent mille euros par année et par avocat assuré.' },
      { q: 'La franchise est plafonnée à :', o: ['3 050 €', '10 000 €', 'aucun plafond'], b: 0, e: 'Dix pour cent des indemnités dans la limite de 3 050 euros, inopposable aux victimes.' },
      { q: 'Le défaut d’assurance entraîne :', o: ['une omission facultative', 'une omission obligatoire', 'une radiation de plein droit'], b: 1, e: 'C’est l’un des deux cas d’omission obligatoire, avec l’incompatibilité.' },
      { q: 'La déclaration de sinistre est due dans :', o: ['8 jours', '30 jours', '2 mois'], b: 1, e: 'Trente jours à compter de la réclamation écrite.' }
    ],
    jury: [
      { q: 'Pourquoi le défaut d’assurance emporte‑t‑il omission obligatoire ?', r: 'Parce que l’assurance n’est pas une protection de l’avocat mais du client. Un avocat non assuré ne peut garantir la réparation du préjudice qu’il causerait, ce qui contredit la confiance sur laquelle repose la profession. L’omission n’est donc pas une sanction mais une mesure de police du tableau : l’avocat ne remplit plus une condition d’exercice. La voie disciplinaire reste ouverte en parallèle.' },
      { q: 'Un dossier porte sur un enjeu de 5 millions d’euros. Que faites‑vous ?', r: 'Je souscris une assurance complémentaire dès l’ouverture du dossier, l’obligation étant expresse dès lors que les enjeux financiers excèdent le montant garanti. À défaut, je supporterais personnellement la fraction du préjudice excédant le plafond. La même logique vaut pour la garantie de représentation : je ne peux recevoir des fonds excédant le montant garanti sans souscrire une garantie complémentaire.' },
      { q: 'Votre client vous écrit qu’il vous tient pour responsable d’une prescription. Que faites‑vous ?', r: 'Trois réflexes. Déclarer le sinistre à mon assureur dans les trente jours de cette réclamation écrite, un simple courrier suffisant à faire courir le délai. Informer mon bâtonnier, la mise en jeu de ma responsabilité étant l’une des informations qui lui sont dues. Et surtout ne reconnaître aucune responsabilité : la reconnaissance n’est pas opposable à l’assureur et m’exposerait à en supporter seul les conséquences. Je dois par ailleurs conseiller mon client de recourir à un autre avocat, un conflit d’intérêts naissant entre lui et moi.' },
      { q: 'Quelle est la différence entre RCP et garantie de représentation des fonds ?', r: 'L’objet du risque. La responsabilité civile professionnelle couvre les fautes et négligences commises dans l’exercice normal de la profession : c’est le risque de faute. La garantie de représentation, dite de non‑représentation des fonds, couvre le remboursement des fonds, effets ou valeurs reçus : c’est le risque d’insolvabilité, indépendant de toute faute. Une précision utile : ni l’une ni l’autre ne couvre la restitution des honoraires.' },
      { q: 'Les missions accessoires sont‑elles couvertes ?', r: 'Les missions de l’article 6 du RIN le sont en principe : délégué à la protection des données, lobbyiste, séquestre, expert, arbitre, médiateur, mandataire sportif ou d’artistes. Mais certaines exigent une extension expresse (fiduciaire, représentant fiscal, membre d’un conseil de surveillance, commercialisation accessoire, administrateur) et le syndic de copropriété n’est a priori pas couvert par la police de base. L’avocat qui veut exercer ces missions doit justifier avoir souscrit les garanties nécessaires.' }
    ],
    cas: {
      e: 'Un avocat oublie d’interjeter appel dans le délai. Il propose immédiatement à son client de lui régler 40 000 euros sur ses fonds propres pour éviter un contentieux, puis déclare le sinistre deux mois plus tard. Quelles conséquences ?',
      r: 'Deux erreurs qui se cumulent. La reconnaissance de responsabilité, d’abord : elle n’est pas opposable à l’assureur et expose l’avocat à supporter seul les conséquences du sinistre, y compris la totalité de l’indemnisation. La bonne pratique est de ne rien reconnaître et de laisser l’assureur apprécier. La déclaration tardive, ensuite : elle est due dans les trente jours de la réclamation écrite, et le retard peut être opposé par l’assureur s’il lui cause un préjudice, tout en constituant une faute déontologique. À cela s’ajoutent trois points. L’avocat aurait dû informer son bâtonnier de la mise en jeu de sa responsabilité. Un conflit d’intérêts est né entre lui et son client, qu’il doit inviter à consulter un autre confrère. Enfin, sur le fond, le manquement à un délai d’appel relève d’une obligation de résultat, la mission n’étant pas soumise à l’aléa judiciaire ; mais le préjudice réparable ne sera qu’une perte de chance, appréciée au regard des chances de succès de l’appel, et non le montant de la condamnation.'
    }
  },

  {
    id: 'reclamations',
    titre: 'Les réclamations',
    sources: ['C. civ. art. 1231‑1 et 1240', 'D. 27 nov. 1991', 'D. 30 juin 2022', 'RIN'],
    principes: ['compétence', 'diligence', 'prudence', 'loyauté'],
    accroche: 'Le mot recouvre deux réalités qu’il faut distinguer à l’oral : la réclamation déontologique, adressée au bâtonnier et qui ouvre la voie disciplinaire, et la réclamation indemnitaire, qui met en jeu la responsabilité civile de l’avocat devant le juge de droit commun. Les deux peuvent se cumuler, et n’obéissent pas aux mêmes règles.',
    plan: [
      {
        t: 'I. La réclamation déontologique : l’autorégulation en action',
        pts: [
          'Adressée au bâtonnier par tout moyen conférant date certaine, avec identité et signature de son auteur, identité de l’avocat mis en cause, faits reprochés et pièces utiles. Accusé de réception sans délai.',
          'Instruction : le bâtonnier peut ne pas donner suite s’il estime la réclamation abusive ou infondée, en informant le réclamant ; il peut organiser une conciliation dans les trois mois ; il peut diligenter une enquête déontologique confiée à un ou plusieurs délégués.',
          'Issues : classement sans suite insusceptible de recours, avis déontologique non contraignant, admonestation, saisine de la juridiction disciplinaire, ou demande d’avis à la commission des règles et usages du CNB.',
          'Garanties : les constatations recueillies en conciliation ne peuvent être invoquées dans aucune autre procédure ; le défaut de réponse de l’avocat est en lui‑même une faute ; le réclamant informé d’un classement peut saisir le procureur général ou directement la juridiction disciplinaire.'
        ]
      },
      {
        t: 'II. La réclamation indemnitaire : la responsabilité civile de l’avocat',
        pts: [
          'Nature duale : contractuelle envers le client (mandat pour la représentation, contrat de prestation de services pour l’assistance et le conseil) et délictuelle envers les tiers et la partie adverse.',
          'Obligations en cause : conseil et information, de portée générale et absolue, que les compétences du client n’atténuent pas ; compétence ; prudence ; diligence. Obligation de moyens par principe en raison de l’aléa judiciaire, de résultat pour les actes de procédure et pour la validité et l’efficacité de l’acte rédigé.',
          'Trois conditions : inexécution, dommage personnel, direct et certain (la perte de chance étant réparable si elle est caractérisée), et lien de causalité apprécié in concreto.',
          'Prescription de cinq ans : en matière judiciaire à compter de la fin de mission, c’est‑à‑dire de l’expiration du délai de recours ; en matière juridique à compter du jour où le titulaire du droit a connu ou aurait dû connaître les faits. Compétence du tribunal judiciaire, avec possibilité de renvoi vers un ressort limitrophe.'
        ]
      }
    ],
    cles: [
      'La réclamation déontologique n’est ni exclusive ni subsidiaire des autres actions : le civil, le pénal et le disciplinaire peuvent se cumuler.',
      'Le bâtonnier est incompétent pour allouer une réparation : la réclamation déontologique ne peut porter sur des droits et obligations de nature civile.',
      'Le réclamant n’est pas partie à la procédure disciplinaire : il est informé, peut être entendu, mais ne peut faire appel.',
      'L’obligation de conseil est de portée générale et absolue : ni les compétences juridiques du client, ni la présence d’autres professionnels, ni une clause de l’acte n’en dispensent.',
      'L’avocat n’est pas tenu d’attirer l’attention de son client sur les conséquences d’une fausse déclaration : le client est tenu d’un devoir de loyauté et de sincérité.',
      'Charge de la preuve : au demandeur pour le dommage, la faute et le lien de causalité ; mais c’est à l’avocat de prouver qu’il a exécuté son obligation de conseil.',
      'La fraude du client exonère totalement l’avocat ; sa faute peut justifier un partage de responsabilité.',
      'Aucune clause limitative de responsabilité n’est admise en droit français, l’obligation d’information et de conseil étant d’ordre public : contrairement à ce que permet le code de déontologie des avocats européens si le droit national l’autorise.'
    ],
    cartes: [
      { q: 'À qui la réclamation déontologique doit‑elle être adressée ?', r: 'Obligatoirement au bâtonnier de l’avocat mis en cause, par tout moyen conférant date certaine à sa réception.', src: 'D. 27 nov. 1991' },
      { q: 'Le bâtonnier peut‑il allouer des dommages‑intérêts ?', r: 'Non. Il est incompétent pour statuer sur des droits et obligations de nature civile ; la réparation relève du juge de droit commun.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle est la nature de la responsabilité civile de l’avocat ?', r: 'Duale : contractuelle envers son client, délictuelle envers les tiers et la partie adverse. Elle peut se cumuler avec les responsabilités disciplinaire et pénale.', src: 'C. civ. art. 1231‑1 et 1240' },
      { q: 'L’obligation de l’avocat est‑elle de moyens ou de résultat ?', r: 'De moyens par principe, en raison de l’aléa judiciaire. De résultat pour l’accomplissement des actes de procédure et pour la validité et l’efficacité de l’acte rédigé, y compris les formalités subséquentes.', src: 'Jurisprudence' },
      { q: 'Qui doit prouver l’exécution de l’obligation de conseil ?', r: 'L’avocat. C’est une exception au régime probatoire de droit commun, qui met la charge de la preuve sur le demandeur pour la faute, le dommage et le lien de causalité.', src: 'Jurisprudence' },
      { q: 'Quel est le délai de prescription de l’action en responsabilité ?', r: 'Cinq ans : en matière judiciaire à compter de la fin de mission, soit l’expiration du délai de recours ; en matière juridique à compter du jour où le demandeur a connu ou aurait dû connaître les faits.', src: 'C. civ. art. 2224' },
      { q: 'Peut‑on limiter contractuellement sa responsabilité ?', r: 'Non en droit français : le devoir d’information et de conseil est d’ordre public et ne peut être ni limité ni exclu. Le code européen l’admet si le droit national l’autorise, ce qui n’est pas le cas en France.', src: 'C. civ. art. 1112‑1 ; jurisprudence' },
      { q: 'Quel préjudice est indemnisé en cas d’erreur de procédure ?', r: 'La perte de chance, définie comme la disparition actuelle et certaine d’une éventualité favorable, réparée à proportion de la chance perdue, et non le montant de la condamnation évitée.', src: 'Jurisprudence' },
      { q: 'La fraude du client exonère‑t‑elle l’avocat ?', r: 'Totalement. La faute du client, sans fraude, peut en revanche justifier un simple partage de responsabilité.', src: 'Jurisprudence' },
      { q: 'Que devient une réclamation classée sans suite ?', r: 'Le classement est insusceptible de recours, mais le réclamant en est informé et peut saisir le procureur général ou directement la juridiction disciplinaire, en joignant à peine d’irrecevabilité sa réclamation préalable.', src: 'D. 30 juin 2022' }
    ],
    qcm: [
      { q: 'La réclamation déontologique est adressée :', o: ['au conseil de l’ordre', 'au bâtonnier', 'à la juridiction disciplinaire'], b: 1, e: 'Au bâtonnier, autorité de poursuite et « tour de contrôle » de la procédure.' },
      { q: 'L’obligation de conseil de l’avocat :', o: ['cesse si le client est juriste', 'est de portée générale et absolue', 'peut être écartée par une clause'], b: 1, e: 'Ni les compétences du client, ni la présence d’autres professionnels, ni une clause n’en dispensent.' },
      { q: 'La prescription de l’action en responsabilité est de :', o: ['2 ans', '5 ans', '10 ans'], b: 1, e: 'Cinq ans, le point de départ variant selon que la mission est judiciaire ou juridique.' },
      { q: 'En cas d’erreur de procédure, le préjudice réparé est :', o: ['le montant de la condamnation', 'la perte de chance', 'le montant des honoraires'], b: 1, e: 'La perte de chance, réparée à proportion de la chance perdue.' }
    ],
    jury: [
      { q: 'Distinguez la réclamation déontologique de l’action en responsabilité.', r: 'Trois différences. L’objet : la première vise un manquement aux règles professionnelles, la seconde la réparation d’un préjudice. L’autorité : le bâtonnier puis la juridiction disciplinaire dans un cas, le tribunal judiciaire dans l’autre. Les effets : la sanction disciplinaire ne procure aucune indemnisation, le bâtonnier étant incompétent pour statuer sur des droits civils. Les deux voies ne sont ni exclusives ni subsidiaires : elles peuvent être exercées parallèlement, comme l’action pénale.' },
      { q: 'Pourquoi l’obligation de conseil est‑elle absolue ?', r: 'Parce qu’elle est la contrepartie du monopole et de la confiance. La jurisprudence en tire trois conséquences : les compétences juridiques du client ne l’atténuent pas, la présence d’autres professionnels du droit non plus, et une clause de l’acte ne suffit pas à s’en décharger. Elle est en outre d’ordre public, ce qui interdit toute clause limitative de responsabilité. La seule limite tient au devoir de loyauté du client : l’avocat n’a pas à l’avertir des conséquences d’une fausse déclaration qu’il aurait lui‑même faite.' },
      { q: 'Comment expliquez‑vous que le préjudice ne soit qu’une perte de chance ?', r: 'Parce que la mission de justice est marquée par l’aléa. Si l’avocat manque un délai d’appel, il est impossible d’affirmer que l’appel aurait prospéré : ce qui est certain, c’est la disparition d’une éventualité favorable. Le juge évalue donc la probabilité de succès et indemnise une fraction proportionnée. Le raisonnement vaut aussi pour le défaut de conseil. Il en va autrement lorsque le préjudice est certain, par exemple si l’acte rédigé est nul et que le but poursuivi ne peut plus être atteint.' },
      { q: 'Plusieurs avocats sont intervenus. Comment se partage la responsabilité ?', r: 'Ils sont coresponsables et tenus in solidum envers le client, chacun disposant d’une action récursoire. La ventilation tient compte du rôle : le dominus litis, maître du litige, supporte une part plus importante ; le postulant doit vérifier auprès de lui les instructions et les pièces, et à défaut auprès du client. L’avocat successeur doit vérifier auprès du client les informations fournies par son prédécesseur : c’est une obligation de prudence. En corédaction d’acte, chacun est tenu de son propre devoir de conseil.' },
      { q: 'Le réclamant est‑il suffisamment protégé par la procédure ordinale ?', r: 'Sa place s’est renforcée depuis 2021 : information sur les suites données, saisine directe de la juridiction disciplinaire, droit d’être entendu, et échevinage de droit lorsque la poursuite émane d’un tiers. Il reste que le réclamant n’est pas partie, ne peut faire appel et n’obtient aucune indemnisation, ce qui peut nourrir un sentiment d’opacité. La réponse est structurelle : la sanction disciplinaire protège la profession et le public, l’indemnisation relève du juge civil, et rien n’interdit d’exercer les deux voies.' }
    ],
    cas: {
      e: 'Un client dirigeant de société, titulaire d’un master en droit des affaires, vous reproche de ne pas l’avoir averti du risque fiscal d’une opération que vous avez rédigée. Il a subi un redressement de 80 000 euros. Vous invoquez ses compétences et une clause de l’acte l’invitant à consulter son expert‑comptable. Que vous répond le juge ?',
      r: 'Il écartera les deux moyens. L’obligation de conseil est de portée générale et absolue : ni les compétences juridiques du client, fût‑il titulaire d’un master, ni la présence à ses côtés d’autres professionnels du droit ou du chiffre ne dispensent l’avocat de la remplir. Une clause de l’acte ne suffit pas davantage à s’en décharger, et toute clause limitative de responsabilité serait de toute façon écartée, le devoir d’information et de conseil étant d’ordre public. Sur la charge de la preuve, l’avocat est en position défavorable : c’est à lui de prouver qu’il a exécuté son obligation de conseil, ce qui suppose un écrit, note, courriel, mention circonstanciée dans l’acte. Deux tempéraments toutefois. Le préjudice réparable ne sera pas nécessairement les 80 000 euros : si le client, dûment averti, aurait probablement maintenu l’opération, la réparation se limitera à une perte de chance. Et si le redressement procède d’une déclaration inexacte du client, sa fraude exonérerait totalement l’avocat, sa simple faute justifiant un partage. Enfin, l’action se prescrit par cinq ans à compter du jour où le client a connu ou aurait dû connaître les faits, la mission étant juridique et non judiciaire.'
    }
  },

  {
    id: 'mesures-preventives',
    titre: 'Les mesures préventives',
    sources: ['D. 27 nov. 1991', 'RIN', 'C. mon. fin.', 'L. 31 déc. 1971'],
    principes: ['prudence', 'indépendance', 'probité'],
    accroche: 'Avant la sanction, il y a la prévention. La profession s’est dotée d’un ensemble de mécanismes destinés à éviter le manquement plutôt qu’à le réprimer : obligations déclaratives, contrôles ordinaux, règles d’exercice, procédures de conciliation. Ils poursuivent trois objectifs : préserver les principes essentiels, protéger le client, maintenir la confiance du public.',
    plan: [
      {
        t: 'I. Les mesures préventives ordinales',
        pts: [
          'Obligations déclaratives : action en dommages‑intérêts, exercice de certains mandats, publicité communiquée sans délai, activités accessoires, déclaration annuelle de formation continue, ouverture et fermeture de bureaux secondaires, état du capital et des droits de vote dans le mois de toute modification.',
          'Contrôles : comptabilité, y compris le cas échéant les comptes personnels, avec information du procureur ; maniement de fonds par la CARPA ; lutte contre le blanchiment et gel des avoirs, le bâtonnier alertant Tracfin et le procureur général ; SPFPL au moins tous les quatre ans ; contrats de collaboration dans les quinze jours de leur conclusion.',
          'Procédures à la main du bâtonnier et du conseil de l’ordre : police du tableau et omission, réclamation déontologique avec conciliation, avis déontologique et admonestation, suspension provisoire, arbitrage des litiges entre avocats.',
          'Visa du bâtonnier : obligation d’information préalable pour tout acte dirigé contre un avocat, un magistrat, un membre du gouvernement ou un auxiliaire de justice, et pour certaines procédures solennelles. Ce n’est pas une autorisation : l’avocat n’a pas à attendre l’approbation pour délivrer l’acte.'
        ]
      },
      {
        t: 'II. Les mesures préventives liées à l’exercice',
        pts: [
          'Incompatibilités et limitations d’activité, qui préviennent en amont l’atteinte à l’indépendance et au désintéressement.',
          'Encadrement du maniement des fonds : mandat spécial, accessoire d’un acte, dépôt CARPA, contrôle de la cause à chaque retrait, garantie de représentation.',
          'Prévention des conflits d’intérêts : identification du client et du bénéficiaire effectif, logiciels de vérification, ethical wall, avis du bâtonnier ou de la commission dédiée du barreau.',
          'Encadrement de la communication, formation continue au service du devoir de compétence, information sur la rémunération et convention d’honoraires écrite, règles de succession d’avocats interdisant tout droit de rétention.'
        ]
      }
    ],
    cles: [
      'Le visa est une obligation d’information et de communication préalable, jamais une autorisation : le bâtonnier peut recommander une modération d’expression, l’avocat peut passer outre sauf manquement aux principes essentiels.',
      'La liste des mesures préventives à citer à l’oral : formation, respect du champ d’activité et des incompatibilités, CARPA et maniement de fonds, assurances et garanties avec leurs plafonds, conflits d’intérêts, confidentialité et secret, honoraires.',
      'Le contrôle de la comptabilité est systématique et régulier ; le conseil de l’ordre n’a pas à motiver le choix de l’avocat contrôlé.',
      'Le contrôle des contrats de collaboration s’exerce dans les quinze jours de leur conclusion, avec pouvoir d’injonction dans le mois ; une clause interdite ne fonde pas la nullité du contrat mais expose à des poursuites.',
      'La conciliation préalable devant le bâtonnier est confidentielle : les constatations recueillies ne peuvent être produites dans aucune autre procédure.',
      'La suspension provisoire est une mesure conservatoire et non une sanction : elle suppose l’urgence ou la protection du public et l’engagement de poursuites.',
      'L’avis déontologique du bâtonnier n’est pas contraignant et n’est pas susceptible de recours ; le refus de suivre une admonestation ne peut fonder une faute.',
      'L’obligation de déclarer une action en dommages‑intérêts au bâtonnier participe de la prévention : elle permet à l’Ordre d’anticiper les difficultés et d’orienter l’avocat.'
    ],
    cartes: [
      { q: 'Qu’est‑ce que le visa du bâtonnier ?', r: 'Une obligation d’information et de communication préalable pour certains actes (dirigés contre un avocat, un magistrat, un membre du gouvernement, un auxiliaire de justice) et certaines procédures solennelles. Ce n’est pas une autorisation.', src: 'RIN ; règlements intérieurs' },
      { q: 'À quelle fréquence les SPFPL sont‑elles contrôlées ?', r: 'Au moins tous les quatre ans. Le contrôle relève du conseil de l’ordre, au titre de sa mission générale de surveillance.', src: 'D. 27 nov. 1991' },
      { q: 'Dans quel délai le contrat de collaboration est‑il contrôlé ?', r: 'Il est transmis au conseil de l’ordre dans les quinze jours de sa conclusion ; l’Ordre dispose d’un pouvoir d’injonction dans le mois pour demander sa mise en conformité.', src: 'RIN art. 14' },
      { q: 'Une clause interdite entraîne‑t‑elle la nullité du contrat de collaboration ?', r: 'Non. La déontologie n’a pas d’incidence sur le plan civil : la clause est réputée non écrite ou inopposable, mais le contrat subsiste. Le manquement expose en revanche à des poursuites disciplinaires.', src: 'RIN ; jurisprudence' },
      { q: 'Les déclarations faites en conciliation peuvent‑elles être produites ensuite ?', r: 'Non. Les constatations et déclarations recueillies pendant la conciliation ne peuvent être ni invoquées ni produites dans aucune autre procédure, ni même dans la suite de la procédure disciplinaire.', src: 'D. 27 nov. 1991' },
      { q: 'Citez les principales obligations déclaratives de l’avocat.', r: 'Action en dommages‑intérêts, exercice de certains mandats et activités accessoires, publicité, formation continue, ouverture et fermeture des bureaux secondaires, état du capital et des droits de vote, déclaration de soupçon.', src: 'RIN ; D. 1991' },
      { q: 'L’avis déontologique du bâtonnier lie‑t‑il l’avocat ?', r: 'Non. Il n’est pas contraignant et n’est pas susceptible de recours. La juridiction disciplinaire conserve son entière liberté d’appréciation.', src: 'RIN ; jurisprudence ordinale' },
      { q: 'Le contrôle de comptabilité doit‑il être motivé quant au choix de l’avocat ?', r: 'Non. Il est systématique et régulier, et le conseil de l’ordre n’a pas à justifier son choix. Il doit en revanche résulter d’une délibération, dont un extrait est communiqué.', src: 'Jurisprudence' }
    ],
    qcm: [
      { q: 'Le visa du bâtonnier est :', o: ['une autorisation préalable', 'une obligation d’information préalable', 'une décision susceptible de recours'], b: 1, e: 'L’avocat n’a pas à attendre l’approbation pour délivrer l’acte ; le bâtonnier peut seulement recommander une modération.' },
      { q: 'Les SPFPL sont contrôlées :', o: ['chaque année', 'au moins tous les quatre ans', 'sur signalement uniquement'], b: 1, e: 'Contrôle périodique d’au moins tous les quatre ans.' },
      { q: 'Une clause interdite dans un contrat de collaboration :', o: ['annule le contrat', 'n’entraîne pas la nullité mais expose à des poursuites', 'est sans conséquence'], b: 1, e: 'La déontologie n’a pas d’incidence sur la validité civile du contrat.' },
      { q: 'La suspension provisoire est :', o: ['une sanction disciplinaire', 'une mesure conservatoire', 'une mesure administrative de police du tableau'], b: 1, e: 'Mesure de sûreté conservatoire, prononcée par le conseil de l’ordre en cas d’urgence ou de protection du public.' }
    ],
    jury: [
      { q: 'Quelles mesures préventives citez‑vous en priorité ?', r: 'Sept, dans cet ordre : la formation, initiale et continue, qui prévient l’incompétence ; le respect du champ d’activité et des incompatibilités, qui protège l’indépendance ; la CARPA et l’encadrement du maniement des fonds, qui préviennent le détournement ; les assurances et garanties, avec leurs plafonds, qui garantissent la réparation ; la prévention des conflits d’intérêts ; la confidentialité et le secret professionnel ; et l’encadrement de l’honoraire, par l’information et la convention écrite.' },
      { q: 'Pourquoi le visa n’est‑il pas une autorisation ?', r: 'Parce qu’il serait alors une atteinte à l’indépendance de l’avocat et aux droits de la défense. Le visa est une procédure consultative : il permet au bâtonnier d’exercer sa mission de modération et de conciliation, en recommandant le cas échéant une modération d’expression. L’avocat est en droit d’écarter cette recommandation, sous la seule réserve de ne pas manquer aux principes essentiels, et il n’a pas à attendre l’approbation pour délivrer l’acte.' },
      { q: 'Le contrôle ordinal ne heurte‑t‑il pas le secret professionnel ?', r: 'Le secret n’est pas opposable aux autorités ordinales, la Cour de cassation jugeant de manière constante que les échanges avec le bâtonnier et le conseil de l’ordre n’en sont pas couverts. Le fondement est fonctionnel : les membres du conseil de l’ordre sont eux‑mêmes avocats, tenus au secret, et le contrôle est la condition de l’autorégulation. Le refus de s’y soumettre constitue un manquement à l’honneur et à la probité.' },
      { q: 'La prévention est‑elle plus efficace que la sanction ?', r: 'Elle est complémentaire. La sanction intervient après le dommage, souvent sans le réparer, puisque le juge disciplinaire ne peut indemniser. La prévention agit en amont : identification du client avant toute intervention, conflict check, dépôt CARPA avec contrôle de la cause, convention d’honoraires écrite, plan de vigilance anti‑blanchiment. Elle est en outre la condition de la crédibilité de l’autorégulation, en démontrant que la profession ne se contente pas de juger ses membres après coup.' },
      { q: 'Quel rôle joue le bâtonnier dans ce dispositif ?', r: 'Il en est le pivot, ce que traduit l’expression de tour de contrôle. Il reçoit les déclarations, exerce les contrôles, filtre les déclarations de soupçon, concilie, rend des avis, adresse des admonestations, demande la suspension provisoire, arbitre les différends entre confrères, vise les actes sensibles, et intervient à l’audience pour apaiser un incident. C’est la contrepartie de l’autorégulation : une autorité de proximité, permanente et accessible, qui prévient plutôt qu’elle ne réprime.' }
    ],
    cas: {
      e: 'Un avocat souhaite assigner en responsabilité un confrère du même barreau, à la demande de son client. Il souhaite aussi porter plainte contre le juge d’instruction du dossier pour partialité. Quelles précautions préalables ?',
      r: 'Deux séries d’obligations, toutes préventives. Contre le confrère : l’avocat doit l’avertir préalablement et lui communiquer l’assignation, recueillir ses observations, et avertir le bâtonnier. Si son client était antérieurement défendu par ce confrère, l’interdiction de défendre un client contre son prédécesseur s’applique et suppose l’accord préalable du bâtonnier : à défaut, la faute est disciplinaire, sans que la procédure soit irrecevable. Il doit en outre s’abstenir de toute critique du confrère devant le client. Contre le magistrat : tout acte judiciaire dirigé contre un membre du corps judiciaire doit être soumis au visa du bâtonnier selon le règlement intérieur, à Paris notamment. Ce visa n’est pas une autorisation : le bâtonnier peut émettre un avis, proposer une conciliation ou recommander une modération d’expression, mais l’avocat peut passer outre, sauf manquement aux principes essentiels. Il doit enfin mesurer le terrain sur lequel il s’engage : la modération et la délicatesse s’imposent, une mise en cause sans base factuelle solide, procédant d’une animosité personnelle, exposant à une sanction que la Cour européenne juge alors proportionnée.'
    }
  }
];
