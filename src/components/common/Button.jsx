function Button({
  children,
  href,
  variant = "primary",
  onClick,
}) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-600 text-white",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;