function Logo() {
  return (
    <div>
      <div className="logo">
        <img
          style={{ height: "7rem", width: "7rem" }}
          src="../logo.png"
          alt=""
        />
        <h1
          style={{ fontWeight: 700, fontSize: "3rem", letterSpacing: "0.1rem" }}
        >
          Movie Zilla
        </h1>
      </div>
    </div>
  );
}

export default Logo;
