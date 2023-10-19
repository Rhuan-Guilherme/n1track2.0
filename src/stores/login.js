import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  axios  from  'axios' ;
import { useRouter } from 'vue-router';

export const useLoginStore = defineStore('login', () => {
    const router = useRouter()
    const loading = ref(true)
    const email = ref('')
    const senha = ref('')
    const autenticado = ref(false)
    const dadosUsuario = ref(null)

    if (localStorage.getItem('autenticado')) {
      autenticado.value = JSON.parse(localStorage.getItem('autenticado'))
    }

    if (localStorage.getItem('dadosUsuario')) {
      dadosUsuario.value = JSON.parse(localStorage.getItem('dadosUsuario'))
    }
    
    const logaUsuario = async () => {
        try {
          const response = await axios.post("https://n1track.com/login.php", {
            email: email.value,
            senha: senha.value
          })
          
          email.value = ""
          senha.value = ""

          if(response.data != 'Usuário não encontrado'){
            localStorage.setItem('autenticado', JSON.stringify(true))
            localStorage.setItem('dadosUsuario', JSON.stringify(response.data))
            router.push({ name: 'tickets' });
            autenticado.value = true
          } else{
            autenticado.value = false
          }

          dadosUsuario.value = response.data
          loading.value = true
        } catch (error) {
           console.error("erro ao cadastrar: ", error)
        } finally{
          loading.value = false
        }
    };

    const fazLogout = () => {
      localStorage.removeItem('autenticado')
      localStorage.removeItem('dadosUsuario')
      autenticado.value = false
      dadosUsuario.value = null
      router.push({ name: 'login' })
    }
    
  

  return { logaUsuario, email, senha, dadosUsuario, autenticado, fazLogout, loading }
})
