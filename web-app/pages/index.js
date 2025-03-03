import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';


const fetchCryptoPrices = async () => {
    // coin IDs for Bitcoin, Ethereum, Ripple, Litecoin, and Cardano:
    const ids = 'bitcoin,ethereum,ripple,litecoin,cardano';

    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`
    );
    if (!res.ok) {
        throw new Error('Failed to fetch crypto prices');
    }
    return res.json();
};

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    // Use `cryptoData` instead of `data`
    const { data: cryptoData, error, isLoading, refetch } = useQuery({
        queryKey: ['crypto-prices'],
        queryFn: fetchCryptoPrices
    });

    // Ensure `cryptoData` is used for filtering
    const filteredData = cryptoData?.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return <div style={{ padding: '1rem' }}>Loading prices...</div>;
    }

    if (error) {
        return <div style={{ padding: '1rem', color: 'red' }}>Error fetching data!</div>;
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
            <h1>Crypto Price Tracker</h1>
            <div style={{ marginBottom: '1rem' }}>
                <input
                    type="text"
                    placeholder="Search by coin name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem' }}
                />
            </div>

            <button onClick={() => refetch()} disabled={isLoading}>
                {isLoading ? 'Refreshing...' : 'Refresh Prices'}
            </button>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {filteredData &&
                    filteredData.map((coin) => (
                        <li key={coin.id} style={{ margin: '1rem 0' }}>
                            <div style={{ fontWeight: 'bold' }}>{coin.name}</div>
                            <div>Current Price: ${coin.current_price}</div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
