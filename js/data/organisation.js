// Bloc 2 - Organisation professionnelle (2 sujets du programme officiel).
// Sources publiques : loi n° 71-1130 du 31 decembre 1971, loi du 31 decembre 1990,
// decret n° 91-1197 du 27 novembre 1991, RIN du CNB.

export const ORGANISATION = [
  {
    id: 'ordre-batonnier',
    titre: 'Rôle et compétences du conseil de l’ordre et du bâtonnier',
    sources: ['L. 31 déc. 1971, art. 15 à 21', 'D. 27 nov. 1991', 'RIN'],
    principes: ['indépendance', 'confraternité'],
    accroche: 'La profession est autorégulée : elle se donne ses règles, contrôle leur respect et sanctionne leurs manquements. Cette autonomie repose sur deux organes complémentaires : un conseil de l’ordre délibérant, et un bâtonnier qui incarne l’Ordre de façon permanente. Depuis 2004, la fonction de jugement leur a été retirée au profit d’une juridiction disciplinaire distincte : c’est le prix payé au procès équitable.',
    plan: [
      {
        t: 'I. Le conseil de l’ordre, organe délibérant du barreau',
        pts: [
          'Compétence générale de principe : toute question intéressant l’exercice de la profession, l’observation des devoirs des avocats et la protection de leurs droits.',
          'Cinq fonctions : réglementaire (règlement intérieur, exécution des décisions du CNB), administrative (police du tableau : inscription, omission, rang, bureaux secondaires), financière (budget, cotisations, patrimoine), de contrôle (comptabilité, LCB‑FT, assurance, formation continue), et disciplinaire résiduelle (suspension provisoire, sanctions LCB‑FT, et à Paris exercice des attributions du conseil de discipline).',
          'Composition et élection : membres élus pour trois ans, renouvelables par tiers chaque année, au scrutin binominal mixte majoritaire à deux tours dans les barreaux de plus de trente avocats ; éligibilité subordonnée à quatre ans de serment au 1er janvier dans les barreaux de plus de seize avocats.',
          'Délibérations à la majorité, quorum de la moitié des membres. Les barreaux de moins de huit avocats voient leurs fonctions ordinales exercées par l’assemblée générale du tribunal judiciaire.'
        ]
      },
      {
        t: 'II. Le bâtonnier, autorité permanente et juge de première instance',
        pts: [
          'Représentation : il représente l’Ordre dans tous les actes de la vie civile et en justice, sur autorisation du conseil de l’ordre pour ester. Il préside le conseil de l’ordre sans en être membre et n’y a qu’une voix consultative.',
          'Déontologie : conciliateur des différends entre confrères, consultant par ses avis déontologiques, délivrance du visa, surveillance et enquête déontologique, désignation d’un suppléant ou d’un administrateur provisoire, filtre des déclarations de soupçon, garant du secret lors des perquisitions.',
          'Fonctions juridictionnelles : juge de l’honoraire en première instance, arbitre des litiges nés des contrats de collaboration et de travail et des différends entre avocats. En matière disciplinaire il n’est plus que l’autorité de poursuite.',
          'Administration et service au justiciable : direction du personnel et du budget, commissions d’office, permanences pénales, consultations gratuites, droit de visite des lieux de privation de liberté. Élu pour deux ans au scrutin uninominal majoritaire à deux tours, non immédiatement rééligible.'
        ]
      }
    ],
    cles: [
      'Barreau et Ordre ne sont pas synonymes : le barreau réunit les avocats inscrits au tableau, l’Ordre y ajoute les avocats honoraires. Un barreau par tribunal judiciaire, sauf regroupement dans le ressort d’une même cour d’appel.',
      'Nature juridique : établissements privés chargés d’une mission de service public, dotés de la personnalité morale ; le contrôle de légalité de leurs décisions relève du juge judiciaire.',
      'Le bâtonnier préside le conseil de l’ordre mais n’en est pas membre ; le vice‑bâtonnier y siège avec voix consultative et sa fonction est incompatible avec celle de membre.',
      'Mandats : bâtonnier deux ans, membres du conseil de l’ordre trois ans renouvelables par tiers. Le dauphin est élu six mois avant la fin du mandat dans les barreaux de plus de trente avocats.',
      'Recours contre l’élection : huit jours pour un avocat disposant du droit de vote, quinze jours pour le procureur général, devant la cour d’appel. Non suspensif.',
      'Recours contre une délibération du conseil de l’ordre : réclamation préalable au bâtonnier dans les deux mois, décision du conseil dans le mois, silence valant rejet, puis appel devant la cour d’appel dans le mois.',
      'La cour d’appel exerce un contrôle de légalité et non d’opportunité : elle annule, elle ne réforme pas. Trois critères de validité : égalité, justification au regard des conditions d’exercice, proportionnalité.',
      'À Paris, le conseil de l’ordre siège comme conseil de discipline, avec séparation des fonctions de poursuite, d’instruction et de jugement.'
    ],
    cartes: [
      { q: 'Quelle est la durée du mandat du bâtonnier ?', r: 'Deux ans. Il n’est pas immédiatement rééligible, sauf dans les barreaux de moins de trente avocats disposant du droit de vote.', src: 'D. 27 nov. 1991' },
      { q: 'Le bâtonnier est‑il membre du conseil de l’ordre ?', r: 'Non. Il le préside de droit, sans en être membre. Le vice‑bâtonnier y siège avec voix consultative, sa fonction étant incompatible avec celle de membre.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle ancienneté faut‑il pour être élu membre du conseil de l’ordre ?', r: 'Avoir prêté serment depuis plus de quatre ans au 1er janvier de l’année de l’élection, dans les barreaux de plus de seize avocats.', src: 'D. 27 nov. 1991' },
      { q: 'Qui exerce les fonctions du conseil de l’ordre dans un barreau de moins de huit avocats ?', r: 'L’assemblée générale du tribunal judiciaire, à défaut de regroupement de barreaux.', src: 'D. 27 nov. 1991' },
      { q: 'Quelle différence entre barreau et Ordre ?', r: 'Le barreau réunit les avocats inscrits au tableau ; l’Ordre y ajoute les avocats honoraires, inscrits sur une liste spéciale, qui disposent du droit de vote.', src: 'L. 1971 ; D. 1991' },
      { q: 'Quels sont les délais de recours contre l’élection du bâtonnier ?', r: 'Huit jours pour tout avocat disposant du droit de vote, quinze jours pour le procureur général, devant la cour d’appel. Le recours n’est pas suspensif.', src: 'D. 27 nov. 1991' },
      { q: 'Le bâtonnier est‑il encore juge disciplinaire ?', r: 'Non depuis 2004. Il est l’autorité de poursuite : il reçoit les réclamations, diligente l’enquête déontologique et saisit la juridiction disciplinaire. Il reste juge de l’honoraire et arbitre des différends entre avocats.', src: 'L. 11 févr. 2004' },
      { q: 'Quel est le mode de scrutin pour le conseil de l’ordre ?', r: 'Scrutin binominal mixte majoritaire à deux tours (chaque binôme comprend des personnes de sexe différent) dans les barreaux de plus de trente avocats ; uninominal majoritaire à deux tours en deçà.', src: 'D. 27 nov. 1991' },
      { q: 'Quel contrôle la cour d’appel exerce‑t‑elle sur les délibérations du conseil de l’ordre ?', r: 'Un contrôle de légalité, non d’opportunité : elle peut annuler, non réformer. Trois exigences : respect de l’égalité, justification au regard des conditions d’exercice, proportionnalité.', src: 'Civ. 1re, 17 juin 2015' },
      { q: 'Que peut faire le bâtonnier en matière de privation de liberté ?', r: 'Il est autorisé à visiter à tout moment les locaux de garde à vue et les établissements pénitentiaires situés dans le ressort du tribunal judiciaire auquel son barreau est rattaché.', src: 'L. 31 déc. 1971, art. 17' }
    ],
    qcm: [
      { q: 'Le mandat des membres du conseil de l’ordre est de :', o: ['2 ans', '3 ans renouvelable par tiers', '4 ans'], b: 1, e: 'Trois ans, avec renouvellement par tiers chaque année. Deux ans, c’est le bâtonnier.' },
      { q: 'Le bâtonnier, en matière disciplinaire, est :', o: ['juge de première instance', 'autorité de poursuite', 'rapporteur'], b: 1, e: 'Depuis 2004, la fonction de jugement est passée au conseil de discipline. Il reste autorité de poursuite.' },
      { q: 'Le contrôle des décisions du conseil de l’ordre relève :', o: ['du juge administratif', 'du juge judiciaire', 'du CNB'], b: 1, e: 'Les ordres sont des établissements privés chargés d’une mission de service public ; le contentieux est judiciaire, devant la cour d’appel.' },
      { q: 'Dans un barreau de moins de huit avocats :', o: ['il n’y a pas de bâtonnier', 'les fonctions du conseil de l’ordre sont exercées par l’AG du tribunal judiciaire', 'le CNB administre le barreau'], b: 1, e: 'Un bâtonnier doit être élu dans tout barreau ; seules les fonctions du conseil de l’ordre sont transférées.' },
      { q: 'Le dauphin est élu, dans les barreaux de plus de trente avocats :', o: ['un an avant la fin du mandat', 'six mois avant la fin du mandat', 'à la fin du mandat'], b: 1, e: 'Élu six mois avant la fin du mandat du bâtonnier en exercice.' },
      { q: 'Le recours contre une délibération du conseil de l’ordre commence par :', o: ['un appel direct devant la cour d’appel', 'une réclamation préalable au bâtonnier dans les deux mois', 'une saisine du CNB'], b: 1, e: 'Réclamation préalable au bâtonnier (2 mois), décision du conseil dans le mois, silence = rejet, puis appel dans le mois.' },
      { q: 'La cour d’appel, saisie d’une délibération ordinale, exerce un contrôle :', o: ['d’opportunité', 'de légalité ; elle annule, elle ne réforme pas', 'de cassation ordinale'], b: 1, e: 'Contrôle de légalité : égalité, justification, proportionnalité. Annulation, pas de réformation.' },
      { q: 'À Paris, le conseil de discipline est :', o: ['une juridiction régionale distincte', 'le conseil de l’ordre siégeant comme conseil de discipline, avec séparation des fonctions', 'le CNB'], b: 1, e: 'À Paris, le conseil de l’ordre siège comme conseil de discipline, avec séparation poursuite / instruction / jugement.' }
    ],
    jury: [
      { q: 'L’autorégulation de la profession est‑elle compatible avec le procès équitable ?', r: 'Elle l’est devenue. Jusqu’en 2004, le conseil de l’ordre cumulait poursuite, instruction et jugement, ce que l’article 6 de la Convention européenne ne pouvait admettre. La loi du 11 février 2004 a créé le conseil de discipline dans le ressort de chaque cour d’appel, et la réforme de 2021 y a ajouté l’échevinage : présidence par un magistrat du siège de droit lorsque la poursuite émane d’un tiers, et à la demande de l’avocat poursuivi. Le bâtonnier ne conserve que la poursuite.' },
      { q: 'Le bâtonnier, confident et juge : n’y a‑t‑il pas là une contradiction ?', r: 'La tension est réelle et souvent relevée. Le bâtonnier est à la fois celui à qui l’avocat confie ses difficultés, le garant du secret lors des perquisitions, et le juge de l’honoraire ou l’arbitre du litige entre confrères. La séparation opère par matière : il n’est plus juge disciplinaire. Et lorsqu’il est lui‑même en cause, c’est le procureur général qui agit, ou le bâtonnier le plus ancien qui diligente l’enquête.' },
      { q: 'Qu’est‑ce que la police du tableau ?', r: 'La fonction administrative par laquelle le conseil de l’ordre est maître du tableau : il statue sur les inscriptions, prononce les omissions d’office ou sur demande, fixe le rang par ancienneté, autorise les bureaux secondaires, et dresse le tableau au moins une fois par an, déposé au greffe de la cour d’appel et du tribunal judiciaire au 1er janvier. Ce n’est pas une fonction disciplinaire.' },
      { q: 'Le conseil de l’ordre peut‑il fixer des cotisations différentes selon les avocats ?', r: 'Il fixe librement le montant, mais dans le respect du principe d’égalité. Ont été censurées : une part variable assise sur les BNC, tous les avocats n’y étant pas soumis ; des majorations de retard excessives ; une cotisation plus élevée pour les titulaires d’un bureau secondaire non justifiée par une charge financière particulière. La cotisation peut être moindre ou égale, jamais supérieure.' },
      { q: 'Quelle est la place de l’assemblée générale du barreau ?', r: 'C’est un troisième organe, distinct de l’assemblée élective. Elle réunit tous les avocats inscrits sous la présidence du bâtonnier, mais ses délibérations sont limitées aux questions soumises par le conseil de l’ordre et n’aboutissent qu’à des avis et recommandations, sur lesquels le conseil doit délibérer dans les trois mois. Dépourvue de moyens propres, elle conserve un intérêt en période de crise, pour mobiliser.' },
      { q: 'Barreau et Ordre : pourquoi la distinction compte‑t‑elle à l’oral ?', r: 'Le barreau réunit les avocats inscrits au tableau ; l’Ordre y ajoute les avocats honoraires, inscrits sur une liste spéciale et votants. La personnalité morale, la mission de service public et le contrôle de légalité par le juge judiciaire s’attachent à cette organisation. Confondre les deux termes brouille la compétence électorale et disciplinaire. Un barreau par tribunal judiciaire, sauf regroupement dans le ressort d’une même cour d’appel.' },
      { q: 'Le bâtonnier est‑il encore juge disciplinaire ?', r: 'Non. Depuis 2004, il n’est plus que l’autorité de poursuite en matière disciplinaire ; le jugement appartient à la juridiction disciplinaire. Il demeure juge de l’honoraire en première instance et arbitre des litiges de collaboration et des différends entre avocats. Cette clarification est un point d’attention du jury : ne pas lui prêter encore le rôle de juge disciplinaire de première instance.' }
    ],
    cas: {
      e: 'Le conseil de l’ordre refuse à un avocat l’ouverture d’un bureau secondaire au motif qu’il a fait l’objet, dans son barreau d’origine, de deux rappels à l’ordre du bâtonnier. Que peut faire cet avocat ?',
      r: 'Le refus est illégal. La décision de refus ou de retrait ne peut être fondée que sur des motifs tirés des conditions d’exercice dans le bureau secondaire lui‑même : locaux, secret professionnel, indépendance, exercice effectif. Sont inopérants les motifs tirés du comportement de l’avocat dans son barreau d’origine, seul compétent pour en connaître, comme ceux tirés de la rentabilité économique. La décision doit en outre intervenir après débat contradictoire et être motivée. L’avocat dispose de quinze jours pour former appel devant la cour d’appel, laquelle exerce un contrôle de légalité et pourra annuler la décision.'
    }
  },

  {
    id: 'cnb',
    titre: 'Rôle et compétences du Conseil national des barreaux',
    sources: ['L. 31 déc. 1971, art. 21‑1', 'L. 31 déc. 1990', 'D. 27 nov. 1991', 'RIN'],
    principes: ['indépendance'],
    accroche: 'Fragmentée entre plus de cent soixante barreaux, la profession ne parvenait pas à parler d’une seule voix. La loi du 31 décembre 1990 a créé le Conseil national des barreaux pour y remédier. Il n’est ni un ordre national ni un conseil des barreaux : c’est un établissement d’utilité publique doté d’un pouvoir d’unification, et non d’édiction, des règles.',
    plan: [
      {
        t: 'I. Six fonctions, un pouvoir normatif encadré',
        pts: [
          'Représentation de la profession auprès des pouvoirs publics et des instances nationales, européennes et internationales ; il peut se constituer partie civile pour la défense de l’intérêt collectif de la profession.',
          'Normative : unification des règles et usages existants, dans la limite de la hiérarchie des normes, des règles essentielles de la profession et de l’examen de proportionnalité européen. Il ne crée pas de règle nouvelle. Instrument : la décision à caractère normatif, dont est issu le RIN en 2005. Ses avis déontologiques, rendus aux bâtonniers, ne sont pas contraignants.',
          'Formation : harmonisation des programmes des centres régionaux, détermination des modalités de la formation continue, homologation, mentions de spécialisation et délivrance des certificats.',
          'Financement par les cotisations qu’il fixe annuellement, annuaire national, outils numériques dont le RPVA, et compétences relatives aux avocats étrangers et européens.'
        ]
      },
      {
        t: 'II. Une composition paritaire, deux collèges, deux circonscriptions',
        pts: [
          'Quatre‑vingt‑deux membres : quatre‑vingts élus pour trois ans, plus deux membres de droit (le bâtonnier de Paris et le président de la Conférence des bâtonniers, vice‑présidents de droit).',
          'Collège général : quarante membres élus par tous les avocats disposant du droit de vote, au scrutin de liste proportionnel à un tour, listes paritaires, panachage interdit.',
          'Collège ordinal : quarante membres élus par les bâtonniers et les membres des conseils de l’ordre, au scrutin uninominal majoritaire à un tour, candidatures individuelles, parité par scrutins distincts.',
          'Chaque collège est divisé en deux circonscriptions, Paris et nationale. Recours devant la cour d’appel de Paris : huit jours pour un avocat, quinze pour le procureur général. Bureau de onze membres, dont neuf élus, fonctions gratuites.'
        ]
      }
    ],
    cles: [
      'Le CNB n’est pas un ordre national : il ne tient aucun tableau et n’exerce aucun pouvoir disciplinaire. Il n’est pas non plus un conseil des barreaux : les barreaux n’en sont pas membres et aucun lien hiérarchique ne les unit.',
      'Le Conseil d’État a jugé, à propos du règlement intérieur harmonisé, que le CNB ne détient pas le pouvoir réglementaire, qui appartient au Premier ministre. D’où la forme du décret pour le code de déontologie de 2023.',
      'Décision à caractère normatif : concertation préalable des barreaux, syndicats et organismes techniques, adoption par l’assemblée générale, notification au garde des Sceaux et aux conseils de l’ordre, publication au Journal officiel.',
      'Le code de déontologie du 30 juin 2023 a été préparé par le CNB et publié par décret ; sa codification est à droit constant et n’a pas fait disparaître le RIN.',
      'Recours : contre les décisions individuelles du CNB, cour d’appel de Paris ; contre les décisions à caractère normatif et les délibérations des jurys de CRFPA, Conseil d’État.',
      'Le président du CNB désigne l’avocat siégeant dans les trois formations du Conseil supérieur de la magistrature, délivre les certificats de spécialisation et siège à la commission de régulation des CARPA.',
      'Il désigne le bâtonnier tiers lorsque deux bâtonniers ne s’accordent pas, en matière de différend entre avocats de barreaux différents comme de réclamation déontologique.',
      'La Conférence des bâtonniers est une association loi 1901 qui fédère les barreaux de province et d’outre‑mer, à l’exclusion de Paris ; son président est vice‑président de droit du CNB.'
    ],
    cartes: [
      { q: 'Quel texte a créé le CNB, et quelle est sa nature juridique ?', r: 'La loi du 31 décembre 1990. C’est un établissement d’utilité publique doté de la personnalité morale, organisme de droit privé chargé d’une mission d’intérêt général.', src: 'L. 31 déc. 1990' },
      { q: 'Le CNB peut‑il créer des règles nouvelles ?', r: 'Non. Son pouvoir est un pouvoir d’unification des règles et usages existants, dans la limite de la hiérarchie des normes et des règles essentielles de la profession. Le Conseil d’État a rappelé que le pouvoir réglementaire appartient au Premier ministre.', src: 'CE, jurisprudence RIH' },
      { q: 'Combien de membres compte le CNB ?', r: 'Quatre‑vingt‑deux : quatre‑vingts élus pour trois ans, plus deux membres de droit, le bâtonnier de Paris et le président de la Conférence des bâtonniers, vice‑présidents de droit.', src: 'D. 27 nov. 1991' },
      { q: 'Quels sont les deux collèges électoraux du CNB ?', r: 'Le collège général (tous les avocats disposant du droit de vote, scrutin de liste proportionnel à un tour) et le collège ordinal (bâtonniers et membres des conseils de l’ordre, scrutin uninominal majoritaire à un tour).', src: 'D. 27 nov. 1991' },
      { q: 'Qu’est‑ce qu’une décision à caractère normatif ?', r: 'L’instrument du pouvoir d’unification du CNB : concertation préalable, adoption par l’assemblée générale, notification au garde des Sceaux et aux conseils de l’ordre, publication au Journal officiel. Le RIN en est issu.', src: 'D. 27 nov. 1991' },
      { q: 'Devant quelle juridiction conteste‑t‑on une décision normative du CNB ?', r: 'Devant le Conseil d’État. Les décisions individuelles relèvent en revanche de la cour d’appel de Paris.', src: 'Jurisprudence' },
      { q: 'Un avis déontologique du CNB est‑il contraignant ?', r: 'Non. C’est une interprétation de la norme professionnelle, rendue à la demande des bâtonniers, sans pouvoir hiérarchique sur les barreaux.', src: 'RIN ; jurisprudence CE' },
      { q: 'Qu’est‑ce que la Conférence des bâtonniers ?', r: 'Une association loi 1901 fédérant les barreaux de province et d’outre‑mer, à l’exclusion de Paris. Elle forme les bâtonniers élus et peut ester en justice ; son président est vice‑président de droit du CNB.', src: 'Statuts de la Conférence des bâtonniers' },
      { q: 'Qui a préparé le code de déontologie de 2023 ?', r: 'Le CNB, dont le projet a été transmis à la Chancellerie et publié par décret du 30 juin 2023. Codification à droit constant, qui n’a pas supprimé le RIN.', src: 'D. 30 juin 2023' }
    ],
    qcm: [
      { q: 'Le CNB compte :', o: ['80 membres', '82 membres dont 2 de droit', '100 membres'], b: 1, e: '80 élus plus le bâtonnier de Paris et le président de la Conférence des bâtonniers, vice‑présidents de droit.' },
      { q: 'Le collège ordinal élit ses membres :', o: ['au scrutin de liste proportionnel', 'au scrutin uninominal majoritaire à un tour', 'au scrutin binominal'], b: 1, e: 'Uninominal majoritaire à un tour, candidatures individuelles. Le collège général vote au scrutin de liste proportionnel.' },
      { q: 'Le recours contre une décision à caractère normatif du CNB relève :', o: ['de la cour d’appel de Paris', 'du Conseil d’État', 'de la Cour de cassation'], b: 1, e: 'Conseil d’État pour les décisions normatives, cour d’appel de Paris pour les décisions individuelles.' },
      { q: 'Le CNB exerce‑t‑il un pouvoir disciplinaire ?', o: ['oui, en appel', 'oui, en cassation ordinale', 'non, aucun'], b: 2, e: 'Il n’est ni un ordre national ni une juridiction : ni tableau, ni discipline.' },
      { q: 'Le président du CNB désigne notamment :', o: ['tous les bâtonniers de France', 'l’avocat siégeant dans les formations du CSM, et intervient pour le bâtonnier tiers', 'les membres du Conseil d’État'], b: 1, e: 'Désignation de l’avocat au CSM ; certificat de spécialisation ; bâtonnier tiers en cas de désaccord entre bâtonniers.' },
      { q: 'La Conférence des bâtonniers fédère :', o: ['tous les barreaux y compris Paris', 'les barreaux de province et d’outre‑mer, à l’exclusion de Paris', 'uniquement les bâtonniers d’Île‑de‑France'], b: 1, e: 'Association loi 1901, hors Paris ; son président est vice‑président de droit du CNB.' },
      { q: 'Le financement du CNB repose sur :', o: ['une subvention exclusive de l’État', 'une cotisation annuelle à la charge des avocats inscrits au tableau', 'la seule cotisation ordinale locale'], b: 1, e: 'Cotisation annuelle fixée par le CNB, proportionnelle au nombre d’inscrits ; titres exécutoires possibles.' },
      { q: 'Un avis déontologique du CNB est :', o: ['une décision normative publiée au JO', 'une interprétation non contraignante rendue à la demande des bâtonniers', 'un acte disciplinaire'], b: 1, e: 'Interprétation sans pouvoir hiérarchique sur les barreaux.' }
    ],
    jury: [
      { q: 'Le CNB est‑il un ordre national des avocats ?', r: 'Non, et la distinction est essentielle. Il lui manque les deux attributs de l’ordre : la tenue du tableau et le pouvoir disciplinaire, restés aux barreaux et aux juridictions disciplinaires. Il n’est pas davantage un conseil des barreaux, ceux‑ci n’en étant pas membres et n’ayant avec lui aucun lien hiérarchique. C’est un établissement d’utilité publique qui représente et unifie, sans administrer.' },
      { q: 'Quelle est la limite du pouvoir normatif du CNB ?', r: 'Trois limites cumulatives : la hiérarchie des normes, les règles essentielles de la profession fixées par la loi, et l’examen de proportionnalité imposé par la directive de 2018 pour toute règle nouvelle en matière de services professionnels. Le Conseil d’État a annulé le règlement intérieur harmonisé en rappelant que le pouvoir réglementaire appartient au Premier ministre : le CNB unifie l’existant, il ne légifère pas.' },
      { q: 'Comment s’articulent le RIN et le code de déontologie de 2023 ?', r: 'Ils coexistent. Le code, publié par décret sur proposition du CNB, rassemble par voie réglementaire les règles relatives aux principes essentiels et aux devoirs envers les clients, la partie adverse et les confrères. Il codifie à droit constant, son apport substantiel est mineur, et il n’a pas abrogé le RIN, qui reste le texte de référence, plus détaillé et régulièrement modifié par décisions à caractère normatif.' },
      { q: 'Le CNB peut‑il agir en justice pour la profession ?', r: 'Oui. Il peut se constituer partie civile pour des faits portant un préjudice direct ou indirect à l’intérêt collectif de la profession. Son président a qualité pour agir en son nom dans tous les actes de la vie civile et le représenter auprès des pouvoirs publics.' },
      { q: 'Comment le CNB est‑il financé ?', r: 'Par une cotisation annuelle à la charge des avocats inscrits au tableau, dont il fixe chaque année le montant et les modalités de paiement, calculée en proportion du nombre d’avocats inscrits. Il peut émettre des titres exécutoires en cas de non‑paiement, le défaut pouvant en outre justifier une omission facultative du tableau. Les barreaux ne se portent pas garants de leurs membres.' },
      { q: 'Pourquoi le code de déontologie de 2023 n’a‑t‑il pas fait disparaître le RIN ?', r: 'Codification à droit constant par décret, sur proposition du CNB : il rassemble surtout principes essentiels et devoirs envers clients, adversaires et confrères. Le RIN reste le texte plus détaillé, modifié par décisions à caractère normatif. Ils coexistent. Le Conseil d’État a rappelé que le pouvoir réglementaire appartient au Premier ministre : d’où la forme du décret pour le code, et la limite du pouvoir d’unification du CNB.' },
      { q: 'Devant quelle juridiction conteste‑t‑on quoi, s’agissant du CNB ?', r: 'Décisions individuelles : cour d’appel de Paris. Décisions à caractère normatif et délibérations des jurys de CRFPA : Conseil d’État. Cette répartition est un classique de l’oral d’organisation professionnelle.' }
    ],
    cas: {
      e: 'Le CNB adopte une décision à caractère normatif imposant à tous les avocats un logiciel unique de conflict check, payant. Un barreau et un syndicat entendent la contester. Que leur répondez‑vous ?',
      r: 'Deux questions se posent. Sur la compétence : le CNB n’a qu’un pouvoir d’unification des règles et usages existants ; imposer un outil unique et payant excède vraisemblablement ce pouvoir et relèverait du pouvoir réglementaire du Premier ministre. La mesure doit en outre satisfaire l’examen de proportionnalité imposé par la directive de 2018, ce qui suppose de démontrer qu’aucune mesure moins contraignante n’atteindrait l’objectif d’intérêt général. Sur la voie de recours : la contestation d’une décision à caractère normatif relève du Conseil d’État. Le barreau, en tant que personne morale intéressée, a qualité pour agir ; en revanche la jurisprudence dénie cette qualité aux syndicats professionnels pour contester une délibération ordinale, question à vérifier selon la nature exacte de l’acte attaqué.'
    }
  }
];
