import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { Order } from '@/types';
import Accordion from '@/components/accordion';
import PageHeader from "@/components/page-header";

const Admin: React.FC = async () => {
  const session = await getServerSession(options)

  if (!session) {
      redirect('/api/auth/signin?callbackUrl=/admin')
  }

  const res = await fetch("http://localhost:3000/api/orders?status=new");
  const orders: Order[] = await res.json();

  return (
    <div>
      <PageHeader />
      <section className="container my-5">
        <h2 className="text-center">Admin</h2>
        <Accordion orders={orders} />
      </section>
    </div>
  );
};

export default Admin;