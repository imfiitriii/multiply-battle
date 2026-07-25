// Thin fetch wrapper around the backend auth endpoints.
// Requests go to /api/* and are proxied to the backend by Vite (see vite.config.js).

const BASE_URL = "/api/auth";

async function request(path, { method = "GET", body, token } = {}) {
    const headers = { "Content-Type": "application/json" };
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    let data = null;
    try {
        data = await res.json();
    } catch {
        // no JSON body
    }

    if (!res.ok) {
        const message = data?.message || "Request failed";
        throw new Error(message);
    }

    return data;
}

export const authApi = {
    register: ({ name, email, password }) =>
        request("/register", { method: "POST", body: { name, email, password } }),

    login: ({ email, password }) =>
        request("/login", { method: "POST", body: { email, password } }),

    me: (token) => request("/me", { token }),
};
