import { Gerente } from "./Gerente";
import { Programador } from "./Programador";
import { Vendedor } from "./Vendedor";

const novais = new Programador("novais", 300000, ["typescrypt", "python"]);
const gabs = new Gerente("gabs", 500000, "adminadmin");
const joao = new Vendedor("joao", 300000, 50000);

console.log(gabs.validarSenha("adminadmin"));
