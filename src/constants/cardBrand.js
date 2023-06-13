import Mastercard from '../Assets/images/brands/master.png';
import Elo from '../Assets/images/brands/elo.png';
import Visa from '../Assets/images/brands/visa.png';
import Hipercard from '../Assets/images/brands/hipercard.png';
import AmericanExpress from '../Assets/images/brands/american.png';

export const CARD_NUMBER_PATTERN = [
  { name: 'Visa', brand: Visa, pattern: /^4/ },
  { name: 'Mastercard', brand: Mastercard, pattern: /^5[1-5]/ },
  { name: 'American Express', brand: AmericanExpress, pattern: /^3[47]/ },
  { name: 'Elo', brand: Elo, pattern: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/ },
  { name: 'Hipercard', brand: Hipercard, pattern: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/ },
  // Adicione outras bandeiras de cartão aqui
];
