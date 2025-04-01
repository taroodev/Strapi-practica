import { factories } from "@strapi/strapi";

const CLASS_SERVICE = "api::class.class";

export default factories.createCoreController(CLASS_SERVICE, () => ({
  async classJoinTeacher(ctx) {
    try {
      const { Name, id } = ctx.params; 


      const classRecord = await strapi.db.query(CLASS_SERVICE).findOne({
        where: { id: id },
      });
      if (!classRecord) {
        return ctx.notFound(`Id  ${id} of class not found`);
      }

     
      const teacher = await strapi.db.query("api::teacher.teacher").findOne({
        where: { Name: Name },
      });
      if (!teacher) {
        return ctx.notFound(`Teacher ${Name} does not exist`);
      }
   
      const teachers = await strapi.db.query("api::teacher.teacher").findMany({
        where: {
          classes: {
            id: classRecord.id,
          },
        },
        populate: {
          classes: true,
        },
      });

      const updatedTeachers = [...teachers, { id: teacher.id }];

     
      await strapi.db.query(CLASS_SERVICE).update({
        where: { id: classRecord.id },
        data: { teachers: updatedTeachers.map((t) => t.id) }, 
      });

      return {
        ok: true,
        mensaje: `Teacher ${Name} joined correctly`,
        clase: classRecord.Name, 
        profesor: teacher.Name, 
      };
    } catch (error) {
      return ctx.badRequest("Error joining teacher", { error: error.message });
    }
  },
}));
