const Header = ({ children }) => {
  return (
    <div className="fixed top-0 right-0 z-10 flex items-center left-256 s:left-0 h-96 bg-dark-100 shadow-darkinner">
      {children}
    </div>
  );
};

export default Header;
