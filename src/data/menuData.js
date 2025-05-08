// menuData.js - Données fictives pour le menu de l'application

const menuData = {
  categories: [
    {
      id: 'entries',
      name: 'Entrees',
      description: 'Delicious traditional Algerian starters',
      dishes: [
        {
          id: 'chorba',
          name: 'Chorba',
          description: 'Traditional soup made with meat, freekeh ',
          longDescription: 'Chorba is one of algierns most popular entrees .This savory soup is made,with lamb,vermicelli noodles, and a variety of vegetables such as tomatoes, chickpeas, celery, and carrot, coriander, and mint are added for a refreshing taste.',
          price: 350,
          image: '/images/chorba.jpg',
          categoryId: 'entrees',
          categoryName: 'Entrees',
          nutritionInfo: {
            calories: 250,
            protein: '15g',
            carbs: '30g',
            fat: '8g'
          },
          ingredients: ['meet d\'lamb', 'Tomatoes', 'chickpeas', 'Vermicelli', 'Celery', 'Carrottes', 'lemon', 'Coriander', 'Mint', 'spices'],
           
          rating: 4.7,
          
          popular: true,
          dietary: []
        },
        {
          id: 'bourek',
          name: 'Bourek',
          description: 'Brick pastry rolls stuffed with minced meat and spices',
          longDescription: 'Bourek is a convivial starter synonymous with sharing. These delicious rolls are made from brick pastry filled with kefta (spiced ground beef), parsley, and onions. They are often served when entertaining guests and during Ramadan.',
          price: 150,
          image: '/images/bourek.jpg',
          categoryId: 'entries',
          categoryName: 'Entrees',
          nutritionInfo: {
            calories: 320,
            protein: '18g',
            carbs: '25g',
            fat: '16g'
          },
          ingredients: ['Brick pastry sheets', 'Minced meat', 'Onions', 'Parsley', 'Spices', 'Olive /oil'],
          reviews: [
            {
              id: 'rev3',
              userName: 'Mohammed L.',
              rating: 5,
              date: '2025-04-01',
              comment: 'The best boreks Ive ever tasted!'
            }
          ],
          rating: 4.8,
          
          popular: true,
          dietary: []
        },
        {
          id: 'chakchouka',
          name: 'Chekchouka',
          description: 'Peppers and tomatoes simmered with eggs',
          longDescription: 'Chekchouka is a popular dish throughout the Maghreb. It is prepared with peppers simmered with tomatoes and onions, then topped with eggs that cook on top. This savory dish is traditionally enjoyed with Algerian bread.',
          price:300,
          image: '/images/chekchouka.jpg',
          categoryId: 'entries',
          categoryName: 'Entrees',
          nutritionInfo: {
            calories: 280,
            protein: '12g',
            carbs: '15g',
            fat: '18g'
          },
          ingredients: ['Poivrons', 'Tomates', 'Oignons', 'Œufs', 'Ail', 'Huile d\'olive', 'Épices'],
          reviews: [
            {
              id: 'rev4',
              userName: 'Samira H.',
              rating: 4,
              date: '2025-03-20',
              comment: 'Very good chakchouka, the eggs were perfectly cooked.'
            }
          ],
          rating: 4.5,
          
          popular: false,
          dietary: []
        },
        
      ]
    },
    {
      id: 'main courses',
      name: 'Main Dishes',
      description: 'Tasty main dishes of traditional Algerian cuisine',
      dishes: [
        {
          id: 'couscous',
          name: 'Royal Couscous',
          description: 'The Algerian national dish made with semolina, vegetables and meat',
          longDescription: 'Couscous is the Algerian national dish par excellence. This regal version is prepared with wheat semolina, a variety of vegetables (carrots, zucchini, turnips, chickpeas), and several meats (lamb, chicken, merguez sausage). The semolina is delicately drizzled with a flavorful broth and served in a large traditional dish.',
          price: 650,
          image: '/images/couscous.jpg',
          categoryId: 'plats-principaux',
          categoryName: 'Main Dishes',
          nutritionInfo: {
            calories: 650,
            protein: '35g',
            carbs: '80g',
            fat: '22g'
          },
          ingredients: ['Semoule de blé', 'Agneau', 'Poulet', 'Merguez', 'Carottes', 'Courgettes', 'Navets', 'Pois chiches', 'Épices', 'Bouillon'],
          reviews: [
            {
              id: 'rev5',
              userName: 'Karim M.',
              rating: 5,
              date: '2025-04-10',
              comment: 'Un couscous authentique et généreux, comme chez ma grand-mère !'
            },
            {
              id: 'rev6',
              userName: 'Leila Z.',
              rating: 5,
              date: '2025-03-25',
              comment: 'Parfait ! Les légumes étaient bien cuits et la viande tendre.'
            }
          ],
          rating: 4.9,
          
          popular: true,
          dietary: []
        },
        {
          id: 'tajine-zitoune',
          name: 'Tajine Zitoune',
          description: 'Ragoût d\'agneau aux olives vertes et légumes',
          longDescription: 'Le Tajine Zitoune est un plat traditionnel originaire d\'Alger. Ce ragoût savoureux est préparé avec de l\'agneau (ou du poulet), des olives vertes et divers légumes comme les pommes de terre et les carottes. Son goût est relevé avec du thym, du laurier, du jus de citron et du safran ou du curcuma.',
          price: 500,
          image: '/images/tajinezitone.jpg',
          categoryId: 'plats-principaux',
          categoryName: 'Main Dishes',
          nutritionInfo: {
            calories: 580,
            protein: '32g',
            carbs: '35g',
            fat: '28g'
          },
          ingredients: ['Agneau', 'Olives vertes', 'Pommes de terre', 'Carottes', 'Thym', 'Laurier', 'Citron', 'Safran', 'Épices'],
          reviews: [
            {
              id: 'rev7',
              userName: 'Nadia B.',
              rating: 4,
              date: '2025-04-05',
              comment: 'Délicieux tajine, la viande était très tendre.'
            }
          ],
          rating: 4.6,
          
          popular: true,
          dietary: []
        },
        {
          id: 'rechta',
          name: 'Rechta Algéroise',
          description: 'Thin noodles with chicken and vegetables in a fragrant broth',
          longDescription: 'Rechta is a traditional dish from Algiers made from thin noodles made from semolina. They are served with a cinnamon-scented broth, chicken meat and vegetables such as turnips, chickpeas and zucchini. This dish is traditionally cooked for religious occasions like Eid-El-Fitr.',
          price: 700,
          image: '/images/rechta.jpg',
          categoryId: 'plats-principaux',
          categoryName: 'Main Dishes',
          nutritionInfo: {
            calories: 520,
            protein: '28g',
            carbs: '65g',
            fat: '16g'
          },
          ingredients: ['Nouilles de rechta', 'Poulet', 'Navets', 'Pois chiches', 'Courgettes', 'Cannelle', 'Bouillon'],
          reviews: [],
          rating: 4.5,
          
          popular: false,
          dietary: []
        },
        {
          id: 'berkoukes',
          name: 'Berkoukes',
          description: 'Dish made with large grains of couscous, vegetables and meat',
          longDescription: 'Berkoukes is a traditional Algerian dish made from pasta shaped like large grains of couscous. In Kabylia, this dish is synonymous with celebration and is eaten after giving birth, when a baby cuts their first tooth, or at the inauguration of the first agricultural projects.',
          price: 400,
          image: '/images/berkoukes.jpg',
          categoryId: 'plats-principaux',
          categoryName: 'Main Dishes',
          nutritionInfo: {
            calories: 540,
            protein: '25g',
            carbs: '70g',
            fat: '18g'
          },
          ingredients: ['Pâtes de berkoukes', 'Viande rouge', 'Légumes variés', 'Épices', 'Bouillon'],
          reviews: [],
          rating: 4.4,
          
          popular: false,
          dietary: []
        }
      ]
    },
    {
      id: 'specialites-regionales',
      name: 'Regional Specialties',
      description: 'Découvrez les spécialités culinaires des différentes régions d\'Algérie',
      dishes: [
        {
          id: 'trida',
          name: 'Trida Constantinoise',
          description: 'Pâtes carrées avec poulet, pois chiches et sauce blanche',
          longDescription: 'La Trida est une spécialité originaire de Constantine, au Nord-Ouest de l\'Algérie. Ce plat est préparé avec des pâtes très fines et carrées faites à la main, accompagnées de poulet, de pois chiches, de carottes et d\'œufs durs, le tout servi avec une délicieuse sauce blanche.',
          price: 650,
          image: '/images/trida.jpg',
          categoryId: 'specialites-regionales',
          categoryName: 'Regional Specialties',

          nutritionInfo: {
            calories: 510,
            protein: '26g',
            carbs: '62g',
            fat: '18g'
          },
          ingredients: ['Pâtes de trida', 'Poulet', 'Pois chiches', 'Carottes', 'Œufs durs', 'Sauce blanche'],
          reviews: [],
          rating: 4.5,
          
          popular: false,
          dietary: []
        },
        {
          id: 'tlitli',
          name: 'Tlitli Chaoui',
          description: 'Pâtes en forme de grain de riz avec sauce tomate et viande',
          longDescription: 'Le Tlitli est une délicieuse spécialité culinaire algérienne qui tient ses origines à l\'Est du pays, notamment dans les villes de Constantine, de Skikda et de Jijel. Fait à base de pâtes en forme de grain de riz, le Tlitli est mitonné en sauce tomate et accompagné de pois chiches, de viande et de nombreuses épices comme le Raz El Hanout.',
          price: 450,
          image: '/images/tlitli.jpg',
          categoryId: 'specialites-regionales',
          categoryName: 'Regional Specialties',

          nutritionInfo: {
            calories: 530,
            protein: '24g',
            carbs: '68g',
            fat: '17g'
          },
          ingredients: ['Pâtes de tlitli', 'Viande', 'Sauce tomate', 'Pois chiches', 'Raz El Hanout', 'Œufs durs'],
          reviews: [],
          rating: 4.4,
          
          popular: false,
          dietary: []
        },
        {
          id: 'chakhchoukha',
          name: 'Chakhchoukha Biskria',
          description: 'Crumbed bread with tomato sauce and meat',
          longDescription: 'Chakhchoukha Biskria is a traditional recipe originating from the Biskra region. This dish consists of a traditional crumbled bread flatbread mixed with a rich tomato sauce and meat. It is a hearty and comforting dish, often served at special family occasions.',
          price: 700,
          image: '/images/chakhchoukha.jpg',
          categoryId: 'specialites-regionales',
          categoryName: 'Regional Specialties',

          nutritionInfo: {
            calories: 560,
            protein: '28g',
            carbs: '58g',
            fat: '22g'
          },
          ingredients: ['Breadcake', 'Meat', 'Tomatoes', 'Onions', 'Chickpeas', 'Spices'],
          reviews: [],
          rating: 4.7,
          
          popular: true,
          dietary: []
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      description: 'Traditional Algerian sweets and pastries',
      dishes: [
        {
          id: 'makroudh',
          name: 'Makroudh',
          description: 'Diamond-shaped pastry filled with dates and coated in honey',
          longDescription: 'Makroudhs are traditional diamond-shaped pastries made from durum wheat semolina dough, then stuffed with dates and coated with honey and orange blossom. These delicious sweets are a staple of Algerian pastry.',
          price: 90,
          image: '/images/makroudh.jpg',
          categoryId: 'desserts',
          categoryName: 'Desserts',
          nutritionInfo: {
            calories: 320,
            protein: '3g',
            carbs: '58g',
            fat: '12g'
          },
          ingredients: ['Semoule de blé dur', 'Dattes', 'Miel', 'Fleur d\'oranger', 'Huile'],
          reviews: [
            {
              id: 'rev8',
              userName: 'Yasmine A.',
              rating: 5,
              date: '2025-04-12',
              comment: 'These makroudhs are divine, just like my mothers !'
            }
          ],
          rating: 4.8,
          
          popular: true,
         
        },
        {
          id: 'baghrir',
          name: 'Baghrir',
          description: 'Thousand-hole semolina pancakes with honey syrup',
          longDescription: 'Baghrirs are traditional semolina pancakes, recognizable by their thousand tiny holes that form during cooking. They are served with a delicious honey syrup and orange blossom water, giving them a unique and refreshing taste.',
          price: 120,
          image: '/images/barrir.jpg',
          categoryId: 'desserts',
          categoryName: 'Desserts',
          nutritionInfo: {
            calories: 280,
            protein: '4g',
            carbs: '52g',
            fat: '8g'
          },
          ingredients: ['Semoule', 'Farine', 'Levure', 'Miel', 'Eau de fleur d\'oranger'],
          reviews: [],
          rating: 4.6,
          
          popular: false,
          
        },
        
        {
          id: 'kalb-ellouz',
          name: 'Kalb Ellouz',
          description: 'Gâteau de semoule aux amandes nappé de sirop',
          longDescription: 'Le Kalb Ellouz est un délicieux gâteau de semoule aux amandes, nappé d\'un sirop parfumé. Ce dessert traditionnel algérien est à la fois moelleux et fondant, avec une texture unique qui ravit les papilles. Il est souvent servi lors des fêtes et célébrations.',
          price: 100,
          image: '/images/kalb-ellouz.jpg',
          categoryId: 'desserts',
          categoryName: 'Desserts',
          nutritionInfo: {
            calories: 380,
            protein: '6g',
            carbs: '54g',
            fat: '18g'
          },
          ingredients: ['Semoule', 'Amandes', 'Sucre', 'Eau de fleur d\'oranger', 'Sirop'],
          reviews: [],
          rating: 4.5,
          
          popular: false,
          
        }
      ]
    }
  ]
};

// Plats mis en avant pour la page d'accueil
const featuredDishes = [
  menuData.categories[0].dishes[0], // Chorba
  menuData.categories[1].dishes[0], // Couscous
  menuData.categories[2].dishes[2], // Chakhchoukha
  menuData.categories[3].dishes[0]  // Makroudh
];



// Exporter les données
export default menuData;
export { featuredDishes };