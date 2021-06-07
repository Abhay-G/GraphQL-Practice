import { nanoid } from 'nanoid';

class Course {
    constructor(
        id,
        { courseName, category, price, language, stack, teachingAssists }
    ) {
        this.id = id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.language = language;
        this.stack = stack;
        thisthis.teachingAssists = teachingAssists;
    }
}

const courseholder = {};

const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseholder[id]);
    },
    createCourse: ({ input }) => {
        let id = nonoid();
        courseholder[id] = input[id];
        return new Course(id, input);
    },
};
