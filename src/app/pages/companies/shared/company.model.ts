import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Company extends BaseResourceModel {
  constructor(
    public id?: number
  ) {
    super();
  }
}
