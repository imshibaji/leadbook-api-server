import { Deal } from './deal.entity';
import { DataSource } from 'typeorm';

export const dealProviders = [
  {
    provide: 'DEAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Deal),
    inject: ['DATA_SOURCE'],
  },
];