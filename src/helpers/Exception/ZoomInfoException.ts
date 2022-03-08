export default class ZoomInfoException extends Error {
  private status: number;

  private data: Object;

  constructor(status: number, errorMessage: string, errorData?: Object) {
    super(errorMessage);
    this.status = status;
    this.message = errorMessage;
    this.data = {
      status,
      errorMessage,
      errorData,
    };
    this.name = 'ZoomInfoException';
  }

  /**
   * Get the status code of the exception
   * @returns status code
   */
  public getStatus(): number {
    return this.status;
  }

  /**
   * Get the data of the exception
   * @returns response data
   */
  public getData(): Object {
    return this.data;
  }
}
