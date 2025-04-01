module.exports = {
    afterUpdate: async (event) => {
    const { params } = event;
     
    console.log("params->", params);
    if (params.data.classes) {
    console.log(params.data.classes);
    const currentTeacher = await strapi.db
    .query("api::teacher.teacher")
    .findOne({
    where: {
    id: params.where.id,
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
    where: { id: params.where.id },
    data: {
    NumeroClases: currentTeacherCount,
    },
    });
    }
    },
    };