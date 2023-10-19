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
    const dateTime = ref()
    

    const cadastraTicket = async (tipoc) => {
      const now = new Date();
      const dia = now.getDate();
      const mes = now.getMonth() + 1;
      const ano = now.getFullYear();
      const hora = now.getHours();
      const minuto = now.getMinutes();
      const segundo = now.getSeconds();
      const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;
      const segundoFormatado = segundo < 10 ? `0${segundo}` : segundo;
      
      dateTime.value = `${dia}/${mes}/${ano} às ${hora}:${minutoFormatado}`;
  


        try {
          const response = await axios.post("https://n1track.com/ticket.php", {
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
            created_at: dateTime.value,
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
