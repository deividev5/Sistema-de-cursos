import {db} from "./client.ts";
import{courses,users,enrollments} from "./schema.ts";
import {fakerPT_BR as faker} from '@faker-js/faker'

async function seed(){
    const userInsert = await db.insert(users).values([
        {name: faker.person.fullName(), email: faker.internet.email()},
        {name: faker.person.fullName(), email: faker.internet.email()},
        {name: faker.person.fullName(), email: faker.internet.email()},
    ]).returning();


    const courseInsert = await db.insert(courses).values([
        {title: faker.lorem.words(4)},
        {title: faker.lorem.words(4)},
    ]).returning();


    await db.insert(enrollments).values([
       {courseId: courseInsert[0].id, userId: userInsert[0].id},
       {courseId: courseInsert[0].id, userId: userInsert[1].id},
       {courseId: courseInsert[1].id, userId: userInsert[2].id},
    ])

    
}

seed();