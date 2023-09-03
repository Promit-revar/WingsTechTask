const {createOrder, getOrders} = require('../../src/services/orders.service')
describe('getOrders', () => {
    test('should return orders for a user', async () => {
      const email = 'test@example.com';
      const findAndCountAll = jest.fn(() => ({
        count: 2,
        rows: [
          { id: 1, },
          { id: 2, },
        ],
      }));
      jest.spyOn(db.Orders, 'findAndCountAll').mockImplementation(findAndCountAll);
  
      const result = await getOrders(email);
  
      expect(findAndCountAll).toHaveBeenCalledWith({
        where: { userId: email },
      });
      expect(result.count).toBe(2);
      expect(result.rows.length).toBe(2);
    });
  
  });

jest.mock('../../src/services/product.service');
jest.mock('../../src/services/discount.rules.service');
jest.mock('../../src/utils/helper');
jest.mock('../../src/models');

describe('createOrder', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should create an order with applicable tax', async () => {
    const data = {
      productIds: [1, 2],
      country: 'US',
      state: 'NY',
    };

    const email = 'test@example.com';
    getSingleProduct.mockResolvedValue({ id: 1, price: 10  });
    getAllDiscountsForProduct.mockResolvedValue([]);
    calculatePrice.mockReturnValue(0);
    db.Discount_Rules.findOne.mockResolvedValue({ percentage: 10 }); 
    db.Tax_Rules.findOne.mockResolvedValue({ GST: 5, SGST: 5 });
    db.Orders.create.mockResolvedValue({ id: 123 });

    const result = await createOrder(data, email);
    expect(db.Orders.create).toHaveBeenCalledWith({
      ...data,
      userId: email,
      productIds: expect.any(Array),
      overallDiscount: 10,
      amount: expect.any(Number),
      applicableTax: { GST: 5, SGST: 5 },
    });
  });
});