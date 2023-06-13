import React from 'react';
import styles from './card.module.css';
import Chip from '../../Assets/images/chip.png';

export default function Card({
  cardName,
  cardNumber,
  isActive,
  onClick,
}) {
  // const [cardBrand, setCardBrand] = useState(null);

  // function identifyCardBrand(number) {
  //   const cardTypeFound = CARD_NUMBER_PATTERN.find((type) => type.pattern.test(number));
  //   setCardBrand(cardTypeFound ? cardTypeFound.brand : null);
  // }

  function handleClick() {
    if (onClick) onClick();
  }

  // function getCardMask(brand) {
  //   switch (brand) {
  //     case 'american-express':
  //       return '#### ****** #####';
  //     default:
  //       return '#### **** **** ####';
  //   }
  // }

  // function applyCardMask(number, cardMask) {
  //   const cNumber = number.toString();
  //   let maskedNumber = '';
  //   let j = 0;

  //   for (let i = 0; i < cardMask.length; i += 1) {
  //     if (cardMask[i] === '#') {
  //       maskedNumber += cNumber[j] || '#';
  //       j += 1;
  //     } else {
  //       maskedNumber += cardMask[i];
  //     }
  //   }

  //   return maskedNumber;
  // }

  // function handleCardNumberChange(number) {
  //   // Define a máscara com base na marca do cartão
  //   const cardMask = getCardMask(cardBrand);
  //   // Aplica a máscara ao número do cartão
  //   const maskedCardNumber = applyCardMask(number, cardMask);
  //   // Atualiza o estado do número do cartão
  //   setInternalCardNumber(maskedCardNumber);
  // }

  return (
    <div
      className={isActive ? styles.mainContainer : styles.secondaryContainer}
      onClick={() => handleClick()}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          handleClick();
        }
      }}
      role="button"
      tabIndex="0"
    >
      <div className={styles.cardInfo}>
        <p>{cardName}</p>
      </div>
      <div className={styles.chip}>
        <img src={Chip} alt="" />
        <p>{cardNumber}</p>
      </div>
      {/* <div className={styles.logo}>
        {cardBrand ? (<img src={cardBrand} alt="" />) : null}
      </div> */}
    </div>
  );
}
