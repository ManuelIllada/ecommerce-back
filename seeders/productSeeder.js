/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 3000 artículos con textos ficticios.
 *
 * A priori, esta función debería ser ejecutada una única vez, al correr el
 * proyecto. Esto está hecho el archivo dbInitialSetup.js. Para evitar que se
 * corran los seeders se podría borrar o comentar dicha línea. Como alternativa
 * se podría escribir un código que permita ejectuar los seeders desde la
 * terminal.
 *
 */

const { Product } = require("../models");

module.exports = async () => {
  const product = [
    {
      name: "SoFlow SO4 Pro E-Scooter",
      description:
        "The SO4 Pro is the big brother of the SO4. If there was a racing series for e-scooters, the SO4 Pro would be the street version of it. Power and torque allow the scooter to go faster than usual, and the engine sound of the SO4 Pro makes any Formula E car fall silent. The SO4 Pro has a 500 Watt motor and has a range of up to 40 kilometers.",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096454632563298354/SO4_Pro_Hero_Crop-scaled-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096454632340983968/SO4_Pro_Frontwheel-scaled-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096454008480202902/SO4_Pro_Display-scaled-removebg-preview.png",
      ],
      price: 799,
      stock: 10,
      categoryId: 3,
      featured: true,
      slug: "",
    },
    {
      name: "C35 SLA Electric Scooter",
      description:
        "The C35 SLA is a long-range electric scooter that gets you there, back, and wherever you want to go in between (local laws apply). With a powerful 36V (three 12V) sealed lead-acid battery system, you'll have a range of up to 10 miles (16km) on a single charge.",
      media: [
        "https://razor.com/wp-content/uploads/2022/08/C35_SLA_Product.png",
        "https://razor.com/wp-content/uploads/2022/08/C35_SLA_RearBrake_BrakeLight-943x870.png",
        "https://razor.com/wp-content/uploads/2022/08/C35_SLA_Display.png",
      ],
      price: 1199,
      stock: 50,
      categoryId: 3,
      featured: true,
      slug: "",
    },
    {
      name: "Sonic Glow Electric Scooter",
      description:
        "Pair your device with the Sonic Glow's built-in Bluetooth® wireless speaker, and it'll automatically connect going forward so you can enjoy your favorite music on the go.",
      media: ["https://razor.com/wp-content/uploads/2021/09/SonicGlow_ES_BK_Product2-513x637.png"],
      price: 250,
      stock: 20,
      categoryId: 3,
      featured: false,
      slug: "",
    },
    {
      name: "Begode (Gotway) EX20HS C30 High Speed 3600W Motor Suspension Electric Unicycle",
      description:
        "The scrapped EX2 will be replaced by a model that Begode is calling the EX 20S 3600WH. Redefine your riding passion with the latest innovation of Begode with cutting-edge technology and high quality. The Begode Gotway EX20 HS C30 electric unicycle is built with a hardcore aluminum frame, that withstands unfriendly environments including dust, sunlight, and mild rain. ",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096455434778464256/Extreme_Bull_EX2S_Product_Photo_WR_1__29734.1642783838.1280.1280__36067-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096455434472259704/Extreme_Bull_EX2S_Product_Photo_WR_4__78456.1642783838.1280.1280__26587-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096455434203836528/Extreme_Bull_EX2S_Product_Photo_WR_3__22543.1642783838.1280.1280__74866-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096455433746665522/Extreme_Bull_EX2S_Product_Photo_WR_2__81712.1642783838.1280.1280__15433-removebg-preview.png",
      ],
      price: 1500,
      stock: 5,
      categoryId: 1,
      featured: true,
      slug: "",
    },
    {
      name: "Onewheel Pint X - Powder Blue",
      description:
        "Pint X is fast, XR fast. The extra speed and torque crushes hills, provides excellent acceleration out of turns, and shaves time off longer trips.",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096455887771672606/OneWheel_Pint_X_Product_Photo_WR__51638-removebg-preview.png",
      ],
      price: 1900,
      stock: 3,
      categoryId: 1,
      featured: true,
      slug: "",
    },
    {
      name: "Begode (Gotway) MCM5 14 1500W Motor Electric Unicycle",
      description:
        "If you don't want to settle for an ordinary electric unicycle, and if you want a powerful ride in the form of a EUC, then this Gotway MCM5 electric unicycle is a perfect buy for you. This one has a maximum range of 50-70 KM along with a top speed of 30 km per hour. It weighs around 17 kg and it has a maximum loading capacity of 100 kgs.",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096456613994446868/Gotway2520Images25284_29__35855.1624270715.1280.1280__65572-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096456614246088704/Gotway2520Images25285_29__90709.1624270715.1280.1280__95598-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096456614690701392/Gotway2520Images25281_29__75143.1624270715.1280.1280__23419-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096456615068176514/Gotway2520Images25282_29__26534.1624270715.1280.1280__31986-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096456615349190809/Gotway2520Images25283_29__58929.1624270715.1280.1280__52021-removebg-preview.png",
      ],
      price: 2699,
      stock: 3,
      categoryId: 1,
      featured: true,
      slug: "",
    },
    {
      name: "KingSong S22 3300W Electric Unicycle (EUC)",
      description:
        "The new model from Kingsong S22 Eagle, The successor of the S18 Suspension wheel, is Upgraded, and Retuned! The design theme of the S22 is one of a highly focused and highly tuned off-road machine.",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096457269463490560/KingSong_KS_S22_Electric_Unicycle_1__51425-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096457269161504878/KingSong_KS_S22_Electric_Unicycle_4__30585-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096457268586881094/KingSong_KS_S22_Electric_Unicycle_3__52662-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096457268339413022/KingSong_KS_S22_Electric_Unicycle_2__57902-removebg-preview.png",
      ],
      price: 2699,
      stock: 3,
      categoryId: 1,
      featured: false,
      slug: "",
    },
    {
      name: "SoFlow Lou 3.0 E-Board",
      description:
        "LOU is a light, fast, and maneuverable electric skateboard with a hidden battery in the deck and motorized wheels. Built for speed, range, and reliability, LOU is the ultimate electric skateboard.",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096457730929217576/Lou-Board-2-removebg-preview.png",
      ],
      price: 2699,
      stock: 3,
      categoryId: 2,
      featured: true,
      slug: "",
    },
    {
      name: "Pioneer X4 Electric Skateboard & Longboard",
      description:
        "Pioneer X4, which is the full upgrade of the classic board 3X, can reach a Top Speed of 45kph/28mph and a Real Range of 21miles/33km under real test conditions. (The tester weighed 75kg and traveled at 18mph/30kph on 90mm wheels).",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096458328332308653/5_b302f9ab-26f0-40b9-9384-8ebe64432216_540x-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096458328676257812/8_0549625d-906b-4e4e-aa0e-6549222d407f_540x-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096458329066311820/10_73c07388-2f85-4d74-9b4b-3e5ac8d26d9c_540x-removebg-preview.png",
      ],
      price: 2699,
      stock: 3,
      categoryId: 2,
      featured: true,
      slug: "",
    },
    {
      name: "Atlas Profesional",
      description:
        "The Atlas Pro brings next generation performance to riders around the globe. With up to 7000W of power in 4WD, 170 km range with the brand new AUXPack, and 1000W super fast charger, the Exway team took a zero-compromise approach in designing the Atlas Pro",
      media: [
        "https://img.staticdj.com/25add93c811f1daf51b677f1a4abe22a_750x.png",
        "https://img.staticdj.com/549c3f15f42dea4b60b1b6154bb60ce4_750x.png",
        "https://img.staticdj.com/f789d00f250cd73344bc1d75b2d57621_750x.png",
      ],
      price: 2699,
      stock: 3,
      categoryId: 2,
      featured: true,
      slug: "",
    },
    {
      name: "SoFlow SO Bike",
      description:
        "Switch now to the new SO Bike. The model in minimalist design provides with its carbon belt drive and the five support levels for a unique driving performance. With a speed of up to 25 km/h, the SO Bike brings its owner safely and sustainably to his destination. The speed indicator, the battery life and the set modes are always in view thanks to the display on the handlebars.",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096458688216178848/01_SO_Bike_Packshot_Produktbild-removebg-preview.png",
      ],
      price: 2699,
      stock: 3,
      categoryId: 4,
      featured: true,
      slug: "",
    },
    {
      name: "SoFlow Flowpad Pro",
      description:
        "Hoverboards reimagined for practical use: effortlessly glide for up to four hours. Powered by an efficient brushless motor, the Flowpad Pro is agile, versatile and light. The engine has a load-bearing capacity of 100kg with a power output of 300 Watts. Now available here!",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096459517392326767/FlowpadPro_Front-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096459517648195644/FlowpadPro_Side_Detail-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096459517983723590/FlowpadPro_Side-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096459518268952606/FlowpadPro_Wheel-removebg-preview.png",
      ],
      price: 2699,
      stock: 3,
      categoryId: 2,
      featured: true,
      slug: "",
    },
    {
      name: "Lazer CityZen KinetiCore Helmet",
      description:
        "KinetiCore technology protects against both direct and rotational impact thanks to unique EPS foam blocks called controlled crumple zones that crumple under impact and absorb the energy that otherwise would have reached the cyclist's brain.  As KinetiCore is built-in, it means the helmets are designed with innovative vents that channel cool air through to the back of the helmet and expel warm air.  KinetiCore is integrated into the helmet rather than added on as an additional feature, so less material is used.  This means that the helmets are also lighter.",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096460202766766161/714150-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096460203416883230/714150c-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096460560566067331/714150a-removebg-preview.png",
      ],
      price: 2699,
      stock: 3,
      categoryId: 5,
      featured: false,
      slug: "",
    },
    {
      name: "REAX Ridge WP Gloves",
      description:
        "Designed by Revzilla, the durable, breathable and waterproof Ridge gloves are eager to grab a handful of whatever’s in store down the road (or lack thereof).",
      media: [
        "https://media.discordapp.net/attachments/992571782294929533/1096460884836106281/reax_ridge_wp_gloves_grey_black_750x750-removebg-preview.png",
        "https://media.discordapp.net/attachments/992571782294929533/1096460884576055336/reax_ridge_wp_gloves_grey_black_750x750__1_-removebg-preview.png",
      ],
      price: 25,
      stock: 3,
      categoryId: 5,
      featured: true,
      slug: "",
    },
    // {
    //   name: "",
    //   description: "",
    //   media: "",
    //   price: 25,
    //   stock: 3,
    //   categoryId: 5,
    //   featured: true,
    //   slug: "",
    // },
  ];

  await Product.bulkCreate(product);
  console.log("[Database] Se corrió el seeder de Product.");
};
