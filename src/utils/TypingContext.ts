import { createContext } from 'react';
import { Context } from '../types';
  
export const TypingContext = createContext<Context>({} as Context);