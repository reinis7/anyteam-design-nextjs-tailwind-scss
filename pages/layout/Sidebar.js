const Sidebar = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 flex-shrink-0 h-full px-0 pb-0 overflow-hidden pt-96 w-256 s:w-0 bg-dark-100 shadow-darkinner_right">
      {children}
    </div>
  );
};

export default Sidebar;
