// Bloc 3 - Exercice professionnel, seconde partie (6 sujets sur 12).
// Sources publiques : loi n° 71-1130 du 31 decembre 1971, decret n° 91-1197 du 27 novembre 1991,
// decret du 30 juin 2022, decret du 29 janvier 2025, RIN du CNB, livre VI du code de commerce.

export const EXERCICE_B = [
  {
    id: 'specialisation',
    titre: 'La spécialisation',
    sources: ['D. 27 nov. 1991, art. 86 s.', 'Arrêté du 28 déc. 2011 fixant la liste des mentions', 'Décisions à caractère normatif du CNB'],
    principes: ['compétence'],
    accroche: 'Environ six pour cent des avocats sont spécialistes. La mention de spécialisation n’est pas un argument commercial libre : c’est un titre délivré par le CNB après validation des compétences devant un jury, qui atteste d’une pratique dominante de quatre ans. Tout avocat est d’abord généraliste avant d’être spécialiste.',
    plan: [
      {
        t: 'I. L’obtention du certificat',
        pts: [
          'Vingt‑huit mentions, liste refondue en 2011 puis modifiée, fixée par arrêté du garde des Sceaux sur proposition du CNB. Deux mentions au maximum par avocat. La spécialisation en procédure d’appel, hors liste, est réservée aux anciens avoués.',
          'Première condition, la pratique : quatre ans au moins de pratique professionnelle dominante — mais non exclusive — dans le domaine revendiqué, en France ou à l’étranger, rémunérée et non suspendue plus de quatre mois, huit dans les cas exceptionnels comme la parentalité.',
          'Qualités admises : avocat, y compris salarié, membre d’une autre profession juridique réglementée, juriste d’entreprise ou d’administration, professeur ou maître de conférences, membre du Conseil d’État ou magistrat.',
          'Seconde condition, l’entretien de validation des compétences devant un jury de quatre membres — deux avocats spécialistes, un universitaire, un magistrat — organisé par un centre régional. Le CNB délivre le certificat ; son silence pendant neuf mois vaut rejet, l’appel étant porté dans le mois devant la cour d’appel de Paris.'
        ]
      },
      {
        t: 'II. Les effets et la perte de la mention',
        pts: [
          'Inscription sur la liste nationale des avocats spécialistes, intégrée à l’annuaire national, et mention portée au tableau. L’usage du titre n’est possible qu’après cette inscription.',
          'Communication : la mention et le logo officiel peuvent figurer sur tous supports ; le titre est réservé aux personnes physiques, non aux structures. À distinguer des domaines d’activité dominante, au nombre de trois au plus, qui ne supposent aucun certificat.',
          'Qualification spécifique : précision d’un champ juridique d’intervention privilégié au sein de la mention. Trois conditions — rattachement à la spécialisation, nécessité pour l’information du public, contenu juridique. Elle figure au certificat et relève de la publicité personnelle, non du tableau.',
          'Obligation renforcée de formation continue : dix heures par an et par mention, sans lissage. Mise en demeure du bâtonnier de régulariser dans les trois mois, puis retrait par décision du conseil de l’ordre ; l’avocat retrouve l’usage du titre s’il justifie dans les deux ans avoir satisfait à son obligation. Retrait définitif possible à sa demande.'
        ]
      }
    ],
    cles: [
      'Vingt‑huit mentions, deux au maximum par avocat, quatre ans de pratique dominante.',
      'Le jury de validation compte quatre membres : deux avocats spécialistes de la mention, un universitaire du domaine, un magistrat.',
      'La rémunération et la continuité comptent : l’activité doit avoir été rémunérée et ne pas avoir été suspendue plus de quatre mois, ou huit dans les cas exceptionnels.',
      'Silence du CNB pendant neuf mois : rejet. Recours dans le mois devant la cour d’appel de Paris, qui n’exerce qu’un contrôle de légalité.',
      'La spécialisation influe sur l’honoraire : le RIN retient la notoriété, les titres, l’expérience et la spécialisation parmi les critères de fixation.',
      'Le collaborateur doit disposer du temps de se spécialiser, et le cabinet doit lui confier autant que possible des dossiers dans la matière recherchée.',
      'Le titre de spécialiste est réservé aux avocats personnes physiques : une structure ne peut s’en prévaloir.',
      'La spécialisation en procédure d’appel ne figure pas sur la liste : elle bénéficie de plein droit aux anciens avoués devenus avocats en 2011 et à leurs collaborateurs.'
    ],
    cartes: [
      { q: 'Combien de mentions de spécialisation existent, et combien un avocat peut‑il en détenir ?', r: 'Vingt‑huit mentions fixées par arrêté du garde des Sceaux sur proposition du CNB ; un avocat peut en détenir une ou deux.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle durée de pratique est exigée ?', r: 'Quatre ans au moins de pratique professionnelle dominante, mais non exclusive, dans le domaine revendiqué, en France ou à l’étranger.', src: 'D. 27 nov. 1991, art. 86' },
      { q: 'De qui se compose le jury de validation des compétences ?', r: 'Deux avocats spécialistes de la mention revendiquée, un universitaire du domaine et un magistrat. L’entretien est organisé par un centre régional de formation.', src: 'D. 27 nov. 1991' },
      { q: 'Qui délivre le certificat de spécialisation ?', r: 'Le CNB, plus précisément son président, après information par le centre régional. Les admis sont inscrits sur une liste nationale.', src: 'D. 27 nov. 1991' },
      { q: 'Que vaut le silence du CNB pendant neuf mois ?', r: 'Un rejet de la demande. Le recours est porté dans le mois devant la cour d’appel de Paris, qui n’exerce qu’un contrôle de légalité de la procédure.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle obligation de formation pèse sur le spécialiste ?', r: 'Consacrer la moitié de son temps de formation à sa spécialisation, soit dix heures par an et par mention, sans lissage possible sur deux ans.', src: 'D. 27 nov. 1991, art. 85 et 86 s.' },
      { q: 'Comment le spécialiste défaillant perd‑il sa mention ?', r: 'Après mise en demeure du bâtonnier de régulariser dans les trois mois, par décision du conseil de l’ordre. Il retrouve l’usage du titre s’il justifie dans les deux ans avoir satisfait à son obligation.', src: 'D. 27 nov. 1991, art. 86 s.' },
      { q: 'Qu’est‑ce qu’une qualification spécifique ?', r: 'La précision d’un champ juridique d’intervention privilégié au sein d’une mention. Elle doit être rattachée à la spécialisation, nécessaire à l’information du public et de contenu juridique. Elle figure au certificat, non au tableau.', src: 'D. 27 nov. 1991 ; RIN' },
      { q: 'Une structure peut‑elle faire état d’une spécialisation ?', r: 'Non. Le titre est réservé aux avocats personnes physiques titulaires du certificat.', src: 'RIN art. 10' }
    ],
    qcm: [
      { q: 'Un avocat peut détenir au maximum :', o: ['une mention', 'deux mentions', 'trois mentions'], b: 1, e: 'Deux au maximum, chacune impliquant dix heures de formation annuelle dédiée.' },
      { q: 'La durée de pratique exigée est de :', o: ['2 ans', '4 ans', '8 ans'], b: 1, e: 'Quatre ans de pratique dominante. Huit ans, c’est la passerelle du juriste d’entreprise.' },
      { q: 'Le certificat est délivré par :', o: ['le conseil de l’ordre', 'le CNB', 'le centre régional de formation'], b: 1, e: 'Le CNB, le centre régional organisant seulement l’entretien devant le jury.' },
      { q: 'Domaine d’activité dominante et mention de spécialisation :', o: ['sont synonymes', 'diffèrent : la mention suppose un certificat, le domaine non', 'sont tous deux plafonnés à deux'], b: 1, e: 'Trois domaines dominants au plus, sans certificat ; deux mentions au plus, avec certificat.' }
    ],
    jury: [
      { q: 'La spécialisation est‑elle un aveu d’incompétence dans les autres matières ?', r: 'Non, et l’adage professionnel le rappelle : tout avocat est généraliste avant d’être spécialiste. La mention atteste d’une pratique dominante, non exclusive, et n’interdit nullement d’intervenir ailleurs. Elle répond à la technicité croissante du droit et constitue une information du public, ce qui explique qu’elle relève à la fois du tableau et de la publicité personnelle.' },
      { q: 'Pourquoi la formation du spécialiste ne peut‑elle être lissée ?', r: 'Parce que le lissage permettrait de ne rien faire une année et de rattraper la suivante, ce qui vide de sens l’exigence d’entretien d’une compétence dominante. L’obligation de dix heures par an et par mention est donc annuelle et ferme, contrairement à l’obligation générale de vingt heures qui peut se répartir sur deux années consécutives.' },
      { q: 'Que se passe‑t‑il si un spécialiste continue d’afficher sa mention après retrait ?', r: 'Il s’agit d’une publicité trompeuse et d’une mention faisant état d’une qualification professionnelle non reconnue, expressément prohibée par l’article 10.2 du RIN. Le manquement est disciplinaire et peut, selon les circonstances, relever de la pratique commerciale trompeuse. L’usage du titre n’est licite qu’après inscription sur la liste nationale.' },
      { q: 'La spécialisation influence‑t‑elle les honoraires ?', r: 'Oui, indirectement. L’article 11 du RIN retient parmi les critères de fixation la notoriété de l’avocat, ses titres, son expérience et la spécialisation dont il est titulaire. Le juge de l’honoraire, saisi d’une contestation, en tient compte dans son appréciation in concreto, au même titre que le temps consacré, la difficulté de l’affaire et la situation de fortune du client.' },
      { q: 'Un juriste d’entreprise peut‑il faire valoir son expérience pour obtenir une spécialisation ?', r: 'Oui. La pratique qualifiante n’est pas réservée aux avocats : elle peut avoir été acquise comme juriste en entreprise, en cabinet, dans un syndicat, une administration ou une organisation internationale, comme membre d’une autre profession juridique réglementée, comme universitaire ou comme magistrat. La condition tient à la nature de la pratique, non au statut sous lequel elle a été exercée.' }
    ],
    cas: {
      e: 'Une avocate obtient la mention « droit du travail » et souhaite y adjoindre la qualification « négociation collective ». Elle indique par ailleurs sur son site trois domaines dominants et fait figurer la mention au nom de sa SELARL. Qu’en pensez‑vous ?',
      r: 'Trois points. La qualification spécifique est possible : rattachée au champ de la spécialisation, elle sert l’information du public et son contenu est juridique. Elle doit être demandée dans le dossier de candidature, analysée par la commission de la formation professionnelle et contrôlée par le jury lors de l’entretien ; elle figure au certificat et relève de la publicité personnelle, non du tableau, où seule la mention apparaît. Les trois domaines dominants sont admis, dans la limite de trois, à condition qu’ils ne créent pas l’apparence d’une qualification non reconnue : ils ne doivent pas être présentés comme des spécialisations. En revanche, faire figurer la mention au nom de la structure est irrégulier : le titre est réservé aux avocats personnes physiques titulaires du certificat. La SELARL ne peut s’en prévaloir, seul le nom de l’avocate peut être accompagné de la mention et du logo officiel.'
    }
  },

  {
    id: 'differends-avocats',
    titre: 'Le règlement des différends entre avocats',
    sources: ['L. 31 déc. 1971, art. 21', 'D. 27 nov. 1991, art. 142 s.', 'RIN'],
    principes: ['confraternité', 'loyauté'],
    accroche: 'La profession règle elle‑même ses différends internes. Le bâtonnier y joue un rôle singulier : conciliateur d’abord, puis juge de premier degré sous le nom impropre d’arbitrage. Cette compétence, dérogatoire au droit commun et notamment à celle du conseil de prud’hommes, est le prolongement direct de l’autorégulation.',
    plan: [
      {
        t: 'I. Les litiges nés du contrat de collaboration ou de travail',
        pts: [
          'Conciliation préalable obligatoire, confidentielle, devant le bâtonnier ou son délégué, qui convoque les parties à bref délai. La clause de conciliation et d’arbitrage est obligatoire dans les contrats, et s’applique même si elle n’a pas été insérée. Son inobservation ne constitue toutefois pas une fin de non‑recevoir.',
          'À défaut de conciliation, arbitrage obligatoire : le bâtonnier statue comme juridiction de premier degré. Il peut statuer d’office sur la qualification du contrat, mais seul le juge du fond requalifie une collaboration libérale en contrat de travail.',
          'Saisine par requête déposée contre récépissé ou par LRAR, précisant à peine d’irrecevabilité l’objet du litige, l’identité des parties et les prétentions. Bâtonnier compétent : celui du barreau du collaborateur.',
          'Procédure contradictoire, débats publics sauf décision contraire, assistance possible. Décision dans les quatre mois, renouvelables une fois ; à défaut, dessaisissement au profit du premier président de la cour d’appel. Appel dans le mois, suspensif.'
        ]
      },
      {
        t: 'II. Les différends nés de l’exercice professionnel',
        pts: [
          'Tout différend entre avocats né à l’occasion de leur exercice professionnel est soumis, à défaut de conciliation, à l’arbitrage du bâtonnier : litiges entre associés, cession de clientèle, suppléance. La compétence est obligatoire mais non exclusive, une clause compromissoire pouvant y déroger.',
          'Exclusions : les litiges avec un tiers à la profession, les contestations d’honoraires soumises à la procédure de fixation, et les conflits déontologiques, qui relèvent de la sphère disciplinaire — le bâtonnier n’y rend qu’un avis, insusceptible de recours.',
          'Avocats de barreaux différents : le bâtonnier saisi transmet au bâtonnier du défendeur ; les deux disposent de quinze jours pour désigner un bâtonnier tiers, à défaut le président du CNB le désigne, comme automatiquement en cas de pluralité de défendeurs.',
          'Exécution : la décision devenue définitive est rendue exécutoire par le président du tribunal judiciaire. Sont exécutoires de droit à titre provisoire les condamnations au paiement de rémunérations dans la limite de neuf mois de rétrocessions ou de salaires, calculés sur la moyenne des trois derniers mois.'
        ]
      }
    ],
    cles: [
      'Le mot arbitrage est trompeur : il s’agit d’une véritable procédure juridictionnelle de premier degré, à charge d’appel devant la cour d’appel.',
      'La Cour de cassation a jugé en 2023 que le défaut de conciliation préalable n’est pas une fin de non‑recevoir, revirement par rapport à la jurisprudence antérieure.',
      'Compétence géographique : le bâtonnier du barreau où est inscrit le collaborateur, et non celui de l’employeur.',
      'Le bâtonnier peut déléguer ses pouvoirs à un ancien bâtonnier ou à un membre, actuel ou ancien, du conseil de l’ordre.',
      'Il est interdit de produire des pièces couvertes par le secret professionnel dans ces procédures, y compris en cas de licenciement.',
      'Urgence : le bâtonnier peut ordonner toute mesure qui ne se heurte à aucune contestation sérieuse, ou justifiée par un dommage imminent ou un trouble manifestement illicite, et accorder une provision. Décision dans le mois, à peine de dessaisissement.',
      'Il peut désigner un expert pour évaluer les parts sociales d’une société d’avocats.',
      'Litige avec un avocat européen : tentative de règlement amiable imposée par le code européen, puis information des deux barreaux. Avec un avocat hors Union : conciliation par les bâtonniers, puis droit commun ou droit international privé.'
    ],
    cartes: [
      { q: 'Quel bâtonnier est compétent pour un litige de collaboration ?', r: 'Celui du barreau auprès duquel le collaborateur, libéral ou salarié, est inscrit — et non celui de l’employeur.', src: 'D. 27 nov. 1991' },
      { q: 'La conciliation préalable est‑elle une condition de recevabilité ?', r: 'Non. Elle est obligatoire, mais son inobservation ne constitue pas une fin de non‑recevoir, la Cour de cassation ayant opéré un revirement en 2023.', src: 'Civ. 1re, 2023' },
      { q: 'Dans quel délai le bâtonnier doit‑il statuer ?', r: 'Quatre mois à compter de la saisine, renouvelables une fois par décision motivée. À défaut il est dessaisi au profit du premier président de la cour d’appel.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle est la limite de l’exécution provisoire de droit ?', r: 'Neuf mois de rétrocessions d’honoraires ou de salaires, calculés sur la moyenne des trois derniers mois. La formule exécutoire du président du tribunal judiciaire reste nécessaire pour une exécution forcée.', src: 'D. 27 nov. 1991' },
      { q: 'Le bâtonnier peut‑il requalifier une collaboration libérale en contrat de travail ?', r: 'Il peut statuer d’office sur la qualification du contrat dans le cadre de sa compétence juridictionnelle, mais la requalification définitive relève du juge du fond.', src: 'Jurisprudence' },
      { q: 'Qui désigne le bâtonnier tiers en cas de barreaux différents ?', r: 'Les deux bâtonniers, dans les quinze jours. À défaut d’accord, le président du CNB, saisi par le bâtonnier du demandeur ; la désignation est automatique en cas de pluralité de défendeurs.', src: 'D. 27 nov. 1991' },
      { q: 'Les conflits déontologiques relèvent‑ils de l’arbitrage du bâtonnier ?', r: 'Non. Ils appartiennent à la sphère disciplinaire : le bâtonnier rend un avis, insusceptible de recours devant la cour d’appel, et peut, comme autorité de poursuite, saisir la juridiction disciplinaire.', src: 'RIN ; jurisprudence' },
      { q: 'L’appel de la décision du bâtonnier est‑il suspensif ?', r: 'Oui, l’appel comme le délai d’appel suspendent l’exécution, sous réserve des condamnations exécutoires de droit à titre provisoire.', src: 'D. 27 nov. 1991' }
    ],
    qcm: [
      { q: 'Le bâtonnier statue sur un litige de collaboration dans un délai de :', o: ['2 mois', '4 mois renouvelables une fois', '6 mois'], b: 1, e: 'Quatre mois, renouvelables une fois ; à défaut, dessaisissement au profit du premier président.' },
      { q: 'L’exécution provisoire de droit est limitée à :', o: ['3 mois de rétrocessions', '9 mois de rétrocessions', 'aucun plafond'], b: 1, e: 'Neuf mois, calculés sur la moyenne des trois derniers mois.' },
      { q: 'Le défaut de conciliation préalable :', o: ['rend la saisine irrecevable', 'n’est pas une fin de non‑recevoir', 'entraîne la nullité de la procédure'], b: 1, e: 'Revirement de la Cour de cassation en 2023.' },
      { q: 'Un conflit sur l’interprétation d’une règle déontologique entre deux confrères relève :', o: ['de l’arbitrage du bâtonnier', 'de la sphère disciplinaire, le bâtonnier rendant un avis', 'du tribunal judiciaire'], b: 1, e: 'L’avis n’est pas un arbitrage et n’est pas susceptible de recours ; le bâtonnier peut ensuite poursuivre.' }
    ],
    jury: [
      { q: 'Pourquoi parle‑t‑on d’arbitrage alors que ce n’en est pas un ?', r: 'C’est une survivance de vocabulaire. L’arbitrage suppose une juridiction privée choisie par les parties et une sentence ; ici, la compétence du bâtonnier est légale et obligatoire, la procédure est contradictoire et publique, et la décision est susceptible d’appel devant la cour d’appel. C’est donc une juridiction de premier degré, ce que confirme le caractère suspensif de l’appel. Le Conseil d’État a d’ailleurs relevé que le bâtonnier n’est ni une juridiction ni une autorité juridictionnelle au sens du droit public.' },
      { q: 'Une clause compromissoire peut‑elle écarter la compétence du bâtonnier ?', r: 'Cela dépend de la matière. Pour les différends nés de l’exercice professionnel, la compétence est obligatoire mais non exclusive : une clause compromissoire insérée dans les statuts peut y déroger. Pour la fixation et le recouvrement des honoraires, la procédure est d’ordre public et aucune dérogation n’est possible. Une clause compromissoire reste envisageable pour ce qui excède la compétence du bâtonnier, comme la mise en cause de la responsabilité de l’avocat.' },
      { q: 'Un collaborateur licencié veut produire des courriels internes pour prouver le harcèlement. Le peut‑il ?', r: 'Pas s’ils sont couverts par le secret professionnel : le collaborateur y reste tenu même en litige avec son cabinet, et il lui est interdit de produire de telles pièces. Il peut en revanche obtenir tout document ou acte professionnel qu’il a lui‑même élaboré, dans la limite du secret. La preuve du harcèlement se construit donc sur des éléments non couverts, et le régime probatoire des discriminations lui est favorable : il présente des éléments laissant supposer, à charge pour le cabinet de justifier par des raisons objectives.' },
      { q: 'Que peut faire le bâtonnier en urgence ?', r: 'Il dispose de pouvoirs proches de ceux du juge des référés : ordonner toute mesure qui ne se heurte à aucune contestation sérieuse, prendre des mesures conservatoires ou de remise en état pour prévenir un dommage imminent ou faire cesser un trouble manifestement illicite, et accorder une provision lorsque l’obligation n’est pas sérieusement contestable. Il statue dans le mois, à peine de dessaisissement au profit du premier président.' },
      { q: 'Cette compétence dérogatoire au conseil de prud’hommes est‑elle justifiée ?', r: 'Elle se justifie par la nature du lien : le litige oppose deux avocats soumis au même serment, le contrat est contrôlé par le conseil de l’ordre, et le secret professionnel interdit de produire devant une juridiction de droit commun une partie des pièces. Le bâtonnier connaît les usages de la profession et les barèmes de rétrocession. Le garde‑fou est procédural : contradictoire, publicité des débats, motivation, appel devant la cour d’appel composée de magistrats.' }
    ],
    cas: {
      e: 'Une collaboratrice libérale, inscrite au barreau de Nantes, collabore avec un cabinet inscrit au barreau de Rennes. Le contrat est rompu pendant sa grossesse. Elle veut agir. Devant qui, et sur quels fondements ?',
      r: 'Compétence : le bâtonnier du barreau où elle est inscrite, celui de Nantes, et non celui du cabinet. Les deux bâtonniers devront s’entendre dans les quinze jours pour désigner un bâtonnier tiers ; à défaut, le président du CNB y pourvoit. Phase préalable : conciliation, obligatoire et confidentielle, dont l’absence ne rendrait pas la saisine irrecevable. Au fond : la rupture est en principe impossible pendant la période de protection, qui court de l’annonce de la grossesse jusqu’à l’expiration de la suspension et des huit semaines suivant le retour, sauf manquement grave et flagrant aux règles professionnelles, non lié à l’état de santé, et d’une gravité telle qu’il ne permettait pas d’attendre. La protection s’applique même pendant la période d’essai. La rupture peut en outre caractériser une discrimination, avec un régime probatoire favorable. Procédure : saisine par requête précisant à peine d’irrecevabilité l’objet, l’identité des parties et les prétentions, décision dans les quatre mois renouvelables une fois, exécution provisoire de droit dans la limite de neuf mois de rétrocessions, appel dans le mois devant la cour d’appel, suspensif.'
    }
  },

  {
    id: 'infractions-disciplinaires',
    titre: 'Les infractions disciplinaires',
    sources: ['L. 31 déc. 1971, art. 22 s.', 'D. 27 nov. 1991, art. 183', 'RIN'],
    principes: ['probité', 'honneur', 'délicatesse'],
    accroche: 'Le droit disciplinaire des avocats ne connaît pas de nomenclature des fautes. Toute contravention aux lois et règlements, toute infraction aux règles professionnelles, tout manquement à la probité, à l’honneur ou à la délicatesse, même extraprofessionnel, expose à une sanction. Cette indétermination est délibérée : elle est le prix de l’appréciation in concreto.',
    plan: [
      {
        t: 'I. La qualification de la faute',
        pts: [
          'Définition ouverte du décret de 1991 : contravention aux lois et règlements, infraction aux règles professionnelles, manquement à la probité, à l’honneur ou à la délicatesse, même se rapportant à des faits extraprofessionnels. Le RIN ajoute que la violation d’un seul des devoirs suffit.',
          'Absence de nomenclature : le nombre de fautes est potentiellement illimité. La jurisprudence censure tout règlement intérieur établissant des fautes entraînant objectivement une sanction sans appréciation du comportement.',
          'Appréciation in concreto, par référence au comportement attendu d’un bon professionnel. L’élément intentionnel n’est pas requis : une négligence suffit si elle est suffisamment grave. Causes exonératoires : troubles psychiques, altération du discernement.',
          'Champ large : activité professionnelle, activités annexes autorisées, et vie privée par un critère fonctionnel — réputation et crédibilité de l’avocat. Les faits antérieurs à la prestation de serment peuvent être poursuivis s’ils ont perduré ou ont été dissimulés lors de l’inscription.'
        ]
      },
      {
        t: 'II. L’autonomie de la faute disciplinaire',
        pts: [
          'Indépendance à l’égard du pénal : la règle selon laquelle le criminel tient le civil en l’état ne s’applique pas ; la relaxe n’empêche pas la sanction ; les deux poursuites peuvent se cumuler pour les mêmes faits, avec des sanctions de nature différente.',
          'Indépendance à l’égard du civil : l’absence de faute civile n’exclut pas la faute déontologique, et l’inverse est vrai. Une faute déontologique peut servir de référence pour qualifier une faute civile, mais l’automaticité a été abandonnée : un lien de causalité avec le préjudice doit être établi.',
          'Absence d’effet sur les actes : la faute déontologique n’affecte ni la validité des actes accomplis, ni les règles de procédure, ni la recevabilité des actions. Les principes essentiels ne sont pas opposables aux tiers, sauf stipulation contractuelle.',
          'Imprescriptibilité de l’action disciplinaire, jugée conforme à la Constitution, sous réserve de tenir compte du temps écoulé dans la détermination de la sanction. L’amnistie ne joue pas pour les manquements à l’honneur et à la probité.'
        ]
      }
    ],
    cles: [
      'Le préjudice n’est pas une condition de l’action disciplinaire ; il influe sur le quantum.',
      'Les structures d’exercice peuvent être poursuivies, à condition que des poursuites soient également engagées contre tous leurs associés ; en pratique, aucune ne l’a jamais été.',
      'Délit d’audience : l’avocat bénéficie d’une immunité de parole, mais peut être sanctionné pour des propos injurieux, outrageants ou diffamatoires étrangers à la cause. La juridiction saisit le procureur général, qui transmet ou non ; saisie, la juridiction disciplinaire statue dans les quinze jours.',
      'Outrage à magistrat : un an d’emprisonnement et 15 000 euros d’amende, portés à deux ans et 30 000 euros à l’audience d’une juridiction.',
      'Champ d’application personnel : avocats inscrits au tableau et avocats honoraires. Les élèves‑avocats en sont exclus ; les salariés non‑avocats ne relèvent de la discipline qu’en matière LCB‑FT.',
      'Juridiction compétente : celle du barreau d’appartenance au moment de l’ouverture de la procédure. Les fautes commises dans un autre barreau sont signalées au bâtonnier d’inscription.',
      'L’avocat omis échappe à la procédure disciplinaire pour les faits postérieurs à son omission, mais demeure justiciable des fautes antérieures.',
      'Exemples de fautes retenues : maniement de fonds hors CARPA, faux certificat médical pour obtenir un renvoi, rétention de pièces pour obtenir paiement, rupture d’une collaboration au retour de congé maternité, propos injurieux envers le bâtonnier.'
    ],
    cartes: [
      { q: 'Comment le décret de 1991 définit‑il la faute disciplinaire ?', r: 'Toute contravention aux lois et règlements, toute infraction aux règles professionnelles, tout manquement à la probité, à l’honneur ou à la délicatesse, même se rapportant à des faits extraprofessionnels.', src: 'D. 27 nov. 1991, art. 183' },
      { q: 'L’action disciplinaire est‑elle prescriptible ?', r: 'Non, elle est imprescriptible. Le Conseil constitutionnel juge cette imprescriptibilité conforme, sous réserve que le temps écoulé soit pris en compte dans la détermination de la sanction.', src: 'Jurisprudence constitutionnelle' },
      { q: 'La relaxe pénale fait‑elle obstacle à la sanction disciplinaire ?', r: 'Non. Les deux ordres sont autonomes ; la relaxe n’exclut pas que les faits caractérisent un manquement déontologique.', src: 'Jurisprudence' },
      { q: 'La faute déontologique affecte‑t‑elle la validité des actes ?', r: 'Non, ni la validité des actes accomplis, ni les règles de procédure, ni la mise en œuvre d’actions civiles.', src: 'Jurisprudence' },
      { q: 'Une négligence suffit‑elle à caractériser la faute ?', r: 'Oui, si elle est suffisamment grave. L’élément intentionnel n’est pas requis ; seules des causes exonératoires comme les troubles psychiques peuvent être retenues.', src: 'Jurisprudence disciplinaire' },
      { q: 'Que se passe‑t‑il en cas de délit d’audience ?', r: 'La juridiction saisit le procureur général, qui décide de transmettre ou non à la juridiction disciplinaire. Saisie, celle‑ci statue dans les quinze jours. Une procédure correctionnelle pour outrage à magistrat peut s’ajouter.', src: 'L. 1971 ; CPP' },
      { q: 'Une structure d’exercice peut‑elle être poursuivie disciplinairement ?', r: 'Oui, devant la juridiction du ressort de son siège, mais à la condition que des poursuites soient également engagées contre tous ses associés. En pratique aucune ne l’a jamais été.', src: 'D. 27 nov. 1991' },
      { q: 'Les élèves‑avocats relèvent‑ils de la discipline des avocats ?', r: 'Non. Le champ couvre les avocats inscrits au tableau et les avocats honoraires ; les salariés non‑avocats n’en relèvent qu’en matière de lutte contre le blanchiment.', src: 'D. 27 nov. 1991' }
    ],
    qcm: [
      { q: 'L’action disciplinaire se prescrit par :', o: ['3 ans', '10 ans', 'elle est imprescriptible'], b: 2, e: 'Imprescriptible, mais le temps écoulé pèse sur le quantum de la sanction.' },
      { q: 'Un préjudice est‑il nécessaire pour engager l’action disciplinaire ?', o: ['oui', 'non', 'seulement pour la radiation'], b: 1, e: 'Il n’est pas une condition ; il n’influe que sur le quantum.' },
      { q: 'Une même faute peut donner lieu :', o: ['à une seule sanction disciplinaire', 'à deux sanctions disciplinaires', 'à une sanction disciplinaire et une sanction pénale'], b: 2, e: 'Le cumul disciplinaire et pénal est admis, les intérêts protégés étant distincts ; deux sanctions disciplinaires pour les mêmes faits sont en revanche exclues.' },
      { q: 'L’amnistie couvre :', o: ['tous les manquements', 'sauf ceux à l’honneur et à la probité', 'aucun manquement disciplinaire'], b: 1, e: 'Les lois d’amnistie excluent expressément les manquements à l’honneur, à la probité et aux bonnes mœurs.' }
    ],
    jury: [
      { q: 'L’absence de nomenclature des fautes n’est‑elle pas contraire à la légalité des délits et des peines ?', r: 'Le principe de légalité s’applique avec moins de rigueur en matière disciplinaire qu’en matière pénale, ce qu’admettent tant le Conseil constitutionnel que la Cour européenne. Les manquements sont définis par référence aux principes essentiels et au serment, ce qui donne un cadre suffisant. La contrepartie est l’appréciation in concreto : la jurisprudence censure tout règlement intérieur qui établirait des fautes entraînant objectivement une sanction sans examen du comportement.' },
      { q: 'Comment justifiez‑vous le cumul des sanctions pénale et disciplinaire ?', r: 'Par la différence de nature et de finalité. La sanction pénale protège l’intérêt général de la société ; la sanction disciplinaire protège les clients, la profession et la confiance du public. Les règles applicables diffèrent, les autorités aussi. Le principe non bis in idem ne s’y oppose donc pas. La seule limite, posée par le Conseil constitutionnel, est que le montant global des sanctions ne peut excéder le maximum légal de la plus sévère.' },
      { q: 'La faute déontologique fonde‑t‑elle automatiquement une faute civile ?', r: 'Non, et il y a eu revirement. La jurisprudence considérait autrefois que le non‑respect d’une réglementation obligatoire constituait per se un acte de concurrence déloyale. Elle exige désormais un lien de causalité établi entre le manquement déontologique et le préjudice invoqué. La faute déontologique reste utilisable comme référence pour apprécier le comportement d’un bon professionnel, mais elle ne dispense pas de démontrer la causalité.' },
      { q: 'La vie privée de l’avocat est‑elle vraiment justiciable de la discipline ?', r: 'Oui, mais sous un critère fonctionnel : ce qui est atteint est la réputation de l’avocat et sa crédibilité en justice, donc l’honneur de la profession. Ont été sanctionnés le vol en supermarché, les violences conjugales, la consommation de stupéfiants, la conduite sous l’emprise de l’alcool. À l’inverse, la participation à une manifestation pacifique ne saurait être sanctionnée : la Cour européenne a condamné la France dans l’affaire Ezelin, l’avocat n’ayant lui‑même commis aucun acte répréhensible.' },
      { q: 'Que change l’imprescriptibilité en pratique ?', r: 'Elle permet de poursuivre des faits anciens, ce qui est cohérent avec un droit disciplinaire tourné vers la protection du public plus que vers la répression. Mais elle n’est pas sans limite : le Conseil constitutionnel impose de tenir compte du temps écoulé dans la détermination de la sanction, et les exigences du procès équitable — délai raisonnable, dépérissement des preuves — jouent un rôle correcteur.' }
    ],
    cas: {
      e: 'Un avocat encaisse sur son compte personnel un chèque de 40 000 euros destiné à son client, puis le lui reverse deux mois plus tard, sans que le client ne s’en plaigne. Aucun préjudice n’est établi. Y a‑t‑il faute disciplinaire ?',
      r: 'Oui, et elle est grave. Le maniement de fonds doit donner lieu à un dépôt sans délai à la CARPA, l’avocat n’ayant aucun accès direct aux fonds. Encaisser sur son compte personnel constitue un manquement à la probité, à l’honneur et à la prudence, et caractérise en outre un abus de confiance au préjudice de la CARPA, puni de cinq ans d’emprisonnement et 375 000 euros d’amende. Trois précisions. L’absence de préjudice est indifférente : elle n’est pas une condition de l’action disciplinaire et ne joue que sur le quantum. L’absence de plainte du client l’est également, le bâtonnier pouvant se saisir d’office ou être saisi par le procureur général. Enfin, ce type de manquement figure parmi ceux qui donnent lieu aux sanctions les plus sévères, radiation souvent précédée d’une suspension provisoire, et l’amnistie ne pourrait en effacer le caractère fautif.'
    }
  },

  {
    id: 'procedure-disciplinaire',
    titre: 'La procédure disciplinaire',
    sources: ['D. 27 nov. 1991, art. 180 à 199', 'D. 30 juin 2022', 'D. 29 janv. 2025', 'L. 22 déc. 2021'],
    principes: ['honneur', 'probité'],
    accroche: 'Trois réformes ont façonné la procédure actuelle : 2004 a séparé la poursuite du jugement en créant les conseils de discipline, 2021 a donné une place au réclamant et ouvert la saisine directe, 2025 a créé une procédure simplifiée pour les manquements de moindre gravité. L’enjeu est constant : concilier autorégulation et procès équitable.',
    plan: [
      {
        t: 'I. En amont : réclamation, enquête, procédure simplifiée',
        pts: [
          'Réclamation adressée au bâtonnier par tout moyen conférant date certaine, mentionnant l’identité et la signature de son auteur, celle de l’avocat mis en cause et les faits reprochés. Accusé de réception sans délai. Le bâtonnier peut classer, en informant le réclamant qui pourra saisir le procureur général ou directement la juridiction disciplinaire.',
          'Conciliation facultative dans les trois mois, convocation dix jours avant, procès‑verbal ; les constatations recueillies ne peuvent être invoquées ensuite. Le délégué conciliateur ne pourra siéger à la juridiction disciplinaire.',
          'Enquête déontologique, hors procédure disciplinaire : initiative du bâtonnier, du procureur général ou d’un plaignant, désignation d’un ou plusieurs délégués, rapport. L’avocat est informé de son droit de se taire depuis 2025. Si le bâtonnier est mis en cause, l’enquête est déclenchée par le bâtonnier ou le membre du conseil de l’ordre le plus ancien.',
          'Procédure disciplinaire simplifiée : proposition d’avertissement ou de blâme, plus sanctions complémentaires, hors réclamation d’un tiers et hors antécédent d’interdiction temporaire dans les cinq ans. L’avocat dispose de quinze jours ; le silence vaut refus. Acceptation : homologation par la juridiction disciplinaire, recours ou opposition du procureur général dans les quinze jours.'
        ]
      },
      {
        t: 'II. La procédure ordinaire et les peines',
        pts: [
          'Saisine de la juridiction disciplinaire par le bâtonnier, le procureur général ou l’auteur de la réclamation, qui doit joindre à peine d’irrecevabilité la réclamation préalable. Filtrage par le président, qui peut rejeter par ordonnance motivée ; appel du réclamant dans les quinze jours.',
          'Instruction : désignation d’un rapporteur dans le mois de la saisine par le conseil de l’ordre, rapport dans les quatre mois de sa désignation, prorogeables de quatre mois. Convocation un mois avant l’audience, à peine de nullité, mentionnant les faits reprochés, les textes visés et la faculté de demander la présidence par un magistrat.',
          'Jugement : audience publique sauf demande contraire, formation d’au moins cinq membres délibérant en nombre impair, échevinage de droit lorsque la poursuite émane d’un tiers et à la demande de l’avocat. Faute d’avoir statué dans les douze mois de la désignation du rapporteur, la demande est réputée rejetée. Appel dans le mois, suspensif, devant une formation de trois magistrats du siège et de deux membres des conseils de l’ordre du ressort ; le délai de recours incident est de quinze jours à compter de la notification du recours principal.',
          'Peines principales : avertissement, blâme, interdiction temporaire de trois ans au plus, radiation ou retrait de l’honorariat. Peines complémentaires : publicité, interdiction de conclure un nouveau contrat de collaboration ou d’encadrer pendant trois ans, cinq en cas de récidive, formation complémentaire en déontologie de vingt heures sur deux ans, inéligibilité aux institutions professionnelles pendant dix ans au plus.'
        ]
      }
    ],
    cles: [
      'Une juridiction disciplinaire par ressort de cour d’appel, sauf à Paris où le conseil de l’ordre siège comme conseil de discipline.',
      'Le réclamant n’est pas partie à la procédure : il est informé, peut être entendu, mais ne peut faire appel. La juridiction ne statue sur aucune demande de dommages‑intérêts.',
      'Suspension provisoire : mesure conservatoire, non disciplinaire, prononcée par le conseil de l’ordre en cas d’urgence ou de protection du public, sur demande du bâtonnier, du procureur général, du juge d’instruction ou du JLD. Six mois renouvelables une fois depuis la loi du 22 décembre 2021, qui a porté ce délai de quatre à six mois, la limite pouvant être dépassée lorsque l’action publique a été engagée sur les faits qui la justifient. Audition ou convocation huit jours avant. Exécutoire nonobstant appel.',
      'Récidive dans les cinq ans : la nouvelle sanction entraîne l’exécution de la première peine, sans confusion.',
      'Le délai de recours incident est de quinze jours à compter de la notification du recours principal : ne pas le confondre avec le délai d’appel d’un mois.',
      'Le sursis est possible pour l’interdiction temporaire, mais ne s’applique pas aux peines complémentaires.',
      'Interdiction temporaire : l’avocat reste inscrit au tableau et conserve sa qualité, mais ne peut accomplir aucun acte, porter la robe ni faire état de sa qualité. Révocation immédiate du mandat CARPA. Il est remplacé par un administrateur provisoire.',
      'Radiation : exclusion définitive de tous les barreaux, sous réserve de réhabilitation et de réinscription.',
      'Ajournement du prononcé de la sanction : la juridiction peut enjoindre de cesser le comportement fautif dans un délai de quatre mois au plus.'
    ],
    cartes: [
      { q: 'Quelles sont les quatre peines disciplinaires principales ?', r: 'Avertissement, blâme, interdiction temporaire d’exercice de trois ans au plus, radiation du tableau ou retrait de l’honorariat.', src: 'L. 31 déc. 1971, art. 24' },
      { q: 'Dans quel délai la juridiction disciplinaire doit‑elle statuer ?', r: 'Douze mois à compter de la désignation du rapporteur. À défaut d’avoir statué au fond ou rendu une décision avant dire droit, la demande est réputée rejetée et le bâtonnier ou le procureur général peut saisir la cour d’appel.', src: 'D. 27 nov. 1991, art. 195' },
      { q: 'Quand l’échevinage est‑il de droit ?', r: 'Lorsque la poursuite fait suite à la réclamation d’un tiers, et à la demande de l’avocat poursuivi. Le magistrat du siège est désigné par le premier président de la cour d’appel.', src: 'D. 30 juin 2022' },
      { q: 'Quelles sanctions la procédure simplifiée permet‑elle ?', r: 'L’avertissement ou le blâme, à titre principal, et à titre complémentaire la publicité, l’interdiction de conclure un nouveau contrat de collaboration pendant trois ans — cinq en cas de récidive — et une formation complémentaire en déontologie de vingt heures au plus sur deux ans.', src: 'D. 29 janv. 2025' },
      { q: 'Quel délai l’avocat a‑t‑il pour accepter une proposition de sanction simplifiée ?', r: 'Quinze jours à compter de la réception. Le silence vaut refus. En cas d’acceptation, le bâtonnier saisit la juridiction disciplinaire aux fins d’homologation dans les quinze jours.', src: 'D. 29 janv. 2025' },
      { q: 'Quelle est la durée maximale de la suspension provisoire ?', r: 'Six mois, renouvelable une fois depuis la loi du 22 décembre 2021 — elle était de quatre mois auparavant. La limite peut être dépassée lorsque l’action publique a été engagée sur les faits qui la justifient. Elle cesse de plein droit à l’extinction des actions pénale et disciplinaire.', src: 'L. 31 déc. 1971, art. 24' },
      { q: 'Le réclamant peut‑il faire appel de la décision disciplinaire ?', r: 'Non. Seuls l’avocat poursuivi, le bâtonnier et le procureur général le peuvent, dans le mois. L’appel et le délai d’appel sont suspensifs ; le recours incident se forme dans les quinze jours de la notification du recours principal.', src: 'D. 27 nov. 1991, art. 197' },
      { q: 'Comment est composée la formation de jugement de la cour d’appel en matière disciplinaire ?', r: 'Trois magistrats du siège de cette cour et deux membres des conseils de l’ordre du ressort, nommés pour un an.', src: 'D. 27 nov. 1991, art. 16' },
      { q: 'L’avocat interdit temporairement est‑il omis du tableau ?', r: 'Non. Il reste inscrit et conserve sa qualité d’avocat, donc la déontologie et la discipline, mais ne peut accomplir aucun acte, porter la robe ni faire état de sa qualité.', src: 'D. 27 nov. 1991' }
    ],
    qcm: [
      { q: 'L’interdiction temporaire d’exercice ne peut excéder :', o: ['1 an', '3 ans', '5 ans'], b: 1, e: 'Trois ans, éventuellement assortie du sursis. L’inéligibilité complémentaire peut, elle, atteindre dix ans.' },
      { q: 'La procédure simplifiée est exclue lorsque :', o: ['l’avocat est associé', 'la poursuite fait suite à la réclamation d’un tiers', 'l’avocat exerce depuis moins de deux ans'], b: 1, e: 'Exclue aussi si l’avocat a fait l’objet d’une interdiction temporaire dans les cinq ans précédents.' },
      { q: 'Le silence de l’avocat sur une proposition de sanction simplifiée vaut :', o: ['acceptation', 'refus', 'demande de délai'], b: 1, e: 'Refus, à l’expiration du délai de quinze jours.' },
      { q: 'La suspension provisoire est prononcée par :', o: ['le bâtonnier', 'le conseil de l’ordre', 'la juridiction disciplinaire'], b: 1, e: 'Seul le conseil de l’ordre peut la prononcer, sur demande du bâtonnier, du procureur général, du juge d’instruction ou du JLD.' }
    ],
    jury: [
      { q: 'Quel a été l’apport de la réforme de 2021 ?', r: 'Elle a renforcé la place du réclamant sans en faire une partie. Trois avancées : l’obligation d’information sur les suites données à la réclamation, la faculté de saisir directement la juridiction disciplinaire en joignant à peine d’irrecevabilité la réclamation préalable, et le droit d’être entendu par la juridiction. Elle a aussi généralisé l’échevinage, de droit lorsque la poursuite émane d’un tiers et en appel. Le réclamant ne peut toutefois ni faire appel ni obtenir de dommages‑intérêts.' },
      { q: 'À quoi sert la procédure disciplinaire simplifiée créée en 2025 ?', r: 'À traiter les manquements de faible gravité que la lourdeur de la procédure ordinaire conduisait à ne pas poursuivre. Le bâtonnier propose un avertissement ou un blâme, l’avocat accepte ou refuse dans les quinze jours, et la juridiction homologue. L’effet attendu est triple : renforcer l’autorité du bâtonnier, alléger le travail de la juridiction, et rendre la réponse disciplinaire plus rapide et plus fréquente.' },
      { q: 'Quelle différence entre suspension provisoire et interdiction temporaire ?', r: 'La nature. La suspension provisoire est une mesure conservatoire, non une sanction : elle suppose l’urgence ou la protection du public, l’engagement d’une procédure disciplinaire ou de poursuites pénales, et elle est prononcée par le conseil de l’ordre pour six mois renouvelables une fois. L’interdiction temporaire est une peine, prononcée par la juridiction disciplinaire pour trois ans au plus, éventuellement avec sursis. Les effets sont en revanche identiques.' },
      { q: 'Le bâtonnier peut‑il refuser de poursuivre malgré une demande du procureur général ?', r: 'Non. L’autorité de poursuite est bicéphale — bâtonnier et procureur général — mais le bâtonnier ne peut s’opposer à une demande du procureur d’ouvrir les poursuites. Lorsque le bâtonnier est lui‑même mis en cause, c’est le procureur qui agit, sans dépaysement de l’affaire.' },
      { q: 'Que devient l’admonestation paternelle ?', r: 'Elle subsiste, hors de toute procédure. C’est un rappel à l’ordre du bâtonnier, verbal ou écrit, pour des manquements trop mineurs pour ouvrir une procédure disciplinaire. Prévue par les usages et non par la loi, elle n’est pas une sanction, ne figure pas au dossier de l’avocat, demeure confidentielle et n’est pas susceptible de recours. Le refus de suivre ses recommandations ne peut fonder une faute. Si elle était versée au dossier, elle deviendrait une sanction faisant grief, et le bâtonnier ne pourrait alors la prononcer.' }
    ],
    cas: {
      e: 'Un client se plaint au bâtonnier du défaut de diligence de son avocat, qui n’a pas répondu à ses courriers pendant huit mois. Le bâtonnier envisage la procédure simplifiée et lui propose un blâme. L’avocat refuse. Que se passe‑t‑il ?',
      r: 'La procédure simplifiée était en réalité fermée dès l’origine : elle ne peut être mise en œuvre lorsque la poursuite fait suite à la réclamation d’un tiers, ce qui est le cas d’un client. La proposition était donc irrégulière. À supposer le cas ouvert, le refus — exprès ou résultant du silence à l’expiration des quinze jours — permet au bâtonnier de poursuivre la procédure simplifiée sans condition de délai : il convoque l’avocat, procède à son audition, puis transmet le dossier et le procès‑verbal au président de la juridiction disciplinaire, la proposition de sanction et les observations ne pouvant plus être produites. La juridiction peut prononcer un avertissement ou un blâme, relaxer, ou renvoyer en procédure ordinaire si les faits excèdent le champ de la procédure simplifiée. Ici, la voie correcte est directement la procédure ordinaire, et le défaut de réponse aux courriers du client caractérise un manquement à la diligence et au dévouement.'
    }
  },

  {
    id: 'omission-suppleance',
    titre: 'L’omission, la suppléance et l’administration provisoire',
    sources: ['D. 27 nov. 1991, art. 104 s.', 'RIN'],
    principes: ['probité', 'confraternité', 'diligence'],
    accroche: 'Ces trois mesures ne sont pas des sanctions : elles relèvent de la police administrative de la profession. Leur objet est la continuité — protéger les clients d’un cabinet dont l’avocat ne peut plus exercer, et protéger l’avocat lui‑même en organisant son remplacement plutôt qu’en le punissant.',
    plan: [
      {
        t: 'I. L’omission, décision administrative de police du tableau',
        pts: [
          'Définition : suppression, par décision motivée du conseil de l’ordre, du nom de l’avocat du tableau. Ce n’est pas une peine disciplinaire, les motifs n’étant pas nécessairement fautifs.',
          'Deux cas obligatoires : incompatibilité, et défaut des garanties et assurances obligatoires.',
          'Quatre cas facultatifs : empêchement d’exercer réellement — maladie ou infirmité grave ou permanente, activités étrangères au barreau — ; non‑paiement sans motif légitime des cotisations à l’Ordre, au CNB, à la CNBF ou des droits de plaidoirie ; absence d’exercice effectif sans motif légitime ; défaut de justification de la formation continue, ajouté en 2023.',
          'Procédure : d’office, ou à la demande du procureur général ou de l’avocat. Audition ou convocation quinze jours avant, quatre mois en matière de formation continue, sauf omission volontaire. Formes et recours identiques à l’inscription : deux mois pour statuer, silence valant rejet, appel dans le mois.'
        ]
      },
      {
        t: 'II. Suppléance et administration provisoire',
        pts: [
          'Suppléance : déclenchée par l’omission, l’empêchement temporaire pour force majeure, ou la démission de l’ensemble des associés d’une SCP. L’avocat choisit son suppléant au sein du même barreau et en avise le bâtonnier ; à défaut, le bâtonnier désigne et informe le procureur général. Un an, renouvelable une fois.',
          'Rôle du suppléant : gestion du cabinet et accomplissement de tous les actes professionnels. Pour la représentation, il se constitue aux lieu et place de l’avocat omis ; en cas de simple empêchement, l’avocat suppléé conserve son mandat ad litem puisqu’il reste au tableau.',
          'Administration provisoire : décès, suspension provisoire, interdiction temporaire, radiation, ou issue de deux ans de suppléance. Seul le bâtonnier désigne l’administrateur, qui remplace l’avocat dans toutes ses fonctions. Elle cesse de plein droit à la fin de la suspension ou de l’interdiction.',
          'En liquidation judiciaire, l’administrateur ne peut accomplir que des actes conservatoires : transmission des dossiers, avis aux clients de choisir un autre avocat, actes urgents. Sa rémunération est fixée par le bâtonnier et constitue une charge du cabinet administré.'
        ]
      }
    ],
    cles: [
      'L’avocat omis reste membre de son Ordre et justiciable de la discipline pour les faits antérieurs, mais ne peut plus exercer ni faire état de son titre, sous peine d’usurpation, ni revêtir la robe.',
      'L’omission est de durée indéterminée : elle ne prend fin que par une demande de réinscription justifiant de la levée de sa cause.',
      'L’avocat omis ne peut se réinscrire dans un autre barreau sans avoir préalablement démissionné, puisqu’il demeure membre de son ordre.',
      'Interdiction temporaire et omission ne se confondent pas : l’avocat interdit reste inscrit au tableau.',
      'Le suppléant ne peut déclarer la cessation des paiements, sauf pouvoir donné par le bâtonnier.',
      'Après le décès, les héritiers n’ont pas accès aux dossiers, en raison du secret professionnel : l’archivage est organisé par l’administrateur.',
      'Dans une structure, les autres associés sont administrateurs provisoires de plein droit ; si tous les associés ou la structure sont interdits, la juridiction disciplinaire nomme les administrateurs.',
      'La démission est un droit : le conseil de l’ordre ne peut la refuser, même en cas de poursuites ou de cotisations impayées, et elle ne fait pas échapper aux poursuites engagées.'
    ],
    cartes: [
      { q: 'L’omission est‑elle une sanction disciplinaire ?', r: 'Non. C’est une décision administrative de police du tableau, prise par le conseil de l’ordre, dont les motifs ne sont pas nécessairement fautifs.', src: 'D. 27 nov. 1991' },
      { q: 'Quels sont les deux cas d’omission obligatoire ?', r: 'L’incompatibilité, et le défaut des garanties et assurances obligatoires — responsabilité civile professionnelle et garantie de représentation des fonds.', src: 'D. 27 nov. 1991' },
      { q: 'Citez les quatre cas d’omission facultative.', r: 'Empêchement d’exercer réellement pour maladie ou activités étrangères au barreau ; non‑paiement des cotisations sans motif légitime ; absence d’exercice effectif sans motif légitime ; défaut de justification de la formation continue.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle est la durée maximale d’une suppléance ?', r: 'Un an, renouvelable une fois par le bâtonnier. Au‑delà de deux ans, on bascule en administration provisoire.', src: 'D. 27 nov. 1991' },
      { q: 'Qui choisit le suppléant ? Qui choisit l’administrateur provisoire ?', r: 'Le suppléant est choisi par l’avocat lui‑même parmi les avocats du même barreau, à défaut par le bâtonnier. L’administrateur provisoire est désigné par le seul bâtonnier.', src: 'D. 27 nov. 1991' },
      { q: 'L’avocat omis conserve‑t‑il son mandat ad litem ?', r: 'Non : le suppléant se constitue aux lieu et place de l’avocat omis. En cas de simple empêchement, l’avocat suppléé, resté au tableau, conserve son mandat.', src: 'D. 27 nov. 1991' },
      { q: 'Quel délai de convocation avant une omission ?', r: 'Quinze jours au moins, par tout moyen donnant date certaine, sauf omission volontaire. Quatre mois en matière de formation continue.', src: 'D. 27 nov. 1991' },
      { q: 'Qu’est‑ce que l’admonestation paternelle ?', r: 'Un rappel à l’ordre du bâtonnier pour des manquements mineurs. Ce n’est pas une sanction : elle demeure confidentielle, ne figure pas au dossier de l’avocat et n’est pas susceptible de recours.', src: 'Usages professionnels' },
      { q: 'Le conseil de l’ordre peut‑il refuser une démission ?', r: 'Non, même si l’avocat fait l’objet de poursuites ou doit des cotisations. Il en prend acte ; la démission ne fait pas échapper aux poursuites déjà engagées.', src: 'D. 27 nov. 1991' }
    ],
    qcm: [
      { q: 'L’omission pour défaut d’assurance est :', o: ['facultative', 'obligatoire', 'impossible'], b: 1, e: 'Avec l’incompatibilité, c’est l’un des deux cas obligatoires.' },
      { q: 'La suppléance ne peut excéder :', o: ['6 mois', '1 an renouvelable une fois', '3 ans'], b: 1, e: 'Un an, renouvelable une fois ; au‑delà, administration provisoire.' },
      { q: 'L’avocat interdit temporairement d’exercice est :', o: ['omis du tableau', 'maintenu au tableau', 'radié'], b: 1, e: 'Il reste inscrit et conserve sa qualité, sans pouvoir exercer.' },
      { q: 'L’administrateur provisoire est désigné par :', o: ['l’avocat lui‑même', 'le bâtonnier', 'la juridiction disciplinaire'], b: 1, e: 'Le bâtonnier seul, qui en informe le procureur général — sauf en cas d’interdiction de tous les associés d’une structure.' }
    ],
    jury: [
      { q: 'Pourquoi l’omission n’est‑elle pas une sanction ?', r: 'Parce que ses causes ne supposent pas de faute : la maladie grave, l’acceptation d’activités étrangères au barreau, ou la demande de l’intéressé lui‑même. C’est une mesure de police du tableau, qui constate que l’avocat ne remplit plus les conditions d’exercice ou ne souhaite plus exercer. Elle en garde toutefois une coloration disciplinaire lorsqu’elle est involontaire et sanctionne un défaut de cotisation ou de formation, ce qui explique les garanties procédurales dont elle est entourée.' },
      { q: 'L’avocat omis peut‑il s’inscrire dans un autre barreau ?', r: 'Non, pas directement. L’omission ne rompt pas le lien avec l’Ordre : l’avocat demeure membre de son ordre, sans figurer au tableau. Il doit donc démissionner préalablement s’il veut s’inscrire ailleurs. Il reste par ailleurs justiciable de la discipline pour les faits antérieurs à son omission, et doit comparaître en robe devant le conseil de l’ordre.' },
      { q: 'Que peut faire le suppléant qu’un administrateur provisoire ne peut pas ?', r: 'La question est en réalité inverse selon les situations. Le suppléant assure la gestion du cabinet et accomplit tous les actes professionnels ; il peut selon les cas recevoir de nouveaux dossiers. L’administrateur provisoire remplace l’avocat dans toutes ses fonctions, mais lorsque le cabinet est en liquidation judiciaire il ne peut accomplir que des actes conservatoires. Ni l’un ni l’autre ne peut déclarer la cessation des paiements sans pouvoir donné par le bâtonnier.' },
      { q: 'Que deviennent les dossiers d’un avocat décédé ?', r: 'Le bâtonnier désigne un administrateur provisoire, qui remplace l’avocat dans ses fonctions et organise la transmission des dossiers à d’autres confrères après avoir invité les clients à choisir un nouvel avocat. Les héritiers n’ont pas accès aux dossiers, le secret professionnel survivant au décès. L’archivage doit être organisé dans le respect de ce secret.' },
      { q: 'Le défaut de paiement des cotisations justifie‑t‑il vraiment une omission ?', r: 'Oui, et c’est une omission facultative, non automatique. Le conseil de l’ordre apprécie la bonne foi de l’avocat et sa capacité à rétablir sa situation ; aucun titre exécutoire n’est exigé et la CNBF n’a pas qualité pour prendre l’initiative de la procédure ordinale. Au‑delà, le défaut de paiement peut caractériser un manquement à la probité et à la confraternité — solidarité entre avocats — et fonder une procédure disciplinaire pouvant aller jusqu’à la radiation.' }
    ],
    cas: {
      e: 'Un avocat est hospitalisé six mois. Son cabinet compte deux collaborateurs et cinquante dossiers en cours, dont trois audiences dans le mois. Que faut‑il organiser ?',
      r: 'Il s’agit d’un empêchement temporaire, non d’une omission : l’avocat reste inscrit au tableau et conserve sa qualité. Il faut donc une suppléance. L’avocat choisit lui‑même un ou plusieurs suppléants parmi les avocats du même barreau et en avise le bâtonnier ; s’il n’est pas en état de le faire, le bâtonnier désigne d’office et informe le procureur général. Le suppléant assure la gestion du cabinet — personnel, comptabilité, contrats de collaboration — et accomplit tous les actes professionnels, y compris pour les audiences. Point technique important : l’avocat suppléé pour empêchement demeurant inscrit au tableau, il reste seul titulaire du mandat ad litem, de sorte que le suppléant ne peut agir en représentation pour lui ; il ne le pourrait qu’en cas d’omission, où il se constituerait aux lieu et place. La rémunération du suppléant est fixée par convention, à défaut par le bâtonnier. La suppléance ne peut excéder un an, renouvelable une fois ; au‑delà de deux ans, elle bascule en administration provisoire.'
    }
  },

  {
    id: 'liquidation-judiciaire',
    titre: 'La liquidation judiciaire',
    sources: ['C. com., livre VI', 'D. 27 nov. 1991', 'L. 14 févr. 2022 (statut de l’entrepreneur individuel)'],
    principes: ['probité', 'prudence'],
    accroche: 'Les procédures collectives sont ouvertes aux avocats depuis 2005. La liquidation judiciaire sanctionne un échec économique, jamais une faute déontologique. Deux singularités en découlent : l’exclusion de la faillite personnelle, remplacée par la discipline ordinale, et le rôle central du bâtonnier, garant du secret à toutes les étapes.',
    plan: [
      {
        t: 'I. Un cadre procédural adapté à la profession',
        pts: [
          'Compétence exclusive du tribunal judiciaire, à l’exclusion du tribunal de commerce ; l’avocat, auxiliaire de justice, peut demander le renvoi devant le tribunal limitrophe.',
          'Déclaration de la cessation des paiements dans les quarante‑cinq jours, à peine d’interdiction de gérer ; la procédure peut aussi être demandée par le procureur de la République ou un créancier impayé.',
          'Rôle du bâtonnier et de l’Ordre : prévention et détection en amont, à partir du contrôle de comptabilité ou du retard de cotisations ; audition obligatoire avant tout jugement d’ouverture, à peine de nullité ; désignation comme contrôleur pendant la procédure, veillant au respect du secret, notamment lors de l’inventaire.',
          'Exclusion des sanctions personnelles : la faillite personnelle et l’interdiction de gérer ne sont pas applicables à l’avocat. Si les faits sont fautifs, ils relèvent de la juridiction disciplinaire.'
        ]
      },
      {
        t: 'II. Les effets patrimoniaux et professionnels',
        pts: [
          'Dessaisissement de plein droit de l’administration et de la disposition des biens jusqu’à la clôture ; le liquidateur exerce les droits et actions patrimoniaux. Depuis 2022, la séparation automatique des patrimoines de l’entrepreneur individuel limite la réalisation aux biens professionnels.',
          'La liquidation n’est ni une cause d’omission ni une cause de radiation : l’avocat n’est pas omis de plein droit et conserve sa qualité. Il ne peut plus exercer à titre individuel, mais peut exercer comme salarié ou au sein d’une structure.',
          'Administration provisoire déclenchée : le tribunal désigne un représentant de l’ordre lors de l’ouverture. L’administrateur ne peut accomplir que des actes conservatoires — transmission des dossiers, avis aux clients, actes urgents, rupture des contrats de travail.',
          'Clôture : pour extinction du passif ou, plus souvent, pour insuffisance d’actif. Elle met fin au dessaisissement et efface les dettes, sauf fraude fiscale, dissimulation d’actifs ou sanction personnelle. Droit au rebond de l’entrepreneur individuel, sous réserve de l’absence de condamnation dans les cinq années précédentes.'
        ]
      }
    ],
    cles: [
      'Compétence du tribunal judiciaire, jamais du tribunal de commerce, l’avocat n’étant pas commerçant.',
      'Déclaration de cessation des paiements dans les quarante‑cinq jours.',
      'Le bâtonnier doit être appelé et entendu avant tout jugement d’ouverture, à peine de nullité de la procédure.',
      'Pendant la procédure, le bâtonnier est nommé contrôleur : il surveille aux côtés du mandataire et veille au secret professionnel.',
      'La faillite personnelle et l’interdiction de gérer sont exclues ; l’action en comblement de passif ne vise que les dirigeants de personnes morales.',
      'L’avocat en liquidation peut continuer d’exercer comme salarié ou au sein d’une structure, mais pas à titre individuel.',
      'Le collaborateur libéral est créancier chirographaire ; son contrat peut être résilié.',
      'La liquidation peut fonder une procédure disciplinaire si les faits révèlent un manquement — passif considérable, dissimulation d’actif, absence de comptabilité probante — et aller jusqu’à la radiation.'
    ],
    cartes: [
      { q: 'Quelle juridiction est compétente pour la liquidation judiciaire d’un avocat ?', r: 'Le tribunal judiciaire, à l’exclusion du tribunal de commerce. L’avocat peut demander le renvoi devant le tribunal limitrophe, en sa qualité d’auxiliaire de justice.', src: 'C. com. ; D. 1991' },
      { q: 'Dans quel délai la cessation des paiements doit‑elle être déclarée ?', r: 'Quarante‑cinq jours, à peine notamment d’interdiction de gérer — sanction toutefois inapplicable à l’avocat.', src: 'C. com. art. L. 631‑4' },
      { q: 'Quel est le rôle du bâtonnier avant l’ouverture ?', r: 'Il doit être appelé et entendu avant tout jugement d’ouverture, à peine de nullité de la procédure. En amont, il exerce une mission de prévention et de détection.', src: 'C. com. ; D. 1991' },
      { q: 'La faillite personnelle est‑elle applicable à l’avocat ?', r: 'Non, les sanctions personnelles sont expressément exclues. Les faits fautifs relèvent de la juridiction disciplinaire, ce qui est en pratique plus sévère.', src: 'C. com., livre VI' },
      { q: 'La liquidation entraîne‑t‑elle l’omission du tableau ?', r: 'Non. Elle n’est ni une cause d’omission ni une cause de radiation ; l’avocat conserve sa qualité.', src: 'D. 27 nov. 1991' },
      { q: 'L’avocat en liquidation peut‑il continuer d’exercer ?', r: 'Pas à titre individuel, en raison du dessaisissement. Il peut exercer comme collaborateur salarié ou au sein d’une structure, puisqu’il n’exerce alors pas en son nom propre.', src: 'C. com. ; D. 1991' },
      { q: 'Quels actes l’administrateur provisoire peut‑il accomplir en liquidation ?', r: 'Uniquement des actes conservatoires : transmission des dossiers à d’autres confrères, avis aux clients de choisir un autre avocat, actes urgents pour éviter l’aggravation de la situation, rupture des contrats de travail.', src: 'D. 27 nov. 1991' },
      { q: 'Qu’est‑ce que le droit au rebond ?', r: 'La faculté, pour l’avocat entrepreneur individuel, de reprendre une activité professionnelle indépendante sans attendre la clôture, un nouveau patrimoine professionnel se constituant, à condition de ne pas avoir été condamné dans les cinq dernières années à une sanction pour insuffisance d’actif ou à une clôture de rétablissement professionnel.', src: 'C. com., livre VI' }
    ],
    qcm: [
      { q: 'La liquidation judiciaire d’un avocat relève :', o: ['du tribunal de commerce', 'du tribunal judiciaire', 'du conseil de l’ordre'], b: 1, e: 'L’avocat n’est pas commerçant ; le tribunal judiciaire est seul compétent.' },
      { q: 'Le bâtonnier, pendant la procédure, est :', o: ['liquidateur', 'contrôleur', 'administrateur judiciaire'], b: 1, e: 'Nommé contrôleur, il surveille aux côtés du mandataire et veille au respect du secret.' },
      { q: 'La faillite personnelle prononcée contre un avocat :', o: ['est possible', 'est exclue, remplacée par la discipline', 'est automatique'], b: 1, e: 'Les sanctions personnelles sont exclues ; la réponse est disciplinaire, et peut être plus lourde.' },
      { q: 'La liquidation entraîne‑t‑elle la radiation ?', o: ['oui, automatiquement', 'non, aucune conséquence disciplinaire automatique', 'oui, après un an'], b: 1, e: 'Aucune conséquence automatique ; une procédure disciplinaire peut toutefois être engagée si les faits révèlent un manquement.' }
    ],
    jury: [
      { q: 'Pourquoi la faillite personnelle est‑elle exclue pour l’avocat ?', r: 'Parce que la profession dispose de son propre système de sanctions, plus complet et mieux adapté. La faillite personnelle n’interdit que l’exercice individuel de l’entrepreneur ; la juridiction disciplinaire peut prononcer une interdiction temporaire ou une radiation, qui atteignent l’exercice sous toutes ses formes. Le régime ordinal est donc en réalité plus sévère que le droit commun.' },
      { q: 'Comment le secret professionnel est‑il protégé pendant la procédure ?', r: 'Par l’Ordre, à chaque étape. Le bâtonnier est entendu avant l’ouverture à peine de nullité, il est nommé contrôleur pendant la procédure, l’inventaire se fait en sa présence, et le tribunal désigne un représentant de l’ordre pour exercer les actes de la profession. La logique est constante : aucun tiers non tenu au secret ne doit accéder aux dossiers, ni le mandataire ni les créanciers.' },
      { q: 'Un avocat en liquidation peut‑il rester collaborateur ?', r: 'Oui. Le dessaisissement porte sur l’administration et la disposition de son patrimoine, ce qui rend impossible l’exercice à titre individuel. Mais l’exercice comme collaborateur salarié ou au sein d’une structure reste possible, l’avocat n’exerçant alors pas en son nom propre. Cela évite que la difficulté économique n’emporte l’exclusion professionnelle.' },
      { q: 'Qu’a changé la réforme de 2022 ?', r: 'La séparation automatique des patrimoines professionnel et personnel de l’entrepreneur individuel, sans création d’une personne morale. Le liquidateur ne réalise donc que les biens professionnels, la résidence principale et les biens non affectés étant préservés. S’y ajoute l’insaisissabilité de droit de la résidence principale à l’égard des créanciers professionnels, acquise depuis la loi Macron.' },
      { q: 'La liquidation peut‑elle avoir des suites disciplinaires ?', r: 'Elle n’en a aucune automatiquement, mais elle peut en révéler. Un passif très important, une dissimulation d’actif ou de passif, l’absence de comptabilité probante caractérisent des manquements à la prudence et à la probité, susceptibles de conduire jusqu’à la radiation. Le conseil de l’ordre peut par ailleurs omettre l’avocat qui n’acquitte pas ses cotisations. La difficulté de rentabilité, en elle‑même et sans intention frauduleuse, n’est pas répréhensible.' }
    ],
    cas: {
      e: 'Un avocat individuel cesse ses paiements. Il ne déclare rien, espérant redresser la situation. Trois mois plus tard, un bailleur assigne. Le tribunal ouvre la liquidation sans avoir entendu le bâtonnier. Quelles conséquences ?',
      r: 'Deux irrégularités et une conséquence pratique. Premièrement, l’absence de déclaration dans les quarante‑cinq jours : elle expose en droit commun à une interdiction de gérer, sanction inapplicable à l’avocat, mais elle pourra être appréciée par la juridiction disciplinaire comme un manquement à la prudence et à la probité. Deuxièmement, et c’est le point décisif, le bâtonnier doit être appelé et entendu avant tout jugement d’ouverture, à peine de nullité de la procédure : le jugement est donc annulable, ce qui protège moins l’avocat que le secret professionnel de ses clients. Sur le fond, l’ouverture emporte dessaisissement, désignation d’un représentant de l’ordre limité aux actes conservatoires, et impossibilité d’exercer à titre individuel — sans omission ni radiation automatique, l’avocat pouvant se réinstaller comme collaborateur ou associé. Le bâtonnier aurait dû, en amont, exercer sa mission de prévention en convoquant l’avocat dès les premiers retards de cotisations.'
    }
  }
];
