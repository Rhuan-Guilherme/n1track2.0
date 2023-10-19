import { ref  } from 'vue'
import  axios  from  'axios' ;
import { defineStore } from 'pinia'
import { useLoginStore } from './login';
import { useReturnStore } from '@/stores/returnTickets'
import { useFiltroStore } from './filtroTicket';
const filtroStore = useFiltroStore()
const returnStore = useReturnStore()
const loginSotre = useLoginStore()

export const useDeleteStore = defineStore('delete', () => {
    const ticketId = ref();
    
    const deleteTicket = async (id) => {
        ticketId.value = id 
        fetch(`https://n1track.com/apagarTicket.php?id=${ticketId.value}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(data => {
            console.log(data.message); 
            returnStore.fetchUserData(loginSotre.dadosUsuario.id)
            filtroStore.fetchUserData(loginSotre.dadosUsuario.id)
          })
          .catch(error => {
            console.error('Erro:', error);
          })
         
    }

    const concluiTicket = async (id) => {
        ticketId.value = id
        axios.post("https://n1track.com/concluiTicket.php", { id: ticketId.value })
        .then(response => {
            returnStore.fetchUserData(loginSotre.dadosUsuario.id)
            filtroStore.fetchUserData(loginSotre.dadosUsuario.id)
            if (response.data.success) {
            console.log("Sucesso", response.data)
            } else {
            // Trate erros ou exiba mensagens de erro
            console.error(response.data.message);
            }
        })
        .catch(error => {
            console.error("Erro na solicitação POST:", error);
        });
      }

      const ReturnConcluiTicket = async (id) => {
        ticketId.value = id
        axios.post("https://n1track.com/returnConcluido.php", { id: ticketId.value })
        .then(response => {
            returnStore.fetchUserData(loginSotre.dadosUsuario.id)
            filtroStore.fetchUserData(loginSotre.dadosUsuario.id)
            if (response.data.success) {
            console.log("Sucesso", response.data)
            } else {
            // Trate erros ou exiba mensagens de erro
            console.error(response.data.message);
            }
        })
        .catch(error => {
            console.error("Erro na solicitação POST:", error);
        });
      }


      const nome = ref('');
      const login = ref('');
      const ramal = ref('');
      const patrimonio = ref('');
      const informacao = ref('');
      const local = ref('');
      const chamado = ref('')
      const destinatario = ref('')
      const userId = ref()
      const tipo = ref()

      const retorno = ref()

    const atualizaTicket = async (id) => {
        try {
          console.log("Dados antes da submissão:", nome.value, login.value, ramal.value, patrimonio.value, informacao.value, local.value, userId.value, tipo.value);
          const response = await axios.post("https://n1track.com/updateTicket.php", {
            chamado_id: id,
            nome: nome.value,
            login: login.value,
            ramal: ramal.value,
            patrimonio: patrimonio.value,
            informacao: informacao.value,
            local: local.value,
            chamado: chamado.value,
            destinatario: destinatario.value,
            userId: loginSotre.dadosUsuario.id,
            
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

  return {  deleteTicket, concluiTicket, atualizaTicket, nome, login, ramal, patrimonio, local, informacao, ReturnConcluiTicket  }
})
