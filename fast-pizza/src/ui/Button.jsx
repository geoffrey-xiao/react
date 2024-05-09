/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, onClick, type = "primary" }) => {
  const className = `inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
  disabled:cursor-not-allowed sm:px-6 sm:py-4`;

  const base = `inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
  disabled:cursor-not-allowed `;

  const styles = {
    primary: base + " md:px-6 md:py-4 px-4 py-3",
    small: base + " md:px-5 md:py-2.5 px-4 py-2 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary: `border-2 border-stone-300 inline-block rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300
    hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2
    disabled:cursor-not-allowed md:px-5 md:py-2.5 px-4 py-2 text-sm`,
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
