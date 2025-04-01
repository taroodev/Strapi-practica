/**
 * class service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::class.class');


module.exports={


async controlClases(){


    const numClass= await strapi.db.query('api::teacher.teacher').findMany({
        select: ['NumeroClases']
      });
    
     console.log(numClass)
    




},



};
