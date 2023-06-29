// Pick<type, keys>
// Omit<type, keys>

// type Usuario2EX3 = {
//     nome: string;
//     idade: number;
//     email: string;
// };

// type Keys = "nome" | "idade";

// type JustEmail = Omit<Usuario2EX3, Keys>;

// const dave: JustEmail = {
//     email: "dave@fakemail.com",
// };

// const dave: Pick<Usuario2EX3, Keys> = {
//     idade: 20,
//     nome: "dave",
// };

// console.log(dave);
