import faker from "@faker-js/faker"

export default function generateUser(){
    return {
        name: faker.name.findName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        image: faker.image.imageUrl()
    }
}