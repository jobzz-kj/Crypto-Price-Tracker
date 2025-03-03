import styles from '../styles/CryptoList.module.css';

export default function CryptoList({ cryptoData }) {
    return (
        <ul className={styles.list}>
            {cryptoData.map((coin) => (
                <li key={coin.id} className={styles.listItem}>
                    <span className={styles.coinName}>{coin.name}</span>
                    <span className={styles.coinPrice}>${coin.current_price}</span>
                </li>
            ))}
        </ul>
    );
}
