const db = require('../../../../models')

class UserRepository {
  async getUser(id) {
    try {
      const result = await db.user.findByPk(id);
      return result;
    } catch (error) {
      return error;
    }
  }
  async getAddress(address_id) {
    try {
      const result = await db.address.findAll({
        where: { address_id },
        attributes: [
          ['address_name', 'addressName'],
          'street',
          'district',
          'regency',
          'state',
          ['postal_code', 'postalCode'],
          ['lon', 'long'],
          'lat'
        ]
      })
      return result
    } catch (error) {
      return error
    }
  }
}

module.exports = UserRepository