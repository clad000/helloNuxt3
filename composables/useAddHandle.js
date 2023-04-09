export const useAddHandle = () => {
  const count = ref(0);
  const addHandle = ()=>{
    count.value = count.value +1;
  }

  return{
    count,
    addHandle
  }
}
