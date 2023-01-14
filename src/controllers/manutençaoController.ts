import { Request, Response } from 'express';
import { userInfo } from 'os';
import { createMenuObject } from '../helpers/createMenuObject';
import User from '../models/User';

export const manutenção = async(req:Request, res:Response)=> {
  let usuario = '';
  res.render('pages/manutenção',{
    tituloPagina:'Pagina Manutenção.',
    menu: createMenuObject(''),
    usuario,
    localizar: true
  });
}

export const buscar = async(req:Request, res:Response)=> {
  let usuario = await User.findOne(
    {'fullName.firstName': req.body.firstName},
    {'fullName.lastName': req.body.lastName}
    )
    console.log(usuario);
  res.render('pages/manutenção',{
    tituloPagina:'Pagina Manutenção de Dados.',
    menu: createMenuObject(''),
    usuario:'',
    localizar: true
  });
}
export const upUserAction = async (req:Request, res:Response) => {
  let emptyFields = false;
  let upUser = await User.findOne();
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
      upUser.fullName.firstName = req.body.firstName;
      if(req.body.middleName) {
        upUser.fullName.middleName = req.body.middleName;
      }
      upUser.fullName.lastName = req.body.lastName;
      upUser.age = parseInt(req.body.age);
      upUser.email = req.body.email;
      upUser.interests = interests;
      let resultado = await upUser.save();
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
  res.render('pages/manutenção',{
    emptyFields,
    users
  })
}