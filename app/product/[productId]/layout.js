import Head from 'next/head';

const ProductDetailsLayout = ({ children }) => {
  return (
    <>
      <div className="container">
          <h1>Product Details</h1>

        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default ProductDetailsLayout;
