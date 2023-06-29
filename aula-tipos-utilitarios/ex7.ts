// Tipos de manipulação de strings
// Uppercase<literalType>
// Lowercase<literalType>

type Transcao = "Credito" | "Debito" | "Pix";

type TransacaoUpper = Uppercase<Transcao>;
type TransacaoLower = Lowercase<Transcao>;
