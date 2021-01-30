const PageWrapper = ({ children }) => {
  return (
    <div className="flex-grow pl-256 s:pl-0 pt-96 page-wrapper">{children}</div>
  );
};

export default PageWrapper;
