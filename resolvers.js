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
        this.teachingAssists = teachingAssists;
    }
}

const courseholder = {};

const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseholder[id]);
    },
    createCourse: ({ input }) => {
        let id = nanoid();
        courseholder[id] = input;
        return new Course(id, input);
    },
    createTeachingAssist: ({ input, courseid }) => {
        let course = courseholder[courseid];
        course.teachingAssists = [...course.teachingAssists, input];
        return new Course(courseid, course);
    },
};
export default resolvers;
