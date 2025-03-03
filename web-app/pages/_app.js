import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
