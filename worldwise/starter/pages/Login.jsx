import { useEffect, useState } from "react";
import Button from "../../src/components/Button";
import styles from "./Login.module.css";
import { useAuth } from "../../src/contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import PageNav from "../../src/components/PageNav";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const navigate = useNavigate();
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("jack123");

  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app/cities", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(email, password);
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
