import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  axios  from  'axios' ;

export const useCadastroStore = defineStore('cadastro', () => {
    const nome = ref('');
    const email = ref('');
    const senha = ref('');
    const retorno = ref()
    
    const cadastrarUsuario = async () => {
        try {
          console.log("Dados antes da submissão:", email.value, senha.value);
          const response = await axios.post("https://n1track.com/api.php", {
            nome: nome.value,
            email: email.value,
            senha: senha.value
          })
    
          retorno.value = response.data
          console.log(response.data)
          nome.value = ""
          email.value = ""
          senha.value = ""
    
        } catch (error) {
           console.error("erro ao cadastrar: ", error)
        }
    };

  return { cadastrarUsuario, retorno, nome, email, senha  }
})
