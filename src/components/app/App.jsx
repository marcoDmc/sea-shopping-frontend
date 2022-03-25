import React, { useState, useEffect } from "react";
import { api } from "../../server/api";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader";
import ShoppingList from "../ShoppingList";
import Header from "../navbar/navbar";
import { Wrapper, Container } from "./App.styled";
import extractPercentage from "../../utils/extractPorcentage";

function App() {
  const colors = ["#03A696", "#F2EC99", "#2778DB", "#F28705"];
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [theme, setTheme] = useState(false);
  const [statusRadio, setStatusRadio] = useState("healthy");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();



    try {
      if (name && price) {
        const postProducts = await api.post("/", {
          type: "item",
          name: name,
          price: Number(price),
          checked: false,
          tags: [statusRadio],
        });

        setProducts([...products, postProducts.data]);
      }
      setName("");
      setPrice("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const handleApiGet = async () => {
      const { data } = await api.get("/");
      setProducts(data);
    };
    handleApiGet();
  }, []);

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

  const handleToggle = (id) => {
    const newProducts = products.map((product) =>
      product._id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(newProducts);
  };

  return (
    <>
      <Wrapper themes={theme}>
        <Container themes={theme}>
          <AppHeader handleTheme={handleTheme} themes={theme} />
          <AppContainer
            themes={theme}
            left={
              <ShoppingList
                themes={theme}
                title="Products available"
                products={products}
                onToggle={handleToggle}
              />
            }
            middle={
              <ShoppingList
                themes={theme}
                title="your shopping list"
                products={selectedProducts}
                onToggle={handleToggle}
              />
            }
            right={
              <div style={{ fontWeight: "bold" }}>
                <p>statistics</p>
                <LineChart
                  themes={theme}
                  color={colors[0]}
                  title="healthy"
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
                  title="not so healthy"
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
                  title="cleaning"
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
                  title="others"
                  percentage={extractPercentage(
                    selectedProducts.length,
                    selectedProducts.filter((product) =>
                      product.tags.includes("others")
                    ).length
                  )}
                />
                <div style={{ marginTop: "12px" }}>
                  <h2
                    style={{
                      fontWeight: 400,
                      fontSize: 12,
                      color: theme ? "#04D94F" : "#8F61F2",
                    }}
                  >
                    expense forecast:
                  </h2>
                  <div
                    style={{
                      fontSize: 24,
                      color: theme ? "#1DA1F2" : "#F2EC99",
                    }}
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

        <Header
          handleSubmitForm={handleSubmitForm}
          setName={setName}
          setPrice={setPrice}
          price={price}
          name={name}
          setStatusRadio={setStatusRadio}
          themes={theme}
        />
      </Wrapper>
    </>
  );
}

export default App;
