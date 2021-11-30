process.env.AMBIENTE_PROCESSO = "desenvolvimento";
var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3025;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuario");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuario", usuarioRouter);

app.listen(PORTA, function() {
    console.log(`Servidor Aberto! Porta ${PORTA}`);
});