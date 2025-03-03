import styles from '../styles/SearchControls.module.css';

export default function SearchControls({ searchTerm, setSearchTerm, refetch, isLoading, count }) {
    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Search by coin name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchBar}
            />
            <button onClick={refetch} disabled={isLoading} className={styles.refreshButton}>
                {isLoading ? 'Refreshing...' : 'Refresh Prices'}
            </button>
            <p className={styles.count}>Showing {count} coins</p>
        </div>
    );
}
