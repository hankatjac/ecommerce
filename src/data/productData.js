/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */

 const storeProducts = [
  {
    id: 1,
    title: "1019D-4C-FHN13TP",
    img: require('../../assets/img/product/product-1.jpg'),
    price: 1600,
    company: "supermicro",
    category: "servers/computers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 2,
    title: "1028GR-TR",
    img: require('../../assets/img/product/product-2.jpg'),
    price: 1600,
    company: "supermicro",
    category: "servers/computers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 3,
    title: "2029GP-TR",
    img: require('../../assets/img/product/product-3.jpg'),
    price: 4800,
    company: "supermicro",
    category: "servers/computers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 4,
    title: "5019C-L",
    img: require('../../assets/img/product/product-4.jpg'),
    price: 1800,
    company: "supermicro",
    category: "servers/computers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 5,
    title: "5029C-TN2",
    img: require('../../assets/img/product/product-5.jpg'),
    price: 2400,
    company: "supermicro",
    category: "servers/computers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 6,
    title: "5039A-i",
    img: require('../../assets/img/product/product-6.jpg'),
    price: 1700,
    company: "supermicro",
    category: "servers/computers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 7,
    title: "6029TR-DTR",
    img: require('../../assets/img/product/product-7.jpg'),
    price: 6000,
    company: "supermicro",
    category: "servers/computers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 8,
    title: "SSG-620P-ACR12L",
    img: require('../../assets/img/product/product-8.jpg'),
    price: 5000,
    company: "supermicro",
    category: "servers/computers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 9,
    title: "keyboard-mouse",
    img: require('../../assets/img/product/keyboard-mouse.jpg'),
    price: 200,
    company: "microsoft",
    category: "peripherals",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 10,
    title: "headphone",
    img: require('../../assets/img/product/headphone.jpg'),
    price: 200,
    company: "sky",
    category: "consumables",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 11,
    title: "router",
    img: require('../../assets/img/product/router.jpg'),
    price: 2000,
    company: "sky",
    category: "peripherals",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 12,
    title: "mikrotic",
    img: require('../../assets/img/product/mikrotic.jpg'),
    price: 2000,
    company: "microtic",
    category: "peripherals",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 13,
    title: "printer",
    img: require('../../assets/img/product/printer-1.jpg'),
    price: 2000,
    company: "HP",
    category: "printers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 14,
    title: "printer",
    img: require('../../assets/img/product/printer-2.jpg'),
    price: 500,
    company: "HP",
    category: "printers",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 15,
    title: "tonner",
    img: require('../../assets/img/product/tonner.jpg'),
    price: 150,
    company: "HP",
    category: "consumables",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 16,
    title: "web camera",
    img: require('../../assets/img/product/web-camera.jpg'),
    price: 200,
    company: "sky",
    category: "consumables",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 17,
    title: "windows server 2019",
    img: require('../../assets/img/product/windows-server.jpg'),
    price: 8000,
    company: "microsoft",
    category: "software",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 18,
    title: "windows 10",
    img: require('../../assets/img/product/windows10.jpg'),
    price: 200,
    company: "microsoft",
    category: "software",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 19,
    title: "windows 11",
    img: require('../../assets/img/product/windows11.jpg'),
    price: 200,
    company: "microsoft",
    category: "software",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 20,
    title: "office 2009",
    img: require('../../assets/img/product/office2009.jpg'),
    price: 500,
    company: "microsoft",
    category: "software",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  }
];


export default storeProducts

