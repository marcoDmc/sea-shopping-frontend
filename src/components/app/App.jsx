import React, { useState, useEffect } from "react";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader";
import ShoppingList from "../ShoppingList";
import { Wrapper, Container } from "./App.styled";
import productsMock from "../../mocks/products.json";
import extractPercentage from "../../utils/extractPorcentage";

function App() {
  const colors = ["#03A696", "#F2EC99", "#2778DB", "#F28705"];

  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  useEffect(() => {
    const newSelectedProducts = products.filter((product) => product.checked);

    setSelectedProducts(newSelectedProducts);
  }, [products]);

  useEffect(() => {
    const total = selectedProducts
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);

    setTotalPrice(total);
  }, [selectedProducts]);

  function handleToggle(id) {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(newProducts);
  }

  return (
    <Wrapper themes={theme}>
      <Container themes={theme}>
        <AppHeader handleTheme={handleTheme} themes={theme} />
        <AppContainer
          themes={theme}
          left={
            <ShoppingList
             themes={theme}
              title="Produtos disponíveis"
              products={products}
              onToggle={handleToggle}
            />
          }
          middle={
            <ShoppingList
              themes={theme}
              title="Sua lista de compras"
              products={selectedProducts}
              onToggle={handleToggle}
            />
          }
          right={
            <div style={{ fontWeight: "bold" }}>
              estatisticas
              <LineChart
                themes={theme}
                color={colors[0]}
                title="saudavel"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("healthy")
                  ).length
                )}
              />
              <LineChart
               themes={theme}
                color={colors[1]}
                title="nao tao saudavel"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("junk")
                  ).length
                )}
              />
              <LineChart
               themes={theme}
                color={colors[2]}
                title="limpeza"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("cleaning")
                  ).length
                )}
              />
              <LineChart
               themes={theme}
                color={colors[3]}
                title="outros"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("others")
                  ).length
                )}
              />
              <div style={{ marginTop: 12 }}>
                <h2
                  style={{
                    fontWeight: 400,
                    fontSize: 12,
                    color: theme ? "#D93232" : "#FFFF",
                  }}
                >
                  previsão de gastos:
                </h2>
                <div
                  style={{ fontSize: 24, color: theme ? "#2F3240" : "#F2EC99"}}
                >
                  {totalPrice.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>
              </div>
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
