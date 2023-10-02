import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  axios  from  'axios' ;
import { useLoginStore } from './login';
const loginSotre = useLoginStore()

export const useTicketStore = defineStore('ticket', () => {
    const nome = ref('');
    const login = ref('');
    const ramal = ref('');
    const patrimonio = ref('');
    const informacao = ref('');
    const local = ref('');
    const userId = ref()
    const retorno = ref()
    
    const cadastraTicket = async () => {
        try {
          console.log("Dados antes da submissão:", nome.value, login.value, ramal.value, patrimonio.value, informacao.value, local.value, userId.value);
          const response = await axios.post("http://localhost/apiphp/ticket.php", {
            nome: nome.value,
            login: login.value,
            ramal: ramal.value,
            patrimonio: patrimonio.value,
            informacao: informacao.value,
            local: local.value,
            userId: loginSotre.dadosUsuario.id
          })
    
          retorno.value = response.data
          console.log(response.data)
          nome.value = ""
          login.value = ""
          ramal.value = ""
          patrimonio.value = ""
          informacao.value = ""
          local.value = ""

        
    
        } catch (error) {
           console.error("erro ao cadastrar: ", error)
        }
    };

  return { cadastraTicket, retorno, nome, login, ramal, patrimonio, informacao, local, userId  }
})
