export const useModalFilter = () => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return {
    handleModalClick
  };
};