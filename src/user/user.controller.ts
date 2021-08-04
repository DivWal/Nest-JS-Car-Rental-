import { Controller,Get, Post,Delete,Put,Body, Param,Query } from '@nestjs/common';
import {UserService} from './user.service';
// import {CarService} from '../car/car.service';
import {UserDto} from '../dtos/user.dto'; 

@Controller('user') // base url after localHost
export class UserController {

    constructor(
        private userService: UserService,
        // private carService: CarService,
        ){}

    // end point methods  
    /* how data to be sent over the network  dto files define
    */

      /*
   Implemented CRUD operations 
   */

    @Get()
    public getUsers(){
        return this.userService.getUsers();;
    }

    @Post()
    public  postUsers(@Body() user:UserDto){
        return this.userService.postUsers(user);
    }

    @Delete(':id') // account delete
    public  deleteUser(@Param('id') id:number){
        return  this.userService.deleteUser(id);;
    }

    @Get(':id')
    public  getUserbyId(@Param('id') id:number){
        return this.userService.getUserbyId(id);
    }
    
    @Put(':id')
    public  updateUserById(@Param('id') id:number,@Query() query){
        const property_name=query.property_name;
        const property_value=query.property_value;
        return this.userService.updateUserById(id,property_name,property_value);
    }

   
    

   

}
