const CONSTANTS = {
    partPrice: 180000,
    wheelPrice: 100000,
      tirePrice: 80000,
    partNames: [
    { name: "앞범퍼", top: "2%", left: "53%" },
    { name: "후드", top: "15%", left: "52%" },
    { name: "휀다(좌)", top: "20%", left: "24%" },
    { name: "휀다(우)", top: "20%", left: "86%" },
    { name: "사이드미러(좌)", top: "37%", left: "40%" },
    { name: "사이드미러(우)", top: "37%", left: "74%" },
    { name: "앞문(좌)", top: "40%", left: "21%" },
    { name: "앞문(우)", top: "40%", left: "87%" },
    { name: "뒷문(좌)", top: "60%", left: "21%" },
    { name: "뒷문(우)", top: "60%", left: "87%" },
    { name: "휀다(좌)", top: "83%", left: "25%" },
    { name: "휀다(우)", top: "83%", left: "85%" },
    { name: "루프", top: "60%", left: "52%" },
    { name: "트렁크", top: "90%", left: "52%" },
    { name: "뒷범퍼", top: "99%", left: "52%" },
    { name: "사이드실(좌)", top: "50%", left: "11%" },
    { name: "사이드실(우)", top: "55%", left: "94%" },
    { name: "필러(좌)", top: "55%", left: "32%" },
    { name: "필러(우)", top: "55%", left: "75%" },
    { name: "휠(FL)", top: "20%", left: "10%" },
    { name: "휠(FR)", top: "20%", left: "94%" },
    { name: "휠(RL)", top: "75%", left: "10%" },
    { name: "휠(RR)", top: "76%", left: "94%" },
    { name: "타이어(FL)", top: "27%", left: "12%" },  
    { name: "타이어(FR)", top: "29%", left: "94%" },
    { name: "타이어(RL)", top: "82%", left: "12%" },
    { name: "타이어(RR)", top: "85%", left: "94%" }
    ],
    
      accidentParts: [
      { name: "후드", rate: 4, top: '2%', left: '50%' },
      { name: "휀다(좌)", rate: 3, top: '18%', left: '20%' },
      { name: "휀다(우)", rate: 3, top: '18%', left: '88%' },
      { name: "앞문(좌)", rate: 6, top: '40%', left: '17%' },
      { name: "앞문(우)", rate: 4, top: '40%', left: '87%' },
      { name: "뒷문(좌)", rate: 4, top: '62%', left: '17%' },
      { name: "뒷문(우)", rate: 4, top: '62%', left: '87%' },
      { name: "F.패널", rate: 5, top: '9%', left: '50%' },
      { name: "인사(좌)", rate: 3, top: '16%', left: '42%' },
      { name: "사이드(좌)", rate: 4, top: '23%', left: '49%' },
      { name: "휠하우스(좌)", rate: 7, top: '28%', left: '44%' },
      { name: "인사(우)", rate: 3, top: '16%', left: '67%' },
      { name: "사이드(우)", rate: 4, top: '23%', left: '64%' },
      { name: "휠하우스(우)", rate: 7, top: '28%', left: '70%' },
      { name: "필러(좌)", rate: 5, top: '55%', left: '30%' },
      { name: "필러(우)", rate: 5, top: '55%', left: '78%' },
      { name: "사이드실(좌)", rate: 4, top: '55%', left: '12%' },
      { name: "사이드실(우)", rate: 4, top: '55%', left: '93%' },
      { name: "크로스멤버", rate: 5, top: '33%', left: '50%' },
      { name: "대쉬패널", rate: 4, top: '39%', left: '50%' },
      { name: "플로어패널", rate: 5, top: '50%', left: '50%' },
      { name: "휠하우스(좌)", rate: 5, top: '81%', left: '44%' },
      { name: "사이드(좌)", rate: 5, top: '86%', left: '48%' },
      { name: "트레이패키지", rate: 4, top: '75%', left: '50%' },
      { name: "사이드(우)", rate: 5, top: '86%', left: '67%' },
      { name: "휠하우스(우)", rate: 7, top: '81%', left: '70%' },
      { name: "루프패널", rate: 8, top: '60%', left: '50%' },
      { name: "트렁크플로어", rate: 4, top: '91%', left: '55%' },
      { name: "R.패널", rate: 4, top: '97%', left: '55%' },
      { name: "트렁크", rate: 4, top: '97%', left: '47%' },
      { name: "쿼터(좌)", rate: 5, top: '85%', left: '22%' },
      { name: "쿼터(우)", rate: 5, top: '85%', left: '85%' },
    ]
  };
        
  // 입력 저장
  function saveInput(id) {
  // 기존 요소들 저장
  const element = document.getElementById(id);
  if (element) {
    localStorage.setItem(id, element.value);
  }

  // 모든 function-price 저장
  document.querySelectorAll('.function-price, .function-desc').forEach(input => {
    const key = input.dataset.key;
    if (key) {
      localStorage.setItem(key, input.value);
    }
  });
}
  function saveCheckboxState() {
    const states = {};
    document.querySelectorAll("input[type='checkbox']").forEach(cb => {
      states[cb.dataset.name] = cb.checked;
    });
    localStorage.setItem('checkboxStates', JSON.stringify(states));
  }
  
  // 불러오기
  function loadInputs() {
  // 기본 항목 로딩
  const baseKeys = [
    'bidPriceInput', 'carNumber', 'carName', 'carMileage',
    'exterior', 'wheelScratch', 'spareKey', 'tire' , 'repair', 'carAdvantage'
  ];
  baseKeys.forEach(id => {
    const el = document.getElementById(id);
    if (el && localStorage.getItem(id)) {
      el.value = localStorage.getItem(id);
    }
  });

  // function 항목 로딩
  document.querySelectorAll('.function-price, .function-desc').forEach(input => {
    const key = input.dataset.key;
    if (key && localStorage.getItem(key)) {
      input.value = localStorage.getItem(key);
    }
  });
autoResize(document.getElementById('carAdvantage'));
}

  function loadCheckboxState() {
    const states = JSON.parse(localStorage.getItem('checkboxStates') || '{}');
    document.querySelectorAll("input[type='checkbox']").forEach(cb => {
      if (states[cb.dataset.name] !== undefined) {
        cb.checked = states[cb.dataset.name];
      }
    });
  }
  
  // 숫자 포맷
  function formatInput(input) {
    input.value = input.value.replace(/[^\d]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  // 숫자 추출
  function getNumericValue(value) {
    return Number(value.replaceAll(',', '')) || 0;
  }
  
function updateAll() {
    const bidPrice = getNumericValue(document.getElementById('bidPriceInput').value) || 0;
    let partDiscount = 0, accidentDiscount = 0, functionDiscount = 0;
    const deductionDetails = [];

    // 🚗 외관 상태 감가 계산 (part 체크박스)
    document.querySelectorAll(".part").forEach(checkbox => {
        const label = checkbox.parentNode;
        if (checkbox.checked) {
            const name = checkbox.dataset.name;
            let discount = 0;
            
            // 🚨 타이어, 휠, 일반 부품 감가 금액 다르게 설정
            if (name.includes('타이어')) {
                discount = CONSTANTS.tirePrice;
            } else if (name.includes('휠')) {
                discount = CONSTANTS.wheelPrice;
            } else {
                discount = CONSTANTS.partPrice;
            }

            partDiscount += discount;
            deductionDetails.push(`${name}: -${discount.toLocaleString()}원`);
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });

    // 🚨 사고 감가 계산 (accident 체크박스)
    document.querySelectorAll(".accident").forEach(checkbox => {
        const label = checkbox.parentNode;
        if (checkbox.checked) {
            const name = checkbox.dataset.name;
            const rate = Number(checkbox.dataset.rate);
            const discount = bidPrice * (rate / 100);

            accidentDiscount += discount;
            deductionDetails.push(`${name} 사고 감가: -${discount.toLocaleString()}원`);
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });

    // 🔧 기능 감가 계산 (function-item 체크박스)
    document.querySelectorAll('.function-item').forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const name = checkbox.dataset.name;
        const priceInput = item.querySelector('.function-price');
        const descInput = item.querySelector('.function-desc');
        
        const price = getNumericValue(priceInput?.value || '');
        const desc = descInput?.value || '';

        if (checkbox.checked && price > 0) {
            functionDiscount += price;
            const detail = desc ? `${name} - ${desc}: -${price.toLocaleString()}원` : `${name}: -${price.toLocaleString()}원`;
            deductionDetails.push(detail);
        }
    });

    // 💰 최종 감가 계산
    const totalDiscount = partDiscount + accidentDiscount + functionDiscount;
    const finalPrice = bidPrice - totalDiscount;

    // 📌 UI 업데이트
    document.getElementById('finalPrice').textContent = finalPrice.toLocaleString();
    document.getElementById('deductionArea').innerHTML = deductionDetails.length
        ? `<h3>감가 세부내역</h3><ul>${deductionDetails.map(d => `<li>${d}</li>`).join('')}</ul>
           <div class="deduction-total">감가 총합계: -${totalDiscount.toLocaleString()}원</div>`
        : '';

    // ✅ 체크박스 상태 저장
    saveCheckboxState();
}
  
  // 체크박스 렌더링
  function renderCheckboxes() {
    const partSection = document.getElementById('partSection');
  CONSTANTS.partNames.forEach(({ name, top, left }) => {
    const label = document.createElement('label');
    label.className = 'checkbox-item';
    label.style.top = top;
    label.style.left = left;
    label.innerHTML = `<input type="checkbox" class="part" data-name="${name}" onclick="updateAll()"> ${name}`;
    partSection.appendChild(label);
  });
  
    const accidentSection = document.getElementById('accidentSection');
    CONSTANTS.accidentParts.forEach(({ name, rate, top, left }) => {
      const label = document.createElement('label');
      label.className = 'checkbox-item';
      label.style.top = top;
      label.style.left = left;
      label.innerHTML = `<input type="checkbox" class="accident" data-name="${name}" data-rate="${rate}" onclick="updateAll()"> ${name}`;
      accidentSection.appendChild(label);
    });
  }
  function setCarType(type) {
  if (type === 'domestic') {
    CONSTANTS.partPrice = 130000;
    CONSTANTS.tirePrice = 90000;
  } else {
    CONSTANTS.partPrice = 180000;
    CONSTANTS.tirePrice = 90000;
  }

  localStorage.setItem('carType', type);
  updateAll();
  updateCarTypeButtons(type);
}

function updateCarTypeButtons(selected) {
  document.getElementById('btnDomestic').classList.toggle('active', selected === 'domestic');
  document.getElementById('btnImported').classList.toggle('active', selected === 'imported');
}

// 초기 로딩 시
window.addEventListener('DOMContentLoaded', () => {
  const savedType = localStorage.getItem('carType') || 'imported';
 setCarType(savedType);        // 입찰가 반영
  renderCheckboxes();           // 체크박스 렌더링
  loadInputs();                 // 입력값 불러오기
  loadCheckboxState();          // 체크박스 상태 불러오기
  updateAll();                  // 감가 계산
});

  
  // 초기화
  function resetAll() {
    localStorage.clear();
    document.querySelectorAll("input[type='text']").forEach(input => input.value = '');
    document.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
    document.querySelectorAll(".checkbox-item").forEach(label => label.classList.remove('selected'));
    document.getElementById('deductionArea').innerHTML = '';
    document.getElementById('carAdvantage').style.height = 'auto';
	updateAll();
  }
   
      function resizeInput(input) {
    input.style.width = (input.value.length + 1) + 'ch';  // 문자 수에 맞게 크기 조정
  }
  function autoResize(textarea) {
  textarea.style.height = 'auto'; // 초기화
  textarea.style.height = (textarea.scrollHeight) + 'px'; // 실제 내용 높이로 조정
}

  
  // 시작
  renderCheckboxes();
  loadInputs();
  loadCheckboxState();
  updateAll();
