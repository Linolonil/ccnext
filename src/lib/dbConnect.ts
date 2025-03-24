import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("A variável de ambiente MONGODB_URI não está definida.");
}

export const connectDB = async () => {
  try {
    // Verifica se já existe uma conexão ativa
    if (mongoose.connection.readyState === 1) {
      console.log("Já conectado ao MongoDB.");
      return true;
    }

    // Conecta ao MongoDB
    await mongoose.connect(MONGODB_URI);

    console.log("Conectado ao MongoDB com sucesso.");
    return true;
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw error;
  }
};