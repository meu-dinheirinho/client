import Card from './card';
import styles from './card.module.css';

export default function CreditCard({
  accounts = [],
  onSelectedCard,
}) {
  function handleClick(accountId) {
    if (onSelectedCard) onSelectedCard(accountId);
  }

  return (
    <div className={styles.containerCards}>
      {
        accounts && accounts.map((account, idx) => (
          <Card
            key={`${account.id} - ${idx}`}
            cardName={account.alias}
            cardNumber={account.last_four_number}
            isActive={account.isActive}
            onClick={() => handleClick(account.id)}
          />
        ))
      }
    </div>
  );
}
