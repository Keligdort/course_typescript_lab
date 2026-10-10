/* 
	Примените обе примеси к классу FormData и реализуйте функционал сериализации и валидации создав класс EnhancedFormData
*/

export function Serializable<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    serialize(): string {
      return JSON.stringify(this);
    }
  };
}

export function Validatable<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    validate(): boolean {
      return Object.values(this.fields).every(
        (value) => value !== null && value !== undefined && value !== ""
      );
    }
  };
}

export class FormData {
  fields: Record<string, any> = {};
}

export const EnhancedFormData = Serializable(Validatable(FormData));
