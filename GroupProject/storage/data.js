var categories = [
    {
        id: 1,
        name: 'Алкогольні напої',
        description: 'Алкоголь наше все',
        img: ''
    },
    {
        id: 2,
        name: 'Гарячі страви',
        description: 'Гарячі страви наше все',
        img: ''
    },
    {
        id: 3,
        name: 'Закуски',
        description: 'Закуски наше все',
        img: ''
    },
    {
        id: 4,
        name: 'Гарніри',
        description: 'Гарніри наше все',
        img: ''
    },
    {
        id: 5,
        name: 'Піца',
        description: 'Піца наше все',
        img: ''
    }
];

var cat_alk_items = [
    {
        id: 1,
        name: 'Whiskey Bell\'s',
        description: '',
        weight: 50,
        img: '/images/Food/Alc/bells.jpg',
        price: 150
    },
    {
        id: 2,
        name: 'Whiskey Claymore',
        description: '',
        weight: 50,
        img: '/images/Food/Alc/claymore.jpg',
        price: 110
    },
    {
        id: 3,
        name: 'Whiskey Jack Daniels',
        description: '',
        weight: 50,
        img: '/images/Food/Alc/jack-daniels.jpg',
        price: 115
    },
    {
        id: 4,
        name: 'Whiskey Jameson',
        description: '',
        weight: 50,
        img: '/images/Food/Alc/jameson.jpg',
        price: 160
    },
    {
        id: 5,
        name: 'Whiskey Jim-Beam',
        description: '',
        weight: 50,
        img: '/images/Food/Alc/jim-beam.jpg',
        price: 144
    }
];

var cat_hot_food_items = [
    {
        id: 1,
        name: 'Медальйони з телятини',
        description: '',
        weight: 300,
        img: '/images/Food/Hot_Dish/1.jpg',
        price: 159.90
    },
    {
        id: 2,
        name: 'Ребра свинні з тушеною капустою',
        description: '',
        weight: 380,
        img: '/images/Food/Hot_Dish/2.jpg',
        price: 79.90
    },
    {
        id: 3,
        name: 'Банош Dai Dai',
        description: '',
        weight: 350,
        img: '/images/Food/Hot_Dish/3.jpg',
        price: 78.90
    },
    {
        id: 4,
        name: 'Бургер “Club”',
        description: '',
        weight: 100,
        img: '/images/Food/Hot_Dish/4.jpg',
        price: 44.90
    },
    {
        id: 5,
        name: 'Стейк Бостон • св.ошийок',
        description: '',
        weight: 300,
        img: '/images/Food/Hot_Dish/5.jpg',
        price: 99.90
    }
];

var cat_zakusk_items = [
    {
        id: 1,
        name: 'М’ясна нарізка сирокопчена',
        description: '../images/zakush/1.jpg',
        weight: 100,
        img: '/images/Food/Appetizer/1.jpg',
        price: 49.90
    },
    {
        id: 2,
        name: 'Крильця «Пивні» курячі',
        description: '',
        weight: 400,
        img: '/images/Food/Appetizer/2.jpg',
        price: 70.95
    },
    {
        id: 3,
        name: 'Італійське Прошутто кількість',
        description: '',
        weight: 50,
        img: '/images/Food/Appetizer/3.jpg',
        price: 34.90
    },
    {
        id: 4,
        name: 'Сирна тарілка',
        description: '',
        weight: 150,
        img: '/images/Food/Appetizer/4.jpg',
        price: 84.90
    },
    {
        id: 5,
        name: 'Сирна нарізка',
        description: '',
        weight: 100,
        img: '/images/Food/Appetizer/5.jpg',
        price: 26.90
    }
];

var cat_garn_items = [
    {
        id: 1,
        name: 'Картопля по-селянськи',
        description: '',
        weight: 150,
        img: '/images/Food/Garnish/bulba.jpg',
        price: 140
    },
    {
        id: 2,
        name: 'Картопля фрі',
        description: '',
        weight: 150,
        img: '/images/Food/Garnish/bulba-fri.jpg',
        price: 130
    },
    {
        id: 3,
        name: 'Картопля варена',
        description: '',
        weight: 150,
        img: '/images/Food/Garnish/bulba-varena.jpg',
        price: 110
    },
    {
        id: 4,
        name: 'Картопля п\'юре',
        description: '',
        weight: 150,
        img: '/images/Food/Garnish/bulba-piure.jpg',
        price: 115
    },
    {
        id: 5,
        name: 'Овочі гриль',
        description: '',
        weight: 100,
        img: '/images/Food/Garnish/vegetables.jpg',
        price: 99
    } 
];

var cat_pizza_items = [
    {
        id: 1,
        name: 'Піца з мангалиці',
        description: 'Перетерті томати, ковбаса з мангалиці, сири моцарела та рікота',
        weight: 480,
        img: '/images/Food/Pizza/1.jpg',
        price: 104
    },
    {
        id: 2,
        name: 'Прошуто',
        description: 'Перетерті томати, моцарела, шинка.',
        weight: 430,
        img: '/images/Food/Pizza/2.jpg',
        price: 99
    },
    {
        id: 3,
        name: 'Карбонара',
        description: 'Томати, моцарела, шинка, баварські ковбаски та запечене яйце.',
        weight: 440,
        img: '/images/Food/Pizza/3.jpg',
        price: 99
    },
    {
        id: 4,
        name: 'Подвійна пепероні',
        description: 'Перетерті томати, моцарела, подвійна порція салямі пікантної, перець чилі.',
        weight: 450,
        img: '/images/Food/Pizza/4.jpg',
        price: 136
    },
    {
        id: 5,
        name: 'Маргарита',
        description: 'Перетерті томати, моцарела, помідори.',
        weight: 390,
        img: '/images/Food/Pizza/5.jpg',
        price: 86
    }
];