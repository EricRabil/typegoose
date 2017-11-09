import * as mongoose from 'mongoose';

import { NoMetadataError } from './errors';

export const schema = (options: SchemaOptions) => (target: any) => {
  
};

export interface SchemaOptions extends mongoose.SchemaOptions {
}
