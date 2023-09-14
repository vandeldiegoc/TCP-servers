import dotenv from 'dotenv'

dotenv.config();

interface Environment {
  PORT: number;
  DB_HOST: string;
  NODE_ENV: string;
  HOST: string;
}

const environment: Environment = {
    PORT: parseInt(process.env.PORT || '3000', 10),
    DB_HOST: process.env.DB_HOST || 'localhost',
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
  };
  
  export default environment;