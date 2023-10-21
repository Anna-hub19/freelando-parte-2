import { createContext, useContext, useState } from 'react';

const UsuarioInicial = {
    perfil:'',
    interesse:'',
    nomeCompleto:'',
    uf:'',
    cidade:'',
    email:'',
    senha:'',
    senhaConfirmada:''

}

 export const CadastroUsuarioContexto  =  createContext({
   Usuario: UsuarioInicial,
   setPerfil:() => null,
   setInteresse:() => null,
   setNomeCompleto:() => null,
   setUf:() => null,
   setCidade:() => null,
   setEmail:() => null,
   setSenha:() => null,
   setSenhaConfirmada:() => null

})

export const useCadastroUsuarioContext = () => {
    return useContext(CadastroUsuarioContexto);
}

export const CadastroUsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(UsuarioInicial)
    const setPerfil = (perfil) => {
        setUsuario(estadoAnterior => {
                return {
                    ...estadoAnterior,
                    perfil
                }
        })
}
const setInteresse = (interesse) => {
    setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                interesse
            }
    })
}
const setNomeCompleto = (nomeCompleto) => {
    setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                nomeCompleto
            }
    })
}
const setUf = (uf) => {
    setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                uf
            }
    })
}
const setCidade = (cidade) => {
    setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                cidade
            }
    })
}
const setEmail = (email) => {
    setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                email
            }
    })
}
const setSenha = (senha) => {
    setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senha
            }
    })
}
const setSenhaconfirmada = (senhaConfirmada) => {
    setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senhaConfirmada
            }
    })
}


    const contexto = {
       usuario,
       setPerfil,
       setInteresse,
       setNomeCompleto,
       setUf,
       setCidade,
       setEmail,
       setSenha,
       setSenhaconfirmada
    }
    
    return (<CadastroUsuarioContexto.Provider>
            {children}
    </CadastroUsuarioContexto.Provider>
        
        )
}