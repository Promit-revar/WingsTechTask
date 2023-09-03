const { listOrders,createOrder,deleteOrder } = require('../../src/controllers/order.controller'); 

describe('listOrders', () => {
  test('should return a list of orders', async () => {
    const req = { user: { email: 'test@example.com' } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const getOrders = jest.fn(() => ['order1', 'order2']);
    jest.mock('../../src/services/orders.service', () => ({
      getOrders,
    }));

    await listOrders(req, res);

    expect(getOrders).toHaveBeenCalledWith('test@example.com');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      result: ['order1', 'order2'],
    });
  });

});
describe('createOrder', () => {
    test('should create an order', async () => {
      const req = {
        body: { state: "test",country: "test",productIds:[]},
        user: { email: 'test@example.com' },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
  
      const createOrder = jest.fn(() => 'newOrder');
      jest.mock('../../src/services/orders.service', () => ({
        createOrder,
      }));
  
      await createOrder(req, res);
  
      expect(createOrder).toHaveBeenCalledWith(req.body, 'test@example.com');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        result: 'newOrder',
      });
    });

  });
  describe('deleteOrder', () => {
    test('should delete an order', async () => {
      const req = {
        params: { id: 'order123' },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      const deleteOrder = jest.fn(() => 'deletedOrder');
      jest.mock('../../src/services/orders.service', () => ({
        deleteOrder,
      }));
  
      await deleteOrder(req, res);
  
      expect(deleteOrder).toHaveBeenCalledWith('order123');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        result: 'deletedOrder',
      });
    });
  });