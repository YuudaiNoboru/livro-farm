import { useState } from "react";

import Card from "./components/Card";

export default function App() {
  const data = [
    { id: 1, name: "Fiat", year: 2023, model: "Panda", price: 12000 },
    { id: 2, name: "Peugeot", year: 2018, model: "308", price: 16000 },
    { id: 3, name: "Ford", year: 2022, model: "Mustang", price: 25000 },
    { id: 4, name: "Renault", year: 2019, model: "Clio", price: 18000 },
    { id: 5, name: "Citroen", year: 2021, model: "C3 Aircross", price: 22000 },
    { id: 6, name: "Toyota", year: 2020, model: "Yaris", price: 15000 },
    { id: 7, name: "Volkswagen", year: 2021, model: "Golf", price: 28000 },
    { id: 8, name: "BMW", year: 2022, model: "M3", price: 45000 },
    { id: 9, name: "Mercedes", year: 2021, model: "A-Class", price: 35000 },
    { id: 10, name: "Audi", year: 2022, model: "A6", price: 40000 },
  ];

  const [budget, setBudget] = useState(20000);

  // Formatação de moeda
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  // Carros dentro do orçamento
  const carsInBudget = data.filter((car) => car.price <= budget);

  return (
    <div className="bg-purple-800 text-white min-h-screen p-4 flex flex-col items-center">
      {/* Entrada de orçamento */}
      <div className="mb-4 space-y-5">
        <h2 className="text-xl font-semibold">
          Your budget is {formatCurrency(budget)}
        </h2>
        <label htmlFor="budget" className="block font-medium">
          Budget:
        </label>
        <input
          type="number"
          id="budget"
          className="text-black px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          step={1000}
          value={budget}
          onChange={(e) => setBudget(Math.max(0, e.target.value))}
        />
      </div>

      {/* Lista de carros */}
      {carsInBudget.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {carsInBudget.map((car) => (
            <Card car={car} key={car.id} />
          ))}
        </div>
      ) : (
        <p className="text-lg mt-8 font-semibold text-center">
          Nenhum carro disponível dentro do orçamento.
        </p>
      )}
    </div>
  );
}