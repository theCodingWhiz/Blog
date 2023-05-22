const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>theCodingWhiz Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#2d6ee8",
            borderRadius: "8px",
          }}
        >
          New blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
