// Simple in-memory "database". Resets every time the server restarts.
// Each user: { id, username, name, email, passwordHash }
export const users = [];

let nextId = 1;

export function findUserByEmail(email) {
    const normalized = String(email).trim().toLowerCase();
    return users.find((u) => u.email === normalized);
}

export function findUserById(id) {
    return users.find((u) => u.id === id);
}

export function createUser({ name, email, passwordHash }) {
    const normalizedEmail = String(email).trim().toLowerCase();
    const user = {
        id: nextId++,
        username: normalizedEmail.split("@")[0],
        name: String(name).trim(),
        email: normalizedEmail,
        passwordHash,
    };
    users.push(user);
    return user;
}

// Strip sensitive fields before sending a user to the client.
export function toPublicUser(user) {
    return {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
    };
}
