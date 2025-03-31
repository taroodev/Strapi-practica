import { factories } from '@strapi/strapi'
 
 
export default factories.createCoreController('api::teacher.teacher',() => ({
async createTeacher(ctx){

    const { name, lastname, email ,detailsTeacher} = ctx.request.body;
    const newTeacher = await strapi.documents("api::teacher.teacher").create({

    data: {
    name,
    lastname,
    email,
    detailsTeacher,
   
    },
      populate: {
        detailsTeacher: true, 
      },
    });   
    return ctx.send(newTeacher);
},
async getInformationTeacher(ctx) {
    const { id } = ctx.params;  
      const teacher = await strapi.documents('api::teacher.teacher').findOne({
        documentId: id,  
        populate: ["events"],  
      });
     return ctx.send(teacher);
      
  },



async classJoinTeacher(ctx) {
    const CLASS_SERVICE= "api::class.class"
    try {
    const { Name, id } = ctx.params; 
    
    const classRecord = await strapi.db.query(CLASS_SERVICE).findOne({
    where: { id: id },
    });
    if (!classRecord) {
    return ctx.notFound('Clase no encontrada');
    }
    const teacher = await strapi.db.query('api::teacher.teacher').findOne({
    where: { Name: Name }, 
    });
    if (!teacher) {
    return ctx.notFound('Profesor no encontrado');
    }
     
   
    await strapi.db.query(CLASS_SERVICE).update({
    where: { id: classRecord.id }, 
    data: { teacher: teacher.id }, 
    });
     
    return {
    ok: true,
    mensaje: 'Profesor asignado correctamente',
    clase: classRecord.Name, 
    profesor: teacher.Name, 
    };
    } catch (error) {
    return ctx.badRequest('Error al asignar profesor', { error: error.message });
    }
    },
  
  
}));