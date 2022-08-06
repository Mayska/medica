import { z } from "zod"

const userSchema = z.object({
    id:z.optional(z.string()),
    name:z.string()
})
export class User {
    id: string
    name: string
    constructor(data: any) {
        userSchema.parse(data)
        this.id = data.id
        this.name = data.name
    }
}