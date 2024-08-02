import { NextRequest } from "next/server";
import { pizzaOrders } from "@/data";

export async function GET(request: NextRequest) {
  let filteredOrders = pizzaOrders;
  const status = request.nextUrl.searchParams.get("status");

  if (status) {
    filteredOrders = filteredOrders.filter(
      (order) => order.status.toLowerCase() === status.toLowerCase()
    );
  }

  return Response.json(filteredOrders);
}