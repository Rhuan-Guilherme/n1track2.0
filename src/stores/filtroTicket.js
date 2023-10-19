import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { useLoginStore } from './login';

const loginStore = useLoginStore();

export const useFiltroStore = defineStore('returnFiltro', () => {
  const userData = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const ticketTypeFilter = ref(null); 
  

  const fetchUserData = async (userId) => {
    loading.value = true;
    try {
      let apiUrl = `https://n1track.com//filtroTickets.php?user_id=${userId}`;
      if (ticketTypeFilter.value) {
        apiUrl += `&tipo_ticket=${ticketTypeFilter.value}`;
      }
      const response = await axios.get(apiUrl);
      userData.value = response.data;
      error.value = null;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const setTicketTypeFilter = (type) => {
    ticketTypeFilter.value = type;
    // Recarregue os dados com o novo filtro
    fetchUserData(loginStore.dadosUsuario.id);
  };



  onMounted(() => {
    fetchUserData(loginStore.dadosUsuario.id);
  });

  return { userData, loading, error, fetchUserData, setTicketTypeFilter };
});