'use strict';

/**
 * biker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::biker.biker');
