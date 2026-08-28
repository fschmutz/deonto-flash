// Bloc 5 - Les honoraires, la comptabilite et la fiscalite (4 sujets).
// Sources publiques : loi n° 71-1130 du 31 decembre 1971 (art. 10), decret n° 91-1197 du
// 27 novembre 1991 (art. 174 s. et 231 s.), RIN art. 11 et 12, code general des impots,
// loi du 6 aout 2015.

export const HONORAIRES = [
  {
    id: 'honoraires',
    titre: 'Les honoraires',
    sources: ['L. 31 déc. 1971, art. 10', 'RIN art. 11', 'D. 27 nov. 1991, art. 174 s.', 'L. 6 août 2015'],
    principes: ['délicatesse', 'probité', 'désintéressement', 'indépendance', 'humanité', 'loyauté'],
    accroche: 'Derrière la question des honoraires se joue celle de l’indépendance de l’avocat et de la confiance du client. Le principe est la liberté de fixation, mais elle est doublement encadrée : par des critères légaux, et par une obligation de transparence dont la loi du 6 août 2015 a fait une convention écrite obligatoire.',
    plan: [
      {
        t: 'I. La détermination : liberté encadrée et convention obligatoire',
        pts: [
          'Convention d’honoraires obligatoire depuis la loi du 6 août 2015, sauf urgence, force majeure et aide juridictionnelle totale. À défaut, l’honoraire reste dû si les diligences sont établies, mais la responsabilité de l’avocat peut être engagée.',
          'Obligation d’information précontractuelle et en cours d’exécution : modalités de fixation, évolution prévisible, compte détaillé avant tout règlement définitif, conditions générales, information sur le médiateur de la consommation.',
          'Critères de l’article 11 du RIN : situation de fortune du client, temps consacré, difficulté de l’affaire, frais exposés, notoriété et titres de l’avocat, diligences accomplies, importance des intérêts en cause.',
          'Formes : au temps passé, avec relevé de diligences ; forfaitaire ; de résultat, seulement en complément d’un honoraire de diligence non dérisoire, l’interdiction du pacte de quota litis frappant de nullité toute rémunération dépendant du seul résultat.'
        ]
      },
      {
        t: 'II. Le versement, le recouvrement et la contestation',
        pts: [
          'Provisions raisonnables admises ; paiement par le client ou un tiers ; encaissement par un tiers sur convention préalable. Espèces plafonnées à 1 000 euros pour un débiteur fiscalement domicilié en France ou agissant à titre professionnel, 15 000 euros à défaut.',
          'Interdictions : partage d’honoraires avec un non‑avocat, rémunération d’apport d’affaires avec un tiers, prélèvement sur le compte CARPA sans accord écrit et préalable du client, dépôt des honoraires sur la CARPA.',
          'Prescription de l’action en recouvrement : cinq ans à compter de la fin de mission ; deux ans si le client est un consommateur ; quatre ans contre une personne publique.',
          'Contestation : procédure d’ordre public devant le bâtonnier, qui statue dans les quatre mois renouvelables une fois, puis recours dans le mois devant le premier président de la cour d’appel. La charge de la preuve du montant pèse toujours sur l’avocat.'
        ]
      }
    ],
    cles: [
      'L’honoraire librement payé après service rendu n’est pas réductible, sous trois conditions : acceptation libre, postérieure au service rendu, au vu d’une facture conforme — la preuve incombant à l’avocat.',
      'Le juge de l’honoraire est le bâtonnier en première instance, le premier président de la cour d’appel en appel. Sa compétence se limite au montant et au recouvrement.',
      'Il n’est pas compétent pour la validité d’un mandat, la détermination du débiteur ou la responsabilité de l’avocat ; il l’est en revanche sur la validité et l’interprétation de la convention d’honoraires elle‑même, y compris les clauses abusives, qu’il doit relever d’office.',
      'Exécution provisoire : le bâtonnier peut rendre sa décision exécutoire jusqu’à 1 500 euros, ou pour la part non contestée au‑delà ; l’honoraire complémentaire de résultat en est exclu. L’exécution forcée suppose la formule exécutoire du président du tribunal judiciaire.',
      'Un honoraire de résultat de l’ordre de dix pour cent est généralement tenu pour raisonnable. Deux honoraires de résultat pour une même affaire sont interdits.',
      'Client sous tutelle ou curatelle : l’honoraire de résultat est un acte de disposition et suppose l’autorisation du juge des tutelles ou du conseil de famille, à peine de nullité de la convention.',
      'Aide juridictionnelle totale : aucun honoraire, sauf retour à meilleure fortune constaté après décision passée en force de chose jugée et retrait de l’aide. Aide partielle : convention possible, transmise au bâtonnier dans les quinze jours à peine de nullité, sans honoraire de résultat.',
      'Le juge peut refuser d’évaluer les diligences manifestement inutiles, mais il ne juge pas l’opportunité des autres. Il n’est pas tenu de s’expliquer sur chacun des critères.'
    ],
    cartes: [
      { q: 'Depuis quelle loi la convention d’honoraires est‑elle obligatoire ?', r: 'La loi du 6 août 2015, sauf urgence, force majeure ou aide juridictionnelle totale.', src: 'L. 6 août 2015' },
      { q: 'Quels sont les critères légaux de fixation des honoraires ?', r: 'Situation de fortune du client, difficulté de l’affaire, frais exposés, notoriété et titres de l’avocat, temps consacré, diligences accomplies et importance des intérêts en cause.', src: 'L. 1971, art. 10 ; RIN art. 11' },
      { q: 'Qu’est‑ce que le pacte de quota litis ?', r: 'La fixation des honoraires en fonction du seul résultat à intervenir. Il est interdit et frappe la convention de nullité ; seul l’honoraire complémentaire de résultat, s’ajoutant à un honoraire de diligence non dérisoire, est admis.', src: 'RIN art. 11.3' },
      { q: 'Qui est le juge de l’honoraire ?', r: 'Le bâtonnier en première instance, le premier président de la cour d’appel en appel. Sa compétence, d’ordre public, se limite au montant et au recouvrement.', src: 'D. 27 nov. 1991, art. 174 s.' },
      { q: 'Dans quel délai le bâtonnier statue‑t‑il sur une contestation d’honoraires ?', r: 'Quatre mois, prorogeables de quatre mois par décision motivée. Recours dans le mois devant le premier président de la cour d’appel.', src: 'D. 27 nov. 1991' },
      { q: 'Jusqu’à quel montant le bâtonnier peut‑il rendre sa décision exécutoire ?', r: '1 500 euros, ou au‑delà pour la part non contestée par les parties ; il peut aussi le décider pour un montant supérieur si l’affaire le justifie, sauf pour l’honoraire complémentaire de résultat.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle est la prescription de l’action en recouvrement d’honoraires ?', r: 'Cinq ans à compter de la fin de mission ; deux ans si le client est un consommateur ; quatre ans contre une personne publique.', src: 'C. civ. ; C. consom.' },
      { q: 'Quel est le plafond des paiements en espèces ?', r: '1 000 euros lorsque le débiteur a son domicile fiscal en France ou agit pour les besoins d’une activité professionnelle ; 15 000 euros s’il justifie ne pas y avoir son domicile fiscal.', src: 'C. mon. fin.' },
      { q: 'Peut‑on prélever ses honoraires sur le compte CARPA ?', r: 'Non, sauf accord écrit et préalable du client. À défaut, il s’agit d’un manquement grave, susceptible de poursuites disciplinaires.', src: 'L. 31 déc. 1971, art. 27 ; D. 27 nov. 1991, art. 240' },
      { q: 'À qui incombe la preuve du montant des honoraires ?', r: 'Toujours à l’avocat, même lorsqu’il n’est pas à l’origine de la demande.', src: 'Jurisprudence' }
    ],
    qcm: [
      { q: 'La convention d’honoraires n’est pas obligatoire :', o: ['jamais', 'en cas d’urgence, de force majeure ou d’AJ totale', 'pour les clients professionnels'], b: 1, e: 'Trois exceptions seulement. Même en AJ totale, il est prudent d’en signer une en cas de retour à meilleure fortune.' },
      { q: 'Le bâtonnier statue sur une contestation d’honoraires dans :', o: ['2 mois', '4 mois prorogeables une fois', '6 mois'], b: 1, e: 'Quatre mois, prorogeables de quatre mois par décision motivée ; à défaut, saisine du premier président.' },
      { q: 'L’honoraire librement payé après service rendu :', o: ['est toujours réductible', 'n’est pas réductible sous trois conditions', 'est réductible sur demande du bâtonnier'], b: 1, e: 'Acceptation libre, postérieure au service rendu, au vu d’une facture conforme — la preuve pesant sur l’avocat.' },
      { q: 'Le juge de l’honoraire est compétent pour :', o: ['la responsabilité de l’avocat', 'la validité de la convention d’honoraires', 'la détermination du débiteur'], b: 1, e: 'Il connaît de la validité et de l’interprétation de la convention, mais ni de la responsabilité ni du débiteur.' }
    ],
    jury: [
      { q: 'Pourquoi le pacte de quota litis est‑il interdit ?', r: 'Parce qu’il transforme l’avocat en partenaire financier de la cause. Trois principes s’y opposent : le désintéressement, qui impose de faire primer l’intérêt du client ; l’indépendance, l’avocat devant pouvoir conseiller une transaction défavorable à ses propres intérêts ; et la modération. La sanction est la nullité de la convention. L’honoraire complémentaire de résultat reste admis, à condition que l’honoraire de diligence ne soit pas dérisoire, ce qui contournerait la prohibition.' },
      { q: 'Un simple taux horaire suffit‑il dans une convention ?', r: 'Non, et c’est une clause désormais regardée comme abusive. Le client doit pouvoir apprécier le risque et la portée de son engagement : il faut donc un nombre d’heures estimé à titre prévisionnel, un relevé de diligences et une information régulière. La Cour de cassation est réticente à l’égard des honoraires au temps passé non documentés ; à défaut de relevé, le juge fixera l’honoraire selon les critères légaux.' },
      { q: 'Le client conteste vos honoraires. Décrivez la procédure.', r: 'Réclamation adressée au bâtonnier par lettre recommandée ou remise contre récépissé, par toute partie — client, héritier ou tiers ayant payé. Le bâtonnier statue dans les quatre mois, prorogeables une fois par décision motivée ; à défaut, il est dessaisi au profit du premier président de la cour d’appel, également juge d’appel dans le mois de la notification. La procédure est orale et contradictoire, sans représentation obligatoire, et la charge de la preuve du montant pèse sur moi. La compétence est d’ordre public : aucune clause compromissoire ne peut l’écarter.' },
      { q: 'Que se passe‑t‑il si vous êtes dessaisi en cours de dossier ?', r: 'La convention devrait avoir prévu une clause de dessaisissement, à défaut de quoi l’article 10 du code de déontologie donne droit au paiement en fonction du travail accompli et, le cas échéant, de la contribution au résultat obtenu. L’honoraire de résultat devient caduc, sauf stipulation prévoyant son versement avant le résultat définitif. Les honoraires de diligence déjà acceptés pour service rendu me sont acquis ; les autres seront évalués selon les critères légaux. Le juge, une fois saisi, doit obligatoirement évaluer s’il constate des diligences.' },
      { q: 'Un client insolvable vous demande de le défendre. Quelle est votre obligation ?', r: 'Tenir compte de sa situation de fortune dans la fixation de mes honoraires, ce qui est à la fois un critère légal et une exigence de délicatesse et d’humanité. Je dois surtout l’informer des dispositions relatives à l’aide juridictionnelle et vérifier qu’il ne bénéficie pas d’une assurance de protection juridique. Sous aide totale, je ne peux solliciter aucun honoraire ; sous aide partielle, une convention est possible, à transmettre au bâtonnier dans les quinze jours à peine de nullité, sans honoraire de résultat.' }
    ],
    cas: {
      e: 'Vous concluez avec un client une convention prévoyant 500 euros d’honoraire de diligence et 25 % des sommes obtenues. Le client, placé sous curatelle depuis un an, signe seul. Vous obtenez 200 000 euros. Que craignez‑vous ?',
      r: 'Trois difficultés cumulatives. Premièrement, la nullité pour défaut d’autorisation : l’honoraire de résultat est un acte de disposition ; le client étant sous curatelle, l’autorisation du juge des tutelles ou du conseil de famille était requise, à peine de nullité de la convention. Deuxièmement, la disproportion entre 500 euros de diligence et 25 % de résultat, soit 50 000 euros. Un honoraire de diligence dérisoire fait basculer la convention dans le pacte de quota litis, prohibé et frappé de nullité : l’honoraire de base doit être réel, même modeste au regard de la situation économique du client. Un taux de résultat de l’ordre de dix pour cent est généralement tenu pour raisonnable ; vingt‑cinq pour cent appelle une justification sérieuse. Troisièmement, le juge de l’honoraire, saisi par le client, pourra réduire les honoraires manifestement exagérés, et il doit relever d’office le caractère abusif d’une clause. S’y ajoute, sur le terrain déontologique, un manquement possible à la délicatesse, à la modération et au désintéressement, la jurisprudence disciplinaire ayant sanctionné une convention de résultat conclue avec une personne vulnérable.'
    }
  },

  {
    id: 'comptabilite',
    titre: 'La comptabilité',
    sources: ['D. 27 nov. 1991, art. 231 s.', 'RIN art. 11.7', 'C. com.'],
    principes: ['probité', 'prudence', 'confraternité'],
    accroche: 'La comptabilité de l’avocat n’est pas seulement une obligation fiscale : c’est un instrument déontologique. Elle rend traçables les maniements de fonds, elle prouve la transparence des honoraires, elle permet le contrôle ordinal. Les manquements comptables comptent parmi ceux qui donnent lieu aux sanctions les plus lourdes.',
    plan: [
      {
        t: 'I. Les obligations comptables',
        pts: [
          'Comptabilité générale retraçant recettes et charges du cabinet, hors taxes et toutes taxes comprises, avec registre des immobilisations et des amortissements. Livre‑journal servi au jour le jour sous le régime de la déclaration contrôlée ; simple livre des recettes en micro‑BNC.',
          'Livre des comptes clients : un compte détaillé par affaire, mentionnant honoraires et sommes reçues avec leur affectation, ventilé entre débours, frais et honoraires. Copie remise au client avant tout règlement définitif ou à sa demande.',
          'Comptabilités spéciales : maniements de fonds via la CARPA, fiducie comptabilisée séparément, compte bancaire dédié pour l’entrepreneur individuel, comptabilité distincte par profession dans une SPE, comptabilité distincte pour l’activité de lobbyiste.',
          'Comptabilité de trésorerie pour l’exercice individuel et les structures imposées au niveau des associés ; comptabilité d’engagement pour les structures soumises à l’impôt sur les sociétés, avec application du plan comptable général. Dépôt des comptes annuels dans le mois de la clôture pour les structures d’exercice.'
        ]
      },
      {
        t: 'II. Le contrôle et les obligations financières',
        pts: [
          'Contrôle ordinal : le conseil de l’ordre vérifie la tenue de la comptabilité au titre de sa mission générale de surveillance ; en pratique le bâtonnier ou son délégué y procède. Le contrôle est systématique, contradictoire, et n’a pas à être motivé quant au choix de l’avocat contrôlé.',
          'Le secret professionnel n’est pas opposable au contrôle ordinal. L’avocat doit présenter sa comptabilité à première demande du bâtonnier, ou un extrait à la demande du président du tribunal judiciaire ou du premier président en matière d’honoraires. Le refus est un manquement à l’honneur et à la probité.',
          'Structures interbarreaux et cabinets disposant d’un bureau secondaire dans un autre barreau : le contrôle relève du conseil de l’ordre du siège ou de l’établissement principal, qui peut se faire communiquer les documents relatifs aux autres barreaux.',
          'Obligations financières : cotisations à l’Ordre, au CNB, à la CNBF, droits de plaidoirie ou contribution équivalente, cotisation CARPA. Deux assurances obligatoires — responsabilité civile professionnelle et garantie de représentation des fonds. Défaut de paiement : omission facultative pour les cotisations, obligatoire pour les assurances.'
        ]
      }
    ],
    cles: [
      'Le compte détaillé par affaire est une obligation déontologique autant que comptable : il est remis au client avant tout règlement définitif.',
      'Factures et notes d’honoraires doivent être nominatives et muettes sur la nature des prestations, pour être communicables à l’administration ; le relevé de diligences est un document séparé, remis au seul client.',
      'Les règlements pécuniaires transitent par la CARPA et jamais par le compte du cabinet ; à l’inverse, les honoraires, frais et débours ne transitent jamais par la CARPA.',
      'La comptabilité doit constater les versements de fonds et les remises d’effets, chaque versement donnant lieu à un accusé de réception ou à une quittance.',
      'Le contrôle doit avoir fait l’objet d’une délibération du conseil de l’ordre ; l’extrait transmis doit permettre à l’avocat de vérifier la régularité de sa composition, pour garantir l’impartialité et les droits de la défense.',
      'Le contrôle peut porter sur les comptes personnels de l’avocat lorsqu’il s’agit de vérifier l’absence de confusion des patrimoines.',
      'Le défaut de paiement des obligations financières peut, au‑delà de l’omission, caractériser un manquement à la probité et à la confraternité, la solidarité entre avocats fondant les cotisations.',
      'Une erreur comptable isolée n’est pas en soi une faute : l’appréciation est in concreto. Des incohérences importantes ou l’absence de comptabilité apparente le sont.'
    ],
    cartes: [
      { q: 'Que doit contenir le compte détaillé par affaire ?', r: 'Les honoraires et toutes les sommes reçues par l’avocat avec leur affectation, ventilés entre débours, autres frais et honoraires. Une copie est remise au client avant tout règlement définitif ou à sa demande.', src: 'RIN art. 11.7' },
      { q: 'Une facture d’avocat peut‑elle détailler la nature des prestations ?', r: 'Non, si elle doit être communicable à l’administration : les factures et notes d’honoraires sont nominatives et muettes sur la nature des prestations. Le relevé de diligences est un document séparé, remis au seul client.', src: 'Jurisprudence CE ; RIN' },
      { q: 'Le secret professionnel est‑il opposable au contrôle ordinal ?', r: 'Non. L’avocat doit présenter sa comptabilité à première demande du bâtonnier ; le refus caractérise un manquement à l’honneur et à la probité.', src: 'D. 27 nov. 1991, art. 231 s.' },
      { q: 'Quelle comptabilité pour un avocat individuel ?', r: 'Une comptabilité de trésorerie, dite d’encaissement, avec livre‑journal servi au jour le jour sous le régime de la déclaration contrôlée ; simple livre des recettes en micro‑BNC.', src: 'CGI ; D. 1991' },
      { q: 'Qui contrôle la comptabilité d’une société interbarreaux ?', r: 'Le conseil de l’ordre du lieu du siège social ou de l’établissement principal, qui peut se faire communiquer les documents relatifs à l’activité dans les autres barreaux.', src: 'D. 27 nov. 1991' },
      { q: 'Quelles sont les deux assurances obligatoires ?', r: 'La responsabilité civile professionnelle et la garantie de représentation des fonds, effets ou valeurs reçus. Le défaut emporte omission obligatoire du tableau.', src: 'L. 1971 ; D. 1991' },
      { q: 'Les honoraires transitent‑ils par la CARPA ?', r: 'Non. Seuls les règlements pécuniaires y transitent, et sans passer par le compte du cabinet ; les honoraires, frais et débours ne doivent jamais y être déposés.', src: 'L. 31 déc. 1971, art. 27 ; D. 27 nov. 1991, art. 235 s.' },
      { q: 'Une erreur comptable est‑elle une faute disciplinaire ?', r: 'Pas en soi. L’appréciation est in concreto : ce sont les incohérences importantes ou l’absence de comptabilité apparente qui caractérisent un manquement à la probité, à la prudence et à la compétence.', src: 'D. 27 nov. 1991' },
      { q: 'Le contrôle de comptabilité doit‑il être motivé ?', r: 'Le choix de l’avocat contrôlé n’a pas à être motivé, le contrôle étant systématique et régulier. Mais il doit résulter d’une délibération du conseil de l’ordre, dont un extrait est transmis pour permettre de vérifier la régularité de sa composition.', src: 'Jurisprudence' }
    ],
    qcm: [
      { q: 'Les règlements pécuniaires doivent être déposés :', o: ['sur le compte du cabinet', 'sans délai à la CARPA', 'sur un compte séquestre bancaire'], b: 1, e: 'Sans délai et sans transiter par le compte du cabinet, sous peine d’abus de confiance.' },
      { q: 'Une note d’honoraires communicable à l’administration doit :', o: ['détailler chaque diligence', 'être nominative et muette sur la nature des prestations', 'être anonymisée'], b: 1, e: 'Nominative — identité, montant, date, forme du versement — mais sans indication sur la nature des prestations.' },
      { q: 'Le refus de présenter sa comptabilité au bâtonnier :', o: ['est un droit tiré du secret', 'est un manquement à l’honneur et à la probité', 'suppose une autorisation judiciaire'], b: 1, e: 'Le secret n’est pas opposable au contrôle ordinal.' },
      { q: 'Le défaut d’assurance de responsabilité civile professionnelle entraîne :', o: ['une omission facultative', 'une omission obligatoire', 'un simple avertissement'], b: 1, e: 'C’est l’un des deux cas d’omission obligatoire, avec l’incompatibilité.' }
    ],
    jury: [
      { q: 'Pourquoi la comptabilité est‑elle une question déontologique ?', r: 'Parce qu’elle est le support probatoire de trois obligations. Elle rend traçables les maniements de fonds, ce qui protège le client et la CARPA. Elle matérialise la transparence des honoraires, par le compte détaillé remis avant tout règlement définitif. Et elle permet le contrôle ordinal, expression de l’autorégulation. Les manquements comptables — détournement, cavalerie, maniements hors CARPA — figurent parmi ceux qui donnent lieu aux sanctions les plus sévères, souvent la radiation précédée d’une suspension provisoire.' },
      { q: 'Comment concilier le secret professionnel et le contrôle fiscal ?', r: 'Par une distinction opératoire. L’administration peut connaître l’identité du client, le montant, la date et la forme du versement, éléments qui figurent sur une facture nominative. Elle ne peut exiger aucun renseignement sur la nature des prestations, fût‑il sommaire, ni sur l’identité de l’affaire. La technique consiste donc à établir des factures muettes et un relevé de diligences distinct, remis au seul client. Un redressement fondé sur des éléments couverts par le secret doit être annulé.' },
      { q: 'Le bâtonnier peut‑il contrôler vos comptes personnels ?', r: 'Oui, lorsque c’est nécessaire pour vérifier l’absence de confusion entre le patrimoine professionnel et le patrimoine personnel, question devenue centrale depuis la séparation automatique des patrimoines de l’entrepreneur individuel. La présomption légale est que le patrimoine professionnel comprend les éléments enregistrés comptablement : c’est donc la comptabilité qui rend la séparation opposable, ce qui justifie l’étendue du contrôle.' },
      { q: 'Que se passe‑t‑il si un avocat ne paie plus ses cotisations ?', r: 'Deux voies, non exclusives. La voie administrative : l’omission facultative du tableau, prononcée par le conseil de l’ordre qui apprécie la bonne foi et la capacité de rétablissement, sans qu’un titre exécutoire soit exigé. La voie disciplinaire : le manquement aux obligations financières caractérise, sauf motif légitime, une atteinte à la probité et à la confraternité, la cotisation étant une obligation de solidarité entre avocats. Les sanctions peuvent aller jusqu’à la radiation.' },
      { q: 'Le bâtonnier a‑t‑il un rôle de prévention ?', r: 'Oui, et il est devenu essentiel. Alerté d’une difficulté par un contrôle de comptabilité ou par un retard de cotisations à l’Ordre, au CNB ou à la CNBF, il reçoit l’avocat, l’informe des craintes pesant sur son cabinet, entend ses explications et l’oriente. Pour l’entreprise individuelle, le président du tribunal judiciaire doit informer l’Ordre lorsqu’il a connaissance de difficultés. L’objectif est la prise de conscience avant la cessation des paiements.' }
    ],
    cas: {
      e: 'Un avocat reçoit un chèque de 60 000 euros au titre d’une transaction pour son client, le dépose sur son compte professionnel, prélève 12 000 euros d’honoraires conformément à sa convention, et reverse le solde. Le client ne se plaint pas. Que dites‑vous ?',
      r: 'Deux fautes distinctes, indépendantes de l’absence de plainte. Le dépôt sur le compte professionnel d’abord : le règlement pécuniaire devait être déposé sans délai à la CARPA, sans transiter par le compte du cabinet. Ce maniement hors CARPA caractérise un manquement à la probité, à l’honneur et à la prudence, et constitue un abus de confiance au préjudice de la CARPA, puni de cinq ans d’emprisonnement et 375 000 euros d’amende. Le prélèvement d’honoraires ensuite : même prévu par la convention, il suppose l’accord écrit et préalable du client au moment du prélèvement. Une convention générale ne vaut pas autorisation particulière, et le prélèvement sur le compte CARPA est en principe interdit. La procédure correcte était le dépôt à la CARPA sur un sous‑compte ouvert au nom de l’affaire, une demande de retrait justifiée par le lien avec l’acte accompli, la CARPA éditant elle‑même le règlement, puis une facturation séparée des honoraires réglés hors CARPA. L’absence de préjudice et l’absence de plainte sont indifférentes : le bâtonnier peut se saisir d’office et ces manquements figurent parmi les plus lourdement sanctionnés.'
    }
  },

  {
    id: 'fiscalite',
    titre: 'La fiscalité de l’avocat',
    sources: ['CGI', 'C. mon. fin.', 'D. 27 nov. 1991', 'Jurisprudence CE sur le droit de communication'],
    principes: ['probité', 'prudence', 'secret professionnel'],
    accroche: 'L’avocat est un auxiliaire de justice, mais aussi un professionnel libéral exerçant une activité économique. Il est donc assujetti au droit fiscal commun, avec une particularité qui structure tout le sujet : le secret professionnel limite ce que l’administration peut exiger de lui.',
    plan: [
      {
        t: 'I. Les impositions applicables selon le mode d’exercice',
        pts: [
          'Impôt sur le revenu : bénéfices non commerciaux pour l’avocat individuel et les sociétés de personnes — association, AARPI, SCP. Micro‑BNC sous le seuil, avec abattement forfaitaire de 34 % et comptabilité réduite à un livre des recettes ; déclaration contrôlée au‑delà ou sur option, avec déduction des charges réelles et report des déficits.',
          'Traitements et salaires : l’avocat salarié, avec abattement forfaitaire de 10 % et prélèvement à la source par l’employeur ; l’associé au titre de son mandat social.',
          'Impôt sur les sociétés : SEL, sociétés de droit commun, SPFPL, et sur option l’entrepreneur individuel assimilé à une EURL ou la SCP. Taux réduit sur la première tranche de bénéfice sous conditions, taux normal au‑delà. Dividendes imposés en revenus de capitaux mobiliers, au prélèvement forfaitaire unique ou sur option au barème.',
          'Depuis 2024, les rémunérations techniques versées aux associés de SEL au titre de leur activité libérale sont imposées en bénéfices non commerciaux, et non plus en traitements et salaires.'
        ]
      },
      {
        t: 'II. TVA, contribution économique territoriale et contrôle',
        pts: [
          'TVA au taux normal de 20 %, l’avocat non salarié y étant assujetti et redevable. Franchise en base sous les seuils applicables, avec mention obligatoire « TVA non applicable, article 293 B du code général des impôts » et absence de droit à déduction.',
          'Règles particulières : les frais refacturés sont soumis à TVA, les débours ne le sont pas ; l’aide juridictionnelle y est soumise, le droit de plaidoirie ne l’est pas. Prestations intracommunautaires entre professionnels : autoliquidation. Prestations hors Union : non imposables en France.',
          'Contribution économique territoriale, composée de la cotisation foncière des entreprises et de la cotisation sur la valeur ajoutée. Exonération de CFE l’année de création, base réduite de moitié l’année suivante, et exonération supplémentaire de deux ans pour les avocats issus de la formation initiale du centre régional.',
          'Contrôle fiscal : le droit de communication porte sur le livre‑journal et les pièces justificatives où ne figure pas le détail des prestations. L’administration peut connaître l’identité du client, le montant, la date et la forme du versement, jamais la nature des prestations.'
        ]
      }
    ],
    cles: [
      'Les rémunérations techniques des associés de SEL sont imposées en BNC depuis 2024 : c’est le changement à connaître.',
      'Le droit de plaidoirie est un débours, non soumis à TVA ; il est recouvré auprès du client puis reversé trimestriellement à la CNBF.',
      'L’aide juridictionnelle est assujettie à la TVA au taux normal.',
      'Un redressement fondé sur des éléments couverts par le secret professionnel doit être annulé.',
      'En cas de contrôle fiscal, il est recommandé d’en référer au bâtonnier avant toute communication.',
      'Les visites domiciliaires de l’administration fiscale supposent une décision motivée du JLD et la présence du bâtonnier, comme en matière de perquisition.',
      'L’exonération de deux ans de CFE ne bénéficie qu’aux avocats issus du CAPA par la formation initiale, non aux passerelles.',
      'Le régime social des libéraux relève de l’URSSAF pour la maladie, la maternité, les allocations familiales, la CSG‑CRDS et la formation, et de la CNBF pour la retraite, l’invalidité et le décès. L’avocat n’a pas d’assurance chômage.'
    ],
    cartes: [
      { q: 'Dans quelle catégorie sont imposés les revenus d’un avocat individuel ?', r: 'Les bénéfices non commerciaux, au titre de l’impôt sur le revenu, en micro‑BNC sous le seuil ou en déclaration contrôlée au‑delà ou sur option.', src: 'CGI, art. 92' },
      { q: 'Quel est l’abattement du régime micro‑BNC ?', r: 'Trente‑quatre pour cent, avec un minimum forfaitaire : seuls 66 % des recettes sont imposés. En contrepartie, aucune charge réelle n’est déductible.', src: 'CGI, art. 102 ter' },
      { q: 'Comment sont imposées les rémunérations techniques des associés de SEL ?', r: 'En bénéfices non commerciaux depuis 2024, alors qu’elles relevaient auparavant des traitements et salaires. Le mandat social reste imposé en traitements et salaires.', src: 'Doctrine fiscale' },
      { q: 'Le droit de plaidoirie est‑il soumis à la TVA ?', r: 'Non, c’est un débours. Il est recouvré auprès du client puis reversé chaque trimestre à la CNBF. L’aide juridictionnelle, en revanche, y est soumise.', src: 'CGI ; CNBF' },
      { q: 'Quelle mention porter sur une facture en franchise de TVA ?', r: '« TVA non applicable, article 293 B du code général des impôts ».', src: 'CGI art. 293 B' },
      { q: 'Que peut exiger l’administration fiscale de l’avocat ?', r: 'Le livre‑journal et les pièces justificatives, l’identité du client, le montant, la date et la forme du versement. Jamais de renseignement sur la nature des prestations, même sommaire.', src: 'CE, 7 juill. 2004' },
      { q: 'Qui bénéficie de l’exonération de deux ans de CFE ?', r: 'Les avocats ayant suivi la formation initiale du centre régional et obtenu le CAPA, à l’exclusion de ceux entrés par une passerelle. Le point de départ est le 1er janvier de l’année suivant l’inscription au tableau.', src: 'CGI, art. 1460' },
      { q: 'À quels organismes l’avocat libéral cotise‑t‑il ?', r: 'À l’URSSAF pour la maladie, la maternité, les allocations familiales, la CSG‑CRDS et la formation professionnelle ; à la CNBF pour la retraite de base et complémentaire, l’invalidité et le décès. Il n’a pas d’assurance chômage.', src: 'C. sécu. soc.' },
      { q: 'Comment traiter la TVA sur une prestation à un professionnel européen ?', r: 'Elle n’est pas imposable en France : la facture porte la mention « autoliquidation ». Pour une prestation hors Union, la mention est « TVA non applicable, article 259 B du code général des impôts ».', src: 'CGI, art. 259 et 283' }
    ],
    qcm: [
      { q: 'L’abattement du micro‑BNC est de :', o: ['25 %', '34 %', '50 %'], b: 1, e: 'Trente‑quatre pour cent, avec un minimum forfaitaire, en contrepartie de l’absence de déduction des charges réelles.' },
      { q: 'Le droit de plaidoirie est :', o: ['soumis à la TVA', 'un débours non soumis à la TVA', 'un honoraire réglementé'], b: 1, e: 'Débours, reversé trimestriellement à la CNBF. L’aide juridictionnelle, elle, est soumise à TVA.' },
      { q: 'L’administration fiscale peut obtenir :', o: ['la nature des prestations', 'l’identité du client, le montant, la date et la forme du versement', 'les correspondances avec le client'], b: 1, e: 'Jamais la nature des prestations : un redressement fondé sur des éléments couverts par le secret doit être annulé.' },
      { q: 'Les rémunérations techniques des associés de SEL sont imposées :', o: ['en traitements et salaires', 'en BNC depuis 2024', 'en revenus de capitaux mobiliers'], b: 1, e: 'BNC depuis 2024 ; le mandat social demeure en traitements et salaires.' }
    ],
    jury: [
      { q: 'Comment protégez‑vous le secret lors d’un contrôle fiscal ?', r: 'Par l’organisation en amont : factures nominatives ne mentionnant que l’identité, le montant, la date et la forme du versement, et relevé de diligences séparé remis au seul client. Pendant le contrôle, je m’oppose à la communication de tout document révélant la nature des prestations, y compris sommairement, et j’en réfère à mon bâtonnier. Si l’administration passe par une visite domiciliaire, elle doit obtenir une décision motivée du JLD et le bâtonnier doit être présent, comme en matière de perquisition.' },
      { q: 'Micro‑BNC ou déclaration contrôlée : que conseillez‑vous à un jeune confrère ?', r: 'La déclaration contrôlée, dans la plupart des cas. Le micro‑BNC applique un abattement forfaitaire de 34 %, soit une hypothèse de charges représentant un tiers des recettes, ce qui est très en deçà du niveau réel des charges d’un cabinet — loyer, assurance, cotisations ordinales et CNBF, matériel, documentation. La déclaration contrôlée permet la déduction réelle et le report des déficits des premières années. Le prix à payer est une comptabilité complète, avec livre‑journal servi au jour le jour.' },
      { q: 'Pourquoi les rémunérations techniques ont‑elles changé de catégorie en 2024 ?', r: 'Parce que l’administration a distingué ce qui relève du mandat social de ce qui relève de l’exercice libéral. La rémunération perçue au titre de la gérance reste un traitement ; celle perçue en contrepartie de l’activité professionnelle exercée au sein de la SEL est le fruit d’une activité indépendante, donc un bénéfice non commercial. Le changement a des conséquences pratiques : obligation de tenir une comptabilité BNC personnelle, perte de l’abattement de 10 %, et modification des cotisations sociales.' },
      { q: 'Un avocat peut‑il être payé en cryptomonnaie ?', r: 'La question reste débattue. Le mécanisme s’analyse en une dation en paiement, admise par la jurisprudence pour des œuvres d’art ou des biens : les honoraires sont fixés en euros dans la convention puis convertis au cours du jour du paiement. Trois précautions : le devoir de prudence impose de vérifier l’origine des fonds, la volatilité fait supporter la perte à l’avocat comme pour une devise étrangère, et les obligations fiscales demeurent inchangées — facture, comptabilisation, TVA, imposition de la plus‑value en cas de revente. La convention doit préciser la plateforme retenue pour le cours et les modalités techniques.' },
      { q: 'L’avocat cotise‑t‑il à l’assurance chômage ?', r: 'Non, l’avocat libéral n’a pas d’assurance chômage, ce qui explique l’importance de la prévoyance individuelle et des contrats collectifs souscrits par les barreaux. Sa protection sociale se structure sur trois niveaux : un niveau national obligatoire assurant des prestations égales pour tous, un niveau barreau apportant des prestations complémentaires, et un niveau individuel relevant de la seule responsabilité de chaque avocat.' }
    ],
    cas: {
      e: 'Un avocat en première année, sous micro‑BNC, réalise 60 000 euros de recettes. Il a 30 000 euros de charges réelles, dont un local et des cotisations CNBF. Il facture sans TVA. Que lui dites‑vous ?',
      r: 'Deux erreurs coûteuses. Sur le régime d’imposition : le micro‑BNC applique un abattement forfaitaire de 34 %, soit 20 400 euros, alors que ses charges réelles s’élèvent à 30 000 euros. Il est imposé sur 39 600 euros au lieu de 30 000, et perd la possibilité de reporter tout déficit. L’option pour la déclaration contrôlée est possible même en dessous du seuil et doit être exercée : elle suppose une comptabilité complète avec livre‑journal servi au jour le jour. Sur la TVA : la franchise en base n’est acquise que sous les seuils applicables, appréciés sur l’année précédente et l’année en cours, avec un seuil majoré au‑delà duquel l’assujettissement est immédiat. À 60 000 euros de recettes, il doit vérifier sa situation au regard de ces seuils, et il n’a de toute façon aucun intérêt à la franchise : elle le prive du droit à déduction sur ses charges. En franchise, la facture doit porter la mention « TVA non applicable, article 293 B du code général des impôts » ; une fois assujetti, il doit demander un numéro de TVA intracommunautaire au service des impôts des entreprises et facturer la TVA au taux de 20 %.'
    }
  },

  {
    id: 'carpa',
    titre: 'Les maniements de fonds et le fonctionnement de la CARPA',
    sources: ['L. 31 déc. 1971, art. 27 et 53', 'D. 27 nov. 1991, art. 235 s.', 'RIN art. 6.2', 'L. 10 juill. 1991'],
    principes: ['prudence', 'probité'],
    accroche: 'L’avocat n’a été autorisé à manier des fonds pour ses clients qu’en 1954. Les abus ont conduit à un contrôle strict : les caisses des règlements pécuniaires, généralisées en 1971, interdisent tout accès direct de l’avocat aux fonds et vérifient la cause de chaque mouvement. Elles ont depuis reçu une seconde mission, le paiement de l’aide juridictionnelle.',
    plan: [
      {
        t: 'I. Le maniement de fonds : conditions et circuit',
        pts: [
          'Notion : fonds, effets ou valeurs reçus pour le compte de tiers dans le cadre de l’activité professionnelle, à l’exclusion des honoraires, émoluments, frais et débours.',
          'Deux conditions cumulatives : le maniement doit être l’accessoire d’un acte juridique ou judiciaire accompli par l’avocat, et reposer sur un mandat spécial du client, précis et causé. Le séquestre suppose un écrit et ne se présume pas.',
          'Dépôt sans délai à la CARPA, après vérification de la licéité de l’opération et de l’identité des parties. Compte général de la caisse, compte individuel par avocat ou structure, sous‑comptes par affaire, aucun sous‑compte ne pouvant être débiteur.',
          'Retrait : l’avocat n’a aucun accès direct. La CARPA contrôle à chaque demande la position du sous‑compte, la provenance des fonds, le bénéficiaire effectif et le lien entre le règlement et l’acte accompli ; elle édite elle‑même le chèque ou le virement et peut refuser toute opération non conforme.'
        ]
      },
      {
        t: 'II. La CARPA : organisation, contrôles et seconde mission',
        pts: [
          'Association loi 1901 créée par délibération du conseil de l’ordre, éventuellement commune à plusieurs barreaux, présidée par le bâtonnier et administrée par des avocats bénévoles. Les avocats y sont adhérents de droit.',
          'Contrôles : autorité du conseil de l’ordre, commissaire aux comptes désigné pour six ans, commission nationale de contrôle et commission de régulation composée du président du CNB, du président de la Conférence des bâtonniers et du bâtonnier de Paris. Sanctions possibles : injonction de faire, désignation d’un administrateur, suspension des organes, délégation de gestion.',
          'Depuis 2020, la CARPA est assujettie aux obligations de lutte contre le blanchiment dans le même périmètre que les avocats ; le secret professionnel ne lui est pas opposable.',
          'Seconde mission : administration des fonds publics de l’aide juridictionnelle. Elle reçoit la dotation de l’État via l’Union nationale des CARPA et paie les avocats sur justification de leur désignation et production de l’attestation de mission.'
        ]
      }
    ],
    cles: [
      'Le dépôt à la CARPA doit être sans délai ; le défaut caractérise un abus de confiance au préjudice de la caisse.',
      'Aucun mouvement entre sous‑comptes n’est possible sans accord du président de la CARPA, et les compensations sont prohibées.',
      'Prélèvement d’honoraires sur la CARPA interdit sans accord écrit et préalable du client.',
      'Deux assurances distinctes : la responsabilité civile professionnelle, qui couvre les fautes, et la garantie de représentation des fonds, qui couvre l’insolvabilité. Cette dernière ne couvre pas la restitution des honoraires.',
      'La garantie de représentation joue en cas de sommation de payer ou de restituer demeurée sans réponse pendant un mois ou refusée ; le bâtonnier doit être avisé sans délai, et la créance doit être certaine, liquide et exigible.',
      'L’avocat ne peut recevoir de fonds excédant le montant de sa garantie : au‑delà, il doit souscrire une assurance complémentaire.',
      'Fiducie : assurance spéciale de restitution à hauteur de 5 % de la valeur des immeubles et 20 % des autres biens, droits ou sûretés transférés.',
      'L’avocat exerçant selon deux modes distincts dispose de deux comptes CARPA ; une structure doit avoir un compte dans chaque barreau où ses associés sont inscrits.'
    ],
    cartes: [
      { q: 'Qu’est‑ce qu’un règlement pécuniaire ?', r: 'Les fonds, effets ou valeurs que l’avocat reçoit pour le compte de ses clients dans le cadre de son activité professionnelle, à l’exclusion des honoraires, émoluments, frais et débours.', src: 'L. 1971, art. 53' },
      { q: 'Quelles sont les deux conditions du maniement de fonds ?', r: 'Il doit être l’accessoire d’un acte juridique ou judiciaire accompli par l’avocat dans son exercice professionnel, et reposer sur un mandat spécial exprès du client.', src: 'L. 31 déc. 1971, art. 27 ; RIN art. 6.2' },
      { q: 'Quelle est la nature juridique d’une CARPA ?', r: 'Une association loi 1901, créée par délibération du conseil de l’ordre, éventuellement commune à plusieurs barreaux, présidée par le bâtonnier et administrée par des avocats bénévoles.', src: 'D. 27 nov. 1991' },
      { q: 'Comment sont organisés les comptes CARPA ?', r: 'Un compte général unique ouvert auprès d’un établissement de crédit, divisé en comptes individuels par avocat ou structure, eux‑mêmes divisés en autant de sous‑comptes qu’il y a d’affaires. Aucun sous‑compte ne peut être débiteur.', src: 'D. 27 nov. 1991' },
      { q: 'Que vérifie la CARPA avant un retrait ?', r: 'La position bancaire et comptable du sous‑compte, la provenance des fonds, le bénéficiaire effectif, la cohérence des écritures et le lien de causalité entre le règlement pécuniaire et l’acte accompli par l’avocat.', src: 'D. 27 nov. 1991' },
      { q: 'Quelles sont les deux garanties obligatoires et que couvrent‑elles ?', r: 'La responsabilité civile professionnelle couvre les fautes et négligences ; la garantie de représentation des fonds couvre le remboursement des fonds, effets ou valeurs reçus, c’est‑à‑dire l’insolvabilité. Elle ne couvre pas la restitution des honoraires.', src: 'L. 1971 ; D. 1991' },
      { q: 'Quand la garantie de représentation des fonds joue‑t‑elle ?', r: 'En cas de sommation de payer ou de restituer demeurée sans réponse pendant un mois ou refusée par l’avocat. L’auteur de la sommation et l’avocat doivent en aviser sans délai le bâtonnier, et la créance doit être certaine, liquide et exigible.', src: 'D. 27 nov. 1991' },
      { q: 'La CARPA est‑elle soumise aux obligations anti‑blanchiment ?', r: 'Oui depuis 2020, dans le même périmètre que les avocats : vigilance, déclaration de soupçon, droit de communication de Tracfin. Le secret professionnel ne lui est pas opposable.', src: 'C. mon. fin.' },
      { q: 'Quelle est la seconde mission de la CARPA ?', r: 'L’administration et la gestion des fonds publics destinés au financement de l’aide juridique : elle reçoit la dotation de l’État via l’UNCA et rétribue les avocats sur production de l’attestation de mission.', src: 'L. 10 juill. 1991' },
      { q: 'Quelle assurance spéciale pour l’avocat fiduciaire ?', r: 'Une garantie de restitution des biens à hauteur d’au moins 5 % de la valeur des immeubles et 20 % de la valeur des autres biens, droits ou sûretés transférés, en sus de la responsabilité civile professionnelle.', src: 'RIN art. 6.5' }
    ],
    qcm: [
      { q: 'Les honoraires doivent être déposés à la CARPA :', o: ['oui, systématiquement', 'non, jamais', 'oui, au‑delà de 10 000 €'], b: 1, e: 'Seuls les règlements pécuniaires transitent par la CARPA ; les honoraires en sont exclus.' },
      { q: 'Un sous‑compte affaire peut‑il être débiteur ?', o: ['oui, temporairement', 'non, jamais', 'oui avec accord du président'], b: 1, e: 'Aucun sous‑compte ne peut présenter un solde débiteur ; les mouvements entre sous‑comptes supposent l’accord du président et les compensations sont prohibées.' },
      { q: 'La garantie de représentation des fonds couvre :', o: ['les fautes de l’avocat', 'l’insolvabilité de l’avocat quant aux fonds reçus', 'la restitution des honoraires'], b: 1, e: 'Elle couvre l’insolvabilité, pas la faute — assurée par la RCP — ni la restitution des honoraires, qu’aucune des deux ne couvre.' },
      { q: 'La CARPA est présidée par :', o: ['le bâtonnier', 'le président du CNB', 'un commissaire aux comptes'], b: 0, e: 'Le bâtonnier, la caisse restant sous l’autorité du conseil de l’ordre qui l’a créée.' }
    ],
    jury: [
      { q: 'Pourquoi l’avocat n’a‑t‑il aucun accès direct aux fonds ?', r: 'Parce que l’autodiscipline a montré ses limites : les abus des années quatre‑vingt‑dix ont conduit à un contrôle a priori. La CARPA ne se borne pas à héberger les fonds, elle vérifie la cause de chaque mouvement, le lien avec l’acte accompli, la provenance et le bénéficiaire effectif, et elle édite elle‑même le règlement. C’est un contrôle externe, exercé par la profession sur elle‑même, qui protège à la fois le client et la crédibilité collective.' },
      { q: 'Quelle différence entre la CARPA et un compte séquestre bancaire ?', r: 'Le contrôle. Un compte séquestre bancaire ne vérifie que la conformité formelle des instructions. La CARPA vérifie la cause : elle exige la justification du lien entre le mouvement et l’acte juridique ou judiciaire, contrôle l’identité et le bénéficiaire effectif, applique les obligations anti‑blanchiment, et peut refuser toute opération non conforme. Elle est en outre soumise à un commissaire aux comptes, à une commission nationale de contrôle et à une commission de régulation.' },
      { q: 'Que se passe‑t‑il si un avocat manie des fonds hors CARPA ?', r: 'Trois conséquences. Disciplinairement, c’est un manquement à la probité, à l’honneur et à la prudence, qui figure parmi ceux donnant lieu aux sanctions les plus lourdes, radiation souvent précédée d’une suspension provisoire. Pénalement, c’est un abus de confiance au préjudice de la CARPA, puni de cinq ans d’emprisonnement et 375 000 euros d’amende. Civilement, la garantie de représentation des fonds jouera pour indemniser le client si l’avocat est insolvable.' },
      { q: 'La CARPA finance‑t‑elle l’aide juridictionnelle ?', r: 'Elle ne la finance pas, elle la paie. L’État affecte annuellement à chaque barreau une dotation représentant sa part contributive, calculée sur le nombre de missions et le produit d’un coefficient par type de procédure et d’une unité de valeur de référence. Cette dotation est versée par l’Union nationale des CARPA sur un compte spécial, et la CARPA rétribue les avocats sur production de l’attestation de mission. Les frais de fonctionnement du service sont supportés par la profession, grâce aux produits financiers des fonds déposés.' },
      { q: 'Les espèces sont‑elles admises à la CARPA ?', r: 'Elles doivent rester exceptionnelles. Le dépôt se fait normalement par chèque ou virement ; une remise en espèces suppose l’accord du président de la CARPA et une motivation expresse de l’avocat, et les montants sont strictement limités. Cette réserve s’explique par le risque de blanchiment et par le devoir de prudence qui impose de vérifier l’origine des fonds.' }
    ],
    cas: {
      e: 'Vous êtes désigné séquestre amiable d’une somme de 300 000 euros dans une cession de fonds de commerce, sans écrit, sur simple accord verbal des parties. Votre garantie de représentation est plafonnée à 200 000 euros. Que faites‑vous ?',
      r: 'Deux obstacles avant tout dépôt. Le séquestre ne se présume pas : il exige une convention écrite, précisant l’objet, les conditions de libération et les parties. Un accord verbal ne suffit pas, et le maniement doit reposer sur un mandat spécial exprès du client, précis et causé. Il faut donc régulariser par écrit avant toute réception de fonds. Ensuite, la garantie : l’avocat ne peut recevoir des fonds pour un montant excédant celui de la garantie accordée par l’assureur. Avec un plafond de 200 000 euros, je ne peux recevoir 300 000 euros sans souscrire une assurance complémentaire ou justifier d’une garantie financière à hauteur du surplus. Une fois ces deux points réglés, s’ajoutent les obligations habituelles : vérification de la licéité de l’opération, identification du client et du bénéficiaire effectif au titre de la vigilance anti‑blanchiment — une cession de fonds de commerce entre dans le périmètre de l’article L. 561‑3 du code monétaire et financier —, dépôt sans délai à la CARPA sur un sous‑compte dédié, quittance mentionnant la partie versante, le montant, la cause et le mode de versement, et comptabilité séparée des fonds maniés.'
    }
  }
];
