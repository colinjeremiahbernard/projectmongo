import { Request, Response } from 'express';
import { userInfo } from 'os';
import { Product } from '../models/product';
import User from '../models/User';

type frase = {
  text: string,
  author: string
};

export const home = async(req:Request, res:Response)=> {
  let usuarios = await User.find({'fullName.firstName':"Colin"});
  //let usuarios = await User.find({age:{$lte:30}}).sort({age:1 or -1 for decreasing order});
  //let usuarios = await User.find({age:{$gte:35, $lte:18}}).sort({"fullName, lastName":1});

  console.log('USUARIOS', usuarios)
  let usuarios1 = await User.find({interests: "Programação"});
 
  /*.find({ interest: 'Pizza' })
     gt => greater than -> Maior
     gte => greater than or equal
     lt => lower than
     lte => lower than or equal */
  console.log("USUARIOS",usuarios);
  
  if(usuarios.length > 0){
    let firstName = usuarios[0].firstName;
    let lastName = usuarios[0].lastName;
    let age: number = 35;
  }
  let age: number = 58;
  let showOld: boolean = false;
  let priceFilter: number = 12;
  if (age > 50) {
    showOld = true;
  }
  let frasesDoDia: frase[] = [
   {
    text:'"We cannot solve problems with <br>the kind of thinking we employed <br>when we came up with them."',
    author:'Albert Einstein'
  },
   {
    text:'"Learn as if you will live forever,<br> live like you will die tomorrow."',
   author:'Mahatma Gandhi'
  },
   {
    text:'"When you change your thoughts,<br\> remember to also change your world."',
   author:'Norman Vincent Peale'
  }
    ];
  let fraseDeHoje:number = Math.floor(Math.random()*frasesDoDia.length);
  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(priceFilter);

  res.render('pages/home',{
    titulo:'Pagina Principal',
    firstName:'Colin',
    lastName: 'Stephenson',
    showOld,
    products: list,
    priceFilter,
    expensives: expensiveList,
    fraseDoDia: frasesDoDia[fraseDeHoje]
  });
}