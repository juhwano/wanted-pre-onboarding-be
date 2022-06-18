"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let datas = [];
    for (let i = 1; i <= 10; i++) {
      let obj = {
        name: "test" + i,
        country: "testCountry" + i,
        region: "testRegion" + i,
        createdAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
      };
      datas.push(obj);
    }
    return queryInterface.bulkInsert("company", datas, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
