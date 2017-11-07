import * as mongoose from 'mongoose';

import { NoMetadataError } from './errors';

export const schema = (options: SchemaOptions) => (target: any, key: string) => {
  const Type = (Reflect as any).getMetadata('design:type', target, key);

  if (!Type) {
    throw new NoMetadataError(key);
  }
};

export interface SchemaOptions extends mongoose.SchemaOptions {
}
