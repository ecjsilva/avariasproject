const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const PORT = 9090;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`));
