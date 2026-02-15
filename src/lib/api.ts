const getBaseUrl = () => {
    let url = import.meta.env.VITE_API_BASE_URL || '';

    // Remove trailing slash
    url = url.replace(/\/$/, '');

    // Safety Guard: Remove /api/v1 or /api if present in the base URL
    // This prevents duplication if the env var is misconfigured
    return url.replace(/\/api\/v1\/?$/, '').replace(/\/api\/?$/, '');
};

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
    const baseUrl = getBaseUrl();

    // Ensure endpoint starts with / for consistency
    const safeEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

    // Construct final URL
    const url = `${baseUrl}${safeEndpoint}`;

    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const config: RequestInit = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || errorData.message || 'API request failed');
        }

        return response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};
