import whale from './img/whale.jpg';
import dog from './img/dog.jpg';
import crocodile from './img/crocodile.jpg';
import bird from './img/bird.jpg';
import oct from './img/oct.jpg';
import duck from './img/duck.jpg';

const data = {

  products: [
    {
      id: '0',
      img: whale,
      title: '鯨魚',
      price: 200,
      des: '鯨，是海洋哺乳動物鯨下目中部分生物的通稱。鯨下目又分為鬚鯨小目和齒鯨小目。是用肺呼吸。在日常語言中，常將鯨和海豚分開，但在動物學中它們同屬於一個系群。',
      discount: false,
    },
    {
      id: '1',
      img: dog,
      title: '狗勾',
      price: 50,
      des: '犬，現代俗稱為狗，一種常見的犬科哺乳動物，與狼為同一種動物，生物學分類上是狼的一個亞種。狗是人類最早馴養的一個物種。',
      discount: true,
    },
    {
      id: '2',
      img: duck,
      title: '鴨子',
      price: 70,
      des: '對鴨科的鳥類的通用名稱，有鵝、天鵝、雁及鴛鴦等等。鴨均為游禽，通常體形比天鵝和鵝小，人們在淡水和鹹水都可以看見它們的身影。。',
      discount: false,
    },
    {
      id: '3',
      img: crocodile,
      title: '鱷魚',
      price: 200,
      des: '通稱為鱷魚，是典型的大型食肉動物，屬於脊索動物門蜥形綱。分佈於熱帶到亞熱帶的河川、湖泊、海岸中，現存25種。',
      discount: false,
    },
    {
      id: '4',
      img: bird,
      title: '鳥',
      price: 200,
      des: '是鳥綱和今鳥亞綱的通稱，是唯一存活並演化至今的恐龍，現代所有鳥類在生物學上也被分類為鳥形恐龍的一部份。',
      discount: false,
    },
    {
      id: '5',
      img: oct,
      title: '章魚',
      price: 200,
      des: '通稱為鱷魚，是典型的大型食肉動物，屬於脊索動物門蜥形綱。分佈於熱帶到亞熱帶的河川、湖泊、海岸中，現存25種。',
      discount: false,
    },
  ],

};

export default data;
