export default class ZoomInfoException extends Error {
  private status: number;

  private data: Object;

  constructor(status: number, errorMessage: string, errorData?: Object) {
    super(errorMessage);
    this.status = status;
    this.message = errorMessage;
    this.data = {
      status,
      errorMessage: errorMessage,
      errorData: errorData,
    };
    this.name = 'ZoomInfoException';
  }
}
