// Simple auth utility with base64 encoding (không phải bảo mật cao, dùng cho admin đơn giản)
export const ADMIN_USER = "inanhoanggia";
export const ADMIN_PASS = "inanhoanggia38"; // Đổi mật khẩu này sau khi deploy

// Mã hóa base64 đơn giản
export function encodeCredentials(username, password) {
  return btoa(`${username}:${password}`);
}

export function decodeCredentials(encoded) {
  try {
    const decoded = atob(encoded);
    const [username, password] = decoded.split(":");
    return { username, password };
  } catch (e) {
    return null;
  }
}

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  const token = localStorage.getItem("admin_token");
  if (!token) return false;
  const creds = decodeCredentials(token);
  return (
    creds && creds.username === ADMIN_USER && creds.password === ADMIN_PASS
  );
}

export function login(username, password) {
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    localStorage.setItem("admin_token", encodeCredentials(username, password));
    return true;
  }
  return false;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_token");
  }
}
