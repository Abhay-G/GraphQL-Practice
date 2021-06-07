import { buildSchema } from 'graphql';

const schema = buildSchema(`
   type Course{
        id: ID
        courseName: String
        category: String
        language: String
        price: Int
        stack: Stack
        teachingAssists: [TeachingAssist]
   }

   type TeachingAssist{
        id: ID
        firstName: String
        lastName: String
        experience: Int
   }

   enum Stack{
        WEB
        MOBILE
        OTHER
   }
   
   type Query{
        getCourse(id: ID): Course
   }

   input CourseInput{
        id: ID!
        courseName: String!
        category: String
        language: String
        price: Int!
        stack: Stack
        teachingAssists: [TeachingAssistInput]!
        }
    input TeachingAssistInput{
        id: ID!
        firstName: String!
        lastName: String
        experience: Int
    }
    type Mutation{
        createCourse(input:CourseInput): Course
    }

`);
export default schema;
