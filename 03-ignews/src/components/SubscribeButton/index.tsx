import styles from './styles.module.scss'

interface SubscribeButtonPros {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonPros) {
  return ( 
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}