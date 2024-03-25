 import { ReactNode, createContext, useState } from "react";

// type TemaContextType = 'claro' | 'escuro'

// interface TemaContexto {
//     tema: TemaContextType,
//     alternarTema: () => void,
//     Provider: any
// }

// export const TemaContext = createContext<TemaContextType | null>(null);

// interface TemaProviderProps {
//     children: ReactNode;
// }

// export const TemaProvider = ({children}: TemaProviderProps) => {
//     const [tema, setTema] = useState<Tema>('claro');


// const alternarTema = () => {
//     setTema((temaAtual) => (temaAtual == 'claro' ? 'escuro' : 'claro'))
// };

// return (
//     <TemaProvider.Provider value={{ema, alternarTema}}>
//         {children}
//     </TemaProvider.Provider>
// );
// };

interface CurrentUserContextType{
    username: string;
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null);
