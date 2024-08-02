import { Pizza } from "@/types";

type PizzaProps = {
  pizzas: Pizza[];
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filter: string;
};

const Filter: React.FC<PizzaProps> = ({
  pizzas,
  handleFilterChange,
  filter,
}) => {
  return (
    <div className="text-center mb-4">
      <label htmlFor="filter" className="form-label">
        Filter by name:{" "}
      </label>
      <select
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        className="form-select d-inline-block w-auto mx-2"
      >
        <option value="All">All</option>
        {pizzas.map((pizza) => (
          <option key={pizza.name} value={pizza.name}>
            {pizza.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
