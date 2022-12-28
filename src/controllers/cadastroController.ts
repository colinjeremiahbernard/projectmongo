import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import User from '../models/User';

export const cadastro = async(req:Request, res:Response)=> {
  
  res.render('pages/home',{
    tituloPagina:'Pagina Cadastro.',
    menu: createMenuObject('cad'),
    
  });
}
export const addUserAction = async (req:Request, res:Response) => {
  let emptyFields = false;
  let newUser = new User();
  if (
    req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.age &&
    req.body.interest
  ) {
    try{
      console.log("Usuario sendo adicionado!!");
      let interests = req.body.interests.split(',');
      newUser.fullName.firstName = req.body.firstName;
      if(req.body.middleName) {
        newUser.fullName.middleName = req.body.middleName;
      }
      newUser.fullName.lastName = req.body.lastName;
      newUser.age = parseInt(req.body.age);
      newUser.email = req.body.email;
      newUser.interests = interests;
      let resultado = await newUser.save();
      console.log('Usuario adicionado com sucesso!');
    } catch (error) {
      console.log("Usuario nao adicionado!!");
    } 
  }else {
    emptyFields = true;
  }
  let users = await User.find({}).sort({
    'fullName.lastName': 1,
    'fullName.firstName': -1
  });
  res.render('pages/cadastro',{
    emptyFields,
    users
  })
}