'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      data: 'chenjian',
    };
  }
}

module.exports = HomeController;
