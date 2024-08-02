"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Order } from '@/types';

type AccordionProps = {
  orders: Order[];
};

const Accordion: React.FC<AccordionProps> = ({ orders }) => {
  return (
    <div className="accordion" id="ordersAccordion">
      {orders.map((order) => (
        <div className="accordion-item" key={order.id}>
          <h2 className="accordion-header" id={`heading${order.id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${order.id}`}
              aria-expanded="false"
              aria-controls={`collapse${order.id}`}
            >
              Order ID: {order.id}
            </button>
          </h2>
          <div
            id={`collapse${order.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${order.id}`}
            data-bs-parent="#ordersAccordion"
          >
            <div className="accordion-body">
              <p><strong>Customer:</strong> {order.customerName}</p>
              <p><strong>Pizza:</strong> {order.pizzaType}</p>
              <p><strong>Extra Toppings:</strong> {order.extraToppings}</p>
              <p><strong>Quantity:</strong> {order.quantity}</p>
              <p><strong>Drink:</strong> {order.drink}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
