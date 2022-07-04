import { Followup } from './followup.entity';
import { DataSource } from 'typeorm';

export const followupProviders = [
  {
    provide: 'FOLLOWUP_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Followup),
    inject: ['DATA_SOURCE'],
  },
];