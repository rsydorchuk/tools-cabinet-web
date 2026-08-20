const AUTH_BASE = `${import.meta.env.VITE_API_BASE_URL ?? ""}/auth`;

async function request(path: string, options: RequestInit = {}) {
  const res = await fetch(`${AUTH_BASE}${path}`, {
    ...options,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (res.status === 204) return null;
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail ?? "Request failed");
  return data;
}

export function register(email: string, password: string) {
  return request("/register", { method: "POST", body: JSON.stringify({ email, password }) });
}

export function login(email: string, password: string) {
  return request("/login", { method: "POST", body: JSON.stringify({ email, password }) });
}

export function me() {
  return request("/me");
}

export function logout() {
  return request("/logout", { method: "POST" });
}
