import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import User from '../models/User';



export const manutenção = async(req:Request, res:Response)=> {
  
  res.render('pages/home',{
    tituloPagina:'Pagina Manutenção.',
    menu: createMenuObject(''),
    
  });
}