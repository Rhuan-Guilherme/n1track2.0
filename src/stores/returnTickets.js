import { ref, onMounted  } from 'vue'
import { defineStore } from 'pinia'
import  axios  from  'axios' ;
import { useLoginStore } from './login';
const loginSotre = useLoginStore()

export const useReturnStore = defineStore('returnTicket', () => {
    const userData = ref(null);
    const loading = ref(false);
    const error = ref(null);
    
    const fetchUserData = async (userId) => {
        loading.value = true;
        try {
          const response = await axios.get(`https://n1track.com/returnTickets.php?user_id=${userId}`);
          userData.value = response.data;
          error.value = null;
        } catch (err) {
          error.value = err.message;
        } finally {
          loading.value = false;
        }
      };
    
         
      onMounted(() => {
        fetchUserData(loginSotre.dadosUsuario.id);
      });

  return {  userData, loading, error, fetchUserData  }
})
