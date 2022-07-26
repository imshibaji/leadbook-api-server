import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST || '127.0.0.1',
        port: parseInt(process.env.DATABASE_PORT) || 3306,
        username: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASS || 'password',
        database: process.env.DATABASE_NAME || 'apps',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: Boolean(process.env.DATABASE_SYNC) || true,
      });

      return dataSource.initialize();
    },
  },
];