import { Injectable ,HttpException} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {IUser} from '../interfaces/user.interface'
import {UserDto} from '../dtos/user.dto'


@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

    public getUsers(){ 
            return this.userModel.find().exec();
    }

    public async postUsers(user){
        const users= await new this.userModel(user);
        return users.save();
    }
s

    public  async deleteUser(id:number):Promise<any>{
        const user = await this.userModel.deleteOne({ id }).exec();
        if (user.deletedCount === 0) {
          throw new HttpException('Not found',404);
       }
       return user;
    }

    public  async getUserbyId(id:number):Promise<any>{
       const user=this.userModel.find({id}).exec();
       if(!user){
          throw new HttpException('Not found',404);
       }
       else
       return user;
    }

    public  async updateUserById(id:number,property_name:string,property_value:string):Promise<any>{
        
        const propertyName=String(property_name);
        const propertyValue=String(property_value);
        const user = await this.userModel.findOneAndUpdate({ id },{[propertyName]: propertyValue,}) .exec();
         if (!user) {
        throw new HttpException('Not Found', 404);
      }
      return user;
       
}
   

    // public async getListofUsers(id: string): Promise<any> {
    //     const cardId = String(id);
    //     const cars=this.userModel.find({cardId}).exec();
    //     if (!cars) {
    //         throw new HttpException('Not Found', 404);
    //     }
    //     return cars;

    // }
}
