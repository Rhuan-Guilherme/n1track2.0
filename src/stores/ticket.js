import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  axios  from  'axios' ;
import { useLoginStore } from './login';
import { useReturnStore } from '@/stores/returnTickets'
const returnStore = useReturnStore()
const loginSotre = useLoginStore()

export const useTicketStore = defineStore('ticket', () => {
    const nome = ref('');
    const login = ref('');
    const ramal = ref('');
    const patrimonio = ref('');
    const informacao = ref('');
    const local = ref('');
    const chamado = ref('')
    const destinatario = ref('')
    const criador = ref('')
    const userId = ref()
    const tipo = ref()
    
    const retorno = ref()

    const cadastraTicket = async (tipoc) => {
        try {
          console.log("Dados antes da submissão:", nome.value, login.value, ramal.value, patrimonio.value, informacao.value, local.value, userId.value, tipo.value);
          const response = await axios.post("http://localhost/apiphp/ticket.php", {
            nome: nome.value,
            login: login.value,
            ramal: ramal.value,
            patrimonio: patrimonio.value,
            informacao: informacao.value,
            local: local.value,
            chamado: chamado.value,
            destinatario: destinatario.value,
            userId: loginSotre.dadosUsuario.id,
            criador: loginSotre.dadosUsuario.nome,
            tipo: tipoc
          })
    
          retorno.value = response.data
          console.log(response.data)
          nome.value = ""
          login.value = ""
          ramal.value = ""
          patrimonio.value = ""
          informacao.value = ""
          local.value = ""
          chamado.value = ""
          destinatario.value = ""
          
        
          
        } catch (error) {
           console.error("erro ao cadastrar: ", error)
        }finally {
          returnStore.fetchUserData(loginSotre.dadosUsuario.id)
        }
    };

  return { cadastraTicket, retorno, nome, login, ramal, patrimonio, informacao, local, userId, tipo, destinatario, chamado, criador  }
})
