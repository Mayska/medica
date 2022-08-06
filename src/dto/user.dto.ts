export class UserDto {
    id: string
    user:string
    constructor(data:any){
        this.id = data.id
        this.user = data.user
    }
}