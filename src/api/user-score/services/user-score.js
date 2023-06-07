'use strict';

/**
 * user-score service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-score.user-score');
