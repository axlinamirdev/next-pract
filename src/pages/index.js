import Head from 'next/head';
import ProductList from '@containers/ProductList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Listado de producto</title>
      </Head>
      <ProductList />
    </div>
  );
}
