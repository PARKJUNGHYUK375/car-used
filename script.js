
// 기존 CONSTANTS 및 함수들은 생략 (이미 존재한다고 가정)

window.addEventListener('DOMContentLoaded', () => {
  const savedType = localStorage.getItem('carType') || 'imported';
  setCarType(savedType);

  if (typeof renderCheckboxes === 'function') {
    renderCheckboxes();
  }

  if (typeof loadInputs === 'function') {
    loadInputs();
  }

  if (typeof loadCheckboxState === 'function') {
    loadCheckboxState();
  }

  if (typeof updateAll === 'function') {
    updateAll();
  }
});
