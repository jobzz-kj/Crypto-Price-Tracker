import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchControls from './SearchControls';
import CryptoList from './CryptoList';
import styles from '../styles/CryptoTracker.module.css';

const fetchCryptoPrices = async () => {
    const ids = 'bitcoin,ethereum,ripple,litecoin,cardano';
    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`
    );
    if (!res.ok) {
        throw new Error('Failed to fetch crypto prices');
    }
    return res.json();
};

export default function CryptoTracker() {
    const [searchTerm, setSearchTerm] = useState('');

    const { data: cryptoData, error, isLoading, refetch } = useQuery({
        queryKey: ['crypto-prices'],
        queryFn: fetchCryptoPrices,
    });

    const filteredData = cryptoData?.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) return <div className={styles.container}>Loading prices...</div>;
    if (error) return <div className={styles.container} style={{ color: 'red' }}>Error fetching data!</div>;

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Crypto Price Tracker</h1>
                <SearchControls
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    refetch={refetch}
                    isLoading={isLoading}
                    count={filteredData?.length || 0}
                />
            </div>
            <div className={styles.container}>
                <CryptoList cryptoData={filteredData || []} />
            </div>
        </>
    );
}
