import { DataSource } from 'typeorm';
import { Business } from './business.entity';

export const businessProviders = [
  {
    provide: 'BUSINESS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Business),
    inject: ['DATA_SOURCE'],
  },
];