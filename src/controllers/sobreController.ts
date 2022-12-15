import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import User from '../models/User';



export const sobre = async(req:Request, res:Response)=> {
  
  res.render('pages/Sobre',{
    tituloPagina:'Pagina Sobre.',
    menu: createMenuObject('sobre'),
    
  });
}