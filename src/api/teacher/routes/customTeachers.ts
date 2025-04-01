export default {
    routes: [
    {
    method: 'POST',
    path: '/createTeacher',
    handler: 'teacher.createTeacher',
    config: {
    policies: [],
    middlewares: [],
    },
    },
    {
        method: 'GET',
        path: '/teachersEvents/:id',
        handler: 'teacher.getInformationTeacher', 
        config: {
            policies: [],
            middlewares: [],
        },
    },
  
    ],   
    };
    