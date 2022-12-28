import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import User from '../models/User';

type frase = {
  text: string,
  author: string
};

export const home = async(req:Request, res:Response)=> {
  let users = await User
  .find({})
  .sort({'fullName.lastName':1,
          'fullName.firstName':-1
        })
 
  res.render('pages/home',{
    tituloPagina:'Pagina Principal',
    menu: createMenuObject('home'),
    users
  });
}
