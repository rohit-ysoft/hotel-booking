import axios from "axios";
import { store } from "../redux/Store";
import { logout } from "../redux/slices/authSlice";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 15000, // ⏱ Prevent hanging requests
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================= REQUEST INTERCEPTOR ================= */
api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Extra security headers (optional)
    config.headers["X-Requested-With"] = "XMLHttpRequest";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* ================= RESPONSE INTERCEPTOR ================= */
api.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;

    // 🔐 Token expired / Unauthorized
    if (status === 401) {
      console.warn("Unauthorized - Logging out");

      store.dispatch(logout());

      // redirect to login
      window.location.href = "/home";
    }

    // ⛔ Forbidden
    if (status === 403) {
      console.error("Access Forbidden");
    }

    // 🌐 Network error
    if (!error.response) {
      console.error("Network error or server not reachable");
    }

    return Promise.reject(error);
  }
);

export default api;
