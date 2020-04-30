'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getTest() {
    this.ctx.body = {
      code: 200,
      msg: 'success',
    };
  }
}

module.exports = HomeController;
