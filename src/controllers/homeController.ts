import { Request, Response } from 'express';
import { Product } from '../models/product';
type frase = {
  text: string,
  author: string
};

export const home = (req: Request, res: Response) => {
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
    firstName:'Colin',
    lastName: 'Stephenson',
    showOld,
    products: list,
    priceFilter,
    expensives: expensiveList,
    fraseDoDia: frasesDoDia[fraseDeHoje]
  });
}