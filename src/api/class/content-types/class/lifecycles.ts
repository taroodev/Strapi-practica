import { SourceTextModule } from "vm";

module.exports = {
  afterUpdate: async (event) => {
  const { params } = event;
   
  console.log("params->", params);
  if (params.data.teachers) {
  console.log("params.data.teachers->", params.data.teachers);
  const idTeacherAddCount = params.data.teachers.connect.map(
  (item) => item.id
  );
  const idTeacherDisCount = params.data.teachers.disconnect.map(
  (item) => item.id
  );

  console.log("------------------------------")


  const classService = strapi.service('api::class.class'); 
      await classService.controlClases;

      console.log(classService)


  console.log("------------------------------")
   
  if (idTeacherAddCount.length > 0) {
  console.log("idTeacherAddCount->", idTeacherAddCount);
  const currentTeacher = await strapi.db
  .query("api::teacher.teacher")
  .findOne({
  where: {
  id: idTeacherAddCount,
  },
  populate: { classes: true },
  });
   
  if (!currentTeacher) {
  throw new Error("Class with id ${params.where.id} not found");
  }
   
  console.log("currentTeacher->", currentTeacher);
   
  const currentTeacherCount = currentTeacher.classes.length;
  console.log("currentTeacherCount-> ", currentTeacherCount);
   
  await strapi.db.query("api::teacher.teacher").update({
  where: { id: idTeacherAddCount },
  data: {
  NumeroClases: currentTeacherCount,
  },
  });
  } else if (idTeacherDisCount.length > 0) {
  console.log("idTeacherDisCount->", idTeacherDisCount);
  const currentTeacher = await strapi.db
  .query("api::teacher.teacher")
  .findOne({
  where: {
  id: idTeacherDisCount,
  },
  populate: { classes: true },
  });
   
  if (!currentTeacher) {
  throw new Error("Class with id ${params.where.id} not found");
  }
   
  console.log("currentTeacher->", currentTeacher);
   
  const currentTeacherCount = currentTeacher.classes.length;
  console.log("currentTeacherCount-> ", currentTeacherCount);
   
  await strapi.db.query("api::teacher.teacher").update({
  where: { id: idTeacherDisCount },
  data: {
  NumeroClases: currentTeacherCount,
  },
  });
  }
  }
  },
  };
