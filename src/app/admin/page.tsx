import { Order } from '@/types';
import Accordion from '@/components/accordion';

const Admin: React.FC = async () => {
  const res = await fetch("http://localhost:3000/api/orders?status=new");
  const orders: Order[] = await res.json();

  return (
    <div>
      <section className="container my-5 text-center">
        <h1>Welcome to Slice of Heaven</h1>
        <p>Your one-stop destination for heavenly pizza.</p>
      </section>
      <section className="container my-5">
        <h2 className="text-center">Admin</h2>
        <Accordion orders={orders} />
      </section>
    </div>
  );
};

export default Admin;