import Model, { attr } from '@ember-data/model';
import { seedValue } from 'faker';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean', {defaultValue: false}) value;

  changeValue()
  {
    this.value=!this.value;
  }
}
