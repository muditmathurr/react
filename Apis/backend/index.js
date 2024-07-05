import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "prod1" },
    { id: 2, name: "prod2" },
  ];
  if(req.query.search){
    const filterProducts = products.filter(product => 
        product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
  }

  setTimeout(() => {
    res.send(products)
  }, 3000)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
