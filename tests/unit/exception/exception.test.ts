import ZoomInfoException from '../../../src/helpers/Exception/ZoomInfoException';

describe('Exception - Unit Test', () => {
  test('should get exception status', async () => {
    const exception = new ZoomInfoException(500, 'status');
    expect(exception.getStatus()).toEqual(500);
  });

  test('should get exception data', async () => {
    const exception = new ZoomInfoException(500, 'status', {});
    expect(exception.getData()).toEqual({
      status: 500,
      errorMessage: 'status',
      errorData: {},
    });
  });
});
