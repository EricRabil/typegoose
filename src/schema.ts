import * as mongoose from 'mongoose';

export const schema = (options: SchemaOptions) => (target: any, key: string) => {

};

export interface SchemaOptions extends mongoose.SchemaOptions {
}
