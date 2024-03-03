const AuthLayout = ({ children }) => {
    return (
      <>
        <div className="container">
            <h1>Inner Auth Layout</h1>
  
          <main>
            {children}
          </main>
        </div>
      </>
    );
  };
  
  export default AuthLayout;