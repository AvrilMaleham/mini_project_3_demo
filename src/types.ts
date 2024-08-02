export type Order = {
    id: number;
    customerName: string;
    pizzaType: string;
    extraToppings: string[];
    quantity: number;
    drink: string;
    status: string;
  };

  export type Pizza = {
    name: string;
    image: string;
    price: string;
  };