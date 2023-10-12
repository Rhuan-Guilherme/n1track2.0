import { ref  } from 'vue'
import  axios  from  'axios' ;
import { defineStore } from 'pinia'
import { useLoginStore } from './login';
import { useReturnStore } from '@/stores/returnTickets'
const returnStore = useReturnStore()
const loginSotre = useLoginStore()

export const useDeleteStore = defineStore('delete', () => {
    const ticketId = ref();
    
    const deleteTicket = async (id) => {
        ticketId.value = id 
        fetch(`http://localhost/apiphp/apagarTicket.php?id=${ticketId.value}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(data => {
            console.log(data.message); 
            returnStore.fetchUserData(loginSotre.dadosUsuario.id)
          })
          .catch(error => {
            console.error('Erro:', error);
          })
         
    }

    const concluiTicket = async (id) => {
        ticketId.value = id
        axios.post("http://localhost/apiphp/concluiTicket.php", { id: ticketId.value })
        .then(response => {
            returnStore.fetchUserData(loginSotre.dadosUsuario.id)
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

  return {  deleteTicket, concluiTicket  }
})
