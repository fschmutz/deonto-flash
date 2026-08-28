// Bloc 4 - Les modes et structures juridiques d'exercice de la profession (5 sujets).
// Sources publiques : loi n° 71-1130 du 31 decembre 1971 (art. 7 et 8),
// decret n° 91-1197 du 27 novembre 1991, RIN du CNB, ordonnance n° 2023-77 du 8 fevrier 2023,
// loi du 6 aout 2015, convention collective nationale des cabinets d'avocats.

export const STRUCTURES = [
  {
    id: 'avocat-individuel',
    titre: 'L’avocat individuel',
    sources: ['L. 31 déc. 1971, art. 7', 'D. 27 nov. 1991', 'L. 14 févr. 2022 (entrepreneur individuel)'],
    principes: ['indépendance', 'prudence'],
    accroche: 'L’exercice individuel reste la forme traditionnelle et la plus répandue de la profession. Il offre une indépendance totale, mais expose à un isolement économique et pratique : impossibilité de se faire substituer, revenus statistiquement inférieurs, patrimoine longtemps exposé. Le droit a répondu par la protection patrimoniale et par les structures de moyens.',
    plan: [
      {
        t: 'I. Un statut d’indépendance totale, désormais mieux protégé',
        pts: [
          'L’avocat exerce en son nom propre, sans personne morale, sous le statut unique d’entrepreneur individuel, avec mention « EI » sur ses documents professionnels et inscription au registre national des entreprises via le guichet unique.',
          'Séparation automatique des patrimoines professionnel et personnel depuis la réforme du 14 février 2022 : seuls les biens professionnels peuvent être saisis par les créanciers professionnels. S’y ajoute l’insaisissabilité de droit de la résidence principale et la faculté de déclarer insaisissables les autres biens fonciers non affectés à l’usage professionnel.',
          'Le statut de micro‑entrepreneur est exclu pour l’avocat, comme pour toute profession libérale réglementée, notamment en raison de l’affiliation à la CNBF.',
          'Régime fiscal : impôt sur le revenu en bénéfices non commerciaux, micro‑BNC en dessous du seuil, déclaration contrôlée au‑delà ou sur option. Option possible pour l’assimilation à une EURL et l’impôt sur les sociétés, irrévocable après cinq ans. Régime social : travailleur non salarié, sans assurance chômage.'
        ]
      },
      {
        t: 'II. Les structures de moyens : mutualiser sans exercer',
        pts: [
          'Distinction fondamentale : les structures de moyens facilitent l’activité de leurs membres, elles n’exercent pas la profession. Chacun exerce à titre individuel et conserve sa clientèle.',
          'Cabinets groupés : simple convention de partage de locaux et de services communs, sans personnalité morale. Les règles sur les conflits d’intérêts s’appliquent au groupe entier ; le secret n’est pas partagé, ce qui impose des mesures de cloisonnement. Agrément préalable des locaux par le conseil de l’ordre.',
          'Société civile de moyens : personnalité morale, affectio societatis, mise en commun des seuls moyens — locaux, bail, matériel, personnel — et non de l’industrie. L’associé est indéfiniment et conjointement responsable des dettes sociales de gestion.',
          'Groupement d’intérêt économique : personnalité morale, activité auxiliaire de celle de ses membres, sans réaliser de bénéfice pour lui‑même. Réseaux pluridisciplinaires et conventions de groupement transnational : partenariats non structurels, soumis à déclaration.'
        ]
      }
    ],
    cles: [
      'La structure de moyens n’exerce jamais la profession : elle ne peut ni recevoir de clients ni percevoir d’honoraires.',
      'Dans une structure de moyens, le secret n’est pas partagé : il existe une présomption simple de risque d’atteinte, que des mesures de cloisonnement peuvent combattre.',
      'Le cabinet groupé n’est pas une association : tout partage d’honoraires ou remplacement habituel entre ses membres est interdit.',
      'L’exercice individuel interdit de se faire substituer aux audiences, à la différence de l’association ; le recrutement d’un collaborateur reste possible, l’avocat demeurant responsable de ses actes.',
      'Micro‑BNC : abattement forfaitaire de 34 %, comptabilité limitée à un livre des recettes, souvent peu avantageux au regard des frais réels d’un cabinet.',
      'Déclaration contrôlée : comptabilité complète, déduction des charges réelles, report des déficits sur les bénéfices ultérieurs.',
      'Comptabilité de trésorerie par principe pour l’exercice individuel ; comptabilité d’engagement en cas d’option pour l’impôt sur les sociétés.',
      'Compte bancaire dédié à l’activité professionnelle obligatoire au‑delà d’un certain chiffre d’affaires sur deux années consécutives.'
    ],
    cartes: [
      { q: 'L’avocat peut‑il exercer sous le statut de micro‑entrepreneur ?', r: 'Non. Le statut est exclu pour les professions libérales réglementées, notamment parce que l’avocat est affilié à la CNBF et non au seul régime URSSAF.', src: 'C. sécu. soc. ; D. 1991' },
      { q: 'Quelle protection patrimoniale l’avocat individuel a‑t‑il depuis 2022 ?', r: 'La séparation automatique des patrimoines professionnel et personnel : seuls les biens professionnels peuvent être saisis par les créanciers professionnels, sans création de personne morale.', src: 'L. 14 févr. 2022' },
      { q: 'Une société civile de moyens peut‑elle exercer la profession d’avocat ?', r: 'Non. Elle a la personnalité morale mais n’est pas une structure d’exercice : son objet est la mise en commun de moyens, chacun exerçant individuellement.', src: 'D. 27 nov. 1991' },
      { q: 'Le secret professionnel est‑il partagé dans un cabinet groupé ?', r: 'Non. Il n’est partagé que dans une structure d’exercice. Dans une structure de moyens, une présomption simple de risque d’atteinte impose des mesures de cloisonnement.', src: 'RIN art. 2 et 4' },
      { q: 'Deux avocats en cabinet groupé peuvent‑ils partager leurs honoraires ?', r: 'Non. Le cabinet groupé n’est pas une association : chaque avocat conserve son cabinet propre, et tout partage d’honoraires ou remplacement habituel est interdit.', src: 'RIN ; usages professionnels' },
      { q: 'Qu’est‑ce qu’un groupement d’intérêt économique ?', r: 'Une structure de moyens dotée de la personnalité morale, destinée à faciliter ou développer l’activité de ses membres sans réaliser de bénéfice pour elle‑même. Son activité doit être auxiliaire de la leur ; il ne peut exercer la profession d’avocat.', src: 'C. com. ; RIN' },
      { q: 'Quel est le régime fiscal de principe de l’avocat individuel ?', r: 'L’impôt sur le revenu dans la catégorie des bénéfices non commerciaux, avec micro‑BNC en dessous du seuil et déclaration contrôlée au‑delà ou sur option. Option possible pour l’impôt sur les sociétés par assimilation à une EURL.', src: 'CGI, art. 92 et 102 ter' },
      { q: 'Qu’est‑ce qu’une convention de groupement transnational ?', r: 'Un partenariat conclu avec un avocat étranger régulièrement inscrit, qui n’est pas une structure d’exercice. Elle suppose une déclaration préalable au bâtonnier, et toute participation de capitaux extérieurs à la profession est prohibée.', src: 'RIN art. 16‑1' }
    ],
    qcm: [
      { q: 'Une SCM peut :', o: ['exercer la profession d’avocat', 'mettre en commun des moyens seulement', 'percevoir des honoraires'], b: 1, e: 'Personnalité morale, mais pas structure d’exercice : les moyens, jamais l’industrie.' },
      { q: 'Le statut de micro‑entrepreneur est :', o: ['ouvert à l’avocat débutant', 'exclu pour les avocats', 'réservé aux collaborateurs'], b: 1, e: 'Exclu pour toutes les professions libérales réglementées.' },
      { q: 'Dans un cabinet groupé, les règles sur les conflits d’intérêts s’appliquent :', o: ['à chaque avocat isolément', 'au groupe dans son ensemble', 'seulement en cas de dossier commun'], b: 1, e: 'Elles s’appliquent au groupe et à tous ses membres, alors même que le secret n’y est pas partagé.' }
    ],
    jury: [
      { q: 'Pourquoi l’exercice individuel génère‑t‑il statistiquement moins de revenus ?', r: 'Pour des raisons structurelles : impossibilité de mutualiser les charges fixes, absence de substitution aux audiences qui limite le nombre de dossiers traitables, difficulté à intervenir sur des dossiers complexes exigeant plusieurs matières, et fragilité en cas d’absence. C’est précisément ce que corrigent les structures de moyens et d’exercice, sans porter atteinte à l’indépendance.' },
      { q: 'Quelle est la ligne de partage entre structure de moyens et structure d’exercice ?', r: 'L’objet. La structure d’exercice exerce la profession, par l’intermédiaire de ses membres, perçoit les honoraires et souscrit l’assurance ; elle figure au tableau. La structure de moyens facilite l’activité de ses membres, qui continuent d’exercer chacun pour son compte. Cette distinction commande le partage du secret, l’appréciation des conflits d’intérêts, la titularité de la clientèle et la responsabilité.' },
      { q: 'La séparation automatique des patrimoines est‑elle une protection réelle ?', r: 'Elle l’est, mais elle repose sur la comptabilité. La loi pose une présomption : le patrimoine professionnel comprend les éléments enregistrés comptablement. C’est donc la rigueur de la tenue des comptes qui rend la séparation opposable, faute de quoi la confusion sera retenue. La protection s’ajoute à l’insaisissabilité de droit de la résidence principale à l’égard des créanciers professionnels.' },
      { q: 'Un avocat individuel peut‑il recruter un collaborateur ?', r: 'Oui, libéral ou salarié, sans que cela change son mode d’exercice. Il reste responsable civilement des actes professionnels de son collaborateur accomplis pour son compte. Le contrat doit être écrit, transmis au conseil de l’ordre dans les quinze jours, et le collaborateur libéral doit disposer du temps et des moyens de développer une clientèle personnelle, gratuitement pendant ses cinq premières années.' },
      { q: 'Un réseau pluridisciplinaire est‑il une structure d’exercice ?', r: 'Non. C’est une organisation, formelle ou non, constituée de manière durable entre avocats et membres d’autres professions libérales pour favoriser des prestations complémentaires à une clientèle développée en commun. Il suppose un intérêt économique commun, présumé par des indices comme un logo, une dénomination ou une clientèle commune. Il exige une déclaration à l’Ordre, et les conflits d’intérêts s’apprécient à l’échelle du réseau.' }
    ],
    cas: {
      e: 'Trois avocats installés dans les mêmes locaux partagent une salle d’attente, un secrétariat et une armoire d’archives. Chacun exerce à titre individuel. L’un d’eux est saisi contre un client d’un autre. Que faut‑il vérifier ?',
      r: 'Deux séries de règles. Sur le conflit d’intérêts : dans une structure de moyens comme dans un cabinet groupé, l’interdiction s’applique dès lors qu’il existe un risque de violation du secret professionnel, cette présomption étant simple. Le partage d’une salle d’attente, d’un secrétariat et surtout d’archives communes rend le risque manifeste : le conflit sera retenu, et l’avocat saisi doit se déporter, à moins de démontrer un cloisonnement effectif — archives séparées et fermées, secrétariat distinct, poste et messagerie individuels. Sur l’organisation elle‑même : ces trois éléments partagés sont précisément ceux que le RIN signale comme incompatibles avec le secret. La régularisation doit donc être structurelle et non seulement ponctuelle. Il faut enfin rappeler que le cabinet groupé n’est pas une association : les avocats ne peuvent ni partager leurs honoraires ni se remplacer habituellement, faute de quoi la structure serait requalifiée.'
    }
  },

  {
    id: 'collaborateur',
    titre: 'Statut de l’avocat collaborateur libéral ou salarié',
    sources: ['L. 31 déc. 1971, art. 7', 'RIN art. 14', 'Convention collective nationale des cabinets d’avocats du 17 févr. 1995'],
    principes: ['indépendance', 'conscience', 'délicatesse', 'secret professionnel'],
    accroche: 'La collaboration est la porte d’entrée de la profession : environ trente pour cent des avocats sont collaborateurs libéraux, trois pour cent salariés. Deux statuts, une même exigence — l’indépendance intellectuelle. Ce qui les sépare tient à deux choses : la clientèle personnelle, et la nature du lien.',
    plan: [
      {
        t: 'I. Deux statuts, une frontière : la clientèle personnelle',
        pts: [
          'Collaboration libérale : mode d’exercice exclusif de tout lien de subordination, par lequel l’avocat consacre une partie de son activité au cabinet d’un ou plusieurs confrères. Liberté d’organisation temporelle et matérielle. Faculté de constituer une clientèle personnelle : le cabinet met à disposition, dans des conditions normales d’utilisation, les moyens matériels nécessaires, et ne peut demander aucune contribution financière au titre du traitement de cette clientèle pendant les cinq premières années d’exercice.',
          'Collaboration salariée : lien de subordination limité à la détermination des conditions de travail, ce qui préserve le caractère libéral et indépendant. Interdiction de constituer une clientèle personnelle pendant l’exécution du contrat, hors missions d’aide juridictionnelle et commissions d’office. Le RIN lui reconnaît cette faculté en dehors de l’exécution du contrat, mais la cour d’appel de Paris a jugé cette disposition illégale en 2023. Régie par le droit du travail et la convention collective nationale du 17 février 1995.',
          'Formalisme commun : contrat écrit, mentions obligatoires — respect du secret et de l’indépendance, clause de conscience, droit à la déconnexion, durée, rémunération, remboursement de frais, maladie et parentalité. Transmission au conseil de l’ordre dans les quinze jours.',
          'Clauses interdites : atteinte à l’indépendance ou aux règles déontologiques, renonciation anticipée aux clauses obligatoires, limitation de la liberté d’établissement ultérieur ; pour le libéral, participation aux frais de développement de la clientèle pendant cinq ans et limitation des obligations d’aide juridictionnelle.'
        ]
      },
      {
        t: 'II. Exécution et rupture',
        pts: [
          'Rémunération : rétrocession d’honoraires pour le libéral, fixe ou fixe et variable, jamais entièrement variable, avec minimum fixé par le règlement intérieur du barreau pour les deux premières années. Salaire pour le collaborateur salarié, minimum conventionnel.',
          'Exécution : information du cabinet si l’argumentation diffère, retrait au titre de la conscience avec information suffisamment tôt, temps de formation et de spécialisation, entretien annuel, droit à la déconnexion. Cinq semaines de repos rémunérées, deux mois de maintien de la rétrocession en cas de maladie, seize semaines de maternité.',
          'Rupture : pas d’obligation de motiver pour le libéral, mais respect de la délicatesse et de la confraternité ; délai de prévenance de trois mois, augmenté d’un mois par année au‑delà de trois ans de présence révolus sans excéder six mois, huit jours pendant la période d’essai. Aucun délai en cas de manquement grave flagrant. Protection renforcée en cas de parentalité et de maladie.',
          'Suites : domiciliation trois mois, restitution des dossiers personnels, réponse automatique de messagerie pendant un an, liberté d’établissement ultérieur, information réciproque pendant deux ans sur les clients communs. Interdiction de toute clause de non‑concurrence et de respect de clientèle.'
        ]
      }
    ],
    cles: [
      'La clause de non‑concurrence et la clause dite de respect de clientèle sont nulles dans les deux contrats : la clientèle n’est pas la propriété de l’avocat et le client conserve son libre choix. Seule demeure l’interdiction de concurrence déloyale.',
      'Le collaborateur libéral peut cumuler plusieurs contrats, y compris dans des barreaux différents ; l’avocat salarié doit être inscrit au même barreau que son employeur, sauf structure interbarreaux.',
      'Requalification : c’est au demandeur de prouver le lien de subordination, caractérisé notamment par l’impossibilité de développer une clientèle personnelle. Le bâtonnier peut statuer d’office sur la qualification, le juge du fond requalifie.',
      'Le cabinet est civilement responsable des actes professionnels du collaborateur accomplis pour son compte ; le collaborateur libéral doit assurer sa propre clientèle.',
      'Le collaborateur salarié bénéficie de l’immunité civile des préposés ; le collaborateur libéral n’en bénéficie pas et dispose d’une action récursoire.',
      'Parentalité : la rupture est impossible de la déclaration jusqu’à l’expiration de la suspension, puis huit semaines après le retour, sauf manquement grave non lié à la parentalité. Elle est nulle de plein droit si le cabinet est informé dans les quinze jours suivant sa notification.',
      'Maladie : la notification de la rupture est impossible pendant l’indisponibilité médicalement constatée, sauf manquement grave non lié à l’état de santé ; la protection expire au bout de six mois.',
      'Le collaborateur reste tenu au secret même en litige avec son cabinet et ne peut produire de pièces couvertes.'
    ],
    cartes: [
      { q: 'Quelle est la différence essentielle entre collaboration libérale et salariée ?', r: 'La clientèle personnelle : le libéral peut la constituer et la développer, le salarié ne le peut pas pendant l’exécution de son contrat, hors aide juridictionnelle et commissions d’office. S’y ajoute le lien de subordination, limité aux conditions de travail pour le salarié.', src: 'L. 1971, art. 7 ; RIN art. 14.2.2' },
      { q: 'Dans quel délai le contrat est‑il transmis au conseil de l’ordre ?', r: 'Quinze jours à compter de sa conclusion, et de même pour tout acte modificatif. Le défaut expose à des poursuites disciplinaires mais n’entraîne pas la nullité du contrat.', src: 'RIN art. 14' },
      { q: 'Quelle est la durée de la période d’essai en collaboration libérale ?', r: 'Trois mois au maximum, renouvellement compris. Une indisponibilité pour raison de santé la suspend : elle reprend de plein droit pour la durée restant à courir. La rupture pendant cette période suppose un délai de prévenance de huit jours.', src: 'RIN art. 14.5.1 et 14.7.1' },
      { q: 'Quel est le délai de prévenance en cas de rupture d’une collaboration libérale ?', r: 'Trois mois au moins, augmenté d’un mois par année au‑delà de trois ans de présence révolus, sans pouvoir excéder six mois. Huit jours pendant la période d’essai, et aucun délai en cas de manquement grave flagrant aux règles professionnelles.', src: 'RIN art. 14.7.1' },
      { q: 'Les clauses de non‑concurrence sont‑elles valables ?', r: 'Non, elles sont interdites dans les contrats de collaboration libérale comme salariée, de même que les clauses dites de respect de clientèle. Seule subsiste l’interdiction de concurrence déloyale.', src: 'RIN art. 14 ; jurisprudence' },
      { q: 'Le cabinet peut‑il faire participer le collaborateur libéral aux frais de sa clientèle personnelle ?', r: 'Aucune contribution financière ne peut lui être demandée à ce titre pendant ses cinq premières années d’exercice. Les moyens matériels nécessaires doivent en outre lui être mis à disposition dans des conditions normales d’utilisation.', src: 'RIN art. 14.2.2.1' },
      { q: 'Quelle protection en cas de grossesse ?', r: 'De la déclaration de grossesse jusqu’à l’expiration de la période de suspension, puis pendant huit semaines après le retour, le contrat ne peut être rompu, sauf manquement grave aux règles professionnelles non lié à la grossesse ou à la maternité. La rupture est en outre nulle de plein droit si le cabinet est informé de la grossesse dans les quinze jours suivant sa notification.', src: 'RIN art. 14.7.3' },
      { q: 'Quelle est la durée du congé de maternité de la collaboratrice libérale ?', r: 'Seize semaines au moins, réparties à son choix, avec un minimum de trois semaines avant la date prévue et dix après. Portée à vingt‑six semaines à compter du troisième enfant, et à trente‑quatre en cas de naissances multiples. Elle perçoit sa rétrocession habituelle, déduction faite des indemnités journalières.', src: 'RIN art. 14.6' },
      { q: 'Que devient l’adresse électronique du collaborateur après la rupture ?', r: 'Une réponse automatique indique ses nouvelles coordonnées pendant un an, l’adresse pouvant être fermée ensuite. La domiciliation au cabinet est maintenue trois mois.', src: 'RIN art. 14' }
    ],
    qcm: [
      { q: 'La clause de non‑concurrence dans un contrat de collaboration est :', o: ['valable si limitée dans le temps', 'nulle', 'valable avec contrepartie financière'], b: 1, e: 'Interdite dans les deux contrats : elle heurte la liberté d’établissement et le libre choix du client.' },
      { q: 'La période d’essai en collaboration libérale est de :', o: ['1 mois', '3 mois renouvellement compris', '6 mois'], b: 1, e: 'Trois mois au maximum, suspendus en cas de maladie. Trois plus trois pour le collaborateur salarié.' },
      { q: 'Pendant l’exécution de son contrat, le collaborateur salarié peut se constituer une clientèle personnelle :', o: ['oui, librement', 'non, hors aide juridictionnelle et commissions d’office', 'oui, sur autorisation du bâtonnier'], b: 1, e: 'Le RIN lui reconnaît cette faculté en dehors de l’exécution du contrat, mais la cour d’appel de Paris a jugé cette disposition illégale en 2023 : à l’oral, citez la règle et la réserve jurisprudentielle.' },
      { q: 'Le contrat de collaboration doit être transmis au conseil de l’ordre dans :', o: ['8 jours', '15 jours', '1 mois'], b: 1, e: 'Quinze jours, à peine de poursuites disciplinaires mais non de nullité du contrat.' }
    ],
    jury: [
      { q: 'La collaboration libérale n’est‑elle pas un salariat déguisé ?', r: 'Elle peut le devenir, et c’est le contentieux de la requalification. Le critère décisif est la faculté effective de constituer et développer une clientèle personnelle : si le collaborateur n’en a ni le temps ni les moyens, le lien de subordination est caractérisé. Le traitement d’un nombre dérisoire de dossiers propres ne fait pas obstacle à la requalification. La charge de la preuve pèse sur le demandeur, et le bâtonnier peut statuer d’office sur la qualification, le juge du fond requalifiant.' },
      { q: 'Le collaborateur est‑il indépendant s’il est payé par le cabinet ?', r: 'La dépendance économique est réelle et le droit l’encadre plutôt que de la nier. Trois garde‑fous : la rétrocession ne peut être entièrement variable et ne peut descendre en dessous du minimum fixé par le règlement intérieur pour les deux premières années ; l’indépendance intellectuelle est protégée, le collaborateur informant le cabinet lorsque son argumentation diffère ; la clause de conscience lui permet de se retirer d’un dossier. Un bâtonnier peut juger qu’une rétrocession manifestement dérisoire porte atteinte à la dignité de la profession ou caractérise un abus de dépendance économique.' },
      { q: 'Que peut emporter le collaborateur qui part ?', r: 'Ses dossiers personnels, tout document ou acte professionnel qu’il a élaboré dans la limite du secret, et une copie de sa messagerie professionnelle. Il conserve la liberté de s’établir où il veut et de démarcher, la clientèle n’étant la propriété de personne. Il ne peut en revanche commettre d’acte déloyal : débauchage désorganisant le cabinet, dénigrement, ou offre de services précise adressée au fichier clients. Pendant deux ans, cabinet et collaborateur s’informent mutuellement lorsqu’ils prêtent leur concours à un client commun.' },
      { q: 'Le collaborateur peut‑il refuser un dossier ?', r: 'Oui, au titre de la clause de conscience, obligatoire dans tout contrat, en informant le cabinet suffisamment tôt pour ne pas compromettre les intérêts du client. Il doit également se déporter en cas de conflit d’intérêts : il ne peut assister une personne dont les intérêts sont contraires à ceux d’un client du cabinet, y compris sur sa clientèle personnelle. Ces deux facultés distinguent la collaboration de tout autre rapport de travail.' },
      { q: 'Un collaborateur peut‑il cumuler plusieurs collaborations ?', r: 'Oui pour le libéral, y compris auprès de cabinets de barreaux différents, sous réserve que toutes les garanties d’exercice, d’indépendance et de confidentialité soient réunies : c’est une application de la pluralité d’exercice. Le collaborateur salarié ne le peut pas dans les mêmes conditions, une autre activité sur temps partiel supposant l’autorisation de l’employeur, et il doit être inscrit au même barreau que celui‑ci sauf structure interbarreaux.' }
    ],
    cas: {
      e: 'Une collaboratrice libérale, en poste depuis quatre ans, n’a jamais eu le temps de développer sa clientèle : elle facture 1 800 heures par an au cabinet, ses horaires sont imposés, et son contrat prévoit une réduction de rétrocession en cas d’absence de plus de trois jours pour ses dossiers personnels. Quelle analyse ?',
      r: 'Trois irrégularités et une conséquence. La clause de réduction de la rétrocession en cas d’absence pour clientèle personnelle est illicite : elle constitue une participation indirecte aux frais de développement de la clientèle, interdite pendant les cinq premières années, et porte atteinte à la faculté même de constituer une clientèle. L’imposition des horaires est incompatible avec la collaboration libérale, exclusive de tout encadrement des conditions de travail, sauf collaboration à temps partiel prévoyant les périodes de disponibilité. Le volume facturé au cabinet, joint à l’impossibilité pratique de développer une clientèle, caractérise le lien de subordination. Conséquence : la requalification en contrat de travail est encourue. Le bâtonnier peut statuer d’office sur la qualification lors de l’arbitrage, mais seul le juge du fond requalifie. Si la requalification intervient après la rupture, les règles du licenciement s’appliquent, et l’employeur devra rembourser les cotisations ordinales et CNB acquittées par la collaboratrice.'
    }
  },

  {
    id: 'avocat-associe',
    titre: 'L’avocat associé',
    sources: ['L. 31 déc. 1971, art. 7 et 8', 'Ord. 8 févr. 2023', 'D. 27 nov. 1991', 'RIN'],
    principes: ['indépendance', 'loyauté', 'confraternité'],
    accroche: 'Environ trente pour cent des avocats exercent comme associés. Le statut n’est pas défini par la loi : est associé celui qui détient des parts, qu’il exerce ou non dans la structure, qu’il en soit ou non gérant. C’est dire que la qualité d’associé et le mode d’exercice ne se recouvrent pas, et que leur articulation est la vraie difficulté du sujet.',
    plan: [
      {
        t: 'I. Le cadre structurel et le statut de l’associé',
        pts: [
          'L’associé peut l’être d’une structure d’exercice — SCP, SEL, société de droit commun, SPE, association ou société en participation — ou d’une structure support qui n’exerce pas la profession, comme une SPFPL, une SCM ou un GIE.',
          'Règles de détention du capital selon la forme : tous associés avocats en exercice et tous gérants dans la SCP ; capital ouvert aux professionnels de la SEL, aux professions juridiques et judiciaires et aux SPFPL dans la SEL ; au moins un associé de chaque profession dans la SPE ; au moins un avocat dans les sociétés de droit commun.',
          'Responsabilité civile professionnelle : chaque associé répond sur l’ensemble de son patrimoine des actes qu’il accomplit, la société étant solidairement responsable. Dans une association, chacun est tenu des actes des autres à proportion de ses droits, sauf AARPI publiée.',
          'Dettes sociales : responsabilité conjointe mais indéfinie en SCP, limitée aux apports en SEL et sociétés de droit commun, inexistante en association faute de personnalité morale.'
        ]
      },
      {
        t: 'II. Les interactions entre exercice professionnel et qualité d’associé',
        pts: [
          'Effets du statut sur l’exercice : les actes et correspondances mentionnent la structure, mais la constitution se fait au nom personnel de l’avocat, qui reste inscrit au tableau à titre individuel. Secret partagé, conflits d’intérêts et incompatibilités s’apprécient au niveau de la structure ; comptabilité et assurance sont souscrites par elle.',
          'Effets de la sanction sur le statut : interdiction temporaire de moins de trois mois, l’associé conserve ses droits mais sa vocation aux bénéfices est réduite de moitié ; au‑delà de trois mois, les autres associés peuvent, à l’unanimité, le contraindre au retrait et à la cession de ses parts. La radiation emporte perte de la qualité d’associé et cession forcée.',
          'Décision visant tous les associés : en cas d’interdiction temporaire générale, la structure est suspendue du tableau puis radiée après un an ; en cas de radiation générale, elle est dissoute par extinction de son objet.',
          'Conflits entre associés : conciliation puis arbitrage du bâtonnier, expertise possible pour l’évaluation des parts, décision dans les quatre mois renouvelables, appel dans le mois.'
        ]
      }
    ],
    cles: [
      'La notion d’associé n’est pas définie par la loi : l’avocat associé n’est pas nécessairement gérant, ni nécessairement en exercice dans la structure.',
      'Obligations déclaratives : transmission des statuts au bâtonnier, information en cas de cession de parts ou de réduction de capital, transmission annuelle de la répartition du capital et des droits de vote.',
      'Les cotisations ordinales sont établies au nom de chaque associé, non de la structure.',
      'Rémunération des associés : dividendes imposés en revenus de capitaux mobiliers, mandat social en traitements et salaires, rémunération technique en bénéfices non commerciaux depuis 2024 pour les SEL.',
      'Modèles de répartition : égalitaire, lock‑step par paliers d’ancienneté, à la performance, ou mixte. Un système fondé sur la seule performance financière fragilise le cabinet.',
      'Clauses de départ : le principe de liberté contractuelle prévaut, sous réserve de ne porter atteinte ni à la liberté de l’avocat de se retirer et de s’établir ailleurs, ni au libre choix du client, d’ordre public.',
      'Le retrayant peut récupérer les données et documents des dossiers en cours, et une copie de sa messagerie ; les dossiers terminés restent au cabinet. Il n’a pas le droit de rétention reconnu au collaborateur.',
      'Prévention des conflits : logiciel dédié, ethical wall, information du cabinet pendant les deux ans suivant le départ pour les clients communs, secret applicable même en cas de litige.'
    ],
    cartes: [
      { q: 'Tous les associés d’une SCP sont‑ils gérants ?', r: 'Oui par principe, sauf dérogation statutaire. Ils administrent la société, ce qui est distinct de l’exercice de la profession.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle est la responsabilité des associés pour les dettes sociales en SCP ?', r: 'Conjointe mais indéfinie depuis 2011, auparavant solidaire. Les créanciers ne peuvent poursuivre un associé qu’après avoir vainement mis en demeure la société.', src: 'D. 27 nov. 1991' },
      { q: 'Un associé interdit temporairement plus de trois mois peut‑il être exclu ?', r: 'Il peut être contraint de se retirer par décision unanime des autres associés, hors ceux sanctionnés pour les mêmes faits, et doit alors céder ses parts.', src: 'D. 27 nov. 1991' },
      { q: 'Que se passe‑t‑il si tous les associés sont radiés ?', r: 'La structure est dissoute par extinction de son objet ; un administrateur est nommé pour terminer les dossiers.', src: 'D. 27 nov. 1991' },
      { q: 'Comment sont imposées les rémunérations techniques des associés de SEL ?', r: 'En bénéfices non commerciaux depuis 2024, alors qu’elles l’étaient auparavant en traitements et salaires. Le mandat social reste imposé en traitements et salaires.', src: 'CGI ; doctrine fiscale' },
      { q: 'Au nom de qui sont établies les cotisations ordinales ?', r: 'Au nom de chaque associé personnellement, et non de la structure, qui supporte en revanche l’assurance et la comptabilité.', src: 'D. 27 nov. 1991' },
      { q: 'Que peut emporter un associé qui se retire ?', r: 'Les données et documents des dossiers en cours et une copie de sa messagerie professionnelle. Les dossiers terminés restent au cabinet. Contrairement au collaborateur, il ne bénéficie d’aucun droit de rétention.', src: 'RIN ; usages' },
      { q: 'Une clause de garden leave est‑elle valable en droit français ?', r: 'Sa validité est douteuse. Elle interdit à l’avocat de travailler pour des clients du cabinet quitté pendant plusieurs mois, ce qui heurte la liberté d’établissement et le libre choix du client, principe d’ordre public.', src: 'Doctrine ; jurisprudence' },
      { q: 'Le bâtonnier peut‑il faire évaluer les parts d’un associé sortant ?', r: 'Oui, il peut désigner un expert pour évaluer les parts sociales ou actions dans le cadre de son arbitrage.', src: 'D. 27 nov. 1991' }
    ],
    qcm: [
      { q: 'En SCP, la responsabilité des associés pour les dettes sociales est :', o: ['solidaire', 'conjointe et indéfinie', 'limitée aux apports'], b: 1, e: 'Conjointe mais indéfinie depuis 2011 ; limitée aux apports en SEL et sociétés de droit commun.' },
      { q: 'Un associé interdit temporairement moins de trois mois :', o: ['perd sa qualité d’associé', 'voit sa vocation aux bénéfices réduite de moitié', 'conserve l’intégralité de ses droits'], b: 1, e: 'Réduction de moitié ; au‑delà de trois mois, retrait forcé possible à l’unanimité des autres associés.' },
      { q: 'Les cotisations ordinales sont dues par :', o: ['la structure', 'chaque associé personnellement', 'le gérant'], b: 1, e: 'Elles sont établies au nom de chaque associé. L’assurance et la comptabilité, elles, incombent à la structure.' },
      { q: 'La constitution devant le juge se fait :', o: ['au nom de la société', 'au nom personnel de l’avocat', 'au nom du gérant'], b: 1, e: 'La société postule par le ministère d’un avocat, la constitution restant personnelle.' }
    ],
    jury: [
      { q: 'Peut‑on être associé sans exercer dans la structure ?', r: 'Oui, et c’est une source fréquente de confusion. La qualité d’associé résulte de la détention de parts ; elle n’implique ni la gérance ni l’exercice. Un avocat peut être associé d’une SPFPL, qui est une holding et non une structure d’exercice, ou détenir des parts sans y exercer, sous réserve des règles propres à chaque forme — la SCP exigeant que tous les associés soient des avocats en exercice.' },
      { q: 'Que se passe‑t‑il quand un associé part avec ses clients ?', r: 'Rien d’illicite en soi : la clientèle n’est pas la propriété du cabinet et le client conserve le libre choix de son conseil, principe d’ordre public. Est fautif ce qui l’entoure : brutalité du départ désorganisant le cabinet, débauchage de collaborateurs, dénigrement. En cas de cession de clientèle, une obligation de garantie existe même sans stipulation, interdisant au cédant de démarcher la clientèle cédée, et elle s’impose à toute la structure qu’il rejoint.' },
      { q: 'Comment se rémunère un associé ?', r: 'La notion de bénéfice est floue en cabinet d’avocats, car elle mêle le fruit de l’activité professionnelle et la rémunération du capital. Quatre modèles : égalitaire dans les petites structures ; lock‑step, qui répartit à égalité entre associés de même ancienneté ; à la performance, individuelle et collective ; ou mixte. Un système fondé sur la seule facturation individuelle fragilise le collectif, en décourageant le partage de dossiers, la formation et l’apport à d’autres associés.' },
      { q: 'Une clause dissuadant le retrait est‑elle valable ?', r: 'Le principe est la liberté contractuelle entre associés : renonciation aux dividendes de l’exercice en cours, valorisation différenciée selon que le départ est amiable ou non, non‑sollicitation des clients, non‑débauchage, participation aux frais généraux pendant une durée limitée. La limite est double et d’ordre public : la clause ne peut porter atteinte à la liberté de l’avocat de se retirer pour s’établir ailleurs, ni au libre choix du client. L’appréciation est de proportionnalité.' },
      { q: 'Qu’est‑ce que la dépatrimonialisation du capital ?', r: 'Une pratique consistant à stipuler qu’aucune valeur de clientèle n’est attachée aux droits sociaux, le prix de rachat des parts étant calculé sur les seuls capitaux propres. Elle évite les négociations de sortie inextricables et le paradoxe consistant à indemniser un associé au titre d’une clientèle qui le suit. À défaut, un accord de compensation est généralement recherché, avec des conséquences fiscales à anticiper. L’AARPI échappe à la difficulté, faute de capital et de droits sociaux : l’associé y apporte sa clientèle en jouissance et la reprend sans incidence financière.' }
    ],
    cas: {
      e: 'Un associé d’une SELARL de six avocats est interdit temporairement d’exercice pendant six mois. Les cinq autres veulent l’exclure. Le peuvent‑ils, et à quelles conditions ?',
      r: 'Oui, sous conditions. L’interdiction temporaire étant supérieure ou égale à trois mois, l’associé peut être contraint de se retirer par décision unanime des autres associés, à l’exclusion de ceux qui auraient été sanctionnés pour les mêmes faits ou des faits connexes. Il doit alors céder ses parts, dans un délai de six mois. En cas de désaccord sur la valorisation, le bâtonnier peut désigner un expert. Sur la période courue avant le retrait, sa vocation aux bénéfices est réduite de moitié pour une interdiction de moins de trois mois, et supprimée au‑delà s’il ne se retire pas. Sur le plan de l’exercice, l’intéressé reste inscrit au tableau et conserve sa qualité d’avocat, mais ne peut accomplir aucun acte ni porter la robe, et son mandat CARPA est immédiatement révoqué : il faut donc désigner un administrateur provisoire, en priorité parmi les associés non interdits. Si tous les associés avaient été interdits, la structure elle‑même aurait été suspendue du tableau, puis radiée après un an.'
    }
  },

  {
    id: 'structures-exercice',
    titre: 'Les structures juridiques d’exercice de la profession d’avocat',
    sources: ['L. 31 déc. 1971, art. 7 et 8', 'Ord. n° 2023‑77 du 8 févr. 2023', 'D. 27 nov. 1991', 'RIN art. 17'],
    principes: ['indépendance', 'secret professionnel'],
    accroche: 'L’exercice collectif n’est ouvert à la profession que depuis le milieu du vingtième siècle : association en 1954, SCP en 1966, SEL en 1990, sociétés de droit commun en 2015. L’ordonnance du 8 février 2023, entrée en vigueur le 1er septembre 2024, a refondu l’ensemble — davantage sur la forme que sur le fond.',
    plan: [
      {
        t: 'I. Les structures dotées de la personnalité morale',
        pts: [
          'Société civile professionnelle : structure fermée, au moins deux associés avocats personnes physiques, tous gérants sauf clause contraire. Seule la société exerce, par l’intermédiaire de ses membres. Immatriculation au registre du commerce sous condition suspensive de l’inscription au tableau. Responsabilité conjointe et indéfinie pour les dettes sociales, imposition à l’impôt sur le revenu.',
          'Société d’exercice libéral : objet civil, forme commerciale, quatre variantes — SELARL, SELAS, SELAFA, SELCA — dont deux unipersonnelles. Plus de la moitié du capital et des droits de vote détenue par les professionnels exerçant en son sein ou par des membres des professions juridiques et judiciaires ou des SPFPL. Imposition à l’impôt sur les sociétés, droit de retrait ouvert depuis 2024.',
          'Sociétés de droit commun, ouvertes depuis 2015 : SARL, SA, SAS, à l’exclusion de toute forme conférant la qualité de commerçant. Depuis l’ordonnance de 2023, elles sont soumises aux dispositions des SEL, ce qui réduit l’intérêt du choix.',
          'Formalités communes : statuts écrits transmis au bâtonnier, demande d’inscription présentée collectivement, décision du conseil de l’ordre dans les deux mois, trois si les associés relèvent de barreaux différents.'
        ]
      },
      {
        t: 'II. Les structures sans personnalité morale et les structures interbarreaux',
        pts: [
          'Association d’avocats : société de fait sans personnalité morale, régie par une convention largement supplétive. Contrat écrit transmis au bâtonnier sous quinze jours, publication dans un journal d’annonces légales. Chaque associé est tenu des actes des autres à proportion de ses droits, sauf option pour l’AARPI, qui cantonne la responsabilité professionnelle à son auteur.',
          'Société en participation d’avocats : groupement sans personnalité morale ni capital social, les apports restant la propriété des associés, tenus indéfiniment à l’égard des tiers. Publication et mention obligatoires.',
          'Structures interbarreaux : association ou société réunissant des avocats de barreaux différents, inscrite au tableau de son siège et à l’annexe du tableau de chaque barreau concerné. Elle postule devant chaque tribunal par un associé qui y est inscrit.',
          'Sociétés de participations financières de professions libérales : holdings, éventuellement pluriprofessionnelles, inscrites sur la liste de l’ordre concerné, dont plus de la moitié du capital et des droits de vote doit être détenue par des professionnels exerçant l’une des professions de la société prise en participation.'
        ]
      }
    ],
    cles: [
      'Immatriculation et inscription : la demande d’immatriculation précède celle d’inscription, la société étant constituée sous condition suspensive de son inscription au tableau. Pour la SPE, l’inscription est une condition d’exercice et non d’immatriculation.',
      'Le conseil de l’ordre ne peut refuser l’inscription que si les statuts ne sont pas conformes ; deux mois pour statuer, trois si les associés relèvent de barreaux différents, appel dans le mois.',
      'La dénomination doit comporter la forme sociale et l’indication de la profession ; l’appellation « SCP d’avocats » est protégée, son emploi illicite étant puni d’un an d’emprisonnement et de 6 000 euros d’amende.',
      'Un associé de SCP ne peut être membre que d’une seule SCP et ne peut exercer à titre individuel, sauf clause statutaire contraire.',
      'Les SEL ne sont plus soumises à la règle de l’unicité d’exercice depuis 2016, sauf dérogation statutaire.',
      'Secret professionnel : partagé entre associés d’une structure d’exercice, qui s’informent mutuellement de leur activité ; non partagé en structure de moyens.',
      'Cession de parts : information du bâtonnier et accord des associés représentant les trois quarts des voix en SCP. En cas de décès, les ayants droit n’acquièrent pas la qualité d’associé et doivent céder dans les six mois.',
      'Une SPE ne peut conclure de contrat de collaboration libérale : seuls ses associés le peuvent.'
    ],
    cartes: [
      { q: 'Quelles sont les deux structures d’exercice les plus utilisées ?', r: 'La société civile professionnelle, première ouverte à la profession en 1966, et la société d’exercice libéral, créée en 1990 et aujourd’hui la plus répandue en raison de sa souplesse.', src: 'L. 1966 ; L. 1990' },
      { q: 'Combien d’associés faut‑il pour constituer une SCP ?', r: 'Au moins deux avocats personnes physiques. C’est une structure fermée : seuls des avocats en exercice peuvent en être associés.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle est la règle de détention du capital d’une SEL ?', r: 'Plus de la moitié du capital et des droits de vote doit être détenue par les professionnels exerçant au sein de la société, ou par des personnes exerçant une profession juridique ou judiciaire, ou par des SPFPL.', src: 'L. 31 déc. 1990 ; ord. 2023' },
      { q: 'Quelles sont les quatre formes de SEL ?', r: 'SELARL, SELAS, SELAFA et SELCA. Les deux premières admettent une variante unipersonnelle, SELARLU et SELASU.', src: 'L. 31 déc. 1990' },
      { q: 'Qu’est‑ce qu’une AARPI ?', r: 'Une association d’avocats à responsabilité professionnelle individuelle : l’option, prise à l’unanimité et publiée, cantonne la responsabilité professionnelle à son auteur, alors qu’en association simple chacun répond des actes des autres à proportion de ses droits.', src: 'L. 1971, art. 7' },
      { q: 'L’association d’avocats a‑t‑elle la personnalité morale ?', r: 'Non. C’est une société de fait, sans rapport avec l’association loi 1901 ; sa responsabilité ne peut être engagée, seule celle des associés peut l’être.', src: 'L. 31 déc. 1971, art. 7' },
      { q: 'Dans quel délai le conseil de l’ordre statue‑t‑il sur l’inscription d’une société ?', r: 'Deux mois à compter de la réception de la demande, portés à trois mois si les associés relèvent de barreaux différents. Appel dans le mois devant la cour d’appel.', src: 'D. 27 nov. 1991' },
      { q: 'Comment une structure interbarreaux postule‑t‑elle ?', r: 'Devant chaque tribunal par l’intermédiaire d’un associé inscrit au barreau établi près de ce tribunal. Si aucun associé n’y est inscrit, elle ne peut y postuler.', src: 'RIN art. 17.2' },
      { q: 'Qu’est‑ce qu’une SPFPL ?', r: 'Une société de participations financières de professions libérales : une holding, éventuellement pluriprofessionnelle, qui n’exerce pas la profession mais détient des participations. Plus de la moitié de son capital et de ses droits de vote doit être détenue par des professionnels exerçant l’une des professions de la société prise en participation.', src: 'L. 31 déc. 1990' },
      { q: 'Que devient la part d’un associé de SCP décédé ?', r: 'Ses ayants droit n’acquièrent pas la qualité d’associé et doivent céder les parts dans un délai de six mois.', src: 'D. 27 nov. 1991' }
    ],
    qcm: [
      { q: 'Une SCP peut être constituée par :', o: ['des avocats et des non‑avocats', 'des avocats personnes physiques exclusivement', 'des sociétés d’avocats'], b: 1, e: 'Structure fermée, au moins deux avocats personnes physiques en exercice.' },
      { q: 'L’association d’avocats :', o: ['a la personnalité morale', 'n’a pas la personnalité morale', 'est régie par la loi de 1901'], b: 1, e: 'Société de fait sans personnalité morale, sans lien avec l’association loi 1901.' },
      { q: 'La SEL est une société :', o: ['commerciale par son objet', 'civile par son objet, commerciale par sa forme', 'civile en tout point'], b: 1, e: 'Objet civil, forme commerciale, d’où l’application des règles des sociétés commerciales sauf dérogation.' },
      { q: 'L’ordonnance du 8 février 2023 est entrée en vigueur le :', o: ['1er janvier 2024', '1er septembre 2024', '1er janvier 2025'], b: 1, e: 'Réforme des sociétés de professions libérales réglementées, davantage de forme que de fond.' }
    ],
    jury: [
      { q: 'Pourquoi la SEL a‑t‑elle supplanté la SCP ?', r: 'Pour trois raisons. La souplesse : la SEL emprunte aux sociétés de capitaux, tous les associés n’étant pas gérants, ce qui permet une gouvernance différenciée. La responsabilité : elle est limitée aux apports pour les dettes sociales, alors qu’elle est indéfinie en SCP. Et la fiscalité : l’impôt sur les sociétés permet de conserver des résultats pour investir, alors que la SCP est transparente. La contrepartie est une comptabilité d’engagement plus lourde et une double imposition potentielle.' },
      { q: 'Quel intérêt subsiste‑t‑il à l’AARPI ?', r: 'La liberté contractuelle et l’absence de capital. La convention règle presque tout, les règles étant supplétives ; il n’y a ni parts sociales à valoriser ni négociation de sortie, l’associé apportant sa clientèle en jouissance et la reprenant sans incidence financière. L’option pour la responsabilité individuelle cantonne le risque professionnel. C’est la structure des cabinets qui veulent mutualiser sans se lier patrimonialement.' },
      { q: 'Une structure d’exercice peut‑elle être poursuivie disciplinairement ?', r: 'Oui, devant la juridiction du ressort de son siège, mais à la condition que des poursuites soient également engagées contre tous ses associés. Si ceux‑ci relèvent de barreaux différents, la juridiction ne se prononce qu’après avis de toutes les juridictions concernées. En pratique, les poursuites visent toujours les avocats ès qualités et aucune procédure n’a jamais été engagée contre une structure.' },
      { q: 'Le secret est‑il partagé entre associés ?', r: 'Oui dans une structure d’exercice : les associés s’informent mutuellement de leur activité, ce qui est nécessaire à la gestion des conflits d’intérêts et à l’organisation du travail. Il ne l’est pas dans une structure de moyens, où subsiste seulement une présomption simple de risque d’atteinte. Dans une SPE, le partage est possible mais suppose le consentement préalable et écrit du client, et il écarte la violation du secret sans rendre les échanges confidentiels.' },
      { q: 'L’ordonnance de 2023 simplifie‑t‑elle vraiment ?', r: 'Partiellement. Elle unifie le régime en alignant les sociétés de droit commun sur celui des SEL, ce qui réduit l’intérêt du choix entre elles, et ouvre un droit de retrait dans les SEL. Mais elle laisse subsister la SCP, la SEL, l’association, la société en participation, la SPE et la SPFPL, soit un paysage encore fragmenté. La doctrine considère que la société de droit commun, plus lisible, devrait à terme rendre inutile le maintien des SCP et des SEL.' }
    ],
    cas: {
      e: 'Quatre avocats, deux inscrits à Lyon et deux à Grenoble, veulent constituer une société commune, obtenir un dossier au tribunal judiciaire de Chambéry et y ouvrir une antenne. Que leur conseillez‑vous ?',
      r: 'La structure interbarreaux est possible, sous forme d’association ou de société. Elle sera inscrite au tableau de l’ordre de son siège social et à l’annexe du tableau de chacun des barreaux auxquels appartiennent les associés. Sur la postulation, le point est décisif : la société ne postule devant un tribunal que par l’intermédiaire d’un associé inscrit au barreau établi près de ce tribunal. Aucun associé n’étant inscrit à Chambéry, elle ne pourra pas y postuler, sauf à y compter un avocat collaborateur libéral inscrit à ce barreau, ou à recourir à un confrère postulant. L’ouverture d’une antenne à Chambéry ne changerait rien : un bureau secondaire n’affecte jamais les règles territoriales de postulation. Sur les formalités, il faut des statuts écrits transmis au bâtonnier, une demande d’inscription présentée collectivement par tous les associés au bâtonnier du siège, une décision dans les trois mois puisque les associés relèvent de barreaux différents, l’avis des conseils de l’ordre concernés, la comptabilité contrôlée au siège, et les contrats des collaborateurs salariés remis à la fois au conseil de l’ordre du salarié et à celui du siège.'
    }
  },

  {
    id: 'interprofessionnalite',
    titre: 'L’interprofessionnalité',
    sources: ['RIN art. 18', 'L. 6 août 2015', 'Ord. n° 2023‑77 du 8 févr. 2023'],
    principes: ['indépendance', 'secret professionnel', 'confraternité'],
    accroche: 'Les clients attendent une prise en charge globale de leurs dossiers, que le cloisonnement des professions rend difficile. Le droit a répondu par trois degrés d’intégration : la collaboration ponctuelle, le réseau durable, et depuis 2015 la société pluri‑professionnelle d’exercice, qui permet à des professions différentes d’exercer ensemble.',
    plan: [
      {
        t: 'I. Les formes souples : collaboration et réseau',
        pts: [
          'Collaboration interprofessionnelle conventionnelle, encadrée par l’article 18 du RIN et issue de la charte de 2006 conclue avec les experts‑comptables et le notariat. Principes : confraternité et courtoisie sous réserve de réciprocité, absence de critique des prestations de l’autre sans recueillir ses observations.',
          'Indépendance : l’avocat ne peut être subordonné à un autre professionnel dans l’exécution de sa mission, ni intervenir là où celui‑ci dispose d’une compétence exclusive.',
          'Secret professionnel : il ne s’atténue pas par la collaboration. Seules peuvent être échangées les informations recueillies dans le cadre de la mission commune et nécessaires à son exécution. Accord de confidentialité avec le professionnel non tenu au secret.',
          'Réseau pluridisciplinaire : organisation durable, formelle ou non, supposant un intérêt économique commun, présumé par des indices — logo, dénomination, clientèle commune, documents présentant le groupe. Déclaration obligatoire à l’Ordre, qui dispose de deux mois pour observations ; les conflits d’intérêts s’apprécient à l’échelle du réseau.'
        ]
      },
      {
        t: 'II. La forme intégrée : la société pluri‑professionnelle d’exercice',
        pts: [
          'Créée par la loi du 6 août 2015 : elle permet l’exercice en commun des professions d’avocat, d’avocat aux Conseils, de commissaire de justice, de notaire, d’administrateur et de mandataire judiciaires, de conseil en propriété industrielle, de commissaire aux comptes, d’expert‑comptable et de géomètre‑expert.',
          'Ce n’est pas une forme sociale nouvelle : elle peut revêtir toute forme, à l’exception de la SCP et de celles conférant la qualité de commerçant. L’inscription au tableau ou sur la liste de chaque profession est une condition d’exercice, non d’immatriculation.',
          'Composition : au moins un associé de chaque profession exercée ; capital et droits de vote détenus par des personnes physiques exerçant l’une de ces professions, au sein ou en dehors de la société, ou par des personnes morales dont le capital leur appartient en totalité. Un an pour régulariser, à défaut dissolution.',
          'Fonctionnement : statuts garantissant l’indépendance, la loyauté, la confidentialité et le secret ; partage d’informations subordonné au consentement préalable et écrit du client ; comptabilité distincte par profession ; information annuelle de chaque ordre ; responsabilité solidaire de la société avec l’associé.'
        ]
      }
    ],
    cles: [
      'Le partage d’honoraires avec un non‑avocat et la rémunération d’apport d’affaires restent prohibés dans toutes les formes d’interprofessionnalité.',
      'Facturation distincte par profession, interdiction du recouvrement pour le compte de l’autre professionnel et de la compensation.',
      'Les clauses de solidarité de responsabilité sont interdites dans la collaboration interprofessionnelle conventionnelle.',
      'Avant toute mission commune, se faire communiquer l’attestation d’assurance de l’autre professionnel et vérifier que ses propres prestations sont couvertes.',
      'La SPE ne peut exercer que par l’intermédiaire d’un membre ayant qualité pour exercer la profession concernée ; chaque associé répond sur l’ensemble de son patrimoine des actes qu’il accomplit.',
      'Obligation d’informer le client potentiel de la nature de l’ensemble des prestations disponibles, puis accord écrit mentionnant la ou les professions auxquelles il confie ses intérêts ; il demeure libre de s’adresser au professionnel de son choix.',
      'La SPE ne peut conclure de contrat de collaboration libérale : seuls ses associés le peuvent.',
      'Cessation d’exercice d’une profession représentée : les associés se retirent dans les six mois, prorogés de six mois pour un projet de rachat ; omission de la SPE si tous les associés d’une profession cessent d’exercer.'
    ],
    cartes: [
      { q: 'Quel article du RIN encadre la collaboration interprofessionnelle ?', r: 'L’article 18, issu pour l’essentiel de la charte de 2006 conclue entre le CNB, les experts‑comptables et le Conseil supérieur du notariat.', src: 'RIN art. 18' },
      { q: 'Qu’est‑ce qu’un réseau pluridisciplinaire ?', r: 'Une organisation durable, formelle ou non, entre avocats et membres d’autres professions libérales, réglementées ou non, pour favoriser des prestations complémentaires à une clientèle développée en commun. Il suppose un intérêt économique commun.', src: 'RIN art. 16' },
      { q: 'Quelles professions peuvent exercer au sein d’une SPE ?', r: 'Avocat, avocat au Conseil d’État et à la Cour de cassation, commissaire de justice, notaire, administrateur judiciaire, mandataire judiciaire, conseil en propriété industrielle, commissaire aux comptes, expert‑comptable et géomètre‑expert.', src: 'L. 6 août 2015' },
      { q: 'La SPE est‑elle une forme sociale nouvelle ?', r: 'Non. Elle peut revêtir toute forme, à l’exception de la SCP et de celles conférant la qualité de commerçant, et reste soumise aux règles de la forme choisie.', src: 'L. 6 août 2015' },
      { q: 'Le partage d’informations dans une SPE est‑il libre ?', r: 'Non : il suppose le consentement préalable et écrit du client, et se limite aux informations nécessaires à l’accomplissement des actes et à l’organisation du travail dans son intérêt.', src: 'L. 6 août 2015' },
      { q: 'Peut‑on partager ses honoraires avec un expert‑comptable ?', r: 'Non. Le partage d’honoraires avec un non‑avocat et la rémunération d’apport d’affaires restent prohibés, y compris en interprofessionnalité. La facturation doit être distincte par profession.', src: 'RIN art. 11.3 et 18' },
      { q: 'Quelle information l’avocat doit‑il au client dans une SPE ?', r: 'La nature de l’ensemble des prestations que la société peut lui fournir, puis un accord écrit mentionnant la ou les professions auxquelles il entend confier ses intérêts. Il reste libre de s’adresser au professionnel de son choix.', src: 'L. 6 août 2015' },
      { q: 'Que se passe‑t‑il si la composition d’une SPE devient irrégulière ?', r: 'Elle dispose d’un an pour régulariser ; à défaut, tout intéressé peut en demander la dissolution.', src: 'L. 6 août 2015' },
      { q: 'Quelle est la responsabilité dans une SPE ?', r: 'Chaque associé répond sur l’ensemble de son patrimoine des actes professionnels qu’il accomplit, la société étant solidairement responsable avec lui et devant souscrire une assurance couvrant ces risques.', src: 'L. 6 août 2015' }
    ],
    qcm: [
      { q: 'Le partage d’honoraires avec un expert‑comptable est :', o: ['autorisé en SPE', 'toujours prohibé', 'autorisé après accord du bâtonnier'], b: 1, e: 'La prohibition subsiste ; chaque profession facture distinctement.' },
      { q: 'La SPE a été créée par :', o: ['la loi du 31 décembre 1990', 'la loi du 6 août 2015', 'l’ordonnance du 8 février 2023'], b: 1, e: 'Loi Macron, puis modifiée par l’ordonnance de 2023.' },
      { q: 'Dans une SPE, le partage d’informations suppose :', o: ['rien de particulier entre associés', 'le consentement préalable et écrit du client', 'l’autorisation du bâtonnier'], b: 1, e: 'Consentement préalable et écrit, révocable, limité à ce qui est nécessaire dans l’intérêt du client.' },
      { q: 'Un réseau pluridisciplinaire est :', o: ['une structure d’exercice', 'une organisation sans exercice commun, soumise à déclaration', 'interdit aux avocats'], b: 1, e: 'Il n’exerce pas la profession ; la déclaration à l’Ordre est obligatoire lorsque toutes les professions ne sont pas réglementées.' }
    ],
    jury: [
      { q: 'L’interprofessionnalité menace‑t‑elle l’indépendance de l’avocat ?', r: 'Le risque existe et le droit l’encadre plutôt qu’il ne l’interdit. Trois garde‑fous : l’avocat ne peut être subordonné à un autre professionnel dans l’exécution de sa mission ; il ne peut intervenir là où celui‑ci dispose d’une compétence exclusive ; les statuts de la SPE doivent garantir l’indépendance et le respect des règles propres à chaque profession. La détention du capital est en outre réservée à des professionnels, ce qui exclut l’entrée d’investisseurs extérieurs.' },
      { q: 'Le secret professionnel survit‑il à la SPE ?', r: 'Il est aménagé, non supprimé. Le partage d’informations suppose le consentement préalable et écrit du client, révocable, et se limite à ce qui est nécessaire à l’accomplissement des actes dans son intérêt. Une nuance importante : ce mécanisme écarte la violation du secret entre professionnels, mais ne rend pas les échanges eux‑mêmes confidentiels au sens de la règle applicable entre avocats. Hors SPE, dans une simple collaboration, le secret ne s’atténue pas du tout et un accord de confidentialité s’impose.' },
      { q: 'Pourquoi la SPE reste‑t‑elle peu utilisée ?', r: 'Parce qu’elle cumule les contraintes de plusieurs déontologies : au moins un associé de chaque profession, comptabilité distincte par profession, information annuelle de chaque ordre, contrôles par chaque autorité professionnelle, et des règles de conflit d’intérêts qui s’apprécient à l’échelle de la société. S’y ajoute la question culturelle : le commissaire aux comptes doit être indépendant de ceux qu’il certifie, ce qui limite en pratique les combinaisons possibles.' },
      { q: 'Comment sont gérés les conflits d’intérêts dans un réseau ?', r: 'Ils s’apprécient au niveau du réseau tout entier, et non du seul cabinet. C’est la conséquence de l’intérêt économique commun qui le caractérise : logo ou dénomination communs, moyens d’exploitation partagés, conventions de coopération, clientèle développée ensemble. Le professionnel doit informer les autres dès qu’il a connaissance d’un conflit possible, et la dénomination du cabinet doit rester distincte de celle du réseau pour ne pas créer de confusion.' },
      { q: 'Quelle est la limite du service global ?', r: 'Le libre choix du client, principe d’ordre public. La SPE doit l’informer de l’ensemble des prestations disponibles, mais il demeure libre de s’adresser au professionnel de son choix, y compris hors de la société. Le service global est une offre, jamais une captation. C’est aussi ce qui justifie l’exigence d’un accord écrit mentionnant les professions auxquelles il confie ses intérêts.' }
    ],
    cas: {
      e: 'Un avocat et un expert‑comptable partagent des locaux, un logo commun, un site présentant leurs « compétences pluridisciplinaires », et se répartissent les honoraires d’un dossier de cession d’entreprise à parts égales. Qu’en pensez‑vous ?',
      r: 'Deux qualifications et deux fautes. Sur la qualification : le logo commun, la présentation conjointe et la clientèle développée en commun constituent des indices caractérisant un intérêt économique commun. Il s’agit donc d’un réseau pluridisciplinaire, et non d’une simple collaboration ponctuelle. Il devait faire l’objet d’une déclaration à l’Ordre du barreau d’inscription, comprenant l’organigramme, la liste des membres, le mode de participation aux frais et aux résultats et les mesures de contrôle interne ; l’Ordre disposait de deux mois pour formuler ses observations. La dénomination doit en outre rester distincte de celle du réseau pour ne pas créer de confusion entre les professions. Sur les honoraires : la répartition à parts égales est un partage d’honoraires avec un non‑avocat, prohibé en toute hypothèse, y compris en interprofessionnalité. La règle impose une facturation distincte et transparente par profession, l’interdiction de recouvrer pour le compte de l’autre et de prélever ses honoraires sur les siens. S’ajoutent deux vérifications omises : la communication réciproque des attestations d’assurance, et l’appréciation des conflits d’intérêts à l’échelle du réseau.'
    }
  }
];
