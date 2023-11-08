const { db } = require("./firebase");
const { addProductsToFirestore } = require("./firebase");

const products = [
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Vanille",
    contenance: "250g",
    description:
      "La vanille apportera à la crème de châtaigne une pointe de rondeur et de gourmandise.",
    name: "Crème de Châtaigne Vanille - Marron Châtaigne",
    picture:
      "https://photos.google.com/share/AF1QipOq2OBl0BH4Q3AoE1jicQaiGSwzIjdNYIWcDqQIIziV1egw4WVb-q6xMKf1xYYCBw?key=QWZ3c2ZHSXdud0tsOTN3cG9IV1ZVaWVReGVvb0V3",
    price: 5.1,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Chocolat, Noisette",
    contenance: "250g",
    description:
      "Une pâte à tartiner ultra gourmande au bon goût de noisettes et de chocolat au lait.",
    name: "Pâte à tartiner Châtaigne/Chocolat/Noisette - Marron Châtaigne",
    picture: "URL_de_l_image",
    price: 6.1,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne",
    contenance: "320g",
    description:
      "S'utilise principalement en pâtisserie (gâteaux, crèmes desserts, mousses, etc.) ou pour parfumer vos plats en sauces (jus de viandes, bouillons).",
    name: "Purée de Châtaigne - Marron Châtaigne",
    picture: "URL_de_l_image",
    price: 6.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Chocolat noir",
    contenance: "240g",
    description:
      "L'alliance parfaite du chocolat noir et de la châtaigne dans un pot. Une crème puissante et élégante.",
    name: "Crème de Châtaigne au chocolat noir BIO - La Ferme du Châtaignier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Rhum",
    contenance: "240g",
    description:
      "Une crème de châtaigne étonnante grâce à ses légères notes ambrées apportées par le rhum.",
    name: "Crème de Châtaigne au rhum BIO - La Ferme du Châtaignier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Cognac",
    contenance: "240g",
    description:
      "Le cognac apportera des notes boisées et caramélisées à la crème de châtaigne.",
    name: "Crème de Châtaigne au cognac BIO - La Ferme du Châtaignier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Noix",
    contenance: "240g",
    description:
      "Une crème de châtaigne un peu plus croquante apportée par de subtiles cerneaux de noix.",
    name: "Crème de Châtaigne aux noix BIO - La Ferme du Châtaignier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Café torréfié",
    contenance: "240g",
    description: "Une alliance délicate de la châtaigne et du café torréfié.",
    name: "Crème de Châtaigne au café BIO - La Ferme du Châtaignier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Marron",
    contenance: "350g",
    description:
      "Elle plaira aux amoureux de la châtaigne grâce à un taux de sucre diminué pour une saveur de châtaigne décuplée !",
    name: "Crème de marrons allégée - Aux Délices de Cautet",
    picture: "URL_de_l_image",
    price: 7.1,
  },
  {
    category: "Epicerie sucrée",
    composition: "Marron",
    contenance: "370g",
    description:
      "Une crème de marron délicate et parfaitement équilibrée. À savourer à la petite cuillère, en tartines ou dans vos verrines de fromage blanc !",
    name: "Crème de marrons - Aux Délices de Cautet",
    picture: "URL_de_l_image",
    price: 7.1,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Marrons confits",
    contenance: "250g",
    description:
      "De petits bouts de marrons confits vont apporter croquant et gourmandise à la crème, c'est divinement délicieux !",
    name: "Léger de Châtaigne aux morceaux confits - Aux Délices de Cautet",
    picture: "URL_de_l_image",
    price: 7.4,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Gingembre",
    contenance: "330g",
    description:
      "Une alliance étonnante et exotique du gingembre à la châtaigne.",
    name: "Délice de Châtaigne d'Ardèche au gingembre - Domaine de Barry",
    picture: "URL_de_l_image",
    price: 6.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne",
    contenance: "80g",
    description:
      "Pratique à emporter dans le cartable pour les tout-petits ou au bureau pour les plus grands !",
    name: "Crème de Châtaigne en tube - Marron Châtaigne",
    picture: "URL_de_l_image",
    price: 2.5,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne, Safran",
    contenance: "250g",
    description:
      "Le safran a un goût subtil et délicat avec des notes florales et légèrement épicées. Il va naturellement rehausser et compléter les saveurs naturellement sucrées et noisetées de la crème de marron, créant ainsi un profil gustatif plus complexe et intéressant.",
    name: "L'UNIQUE Confiture de Châtaigne au Safran - LE SAFRAN de Romégier",
    picture: "URL_de_l_image",
    price: 7.5,
  },
  {
    category: "Epicerie sucrée",
    composition: "Pomme, Poire, Coing",
    contenance: "350g",
    description:
      "Des fruits cueillis à maturité pour un meilleur goût. Un trio délicat et savoureux.",
    name: "Confiture de Pomme/Poire/Coing - La Ferme du Châtaignier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Pêche de Vigne",
    contenance: "350g",
    description: "Douce, sucrée et une pointe d'acidité bien maîtrisée.",
    name: "Confiture de Pêche de Vigne BIO - La Ferme du Châtaignier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Groseille",
    contenance: "350g",
    description:
      "Une acidité vive et fraîche qui s'équilibre parfaitement avec le sucre.",
    name: "Confiture de Groseille BIO - La Ferme du Châtaignier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Rhubarbe",
    contenance: "350g",
    description:
      "Une confiture douce avec une subtile note d'amande apportée en cuisson de la rhubarbe.",
    name: "Confiture de Rhubarbe BIO - La Ferme du Châtaignier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Mûres",
    contenance: "350g",
    description: "Légèrement boisée et épicée, une confiture de Mûre extra !",
    name: "Confiture de Mûres - Domaine de Barry",
    picture: "URL_de_l_image",
    price: 7.5,
  },
  {
    category: "Epicerie sucrée",
    composition: "Coings",
    contenance: "350g",
    description:
      "Le coing possède un arôme floral intense et distinct, souvent comparé à une combinaison de rose et de pomme.",
    name: "Confiture de Coings - Domaine de Barry",
    picture: "URL_de_l_image",
    price: 6.5,
  },
  {
    category: "Epicerie sucrée",
    composition: "Cerise burlat",
    contenance: "300g",
    description:
      "Présente des notes légères de vanille, ajoutant une touche de douceur à l'acidité du fruit.",
    name: "Confiture Cerise burlat - La Chareyrade",
    picture: "URL_de_l_image",
    price: 5.5,
  },
  {
    category: "Epicerie sucrée",
    composition: "Safran",
    contenance: "230g",
    description:
      "La gelée de safran est une préparation délicieuse qui allie les saveurs subtiles du safran à la douceur et à la texture de la gelée. Elle peut s'utiliser pour accompagner vos fromages frais et secs, sublimer une salade de fruits, déglacer une viande grillée ou un poisson, ou s'associe encore parfaitement avec du foie gras. Un délice !",
    name: "Gelée de Safran - LE SAFRAN de Romégier",
    picture: "URL_de_l_image",
    price: 6.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Miel de Châtaignier",
    contenance: "250g",
    description: "Boisé et puissant avec des nuances subtiles de caramel.",
    name: "Miel de Châtaignier, Récolté en Ardèche - Thomas de Gaudemar",
    picture: "URL_de_l_image",
    price: 8.5,
  },
  {
    category: "Epicerie sucrée",
    composition: "Miel d'Acacia",
    contenance: "250g",
    description: "Doux, délicat et floral.",
    name: "Miel d'Acacia, Récolté en Ardèche - Thomas de Gaudemar",
    picture: "URL_de_l_image",
    price: 8.5,
  },
  {
    category: "Epicerie sucrée",
    composition: "Miel de Sapin",
    contenance: "250g",
    description:
      "Moins intense que le miel de châtaignier, il apportera un parfum boisé et des notes résineuses à vos plats ou desserts.",
    name: "Miel de Sapin, Récolté en Haute-Loire - Thomas de Gaudemar",
    picture: "URL_de_l_image",
    price: 9.2,
  },
  {
    category: "Epicerie sucrée",
    composition: "Miel de Lavande",
    contenance: "250g",
    description:
      "Le miel de lavande a des arômes floraux prononcés. Il capture l'essence parfumée et sucrée des fleurs de lavande, ce qui en fait l'une de ses caractéristiques les plus distinctives.",
    name: "Miel de Lavande, Récolté en Drôme - Thomas de Gaudemar",
    picture: "URL_de_l_image",
    price: 9.2,
  },
  {
    category: "Epicerie sucrée",
    composition: "Amandes, Citron confit, Safran",
    contenance: "150g",
    description:
      "Une alliance surprenante et délicate du safran au citron confit, le tout dans un biscuit croustillant.",
    name: "P'TIT CREUX Biscuit sucré au citron confit et safran - LE SAFRAN de Romégier",
    picture: "URL_de_l_image",
    price: 5.9,
  },
  {
    category: "Epicerie sucrée",
    composition: "Noisettes, Miel de Châtaignier",
    contenance: "120g",
    description:
      "Cœurs sablés aux noisettes et au miel de châtaignier. Un biscuit gourmand très addictif!",
    name: "Cœurs Fidèles (Sablés d'Ardèche) - Maison CHARAIX",
    picture: "URL_de_l_image",
    price: 5.8,
  },
  {
    category: "Epicerie sucrée",
    composition: "Amandes torréfiées",
    contenance: "95g",
    description:
      "Biscuit long très léger et craquant aux amandes torréfiées. SANS GLUTEN.",
    name: "Les Allumettes de Joyeuse (Aux Amandes torréfiées) - Maison CHARAIX",
    picture: "URL_de_l_image",
    price: 4.6,
  },
  {
    category: "Epicerie sucrée",
    composition: "Sablés au sel de Guérande",
    contenance: "110g",
    description:
      "Une pointe de sel dans un véritable petit sablé pur beurre : retrouvez l'authenticité des saveurs d'autrefois!",
    name: "Sablés Pur Beurre au sel de Guérande - Minute Papillon Biscuiterie",
    picture: "URL_de_l_image",
    price: 4.7,
  },
  {
    category: "Epicerie sucrée",
    composition: "Farine de Châtaigne",
    contenance: "180g",
    description:
      "Des biscuits hyper craquants et naturellement SANS GLUTEN grâce à sa composition 100% farine de châtaigne BIO!",
    name: "Biscuit à la farine de Châtaigne, Pépites de Chocolat - Marron Châtaigne",
    picture: "URL_de_l_image",
    price: 6.3,
  },
  {
    category: "Epicerie sucrée",
    composition: "Farine de Châtaigne, Amandes",
    contenance: "180g",
    description:
      "Des biscuits hyper craquants et naturellement SANS GLUTEN grâce à sa composition 100% farine de châtaigne BIO!",
    name: "Biscuit à la farine de Châtaigne, Amandes - Marron Châtaigne",
    picture: "URL_de_l_image",
    price: 6.3,
  },
  {
    category: "Epicerie sucrée",
    composition: "Farine de Châtaigne, Écorces d'Orange",
    contenance: "180g",
    description:
      "Des biscuits hyper craquants et naturellement SANS GLUTEN grâce à sa composition 100% farine de châtaigne BIO!",
    name: "Biscuits à la farine de Châtaigne, Écorces d'Orange - Marron Châtaigne",
    picture: "URL_de_l_image",
    price: 6.3,
  },
  {
    category: "Epicerie sucrée",
    composition: "Farine de Châtaigne, Figues",
    contenance: "180g",
    description:
      "Des biscuits hyper craquants et naturellement SANS GLUTEN grâce à sa composition 100% farine de châtaigne BIO!",
    name: "Biscuits à la farine de Châtaigne, Figues - Marron Châtaigne",
    picture: "URL_de_l_image",
    price: 6.3,
  },
  {
    category: "Epicerie sucrée",
    composition: "Cacao",
    contenance: "50g",
    description:
      "De petits sablés fourrés artisanaux à emporter facilement à l'école ou au bureau. Aussi beaux que bons!",
    name: "Sablé fourré aux Chocolat - DiNature",
    picture: "URL_de_l_image",
    price: 3.0,
  },
  {
    category: "Epicerie sucrée",
    composition: "Framboises",
    contenance: "50g",
    description:
      "De petits sablés fourrés artisanaux à emporter facilement à l'école ou au bureau. Aussi beaux que bons!",
    name: "Sablé fourré aux Framboises - DiNature",
    picture: "URL_de_l_image",
    price: 3.0,
  },
  {
    category: "Epicerie sucrée",
    composition: "Myrtille",
    contenance: "50g",
    description:
      "De petits sablés fourrés artisanaux à emporter facilement à l'école ou au bureau. Aussi beaux que bons!",
    name: "Sablé fourré Myrtille - DiNature",
    picture: "URL_de_l_image",
    price: 3.0,
  },
  {
    category: "Epicerie sucrée",
    composition: "Fraise",
    contenance: "50g",
    description:
      "De petits sablés fourrés artisanaux à emporter facilement à l'école ou au bureau. Aussi beaux que bons!",
    name: "Sablé fourré à l'Abricot - DiNature",
    picture: "URL_de_l_image",
    price: 3.0,
  },
  {
    category: "Epicerie sucrée",
    composition: "Abricot",
    contenance: "50g",
    description:
      "De petits sablés fourrés artisanaux à emporter facilement à l'école ou au bureau. Aussi beaux que bons!",
    name: "Sablé fourré à l'Abricot - DiNature",
    picture: "URL_de_l_image",
    price: 3.0,
  },
  {
    category: "Epicerie sucrée",
    composition: "Myrtille",
    contenance: "200g",
    description:
      "Des galets aussi croquants que fondants. Ils accompagneront vos pauses thé/café à la perfection.",
    name: "Les Galets de la Daronne, Myrtille - C & T SCHULER",
    picture: "URL_de_l_image",
    price: 6.4,
  },
  {
    category: "Epicerie sucrée",
    composition: "Châtaigne",
    contenance: "200g",
    description:
      "Des galets aussi croquants que fondants. Ils accompagneront vos pauses thé/café à la perfection.",
    name: "Les Galets de la Daronne, Châtaigne - C & T SCHULER",
    picture: "URL_de_l_image",
    price: "6,40€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Framboise",
    contenance: "200g",
    description:
      "Des galets aussi croquants que fondants. Ils accompagneront vos pauses thé/café à la perfection.",
    name: "Les Galets de la Daronne, Framboise - C & T SCHULER",
    picture: "URL_de_l_image",
    price: "6,40€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Céréales SANS GLUTEN",
    contenance: "220g",
    description:
      "Des billes de céréales SANS GLUTEN et croustillantes à souhait. Pour un petit-déjeuner sain ou pour apporter du craquant à vos verrines.",
    name: "Cric Crac Croc Céréales - Marron Châtaigne",
    picture: "URL_de_l_image",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Traditionnel",
    contenance: "150g",
    description: "Un nougat tendre et fondant. Il est juste parfait.",
    name: "Nougat Artisanal, Traditionnel - Nougaterie du Pont d'Arc",
    picture: "URL_de_l_image",
    price: "11,40€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Lavande",
    contenance: "150g",
    description: "Un nougat au parfum délicat et floral de la lavande.",
    name: "Nougat Artisanal, Lavande - Nougaterie du Pont d'Arc",
    picture: "URL_de_l_image",
    price: "11,40€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Multi-Graines",
    contenance: "150g",
    description:
      "Un nougat aussi fondant que craquant apporté par les graines.",
    name: "Nougat Artisanal, Multi-Graines - Nougaterie du Pont d'Arc",
    picture: "URL_de_l_image",
    price: "11,40€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Façon tarte au citron",
    contenance: "145g",
    description:
      "A déguster telles quelles, ou à partager démoulées. Vous pouvez aussi les consommer chaudes ou encore comme dessert glacé après passage au congélateur... Bonne dégustation ! Une envie de tarte citron à tout moment ? La voici sans gluten et sans lactose, à déguster à la cuillère ! :-)\n\nBIO ET VEGAN",
    name: "Desserts à la cuillière, Façon tarte au citron - La ronde des saveurs",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Orangette",
    contenance: "145g",
    description:
      "A déguster telles quelles, ou à partager démoulées. Vous pouvez aussi les consommer chaudes ou encore comme dessert glacé après passage au congélateur... Bonne dégustation ! La saveur chaude et colorée de l'écorce d'orange confite, enrobée de cacao 100%, gourmandise réconfortante à la cuillère !\n\nBIO ET VEGAN",
    name: "Desserts à la cuillière, Orangette - La ronde des saveurs",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Praliné",
    contenance: "145g",
    description:
      "A déguster telles quelles, ou à partager démoulées. Vous pouvez aussi les consommer chaudes ou encore comme dessert glacé après passage au congélateur... Bonne dégustation ! Noisettes et cacao 100%, tout simplement ! Sans huile de palme, pas trop de sucre, avec le crémeux du potimarron, local !\n\nBIO ET VEGAN",
    name: "Desserts à la cuillière, Praliné - La ronde des saveurs",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Banane Coco",
    contenance: "145g",
    description:
      "A déguster telles quelles, ou à partager démoulées. Vous pouvez aussi les consommer chaudes ou encore comme dessert glacé après passage au congélateur... Bonne dégustation ! De la banane, de la banane, un peu d'huile de coco, un peu de sucre de canne, aucun conservateur, ni colorant, d'où une couleur naturelle, la chair de la banane n'étant pas jaune et les pâtés artisanaux présentant un dégradé de tons à la cuisson :)\n\nBIO ET VEGAN",
    name: "Desserts à la cuillière, Banane Coco - La ronde des saveurs",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Epices et Sarrasin (cacao du Pérou 75%)",
    contenance: "50g",
    description:
      "Du chocolat CRU ! Assez peu commun d'en trouver. Le chocolatier ne va pas torréfier la fève de cacao ce qui fait que le chocolat va garder toutes ses valeurs nutritionnelles et sa saveur. Incroyable. A (faire) découvrir si vous ne connaissez pas !",
    name: "Chocolat cru d'Ardèche aux Epices et Sarrasin (cacao du Pérou 75%) - Songes et Cacao",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Curcuma Fleur de sel (Pérou, Satipo 75%)",
    contenance: "50g",
    description:
      "Du chocolat CRU ! Assez peu commun d'en trouver. Le chocolatier ne va pas torréfier la fève de cacao ce qui fait que le chocolat va garder toutes ses valeurs nutritionnelles et sa saveur. Incroyable. A (faire) découvrir si vous ne connaissez pas !",
    name: "Chocolat cru d'Ardèche aux Curcuma Fleur de sel (Pérou, Satipo 75%) - Songes et Cacao",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Gianduja Noisettes et Amandes (75%)",
    contenance: "50g",
    description:
      "Du chocolat CRU ! Assez peu commun d'en trouver. Le chocolatier ne va pas torréfier la fève de cacao ce qui fait que le chocolat va garder toutes ses valeurs nutritionnelles et sa saveur. Incroyable. A (faire) découvrir si vous ne connaissez pas !",
    name: "Chocolat cru d'Ardèche, Gianduja Noisettes et Amandes (75%) - Songes et Cacao",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Poivre de Timut (Pérou, Santipo 75%)",
    contenance: "50g",
    description:
      "Du chocolat CRU ! Assez peu commun d'en trouver. Le chocolatier ne va pas torréfier la fève de cacao ce qui fait que le chocolat va garder toutes ses valeurs nutritionnelles et sa saveur. Incroyable. A (faire) découvrir si vous ne connaissez pas !",
    name: "Chocolat cru d'Ardèche au Poivre de Timut (Pérou, Santipo 75%) - Songes et Cacao",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Noir 75% (cacao du Pérou)",
    contenance: "50g",
    description:
      "Du chocolat CRU ! Assez peu commun d'en trouver. Le chocolatier ne va pas torréfier la fève de cacao ce qui fait que le chocolat va garder toutes ses valeurs nutritionnelles et sa saveur. Incroyable. A (faire) découvrir si vous ne connaissez pas !",
    name: "Chocolat cru d'Ardèche, Noir 75% (cacao du Pérou) - Songes et Cacao",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Noir 85% (cacao du Honduras Apagrisac)",
    contenance: "50g",
    description:
      "Du chocolat CRU ! Assez peu commun d'en trouver. Le chocolatier ne va pas torréfier la fève de cacao ce qui fait que le chocolat va garder toutes ses valeurs nutritionnelles et sa saveur. Incroyable. A (faire) découvrir si vous ne connaissez pas !",
    name: "Chocolat cru d'Ardèche, Noir 85% (cacao du Honduras Apagrisac) - Songes et Cacao",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Noir intense (Pérou, Santipo)",
    contenance: "50g",
    description:
      "Du chocolat CRU ! Assez peu commun d'en trouver. Le chocolatier ne va pas torréfier la fève de cacao ce qui fait que le chocolat va garder toutes ses valeurs nutritionnelles et sa saveur. Incroyable. A (faire) découvrir si vous ne connaissez pas !",
    name: "Chocolat cru d'Ardèche 100% Noir intense (Pérou, Santipo) - Songes et Cacao",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Cannelle, sel et Châtaigne AOP (46% de cacao)",
    contenance: "50g",
    description:
      "Du chocolat CRU ! Assez peu commun d'en trouver. Le chocolatier ne va pas torréfier la fève de cacao ce qui fait que le chocolat va garder toutes ses valeurs nutritionnelles et sa saveur. Incroyable. A (faire) découvrir si vous ne connaissez pas !",
    name: "Chocolat cru d'Ardèche à la Cannelle, sel et Châtaigne AOP (46% de cacao) - Songes et Cacao",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Mille et Une Nuits (cacao du Pérou)",
    contenance: "50g",
    description:
      "Du chocolat CRU ! Assez peu commun d'en trouver. Le chocolatier ne va pas torréfier la fève de cacao ce qui fait que le chocolat va garder toutes ses valeurs nutritionnelles et sa saveur. Incroyable. A (faire) découvrir si vous ne connaissez pas !",
    name: "Chocolat cru d'Ardèche Mille et Une Nuits (cacao du Pérou) - Songes et Cacao",
    picture: "URL_de_l_image",
    price: "5,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "IVOIRE",
    contenance: "80g",
    description:
      "Les douceurs de Joël Patouillard, Meilleur Ouvrier de France, à consommer sans modération.",
    name: "Chocolat IVOIRE - Joël Patouillard MOF",
    picture: "URL_de_l_image",
    price: "6,00€",
  },
  {
    category: "Epicerie sucrée",
    composition: "LAIT SANS SUCRE",
    contenance: "80g",
    description:
      "Les douceurs de Joël Patouillard, Meilleur Ouvrier de France, à consommer sans modération.",
    name: "Chocolat LAIT SANS SUCRE - Joël Patouillard MOF",
    picture: "URL_de_l_image",
    price: "6,00€",
  },
  {
    category: "Epicerie sucrée",
    composition: "NOIR FENOUIL",
    contenance: "80g",
    description:
      "Les douceurs de Joël Patouillard, Meilleur Ouvrier de France, à consommer sans modération.",
    name: "Chocolat NOIR FENOUIL - Joël Patouillard MOF",
    picture: "URL_de_l_image",
    price: "6,00€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Verveine citronnée et Pêche",
    contenance: "1L",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout ! SANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Verveine citronnée et Pêche - Mat & Elo",
    picture: "URL_de_l_image",
    price: "4,90€",
  },

  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "1L",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout !\nSANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Mirabelle et Fleur de Châtaignier - Mat & Elo",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "1L",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout !\nSANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Fleur de Sureau et Cerise - Mat & Elo",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "1L",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout !\nSANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Fleur de Châtaignier et Abricot - Mat & Elo",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "1L",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout !\nSANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Verveine citronnée et Myrtille - Mat & Elo",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "1L",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout !\nSANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Boost' Agrum - Mat & Elo",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "1L",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout !\nSANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Mélisse et Fraise - Mat & Elo",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "33cL",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout !\nSANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Thym et Citron - Mat & Elo",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "33cL",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout !\nSANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Boost' Agrum - Mat & Elo",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "33cL",
    description:
      "Des plantes, des fruits, et un peu de sucre. C'est tout !\nSANS CONSERVATEURS, SANS COLORANTS, SANS ARÔMES AJOUTES",
    name: "Boisson Désaltérante Verveine citronnée et Citron vert - Mat & Elo",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "100cL",
    description:
      "Située au cœur de l’Ardèche méridionale,  Interlude Ardéchois vous propose une large gamme de purs jus de fruits cueillis à maturité",
    name: "Nectar de Pêche d'Ardèche - Interlude Ardéchois",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "100cL",
    description:
      "Située au cœur de l’Ardèche méridionale,  Interlude Ardéchois vous propose une large gamme de purs jus de fruits cueillis à maturité",
    name: "Nectar d'Abricot d'Ardèche - Interlude Ardéchois",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "100cL",
    description:
      "Située au cœur de l’Ardèche méridionale, Interlude Ardéchois vous propose une large gamme de purs jus de fruits cueillis à maturité",
    name: "Pur Jus Pomme d'Ardèche - Interlude Ardéchois",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "100cL",
    description:
      "Située au cœur de l’Ardèche méridionale, Interlude Ardéchois vous propose une large gamme de purs jus de fruits cueillis à maturité",
    name: "Jus Pomme et Myrtille - Interlude Ardéchois",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "100cL",
    description:
      "Située au cœur de l’Ardèche méridionale, Interlude Ardéchois vous propose une large gamme de purs jus de fruits cueillis à maturité",
    name: "Jus Pomme Coing d'Ardèche - Interlude Ardéchois",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "100cL",
    description:
      "Située au cœur de l’Ardèche méridionale, Interlude Ardéchois vous propose une large gamme de purs jus de fruits cueillis à maturité",
    name: "Nectar de Kiwi d'Ardèche - Interlude Ardéchois",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "100cL",
    description:
      "Une infusion de thé vert de Chine et de pêches d'Ardèche dont une pointe de sucre va relever le tout. Une boisson 100% artisanale parfaitement maîtrisée",
    name: "Thé Glacé Pêche - Interlude Ardéchois",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "25cL",
    description:
      "Une infusion de thé vert de Chine et de pêches d'Ardèche dont une pointe de sucre va relever le tout. Une boisson 100% artisanale parfaitement maîtrisée",
    name: "Thé Glacé Pêche - Interlude Ardéchois",
    picture: "",
    price: "2,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "25cL",
    description:
      "Des jus 100% naturels confectionnés par la coopérative ardéchoise Nectardéchois, à Pailharès",
    name: "Jus Tomate - Nectardéchois",
    picture: "",
    price: "2,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "25cL",
    description:
      "Des jus 100% naturels confectionnés par la coopérative ardéchoise Nectardéchois, à Pailharès",
    name: "Nectar Fraise - Nectardéchois",
    picture: "",
    price: "3,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Jus et Boissons",
    contenance: "25cL",
    description:
      "Des jus 100% naturels confectionnés par la coopérative ardéchoise Nectardéchois, à Pailharès",
    name: "Nectar Poire - Nectardéchois",
    picture: "",
    price: "2,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Sirops",
    contenance: "50cL",
    description:
      "La ferme du Viel Audon conduit toutes ses productions en Agriculture Biologique. Un sirop parfaitement équilibré entre fraîcheur et douceur.",
    name: "Sirop de Menthe Verte - Le Viel Audon",
    picture: "",
    price: "9,40€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Sirops",
    contenance: "50cL",
    description:
      "La ferme du Viel Audon conduit toutes ses productions en Agriculture Biologique. Aux notes florales douces, fraîches et aux nuances de fleurs blanches",
    name: "Sirop de Fleurs de Sureau - Le Viel Audon",
    picture: "",
    price: "9,40€",
  },

  {
    category: "Epicerie sucrée",
    composition: "Sirops",
    contenance: "50cL",
    description:
      "La ferme du Viel Audon conduit toutes ses productions en Agriculture Biologique. La fleur de lavande en sirop : c'est floral, frais et doux. Divin!",
    name: "Sirop de Lavande - Le Viel Audon",
    picture: "",
    price: "9,40€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Sirops",
    contenance: "50cL",
    description:
      "La ferme du Viel Audon conduit toutes ses productions en Agriculture Biologique. Une alliance parfaitement maîtrisée de la fraîcheur du thym et de l'acidité du citron.",
    name: "Sirop de Thym Citron - Le Viel Audon",
    picture: "",
    price: "9,40€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Sirops",
    contenance: "50cL",
    description:
      "Ici les fraises ont été récoltées à très bonne maturité pour un sirop gorgé de saveurs!",
    name: "Sirop de Fraise BIO - La Ferme du Châtaignier",
    picture: "",
    price: "7,80€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Sirops",
    contenance: "30cL",
    description:
      "Un sirop délicat et raffiné. À utiliser en sirop, sur des fruits, en cuisine (notamment avec des fruits de mer ou en pâtisserie).",
    name: "Sirop de Safran d'Ardèche - LE SAFRAN de Romégier",
    picture: "",
    price: "11,00€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Sirops",
    contenance: "250mL",
    description:
      "Un sirop aussi réconfortant que gourmand avec une belle rondeur apportée par la châtaigne. À utiliser en sirop, dans une préparation de pâtisserie, en cocktail, marinade ou déglaçage!",
    name: "Sirop de Châtaigne - Marron Châtaigne",
    picture: "",
    price: "6,20€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Confitures",
    contenance: "230 ml",
    description:
      "Réalisées par ma maman : des abricots bergeron qui ont confit naturellement dans un peu de sucre pour une confiture parfaitement équilibrée entre acidité et sucre. Composition : 55% de fruits pour 45% de sucre.",
    name: "Confiture Maison Abricots Bergerons",
    picture: "",
    price: "4,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Confitures",
    contenance: "230 ml",
    description:
      "Réalisées par ma maman : des mirabelles ultra mûres, ce qui fait que l'ajout de sucre est très léger. Composition : 60% de fruits pour 40% de sucre.",
    name: "Confiture Maison Mirabelles",
    picture: "",
    price: "4,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Tisanes et Cafés",
    contenance: "20g",
    description:
      "Une quinzaine de variétés de plantes aromatiques, médicinales et condimentaires sont cultivées en terrasses sur 2,500 m² et sont complétées par des cueillettes de plantes sauvages. Tisanes, sirops, sels, herbes aromatiques et autres condiments sont ainsi produits.",
    name: "Douce...heure - Tisane des Terrasses",
    picture: "",
    price: "6,20€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Tisanes et Cafés",
    contenance: "20g",
    description:
      "Une quinzaine de variétés de plantes aromatiques, médicinales et condimentaires sont cultivées en terrasses sur 2,500 m² et sont complétées par des cueillettes de plantes sauvages. Tisanes, sirops, sels, herbes aromatiques et autres condiments sont ainsi produits.",
    name: "Digestiv' - Tisane des Terrasses",
    picture: "",
    price: "6,20€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Tisanes et Cafés",
    contenance: "20g",
    description:
      "Une quinzaine de variétés de plantes aromatiques, médicinales et condimentaires sont cultivées en terrasses sur 2,500 m² et sont complétées par des cueillettes de plantes sauvages. Tisanes, sirops, sels, herbes aromatiques et autres condiments sont ainsi produits.",
    name: "Grip'toux - Tisane des Terrasses",
    picture: "",
    price: "6,20€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Tisanes et Cafés",
    contenance: "",
    description:
      "Récoltée avec patience, tendresse et amour : voilà le secret d'une verveine d'antan, le VRAI goût de la plante enfin retrouvé.",
    name: "Verveine Maison",
    picture: "",
    price: "4,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Tisanes et Cafés",
    contenance: "",
    description:
      "Ce tilleul planté devant la maison fournit des feuilles et des fleurs dont le parfum doux et délicat s'en dégage subtilement. Comme chez mamie!",
    name: "Tilleul Maison",
    picture: "",
    price: "4,50€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Tisanes et Cafés",
    contenance: "250g",
    description:
      "Café de l'Ouest de l'Ethiopie collecté auprès de petits paysans et mis sur le marché international.",
    name: "Café Ethiopie (Moka Lekempti) - Kaopa Café",
    picture: "",
    price: "5,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Tisanes et Cafés",
    contenance: "250g",
    description: "",
    name: "Café Colombie - Kaopa Café",
    picture: "",
    price: "6,20€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Tisanes et Cafés",
    contenance: "250g",
    description:
      "La plantation produit l'un des meilleurs cafés gourmets d'Océanie. Au cœur des montagnes de Papouasie-Nouvelle-Guinée, les parcelles sont situées à 1700 mètres d'altitude. Ce café vous surprendra par sa belle vivacité et ses notes d'amande, noisette et caramel. Belle longueur en bouche.",
    name: "Café Papouasie (Nouvelle Guinée) - Kaopa Café",
    picture: "",
    price: "6,90€",
  },
  {
    category: "Epicerie sucrée",
    composition: "Tisanes et Cafés",
    contenance: "250g",
    description:
      "Depuis 15 ans, la SALDAC importe le café du Pérou labélisé équitable. Ce café est produit par la coopérative Agricole de Fruits Ecologiques, dans la région de El Palomar. Café très intéressant avec le Hario V60, cette méthode douce fait ressortir son côté 'caramel'.",
    name: "Café Pérou (El Palomar) - Kaopa Café",
    picture: "",
    price: "6,20€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "Historiquement, Antioquia a accueilli les premiers caféiers locaux sur des milliers d'hectares.",
    name: "Pomme d'Amour - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Citron Meringué - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Noisette Gourmande - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Baies Sauvages - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Brioche - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Coco - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Balade en Forêt - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Fleur d'Opium - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Cannelle Orange - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Campagne après la pluie - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide and non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Fleur de Coton - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide and non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Fleur de Tiaré - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide and non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Châtaigne - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide and non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Bois d'Olivier - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "200g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide and non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Fruits Rouges - L'Echoppe Buissonnière",
    picture: "",
    price: "24,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide and non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Citronnelle - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide and non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Genêt - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Citron Meringué - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Balade en Forêt - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Campagne après la pluie - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Gaufre - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Fleur d'Opium - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Baies Sauvages - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Brioche - L'Echoppe Buissonière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Fleur de Coton - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Amande - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Déco & Maison",
    composition: "Bougies",
    contenance: "70g",
    description:
      "L'échoppe Buissonnière fabrique Artisanale de bougies parfumées, cire 100 % végétale soja, sans paraffine ni pesticide et non OGM, mèche en coton. Pots cristal avec couvercle, fermée par un film rétracté. Bougie coulée à la main dans nos ateliers Ardéchois. S = 70G M = 200G.",
    name: "Cannelle Orange - L'Echoppe Buissonnière",
    picture: "",
    price: "14,90€",
  },
  {
    category: "Epicerie salée",
    composition: "Huiles",
    contenance: "50cL",
    description:
      "La cuvée Rosetta est un assemblage dans le style Toscan. L'assemblage des variétés et des sols apporte son équilibre et son harmonie au produit.\n\nOrigine : France, Région Auvergne Rhône Alpes, 07150 Orgnac l'aven\nVariété : Frantoio, Moraiolo, Leccio del corno\nSol : Argiles rouges du tertiaire et Calcaire de l'Urgonien\nMoulin : Les olives sont ramassées 2ème quinzaine d'octobre, puis triées, lavées et effeuillées. La transformation se fait en continue et sans stockage. Un broyeur à couteaux, un court malaxage de la pâte, une double centrifugation de l'huile suivi d'une filtration directe.\n\nNotes de dégustation :\nCouleur : Vert menthe\nNez : Fruits rouges, basilic\nBouche : Huile amère et piquante, puissante, sur des notes de thym et de romarin.\nAccord en cuisine : idéale sur des salades vertes ou composées.",
    name: "Huile d'Olive Vierge Rosetta - La MaGnanerie",
    picture: "",
    price: "24,80€ *Agriculture Biologique",
  },
  {
    category: "Epicerie salée",
    composition: "Huiles",
    contenance: "250mL",
    description:
      "Notre huile d'olive à l’ail/persil est obtenue en travaillant les olives, l’ail violet frais et le persil lors de la fabrication de l’huile. Cuisse de grenouilles, escargots, pommes de terre et crustacés seront sublimés de ce délicat mariage de saveur. Un incontournable compagnon qui allie plaisir et art de la table. Se conserve à l’abri de la lumière et à l’abri de la chaleur, pour une préservation optimale du produit.",
    name: "Olives & Ail/Persil - Lou Moulin d'Oli",
    picture: "",
    price: "13,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Huiles",
    contenance: "250mL",
    description:
      "Notre huile d'olive au basilic est obtenue en travaillant les olives et le basilic frais lors de la fabrication de l’huile. Ce délicieux nectar réchauffera vos salades et crudités d’un souffle d’été tout au long de l'année. Se conserve à l’abri de la lumière et à l’abri de la chaleur, pour une préservation optimale du produit.",
    name: "Olives & Basilic - Lou Moulin d'Oli",
    picture: "",
    price: "13,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Huiles",
    contenance: "250mL",
    description:
      "Le piment d’Espelette est ajouté dans l’huile après transformation et diffuse ses arômes. Le but est de travailler la diffusion des arômes typiques du Piment, sans que l’huile soit trop piquante. Cette huile très colorée est utilisée pour décorer des assiettes de salades ou compositions culinaires. Très intéressante en association de plats simples, tels que les œufs, les viandes blanches, les grillades ou sur une ratatouille. Se conserve à l’abri de la lumière et à l’abri de la chaleur, pour une préservation optimale du produit.",
    name: "Huile d'Olive Piment d'Espelette - Lou Moulin d'Oli",
    picture: "",
    price: "13,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Huiles",
    contenance: "250mL",
    description:
      "Notre huile d’olive au thym-laurier est obtenue en travaillant les olives, le thym et le laurier lors de la fabrication de l’huile. Une huile d’olive remplie de fraicheur où l’olive, le thym et le laurier ont été broyés simultanément. Une note séduisante de garrigue pour sublimer vos grillades, tians de légumes, papillotes et pommes de terre au four. Se conserve à l’abri de la lumière et à l’abri de la chaleur, pour une préservation optimale du produit.",
    name: "Olives & Thym-Laurier - Lou Moulin d'Oli",
    picture: "",
    price: "13,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Huiles",
    contenance: "250mL",
    description:
      "Notre huile d’olive au citron est obtenue en travaillant les olives et les citrons frais lors de la fabrication de l’huile. Cette huile d'olive est très aromatique, fraîche et très typée citron. Poissons, moules et crustacés l’ont adopté et ne peuvent plus s’en passer. Se conserve à l’abri de la lumière et à l’abri de la chaleur, pour une préservation optimale du produit.",
    name: "Huile d'Olive au Citron - Lou Moulin d'Oli",
    picture: "",
    price: "13,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Huiles",
    contenance: "250mL",
    description:
      "Les cèpes d’Ardèche sont ajoutés dans l’huile après transformation et diffusent leurs arômes. Cette huile d'olive, très puissante sur le plan aromatique, est très appréciée dans les féculents, pommes de terre, pâtes, riz, risotto. Excellent sur une omelette simple ou un œuf sur le plat. Pour les amateurs de cèpes, à utiliser en finesse sur tous types de plats chauds ou froids. Se conserve à l’abri de la lumière et à l’abri de la chaleur, pour une préservation optimale du produit.",
    name: "Huile d'Olive & Cèpes - Lou Moulin d'Oli",
    picture: "",
    price: "13,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Soupes & Gaspachos",
    contenance: "1L",
    description:
      "Velouté d'Automne au potimarron de La Ferme du Paon. La ferme du paon est certifiée Bio. Depuis 2021, ce couple passionné a créé un atelier de transformation qui leur permet de produire des ketchup, des soupes, des choucroutes, des purées...",
    name: "Velouté d'Automne au Potimarron - La Ferme du Paon",
    picture: "",
    price: "6,90€",
  },
  {
    category: "Epicerie salée",
    composition: "Soupes & Gaspachos",
    contenance: "1L",
    description:
      "Depuis 2019, la ferme du Paon crée de délicieux produits transformés à partir des légumes et châtaignes qu'ils produisent à la ferme.  Leur production est certifiée bio. L'alliance parfaite et cocooning de la patate douce et du lait de coco. C'est gourmand et réconfortant !",
    name: "Velouté de Patate Douce et Lait de Coco - La Ferme du Paon",
    picture: "",
    price: "6,90€",
  },
  {
    category: "Epicerie salée",
    composition: "Soupes & Gaspachos",
    contenance: "1L",
    description:
      "Depuis 2019, la ferme du Paon crée de délicieux produits transformés à partir des légumes et châtaignes qu'ils produisent à la ferme.  Leur production est certifiée bio. L'alliance parfaite et cocooning de la patate douce et du lait de coco. C'est gourmand et réconfortant !",
    name: "Velouté d'Hiver aux Blettes - La Ferme du Paon",
    picture: "",
    price: "6,90€",
  },
  {
    category: "Epicerie salée",
    composition: "Soupes & Gaspachos",
    contenance: "1L",
    description:
      "COUP DE COEUR Depuis 2019, la ferme du Paon crée de délicieux produits transformés à partir des légumes et châtaignes qu'ils produisent à la ferme.  Leur production est certifiée bio. L'alliance parfaite et cocooning de la patate douce et du lait de coco. C'est gourmand et réconfortant !",
    name: "Gaspacho - La Ferme du Paon",
    picture: "",
    price: "6,90€",
  },
  {
    category: "Epicerie salée",
    composition: "Soupes & Gaspachos",
    contenance: "500mL",
    description:
      "COUP DE COEUR Depuis 2019, la ferme du Paon crée de délicieux produits transformés à partir des légumes et châtaignes qu'ils produisent à la ferme.  Leur production est certifiée bio. L'alliance parfaite et cocooning de la patate douce et du lait de coco. C'est gourmand et réconfortant !",

    name: "Gaspacho - La Ferme du Paon",
    picture: "",
    price: "4,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Plats préparés",
    contenance: "690g",
    description: "",
    name: "Cardons - Conserves Fermières",
    picture: "",
    price: "9,90€",
  },
  {
    category: "Epicerie salée",
    composition: "Arômates",
    contenance: "60g",
    description:
      "La ferme du Viel Audon conduit toutes ses productions en Agriculture Biologique. Sel fin de Guérande, Romarin, Sauge, Laurier, Livèche. Comment l'utiliser ? - Avant la cuisson, parsemez sur vos ingrédients compris dans votre recette (oignons, ail, courgettes, etc.) - Pendant dans la sauce pour que, lors de la cuisson, le sel ressorte toutes ses arômes - En assaisonnement final, pour réajuster en cas de besoin !",
    name: "Sel aux Herbes Plats en Sauce - Le Viel Audon",
    picture: "",
    price: "5,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Arômates",
    contenance: "60g",
    description:
      "La ferme du Viel Audon conduit toutes ses productions en Agriculture Biologique. Sel fin de Guérande, Thym, Romarin, Sarriette, Hysope, Laurier. Comment l'utiliser ? - Saupoudrez le sel uniformément sur toutes les surfaces de la viande, puis laissez-la reposer à température ambiante pendant environ 30 minutes avant de la griller. Cette étape permet au sel de pénétrer et d'assaisonner la viande de manière plus efficace !",
    name: "Sel aux Herbes Grillades - Le Viel Audon",
    picture: "",
    price: "5,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Arômates",
    contenance: "40g",
    description:
      "La ferme du Viel Audon conduit toutes ses productions en Agriculture Biologique. Le zaatar est un mélange d'épices et d'herbes aromatiques largement utilisé dans la cuisine du Moyen-Orient. Il apporte une saveur unique et parfumée aux plats, pains, légumes, salades, grillades, soupes, houmous, viandes et poissons...",
    name: "ZA'ATAR - La Viel Audon",
    picture: "",
    price: "5,90€",
  },
  {
    category: "Epicerie salée",
    composition: "Terrines",
    contenance: "200g",
    description:
      "Terrine aux Girolles de Lafumat. La maison Lafumat existe depuis cinq générations et s'est toujours transmise de père en fils. Charcuterie est 100% artisanale sans colorant, ni conservateur. Ici les girolles ont apporté une saveur délicate avec des notes de noisette.",
    name: "Terrine aux Girolles - Lafumat",
    picture: "",
    price: "6,95€",
  },
  {
    category: "Epicerie salée",
    composition: "Terrines",
    contenance: "200g",
    description:
      "Terrine au Saint Joseph de Lafumat. La maison Lafumat existe depuis cinq générations et s'est toujours transmise de père en fils. Charcuterie est 100% artisanale sans colorant, ni conservateur. Ici la viande mijotée au Saint Joseph va apporter de la complexité à la terrine, avec des notes légèrement fruitées épicées et terrestres.",
    name: "Terrine au Saint Joseph - Lafumat",
    picture: "",
    price: "6,95€",
  },
  {
    category: "Epicerie salée",
    composition: "Terrines",
    contenance: "200g",
    description:
      "Terrine aux Châtaignes de Lafumat. La maison Lafumat existe depuis cinq générations et s'est toujours transmise de père en fils. Charcuterie est 100% artisanale sans colorant, ni conservateur. Ici les petits bouts de châtaignes vont apporter une note légèrement sucrée et de la rondeur à la terrine.",
    name: "Terrine aux Châtaignes - Lafumat",
    picture: "",
    price: "6,95€",
  },
  {
    category: "Epicerie salée",
    composition: "Terrines",
    contenance: "200g",
    description:
      "Terrine au Viognier de Lafumat. La maison Lafumat existe depuis cinq générations et s'est toujours transmise de père en fils. Charcuterie est 100% artisanale sans colorant, ni conservateur. Ici, le viognier, dans lequel a mijoté la viande, apportera douceur, et un subtil arôme de miel à la terrine. Une touche florale qui adoucit le tout.",
    name: "Terrine au Viognier - Lafumat",
    picture: "",
    price: "6,95€",
  },
  {
    category: "Epicerie salée",
    composition: "Terrines",
    contenance: "180g",
    description:
      "Terrine de Campagne de Lafumat. La maison Lafumat existe depuis cinq générations et s'est toujours transmise de père en fils. Charcuterie est 100% artisanale sans colorant, ni conservateur. LA terrine de campagne par excellence, légèrement relevée par une note de poivre et d'ail. Elle reste parfaitement équilibrée.",
    name: "Terrine de Campagne - Lafumat",
    picture: "",
    price: "5,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Terrines",
    contenance: "180g",
    description:
      "Gratton Ardéchois aux 5 baies de Lafumat. La maison Lafumat existe depuis cinq générations et s'est toujours transmise de père en fils. Charcuterie est 100% artisanale sans colorant, ni conservateur. Le gratton ardéchois est généralement servi tranché en portions individuelles et peut être dégusté chaud ou froid. Il est souvent accompagné de pain de campagne et de cornichons. Le goût est riche, avec des notes de viande, d'herbes et d'épices. C'est un plat traditionnel de la région qui reflète l'histoire et la culture culinaire de l'Ardèche.",
    name: "Gratton Ardéchois aux 5 Baies - Lafumat",
    picture: "",
    price: "5,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Terrines",
    contenance: "86g",
    description:
      "Terrine de Campagne de Lafumat. La maison Lafumat existe depuis cinq générations et s'est toujours transmise de père en fils. Charcuterie est 100% artisanale sans colorant, ni conservateur. LA terrine de campagne par excellence, légèrement relevée par une note de poivre et d'ail. Elle reste parfaitement équilibrée.",
    name: "Terrine de Campagne - Lafumat",
    picture: "",
    price: "3,80€",
  },
  {
    category: "Epicerie salée",
    composition: "Terrines",
    contenance: "86g",
    description:
      "Chorizo Tomate façon Terrine de Lafumat. La maison Lafumat existe depuis cinq générations et s'est toujours transmise de père en fils. Charcuterie est 100% artisanale sans colorant, ni conservateur. Une autre façon de savourer le chorizo : en terrine ! Avec ses notes confites, apportées par la tomate, et ses épices douces et légères apportées par le piment doux, il sera idéal à l'apéritif ou mélangé dans du riz ou des pâtes.",
    name: "Chorizo Tomate façon Terrine - Lafumat",
    picture: "",
    price: "3,80€",
  },
  {
    category: "Epicerie salée",
    composition: "Biscuits Apéritifs",
    contenance: "110g",
    description:
      "Petits salés Curry de Minute Papillon Biscuiterie. Retrouvez les biscuits salés et sucrés BIO fabriqués artisanalement par Minute Papillon, une authentique biscuiterie ardéchoise ! Des ingrédients de qualité (farines semi-complètes, sucres non raffinés, huile d'olive vierge extra bio, etc) apporteront plus de consistance et de saveurs. Résultat : des biscuits croquants, authentiques et savoureux. On redécouvre enfin le VRAI GOÛT du petit biscuit ! Sans additif, sans conservateur.",
    name: "Petits salés Curry - Minute Papillon Biscuiterie",
    picture: "",
    price: "4,80€ ",
  },
  {
    category: "Epicerie salée",
    composition: "Biscuits Apéritifs",
    contenance: "110g",
    description:
      "Petits salés Thym et Huile'Olive de Minute Papillon Biscuiterie. Retrouvez les biscuits salés et sucrés BIO fabriqués artisanalement par Minute Papillon, une authentique biscuiterie ardéchoise ! Des ingrédients de qualité (farines semi-complètes, sucres non raffinés, huile d'olive vierge extra bio, etc) apporteront plus de consistance et de saveurs. Résultat : des biscuits croquants, authentiques et savoureux. On redécouvre enfin le VRAI GOÛT du petit biscuit ! Sans additif, sans conservateur.",
    name: "Petits salés Thym et H duile d'Olive - Minute Papillon Biscuiterie",
    picture: "",
    price: "4,80€ ",
  },
  {
    category: "Epicerie salée",
    composition: "Biscuits Apéritifs",
    contenance: "125g",
    description:
      "Chips Artisanales aux Herbes de Provence de La Ferme Victouron. Cela faisait longtemps que nous n'avions pas goûté des chips aussi délicieuses. En fait non, nous avons simplement retrouvé le goût de la chips ! Fines, au bon goût de pomme de terre, le tout relevé par une pointe de sel et d'herbes de Provence, pour la note méditerranéenne et ensoleillée.",
    name: "Chips Artisanales aux Herbes de Provence - La Ferme Victouron",
    picture: "",
    price: "3,70€  ",
  },
  {
    category: "Epicerie salée",
    composition: "Biscuits Apéritifs",
    contenance: "125g",
    description:
      "Chips Artisanales au Piment d'Espelette de La Ferme Victouron. Cela faisait longtemps que nous n'avions pas goûté des chips aussi délicieuses. En fait non, nous avons simplement retrouvé le goût de la chips ! Fines, au bon goût de pomme de terre, le tout relevé par une pointe de sel et de piment d'Espelette pour une note d'épice savoureuse.",
    name: "Chips Artisanales au Piment d'Espelette - La Ferme Victouron",
    picture: "",
    price: "3,70€  ",
  },
  {
    category: "Epicerie salée",
    composition: "Biscuits Apéritifs",
    contenance: "125g",
    description:
      "Chips Artisanales de La Ferme Victouron. Cela faisait longtemps que nous n'avions pas goûté des chips aussi délicieuses. En fait non, nous avons simplement retrouvé le goût de la chips ! Fines, au bon goût de pomme de terre, le tout relevé par une pointe de sel. Et c'est tout!",
    name: "Chips Artisanales - La Ferme Victouron",
    picture: "",
    price: "3,70€  ",
  },
  {
    category: "Epicerie salée",
    composition: "Biscuits Apéritifs",
    contenance: "130g",
    description:
      "Apéro'Time au SAFRAN de Romégier. Avez-vous déjà goûté des biscuits au safran et à l'emmental ? Un combo parfaitement réussi par notre productrice Karine. C'est subtil, raffiné et gourmand ! Une belle découverte à (s')offrir :)",
    name: "Apéro'Time - LE SAFRAN de Romégier",
    picture: "",
    price: "5,90€",
  },
  {
    category: "Epicerie salée",
    composition: "Tartinables",
    contenance: "145g",
    description:
      "Tartinades végan de différentes saveurs. Chaque tartinade est 100% végétale, donc sans lactose, sans gluten, sans huile de palme, sans levure, et sans soja ! Les légumes, principale matière première, proviennent autant que possible d'amis petits maraîchers bio du coin. C'est multifonctionnel, doux, parfumé, et végan : à consommer sans modération :) Saveurs : Provençale, Caviar de lentilles vertes du Puy, Crème de champignons Shiitaké, Houmous au paprika.",
    name: "Tartinades végan",
    picture: "",
    price: "5,50€  ",
  },
  {
    category: "Epicerie salée",
    composition: "Tartinables",
    contenance: "100g",
    description:
      "Tapenade Ardéchois de Conserves Fermières. Une alliance plus que réussie : la châtaigne apportera de la douceur et une note sucrée, ce qui attendrira la pointe d'amertume apportée par l'olive noire. A déguster en tartine ou pour twister vos vinaigrettes, fonds de tartes, plats de pâtes ou riz !",
    name: "Tapenade Ardéchois - Conserves Fermières",
    picture: "",
    price: "5,90€  ",
  },
  {
    category: "Epicerie salée",
    composition: "Tartinables",
    contenance: "90g",
    description:
      "Tapenade au Piment d'Espelette de Lou Moulin d'Oli. La purée d’olive est fabriquée à partir d’olives vertes ou noires. Elle peut être délicatement associée à d’autres condiments tels que le pignon, la noix, l’amande, le basilic, le piment d’Espelette, la tomate séchée, la truffe, le cèpe ou nature tout simplement. La purée d’olive doit son onctuosité souple et agréable grâce à un ajout d’huile d'olive. À utiliser sur des toasts à l’apéritif, ou à déguster sur des bâtonnets de carottes, courgettes, endives, chou-fleur. Elle peut aussi apporter une touche originale dans vos vinaigrettes. Elle peut également agrémenter poêlées de viandes blanches, parfumer vos papillotes de poisson ou vos tomates farcies.",
    name: "Tapenade au Piment d'Espelette - Lou Moulin d'Oli",
    picture: "",
    price: "5,40€ ",
  },
  {
    category: "Epicerie salée",
    composition: "Tartinables",
    contenance: "90g",
    description:
      "Tapenade à l'ail des ours de Lou Moulin d'Oli. Depuis 2002, Marion et Ingrid cogèrent l'exploitation familiale sur laquelle sont plantées des variétés locales ardéchoises et des variétés italiennes. Cette purée d’olive doit son onctuosité souple et agréable grâce à un ajout d’huile d’olive, dont les fruits ont été travaillés en précocité de maturité, de manière à obtenir des notes fruitées et vertes. À utiliser sur des toasts à l’apéritif, avec des bâtonnets de crudités ou des gressins. Elle peut également agrémenter poêlées de viandes blanches, parfumer vos papillotes de poissons ou vos plats de riz et de pâtes.",
    name: "Tapenade à l'ail des ours - Lou Moulin d'Oli",
    picture: "",
    price: "5,50€ ",
  },
  {
    category: "Epicerie salée",
    composition: "Tartinables",
    contenance: "90g",
    description:
      "Tapenade au Basilic de Lou Moulin d'Oli. Depuis 2002, Marion et Ingrid cogèrent l'exploitation familiale sur laquelle sont plantées des variétés locales ardéchoises et des variétés italiennes. Cette purée d’olive doit son onctuosité souple et agréable grâce à un ajout d’huile d’olive, dont les fruits ont été travaillés en précocité de maturité, de manière à obtenir des notes fruitées et vertes. À utiliser sur des toasts à l’apéritif, avec des bâtonnets de crudités ou des gressins. Elle peut également agrémenter poêlées de viandes blanches, parfumer vos papillotes de poissons ou vos plats de riz et de pâtes.",
    name: "Tapenade au Basilic - Lou Moulin d'Oli",
    picture: "",
    price: "5,50€ ",
  },
  {
    category: "Epicerie salée",
    composition: "Tartinables",
    contenance: "90g",
    description:
      "Tapenade Nature aux Olives Vertes de Lou Moulin d'Oli. La purée d’olive est fabriquée à partir d’olives vertes ou noires et peut être délicatement associée à d’autres condiments. Cette purée d’olive doit son onctuosité souple et agréable grâce à un ajout d’huile d’olive. À utiliser sur des toasts à l’apéritif, avec des bâtonnets de crudités ou des gressins. Elle peut également agrémenter poêlées de viandes blanches, parfumer vos papillotes de poissons ou vos plats de riz et de pâtes.",
    name: "Tapenade Nature aux Olives Vertes - Lou Moulin d'Oli",
    picture: "",
    price: "5,50€ ",
  },
  {
    category: "Epicerie salée",
    composition: "Tartinables",
    contenance: "90g",
    description:
      "Tapenade Nature aux Olives Noires de Lou Moulin d'Oli. Depuis 2002, Marion et Ingrid cogèrent l'exploitation familiale sur laquelle sont plantées des variétés locales ardéchoises et des variétés italiennes. Cette purée d’olive doit son onctuosité souple et agréable grâce à un ajout d’huile d’olive, dont les fruits ont été travaillés en précocité de maturité, de manière à obtenir des notes fruitées et vertes. À utiliser sur des toasts à l’apéritif, avec des bâtonnets de crudités ou des gressins. Elle peut également agrémenter poêlées de viandes blanches, parfumer vos papillotes de poissons ou vos plats de riz et de pâtes.",
    name: "Tapenade Nature aux Olives Noires - Lou Moulin d'Oli",
    picture: "",
    price: "5,50€ ",
  },
  {
    category: "Epicerie salée",
    composition: "Sauces & Condiments",
    contenance: "200g",
    description:
      "Ketchup de Courgettes de La Ferme du Paon. Une alternative saine et tout aussi savoureuse que le ketchup traditionnel ! Idéal avec des frites, dans des plats comme du riz ou des pâtes, dans les sandwichs, hamburgers. Une création originale et bio signée La Ferme du Paon",
    name: "Ketchup de Courgettes - La Ferme du Paon",
    picture: "",
    price: "5,50€ ",
  },
  {
    category: "Epicerie salée",
    composition: "Moutarde Safranée",
    contenance: "200g",
    description:
      "Située au cœur de l’Ardèche, l'exploitation de safran de Karine se trouve sur une parcelle de 600 m2. Il est cultivé avec passion, cueilli, émondé à la main puis séché. Le safran est de première catégorie selon la norme ISO 3632-2 et a reçu la médaille d’or 2018. La moutarde au safran est appréciée pour son mariage harmonieux entre le piquant de la moutarde et la subtilité du safran. Son profil aromatique unique la rend particulièrement adaptée pour rehausser la saveur des plats et ajouter une touche d'élégance aux préparations culinaires. Idéale avec de la volaille ou de poisson grillé.",
    name: "Moutarde Safranée - LE SAFRAN de Romégier",
    picture: "",
    price: "11,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Cornichon Lactofermenté en tranche",
    contenance: "200g",
    description:
      "Les Cruculents est le spécialiste d'une technologie à faible empreinte énergétique pour la conservation de produits : la lacto-fermentation ! La lacto-fermentation – ou fermentation lactique – est un procédé de conservation des aliments qui consiste à laisser macérer les aliments en l'absence d'oxygène. Ce super-aliment est à consommer sans modération.",
    name: "Cornichon Lactofermenté en tranche - Les Cruculents",
    picture: "",
    price: "4,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Carotte Lactofermentée",
    contenance: "200g",
    description:
      "Les Cruculents est le spécialiste d'une technologie à faible empreinte énergétique pour la conservation de produits : la lacto-fermentation ! La lacto-fermentation – ou fermentation lactique – est un procédé de conservation des aliments qui consiste à laisser macérer les aliments en l'absence d'oxygène. Ce super-aliment est à consommer sans modération.",
    name: "Carotte Lactofermentée - Les Cruculents",
    picture: "",
    price: "3,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Carotte Curcuma Lactofermentée",
    contenance: "200g",
    description:
      "Les Cruculents est le spécialiste d'une technologie à faible empreinte énergétique pour la conservation de produits : la lacto-fermentation ! La lacto-fermentation – ou fermentation lactique – est un procédé de conservation des aliments qui consiste à laisser macérer les aliments en l'absence d'oxygène. Ce super-aliment est à consommer sans modération.",
    name: "Carotte Curcuma Lactofermentée - Les Cruculents",
    picture: "",
    price: "3,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Oignon Violet Lactofermenté",
    contenance: "200g",
    description:
      "Les Cruculents est le spécialiste d'une technologie à faible empreinte énergétique pour la conservation de produits : la lacto-fermentation ! La lacto-fermentation – ou fermentation lactique – est un procédé de conservation des aliments qui consiste à laisser macérer les aliments en l'absence d'oxygène. Ce super-aliment est à consommer sans modération.",
    name: "Oignon Violet Lactofermenté - Les Cruculents",
    picture: "",
    price: "3,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Carotte-Gingembre Lactofermenté",
    contenance: "200g",
    description:
      "Les Cruculents est le spécialiste d'une technologie à faible empreinte énergétique pour la conservation de produits : la lacto-fermentation ! La lacto-fermentation – ou fermentation lactique – est un procédé de conservation des aliments qui consiste à laisser macérer les aliments en l'absence d'oxygène. Ce super-aliment est à consommer sans modération.",
    name: "Carotte-Gingembre Lactofermenté - Les Cruculents",
    picture: "",
    price: "3,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Echalote Lactofermentée",
    contenance: "200g",
    description:
      "Les Cruculents est le spécialiste d'une technologie à faible empreinte énergétique pour la conservation de produits : la lacto-fermentation ! La lacto-fermentation – ou fermentation lactique – est un procédé de conservation des aliments qui consiste à laisser macérer les aliments en l'absence d'oxygène. Ce super-aliment est à consommer sans modération.",
    name: "Echalote Lactofermentée - Les Cruculents",
    picture: "",
    price: "3,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Betterave Lactofermentée",
    contenance: "200g",
    description:
      "Les Cruculents est le spécialiste d'une technologie à faible empreinte énergétique pour la conservation de produits : la lacto-fermentation ! La lacto-fermentation – ou fermentation lactique – est un procédé de conservation des aliments qui consiste à laisser macérer les aliments en l'absence d'oxygène. Ce super-aliment est à consommer sans modération.",
    name: "Betterave Lactofermentée - Les Cruculents",
    picture: "",
    price: "3,50€",
  },
  {
    category: "Epicerie salée",
    composition: "Papillons à la Châtaigne",
    contenance: "220g",
    description:
      "Une fabrication artisanale BIO signée Marron Châtaigne. Ici la farine de blé est mélangée à de la farine de châtaignes, ce qui apporte des pâtes subtilement parfumées à la châtaigne. Pour ne pas cacher cette rondeur, agrémentez-les d'un filet d'huile d'olives ou servez-les avec une viande en sauce ou dans une soupe.",
    name: "Papillons à la Châtaigne - Marron Châtaigne",
    picture: "",
    price: "3,60€",
  },
  {
    category: "Epicerie salée",
    composition: "Coquilles à la Châtaigne",
    contenance: "220g",
    description:
      "Une fabrication artisanale BIO signée Marron Châtaigne. Ici la farine de blé est mélangée à de la farine de châtaignes, ce qui apporte des pâtes subtilement parfumées à la châtaigne. Pour ne pas cacher cette rondeur, agrémentez-les d'un filet d'huile d'olives ou servez-les avec une viande en sauce ou dans une soupe.",
    name: "Coquilles à la Châtaigne - Marron Châtaigne",
    picture: "",
    price: "3,60€",
  },
  {
    category: "Epicerie salée",
    composition: "Semoule de Châtaignes",
    contenance: "450g",
    description:
      "La semoule de châtaigne peut être utilisée pour préparer une variété de plats, notamment des galettes, des gâteaux, des crêpes, des bouillies, des pâtes, des desserts, des pains et des pâtisseries. Elle peut également être utilisée pour épaissir des soupes ou des sauces. 100% châtaignes d'Ardèche AOP* séchée à l'énergie bois.",
    name: "Semoule de Châtaignes - Domaine de Barry",
    picture: "",
    price: "9,40€",
  },
  {
    category: "Epicerie salée",
    composition: "Farine de Châtaigne",
    contenance: "500g",
    description:
      "La farine de châtaigne est une farine sans gluten fabriquée à partir de châtaignes moulues. Elle sera idéale dans vos préparations de pains, pâtisseries, crêpes, gaufres, gâteaux, biscuits, pâtes fraîches et même pour épaissir vos soupes. Elle apportera une saveur subtilement sucrée de châtaigne.",
    name: "Farine de Châtaigne - Marron Châtaigne",
    picture: "",
    price: "8,40€",
  },
  {
    category: "Traiteur",
    composition: "Chorizo",
    contenance: "prix au Kg",
    description:
      "Un chorizo réalisé à la perfection par la boucherie Julien Vert ! Doux mais extrêmement parfumé en bouche grâce à ses nombreuses épices (curcuma, cumin, paprika, ail, poivre noir, piment d'espelette). A savourer tranché pour l'apéritif ou à faire griller au four (pour réaliser des chips de chorizo, parfaits sur une soupe) ou dans une poêle (pour apporter du peps à vos plats de riz et de pâtes par exemple). (prix au kg)",
    name: "Chorizo - Boucherie Julien Vert",
    picture: "",
    price: "39,00€",
  },
  {
    category: "Traiteur",
    composition: "Saucisson",
    contenance: "Prix au Kg",
    description:
      "Depuis la seconde moitié du XIXe siècle, la famille Marion se consacre à la fabrication de salaisons d'excellence. La preuve : leurs saucissons ont été cités chez Gault & Millau ! Leurs particularités ? Ils sont étuvés au feu de bois et séchés naturellement à l'air pur ardéchois... A tester absolument!",
    name: "Saucisson - Salaison Marion",
    picture: "",
    price: "35,00€ ",
  },
  {
    category: "Traiteur",
    composition: "Coppa",
    contenance: "Prix au Kg",
    description:
      'La devise de la maison Lafumat : "Fait Maison avec Passion !" La maison Lafumat accorde le plus grand soin à l\'élaboration de sa charcuterie sèche et aux choix de ses différentes viandes. La sèche qui requiert un savoir-faire, est parfaitement maîtrisée et demande une attention toute particulière. Et le temps fait son oeuvre ! La charcuterie est sans colorant, sans nitrite ni conservateur.(prix au kg)',
    name: "Coppa - Maison Lafumat",
    picture: "",
    price: "49,00€",
  },
  {
    category: "Traiteur",
    composition: "Lonzo",
    contenance: "Prix au Kg",
    description:
      'La devise de la maison Lafumat : "Fait Maison avec Passion !" La maison Lafumat accorde le plus grand soin à l\'élaboration de sa charcuterie sèche et aux choix de ses différentes viandes. La sèche qui requiert un savoir-faire, est parfaitement maîtrisée et demande une attention toute particulière. Et le temps fait son oeuvre ! La charcuterie est sans colorant, sans nitrite ni conservateur. (prix au kg)',
    name: "Lonzo - Maison Lafumat",
    picture: "",
    price: "49,00€ ",
  },
  {
    category: "Traiteur",
    composition: "Filet Mignon de Porc Séché au 5 baies",
    contenance: "Prix au Kg",
    description:
      'COUP DE COEUR La devise de la maison Lafumat : "Fait Maison avec Passion !" La maison Lafumat accorde le plus grand soin à l\'élaboration de sa charcuterie sèche et aux choix de ses différentes viandes. La sèche qui requiert un savoir-faire, est parfaitement maîtrisée et demande une attention toute particulière. Et le temps fait son oeuvre ! La charcuterie est sans colorant, sans nitrite ni conservateur.',
    name: "Filet Mignon de Porc Séché au 5 baies - Maison Lafumat",
    picture: "",
    price: "54,00€",
  },
  {
    category: "Traiteur",
    composition: "Jambonnette",
    contenance: "Prix au Kg",
    description:
      "La jambonette de la boucherie Julien Vert est particulièrement douce et parfumée. Idéale en tranche à l'apéritif, roulée avec du chèvre frais, ou en accompagnement d'une raclette ! Et toujours sans colorant, sans nitrite ni conservateur.",
    name: "Jambonnette - Boucherie Julien Vert",
    picture: "",
    price: "25,00€",
  },
  {
    category: "Traiteur",
    composition: "Picodon",
    contenance: "60g",
    description:
      "A La Ferme de l'Amélie, les chèvres pâturent sur les collines de Préaux et sont nourries à l'herbe et aux céréales. C'est ici que sont fabriqués leurs fromages et plus particulièrement leur picodon, médaillé d'argent du Picodon AOP en 2017 ! Le Picodon est un petit fromage de chèvre fabriqué à partir de lait cru entier.\n\nGoût et saveurs : Le Picodon a une croûte naturelle fleurie et une pâte ferme, fine et homogène, pouvant même devenir cassante après un affinage prolongé. Ses notes sont alors fraîches et dégagent le parfum de la végétation variée de la région (thym, sauge, serpolet, arbrisseaux, fétuques...).\n\nEn vieillissant son caractère s'affirme et peut devenir \"piquant\" d'où son nom!",
    name: "Picodon - La Ferme de l'Amélie",
    picture: "",
    price: "2,90€",
  },
  {
    category: "Traiteur",
    composition: "Caillé Doux de Saint-Felicien",
    contenance: "120g",
    description:
      "A La Ferme de l'Amélie, les chèvres pâturent sur les collines de Préaux et sont nourries à l'herbe et aux céréales. C'est ici que sont fabriqués leurs fromages et plus particulièrement le caillé doux !\n\nHistoire :\n\nPlus connu sous le nom de Saint-Félicien. Ce fromage de chèvre typique du Pays de Saint-Félicien, n'est fabriqué que par quelques fermiers situés dans le nord Ardèche.\n\nFabrication:\n\nLe caillé doux de saint Felicien est un fromage à pâte mole fabriqué à partir de lait cru entier de chèvre. Il a une forme plate, type petit galet, et sa croûte de couleur crème présente des moisissures blanches à bleues. Son procédé de fabrication traditionnel  avec un travail à chaud de suite après la traite, ce fromage vous fera fondre par ses notes subtiles et la souplesse de sa pâte qui devient crémeuse en s'affinant.\n\nGoût et saveurs :\n\nCe fromage possède une pâte crémeuse, fondante et homogène avec des saveurs subtiles. Au touché, il est ferme et souple tandis et il à des légère odeurs caprines.\n\nConseils de dégustation:\n\nLe Saint-Félicien est idéal pour débuter une dégustation et se \"faire la bouche\" afin d'apprécier l'ensemble des fromages du plateau. La pâte du Saint-Felicien est onctueuse et son goût d'étable est une excellente introduction à la famille des fromages à croûte fleurie. La croûte naturelle du St Felicien est jaune et sa pâte selon l'affinage va de souple à coulante",
    name: "Caillé Doux de Saint-Felicien - La Ferme de l'Amélie",
    picture: "",
    price: "3,10€",
  },
  {
    category: "Traiteur",
    composition: "Chèvres Aromatisés BIO",
    contenance: "60g",
    description:
      "Retrouvez les petits chèvres frais et bio de Bruno, ce grand amoureux de la nature et de ses bêtes !\n\nA la découpe : fermes et fondants\nEn bouche : doux, très peu acidulés, floraux et une pointe herbacés.\nUtilisation : à savourer avec une belle tranche de pain de campagne ou aux noix, ou bien à faire fondre sur des tartines ou dans vos plats de pâtes.\n\nLe parfait petit chèvre frais !\n\nSaveurs : 3 Fleurs - Thym - Tomates Séchées",
    name: "Chèvres Aromatisés BIO - Ferme du Roule",
    picture: "",
    price: "3,90€",
  },
  {
    category: "Traiteur",
    composition: "Chèvre Ultra Frais",
    contenance: "60g",
    description:
      "Retrouvez le petits chèvre frais et bio de Bruno, ce grand amoureux de la nature et de ses bêtes !\n\nA la découpe : fondant\nEn bouche : doux, frais aux légères notes florales\nUtilisation : à savourer avec une belle tranche de pain de campagne ou aux noix, ou bien à faire fondre sur des tartines ou dans vos plats de pâtes.\n\nLe parfait petit chèvre frais !",
    name: "Chèvre Ultra Frais - Ferme du Roule",
    picture: "",
    price: "3,50€",
  },
  {
    category: "Traiteur",
    composition: "Vache Aromatisé BIO",
    contenance: "200g",
    description:
      "Retrouvez les fromages de vache de Bruno, ce grand amoureux de la nature et de ses bêtes !\n\nDoux, crémeux et légèrement beurrés, ces fromages de vache bio vont faire l'unanimité !\nIls prendront plus de caractère si on les laisse affiner, au grés de vos envies...\nA savourer simplement avec une bonne baguette au levain ou à faire fondre sur vos criques ou pommes de terre vapeur... c'est incroyablement bon !\n\nAil - Poivre - Thym - 3 fleurs",
    name: "Vache Aromatisé BIO - Ferme du Roule",
    picture: "",
    price: "4,90€",
  },
  {
    category: "Traiteur",
    composition: "Vache Crémeux ou demi-sec",
    contenance: "140g",
    description:
      "Retrouvez les fromages de vache de Bruno, ce grand amoureux de la nature et de ses bêtes !\n\nDoux, crémeux et légèrement beurrés, ces fromages de vache bio vont faire l'unanimité !\nIls prendront plus de caractère si on les laisse affiner, au grés de vos envies...\nA savourer simplement avec une bonne baguette au levain ou à faire fondre sur vos criques ou pommes de terre vapeur... c'est incroyablement bon !",
    name: "Vache Crémeux ou demi-sec - Ferme du Roule",
    picture: "",
    price: "3,90€",
  },
  {
    category: "Traiteur",
    composition: "Crique aux Cèpes",
    contenance: "120g",
    description:
      "BEST SELLER\n\nEn 2015, Stéphane Gros (troisième génération) crée la SAS Charcuterie d’Henry et démarre la production de criques.\nToutes les pommes de terre sont fournies par la société Pat’ifol à Lemps (Rémi Vernet) et les recettes sont familiales, élaborées en interne au siège d’Arras. Cette spécialité est idéale en accompagnement ou en plat principal, accompagnée par une salade verte.\nIci le cèpe, champignon emblématique de l'Ardèche, va sublimer la crique avec ses notes légèrement boisées et de noisettes. Une crique délicate et subtile qui accompagnera à merveille poulets rôtis, gibier ou une soupe de potimarron!",
    name: "Crique aux Cèpes - Maison Gros",
    picture: "",
    price: "2,90€",
  },
  {
    category: "Traiteur",
    composition: "Crique aux Lardons Fumés",
    contenance: "120g",
    description:
      "En 2015, Stéphane Gros (troisième génération) crée la SAS Charcuterie d’Henry et démarre la production de criques.\nToutes les pommes de terre sont fournies par la société Pat’ifol à Lemps (Rémi Vernet) et les recettes sont familiales, élaborées en interne au siège d’Arras. Cette spécialité est idéale en accompagnement ou en plat principal, accompagnée par une salade verte.\nIci les lardons vont apporter une touche délicatement fumée à la pomme de terre. Ajoutez une tranche de fromage de vache fondue sur le dessus : voilà une tartiflette expess irrésistible!",
    name: "Crique aux Lardons Fumés - Maison Gros",
    picture: "",
    price: "2,70€",
  },
  {
    category: "Traiteur",
    composition: "Crique Ardéchoise",
    contenance: "120g",
    description:
      "En 2015, Stéphane Gros (troisième génération) crée la SAS Charcuterie d’Henry et démarre la production de criques.\nToutes les pommes de terre sont fournies par la société Pat’ifol à Lemps (Rémi Vernet) et les recettes sont familiales, élaborées en interne au siège d’Arras.\nLégèrement aillée avec une pointe de persil, elle accompagnera parfaitement vos plats principales, accompagnée d'une salade verte l'été ou d'une soupe l'hiver!",
    name: "Crique Ardéchoise - Maison Gros",
    picture: "",
    price: "2,50€",
  },
  {
    category: "Traiteur",
    composition:
      "Blettes, salade verte, épinards, viande de porc (origine Ardèche et Loire)",
    contenance: "200g",
    description:
      "La caillette est finement mixée avec des légumes et de la viande de porc, puis cuite au four. Elle est parfaite chaude ou froide en tant qu'accompagnement ou plat principal.",
    name: "Caillette Nature",
    picture: "",
    price: "4,50€ pièce",
  },
  {
    category: "Traiteur",
    composition: "Variante saisonnière de mini-caillettes artisanales",
    contenance: "200g",
    description:
      "Mini-caillettes artisanales à servir chaudes, idéales à l'apéritif. Vendues par sachet de 10. Possibilité de personnaliser avec diverses garnitures.",
    name: "Mini-Caillettes Natures",
    picture: "",
    price: "9,00€ par sachet de 10",
  },
  {
    category: "Traiteur",
    composition: "Variante saisonnière de mini-caillettes artisanales",
    contenance: "200g",
    description:
      "Mini-caillettes artisanales à servir chaudes, idéales à l'apéritif. Vendues par sachet de 10. Possibilité de personnaliser avec diverses garnitures.",
    name: "Mini-Caillettes arômatisées",
    picture: "",
    price: "9,00€ par sachet de 10",
  },
  {
    category: "Hygiène",
    composition:
      "Lait de chèvre bio d’Ardèche, huiles essentielles de Cyprès, de Pin sylvestre de la Drôme, pamplemousse",
    contenance: "110g",
    description:
      "Savon hydratant pour les peaux sèches. Subtilement parfumé avec des huiles essentielles, offrant une sensation de fraîcheur boisée et acidulée.",
    name: "Savon Fraîcheur Hydratante - Faune",
    picture: "",
    price: "6,70€",
  },
  {
    category: "Hygiène",
    composition:
      "16% de lait de chèvre bio d’Ardèche, surgras d'huile d'amande douce bio à 7%",
    contenance: "110g",
    description:
      "Savon doux et hydratant, idéal pour les peaux sèches et fragiles.",
    name: "Savon Douceur de Lait - Faune",
    picture: "",
    price: "6,70€",
  },
  {
    category: "Hygiène",
    composition:
      "Huiles essentielles bio de menthe poivrée de Provence, de romarin de la Drôme, Indigo bio de Provence",
    contenance: "110g",
    description:
      "Savon surgras qui offre une sensation de calme et de tonus. La couleur bleu ciel apporte une note de sérénité.",
    name: "Savon Force Tranquille - Faune",
    picture: "",
    price: "6,70€",
  },
  {
    category: "Hygiène",
    composition:
      "Marc de café, argile rouge, huiles essentielles d'orange douce, de cèdre",
    contenance: "110g",
    description:
      "Savon exfoliant idéal pour le lavage des mains après diverses activités. Peut être utilisé sous la douche. Contient des huiles essentielles.",
    name: "Savon Purifier - Faune",
    picture: "",
    price: "6,70€",
  },
  {
    category: "Hygiène",
    composition:
      "Surgras à 7% de cire de Jojoba, enrichi en propolis bio d’Ardèche",
    contenance: "110g",
    description:
      "Savon idéal pour les peaux irritées, sensibles ou matures. Contient une odeur subtile de propolis.",
    name: "Savon S'Apaiser - Faune",
    picture: "",
    price: "6,70€",
  },
  {
    category: "Hygiène",
    composition:
      "Enrichi en huile de ricin bio, 13% de bière bio d’Ardèche, argile verte",
    contenance: "110g",
    description:
      "Savon 2 en 1 spécialement conçu pour laver les cheveux. Sans huiles essentielles, idéal pour tous.",
    name: "Savon Shampoing au poil - Faune",
    picture: "",
    price: "6,70€",
  },
  {
    category: "Hygiène",
    composition:
      "Beurre de karité, huile d’abricot, amidon de maïs, bicarbonate de soude, parfumé à la palmarosa et géranium rosat",
    contenance: "30g",
    description:
      "Déodorant efficace et agréable avec une texture crémeuse. Formulé sans huiles essentielles, il offre adoucissement, apaisement et protection.",
    name: "Déodorant Bonheur - Faune",
    picture: "",
    price: "6,90€",
  },
  {
    category: "Hygiène",
    composition:
      "Huiles bio de noyaux d’abricot, de jojoba, beurre de karité, cire d’abeille, huiles essentielles bio de lavande fine de la Drôme",
    contenance: "30g",
    description:
      "Baume corporel hydratant pour les peaux sèches et abimées. Enrichi en huiles essentielles de lavande fine pour régénération et réparation.",
    name: "Baume Corporel Enveloppant - Faune",
    picture: "",
    price: "7,50€",
  },
  {
    category: "Bébé",
    composition: "Latex de caoutchouc naturel issu de plantations d’hévéa",
    contenance: "2 unités",
    description:
      "Tétines respectueuses de l'environnement et adaptées au développement de la mâchoire des bébés. Couleur vert d'eau ou naturelle.",
    name: "Sucette en Caoutchouc Naturel - Simia",
    picture: "",
    price: "14,00€",
  },
  {
    category: "Bébé",
    composition: "Créations artisanales en laine, chaque peluche est unique",
    contenance: "",
    description:
      "Magnifiques peluches au crochet réalisées par Myriam Clauzon avec de la laine provenant de ses moutons. Des cadeaux éthiques et doux.",
    name: "Peluche aux Crochets Artisanales (Animaux) - Myriam Clauzon",
    picture: "",
    price: "20,00€",
  },
  {
    category: "Bébé",
    composition: "Créations artisanales en laine, chaque peluche est unique",
    contenance: "",
    description:
      "Magnifiques peluches au crochet réalisées par Myriam Clauzon avec de la laine provenant de ses moutons. Des cadeaux éthiques et doux.",
    name: "Peluche aux Crochets Artisanales (Poupées) - Myriam Clauzon",
    picture: "",
    price: "25,00€",
  },
  {
    category: "Cave",
    composition:
      "Bière primitive brassée. A base de Malts d'Orge et de Houblons Américains. Retrouvez vos instincts primaires!",
    contenance: "75cL",
    description: "Primord'iale - Haarddrëch",
    name: "Haarddrëch",
    picture: "",
    price: "7,40€",
  },
  {
    category: "Cave",
    composition: "Description de la bière blond pâle",
    contenance: "75cL",
    description: "Über'ale - Haarddrëch",
    name: "Haarddrëch",
    picture: "",
    price: "7,40€",
  },
  {
    category: "Cave",
    composition: "Description de la bière blonde au concombre et au sumac",
    contenance: "75cL",
    description: "Surviv'ale - Haarddrëch",
    name: "Haarddrëch",
    picture: "",
    price: "7,40€",
  },
  {
    category: "Cave",
    composition: "Description de la bière blanche",
    contenance: "75cL",
    description: "Démoni'ale - Haarddrëch",
    name: "Haarddrëch",
    picture: "",
    price: "7,40€",
  },
  {
    category: "Cave",
    composition: "Description de la bière blanche 'La free...skette'",
    contenance: "75cL",
    description: "La free...skette - Free Mousse",
    name: "Free Mousse",
    picture: "",
    price: "6,90€",
  },
  {
    category: "Cave",
    composition: "Description of beer 'La free...pouille'",
    contenance: "75cL",
    description: "La free...pouille - Free Mousse",
    name: "Free Mousse",
    picture: "",
    price: "6,90€",
  },
  {
    category: "Cave",
    composition: "Description of triple beer 'La free...sky'",
    contenance: "75cL",
    description: "La free...sky - Free Mousse",
    name: "Free Mousse",
    picture: "",
    price: "7,20€",
  },
  {
    category: "Cave",
    composition: "Description of ginger beer 'Ginger - Clap'",
    contenance: "75cL",
    description: "Ginger - Clap",
    name: "Clap",
    picture: "",
    price: "6,90€",
  },
  {
    category: "Cave ",
    composition:
      "Un pastis bio et artisanal aux accents de garrigue ardéchoise!",
    contenance: "50cL",
    description: "Pastis d'Arèche - La Frap",
    name: "La Frap",
    picture: "",
    price: "35,00€",
  },
  {
    category: "Cave ",
    composition: "Un gin ardéchois avec un soupçon d'exotisme!",
    contenance: "50cL",
    description: "Gin d'Ardèche - La Frap",
    name: "La Frap",
    picture: "",
    price: "40,00€",
  },
  {
    category: "Cave ",
    composition:
      "Quand la mythique absinthe, autrefois surnommée 'la fée verte' rencontre les terres ardéchoises, elle donne naissance a la chèvre verte ! cette boisson spiritueuse à base d'absinthe, de verveine et de menthe est a partager en digestif ou en cocktail!",
    contenance: "50cL",
    description: "Chèvre Verte - La Frap",
    name: "La Frap",
    picture: "",
    price: "45,00€",
  },
  {
    category: "Cave ",
    composition:
      "Vieillie pendant 5 ans dans des fûts de chênes qui ont servi à faire du cognac et de l'armagnac.",
    contenance: "70cL",
    description: "Cloiron Vert - Elixir 1889",
    name: "Elixir 1889",
    picture: "",
    price: "32,00€",
  },
  {
    category: "Cave ",
    composition:
      "Vieillie pendant 5 ans dans des fûts de chênes qui ont servi à faire du cognac et de l'armagnac.",
    contenance: "70cL",
    description: "Cloiron Jaune - Elixir 1889",
    name: "Elixir 1889",
    picture: "",
    price: "32,00€",
  },
  {
    category: "Cave ",
    composition:
      "La liqueur de marrons est d'une belle couleur brune aux reflets dorés. En bouche, vous retrouvez une rondeur naturelle apportée par la châtaigne.",
    contenance: "35cL",
    description: "Liqueur de Châtaigne - La Chareyrade",
    name: "La Chareyrade",
    picture: "",
    price: "18,50€",
  },
  {
    category: "Cave ",
    composition:
      "La crème de châtaigne est à déguster en digestif ou en apéritif. Associez cette crème de châtaigne à un vin blanc sec tel que le Chardonnay, à raison d'un tiers de crème pour deux tiers de vin et vous obtiendrez un apéritif typiquement ardéchois, le castagnou!",
    contenance: "50cL",
    description: "Crème de Châtaigne - La Chareyrade",
    name: "La Chareyrade",
    picture: "",
    price: "19,40€",
  },
  {
    category: "Cave",
    composition: "Viognier 2021",
    contenance: "750mL",
    description: "Viognier 2021",
    name: "Châmes - Domaine Saint-Rèm",
    picture: "",
    price: "9,70€",
  },
  {
    category: "Cave",
    composition: "2021",
    contenance: "750mL",
    description: "Marsanne 2021",
    name: "Domaine Saint-Rèm",
    picture: "",
    price: "8,90€",
  },
  {
    category: "Cave",
    composition: "2020",
    contenance: "750mL",
    description: "Chardonnay 2020",
    name: "Domaine Saint-Rèm",
    picture: "",
    price: "8,50€",
  },
  {
    category: "Cave",
    composition: "2021",
    contenance: "750mL",
    description: "L'Instant Douceur 2021",
    name: "Domaine Saint-Rèm",
    picture: "",
    price: "8,90€",
  },
  {
    category: "Cave",
    composition: "100% syrah",
    contenance: "750mL",
    description:
      " 100% La Tolondiere est le lieu-dit du domaine où habite depuis plus de 5 générations la famille CHOMEL. Très ouvert sur le fruit avec quelques notes de bois léger, cette cuvée exprime pleinement les caractéristiques de notre terroir.\nAccords mets & vins : cuisine traditionnelle, viandes rouges et fromages régionaux.\nTempérature de dégustation : 16 à 18°C\n\nL'abus d'alcool est dangereux pour la santé, à consommer avec modération.",
    name: "Tolondière Saint-Joseph 2021 Domaine Louis Chomel",
    picture: "",
    price: "18,70€",
  },
  {
    category: "Cave",
    composition:
      "Vin Nature Assemblage de Mourvèdre (25%), Grenache (45%), Syrah (10%), Carignan (10%) et Cinsault (10%)",
    contenance: "750mL",
    description:
      "Accord Tonique 2019\n\nVin Nature\nAssemblage de Mourvèdre (25%), Grenache (45%), Syrah (10%), Carignan (10%) et Cinsault (10%)\n\nQuand les cordes rencontrent le plus naturel des vins… Cela donne une cuvée unique, bercée de sa récolte à sa mise en bouteille, de jour comme de nuit, par les ondes musicales du Quatuor Debussy durant 35 jours.\n\nCuvée pleine de saveurs fruitées, de notes épicées avec intensité et belle longueur en bouche.\nMédaille d'argent au concours international des vins bio ",
    name: "Notre Dame de Cousignac",
    picture: "",
    price: "22,00€",
  },
  {
    category: "Cave",
    composition: "",
    contenance: "500mL",
    description:
      "-Viognier 2021-\n\nLes rendements sont extrêmement limités pour extraire toute la richesse aromatique de ce Viognier.\nLa récolte s’effectue à la main, début octobre, à sur-maturité lorsque le sucre des raisins a atteint son niveau de concentration optimal.\nLa fermentation s’effectue à basse température, le vin est ensuite élevé pendant plusieurs mois en fûts de chêne pour apporter plus de complexité, d’ampleur et de rondeur.\n\nRobe : or brillante\nNez : fruits mûrs\nBouche : équilibre entre douceur et vivacité\nGarde : 3 ans et plus\nTempérature de service : 10°C à 12°C\nAccord mets et vins : Foie Gras\n\nContient des sulfites. 12% vol.\n\nL'abus d'alcool est dangereux pour la santé, à consommer avec modération.",
    name: "Vendanges d'Octobre - Coteau Saint-Giraud",
    picture: "",
    price: "19€",
  },
  {
    category: "Cave",
    composition: "",
    contenance: "25cL",
    description:
      "Contrairement à ce que son nom indique, cette boisson ne contient PAS d'alcool !\n\nC'est une boisson fermentée naturelle et gazeuse au délicieux goût de gingembre. De part sa lactofermentation, elle apportera vitamines et minéraux à votre organisme. En plus, ce sont des boissons naturellement riches en probiotiques aidant ainsi à la digestion et boost le système immunitaire.\n\nC'est sain et c'est délicieux :)",
    name: "Bière de Gingembre - Les Cruculents",
    picture: "",
    price: "3€",
  },
  {
    category: "Nos desserts maison (recettes de Maria)",
    composition: "",
    contenance: "",
    description:
      "BEST SELLER\n\nNotre fondant ardéchois a une texture incroyablement douce et fondante, grâce à la farine de châtaigne utilisée dans la recette.\nIci, pas de sucre ajouté : c'est le mélange crème de châtaigne - purée de châtaigne qui va apporter la touche sucrée au gâteau.\nVous pouvez l'accompagner d'une boule de glace à la vanille, d'un coulis de chocolat ou ajouter une cuillière de rhum ou de liqueur de châtaigne sur le dessus également !\n\nSANS GLUTEN - SANS LACTOSE - SANS SUCRE AJOUTE",
    name: "Le fondant Ardéchois - Recette Maria",
    picture: "",
    price: "4,20€",
  },
  {
    category: "Nos desserts maison (recettes de Maria)",
    composition: "",
    contenance: "",
    description:
      "Avec sa texture de flan légèrement parfumé à la fleur d'oranger, cet invisible aux pommes plaira autant aux petits qu'aux grands ! Léger, frais et généreux en pommes... un classique de la maison à tester !\n\nCONTIENT LACTOSE ET GLUTEN",
    name: "Invisible aux Pommes - Recette Maria",
    picture: "",
    price: "4,20€",
  },
  {
    category: "Nos desserts maison (recettes de Maria)",
    composition: "",
    contenance: "",
    description:
      "BEST SELLER\n\nMeilleur que la mousse industrielle : ici on sent véritablement ce goût subtile de châtaigne ! C'est gourmand, aérien et très addictif :)\n\nSANS GLUTEN - SANS SUCRE AJOUTE\n\nCONTIENT LACTOSE",
    name: "Mousse de Châtaigne - Recette Maria",
    picture: "",
    price: "4,20€",
  },
  {
    category: "Nos desserts maison (recettes de Maria)",
    composition: "",
    contenance: "",
    description:
      "BEST SELLER\n\nUn tiramisu parsemé de brisures de châtaignes... qui a déjà goûté ?\nCes petits bouts vont apporter un peu de croquant au fondant du tiramisu. Une tuerie faite maison !\n\nCONTIENT LACTOSE ET GLUTEN",
    name: "Tiramisu aux brisures de Châtaignes - Recette Maria",
    picture: "",
    price: "4,20€",
  },

  // Ajoutez les autres produits ici
];

// Appelez la fonction pour ajouter les produits à Firestore
addProductsToFirestore(products, db);

module.exports = products;
