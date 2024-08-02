"use client";
import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import Filter from "@/components/filter";

const pizzas = [
  {
    name: "Vegetarian",
    image: "/images/vegetarian.png",
    price: "$12.99",
  },
  {
    name: "Pepperoni",
    image: "/images/pepperoni.png",
    price: "$14.99",
  },
  {
    name: "Olive",
    image: "/images/olive.png",
    price: "$16.99",
  },
  {
    name: "Mixed",
    image: "/images/mixed.png",
    price: "$13.99",
  },
  {
    name: "Margarita",
    image: "/images/margarita.png",
    price: "$15.99",
  },
  {
    name: "Cheese",
    image: "/images/cheese.png",
    price: "$17.99",
  },
];

const Home: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const filteredPizzas = pizzas.filter((pizza) => {
    if (filter === "All") return true;
    return pizza.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <PageHeader />
      <section className="container my-5">
        <h2 className="text-center">Our Menu</h2>
        <Filter pizzas={pizzas} handleFilterChange={handleFilterChange} filter={filter} />
        <div className="row">
          {filteredPizzas.map((pizza, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 text-center menu-item">
                <Image
                  src={pizza.image}
                  alt={`${pizza.name} Pizza`}
                  className="mx-auto"
                  width={200}
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title">{pizza.name}</h5>
                  <p className="card-text">{pizza.price}</p>
                  <button className="btn">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
